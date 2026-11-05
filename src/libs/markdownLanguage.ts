import { defineHastPlugin } from "satteri"
import { navigation as enNavigation } from "../i18n/en/navigation"
import { contentPage as enPage } from "../i18n/en/pages/content"
import { navigation as esNavigation } from "../i18n/es/navigation"
import { contentPage as esPage } from "../i18n/es/pages/content"

interface Copy {
  newTab: string
  footnotes: string
  backToReference: string
}

const copy: Record<string, Copy | undefined> = {
  es: { ...esPage, newTab: esNavigation.newTab },
  en: { ...enPage, newTab: enNavigation.newTab },
}

/** The copy for a file in `<lang>/<slug>.md`, whatever folder holds them. */
const copyOf = (fileURL?: URL) =>
  copy[fileURL?.pathname.split("/").at(-2) ?? ""]

/**
 * Markdown plugin for what the text of a page does not say in its language:
 * the hint of external links, which also open in a new tab as the links with
 * the IconExternalLink atom do, and the footnote labels, which the processor
 * writes in English. The hint is an `aria-label`, not hidden text, so it stays
 * out of heading ids. The icon comes from src/styles/article.css.
 */
export const markdownLanguage = defineHastPlugin({
  name: "markdown-language",
  element: [
    {
      filter: ["a"],
      visit(node, ctx) {
        const language = copyOf(ctx.fileURL)
        const { ariaLabel, dataFootnoteBackref, href } = node.properties

        if (dataFootnoteBackref !== undefined) {
          if (language) {
            ctx.setProperty(
              node,
              "ariaLabel",
              String(ariaLabel).replace(
                "Back to reference",
                language.backToReference
              )
            )
          }

          return
        }

        // A relative link parses against the site, so it counts as internal.
        const url = URL.parse(String(href ?? ""), "https://lojopez.dev")

        if (
          !url?.protocol.startsWith("http") ||
          url.hostname === "lojopez.dev"
        ) {
          return
        }

        ctx.setProperty(node, "target", "_blank")
        ctx.setProperty(node, "rel", "noopener noreferrer")

        const text = ctx.textContent(node)

        if (language && text) {
          ctx.setProperty(node, "ariaLabel", `${text} ${language.newTab}`)
        }
      },
    },
    {
      filter: ["h2"],
      visit(node, ctx) {
        const language = copyOf(ctx.fileURL)

        if (language && node.properties.id === "footnote-label") {
          ctx.replaceNode(node, {
            ...node,
            children: [{ type: "text", value: language.footnotes }],
          })
        }
      },
    },
  ],
})
