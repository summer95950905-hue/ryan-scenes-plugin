import { App } from "@modelcontextprotocol/ext-apps";

const app = new App({ name: "Ryan Scenes Preferences", version: "2.0.0" });
const form = document.querySelector("form");
const title = document.querySelector("h1");
const summary = document.querySelector(".scene-summary");
const questionsRoot = document.querySelector(".questions");
const submitButton = document.querySelector("button[type='submit']");
const status = document.querySelector(".status");
const fallback = document.querySelector(".fallback");

let payload;

function escapeText(value) {
  return String(value ?? "");
}

function renderQuestion(question, index) {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${escapeText(question.prompt)}`;
  fieldset.appendChild(legend);

  const optionList = document.createElement("div");
  optionList.className = "option-list";

  question.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.className = "option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = option.id;
    input.dataset.label = option.label;
    input.checked = optionIndex === 0;

    const marker = document.createElement("span");
    marker.className = "radio-marker";
    const copy = document.createElement("span");
    copy.className = "option-copy";
    const heading = document.createElement("span");
    heading.className = "option-heading";
    heading.textContent = option.label;
    if (option.recommended) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = "推荐";
      heading.appendChild(badge);
    }
    const description = document.createElement("span");
    description.className = "option-description";
    description.textContent = option.description;

    copy.append(heading, description);
    label.append(input, marker, copy);
    optionList.appendChild(label);
  });

  fieldset.appendChild(optionList);
  return fieldset;
}

function render(nextPayload) {
  if (!nextPayload?.questions?.length) return;
  payload = nextPayload;
  title.textContent = nextPayload.title ?? "确定这张照片的处理方向";
  summary.textContent = nextPayload.sceneSummary ?? "";
  questionsRoot.replaceChildren(
    ...nextPayload.questions.map((question, index) => renderQuestion(question, index)),
  );
  form.hidden = false;
  status.textContent = "三项一次提交，推荐选项已预先选中。";
}

function selectedValue(name) {
  return form.elements.namedItem(name)?.value;
}

function selectedLabel(name) {
  return form.querySelector(`input[name="${name}"]:checked`)?.dataset.label;
}

async function copyFallback(text) {
  fallback.hidden = false;
  fallback.querySelector("textarea").value = text;
  try {
    await navigator.clipboard.writeText(text);
    fallback.querySelector("p").textContent = "自动回传不可用，选择结果已复制，请粘贴到对话框。";
  } catch {
    fallback.querySelector("p").textContent = "自动回传不可用，请复制下面的选择结果并发送。";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!payload) return;

  const narrativeFocus = {
    id: selectedValue("narrativeFocus"),
    label: selectedLabel("narrativeFocus"),
  };
  const photographicScope = selectedValue("photographicScope");
  const interventionLevel = selectedValue("interventionLevel");

  submitButton.disabled = true;
  submitButton.textContent = "正在确认…";
  status.textContent = "正在把选择交回对话。";

  try {
    const result = await app.callServerTool({
      name: "submit_scene_preferences",
      arguments: { narrativeFocus, photographicScope, interventionLevel },
    });
    const submitted = result.structuredContent;
    const message = `我的选择：${submitted.summary} 请按这些选项继续生成。`;

    await app.updateModelContext({
      content: [
        {
          type: "text",
          text: `Ryan Scenes 用户偏好（已确认）：\n${JSON.stringify(submitted.selection, null, 2)}`,
        },
      ],
    });
    const sent = await app.sendMessage({
      role: "user",
      content: [{ type: "text", text: message }],
    });
    if (sent?.isError) throw new Error("Host rejected ui/message");

    form.classList.add("submitted");
    submitButton.textContent = "已确认";
    status.textContent = submitted.summary;
  } catch (error) {
    const message = `我的选择：叙事焦点「${narrativeFocus.label}」；摄影范围「${selectedLabel("photographicScope")}」；改造力度「${selectedLabel("interventionLevel")}」。请按这些选项继续生成。`;
    submitButton.disabled = false;
    submitButton.textContent = "重新提交";
    status.textContent = "当前宿主无法自动回传。";
    await copyFallback(message);
  }
});

app.ontoolresult = (result) => render(result.structuredContent);
app.connect().catch((error) => {
  status.textContent = "当前宿主无法连接交互面板，请使用对话中的文字选项。";
  console.error(error);
});
