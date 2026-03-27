import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Set target to esnext to support top-level await in ES modules
    target: 'esnext'
  }
});
