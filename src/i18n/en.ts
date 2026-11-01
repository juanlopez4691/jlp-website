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
    greeting: "Hello, I'm",
    name: "Joan López",
    role: "Senior web developer.",
    tagline:
      "I forge reliable sites with WordPress, WooCommerce, Laravel and Statamic.",
    lead: "I take care of the technical side, from architecture to launch, so your project works on day one and stays fast, secure and easy to maintain.",
    contact: "Tell me about your project",
    cv: "Download my CV",
    imageAlt: "Woodcut of a blacksmith at the anvil",
  },
  facts: {
    stack: {
      label: "Core stack",
      value: "PHP, Laravel, Statamic, WordPress, WooCommerce",
    },
    experience: { label: "Experience", value: "25+ years" },
    clients: { label: "Clients", value: "15+ companies since 2021" },
    location: { label: "Based in", value: "Barcelona area, Spain" },
    languages: { label: "Languages", value: "Spanish, Catalan, English" },
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    items: [
      {
        title: "WordPress",
        body: "Custom themes, plugins, WooCommerce stores and checkout flows, with APIs, CRM, ERP and payment integrations.",
      },
      {
        title: "Laravel and Statamic",
        body: "Web apps, APIs and Filament admin panels, and Statamic sites with tailored content models and custom fieldtypes.",
      },
      {
        title: "Migrations",
        body: "From legacy platforms and static sites to WordPress or Statamic, keeping your content, URLs and SEO.",
      },
      {
        title: "Performance",
        body: "Faster sites and apps: Core Web Vitals, slow queries, caching and profiling.",
      },
      {
        title: "APIs and integrations",
        body: "Design and implementation of APIs and integrations with third-party services.",
      },
      {
        title: "Maintenance and support",
        body: "Updates, security fixes, monitoring and improvements after launch.",
      },
    ],
  },
}
