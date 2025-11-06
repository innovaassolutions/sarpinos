import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        locations: './locations.html',
        'our-story': './our-story.html',
        'terms-of-use': './terms-of-use.html',
        'privacy-policy': './privacy-policy.html',
      },
    },
  },
})
