# jlp-website

Source for the personal website of Joan López, a freelance web developer, at
[lojopez.dev](https://lojopez.dev). In Spanish and English.

## Tech stack

- [Astro](https://astro.build/) 7, built as a static site
- [Tailwind CSS](https://tailwindcss.com/) v4
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/) for packages and scripts
- [Cloudflare Workers](https://workers.cloudflare.com/) to serve the static
  files

## Design

The design is "Color blocks". It lives in a separate repository,
[jlp-website-design](https://github.com/juanlopez4691/jlp-website-design),
together with the design tokens and a spec for every component. The Penpot file
is the visual reference. Components here keep the names used in the design.

## Project structure

```text
src/
├── assets/       images processed by Astro
├── components/   atoms/, molecules/ and blocks/, named like the design
├── content/      long-form pages in Markdown, as pages/<lang>/<slug>.md
├── i18n/         copy, one file per section in es/ and en/, and the helper
├── layouts/      the HTML shell
├── libs/         helpers, such as the class merge utility
├── pages/        routes; [lang]/ holds the localized pages
├── styles/       global.css, theme.css (Tailwind theme) and article.css
└── worker.ts     Cloudflare Worker: redirects `/` to the browser language
public/
├── _headers      response headers, including the CSP
└── robots.txt    crawler rules and the sitemap URL
rift.yaml         dev environment config for rift
```

## Running this site locally

There are two ways to run it: with [Docker](https://docs.docker.com/get-started/),
or directly with [Bun](https://bun.sh/docs) installed on your system.

### Option A: with Docker

1. Install [Docker](https://docs.docker.com/get-started/) (or
   [OrbStack](https://docs.orbstack.dev/) on macOS) and make sure it's running.
2. Clone the repository:

   ```bash
   git clone git@github.com:juanlopez4691/jlp-website.git && cd jlp-website
   ```

3. Make `.test` domains resolve to your machine, for example with
   [dnsmasq](https://formulae.brew.sh/formula/dnsmasq).
4. Install [rift](https://github.com/LucaPipolo/rift), which runs every
   checkout behind one shared HTTPS router:

   ```bash
   brew install lucapipolo/rift/rift
   ```

5. Set up this checkout:

   ```bash
   rift setup
   ```

6. Visit **<https://lojopez.test>**.

The dev server runs with hot reload, so changes show up straight away.

> [!NOTE]
> On the first run, macOS asks for your password once, to trust the local SSL
> certificate.

#### Commands

| Command       | What it does                                      |
| ------------- | ------------------------------------------------- |
| `rift up`     | Start this checkout                               |
| `rift down`   | Stop it, leaving other checkouts serving          |
| `rift setup`  | Rewrite `.env`, then start. Safe to run any time  |
| `rift status` | Everything the router serves, across all projects |
| `rift doctor` | Check the machine, and offer to fix what it finds |

`rift.yaml` holds the project settings: the name, the `lojopez.test` domain,
the `app` service and its port 4321.

#### Running project scripts

The scripts in `package.json` run inside the `app` container, from the
checkout's root. The form is `docker compose exec app <command>`: `app` is the
service name from `compose.yaml`, and the command goes after it.

```bash
docker compose exec app bun run lint
```

| Script         | Run it                | What it does                                    |
| -------------- | --------------------- | ----------------------------------------------- |
| `dev`          | Starts by itself      | The dev server. The container runs it on start  |
| `build`        | In the container      | Build the site into `dist/`                     |
| `lint`         | In the container      | Run ESLint                                      |
| `format`       | In the container      | Format the code with Prettier                   |
| `format:check` | In the container      | Check the formatting without changing files     |
| `check`        | In the container      | Type-check the `.astro` and TypeScript files    |
| `astro`        | In the container      | The Astro CLI, for example `bun run astro add`  |
| `preview`      | On your machine       | Build, then serve `dist/` with Wrangler         |
| `deploy`       | On your machine       | Build and deploy to Cloudflare                  |
| `prepare`      | Runs on `bun install` | Sets up the git hooks. You never run it by hand |

`preview` and `deploy` start Wrangler. `deploy` needs your Cloudflare login, and
the container only publishes the dev server's port, so run both with Bun on your
machine (see Option B). Run `bun install` there first. Wrangler does not work in
the container either: `node` there is a symlink to Bun, and under Bun it answers
503 to every request.

#### How it works

`rift setup` does the following, and `rift up` repeats the steps that are
still missing:

1. Writes `.env` from `.env.example` (a worktree copies the main checkout's).
   The file is git-ignored and rift rewrites its keys, so don't edit them by
   hand.
2. Creates one Docker network and one shared [Caddy](https://caddyserver.com/)
   container, the router, shared by every rift project on the machine. It
   listens on ports 80 and 443 and serves HTTPS for `lojopez.test` and its
   subdomains with its own certificate. If something else already uses those
   ports, rift says what and stops.
3. Adds the router's certificate to the macOS keychain, once. That's the
   password prompt on the first run.
4. Starts this checkout's `app` container. Every time it starts, it runs
   `bun install --frozen-lockfile` and then the dev server on port 4321.

The container installs its own dependencies in a Docker volume, apart from the
`node_modules` on your machine. You don't need `bun install` on the host to use
Docker.

#### Day to day

- **Logs:** `docker compose logs -f app`
- **Restart:** run `docker compose restart app` after you change
  `package.json`, `bun.lock` or `astro.config.mjs`. The restart installs the
  dependencies again, and the dev server reads the config again. Astro reloads
  its config by itself, but the file change doesn't always reach the container.
- **Commits:** the git hooks run inside the app container, so it has to be
  running. If it isn't, the commit aborts and tells you to run `rift up`.

#### Troubleshooting

| Problem                                                             | What to do                                               |
| ------------------------------------------------------------------- | -------------------------------------------------------- |
| `run rift setup first` from Docker                                  | `.env` is missing. Run `rift setup`                      |
| `Commit aborted. The app container ... not running`                 | Run `rift up`, then commit again                         |
| The page shows an error about a missing module or a disabled option | Restart the container, see above                         |
| `rift up` stops and names what uses port 80 or 443                  | Stop that program, then run `rift up` again              |
| Browser warns about the certificate                                 | Run `rift up`, it trusts the certificate again if needed |
| `lojopez.test` doesn't resolve                                      | Check the `.test` DNS step, or run `rift doctor`         |

#### Git worktrees

Each [git worktree](https://git-scm.com/docs/git-worktree) gets its own
containers, port and domain, so several can run at the same time:

```bash
git worktree add ../jlp-website-my-feature
cd ../jlp-website-my-feature
rift setup
```

That checkout is served at **<https://my-feature.lojopez.test>**, next to
`lojopez.test`: rift drops the `jlp-website-` prefix from the directory name.
A single shared [Caddy](https://caddyserver.com/) router handles HTTPS for all
of them, and `rift down` never stops it (`rift router stop` does).

This lets several AI agents work side by side, each in its own worktree with
its own running instance.

#### Orca

I use [Orca](https://www.onorca.dev/) and create a worktree there for each
feature. Pointing its setup and archive scripts at rift gives every new
worktree a running Docker environment, with no manual step:

| Orca setting                                     | Value                                    |
| ------------------------------------------------ | ---------------------------------------- |
| Setup script                                     | `cd "$ORCA_WORKTREE_PATH" && rift setup` |
| When to run                                      | Run by default                           |
| Wait for setup to complete before starting agent | On                                       |
| Archive script                                   | `cd "$ORCA_WORKTREE_PATH" && rift down`  |

Setup starts the worktree's containers before the agent gets to work; archive
stops them once the worktree is gone.

### Option B: without Docker

1. Install [Bun](https://bun.sh/docs/installation).
2. Clone the repository and start the dev server:

   ```bash
   git clone git@github.com:juanlopez4691/jlp-website.git && cd jlp-website
   bun install && bun run dev
   ```

The site is served at `http://localhost:4321`, without HTTPS.

> [!CAUTION]
> The git hooks run inside the Docker container, so without it running you'll
> need `git commit --no-verify` to commit.

#### Commands

| Command           | What it does                            |
| ----------------- | --------------------------------------- |
| `bun install`     | Install dependencies                    |
| `bun run dev`     | Dev server at `http://localhost:4321`   |
| `bun run build`   | Build the site into `dist/`             |
| `bun run preview` | Build, then serve `dist/` with Wrangler |
| `bun run deploy`  | Build and deploy to Cloudflare          |
| `bun run lint`    | Run ESLint                              |
| `bun run format`  | Format the code with Prettier           |
| `bun run check`   | Type-check the `.astro` and TS files    |

## Languages

The site is in Spanish (`/es`, the default) and English (`/en`), using
[Astro's i18n routing](https://docs.astro.build/en/guides/internationalization/).
The root `/` redirects to `/es` or `/en`, following the browser language
(always `/es` in `bun run dev`).

All copy lives in `src/i18n/es/` and `src/i18n/en/`, one file per section, such
as `hero.ts` or `footer.ts`. Each `en/` file is typed against its `es/`
counterpart, so a missing or extra key fails the type check: the `es/` file
exports its shape as `<Name>Copy` (`HeroCopy`) and the `en/` file uses it.
Components get the language as a `locale` prop and read only their own section,
plus `navigation` for the shared links: `const hero = useTranslations(locale,
"hero")`. The `copySections` map in `eslint.config.js` enforces that, and a new
component must be added to it before it reads its own section.

Page copy lives in `src/i18n/{es,en}/pages/<page>.ts`, one file per page,
exported as `<name>Page` (`homePage`, later `legalNoticePage`); the `es/` file
ends with `satisfies PageCopy`, which checks its overrides. A section file
is a block's default copy. A page can replace part of it with the block's
`copy` prop, keeping the override under the block's section name in that page's
own file, so each language has it too. The merge is shallow, so an overridden
list replaces the whole list, and `navigation` cannot be overridden.

To add a language, add its code to `i18n.locales` in `astro.config.mjs`, to
`locales` in `src/i18n/index.ts` and to `pickLocale` in `src/worker.ts`, create
its folders with the same files as `src/i18n/es/` and `src/content/pages/es/`,
and add it to `src/libs/markdownLanguage.ts`.

## Content pages

Long-form pages, such as the legal pages, are Markdown files in
`src/content/pages/<lang>/<slug>.md`, rendered by
`src/pages/[lang]/[slug].astro`. The frontmatter holds the `title` and the
`updated` date. Pages that translate each other share a `translationKey`, which
links them for the language switcher and the `hreflang` alternates.

## Search engines

`/sitemap.xml` lists every page in both languages, with their translations.
`public/robots.txt` lets search engines crawl everything and blocks AI training
crawlers. To keep a content page out of search results, add `noindex: true` to
its frontmatter: it gets a `noindex` meta tag and leaves the sitemap.

## Security headers

`public/_headers` sets the security headers: a Content-Security-Policy, HSTS
(one year, subdomains included), a Permissions-Policy that turns off the
browser features the site does not use, and the usual `nosniff`, referrer and
frame rules. Check them at <https://securityheaders.com>.

Headers from `_headers` apply to the deployed site and to `bun run preview`,
not to `bun run dev`.

## Deployment

The site is built into `dist/` and served as static assets by a Cloudflare
Worker, configured in `wrangler.jsonc`. It uses the custom domain `lojopez.dev`.
Only `/` runs the Worker (`run_worker_first`), which redirects to the browser
language; everything else is served from `dist/`. A missing path gets the 404
page of its language, `/es/…` in Spanish and `/en/…` in English.

```bash
bun run deploy
```

This needs [Wrangler](https://developers.cloudflare.com/workers/wrangler/) to be
logged in to the Cloudflare account that owns the domain.

## AI agents

The repo is set up so AI agents can work on it, each in its own git worktree
(see [Git worktrees](#git-worktrees)).

- `AGENTS.md` holds the project rules for agents: the design source, code
  conventions and git rules. `CLAUDE.md` points to it.
- `.claude/skills/git-commit` is a skill that commits finished work, one topic
  per commit, following the commit rules below.

Commits follow [Conventional Commits](https://www.conventionalcommits.org/),
with no scope, and two extra types: `content` for site copy and `ai` for agent
instructions. [commitlint](https://commitlint.js.org/) checks every message.

### Agent team

Issues are worked by a small team of agents, coordinated through
[Orca](https://www.onorca.dev/):

- **Senior Dev** (Claude Code) writes the spec, reviews the work and opens a
  draft pull request.
- **Coder** (OpenCode) implements the spec and commits.
- **PR reviewer** (Claude Code) reviews the pull request cold.

Joan approves the spec and merges the pull request. Roles, work files and the
full flow are in [`.agents/team/README.md`](./.agents/team/README.md).

## License

[MIT](./LICENSE)
