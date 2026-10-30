import { en } from "./en"
import { es, type Dictionary } from "./es"

/**
 * Supported languages. Keep in sync with `i18n.locales` in astro.config.mjs,
 * and with the folder names that hold the pages.
 */
export const locales = ["es", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "es"

const dictionaries: Record<Locale, Dictionary> = { es, en }

/**
 * Returns the copy for a language.
 *
 * @param locale - The language of the current page.
 *
 * @returns The dictionary, so a component reads `t.hero.title`.
 */
export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale]
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
