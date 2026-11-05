import { defineHastPlugin } from "satteri"
import type { HastNode } from "satteri"

/** The header cells of a table, which name it for screen readers. */
const headerCells = (node: HastNode): HastNode[] => {
  if (node.type === "element" && node.tagName === "th") return [node]

  return "children" in node ? node.children.flatMap(headerCells) : []
}

/** Classes for table alignment: the processor writes it as an inline `style`, which the CSP blocks. */
const alignments: Record<string, string | undefined> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

/**
 * Markdown plugin for tables and code blocks in src/styles/article.css: wraps
 * each table in `.table-scroll`, lets the keyboard reach what scrolls, and
 * moves column alignment to classes. A table written as raw HTML needs its own
 * wrapper.
 */
export const markdownScrollable = defineHastPlugin({
  name: "markdown-scrollable",
  element: [
    {
      filter: ["pre"],
      visit(node, ctx) {
        ctx.setProperty(node, "tabIndex", 0)
      },
    },
    {
      filter: ["th", "td"],
      visit(node, ctx) {
        const { style } = node.properties
        const align = String(style ?? "").match(/text-align:\s*(\w+)/)?.[1]

        if (style !== undefined) {
          ctx.replaceNode(node, {
            ...node,
            properties: { className: [alignments[align ?? ""] ?? ""] },
          })
        }
      },
    },
    {
      filter: ["table"],
      visit(node, ctx) {
        ctx.wrapNode(node, {
          type: "element",
          tagName: "div",
          properties: {
            className: ["table-scroll"],
            role: "region",
            ariaLabel: headerCells(node)
              .map((cell) => ctx.textContent(cell))
              .filter(Boolean)
              .join(", "),
            tabIndex: 0,
          },
          children: [],
        })
      },
    },
  ],
})
