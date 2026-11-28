import { z } from "astro/zod"
import { contactBlock } from "@/libs/blocks/contact"

export function notFoundEntry() {
  return z
    .object({
      title: z.string(),
      heading: z.string(),
      text: z.string(),
      link: z.string(),
      contact: contactBlock.omit({ type: true, id: true, arrow: true }),
    })
    .strict()
}

export type NotFoundEntry = z.infer<ReturnType<typeof notFoundEntry>>
