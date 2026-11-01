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
    availabilityShort: "Abierto a trabajo freelance y jornada completa",
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
  process: {
    eyebrow: "Mi proceso",
    title: "Cómo trabajo",
    steps: [
      {
        title: "1. Escuchar y entender",
        body: "Analizamos juntos tus objetivos, tu web o sistema actual y cualquier limitación.",
      },
      {
        title: "2. Planificar y proponer",
        body: "Defino la arquitectura, el stack técnico, las integraciones y te preparo un presupuesto.",
      },
      {
        title: "3. Construir y verificar",
        body: "Entrego por iteraciones y te voy enseñando los progresos, con tests y análisis estático en el pipeline.",
      },
      {
        title: "4. Lanzar y mantener",
        body: "Despliego, reviso el rendimiento, la seguridad y mantengo todo al día tras el lanzamiento.",
      },
    ],
    principles: [
      {
        title: "Me ocupo de la parte técnica de principio a fin",
        body: "Me encargo de la arquitectura, la implementación, el rendimiento, la seguridad, flujos de CI/CD, la entrega y el mantenimiento.",
      },
      {
        title: "Construyo para el uso real",
        body: "Escucho con atención tus requisitos y los convierto en productos que aguantan el uso real. Colaboro con diseñadores, desarrolladores y responsables de producto.",
      },
      {
        title: "Tests y análisis estático en el pipeline",
        body: "Respaldo el código con tests automatizados, análisis estático, refactorización y formateo automáticos, para detectar errores antes de que lleguen a producción.",
      },
      {
        title: "La IA forma parte de mi día a día",
        body: "Uso agentes de código con IA, junto con tests automatizados y análisis estático, para entregar funcionalidades fiables más rápido.",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "+25 años construyendo para la web",
    jobs: [
      {
        period: "Ene 2021 a la actualidad",
        title: "Arquitecto backend y cofundador",
        company: "somoscuatro",
        body: "Desarrollo técnico para más de 15 empresas de ecommerce, SaaS y plataformas de contenido. Arquitectura, diseño de bases de datos, CI/CD y tests automatizados.",
      },
      {
        period: "Ene 2021 a mar 2022",
        title: "Desarrollador web senior",
        company: "Timeular (ahora EARLY), a través de somoscuatro",
        body: "Responsable compartido de la web de la empresa, infraestructura de pagos e integración de servicios en un equipo de ingeniería de dos personas.",
      },
      {
        period: "Ago 2017 a ene 2021",
        title: "Desarrollador web senior",
        company: "netzstrategen GmbH",
        body: "Proyectos de WordPress y WooCommerce para más de 15 clientes en una agencia digital alemana, incluidos ecosistemas multisitio complejos.",
      },
      {
        period: "Abr 2013 a sep 2017",
        title: "Desarrollador web senior",
        company: "XMi Tech, cliente: Mútua de Propietarios",
        body: "Webs corporativas y satélite, y herramientas para agentes de seguros con CakePHP y Laravel. Impulsé la adopción de Git y diseñé la primera cadena de CI/CD de la empresa.",
      },
      {
        period: "Ene 1995 a abr 2013",
        title: "Desarrollador web freelance",
        company: "Clientes diversos",
        body: "Aplicaciones interactivas en Macromedia Director y Flash. Desarrollo web con HTML, CSS, JavaScript, PHP, WordPress y Joomla.",
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
        role: "Senior Product Manager, cliente",
        href: "https://www.linkedin.com/in/carlos-garcia-calera-dassi/",
        quote: [
          "Tuve la oportunidad de trabajar con Joan y mi experiencia fue excelente. Es un desarrollador WordPress con una sólida capacidad técnica, que destaca especialmente por la calidad y la claridad de su código y por su preocupación por construir soluciones escalables y mantenibles.",
        ],
      },
      {
        id: "manuel-bruschi",
        name: "Manuel Bruschi",
        role: "Cofundador y CEO, Timeular (ahora EARLY) · Traducido del inglés",
        href: "https://www.linkedin.com/in/manuel-bruschi/",
        quote: [
          "WooCommerce y los sistemas de pago pueden ser una bestia, pero la actitud optimista de Joan, su atención al detalle, su amplia experiencia y su constancia consiguieron domarlos. Además, a todo el mundo en la empresa le encantaba tener cerca su actitud positiva.",
        ],
      },
      {
        id: "julia-mestieri",
        name: "Julià Mestieri Ferrer",
        role: "Compañero desarrollador web en netzstrategen · Traducido del inglés",
        href: "https://www.linkedin.com/in/julia-mestieri-ferrer/",
        quote: [
          "Tuve la oportunidad de trabajar con Joan cerca de un año en netzstrategen. Los dos éramos desarrolladores web en el mismo equipo y trabajamos juntos en muchos proyectos grandes y pequeños: webs corporativas, comercio electrónico, medios de comunicación...",
          "Aprendí mucho de Joan. Su enorme experiencia respalda todas sus decisiones. Sabe gestionar clientes y proyectos con seguridad y cumplir las mejores expectativas.",
        ],
      },
      {
        id: "jordi-pallares",
        name: "Jordi Pallarés",
        role: "Consultor IT y desarrollador, XMi Tech · Traducido del inglés",
        href: "https://www.linkedin.com/in/jordi-pallares-1b527418/",
        quote: [
          "Tuve el placer de trabajar con Joan en varios proyectos. Es un desarrollador excelente y alguien en quien siempre he podido confiar. Se responsabiliza de su trabajo, cuida mucho los detalles y entrega siempre resultados de gran calidad.",
        ],
      },
      {
        id: "tom-mursell",
        name: "Tom Mursell",
        role: "CMO, Timeular (ahora EARLY) · Traducido del inglés",
        href: "https://www.linkedin.com/in/mursell/",
        quote: [
          "Es un placer trabajar con Joan. Siempre te apoya, sabe mucho, es muy bueno en lo que hace y siempre está ahí para sacar adelante al equipo en los proyectos difíciles (y juntos pasamos por unos cuantos).",
        ],
      },
    ],
  },
}

export type Dictionary = typeof es
