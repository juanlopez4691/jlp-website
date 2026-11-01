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
    greeting: "Hola, soy",
    name: "Joan López",
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
    experience: { label: "Experiencia", value: "+25 años" },
    clients: { label: "Clientes", value: "+15 empresas desde 2021" },
    location: { label: "Ubicación", value: "Cerca de Barcelona, España" },
    languages: { label: "Idiomas", value: "Castellano, catalán, inglés" },
  },
  services: {
    eyebrow: "Servicios",
    title: "Cómo puedo ayudarte",
    items: [
      {
        title: "WordPress",
        body: "Temas a medida, plugins, tiendas WooCommerce y procesos de compra, con integraciones de APIs, CRM, ERP y pasarelas de pago.",
      },
      {
        title: "Laravel y Statamic",
        body: "Aplicaciones web, APIs y paneles de administración con Filament, y webs en Statamic con modelos de contenido a medida y fieldtypes propios.",
      },
      {
        title: "Migraciones",
        body: "De plataformas antiguas y webs estáticas a WordPress o Statamic, conservando tu contenido, tus URLs y tu SEO.",
      },
      {
        title: "Rendimiento",
        body: "Webs y aplicaciones más rápidas: Core Web Vitals, consultas lentas, caché y profiling.",
      },
      {
        title: "APIs e integraciones",
        body: "Diseño e implementación de APIs e integraciones con servicios de terceros.",
      },
      {
        title: "Mantenimiento y soporte",
        body: "Actualizaciones, parches de seguridad, monitorización y mejoras tras el lanzamiento.",
      },
    ],
  },
  quote: {
    text: "Asume la responsabilidad de su trabajo, presta mucha atención al detalle y entrega siempre resultados de gran calidad.",
    name: "Jordi Pallarés",
    role: "Consultor IT y desarrollador, XMi Tech",
  },
  work: {
    eyebrow: "Trabajos destacados",
    title: "Lo que he construido",
    moreTitle: "Más trabajos",
    items: [
      {
        client: "Zone Soft",
        title: "Cumplimiento de la facturación electrónica TicketBAI",
        body: "Una API centralizada que integra la facturación electrónica TicketBAI para las tres provincias vascas (Álava, Bizkaia y Gipuzkoa), con firma digital XAdES-T.",
        result: "Cumplimiento normativo completo desde el lanzamiento.",
        chips: ["Slim Framework", "SOLID", "XAdES-T"],
      },
      {
        client: "8Belts",
        title: "Proceso de compra e integraciones de ecommerce",
        body: "Una web WooCommerce con un proceso de compra totalmente a medida e integraciones con Holded, HubSpot y la API de la plataforma de 8Belts.",
        result:
          "Más eficiencia operativa y tiempos de carga por debajo de 1,5 s.",
        chips: ["WooCommerce", "Holded", "HubSpot"],
      },
      {
        client: "Efiori",
        title: "Automatización de un marketplace",
        body: "Validación automática de la lógica de negocio de un marketplace de flores, y un motor de fechas de entrega a medida según la ubicación del cliente, la fecha del pedido, el stock y la disponibilidad del servicio de reparto.",
        result:
          "Asignación de proveedores y cálculo de márgenes más precisos, y menos tiempo por pedido.",
        chips: ["WooCommerce"],
      },
      {
        client: "Vibliotec",
        title: "Plataforma de formación en vídeo",
        body: "Hecha desde cero, con un reproductor de vídeo propio, entrega protegida desde Vimeo, comentarios sincronizados al minuto y un módulo que permite retomar el último vídeo del curso desde cualquier dispositivo.",
        result:
          "Una plataforma SaaS de aprendizaje en vídeo para entrenadores deportivos.",
        chips: ["Craft CMS", "Vimeo"],
      },
      {
        client: "Play Your Brand",
        title: "CRM a medida",
        body: "Codirigí la arquitectura, el diseño de la base de datos y toda la implementación, e introduje CI/CD y tests automatizados. Dirigí la migración completa de la base de datos al nuevo esquema.",
        result: "Migración completada con una pérdida de datos mínima.",
        chips: ["Laravel", "Filament"],
      },
      {
        client: "Abacum",
        title: "Migración de la web",
        body: "Migré la web SaaS de producto desde Webflow a WordPress.",
        result:
          "Mejor experiencia editorial, flexibilidad en el diseño de contenidos y tiempos de carga optimizados.",
        chips: ["Webflow", "WordPress"],
      },
    ],
    more: [
      {
        client: "Mútua de Propietarios",
        title: "Webs, portales y herramientas para agentes",
        body: "Responsable de la web corporativa, las webs satélite y landing pages, de las aplicaciones web y los portales de gestión para agentes de seguros.",
        chips: ["Joomla", "WordPress", "CakePHP", "Laravel"],
      },
      {
        client: "Timeular (ahora EARLY)",
        title: "Web, suscripciones y conexión con el SaaS",
        body: "Miembro del equipo responsable de la web, el sistema de suscripciones y pagos con Stripe y la conexión con la plataforma SaaS del producto.",
        chips: ["WordPress", "WooCommerce", "Stripe"],
      },
      {
        client: "Verse",
        title: "Migración de una web estática a WordPress",
        body: "Migré una web estática en Angular a WordPress, conservando todo el contenido y dando al equipo control total sobre la estructura de las páginas.",
        chips: ["WordPress", "Gutenberg", "ACF"],
      },
    ],
  },
  recommendations: {
    eyebrow: "Recomendaciones",
    title: "Lo que dicen de mí",
    all: "Léelas todas en LinkedIn",
    allHref:
      "https://www.linkedin.com/in/juanlopez4691/details/recommendations/",
    newTab: "(se abre en una pestaña nueva)",
    items: [
      {
        id: "carlos-alberto-garcia-de-la-calera-dassi",
        name: "Carlos Alberto García de la Calera Dassi",
        role: "Senior Product Manager, client · Translated from Spanish",
        href: "https://www.linkedin.com/in/carlos-garcia-calera-dassi/",
        quote: [
          "I had the chance to work with Joan and my experience was excellent. He is a WordPress developer with solid technical ability, especially notable for the quality and clarity of his code and his concern for building scalable, maintainable solutions.",
        ],
      },
      {
        id: "manuel-bruschi",
        name: "Manuel Bruschi",
        role: "Co-Founder and CEO, Timeular (now EARLY)",
        href: "https://www.linkedin.com/in/manuel-bruschi/",
        quote: [
          "WooCommerce and payment systems can be a beasts, but Joan's optimistic attitude, attention to detail, extensive experience, and persistence managed to tame them. Besides that everyone within the company loved to have his uplifting attitude around.",
        ],
      },
      {
        id: "julia-mestieri",
        name: "Julià Mestieri Ferrer",
        role: "Web developer colleague at netzstrategen",
        href: "https://www.linkedin.com/in/julia-mestieri-ferrer/",
        quote: [
          "I had the chance to work with Joan for about 1 year at netzstrategen. Both of us were web developers in the same team and worked together in lots of big and small projects: corporate sites, e-commerce, media publishers...",
          "I learned a lot from Joan. His huge experience is supporting all his decisions. He can manage customers and projects assertively and meeting all the best expectations.",
        ],
      },
      {
        id: "jordi-pallares",
        name: "Jordi Pallarés",
        role: "IT consultant and developer, XMi Tech",
        href: "https://www.linkedin.com/in/jordi-pallares-1b527418/",
        quote: [
          "I had the pleasure of working with Joan on several projects. He is an excellent developer and someone I've always been able to rely on. He takes ownership of his work, pays close attention to detail, and consistently delivers high-quality results.",
        ],
      },
      {
        id: "tom-mursell",
        name: "Tom Mursell",
        role: "CMO, Timeular (now EARLY)",
        href: "https://www.linkedin.com/in/mursell/",
        quote: [
          "Joan's great to work with. He's super supportive, knowledgeable, great at what he does and always there to help carry the team through hard projects (we worked on our fair share of those together).",
        ],
      },
    ],
  },
}

export type Dictionary = typeof es
