import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'src/mocks',
      localEnabled: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, "src")
    }
  }
})
