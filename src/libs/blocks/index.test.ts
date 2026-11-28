import { describe, expect, test } from "bun:test"
import { blockBackground, blockColors, type BlockType } from "./index"

describe("blockBackground", () => {
  test("gives each block the background of its own color", () => {
    const types = Object.keys(blockColors) as BlockType[]

    for (const type of types) {
      expect(blockBackground(type)).toBe(`bg-${blockColors[type]}`)
    }
  })
})
