import type { ImageFunction } from "astro:content"
import { getEntry } from "astro:content"
import { z } from "astro/zod"
import { useTranslations, type Locale } from "@/i18n"
import { blocksSchema } from "@/libs/blocks"
import { resolveBlocks, type PageBlock } from "@/libs/blocks/resolve"

export function homeEntry(image: ImageFunction) {
  return z
    .object({
      title: z.string(),
      description: z.string(),
      blocks: blocksSchema(image),
    })
    .strict()
}

export type HomeEntry = z.infer<ReturnType<typeof homeEntry>>

export interface HomePageContent {
  title: string
  description: string
  blocks: PageBlock[]
}

export async function getHomePage(lang: Locale): Promise<HomePageContent> {
  const file = `home/${lang}.yaml`
  const entry = await getEntry("home", lang)

  if (!entry) {
    throw new Error(`${file}: no entry for the language "${lang}"`)
  }

  const blocks = resolveBlocks(entry.data.blocks, file)
  const ids = blocks.flatMap((block) => (block.id ? [block.id] : []))

  // Each key of the header and footer links to a block of this page; one with
  // no block would point nowhere.
  const { sections } = useTranslations(lang, "navigation")

  for (const key of Object.keys(sections)) {
    if (key !== "home" && !ids.includes(key)) {
      throw new Error(
        `${file}: no block has the id "${key}", which navigation.sections.${key} links to`
      )
    }
  }

  return {
    title: entry.data.title,
    description: entry.data.description,
    blocks,
  }
}
