import type { ImageFunction } from "astro:content"
import { getEntry } from "astro:content"
import { z } from "astro/zod"
import type { Locale } from "@/i18n"
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
  const entry = await getEntry("home", lang)

  if (!entry) {
    throw new Error(`home/${lang}.yaml: no entry for the language "${lang}"`)
  }

  return {
    title: entry.data.title,
    description: entry.data.description,
    blocks: resolveBlocks(entry.data.blocks),
  }
}
