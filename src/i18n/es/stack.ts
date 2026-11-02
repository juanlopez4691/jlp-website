export const stack = {
  eyebrow: "Stack técnico",
  title: "Herramientas que uso",
  groups: [
    {
      label: "CMS",
      core: true,
      chips: ["WordPress", "WooCommerce", "Statamic", "Craft CMS"],
    },
    {
      label: "Backend",
      core: true,
      chips: ["PHP", "Laravel", "Slim Framework", "APIs REST", "OAuth"],
    },
    { label: "Bases de datos", core: false, chips: ["MySQL", "PostgreSQL"] },
    {
      label: "Arquitectura y testing",
      core: false,
      chips: ["Patrones de diseño", "SOLID", "DRY", "KISS", "Pest", "PHPUnit"],
    },
    {
      label: "Calidad del código",
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
      label: "Rendimiento",
      core: false,
      chips: [
        "Core Web Vitals",
        "Lighthouse",
        "New Relic",
        "Xdebug Profiler",
        "Redis (caché, colas)",
      ],
    },
    {
      label: "Infraestructura",
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
      label: "Herramientas de desarrollo",
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
      label: "Gestión de proyectos",
      core: false,
      chips: ["Asana", "Jira", "Linear", "Agile", "Scrum"],
    },
    {
      label: "IA",
      core: false,
      chips: ["Claude Code", "OpenCode", "Pi", "Orca", "Synara"],
    },
  ],
}

export type StackCopy = typeof stack
