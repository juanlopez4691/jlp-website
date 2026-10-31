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
  hero: {
    availability: "Abierto a trabajo freelance, contrato y jornada completa",
    availabilityShort: "Abierto a freelance y jornada completa",
    title: "Hola, soy Joan López",
    role: "Desarrollador web senior.",
    tagline:
      "Forjo webs fiables con WordPress, WooCommerce, Laravel y Statamic.",
    lead: "Me encargo de la parte técnica, desde la arquitectura al lanzamiento, para que tu proyecto funcione desde el primer día y siga siendo rápido, seguro y fácil de mantener.",
    contact: "Cuéntame tu proyecto",
    cv: "Descarga mi CV",
    imageAlt: "Grabado de un herrero en el yunque",
  },
  facts: {
    stack: {
      label: "Stack principal",
      value: "PHP, Laravel, Statamic, WordPress, WooCommerce",
    },
    experience: { label: "Experiencia", value: "Más de 25 años" },
    clients: { label: "Clientes", value: "Más de 15 empresas desde 2021" },
    location: { label: "Ubicación", value: "Área de Barcelona, España" },
    languages: { label: "Idiomas", value: "Español, catalán, inglés" },
  },
}

export type Dictionary = typeof es
