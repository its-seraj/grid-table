import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  basePath: './',
  base:"./",
  plugins: [react(),mkcert()],
  esbuild: {
    minify: true,
    minifySyntax: true
  },
  build: {
    minify: true,
    reportCompressedSize:true
  }
})
