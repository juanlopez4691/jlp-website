import { expect, test } from "bun:test"
import { markdownToHtml } from "satteri"
import { navigation as enNavigation } from "../i18n/en/navigation"
import { navigation as esNavigation } from "../i18n/es/navigation"
import { contentPage as esPage } from "../i18n/es/pages/content"
import { markdownLanguage } from "./markdownLanguage"

/** A page file in a language folder, as the content loader hands it over. */
const pageURL = (lang: string) =>
  new URL(`file:///site/src/content/pages/${lang}/page.md`)

const render = (source: string, lang?: string) =>
  markdownToHtml(source, {
    hastPlugins: [markdownLanguage],
    fileURL: lang ? pageURL(lang) : undefined,
  }).html

test("an external link in a Spanish page opens in a new tab, with a hint", () => {
  const html = render("[Ext](https://example.com)", "es")

  expect(html).toContain('target="_blank"')
  expect(html).toContain('rel="noopener noreferrer"')
  expect(html).toContain(`aria-label="Ext ${esNavigation.newTab}"`)
})

test("the hint of an English page is the English one", () => {
  const html = render("[Ext](https://example.com)", "en")

  expect(html).toContain(`aria-label="Ext ${enNavigation.newTab}"`)
})

test("a link to the site stays in the same tab, with no hint", () => {
  const html = render(
    "[a](https://lojopez.dev/es) [b](/es/aviso) [c](mailto:a@b.c)",
    "es"
  )

  expect(html).not.toContain("target=")
  expect(html).not.toContain("rel=")
  expect(html).not.toContain("aria-label")
})

test("the footnotes of a Spanish page are labelled in Spanish", () => {
  const html = render("Text[^1].\n\n[^1]: Note.", "es")

  expect(html).toContain(`id="footnote-label">${esPage.footnotes}</h2>`)
  expect(html).toContain(`aria-label="${esPage.backToReference} 1"`)
})

test("with no file, an external link opens in a new tab with no hint", () => {
  const html = render("[Ext](https://example.com)")

  expect(html).toContain('target="_blank"')
  expect(html).toContain('rel="noopener noreferrer"')
  expect(html).not.toContain("aria-label")
})
