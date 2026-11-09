import { z } from "astro/zod"
import { blockMeta, type BlockCopy } from "./meta"

export const experienceBlock = z
  .object({
    type: z.literal("experience"),
    ...blockMeta,
    eyebrow: z.string(),
    title: z.string(),
    jobs: z
      .array(
        z
          .object({
            period: z.string(),
            title: z.string(),
            company: z.string(),
            body: z.string(),
          })
          .strict()
      )
      .min(1),
  })
  .strict()

export const experienceColor = "mint"

export type ExperienceBlockCopy = BlockCopy<z.infer<typeof experienceBlock>>
