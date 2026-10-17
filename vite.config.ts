import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';

// Preload the two Latin font files used above the fold so text paints in the right face quickly.
const preloadFonts = (): Plugin => ({
  name: 'preload-latin-fonts',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      if (!ctx.bundle) return html;
      const files = Object.keys(ctx.bundle).filter((f) => /(inter-latin-wght-normal|source-serif-4-latin-opsz-normal)-[\w-]+\.woff2$/.test(f));
      const tags = files.map((f) => `<link rel="preload" href="/${f}" as="font" type="font/woff2" crossorigin>`).join('\n    ');
      return html.replace('</title>', `</title>\n    ${tags}`);
    },
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), preloadFonts()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
