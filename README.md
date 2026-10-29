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
├── i18n/         dictionaries (es.ts, en.ts) and the translation helper
├── layouts/      the HTML shell
├── libs/         helpers, such as the class merge utility
├── pages/        routes; [lang]/ holds the localized pages
└── styles/       global.css and the Tailwind theme
public/_headers   response headers, including the CSP
scripts/          Docker dev environment scripts
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
4. Run the setup script:

   ```bash
   ./scripts/setup.sh
   ```

5. Visit **<https://lojopez.test>**.

The dev server runs with hot reload, so changes show up straight away.

> [!CAUTION]
> The Docker scripts (`scripts/*.sh`) only support macOS for now.

> [!NOTE]
> On the first run, macOS asks for your password once, to trust the local SSL
> certificate.

#### Commands

| Command              | What it does                                     |
| -------------------- | ------------------------------------------------ |
| `./scripts/up.sh`    | Start this checkout                              |
| `./scripts/down.sh`  | Stop it, and the router if nothing else uses it  |
| `./scripts/setup.sh` | Rewrite `.env`, then start. Safe to run any time |

All three accept `--verbose` (or `-v`) for full output instead of one line per
step.

#### Running project scripts

The scripts in `package.json` run inside the `app` container, from the
checkout's root. The form is `docker compose exec app <command>`: `app` is the
service name from `compose.yaml`, and the command goes after it.

```bash
docker compose exec app bun run lint
```

| Script         | Run it                | What it does                                     |
| -------------- | --------------------- | ------------------------------------------------ |
| `dev`          | Starts by itself      | The dev server. The container runs it on start   |
| `build`        | In the container      | Build the site into `dist/`                      |
| `lint`         | In the container      | Run ESLint                                       |
| `format`       | In the container      | Format the code with Prettier                    |
| `format:check` | In the container      | Check the formatting without changing files      |
| `astro`        | In the container      | The Astro CLI, for example `bun run astro check` |
| `preview`      | On your machine       | Build, then serve `dist/` with Wrangler          |
| `deploy`       | On your machine       | Build and deploy to Cloudflare                   |
| `prepare`      | Runs on `bun install` | Sets up the git hooks. You never run it by hand  |

`preview` and `deploy` start Wrangler. `deploy` needs your Cloudflare login,
and the container only publishes the dev server's port, so run both with Bun on
your machine (see Option B). Run `bun install` there first.

#### How it works

`./scripts/setup.sh` does the following, and `./scripts/up.sh` repeats the
steps that are still missing:

1. Writes `.env` from `.env.example`. The file is git-ignored and `setup.sh`
   rewrites it, so don't edit it by hand.
2. Creates one Docker network and one shared [Caddy](https://caddyserver.com/)
   container, the router. It listens on ports 80 and 443 and serves HTTPS for
   `lojopez.test` and its subdomains with its own certificate. If something
   else already uses those ports, `up.sh` says what and stops.
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
  running. If it isn't, the commit aborts and tells you to run
  `./scripts/up.sh`.

#### Troubleshooting

| Problem                                                             | What to do                                                       |
| ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `run ./scripts/setup.sh first` from Docker                          | `.env` is missing. Run `./scripts/setup.sh`                      |
| `Commit aborted. The app container ... not running`                 | Run `./scripts/up.sh`, then commit again                         |
| The page shows an error about a missing module or a disabled option | Restart the container, see above                                 |
| `up.sh` stops and names what uses port 80 or 443                    | Stop that program, then run `up.sh` again                        |
| Browser warns about the certificate                                 | Run `./scripts/up.sh`, it trusts the certificate again if needed |
| `lojopez.test` doesn't resolve                                      | Check the `.test` DNS step in the setup above                    |

#### Git worktrees

Each [git worktree](https://git-scm.com/docs/git-worktree) gets its own
containers, port and domain, so several can run at the same time:

```bash
git worktree add ../my-feature
cd ../my-feature
./scripts/setup.sh
```

That checkout is served at **<https://my-feature.lojopez.test>**, next to
`lojopez.test`. A single shared [Caddy](https://caddyserver.com/) router
handles HTTPS for all of them, and `down.sh` only stops it once no checkout is
using it.

This lets several AI agents work side by side, each in its own worktree with
its own running instance.

#### Orca

I use [Orca](https://www.onorca.dev/) and create a worktree there for each
feature. Pointing its setup and archive scripts at this repo's own gives every
new worktree a running Docker environment, with no manual step:

| Orca setting                                     | Value                                  |
| ------------------------------------------------ | -------------------------------------- |
| Setup script                                     | `$ORCA_WORKTREE_PATH/scripts/setup.sh` |
| When to run                                      | Run by default                         |
| Wait for setup to complete before starting agent | On                                     |
| Archive script                                   | `$ORCA_WORKTREE_PATH/scripts/down.sh`  |

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

## Languages

The site is in Spanish (`/es/`, the default) and English (`/en/`), using
[Astro's i18n routing](https://docs.astro.build/en/guides/internationalization/).
The root `/` redirects to `/es/`.

All copy lives in two dictionaries, `src/i18n/es.ts` and `src/i18n/en.ts`.
`en.ts` is typed against `es.ts`, so a missing or extra key fails the type
check. Components get the language as a `locale` prop and read their text with
`useTranslations(locale)`.

To add a language, add its code to `i18n.locales` in `astro.config.mjs` and to
`locales` in `src/i18n/index.ts`, then create its dictionary.

## Work in progress

The site is hidden from search engines in two places. Remove both at launch:

- the `robots` meta tag in `src/layouts/Main.astro`
- the `X-Robots-Tag` rule in `public/_headers`

## Security headers

`public/_headers` sets basic security headers and a Content-Security-Policy in
report-only mode. Browsers only log violations in the console, nothing is
blocked. Once the design is settled and the console is clean, rename
`Content-Security-Policy-Report-Only` to `Content-Security-Policy`.

Headers from `_headers` apply to the deployed site and to `bun run preview`,
not to `bun run dev`.

## Deployment

The site is built into `dist/` and served as static assets by a Cloudflare
Worker, configured in `wrangler.jsonc`. It uses the custom domain `lojopez.dev`.

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

## License

[MIT](./LICENSE)
