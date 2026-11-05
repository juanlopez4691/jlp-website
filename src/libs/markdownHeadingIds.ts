import { defineHastPlugin } from "satteri"

/** The id of a heading, as a WordPress-style slug: no accents, lowercase, words joined by hyphens. */
export const headingSlug = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

/**
 * Markdown plugin for accent-free, WordPress-style heading ids, so the anchors
 * of a page stay readable and stable. Astro's own ids keep the accents, and
 * Astro's id plugin runs after this one and keeps an id that already exists, so
 * its heading list stays in sync with the page.
 */
export const markdownHeadingIds = () => {
  // Each file starts fresh, so its repeats start at `-1` again.
  const seen = new Set<string>()

  return defineHastPlugin({
    name: "markdown-heading-ids",
    element: {
      filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
      visit(node, ctx) {
        // The processor's own id (the footnote label) wins. Raw HTML headings
        // never reach this plugin, so a raw heading needs its own unique id.
        if (typeof node.properties.id === "string") return

        const slug = headingSlug(ctx.textContent(node))

        // Nothing to slug: Astro's own id plugin covers that case.
        if (!slug) return

        let id = slug
        for (let count = 1; seen.has(id); count++) id = `${slug}-${count}`
        seen.add(id)
        ctx.setProperty(node, "id", id)
      },
    },
  })
}
