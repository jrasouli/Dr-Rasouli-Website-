// Post-build step: render each route to static HTML so crawlers get real text and meta tags
// without running JavaScript. The client bundle still takes over normally in the browser.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, ROUTES } = await import(pathToFileURL(ssrEntry).href);
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// React 19 emits <title>/<meta>/<link> from components inline in the markup.
// Lift them into <head> (tagged data-prerender so the client can drop them before re-rendering).
const HEAD_TAG = /<(title)[^>]*>[\s\S]*?<\/title>|<(meta|link)\b[^>]*\/?>/g;

for (const route of ROUTES) {
  const appHtml = render(route);
  const headTags = [];
  const body = appHtml.replace(HEAD_TAG, (tag) => {
    headTags.push(tag.replace(/^<(\w+)/, '<$1 data-prerender=""'));
    return '';
  });
  if (!headTags.some((t) => t.startsWith('<title'))) {
    throw new Error(`Prerender of ${route} produced no <title>`);
  }

  let html = template
    // Page-specific title/description replace the generic ones from index.html.
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace('</head>', `  ${headTags.join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outFile = route === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${route} -> ${path.relative(root, outFile)}`);
}

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
