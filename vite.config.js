import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    port: 3000,
  },
  build: {
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    esbuildOptions: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'INVALID_ANNOTATION' || warning.code === 'UNUSED_EXTERNAL_IMPORT') return
        warn(warning)
      },
      output: {
        entryFileNames: 'assets/entries/[name]-[hash].js',
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name ? assetInfo.name.split('.') : []
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          if (/css/i.test(ext)) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/misc/[name]-[hash][extname]'
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router') || id.includes('react-router-dom')) return 'vendor-router'
            if (id.includes('react-redux') || id.includes('@reduxjs/toolkit')) return 'vendor-redux'
            if (id.includes('@tanstack/react-query')) return 'vendor-query'
            if (id.includes('lucide-react')) return 'vendor-icons'
            if (id.includes('react-hot-toast')) return 'vendor-toast'
            if (id.includes('react-helmet-async')) return 'vendor-helmet'
            if (id.includes('react-i18next')) return 'vendor-i18n'
            if (id.includes('emoji-picker-react')) return 'vendor-emoji'
            if (id.includes('react-dom')) return 'vendor-react-dom'
            if (/[\\/]react[\\/]/.test(id) || /[\\/]react-is[\\/]/.test(id) || /[\\/]scheduler[\\/]/.test(id)) return 'vendor-react-core'
            if (id.includes('framer-motion')) return 'vendor-motion'
            if (id.includes('axios')) return 'vendor-axios'
            if (id.includes('i18next')) return 'vendor-i18n'
            if (id.includes('sweetalert2')) return 'vendor-sweetalert'
            if (id.includes('zod')) return 'vendor-zod'
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
}))
