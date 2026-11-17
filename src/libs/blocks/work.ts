import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

const workItem = z
  .object({
    client: z.string(),
    title: z.string(),
    body: z.string(),
    result: z.string(),
    chips: z.array(z.string()),
  })
  .strict()

export const workBlock = z
  .object({
    type: z.literal("work"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    moreTitle: z.string(),
    featured: z
      .array(workItem.extend({ color: z.enum(["saffron", "coral"]) }))
      .min(1),
    items: z.array(workItem).min(1),
    more: z.array(
      z
        .object({
          client: z.string(),
          title: z.string(),
          body: z.string(),
          chips: z.array(z.string()),
        })
        .strict()
    ),
  })
  .strict()

export const workColor = "teal"

export type WorkBlockCopy = BlockCopy<z.infer<typeof workBlock>>
