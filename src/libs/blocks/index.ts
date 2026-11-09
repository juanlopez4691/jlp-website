import type { ImageFunction } from "astro:content"
import type { ComponentProps } from "astro/types"
import { z } from "astro/zod"
import type SectionArrow from "@/components/atoms/SectionArrow.astro"
import { contactBlock, contactColor } from "./contact"
import { experienceBlock, experienceColor } from "./experience"
import { factsBlock, factsColor } from "./facts"
import { heroBlock, heroColor } from "./hero"
import { howBlock, howColor } from "./how"
import { quoteBlock, quoteColor } from "./quote"
import { recommendationsBlock, recommendationsColor } from "./recommendations"
import { servicesBlock, servicesColor } from "./services"
import { stackBlock, stackColor } from "./stack"
import { workBlock, workColor } from "./work"

export type ArrowColor = ComponentProps<typeof SectionArrow>["color"]

/** The background of each block type, which the block below borrows for its arrow. */
export const blockColors = {
  hero: heroColor,
  facts: factsColor,
  services: servicesColor,
  quote: quoteColor,
  work: workColor,
  recommendations: recommendationsColor,
  how: howColor,
  experience: experienceColor,
  stack: stackColor,
  contact: contactColor,
} satisfies Record<BlockType, ArrowColor>

export function blocksSchema(image: ImageFunction) {
  return z.array(
    z.discriminatedUnion("type", [
      heroBlock,
      factsBlock,
      servicesBlock,
      quoteBlock,
      workBlock,
      recommendationsBlock(image),
      howBlock,
      experienceBlock,
      stackBlock,
      contactBlock,
    ])
  )
}

export type Blocks = z.infer<ReturnType<typeof blocksSchema>>

export type Block = Blocks[number]

export type BlockType = Block["type"]

export type { BlockCopy } from "./meta"
export type { ContactBlockCopy } from "./contact"
export type { ExperienceBlockCopy } from "./experience"
export type { FactsBlockCopy } from "./facts"
export type { HeroBlockCopy } from "./hero"
export type { HowBlockCopy } from "./how"
export type { QuoteBlockCopy } from "./quote"
export type {
  RecommendationsBlockCopy,
  RecommendationItem,
} from "./recommendations"
export type { ServicesBlockCopy } from "./services"
export type { StackBlockCopy } from "./stack"
export type { WorkBlockCopy } from "./work"
