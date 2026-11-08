import type { PageCopy } from "@/i18n"

export const homePage = {
  title: "Joan López | Desarrollador web",
  description:
    "Soy Joan López, desarrollador web senior. Forjo sitios web fiables con WordPress, WooCommerce, Laravel y Statamic, desde la arquitectura al lanzamiento.",
} satisfies PageCopy

export type HomePageCopy = typeof homePage
