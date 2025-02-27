import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-25/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
})
