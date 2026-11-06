import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

/** Long-form pages: `src/content/pages/<lang>/<slug>.md`, one file per language. */
const pages = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // Pages that share a key are translations of each other.
    translationKey: z.string().optional(),
    updated: z.coerce.date(),
    noindex: z.boolean().default(false),
  }),
})

export const collections = { pages }
