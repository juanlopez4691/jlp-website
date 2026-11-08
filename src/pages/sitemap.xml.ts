import type { APIRoute } from "astro"
import { getCollection } from "astro:content"
import { getRelativeLocaleUrl } from "astro:i18n"
import { locales, type Translations } from "@/i18n"
import { getTranslations } from "@/libs/translations"

interface Entry {
  /** The URL of this page, as it is served. */
  path: string
  /** The URL of the page in each language, this one included. */
  translations: Translations
  /** The `updated` date of a long-form page. */
  lastmod?: Date
  /** Adds the `x-default` alternate: the root, which redirects by language. */
  xDefault?: boolean
}

/**
 * Lists every indexable page, one `<url>` per language, with its translations
 * as `hreflang` alternates. Pages with `noindex: true`, the 404 and the root
 * redirect stay out.
 */
export const GET: APIRoute = async ({ site }) => {
  const absolute = (path: string) => new URL(path, site).href

  const homeTranslations: Translations = Object.fromEntries(
    locales.map((code) => [code, getRelativeLocaleUrl(code)])
  )
  const home: Entry[] = locales.map((code) => ({
    path: getRelativeLocaleUrl(code),
    translations: homeTranslations,
    xDefault: true,
  }))

  const pages = await getCollection("pages")
  const content: Entry[] = pages
    .filter((page) => !page.data.noindex)
    .map((page) => {
      const [lang, slug] = page.id.split("/")

      return {
        path: getRelativeLocaleUrl(lang, slug),
        translations: getTranslations(page, pages),
        lastmod: page.data.updated,
      }
    })

  const urls = [...home, ...content].map((entry) => {
    const alternates = Object.entries(entry.translations).map(
      ([code, href]) =>
        `<xhtml:link rel="alternate" hreflang="${code}" href="${absolute(href)}"/>`
    )
    if (entry.xDefault) {
      alternates.push(
        `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute("/")}"/>`
      )
    }
    const lastmod = entry.lastmod
      ? `<lastmod>${entry.lastmod.toISOString().slice(0, 10)}</lastmod>`
      : ""

    return `<url><loc>${absolute(entry.path)}</loc>${lastmod}${alternates.join("")}</url>`
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
