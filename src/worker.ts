import type { Locale } from "@/i18n"

/**
 * Picks the language of the site from the `Accept-Language` header: the first
 * language the visitor can read, in the order of their preferences. Catalan
 * reads Spanish, and a header with no match falls back to English.
 *
 * @param acceptLanguage - The raw header, or `null` when it is missing.
 *
 * @returns The language to send the visitor to.
 */
function pickLocale(acceptLanguage: string | null): Locale {
  const entries = (acceptLanguage ?? "")
    .split(",")
    .map((entry) => {
      const [tag = "", ...parameters] = entry.split(";")
      const quality = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith("q="))
      const q = Number(quality?.slice(2))

      return { tag: tag.trim(), q: Number.isNaN(q) ? 1 : q }
    })
    .filter((entry) => entry.q !== 0)
    .sort((a, b) => b.q - a.q)

  for (const { tag } of entries) {
    const primary = tag.split("-")[0].toLowerCase()

    if (primary === "es" || primary === "ca") return "es"
    if (primary === "en") return "en"
  }

  return "en"
}

/**
 * Answers a request for the site root with a temporary redirect to the language
 * the browser asks for. Only `/` runs the Worker first: a path with no matching
 * asset gets the nearest `404.html` from asset serving, through
 * `not_found_handling`, and never reaches this handler: the one of its language
 * under `/es/` or `/en/`, and the English root `404.html` for any other path.
 * The non-root branch is only a guard.
 *
 * @param request - The incoming request.
 *
 * @returns The redirect to the language, never cached without varying on the
 * header it was picked from, or a bare 404 for every other path.
 */
export default {
  fetch(request: Request): Response {
    if (new URL(request.url).pathname !== "/") {
      return new Response(null, { status: 404 })
    }

    const locale = pickLocale(request.headers.get("Accept-Language"))

    return new Response(null, {
      status: 302,
      headers: {
        Location: new URL(`/${locale}`, request.url).href,
        Vary: "Accept-Language",
      },
    })
  },
}
