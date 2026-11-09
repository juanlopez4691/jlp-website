import { z } from "astro/zod"

export const blockMeta = {
  id: z.string().optional(),
  arrow: z.boolean().optional(),
}

/** The fields of one block, minus the metadata its component takes as props. */
export type BlockCopy<T> = T extends unknown
  ? Omit<T, "type" | keyof typeof blockMeta>
  : never
