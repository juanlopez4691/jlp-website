import { expect, test } from "bun:test"
import type { Block, BlockType } from "./index"
import { resolveBlocks } from "./resolve"

/** Blocks as the resolver reads them: a type, plus the fields a test needs. */
const blocks = (
  ...items: ({ arrow?: boolean; id?: string; type: BlockType } & Record<
    string,
    unknown
  >)[]
): Block[] => items as Block[]

test("the first block has no arrow", () => {
  const [block] = resolveBlocks(blocks({ type: "services" }), "home/es.yaml")

  expect(block.arrow).toBe(undefined)
})

test("the hero and facts never take an arrow", () => {
  const resolved = resolveBlocks(
    blocks({ type: "facts" }, { type: "hero" }),
    "home/es.yaml"
  )

  expect(resolved[1].arrow).toBe(undefined)
})

test("facts take no arrow even below another block", () => {
  const resolved = resolveBlocks(
    blocks({ type: "hero" }, { type: "facts" }),
    "home/es.yaml"
  )

  expect(resolved[1].arrow).toBe(undefined)
})

test("a block takes the color of the block above", () => {
  const resolved = resolveBlocks(
    blocks({ type: "facts" }, { type: "services" }),
    "home/es.yaml"
  )

  expect(resolved[1].arrow).toBe("navy")
})

test("two blocks of one color give no arrow", () => {
  const resolved = resolveBlocks(
    blocks({ type: "quote" }, { type: "how" }),
    "home/es.yaml"
  )

  expect(resolved[1].arrow).toBe(undefined)
})

test("arrow: false turns the arrow off", () => {
  const resolved = resolveBlocks(
    blocks({ type: "facts" }, { type: "services", arrow: false }),
    "home/es.yaml"
  )

  expect(resolved[1].arrow).toBe(undefined)
})

test("the type and the id pass through, and props holds the rest", () => {
  const [block] = resolveBlocks(
    blocks({
      type: "facts",
      id: "about",
      title: "Facts",
      items: [{ label: "Years", value: "10" }],
    }),
    "home/es.yaml"
  )

  expect(block.type).toBe("facts")
  expect(block.id).toBe("about")
  expect(block.props).toEqual({
    title: "Facts",
    items: [{ label: "Years", value: "10" }],
  })
})

test("two blocks with one id throw, and the message names the file and the id", () => {
  expect(() =>
    resolveBlocks(
      blocks({ type: "facts", id: "about" }, { type: "services", id: "about" }),
      "home/es.yaml"
    )
  ).toThrow('home/es.yaml: the id "about" is used by more than one block')
})
