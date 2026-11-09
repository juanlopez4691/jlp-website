import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const contactBlock = z
  .object({
    type: z.literal("contact"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    address: z.string(),
    email: z.string(),
    note: z.string(),
  })
  .strict()

export const contactColor = "teal"

export type ContactBlockCopy = BlockCopy<z.infer<typeof contactBlock>>
