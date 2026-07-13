import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://dukocuk.github.io/notecast-site/ (a project sub-path),
  // so assets must be prefixed with the repo name.
  base: '/notecast-site/',
  plugins: [react()],
})
