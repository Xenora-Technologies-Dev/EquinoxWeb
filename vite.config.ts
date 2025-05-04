import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    commonjs(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: path.resolve(__dirname, 'dist/public'),
    emptyOutDir: true,
    target: 'es2015',
  },
});
