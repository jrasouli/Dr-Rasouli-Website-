// Write public/sitemap.xml lastmod values from git history.
// A shallow clone (no useful history) leaves the committed sitemap in place.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(root, 'public', 'sitemap.xml');

const PAGES = [
  { loc: 'https://rasouli-md.com/', changefreq: 'weekly', priority: '1.0', files: ['pages/Home.tsx', 'components/schema.ts'] },
  { loc: 'https://rasouli-md.com/about', changefreq: 'monthly', priority: '0.8', files: ['pages/About.tsx'] },
  { loc: 'https://rasouli-md.com/statement', changefreq: 'monthly', priority: '0.7', files: ['pages/Statement.tsx'] },
  { loc: 'https://rasouli-md.com/credentials', changefreq: 'monthly', priority: '0.9', files: ['pages/Credentials.tsx'] },
  { loc: 'https://rasouli-md.com/global-work', changefreq: 'monthly', priority: '0.7', files: ['pages/GlobalWork.tsx'] },
  { loc: 'https://rasouli-md.com/news', changefreq: 'weekly', priority: '0.8', files: ['pages/News.tsx'] },
  { loc: 'https://rasouli-md.com/media', changefreq: 'monthly', priority: '0.8', files: ['pages/Media.tsx'] },
  { loc: 'https://rasouli-md.com/services', changefreq: 'monthly', priority: '0.9', files: ['pages/Services.tsx'] },
  { loc: 'https://rasouli-md.com/philosophy', changefreq: 'monthly', priority: '0.8', files: ['pages/philosophy/Landing.tsx', 'components/philosophy/schema.ts', 'components/philosophy/ui.tsx'] },
  { loc: 'https://rasouli-md.com/philosophy/cervical-stenosis', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/CervicalStenosis.tsx', 'components/philosophy/schema.ts'] },
  { loc: 'https://rasouli-md.com/philosophy/lumbar-stenosis', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/LumbarStenosis.tsx', 'components/philosophy/schema.ts'] },
  { loc: 'https://rasouli-md.com/philosophy/herniated-disc', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/HerniatedDisc.tsx', 'components/philosophy/schema.ts'] },
  { loc: 'https://rasouli-md.com/philosophy/fusion-vs-disc-replacement', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/FusionVsDisc.tsx', 'components/philosophy/schema.ts'] },
  { loc: 'https://rasouli-md.com/philosophy/spinal-deformity', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/SpinalDeformity.tsx', 'components/philosophy/schema.ts'] },
  { loc: 'https://rasouli-md.com/philosophy/compression-fractures', changefreq: 'monthly', priority: '0.7', files: ['pages/philosophy/CompressionFractures.tsx', 'components/philosophy/schema.ts', 'components/philosophy/ui.tsx'] },
];

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

function historyCount() {
  try {
    return Number(git(['rev-list', '--count', 'HEAD']));
  } catch {
    return 0;
  }
}

function lastmod(files) {
  let newest = '';
  for (const file of files) {
    const abs = path.join(root, file);
    let date = '';
    let dirty = false;
    try {
      dirty = git(['status', '--porcelain', '--', file]).length > 0;
    } catch {
      dirty = false;
    }
    if (dirty && fs.existsSync(abs)) {
      date = fs.statSync(abs).mtime.toISOString().slice(0, 10);
    } else {
      try {
        date = git(['log', '-1', '--format=%cs', '--', file]);
      } catch {
        date = '';
      }
    }
    if (date && date > newest) newest = date;
  }
  return newest;
}

if (historyCount() < 8) {
  console.log('sitemap: git history is too shallow; leaving public/sitemap.xml unchanged');
  process.exit(0);
}

const urls = PAGES.map((page) => {
  const mod = lastmod(page.files);
  if (!mod) throw new Error(`No lastmod for ${page.loc} (${page.files.join(', ')})`);
  return `  <url>\n    <loc>${page.loc}</loc>\n    <lastmod>${mod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
fs.writeFileSync(outFile, xml);
console.log(`sitemap: wrote ${PAGES.length} urls`);
