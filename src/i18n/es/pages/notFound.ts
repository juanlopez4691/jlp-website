import type { PageCopy } from "@/i18n"

export const notFoundPage = {
  title: "Página no encontrada | Joan López",
  heading: "404",
  text: "Lo siento Ícaro, volaste demasiado cerca del Sol.",
  link: "Empecemos desde el principio.",
} satisfies PageCopy & { heading: string; text: string; link: string }

export type NotFoundPageCopy = typeof notFoundPage
