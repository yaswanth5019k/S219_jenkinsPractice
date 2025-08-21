import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',
  server: {
    proxy: {
      // Proxy API requests starting with /auth to your backend
      '/auth': {
        target: 'http://localhost:9191',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
