import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
    proxy: {
      '/tts': {
        target: 'https://openspeech.bytedance.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/tts/, ''),
      }
    },
  }
})
