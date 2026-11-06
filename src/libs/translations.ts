import type { CollectionEntry } from "astro:content"
import { getRelativeLocaleUrl } from "astro:i18n"
import type { Locale, Translations } from "@/i18n"

/**
 * The home of a language. `getRelativeLocaleUrl` drops the final slash, and
 * without it Cloudflare answers with a redirect.
 *
 * @param locale - The language whose home to link.
 *
 * @returns The root-relative URL of that home, with its final slash.
 */
export function homeUrl(locale: Locale) {
  return `${getRelativeLocaleUrl(locale)}/`
}

/**
 * The URL of a page in each language that has it, itself included, built as
 * `/<lang>/<slug>`. A page with no `translationKey` is alone: it does not match
 * other keyless pages.
 *
 * @param page - The page being rendered.
 * @param pages - Every page that could translate it.
 *
 * @returns A URL per language, with no trailing slash on pages.
 */
export function getTranslations(
  page: CollectionEntry<"pages">,
  pages: CollectionEntry<"pages">[]
): Translations {
  const key = page.data.translationKey
  const entries = key
    ? pages.filter((entry) => entry.data.translationKey === key)
    : [page]

  const translations: Translations = {}

  for (const entry of entries) {
    const [locale, slug] = entry.id.split("/")
    translations[locale as Locale] = getRelativeLocaleUrl(locale, slug)
  }

  return translations
}
