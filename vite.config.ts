import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import refresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), refresh(), svgr()],
  server: {
    cors: {
      allowedHeaders: '*',
      methods: '*',
      origin: '*',
    },
    port: 4000,
  },
  build: {
    sourcemap: true,
    watch: {
      chokidar: {
        alwaysStat: true,
        persistent: true,
        useFsEvents: true,
        usePolling: true,
        awaitWriteFinish: true,
        followSymlinks: true,
      },
    },
  },

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  define: {
    global: {},
  },
});
