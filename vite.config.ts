
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  server: {
    port: 3500,
    watch: {
      ignored: ['**/__checks__/**'],
    },
  },
  preview: {
    port: 3500,
  },
  plugins: [
    vue(),
  ]
})