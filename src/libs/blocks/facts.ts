import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const factsBlock = z
  .object({
    type: z.literal("facts"),
    ...blockMeta,
    stack: z.object({ label: z.string(), value: z.string() }).strict(),
    experience: z.object({ label: z.string(), value: z.string() }).strict(),
    clients: z.object({ label: z.string(), value: z.string() }).strict(),
    location: z.object({ label: z.string(), value: z.string() }).strict(),
    languages: z.object({ label: z.string(), value: z.string() }).strict(),
  })
  .strict()

export const factsColor = "navy"

export type FactsBlockCopy = BlockCopy<z.infer<typeof factsBlock>>
