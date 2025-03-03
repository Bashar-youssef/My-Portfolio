import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Your Vite configuration here
  server: {
    hmr: true,  // Optional: If you want to enable HMR (Hot Module Replacement)
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.js'),
  },
});
