import type { ImageFunction } from "astro:content"
import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

/** `photo` comes from `image()`, so its path is relative to the entry's file. */
export const recommendationItem = (image: ImageFunction) =>
  z
    .object({
      name: z.string(),
      role: z.string(),
      href: z.string(),
      quote: z.array(z.string()).min(1),
      photo: image(),
    })
    .strict()

/** The first item is the featured one. */
export const recommendationsBlock = (image: ImageFunction) =>
  z
    .object({
      type: z.literal("recommendations"),
      ...blockMeta,
      eyebrow: z.string(),
      title: z.string(),
      all: z.string(),
      allHref: z.string(),
      items: z.array(recommendationItem(image)).min(1),
    })
    .strict()

export const recommendationsColor = "saffron"

export type RecommendationsBlockCopy = BlockCopy<
  z.infer<ReturnType<typeof recommendationsBlock>>
>

export type RecommendationItem = z.infer<ReturnType<typeof recommendationItem>>
