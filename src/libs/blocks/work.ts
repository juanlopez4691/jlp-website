import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const workBlock = z
  .object({
    type: z.literal("work"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    moreTitle: z.string(),
    items: z
      .array(
        z
          .object({
            client: z.string(),
            title: z.string(),
            body: z.string(),
            result: z.string(),
            chips: z.array(z.string()),
          })
          .strict()
      )
      .min(1),
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
