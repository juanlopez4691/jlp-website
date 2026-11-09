import js from "@eslint/js"
import astro from "eslint-plugin-astro"
import globals from "globals"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"

/** The one site-wide copy section each file may read, besides `navigation`. */
const copySections = {
  "src/layouts/Main.astro": "meta",
  "src/pages/[lang]/[slug].astro": "contentPage",
  "src/components/atoms/NavLang.astro": "navLang",
  "src/components/blocks/Header.astro": "header",
  "src/components/blocks/Footer.astro": "footer",
}

/**
 * Keeps `useTranslations` to a string literal section, and to the sections a
 * file may read: its own, plus `navigation` for the shared links.
 *
 * @param section - The section of the file, or none for the base rule.
 */
const copyRule = (section) => {
  const allowed = section ? [section, "navigation"] : ["navigation"]

  return {
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.name='useTranslations'][arguments.1.type!='Literal']",
        message: "useTranslations: the section must be a string literal.",
      },
      {
        // esquery cannot take a regex inside `:not()`, so this chains one
        // `!=` per allowed section.
        selector: [
          "CallExpression[callee.name='useTranslations']",
          "[arguments.1.type='Literal']",
          ...allowed.map((name) => `[arguments.1.value!='${name}']`),
        ].join(""),
        message: `useTranslations: this file may read only ${allowed
          .map((name) => `"${name}"`)
          .join(" or ")}; the shared links live in "navigation".${
          section ? "" : " Add the file to copySections in eslint.config.js."
        }`,
      },
      {
        selector:
          "ImportSpecifier[imported.name='useTranslations'][local.name!='useTranslations']",
        message: "useTranslations: import it under its own name.",
      },
      {
        selector:
          "ImportDeclaration[source.value='@/i18n'] > ImportNamespaceSpecifier",
        message:
          'useTranslations: import from "@/i18n" by name, not as a namespace.',
      },
    ],
  }
}

/**
 * Escapes a path for the `files` globs, so the brackets of `[lang]` are
 * literal and do not become a character class.
 *
 * @param path - The repository-relative path of the file.
 */
const globPath = (path) => path.replaceAll("[", "\\[").replaceAll("]", "\\]")

export default defineConfig([
  globalIgnores(["dist", ".astro", ".wrangler"]),
  {
    files: ["**/*.{ts,astro}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      globals: globals.browser,
    },
  },
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["src/**/*.astro"],
    rules: copyRule(),
  },
  ...Object.entries(copySections).map(([path, section]) => ({
    files: [globPath(path)],
    rules: copyRule(section),
  })),
])
