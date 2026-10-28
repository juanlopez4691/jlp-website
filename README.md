# jlp-website

Source for Joan López personal website.

Astro, Tailwind CSS v4 and TypeScript, served as static assets from
Cloudflare Workers.

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

5. Visit **https://lojopez.test**.

The dev server runs with hot reload, so changes show up straight away.

> [!CAUTION]
> The Docker scripts (`scripts/*.sh`) only support macOS for now.

> [!NOTE]
> On the first run, macOS asks for your password once, to trust the local SSL
> certificate.

#### Commands

| Command              | What it does                                      |
| -------------------- | ------------------------------------------------- |
| `./scripts/up.sh`    | Start this checkout                               |
| `./scripts/down.sh`  | Stop it, and the router if nothing else uses it   |
| `./scripts/setup.sh` | Rewrite `.env`, then start. Safe to run any time  |

All three accept `--verbose` (or `-v`) for full output instead of one line per
step.

Run project scripts inside the app container, from the checkout's root:

```bash
docker compose exec app bun run build
docker compose exec app bun run lint
docker compose exec app bun run format
```

#### Git worktrees

Each [git worktree](https://git-scm.com/docs/git-worktree) gets its own
containers, port and domain, so several can run at the same time:

```bash
git worktree add ../my-feature
cd ../my-feature
./scripts/setup.sh
```

That checkout is served at **https://my-feature.lojopez.test**, next to
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

## License

[MIT](./LICENSE)
