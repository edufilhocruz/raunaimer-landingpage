import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Desabilitar sourcemaps em produção
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-select'],
          animations: ['framer-motion'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true,
      },
    },
  },
}) 