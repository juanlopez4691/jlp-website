import * as en from "./en"
import * as es from "./es"

/**
 * Supported languages. Keep in sync with `i18n.locales` in astro.config.mjs,
 * with the folder names that hold the pages, and with `pickLocale` in
 * `src/worker.ts`.
 */
export const locales = ["es", "en"] as const

export type Locale = (typeof locales)[number]

/**
 * The URL of a page in each language that has it, keyed by language. A page
 * with no translation in a language has no entry for it.
 */
export type Translations = Partial<Record<Locale, string>>

export const defaultLocale: Locale = "es"

/**
 * The site-wide copy, one file per section in `./es` and `./en`, so a component
 * reads only what it needs. The Spanish files define the shape.
 */
export type Dictionary = typeof es
export type Section = keyof Dictionary

const dictionaries: Record<Locale, Dictionary> = { es, en }

/**
 * Returns one section of the copy for a language. A component asks for its own
 * section, and for `navigation` when it needs a shared link.
 *
 * @param locale - The language of the current page.
 * @param section - The section to read, such as `hero` or `navigation`.
 *
 * @returns The copy of that section only.
 */
export function useTranslations<S extends Section>(
  locale: Locale,
  section: S
): Dictionary[S] {
  return dictionaries[locale][section]
}

/**
 * Narrows a route parameter to a supported language.
 *
 * @param value - The raw value, such as `Astro.params.lang`.
 *
 * @returns True if the value is one of the supported languages.
 */
export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value)
}
