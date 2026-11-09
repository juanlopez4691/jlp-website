import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const servicesBlock = z
  .object({
    type: z.literal("services"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    items: z
      .array(z.object({ title: z.string(), body: z.string() }).strict())
      // ServicesBlock has one tone per card, six in all.
      .min(1)
      .max(6),
  })
  .strict()

export const servicesColor = "mint"

export type ServicesBlockCopy = BlockCopy<z.infer<typeof servicesBlock>>
