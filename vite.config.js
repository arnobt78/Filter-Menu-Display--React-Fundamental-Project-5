import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Enables fast refresh (HMR) and JSX transformation for React
export default defineConfig({
  plugins: [react()],
})
