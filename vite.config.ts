import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import eslintPlugin from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  resolve: {
    alias: {
      "@assets": "./src/assets",
      "@components": "./src/components",
      "@stores": "./src/stores",
      "@styles": "./src/styles",
      "@views": "./src/views"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import \"src/styles/global.scss\";"
      }
    }
  },
  plugins: [vue(), eslintPlugin()]
})
