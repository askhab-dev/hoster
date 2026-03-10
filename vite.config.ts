import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    allowedHosts: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/app/styles/breakpoints.scss' as *;
          @use '@/app/styles/variables.scss' as *;
        `,
      },
    },
  },
});
