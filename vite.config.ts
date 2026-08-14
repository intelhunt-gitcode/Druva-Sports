import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { fileURLToPath, URL } from 'node:url'

// Set ARTIFACT=1 to produce a single self-contained HTML file (everything
// inlined) for a shareable preview link. Normal builds stay code-split.
const isArtifact = process.env.ARTIFACT === '1'

// The app is served under a sub-path in production (e.g. /druva-sports/).
// Override with BASE_PATH at build time; the artifact build stays at root.
const base = isArtifact ? '/' : process.env.BASE_PATH || '/druva-sports/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), ...(isArtifact ? [viteSingleFile()] : [])],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    outDir: isArtifact ? 'dist-artifact' : 'dist',
    ...(isArtifact
      ? { assetsInlineLimit: 100_000_000 }
      : {
          rollupOptions: {
            output: {
              manualChunks: {
                react: ['react', 'react-dom', 'react-router-dom'],
                icons: ['lucide-react'],
              },
            },
          },
        }),
  },
})
