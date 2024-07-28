/// <reference types="vitest" />
/// <reference types="vite/client" />

//import path from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    /* alias: {
      '@': path.resolve(__dirname, './src'),
    }, */
    environment: 'jsdom',
    globals: true,
    //include: ['src/**/*.test.ts'],
    //root: __dirname,
    setupFiles: ['vitest.setup.ts'],
    css: true,
  },
});
