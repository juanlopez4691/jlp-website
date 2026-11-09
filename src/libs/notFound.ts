import { getEntry } from "astro:content"
import { z } from "astro/zod"
import type { Locale } from "@/i18n"
import { contactBlock } from "@/libs/blocks/contact"

export function notFoundEntry() {
  return z
    .object({
      title: z.string(),
      heading: z.string(),
      text: z.string(),
      link: z.string(),
      contact: contactBlock.omit({ type: true, id: true, arrow: true }),
    })
    .strict()
}

export type NotFoundEntry = z.infer<ReturnType<typeof notFoundEntry>>

export async function getNotFoundPage(lang: Locale): Promise<NotFoundEntry> {
  const file = `not-found/${lang}.yaml`
  const entry = await getEntry("notFound", lang)

  if (!entry) {
    throw new Error(`${file}: no entry for the language "${lang}"`)
  }

  return entry.data
}
