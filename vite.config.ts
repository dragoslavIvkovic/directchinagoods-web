import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

export default defineConfig({
  plugins: [
    react(),
    Pages({
      onRoutesGenerated: async (routes) => {
        await generateSitemap({
          routes,
          hostname: "https://www.directchinagoods.com", // Zameni sa URL-om svog sajta
          readable: true, // (opcionalno) generiše human-readable XML
          // outDir: 'dist', // Podrazumevano već generiše unutar dist-a
        });
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
