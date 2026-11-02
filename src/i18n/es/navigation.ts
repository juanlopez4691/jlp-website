export const navigation = {
  sections: {
    home: "Inicio",
    services: "Servicios",
    work: "Trabajo",
    recommendations: "Recomendaciones",
    process: "Proceso",
    experience: "Experiencia",
    stack: "Stack",
    contact: "Contacto",
  },
  legal: [
    { label: "Aviso legal", slug: "aviso-legal" },
    { label: "Privacidad", slug: "privacidad" },
    { label: "Cookies", slug: "cookies" },
  ],
  external: {
    cv: {
      label: "Descarga mi CV",
      href: "/downloads/cv-joan_lopez-es.pdf",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/juanlopez4691/",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/juanlopez4691",
    },
  },
  newTab: "(se abre en una pestaña nueva)",
}

export type NavigationCopy = typeof navigation
