# Ryan Scenes

Ryan Scenes 将用户照片重组为竖版 3:5 纸像海报。两个版本使用同一套视觉规则：可辨认的真实照片始终覆盖画面至少 50%，允许只保留人物或局部水面，只使用来自同一场景的插画延伸，并采用一种取自主视觉点的高饱和结构色；视觉点颜色不可读时，只选择饱和红或饱和蓝之一。

## 选择版本

| 版本 | 交互方式 | 适合场景 |
| --- | --- | --- |
| 2.1 Skill | 一次显示三项纯文字选项 | 推荐；启动更快，不需要 UI 界面 |
| 2.0 Plugin | MCP Apps 三题单面板，并保留文字降级 | 需要可点击 UI 界面 |

## 安装 2.1 Skill（推荐）

2.1 是独立 Skill，不安装 MCP Server，也不调用插件 UI 或 `request_user_input`。把下面这句话发给 Codex：

```text
Use $skill-installer to install https://github.com/summer95950905-hue/ryan-scenes-plugin/tree/main/skills/ryan-scenes-v2-1
```

也可以在终端安装：

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo summer95950905-hue/ryan-scenes-plugin \
  --path skills/ryan-scenes-v2-1
```

安装后新建一个任务，附上照片并调用 `$ryan-scenes-v2-1`。

## 安装 2.0 Plugin（需要 UI 时）

```bash
codex plugin marketplace add summer95950905-hue/ryan-scenes-plugin
codex plugin add ryan-scenes@ryan-scenes
```

安装后新建一个任务，附上照片并调用 `$ryan-scenes-v2-0`。支持 MCP Apps 的界面会显示三题单面板；其他界面会收到一次性的文字选项。

## 2.1 更新内容

- 移除生成前的 MCP Apps UI 调用，避免交互面板加载较慢。
- 不再调用 `request_user_input` 或其他交互式选择工具。
- 读图后仍动态生成三个具体叙事焦点，并将叙事焦点、摄影范围和改造力度一次写在同一段文字菜单中。
- 推荐项仍排在第一位并明确标记；收到用户文字回复后才开始生成。
- 保留 2.0 的全部视觉规则：照片至少 50%、允许只保留人物或局部水面、同场插画、主视觉点结构色及红/蓝降级、手撕纤维边缘、无新增文字。

## 开发与验证

2.0 Plugin 已提交编译后的 MCP Server 和单文件 UI，因此使用者不需要安装 npm 依赖。修改 2.0 源码时运行：

```bash
cd plugins/ryan-scenes
npm install
npm run build
npm run check
```

2.1 Skill 位于 `skills/ryan-scenes-v2-1/`，不包含运行时依赖。照片不会被偏好面板或 Skill 额外上传、保存或提交到仓库。
