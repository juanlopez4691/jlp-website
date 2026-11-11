import type { Locale } from "@/i18n"

type Env = {
  ASSETS: { fetch(input: URL): Promise<Response> }
}

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
 * `/` redirects to the browser's language. The only other paths that reach the
 * Worker are the 404 page's own (`run_worker_first`): they get the page with
 * status 404, not the 200 the asset would answer.
 */
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === "/") {
      const locale = pickLocale(request.headers.get("Accept-Language"))

      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(`/${locale}`, request.url).href,
          Vary: "Accept-Language",
        },
      })
    }

    // Not the request: its If-None-Match could turn this into an empty 304.
    const page = await env.ASSETS.fetch(new URL(url.pathname, request.url))

    return new Response(page.body, { status: 404, headers: page.headers })
  },
}
