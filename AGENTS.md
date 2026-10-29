# AGENTS.md

Instructions for AI agents working in this repository.

## Project

Personal portfolio of Joan López, a freelance web developer, at lojopez.dev.
Static site, in Spanish and English. Astro 7, Tailwind CSS v4, TypeScript and
Bun, served as static assets from Cloudflare Workers.

## Design source

The design is the source of truth. Do not invent layout, sizes or copy.

- Design repo: `../jlp-website-design`. Read `README.md`, `tokens.json` and
  `components/<Name>/README.md` before building a component.
- Penpot file: pages `00 Foundations`, `01 Components` and `02 Home`.
- The design direction is "Color blocks".
- Words matter: a full-width section of the page is a **block**, never a
  "band". Components are grouped as atoms (single elements), molecules (small
  groups with one job) and blocks.

## Structure

```
src/
├── components/   atoms/, molecules/, blocks/ (PascalCase, same name as the design)
├── layouts/      Main.astro, the HTML shell
├── libs/         helpers, such as cn() in utils.ts
├── pages/        routes
├── styles/       global.css and theme.css (Tailwind theme)
└── assets/       images processed by Astro
public/_headers   response headers, including the CSP
```

The Home page is a list of block components, in the same order as `02 Home`.

## Commands

Prefer the Docker environment (see `README.md`); run scripts in the container:

```bash
docker compose exec app bun run lint
docker compose exec app bun run format:check
docker compose exec app bun run build
```

Without Docker: `bun install`, `bun run dev` (http://localhost:4321).

Run `lint`, `format:check` and `build` before reporting work as done.

## Code rules

- **Tailwind-native.** Use default classes and values. Add a custom value only
  when the design needs one and Tailwind has none; it goes in `theme.css`.
  The two radii with no class, 28px and 48px, are `rounded-[28px]` and
  `rounded-[48px]`.
- **Breakpoints are the defaults**: base, `md` (768) and `xl` (1280). Sizes
  step at these points; there is no fluid scaling and no `clamp()`.
- **Layout.** Blocks are full width. The inner container is
  `max-w-6xl mx-auto` (1152px), with `px-8` and `xl:px-16` as the gutter.
- **Colors and fonts** come from `theme.css`: saffron, coral, teal, mint and
  navy; Familjen Grotesk for display, Figtree for text. No gradients,
  shadows or emoji.
- **Components.** One Astro file per component, named like the design. Variant
  properties in Penpot become props (`Button` takes `type`, `Pill` takes `kind`
  and `tone`). Merge classes with `cn()` so callers can override them. Text
  comes in as props or slots; components hold no copy.
- **Accessibility.** Semantic HTML, a visible focus state, alt text on images,
  and the `jsx-a11y` lint rules must pass.
- **CSP.** The policy in `public/_headers` allows only same-origin styles,
  images and fonts. No inline `<style>` or `<script>`, no external hosts, no
  third-party scripts. `astro.config.mjs` keeps stylesheets as separate files
  for this reason.
- **Languages.** The site has Spanish and English. How routing and copy are
  organized is not decided yet; ask before building it.

## Git

- Agents may commit, on their own branch or worktree. Use the `git-commit`
  skill. Never commit to `main`, and never push, merge or rebase onto `main`
  unless asked.
- Conventional commits, enforced by commitlint: no scope, and the extra types
  `ai` and `content` exist.
- One topic per commit. Concise, human-readable message, no "and", no body.
- The hooks (Husky) run inside the checkout's Docker container. If it is not
  running, start it with `./scripts/up.sh`. Never use `--no-verify`; if a hook
  fails, fix the cause or report it.
- Do not touch `.env`, `bun.lock` or `dist/` by hand.

## Docs

`README.md` explains how to run the site. Update it when a command, a
requirement or the dev environment changes.
