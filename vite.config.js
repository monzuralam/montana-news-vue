import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://monzuralam.github.io/montana-news-vue/',
  plugins: [vue()],
})
