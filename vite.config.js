import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path-browserify"

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            path: "path-browserify",
        },
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            }
        }
    }
})
