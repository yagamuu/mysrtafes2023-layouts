import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import NodeCGPlugin from 'vite-plugin-nodecg';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      autoImportComponentCase: 'kebab',
    }),
    checker({ vueTsc: { tsconfigPath: 'tsconfig.browser.json' } }),
    NodeCGPlugin(),
  ],
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      '@mysrtafes2023-layouts': `${__dirname}/src/`
    },
  }
});