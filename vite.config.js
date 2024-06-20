import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', 
  build: {
    outDir: 'build', // Ensure this is where your output is expected
  },
  plugins: [react()],
  server: {
    port: 3000
  }
})
