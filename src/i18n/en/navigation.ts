import type { NavigationCopy } from "../es/navigation"

export const navigation: NavigationCopy = {
  sections: {
    home: "Home",
    services: "Services",
    work: "Work",
    recommendations: "Recommendations",
    process: "Process",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
  },
  legal: [
    { label: "Legal notice", slug: "legal-notice" },
    { label: "Privacy", slug: "privacy" },
    { label: "Cookies", slug: "cookies" },
  ],
  external: {
    cv: {
      label: "Download my CV",
      href: "/downloads/cv-joan_lopez-en.pdf",
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
  newTab: "(opens in a new tab)",
}
