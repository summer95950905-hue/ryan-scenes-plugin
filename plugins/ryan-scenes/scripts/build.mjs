import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { build } from "esbuild";

const pluginRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = join(pluginRoot, "dist");
await mkdir(distDirectory, { recursive: true });
const cleanText = (value) => value.replace(/[ \t]+$/gm, "").replace(/\n+$/, "\n");

const uiBundle = await build({
  entryPoints: [join(pluginRoot, "ui/preferences.js")],
  bundle: true,
  format: "iife",
  target: "es2022",
  minify: true,
  write: false,
});
const uiJavaScript = uiBundle.outputFiles[0].text.replaceAll("</script", "<\\/script");
const uiTemplate = await readFile(join(pluginRoot, "ui/preferences.html"), "utf8");
const widgetHtml = uiTemplate.replace(
  "/*__RYAN_SCENES_UI_BUNDLE__*/",
  () => uiJavaScript,
);
await writeFile(join(distDirectory, "preferences.html"), cleanText(widgetHtml), "utf8");

await build({
  entryPoints: [join(pluginRoot, "server/index.js")],
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node20",
  outfile: join(distDirectory, "server.mjs"),
  banner: {
    js: "import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);",
  },
});
const serverPath = join(distDirectory, "server.mjs");
await writeFile(serverPath, cleanText(await readFile(serverPath, "utf8")), "utf8");

console.log("Built dist/server.mjs and dist/preferences.html");
