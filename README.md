# Ryan Scenes Plugin

Ryan Scenes 将用户照片重组为竖版 3:5 纸像海报。插件先读取照片，再用一个交互面板一次确认：

- 根据照片动态生成的叙事焦点；
- 摄影范围，包括只保留人物或局部水面；
- 克制、均衡或大胆的改造力度。

生成规则要求可辨认的真实照片始终覆盖画面至少 50%，只使用来自同一场景的插画延伸，并采用一种取自主视觉点的高饱和结构色；视觉点颜色不可读时，只选择饱和红或饱和蓝之一。

## 安装

```bash
codex plugin marketplace add summer95950905-hue/ryan-scenes-plugin
codex plugin add ryan-scenes@ryan-scenes
```

安装后请新建一个任务，并附上照片调用 `$ryan-scenes-v2-0`。支持 MCP Apps 的界面会显示三题单面板；其他界面会收到一次性的文字选项。

## 开发与验证

插件已提交编译后的 MCP Server 和单文件 UI，因此使用者不需要安装 npm 依赖。修改源码时运行：

```bash
cd plugins/ryan-scenes
npm install
npm run build
npm run check
```

照片不会被偏好面板上传或保存；面板只接收模型从当前照片中提炼出的文字选项。
