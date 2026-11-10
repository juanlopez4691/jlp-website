import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const heroBlock = z
  .object({
    type: z.literal("hero"),
    ...blockMeta,
    availability: z.string(),
    availabilityShort: z.string(),
    greeting: z.string(),
    name: z.string(),
    role: z.string(),
    tagline: z.string(),
    lead: z.string(),
    contact: z.string(),
    email: z.email(),
    imageAlt: z.string(),
  })
  .strict()

export const heroColor = "saffron"

export type HeroBlockCopy = BlockCopy<z.infer<typeof heroBlock>>
