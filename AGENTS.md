# AGENTS.md

Instructions for AI agents working in this repository.

## Project

Personal portfolio of Joan López, a freelance web developer, at lojopez.dev.
Static site, in Spanish and English. Astro 7, Tailwind CSS v4, TypeScript and
Bun, served as static assets from Cloudflare Workers.

## Design source

The design is the source of truth. Do not invent layout, sizes or copy.

- Design repo: `~/Projects/personal/jlp-website-design`. Use this path, not a
  relative one, because worktrees can live elsewhere (Orca puts them in
  `~/orca/workspaces/`). Read `README.md`, `tokens.json` and
  `components/<Name>/README.md` before building a component.
- Penpot file: pages `00 Foundations`, `01 Components`, `02 Home` and
  `03 Content`.
- If the Penpot MCP tools are not loaded in your session, use
  `/Users/joanlopez/Projects/personal/scripts/penpot.sh` on the host (not in Docker).
  Run it without arguments for usage. Read `high_level_overview` first, then
  send Plugin API code with `penpot.sh code <file.js | ->`. Each call is a new
  session, so `storage` does not persist between calls.
- The design direction is "Color blocks".
- Words matter: a full-width section of the page is a **block**, never a
  "band". Components are grouped as atoms (single elements), molecules (small
  groups with one job) and blocks.

## Structure

