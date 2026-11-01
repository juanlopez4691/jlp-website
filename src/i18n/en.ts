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
    cvHref: "/downloads/cv-joan_lopez-en.pdf",
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
  process: {
    eyebrow: "My process",
    title: "How I work",
    steps: [
      {
        title: "1. Listen and learn",
        body: "We go through your goals, your current site or system and any constraints.",
      },
      {
        title: "2. Plan and propose",
        body: "I define the architecture, tech stack, integrations and give you an estimate.",
      },
      {
        title: "3. Build and verify",
        body: "I deliver in iterations and show progress along the way, with tests and static analysis in the pipeline.",
      },
      {
        title: "4. Launch and support",
        body: "I deploy, check performance, security and keep everything updated after launch.",
      },
    ],
    principles: [
      {
        title: "I own the technical side end to end",
        body: "I take care of architecture, implementation, performance, security, CI/CD flows, delivery and maintenance.",
      },
      {
        title: "I build for real use",
        body: "I listen closely to your requirements and turn them into products that hold up in real use. I work well with designers, developers and product stakeholders.",
      },
      {
        title: "Tests and static analysis in the pipeline",
        body: "I back the code with automated tests, static analysis and automatic formatting and refactoring, to catch bugs before they reach production.",
      },
      {
        title: "AI is part of my daily workflow",
        body: "I use AI coding agents, together with automated tests and static analysis, to ship reliable features faster.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "25+ years building for the web",
    jobs: [
      {
        period: "Jan 2021 to Present",
        title: "Backend Architect and Co-Founder",
        company: "somoscuatro",
        body: "Technical delivery for 15+ client companies across ecommerce, SaaS and content platforms. Architecture, database design, CI/CD and automated testing.",
      },
      {
        period: "Jan 2021 to Mar 2022",
        title: "Senior Web Developer",
        company: "Timeular (now EARLY), engaged via somoscuatro",
        body: "Co-owned the company website, payments infrastructure and services integration in a 2-person engineering team.",
      },
      {
        period: "Aug 2017 to Jan 2021",
        title: "Senior Web Developer",
        company: "netzstrategen GmbH",
        body: "WordPress and WooCommerce projects for 15+ clients at a German digital agency, including complex multisite ecosystems.",
      },
      {
        period: "Apr 2013 to Sep 2017",
        title: "Senior Web Developer",
        company: "XMi Tech, client: Mútua de Propietarios",
        body: "Corporate and satellite websites, plus insurance agent tools with CakePHP and Laravel. Led the adoption of Git and designed the company's first CI/CD toolchain.",
      },
      {
        period: "Jan 1995 to Apr 2013",
        title: "Freelance Web Developer",
        company: "Diverse customers",
        body: "Interactive applications in Macromedia Director and Flash. Web development with HTML, CSS, JavaScript, PHP, WordPress and Joomla.",
      },
    ],
  },
  stack: {
    eyebrow: "Tech stack",
    title: "Tools I work with",
    groups: [
      {
        label: "CMS",
        core: true,
        chips: ["WordPress", "WooCommerce", "Statamic", "Craft CMS"],
      },
      {
        label: "Backend",
        core: true,
        chips: ["PHP", "Laravel", "Slim Framework", "REST APIs", "OAuth"],
      },
      { label: "Databases", core: false, chips: ["MySQL", "PostgreSQL"] },
      {
        label: "Architecture and testing",
        core: false,
        chips: ["Design patterns", "SOLID", "DRY", "KISS", "Pest", "PHPUnit"],
      },
      {
        label: "Code quality",
        core: false,
        chips: [
          "PHPStan",
          "Larastan",
          "Rector",
          "Laravel Pint",
          "PHP_CodeSniffer",
        ],
      },
      {
        label: "Performance",
        core: false,
        chips: [
          "Core Web Vitals",
          "Lighthouse",
          "New Relic",
          "Xdebug Profiler",
          "Redis (cache, queues)",
        ],
      },
      {
        label: "Infrastructure",
        core: false,
        chips: [
          "CI/CD",
          "GitHub Actions",
          "Laravel Forge",
          "Laravel Cloud",
          "SpinupWP",
        ],
      },
      {
        label: "Dev tools",
        core: false,
        chips: [
          "Git",
          "Docker",
          "Composer",
          "Vite",
          "WP-CLI",
          "PhpStorm",
          "Zed",
          "Neovim",
        ],
      },
      {
        label: "Project management",
        core: false,
        chips: ["Asana", "Jira", "Linear", "Agile", "Scrum"],
      },
      {
        label: "AI",
        core: false,
        chips: ["Claude Code", "OpenCode", "Pi", "Orca", "Synara"],
      },
    ],
  },
  quote: {
    text: "He takes ownership of his work, pays close attention to detail, and consistently delivers high-quality results.",
    name: "Jordi Pallarés",
    role: "IT consultant and developer, XMi Tech",
  },
  work: {
    eyebrow: "Selected work",
    title: "Things I've built",
    moreTitle: "More work",
    items: [
      {
        client: "Zone Soft",
        title: "TicketBAI e-invoicing compliance",
        body: "A centralized API that bridges TicketBAI e-invoicing for all three Basque provinces (Álava, Bizkaia and Gipuzkoa), with XAdES-T digital signatures.",
        result: "Full regulatory compliance from launch.",
        chips: ["Slim Framework", "SOLID", "XAdES-T"],
      },
      {
        client: "8Belts",
        title: "Ecommerce checkout and integrations",
        body: "A WooCommerce site with a fully custom checkout flow and integrations with Holded, HubSpot and the 8Belts platform API.",
        result: "Better operational efficiency and load times under 1.5 s.",
        chips: ["WooCommerce", "Holded", "HubSpot"],
      },
      {
        client: "Efiori",
        title: "Marketplace automation",
        body: "Automated business-logic validation for a floral marketplace, plus a custom delivery-date engine based on customer location, order date, product stock and delivery service availability.",
        result:
          "More accurate supplier assignment and margin calculation, and less time per order.",
        chips: ["WooCommerce"],
      },
      {
        client: "Vibliotec",
        title: "Video training platform",
        body: "Built from scratch, with a custom video player, protected Vimeo delivery, minute-synced comments and a module that lets users resume the last-viewed course video across devices.",
        result: "A video learning SaaS platform for sports coaching.",
        chips: ["Craft CMS", "Vimeo"],
      },
      {
        client: "Play Your Brand",
        title: "Custom CRM",
        body: "Co-led the architecture, database design and full implementation, and introduced CI/CD and automated testing. Led the full database migration to the new schema.",
        result: "Migration completed with minimal data loss.",
        chips: ["Laravel", "Filament"],
      },
      {
        client: "Abacum",
        title: "Website migration",
        body: "Migrated the SaaS product website from Webflow to WordPress.",
        result:
          "Improved editorial experience, content design flexibility and faster loading times.",
        chips: ["Webflow", "WordPress"],
      },
    ],
    more: [
      {
        client: "Mútua de Propietarios",
        title: "Websites, portals and agent tools",
        body: "Responsible for the corporate website, the satellite sites and landing pages, the web apps and management portals for insurance agents.",
        chips: ["Joomla", "WordPress", "CakePHP", "Laravel"],
      },
      {
        client: "Timeular (now EARLY)",
        title: "Website, subscriptions and SaaS link",
        body: "Member of the team responsible for maintaining the website, the Stripe subscriptions and payments system, and the connection with the product's SaaS platform.",
        chips: ["WordPress", "WooCommerce", "Stripe"],
      },
      {
        client: "Verse",
        title: "Migrate static site to WordPress",
        body: "Migrated a static Angular site to WordPress, keeping all existing content and giving the team full control over page structure.",
        chips: ["WordPress", "Gutenberg", "ACF"],
      },
    ],
  },
  recommendations: {
    eyebrow: "Recommendations",
    title: "What people say about me",
    all: "Read them all on LinkedIn",
    allHref:
      "https://www.linkedin.com/in/juanlopez4691/details/recommendations/",
    newTab: "(opens in a new tab)",
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
  contact: {
    eyebrow: "Contact me",
    title: "Let's talk about what you're building.",
    address: "hello@lojopez.dev",
    email: "Email me",
    linkedin: "LinkedIn",
    linkedinHref: "https://www.linkedin.com/in/juanlopez4691/",
    note: "I reply in Spanish, Catalan or English.",
  },
  footer: {
    github: "GitHub",
    githubHref: "https://github.com/juanlopez4691",
    legal: [
      { label: "Legal notice", slug: "legal-notice" },
      { label: "Privacy", slug: "privacy" },
      { label: "Cookies", slug: "cookies" },
    ],
  },
}
