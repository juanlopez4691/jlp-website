import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const factsBlock = z
  .object({
    type: z.literal("facts"),
    ...blockMeta,
    experience: z.object({ number: z.string(), label: z.string() }).strict(),
    clients: z.object({ number: z.string(), label: z.string() }).strict(),
    stack: z.object({ label: z.string(), value: z.string() }).strict(),
    location: z.object({ label: z.string(), value: z.string() }).strict(),
    languages: z.object({ label: z.string(), value: z.string() }).strict(),
  })
  .strict()

export const factsColor = "navy"

export type FactsBlockCopy = BlockCopy<z.infer<typeof factsBlock>>
