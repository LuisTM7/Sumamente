// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://LuisTM7.github.io/Sumamente",
  integrations: [mdx(), sitemap()],
  // base: "Sumamente",
  // outDir: "./dist",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
