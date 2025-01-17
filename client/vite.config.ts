import path from "path"
import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import Unfonts from 'unplugin-fonts/vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  root: './client',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  css: {
    postcss: path.resolve(__dirname, 'postcss.config.cjs')
  },
  plugins: [TanStackRouterVite({
    routesDirectory: path.resolve(__dirname, './routes'),  // Changed to absolute path
    generatedRouteTree: path.resolve(__dirname, './routeTree.gen.ts'),
    routeFileIgnorePrefix: "-",
  }), react(), Unfonts({
    custom: {
      families: [
        {
          name: 'GeistSans',
          src: './assets/fonts/*.woff2'
        },
      ],
    }
  })],
})
