import { existsSync } from "node:fs"
import { fileURLToPath } from "node:url"
import type { AstroIntegration } from "astro"
import { locales, useTranslations } from "../i18n"

/**
 * Fails `astro build` when a link under `/downloads/` in the navigation copy
 * has no file in `public/downloads/`. The CV PDFs are not in git, so a worktree
 * without them would deploy a 404. CI builds without them by setting
 * `ALLOW_MISSING_DOWNLOADS=1`, and then it only warns.
 *
 * @returns The integration, to add to `integrations` in astro.config.mjs.
 */
export function downloads(): AstroIntegration {
  return {
    name: "downloads",
    hooks: {
      "astro:config:setup": ({ command, config, logger }) => {
        // `dev` and `check` need no download. `preview` and `deploy` run a
        // build first, so they do.
        if (command !== "build") return

        const hrefs = locales.flatMap((locale) =>
          Object.values(useTranslations(locale, "navigation").external)
            .map(({ href }) => href)
            .filter((href) => href.startsWith("/downloads/"))
        )

        const missing = [...new Set(hrefs)].filter(
          (href) =>
            !existsSync(fileURLToPath(new URL(href.slice(1), config.publicDir)))
        )

        if (missing.length === 0) return

        if (process.env.ALLOW_MISSING_DOWNLOADS === "1") {
          for (const href of missing) {
            logger.warn(
              `public${href} is missing; the build goes on without it because ALLOW_MISSING_DOWNLOADS=1`
            )
          }

          return
        }

        throw new Error(
          [
            `Missing downloads: ${missing.map((href) => `public${href}`).join(", ")}.`,
            "They are not in git: copy them into public/downloads/ (from the",
            "main checkout, for a worktree) before building.",
          ].join("\n")
        )
      },
    },
  }
}
