import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: '/' — правильно для кастомного домена (onlineschoolznayka.ru)
// При base:'/' → BASE_URL='/' → BrowserRouter получает basename=undefined → маршрутизация работает
// При base:'./' → BASE_URL='./' → BrowserRouter получает basename='.' → маршрутизация сломана!
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
