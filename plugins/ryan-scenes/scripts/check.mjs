import assert from "node:assert/strict";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const transport = new StdioClientTransport({
  command: process.execPath,
  args: [join(pluginRoot, "dist/server.mjs")],
});
const client = new Client({ name: "ryan-scenes-check", version: "1.0.0" });

try {
  await client.connect(transport);

  const tools = await client.listTools();
  assert.deepEqual(
    tools.tools.map((tool) => tool.name).sort(),
    ["open_scene_preferences", "submit_scene_preferences"],
  );

  const opened = await client.callTool({
    name: "open_scene_preferences",
    arguments: {
      sceneSummary: "一个人物站在岸边，水面形成主要空间延伸。",
      narrativeOptions: [
        { id: "person", label: "岸边人物", description: "以人物姿态作为叙事中心。" },
        { id: "water", label: "水面与海岸", description: "突出水面和岸线的空间关系。" },
        { id: "gaze", label: "人物望向水面", description: "强调人物与水面的视线联系。" },
      ],
      recommendedNarrativeId: "gaze",
      recommendedScope: "core",
      recommendedIntervention: "balanced",
    },
  });
  assert.equal(opened.structuredContent.state, "awaiting_selection");
  assert.equal(opened.structuredContent.questions.length, 3);
  assert.equal(opened.structuredContent.questions[0].options[0].id, "gaze");
  assert.match(opened.content[0].text, /1A 2B 3A/);

  const resource = await client.readResource({
    uri: "ui://ryan-scenes/preferences-v1.html",
  });
  assert.equal(resource.contents[0].mimeType, "text/html;profile=mcp-app");
  assert.match(resource.contents[0].text, /确认并继续/);
  assert.doesNotMatch(resource.contents[0].text, /__RYAN_SCENES_UI_BUNDLE__/);

  const submitted = await client.callTool({
    name: "submit_scene_preferences",
    arguments: {
      narrativeFocus: { id: "gaze", label: "人物望向水面" },
      photographicScope: "core",
      interventionLevel: "balanced",
    },
  });
  assert.equal(submitted.structuredContent.state, "submitted");
  assert.match(submitted.structuredContent.summary, /人物望向水面/);

  console.log("MCP tools, UI resource, recommendation order, and submission passed.");
} finally {
  await client.close();
}
