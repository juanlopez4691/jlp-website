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
├── i18n/         dictionaries (es.ts, en.ts) and useTranslations()
├── libs/         helpers, such as cn() in utils.ts
├── pages/        routes; [lang]/ holds the localized pages
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
docker compose exec app bun run check
docker compose exec app bun run build
```

Without Docker: `bun install`, `bun run dev` (http://localhost:4321).

Run `lint`, `format:check`, `check` (the Astro type check) and `build` before
reporting work as done.

## Code rules

- **Tailwind-native.** Use default classes and values. Add a custom value only
  when the design needs one and Tailwind has none; it goes in `theme.css`.
  The two radii with no class, 28px and 48px, are `rounded-[28px]` and
  `rounded-[48px]`.
- **Breakpoints are the defaults, and four are used**: base, `md` (768), `lg`
  (1024) and `xl` (1280). Do not use `sm` or `2xl`. Between 768 and 1023px the
  tablet layout applies. The header links show from `lg`, not from the `xl` of
  its Penpot variant, and the hero image from `xl`. There is no fluid scaling
  and no `clamp()`.
- **Layout.** Blocks are full width. The inner container is
  `max-w-6xl mx-auto` (1152px), with `px-8` below `xl` and `xl:px-0` from `xl`.
  At 1280 the container is exactly 1152 wide, and the margin is the space
  around it.
- **Cards.** In every card the last part is pinned to the bottom, whatever the
  length of the content: the pills of a work card (also the outline ones) and
  the author name and role of a recommendation. Cards in a row share the
  height of the tallest (`h-full`); the card is `flex flex-col` and the text
  above the pinned part is `flex-1` (or the pinned part has `mt-auto`).
- **Colors and fonts** come from `theme.css`: saffron, coral, teal, mint and
  navy; Familjen Grotesk for display, Figtree for text. No gradients,
  shadows or emoji.
- **Components.** One Astro file per component, named like the design. Variant
  properties in Penpot become props (`Button` takes `type`, `Pill` takes `kind`
  and `tone`). Merge classes with `cn()` so callers can override them. Text
  comes in as props or slots; components hold no copy.
- **Section arrow.** A block that has the arrow takes the color of the block
  above it as a prop (`arrow`: `saffron`, `coral`, `teal`, `mint` or `navy`; no
  prop means no arrow), so the block can follow any other. The page sets the
  prop from its own block order. Never hard-code the color inside a block.
  Tailwind only sees complete class names, so map each color to its class in a
  lookup object and do not build class names from strings.
- **Accessibility.** Semantic HTML, a visible focus state, alt text on images,
  and the `jsx-a11y` lint rules must pass.
- **CSP.** The policy in `public/_headers` allows only same-origin styles,
  images and fonts. No inline `<style>` or `<script>`, no external hosts, no
  third-party scripts. `astro.config.mjs` keeps stylesheets as separate files
  for this reason.
- **Languages.** Spanish (default) and English, at `/es/` and `/en/`, with
  Astro's i18n routing; `/` redirects to `/es/`. Pages live in
  `src/pages/[lang]/`. All copy is in the dictionaries `src/i18n/es.ts` and
  `en.ts`, which must have the same keys (`en.ts` is typed against `es.ts`).
  Components receive `locale` and read `useTranslations(locale)`; they hold no
  copy. Build links with `getRelativeLocaleUrl` from `astro:i18n`. Adding a
  language means updating `astro.config.mjs` and `src/i18n/index.ts`.

## Git

- Agents may commit, on their own branch in their own worktree. Use the
  `git-commit` skill. Never commit to `main`, and never merge or rebase onto
  `main`.
- Conventional commits, enforced by commitlint: no scope, and the extra types
  `ai` and `content` exist.
- One topic per commit. Concise, human-readable message, no "and", no body.
- The hooks (Husky) run inside the checkout's Docker container. If it is not
  running, start it with `./scripts/up.sh`. Never use `--no-verify`; if a hook
  fails, fix the cause or report it.
- Do not touch `.env`, `bun.lock` or `dist/` by hand.

## Workflow

One feature or fix per worktree, one worktree per pull request.

1. **Worktree.** From the main checkout, unless you are already in a worktree
   that is not `main`:

   ```bash
   git worktree add ../jlp-website-<topic> -b <type>/<topic>
   cd ../jlp-website-<topic>
   ./scripts/setup.sh
   ```

   `<type>` is a commit type (`feat`, `fix`, `docs`, `ai`, ...) and `<topic>` is
   short and in kebab-case, such as `feat/header`. The design repo stays at
   `../jlp-website-design`. The site runs at
   `https://<topic>.lojopez.test`, because the directory name drops the
   `jlp-website-` prefix.

2. **Work and commit** as described above.
3. **Pull request.** When the checks pass, push the branch and open a draft PR
   against `main` with `gh`:

   ```bash
   git push -u origin <type>/<topic>
   gh pr create --draft --base main --title "<type>: <subject>" --body-file <file>
   ```

   The title follows the commit rules. The body is short: what changed, how
   you checked it (the commands and the breakpoints you compared with Penpot),
   and open questions or decisions the spec did not cover. End it with the
   agent attribution line. Never merge the PR, and report its URL.

## Docs

`README.md` explains how to run the site. Update it when a command, a
requirement or the dev environment changes.
