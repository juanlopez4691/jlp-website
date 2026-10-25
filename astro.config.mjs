// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  build: {
    // Keep every stylesheet as a separate file so the CSP can use
    // style-src 'self'.
    inlineStylesheets: "never",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
