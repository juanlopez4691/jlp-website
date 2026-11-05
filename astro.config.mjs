// @ts-check
import { defineConfig } from "astro/config"
import { satteri } from "@astrojs/markdown-satteri"
import tailwindcss from "@tailwindcss/vite"
import { markdownHeadingIds } from "./src/libs/markdownHeadingIds"
import { markdownLanguage } from "./src/libs/markdownLanguage"
import { markdownScrollable } from "./src/libs/markdownScrollable"

// https://astro.build/config
export default defineConfig({
  // The default highlighter writes inline `style` attributes, which the CSP
  // blocks and which override the code block colors.
  markdown: {
    syntaxHighlight: false,
    processor: satteri({
      hastPlugins: [markdownScrollable, markdownLanguage, markdownHeadingIds],
    }),
  },
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
    // Cloudflare's 404 handling needs a flat `404.html` in each language folder.
    format: "preserve",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep small scripts and assets as separate files too: an inlined
      // `<script>` would need 'unsafe-inline' in the CSP.
      assetsInlineLimit: 0,
    },
  },
})
