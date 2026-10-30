import type { Dictionary } from "./es"

/** English copy. Typed against the Spanish dictionary, so keys can't drift. */
export const en: Dictionary = {
  meta: {
    title: "Joan López | Web developer",
  },
  nav: {
    languageLabel: "Language",
    sectionsLabel: "Sections",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: {
      services: "Services",
      work: "Work",
      recommendations: "Recommendations",
      process: "Process",
      experience: "Experience",
      stack: "Stack",
      contact: "Contact",
    },
  },
  hero: {
    availability: "Open to freelance, contract and full-time work",
    availabilityShort: "Open to freelance and full-time work",
    title: "Hello, I'm Joan López",
    role: "Senior web developer.",
    tagline:
      "I forge reliable sites with WordPress, WooCommerce, Laravel and Statamic.",
    lead: "I take care of the technical side, from architecture to launch, so your project works on day one and stays fast, secure and easy to maintain.",
    contact: "Tell me about your project",
    cv: "Download my CV",
    imageAlt: "Woodcut of a blacksmith at the anvil",
  },
}
