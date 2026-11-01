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
}

export type Dictionary = typeof es
