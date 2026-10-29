// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  // Keep in sync with src/i18n/index.ts.
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  build: {
    // Keep every stylesheet as a separate file so the CSP can use
    // style-src 'self'.
    inlineStylesheets: "never",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
