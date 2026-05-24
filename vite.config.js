import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages: VITE_BASE_PATH передается из GitHub Actions.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'github-pages-spa',
      closeBundle() {
        const distDir = resolve('dist')
        const index = resolve(distDir, 'index.html')
        // Копируем index.html в 404.html, чтобы работал React Router на GitHub Pages
        if (existsSync(index)) {
          copyFileSync(index, resolve(distDir, '404.html'))
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
