import { expect, test } from "bun:test"
import { markdownToHtml } from "satteri"
import { headingSlug, markdownHeadingIds } from "./markdownHeadingIds"

/** The heading ids of a Markdown file, in document order. */
const headingIds = (source: string) =>
  [
    ...markdownToHtml(source, {
      hastPlugins: [markdownHeadingIds],
    }).html.matchAll(/<h[1-6] id="([^"]*)"/g),
  ].map((match) => match[1])

test("a heading slug has no accents, lowercase, joined by hyphens", () => {
  expect(headingSlug("Créditos de las imágenes")).toBe(
    "creditos-de-las-imagenes"
  )
  expect(headingSlug("Diseño: ¿qué año?")).toBe("diseno-que-ano")
  expect(headingSlug("Joan's notes")).toBe("joans-notes")
  expect(headingSlug("Joan’s notes")).toBe("joans-notes")
})

test("a repeated heading gets a count", () => {
  expect(headingIds("## Notas\n\n## Notas").join(", ")).toBe("notas, notas-1")
  expect(headingIds("## Notas\n\n## Notas\n\n## Notas 1").join(", ")).toBe(
    "notas, notas-1, notas-1-1"
  )
  expect(headingIds("## Notas 1\n\n## Notas\n\n## Notas").join(", ")).toBe(
    "notas-1, notas, notas-2"
  )
})

test("each file starts fresh", () => {
  // Two files that share a heading both start at `notas`.
  expect(headingIds("## Notas").join(", ")).toBe("notas")
  expect(headingIds("## Notas").join(", ")).toBe("notas")
})

test("the footnote label keeps its id", () => {
  const footnotes = markdownToHtml("Text[^1].\n\n[^1]: Note.", {
    hastPlugins: [markdownHeadingIds],
  }).html

  expect(footnotes).toContain('id="footnote-label"')
})
