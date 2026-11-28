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

/** Whole class names, because Tailwind only sees complete ones. */
const backgrounds = {
  saffron: "bg-saffron",
  coral: "bg-coral",
  teal: "bg-teal",
  mint: "bg-mint",
  navy: "bg-navy",
} satisfies Record<ArrowColor, string>

/** The `bg-*` class of a block's color. Its text, buttons and focus colors still assume that color. */
export function blockBackground(type: BlockType): string {
  return backgrounds[blockColors[type]]
}

/** The props every block takes besides its copy. */
export type BlockProps = {
  id?: string
  /** Color of the block above. Without it, the block has no arrow. */
  arrow?: ArrowColor
  class?: string
}

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
