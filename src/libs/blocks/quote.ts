import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const quoteBlock = z
  .object({
    type: z.literal("quote"),
    ...blockMeta,
    text: z.string(),
    name: z.string(),
    role: z.string(),
  })
  .strict()

export const quoteColor = "coral"

export type QuoteBlockCopy = BlockCopy<z.infer<typeof quoteBlock>>
