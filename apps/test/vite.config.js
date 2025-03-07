import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-apexcharts": path.join(__dirname, "../../packages/react-apexcharts/src/react-apexcharts.jsx"),
      "apexcharts": path.join(__dirname, "../../packages/apexcharts/src/apexcharts.js"),
      "@types/apexcharts": path.join(__dirname, "../../packages/apexcharts/types/apexcharts.d.ts"),
      "./assets/apexcharts.css": path.join(__dirname, "../../packages/apexcharts/src/assets/apexcharts.css?inline"),
    },
  },
})
