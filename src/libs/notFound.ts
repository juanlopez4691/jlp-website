import { getEntry } from "astro:content"
import type { Locale } from "@/i18n"
import type { NotFoundEntry } from "@/libs/notFoundEntry"

export async function getNotFoundPage(lang: Locale): Promise<NotFoundEntry> {
  const file = `not-found/${lang}.yaml`
  const entry = await getEntry("notFound", lang)

  if (!entry) {
    throw new Error(`${file}: no entry for the language "${lang}"`)
  }

  return entry.data
}
