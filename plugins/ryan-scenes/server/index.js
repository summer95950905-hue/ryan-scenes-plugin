import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  registerAppResource,
  registerAppTool,
  RESOURCE_MIME_TYPE,
} from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";

const server = new McpServer(
  { name: "ryan-scenes", version: "2.0.0" },
  {
    instructions:
      "After inspecting the user's photo, derive three concrete narrative-focus options from visible content, then call open_scene_preferences once with all unresolved preferences. Wait for the user's submitted selection before generating. If the host cannot render MCP Apps UI, present the text fallback returned by the tool and wait for a compact reply.",
  },
);

const RESOURCE_URI = "ui://ryan-scenes/preferences-v1.html";
const moduleDirectory = dirname(fileURLToPath(import.meta.url));
const widgetHtml = readFileSync(join(moduleDirectory, "preferences.html"), "utf8");

const narrativeOptionSchema = z.object({
  id: z.string().min(1).max(48),
  label: z.string().min(1).max(24),
  description: z.string().min(1).max(80),
});

const scopeOptions = [
  {
    id: "complete",
    label: "完整场景",
    description: "保留核心对象及其成立所需的环境关系。",
  },
  {
    id: "core",
    label: "核心局部",
    description: "可只保留人物、局部水面或其他焦点，并扩展至照片面积至少 50%。",
  },
  {
    id: "fragments",
    label: "碎片组合",
    description: "用相连的不规则照片碎片共同覆盖至少 50%。",
  },
];

const interventionOptions = [
  {
    id: "balanced",
    label: "均衡重组",
    description: "中等抽象、清晰撕纸交接与克制的结构色。",
  },
  {
    id: "restrained",
    label: "克制保真",
    description: "保留更多真实语境，降低插画与结构色密度。",
  },
  {
    id: "bold",
    label: "大胆抽象",
    description: "强化裁切与图形重组，同时守住照片至少 50%。",
  },
];

function recommendedFirst(options, recommendedId) {
  return options
    .map((option) => ({ ...option, recommended: option.id === recommendedId }))
    .sort((left, right) => Number(right.recommended) - Number(left.recommended));
}

function makeTextFallback(questions) {
  const lines = ["交互面板不可见时，请一次回复三个选项，例如：1A 2B 3A。"];
  questions.forEach((question, questionIndex) => {
    lines.push(`${questionIndex + 1}. ${question.prompt}`);
    question.options.forEach((option, optionIndex) => {
      const letter = String.fromCharCode(65 + optionIndex);
      const recommendation = option.recommended ? "（推荐）" : "";
      lines.push(`   ${letter}. ${option.label}${recommendation} — ${option.description}`);
    });
  });
  return lines.join("\n");
}

registerAppResource(
  server,
  "ryan-scenes-preferences",
  RESOURCE_URI,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => ({
    contents: [
      {
        uri: RESOURCE_URI,
        mimeType: RESOURCE_MIME_TYPE,
        text: widgetHtml,
        _meta: {
          ui: {
            prefersBorder: true,
            csp: { connectDomains: [], resourceDomains: [] },
          },
          "openai/widgetDescription":
            "一次选择叙事焦点、摄影范围和改造力度的 Ryan Scenes 面板。",
          "openai/widgetPrefersBorder": true,
        },
      },
    ],
  }),
);

registerAppTool(
  server,
  "open_scene_preferences",
  {
    title: "选择 Ryan Scenes 生成偏好",
    description:
      "Inspect the photo first, derive three concrete narrative-focus options from visible content, then call this exactly once to show narrative focus, photographic scope, and intervention level in one panel. Do not call it after the preferences are already resolved.",
    inputSchema: {
      sceneSummary: z.string().min(1).max(160),
      narrativeOptions: z.array(narrativeOptionSchema).length(3),
      recommendedNarrativeId: z.string().min(1).max(48),
      recommendedScope: z.enum(["complete", "core", "fragments"]).default("complete"),
      recommendedIntervention: z
        .enum(["balanced", "restrained", "bold"])
        .default("balanced"),
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: false,
      idempotentHint: true,
    },
    _meta: {
      ui: { resourceUri: RESOURCE_URI },
      "openai/outputTemplate": RESOURCE_URI,
      "openai/toolInvocation/invoking": "正在打开偏好面板…",
      "openai/toolInvocation/invoked": "偏好面板已打开",
    },
  },
  async ({
    sceneSummary,
    narrativeOptions,
    recommendedNarrativeId,
    recommendedScope,
    recommendedIntervention,
  }) => {
    if (!narrativeOptions.some((option) => option.id === recommendedNarrativeId)) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: "recommendedNarrativeId 必须对应 narrativeOptions 中的一个 id。",
          },
        ],
      };
    }

    const questions = [
      {
        id: "narrativeFocus",
        prompt: "这张照片你最想讲什么？",
        options: recommendedFirst(narrativeOptions, recommendedNarrativeId),
      },
      {
        id: "photographicScope",
        prompt: "你希望哪些内容保留为真实照片？",
        options: recommendedFirst(scopeOptions, recommendedScope),
      },
      {
        id: "interventionLevel",
        prompt: "你希望改造力度有多大？",
        options: recommendedFirst(interventionOptions, recommendedIntervention),
      },
    ];

    return {
      structuredContent: {
        state: "awaiting_selection",
        title: "确定这张照片的处理方向",
        sceneSummary,
        questions,
      },
      content: [
        {
          type: "text",
          text:
            "已准备三项偏好，等待用户在同一面板中提交。不要在收到选择前开始生成。\n\n" +
            makeTextFallback(questions),
        },
      ],
    };
  },
);

registerAppTool(
  server,
  "submit_scene_preferences",
  {
    title: "提交 Ryan Scenes 生成偏好",
    description:
      "Validate and return the three choices submitted from the Ryan Scenes preference panel.",
    inputSchema: {
      narrativeFocus: z.object({
        id: z.string().min(1).max(48),
        label: z.string().min(1).max(24),
      }),
      photographicScope: z.enum(["complete", "core", "fragments"]),
      interventionLevel: z.enum(["balanced", "restrained", "bold"]),
    },
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      openWorldHint: false,
      idempotentHint: true,
    },
    _meta: {
      "openai/toolInvocation/invoking": "正在保存选择…",
      "openai/toolInvocation/invoked": "选择已确认",
      ui: { visibility: ["app"] },
    },
  },
  async ({ narrativeFocus, photographicScope, interventionLevel }) => {
    const scope = scopeOptions.find((option) => option.id === photographicScope);
    const intervention = interventionOptions.find(
      (option) => option.id === interventionLevel,
    );
    const selection = {
      narrativeFocus,
      photographicScope: { id: photographicScope, label: scope.label },
      interventionLevel: { id: interventionLevel, label: intervention.label },
    };
    const summary = `叙事焦点「${narrativeFocus.label}」；摄影范围「${scope.label}」；改造力度「${intervention.label}」。`;

    return {
      structuredContent: { state: "submitted", selection, summary },
      content: [{ type: "text", text: `用户已确认：${summary}` }],
    };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);
