import type { StackCopy } from "../es/stack"

export const stack: StackCopy = {
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
}
