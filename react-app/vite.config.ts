import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig({
   base: '/app-react/',
  plugins: [
    react(),
    qiankun('reactApp', { useDevMode: true })
  ],
  server: {
    port: 5177,
    hmr:false
  }
})
