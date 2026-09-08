import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Base path : '/dsfr-puck/' pour GitHub Pages (project page),
// surchargeable via la variable d'environnement BASE_PATH.
const base = process.env.BASE_PATH ?? '/dsfr-puck/';

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      // La démo consomme la bibliothèque directement depuis les sources.
      'dsfr-puck': resolve(__dirname, '../src/index.ts'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
