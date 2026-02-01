import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const version = "v1"

const BASENAME = '/web-js-cache';
// const BASENAME = '/';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASENAME,
  build: {
      rollupOptions: {
        output: {
          entryFileNames: `${version}/[name]-[hash].js`,
          chunkFileNames: `${version}/[name]-[hash].js`,
          assetFileNames: `${version}/[name]-[hash][extname]`
        },
      },
    }
})
