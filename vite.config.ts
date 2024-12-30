import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

export default defineConfig({
  plugins: [
    react(),
    Pages({
      onRoutesGenerated: async (routes) => {
        await generateSitemap({
          routes,
          hostname: "https://www.directchinagoods.com/", // Zameni sa URL-om svog sajta
          readable: true, // Opcionalno: generiše čitljiv XML
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
