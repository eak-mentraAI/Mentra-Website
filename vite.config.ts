import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/Mentra-Website/',
  server: {
    host: "::",
    port: 3000,
  },
  plugins: [
    react(),
    // mode === 'development' &&
    // componentTagger(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["reactflow"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
          'router-vendor': ['react-router-dom'],
          // Split large components
          'pages': [
            './src/pages/About.tsx',
            './src/pages/Press.tsx',
            './src/pages/Privacy.tsx',
            './src/pages/FAQ.tsx',
            './src/pages/Cookies.tsx',
            './src/pages/Terms.tsx',
            './src/pages/Educators.tsx',
            './src/pages/Blog.tsx',
            './src/pages/NotFound.tsx',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
