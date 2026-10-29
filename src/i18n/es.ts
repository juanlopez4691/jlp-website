/**
 * Spanish copy. This file is the source of truth for the shape of every
 * dictionary: `en.ts` must have the same keys, or the type check fails.
 */
export const es = {
  meta: {
    title: "Joan López | Desarrollador web",
  },
  nav: {
    languageLabel: "Idioma",
    sectionsLabel: "Secciones",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    links: {
      services: "Servicios",
      work: "Trabajo",
      recommendations: "Recomendaciones",
      process: "Proceso",
      experience: "Experiencia",
      stack: "Stack",
      contact: "Contacto",
    },
  },
  home: {
    role: "Desarrollador web",
    intro: "Estoy preparando mi web para explicarte",
    introEnd: "cómo puedo ayudarte con tu proyecto.",
    soon: "Estará disponible pronto.",
  },
}

export type Dictionary = typeof es
