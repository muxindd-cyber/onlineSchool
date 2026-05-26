import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Жестко задаем base для GitHub Pages, так как разворачиваем из корня main ветки
const base = '/onlineSchool/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'serve-src-html-in-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/index.src.html'
          }
          next()
        })
      }
    },
    {
      name: 'github-pages-spa',
      closeBundle() {
        const distDir = resolve('dist')
        const index = resolve(distDir, 'index.src.html')
        // Копируем index.src.html в 404.html
        if (existsSync(index)) {
          copyFileSync(index, resolve(distDir, '404.html'))
        }
      },
    },
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.src.html'),
    }
  },
})
