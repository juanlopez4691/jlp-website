# jlp-website

Source for Joan López personal website.

Astro, Tailwind CSS v4 and TypeScript, served as static assets from
Cloudflare Workers.

## Commands

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
