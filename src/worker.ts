import type { Locale } from "@/i18n"

/**
 * Picks the language of the site from the `Accept-Language` header: the first
 * one the visitor can read, in their order of preference. Catalan reads
 * Spanish, and a header with no match falls back to English.
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
 * the browser asks for. Only `/` runs the Worker. Other missing paths get the
 * nearest `404.html` from `not_found_handling`, so the non-root branch is only
 * a guard.
 *
 * @returns The redirect to the language, or a 404 for any other path.
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
