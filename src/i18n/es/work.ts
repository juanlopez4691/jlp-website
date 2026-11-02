export const work = {
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
}

export type WorkCopy = typeof work
