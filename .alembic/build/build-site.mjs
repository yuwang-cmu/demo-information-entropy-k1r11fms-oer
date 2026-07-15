#!/usr/bin/env node
/**
 * Standalone static-site build for an Alembic OER package.
 *
 * Depends ONLY on orz-markdown (public npm) — it rebuilds the public site
 * without Alembic, so this repository is usable as a plain Git repo. Run from
 * the repository root:
 *
 *   npm --prefix .alembic/build install
 *   node .alembic/build/build-site.mjs
 *
 * Output goes to ./_site (index.html + worksheets/*.html), ready for any
 * static host or the committed GitHub Actions workflow.
 */
import {
  readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync,
} from "node:fs";
import { join, basename } from "node:path";
import { createRequire } from "node:module";
import { md } from "orz-markdown";

const require = createRequire(import.meta.url);
const ROOT = process.cwd();
const OUT = join(ROOT, "_site");
const KATEX = "https://cdn.jsdelivr.net/npm/katex@0.16.35/dist/katex.min.css";

// orz-markdown ships its themes; inline the dark-elegant theme + its common base.
function themeCss() {
  const darkPath = require.resolve("orz-markdown/themes/dark-elegant-1.css");
  const dir = darkPath.slice(0, darkPath.lastIndexOf("/"));
  const common = readFileSync(join(dir, "common.css"), "utf8");
  const dark = readFileSync(darkPath, "utf8");
  return dark.replace(/@import\s+['"]\.\/common\.css['"];/, common);
}
const THEME = themeCss();

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function doc(title, bodyHtml) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<link rel="stylesheet" href="${KATEX}">
<style>${THEME}</style></head>
<body><div class="markdown-body">
${bodyHtml}
</div></body></html>
`;
}

const read = (p) => (existsSync(p) ? readFileSync(p, "utf8") : "");
function listMd(dir) {
  const d = join(ROOT, dir);
  if (!existsSync(d)) return [];
  return readdirSync(d).filter((f) => f.endsWith(".md")).sort()
    .map((f) => ({ slug: basename(f, ".md"), path: join(d, f) }));
}

const manifest = existsSync(join(ROOT, "alembic.json"))
  ? JSON.parse(read(join(ROOT, "alembic.json"))) : {};
const title = manifest.title || "Open educational resource";

const chapters = listMd("study-guide");
const worksheets = listMd("materials/worksheets");

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "worksheets"), { recursive: true });

let indexBody = `<h1>${esc(title)}</h1>\n`;
for (const ch of chapters) indexBody += md.render(read(ch.path)) + "\n";
if (worksheets.length) {
  indexBody += "<hr>\n<h2>Worksheets</h2>\n<ul>\n";
  for (const w of worksheets)
    indexBody += `<li><a href="worksheets/${w.slug}.html">${esc(w.slug)}</a></li>\n`;
  indexBody += "</ul>";
}
writeFileSync(join(OUT, "index.html"), doc(title, indexBody));

for (const w of worksheets) {
  const body = `<p><a href="../index.html">← ${esc(title)}</a></p>\n` + md.render(read(w.path));
  writeFileSync(join(OUT, "worksheets", `${w.slug}.html`), doc(w.slug, body));
}

writeFileSync(join(OUT, ".nojekyll"), "");
console.log(`Built ${1 + worksheets.length} page(s) to _site/`);
