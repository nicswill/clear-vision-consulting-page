import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/services/',   // 👈 VERY IMPORTANT
  plugins: [react()],
})