```
src/
├── components/   atoms/, molecules/, blocks/ (PascalCase, same name as the design)
├── content/      long-form pages in Markdown, as pages/<lang>/<slug>.md
├── layouts/      Main.astro, the HTML shell
├── i18n/         copy, one file per section in es/ and en/, and the helper
├── libs/         helpers, such as cn() in utils.ts
├── pages/        routes; [lang]/ holds the localized pages
├── styles/       global.css, theme.css (Tailwind theme) and article.css (long-form text)
├── assets/       images processed by Astro
└── worker.ts     Cloudflare Worker: redirects `/` to the browser language
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

Without Docker: `bun install`, `bun run dev` (<http://localhost:4321>).

Run `lint`, `format:check`, `check` (the Astro type check) and `build` before
reporting work as done.

## Code rules

- **Tailwind-native.** Use default classes and values. Add a custom value only
  when the design needs one and Tailwind has none; it goes in `theme.css`.
  A value with a single use is an arbitrary value instead, with no token: the
  two radii with no class, 28px and 48px, are `rounded-[28px]` and
  `rounded-[48px]`, and the 404 title is `lg:text-[12.5rem]`.
- **Breakpoints are the defaults, and four are used**: base, `md` (768), `lg`
  (1024) and `xl` (1280). Do not use `sm` or `2xl`. Between 768 and 1023px the
  tablet layout applies. The header links show from `lg`, not from the `xl` of
  its Penpot variant, and the hero image from `lg`, where it shrinks and the
  text keeps its width. The quote block grows from `lg`: its marks are 224px
  wide (192 on tablet, 288 on desktop) and its text column 768px (640 on
  tablet, 896 on desktop). There is no fluid scaling and no `clamp()`.
- **Layout.** Blocks are full width. The inner container is
  `max-w-6xl mx-auto` (1152px), with `px-8` below `xl` and `xl:px-0` from `xl`.
  At 1280 the container is exactly 1152 wide, and the margin is the space
  around it.
- **Cards.** In every card the last part is pinned to the bottom, whatever the
  length of the content: the pills of a work card (also the secondary ones) and
  the author name and role of a recommendation. Cards in a row share the
  height of the tallest (`h-full`); the card is `flex flex-col` and the text
  above the pinned part is `flex-1` (or the pinned part has `mt-auto`).
- **Buttons.** A light fill (saffron, mint) gets an ink border only where it
  would blend into the block behind it; on a dark block it has none. Keyboard
  focus is `:focus-visible` only: a 2px gap and a 2px outline outside the
  border, mint gap and ink ring on light blocks, ink gap and saffron ring on
  dark blocks. No `box-shadow` or `ring-*`, so the focus stays visible in
  forced-colors mode.
- **Colors and fonts** come from `theme.css`: saffron, coral, teal, mint, navy
  and ink; Familjen Grotesk for display, Figtree for text. Ink is the dark
  text, outline and button color and the footer background; navy is only for
  the facts and stack blocks, the featured quote card, and code blocks and focus
  in long-form text. No gradients, except the scroll fade of long-form
  tables and code blocks, and no shadows or emoji.
- **Text style.** Descriptions in cards and blocks (service card, work card,
  step, principle, job row, regular quote, hero lead) are `text-lg` (18px),
  `leading-normal`; the work card body keeps `leading-relaxed`. The company
  line of a job row is `text-base leading-tight`. Paragraphs inside a quote
  are 16px apart (`space-y-4`).
- **Components.** One Astro file per component, named like the design. Variant
  properties in Penpot become props (`Button` and `WorkCard` take `type`, `Pill`
  takes `kind` and `tone`). Merge classes with `cn()` so callers can override
  them. Text
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
- **Long-form pages** (legal pages, later the blog) are the one exception to
  copy living in `src/i18n/`: each is a Markdown file in
  `src/content/pages/<lang>/<slug>.md`, with `title` and `updated` in the
  frontmatter (and `noindex: true` to keep a page out of search engines after
  launch, as the `content-test` reference pages do), and `src/pages/[lang]/[slug].astro` renders it inside `Content`.
  The h1 and the "last updated" line come from the frontmatter, so the body
  starts at the first h2. What Markdown cannot write (definition lists, table
  and figure captions, a blockquote attribution) is raw HTML in the file.
  Two plugins handle Markdown, and neither sees raw HTML.
  `src/libs/markdownScrollable.ts` wraps tables in `.table-scroll`, adds
  `tabindex` to tables and code blocks, and moves column alignment to classes,
  so a raw table needs its own wrapper and a raw `pre` its own `tabindex`.
  `src/libs/markdownLanguage.ts` gives external Markdown links a new tab and the
  `navigation.newTab` hint, and translates the footnote labels, so a raw external
  link needs its own `target`, `rel` and hint. `article.css` draws the icon of
  the `IconExternalLink` atom on any link with `target="_blank"`. Syntax
  highlighting stays off for the CSP. The page copy is `contentPage`, with no
  `satisfies PageCopy`, because the title comes from the frontmatter. Astro
  caches rendered content: after changing a plugin, delete
  `.astro/data-store.json` and `node_modules/.astro/data-store.json`.
- **Languages.** Spanish (default) and English, at `/es/` and `/en/`, with
  Astro's i18n routing. `/` is the only path that runs the Worker
  (`src/worker.ts`): it redirects with a 302 to the first language in the
  browser's `Accept-Language` that the site has (Catalan reads Spanish),
  otherwise to `/en/`. Any other missing path never reaches the Worker:
  `not_found_handling: "404-page"` in `wrangler.jsonc` serves the nearest
  `404.html` with status 404, so `/es/<missing>` gets `src/pages/[lang]/404.astro`
  in Spanish and `/en/<missing>` in English. Cloudflare only finds a flat
  `<lang>/404.html`, which is why `astro.config.mjs` sets
  `build.format: "preserve"`. In `bun run dev` no Worker runs, `/` goes to
  `/es/`, and missing paths get Astro's default 404. Pages live in
  `src/pages/[lang]/`. All copy is in `src/i18n/es/` and `src/i18n/en/`, one
  file per section, and each `en/` file is typed against its `es/` counterpart,
  so keys cannot drift: the `es/` file exports its shape as `<Name>Copy`
  (`HeroCopy`) and the `en/` file uses it. Components receive `locale` and read
  only their own section, plus `navigation` for the shared links:
  `const hero = useTranslations(locale, "hero")`. They hold no copy. The
  `copySections` map in `eslint.config.js` enforces it, and a new component must
  be added to that map before it reads its own section. Page copy lives in
  `src/i18n/{es,en}/pages/<page>.ts`, one file per page, exported as
  `<name>Page` (`homePage`, later `legalNoticePage`), so it never collides with
  a block section such as `contact`. The `es/` file ends with
  `satisfies PageCopy`, which checks its overrides. A section file is its
  block's default copy, and a page replaces part of it with the `copy` prop,
  keeping the override under the block's section name in that page's own file,
  with the same shape in every language. The merge is shallow, so an overridden
  list replaces the whole list, and `navigation` cannot be overridden. Build
  links with `getRelativeLocaleUrl` from `astro:i18n`. Adding a language means
  updating `astro.config.mjs`, `src/i18n/index.ts` and `pickLocale` in
  `src/worker.ts`, creating its folders with the same files, here and in
  `src/content/pages/`, and adding it to `src/libs/markdownLanguage.ts`.

## Git

- Agents may commit, on their own branch in their own worktree. Use the
  `git-commit` skill. Never commit to `main`, and never merge or rebase onto
  `main`.
- Conventional commits, enforced by commitlint: no scope, and the extra types
  `ai` and `content` exist.
- One topic per commit. Concise, human-readable message, no "and", no body.
- The hooks (Husky) run inside the checkout's Docker container. If it is not
  running, start it with `rift up`. Never use `--no-verify`; if a hook
  fails, fix the cause or report it.
- Do not touch `.env`, `bun.lock` or `dist/` by hand.

## Workflow

One feature or fix per worktree, one worktree per pull request.

1. **Worktree.** From the main checkout, unless you are already in a worktree
   that is not `main`:

   ```bash
   git worktree add ../jlp-website-<topic> -b <type>/<topic>
   cd ../jlp-website-<topic>
   rift setup
   ```

   `<type>` is a commit type (`feat`, `fix`, `docs`, `ai`, ...) and `<topic>` is
   short and in kebab-case, such as `feat/header`. The site runs at
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

   Agents post under Joan's `gh` login, so what an agent writes on GitHub must
   be told apart from what Joan writes. Every comment, review and reply starts
   with the line `**Agent: <role>**` and a blank line, where `<role>` is
   `Senior Dev`, `PR reviewer` or `Coder`. A PR or issue body an agent creates
   ends with `Agent: <role>` in its attribution line.

## Docs

`README.md` explains how to run the site. Update it when a command, a
requirement or the dev environment changes.
