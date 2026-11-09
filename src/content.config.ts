import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { homeEntry } from "@/libs/home"
import { notFoundEntry } from "@/libs/notFound"

/** The home page of each language: `src/content/home/<lang>.yaml`. */
const home = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/home" }),
  schema: ({ image }) => homeEntry(image),
})

/** The 404 page of each language: `src/content/not-found/<lang>.yaml`. */
const notFound = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/not-found" }),
  schema: notFoundEntry(),
})

/** Long-form pages: `src/content/pages/<lang>/<slug>.md`, one file per language. */
const pages = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    // The meta description and the text of link previews.
    description: z.string().optional(),
    // Pages that share a key are translations of each other.
    translationKey: z.string().optional(),
    updated: z.coerce.date(),
    noindex: z.boolean().default(false),
  }),
})

export const collections = { home, notFound, pages }
