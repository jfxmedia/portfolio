import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    homepage: "https://jfxmedia.github.io/portfolio",
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3000
  }
})
