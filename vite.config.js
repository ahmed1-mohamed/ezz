import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) {
              return 'router'
            }
            if (id.includes('react') || id.includes('react-dom')) {
              return 'reactCore'
            }
            if (id.includes('react-redux') || id.includes('@reduxjs/toolkit')) {
              return 'reduxStore'
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'animations'
            }
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            if (id.includes('axios')) {
              return 'httpAxios'
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n'
            }
            if (id.includes('sweetalert2')) {
              return 'sweetalert'
            }
            if (id.includes('@tanstack/react-query')) {
              return 'reactQuery'
            }
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})