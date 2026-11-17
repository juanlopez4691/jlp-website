import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const heroBlock = z
  .object({
    type: z.literal("hero"),
    ...blockMeta,
    availability: z.string(),
    availabilityShort: z.string(),
    tagline: z.string(),
    claim: z
      .object({
        prefix: z.string(),
        sentences: z.array(z.tuple([z.string(), z.string()])).min(1),
      })
      .strict(),
    role: z.string(),
    lead: z.string(),
    contact: z.string(),
    email: z.email(),
    imageAlt: z.string(),
  })
  .strict()

export const heroColor = "saffron"

export type HeroBlockCopy = BlockCopy<z.infer<typeof heroBlock>>
