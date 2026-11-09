import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const stackBlock = z
  .object({
    type: z.literal("stack"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    groups: z
      .array(
        z
          .object({
            label: z.string(),
            core: z.boolean(),
            chips: z.array(z.string()),
          })
          .strict()
      )
      .min(1),
  })
  .strict()

export const stackColor = "navy"

export type StackBlockCopy = BlockCopy<z.infer<typeof stackBlock>>
