import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.join(__dirname, 'src'),
      'styles': path.join(__dirname, 'src/assets/styles'),
      'images': path.join(__dirname, 'src/assets/images')
    },
  },
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_"],
  build: {
    // Tauri supports es2021
    target: ["es2021", "chrome100", "safari13"],
    // don't minify for debug builds
    minify: "esbuild",
    // produce sourcemaps for debug builds
    sourcemap: false
  },
});
