import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This enables the server to be accessible externally
    port: 5173, // Default port, you can change this if needed
  },
})
