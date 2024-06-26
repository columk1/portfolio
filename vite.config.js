import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&family=Work+Sans:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Mono:wght@300;400;600&family=Montserrat:wght@500;600&family=Roboto:wght@500&display=swap',
    ]),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  server: {
    port: 4000,
  },
})
