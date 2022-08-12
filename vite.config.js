import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  // when behind reverse proxy
  // https://vitejs.dev/config/server-options.html#server-hmr
  server: {
    hmr: {
      clientPort: 443
    }
  },

  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
