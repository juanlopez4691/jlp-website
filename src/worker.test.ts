import { expect, test } from "bun:test"
import worker from "./worker"

type Env = Parameters<typeof worker.fetch>[1]

/** A stand-in for the `ASSETS` binding: it records the URL and answers the page. */
const assetEnv = () => {
  const requested: string[] = []

  const env: Env = {
    ASSETS: {
      fetch: async (input: URL) => {
        requested.push(input.href)

        return new Response("not found", {
          headers: { "Content-Type": "text/html" },
        })
      },
    },
  }

  return { env, requested }
}

/** The `/` request, with no header when the browser sends none. */
const visitRoot = async (acceptLanguage?: string) => {
  const headers: Record<string, string> = {}

  if (acceptLanguage) headers["Accept-Language"] = acceptLanguage

  return worker.fetch(
    new Request("https://lojopez.dev/", { headers }),
    assetEnv().env
  )
}

test("Spanish reads Spanish", async () => {
  const response = await visitRoot("es-ES,es;q=0.9")

  expect(response.status).toBe(302)
  expect(response.headers.get("Location")).toBe("https://lojopez.dev/es")
  expect(response.headers.get("Vary")).toBe("Accept-Language")
})

test("Catalan reads Spanish", async () => {
  const response = await visitRoot("ca")

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/es")
})

test("English reads English", async () => {
  const response = await visitRoot("en-GB")

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/en")
})

test("no header falls back to English", async () => {
  const response = await visitRoot()

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/en")
})

test("a header with no match falls back to English", async () => {
  const response = await visitRoot("fr, de")

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/en")
})

test("quality order beats header order", async () => {
  const response = await visitRoot("fr, ca;q=0.8, en;q=0.9")

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/en")
})

test("a language with q=0 is excluded", async () => {
  const response = await visitRoot("es;q=0")

  expect(response.headers.get("Location")).toBe("https://lojopez.dev/en")
})

test("the 404 page keeps its status and its page", async () => {
  const { env, requested } = assetEnv()

  const response = await worker.fetch(
    new Request("https://lojopez.dev/es/404?x=1"),
    env
  )

  expect(response.status).toBe(404)
  expect(await response.text()).toBe("not found")
  expect(response.headers.get("Content-Type")).toBe("text/html")
  expect(requested).toEqual(["https://lojopez.dev/es/404"])
})
