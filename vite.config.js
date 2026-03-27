import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        detect: resolve(__dirname, 'detect.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        simulate: resolve(__dirname, 'simulate.html'),
        feedback: resolve(__dirname, 'feedback.html'),
        analytics: resolve(__dirname, 'analytics.html'),
        results: resolve(__dirname, 'results.html')
      }
    }
  }
});
