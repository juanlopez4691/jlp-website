import { markdownToHtml } from "satteri"
import { headingSlug, markdownHeadingIds } from "./markdownHeadingIds"

/**
 * A minimal assert, so the test needs no Node types: a throw makes `bun` exit
 * non-zero, the same as a failed assertion.
 */
const equal = (actual: unknown, expected: unknown) => {
  if (actual !== expected) {
    throw new Error(`Expected ${String(expected)}, got ${String(actual)}`)
  }
}

/** The heading ids of a Markdown file, in document order. */
const headingIds = (source: string) =>
  [
    ...markdownToHtml(source, {
      hastPlugins: [markdownHeadingIds],
    }).html.matchAll(/<h[1-6] id="([^"]*)"/g),
  ].map((match) => match[1])

equal(headingSlug("Créditos de las imágenes"), "creditos-de-las-imagenes")
equal(headingSlug("Diseño: ¿qué año?"), "diseno-que-ano")
equal(headingSlug("Joan's notes"), "joans-notes")
equal(headingSlug("Joan’s notes"), "joans-notes")
equal(headingIds("## Notas\n\n## Notas").join(", "), "notas, notas-1")
equal(
  headingIds("## Notas\n\n## Notas\n\n## Notas 1").join(", "),
  "notas, notas-1, notas-1-1"
)
equal(
  headingIds("## Notas 1\n\n## Notas\n\n## Notas").join(", "),
  "notas-1, notas, notas-2"
)

// A factory per compile, so two files that share a heading both start at `notas`.
equal(headingIds("## Notas").join(", "), "notas")
equal(headingIds("## Notas").join(", "), "notas")

const footnotes = markdownToHtml("Text[^1].\n\n[^1]: Note.", {
  hastPlugins: [markdownHeadingIds],
}).html
equal(footnotes.includes('id="footnote-label"'), true)
