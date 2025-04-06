import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react(),],
  build: {
    chunkSizeWarningLimit: 1000, // increases the limit from 500kb to 1000kb
  },
})
