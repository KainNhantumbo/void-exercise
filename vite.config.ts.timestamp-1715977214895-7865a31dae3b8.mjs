// vite.config.ts
import path from "path";
import { defineConfig } from "file:///mnt/junior/dev/void-exercise/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/junior/dev/void-exercise/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsConfigPaths from "file:///mnt/junior/dev/void-exercise/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { VitePWA } from "file:///mnt/junior/dev/void-exercise/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/mnt/junior/dev/void-exercise";
var vite_config_default = defineConfig({
  server: { port: 3e3 },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
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
            purpose: "icon"
          },
          {
            src: "android-launchericon-256-256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "icon"
          },
          {
            src: "android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "icon"
          },
          {
            src: "android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait"
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: "*",
            method: "GET",
            handler: "CacheFirst",
            options: {
              cacheName: "mock-cache",
              cacheableResponse: { statuses: [200] }
            }
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2p1bmlvci9kZXYvdm9pZC1leGVyY2lzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9qdW5pb3IvZGV2L3ZvaWQtZXhlcmNpc2Uvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9qdW5pb3IvZGV2L3ZvaWQtZXhlcmNpc2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHsgcG9ydDogMzAwMCB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHRzQ29uZmlnUGF0aHMoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIG1vZGU6IFwicHJvZHVjdGlvblwiLFxuICAgICAgZGlzYWJsZTogZmFsc2UsXG4gICAgICByZWdpc3RlclR5cGU6IFwicHJvbXB0XCIsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXSxcbiAgICAgIG1pbmlmeTogdHJ1ZSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6IFwiTW9jayBBcHBcIixcbiAgICAgICAgc2hvcnRfbmFtZTogXCJBcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTW9jayBhcHAgZXhjZXJjaXNlXCIsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQtbGF1bmNoZXJpY29uLTQ4LTQ4LnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiaWNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcImFuZHJvaWQtbGF1bmNoZXJpY29uLTI1Ni0yNTYucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIyNTZ4MjU2XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgcHVycG9zZTogXCJpY29uXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiYW5kcm9pZC1sYXVuY2hlcmljb24tMTkyLTE5Mi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICBwdXJwb3NlOiBcImljb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJhbmRyb2lkLWxhdW5jaGVyaWNvbi01MTItNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgICAgc3RhcnRfdXJsOiBcIi9cIixcbiAgICAgICAgc2NvcGU6IFwiL1wiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgb3JpZW50YXRpb246IFwicG9ydHJhaXRcIixcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogXCIqXCIsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoYW5kbGVyOiBcIkNhY2hlRmlyc3RcIiBhcyBjb25zdCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiBcIm1vY2stY2FjaGVcIixcbiAgICAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHsgc3RhdHVzZXM6IFsyMDBdIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlRLE9BQU8sVUFBVTtBQUMxUixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsU0FBUyxlQUFlO0FBSnhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVEsRUFBRSxNQUFNLElBQUs7QUFBQSxFQUNyQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUM7QUFBQSxNQUNoQixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixXQUFXO0FBQUEsUUFDWCxPQUFPO0FBQUEsUUFDUCxTQUFTO0FBQUEsUUFDVCxhQUFhO0FBQUEsTUFDZjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osUUFBUTtBQUFBLFlBQ1IsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUFBLFlBQ3ZDO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
