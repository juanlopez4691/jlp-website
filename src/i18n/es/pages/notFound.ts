import type { PageCopy } from "@/i18n"

export const notFoundPage = {
  title: "Página no encontrada | Joan López",
  heading: "404",
  text: "Lo siento, creo que te has perdido.",
} satisfies PageCopy & { heading: string; text: string }

export type NotFoundPageCopy = typeof notFoundPage
