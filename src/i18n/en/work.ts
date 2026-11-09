import type { WorkCopy } from "../es/work"

export const work: WorkCopy = {
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
      body: "A WooCommerce site with a fully custom sales and checkout flow and integrations with Holded, HubSpot and the 8Belts platform API.",
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
      body: "Migrated the SaaS product website from Webflow to WordPress with a new design, integrations with Brevo, HubSpot and other external services.",
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
}
