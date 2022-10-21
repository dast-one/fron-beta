import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // https://vitejs.dev/config/shared-options.html
  // Should start and end with the / character.
  // base: '/',

  // https://vitejs.dev/config/server-options.html
  server: {
    // boolean | CorsOptions; default: true
    // for options object ref: https://github.com/expressjs/cors
    cors: {
      origin: true
    },
    // Type: OutgoingHttpHeaders
    headers: {
      'X-Frame-Options': 'SAMEORIGIN'
    },
    // when behind reverse proxy
    // https://vitejs.dev/config/server-options.html#server-hmr
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
