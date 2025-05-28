import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [ react(), 
    svgr()
  ],
  resolve: {
    alias: {
      "@webp": path.resolve(__dirname, "./src/assets/webp"),
      "@jpg": path.resolve(__dirname, "./src/assets/jpg"),
      "@svg": path.resolve(__dirname, "./src/assets/svg"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
    }
  }
})
