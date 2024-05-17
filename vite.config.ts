import path from 'path'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: { port: 3000 },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    VitePWA({
      mode: "production",
      disable: false,
      registerType: "prompt",
      includeAssets: [],
      minify: true,
      manifest: {
        name: "Mock App",
        short_name: "App",
        description: "Mock app excercise",
        icons: [
          {
            src: "android-launchericon-48-48.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "icon",
          },
          {
            src: "android-launchericon-256-256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "icon",
          },
          {
            src: "android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "icon",
          },
          {
            src: "android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: "*",
            method: "GET",
            handler: "CacheFirst" as const,
            options: {
              cacheName: "mock-cache",
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
    }),
  ],
});
