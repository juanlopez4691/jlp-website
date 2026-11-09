import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const howBlock = z
  .object({
    type: z.literal("how"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    steps: z
      .array(z.object({ title: z.string(), body: z.string() }).strict())
      .min(1),
    principles: z
      .array(z.object({ title: z.string(), body: z.string() }).strict())
      .min(1),
  })
  .strict()

export const howColor = "coral"

export type HowBlockCopy = BlockCopy<z.infer<typeof howBlock>>
