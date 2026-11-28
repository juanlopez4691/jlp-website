import type { ImageFunction } from "astro:content"
import { z } from "astro/zod"
import { blocksSchema } from "@/libs/blocks"

export function homeEntry(image: ImageFunction) {
  return z
    .object({
      title: z.string(),
      description: z.string(),
      blocks: blocksSchema(image),
    })
    .strict()
}

export type HomeEntry = z.infer<ReturnType<typeof homeEntry>>
