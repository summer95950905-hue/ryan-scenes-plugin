# Ryan Scenes

Ryan Scenes 将用户照片重组为竖版 3:5 纸像海报。当前推荐的 2.2 会直接读图、自动定焦并生成，不再询问叙事焦点、摄影范围或改造力度，也不限制真实照片必须占画面 50% 以上。照片可以主导画面，也可以只保留人物、局部水面、建筑群或其他叙事局部。

所有版本都坚持同场插画、人物与透视保真、主视觉点结构色、红/蓝降级、手撕纤维边缘和无新增文字。

## 选择版本

| 版本 | 交互方式 | 适合场景 |
| --- | --- | --- |
| 2.2 Skill | 无询问，读图后直接生成 | 当前推荐；最快、无 UI、无固定照片占比 |
| 2.0 Plugin | MCP Apps 三题单面板，并保留文字降级 | 仍需要可点击 UI 界面 |

2.1 纯文字询问版保留在仓库中作为历史版本，但不再推荐。

## 安装 2.2 Skill（推荐）

2.2 是独立 Skill，不安装 MCP Server。把下面这句话发给 Codex：

```text
Use $skill-installer to install https://github.com/summer95950905-hue/ryan-scenes-plugin/tree/main/skills/ryan-scenes-v2-2
```

也可以在终端安装：

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo summer95950905-hue/ryan-scenes-plugin \
  --path skills/ryan-scenes-v2-2
```

安装后新建一个任务，附上照片并调用 `$ryan-scenes-v2-2`。

## 安装 2.0 Plugin（需要 UI 时）

```bash
codex plugin marketplace add summer95950905-hue/ryan-scenes-plugin
codex plugin add ryan-scenes@ryan-scenes
```

安装后新建一个任务，附上照片并调用 `$ryan-scenes-v2-0`。支持 MCP Apps 的界面会显示三题单面板；其他界面会收到一次性的文字选项。

## 2.2 更新内容

- 完整移除生成前的偏好询问，不再展示 UI 面板或文字选项。
- 不再等待用户选择叙事焦点、摄影范围和改造力度；Skill 根据原图的视觉重量、语义最小集、主导动势与情绪自动判断并直接生成。
- 取消“真实照片至少占画面 50%”的硬限制，也不设置其他固定的照片最小或最大占比。
- 真实照片可覆盖大部分画面，也可只保留人物、局部水面、建筑群、其他焦点局部或相连碎片；判断标准改为叙事清晰度、场景识别度和视觉平衡。
- 仍默认使用竖版 3:5 成品画布；此次取消的是照片在画面中的面积限制，不是成品宽高比。
- 保留同场插画、人物身份与姿态保真、原始透视和光色、主视觉点高饱和结构色及红/蓝降级、手撕纤维边缘、复杂细节压缩和无新增文字等规则。

## 开发与验证

2.0 Plugin 已提交编译后的 MCP Server 和单文件 UI，因此使用者不需要安装 npm 依赖。修改 2.0 源码时运行：

```bash
cd plugins/ryan-scenes
npm install
npm run build
npm run check
```

2.2 Skill 位于 `skills/ryan-scenes-v2-2/`，不包含运行时依赖。照片不会被 Skill 额外上传、保存或提交到仓库。
