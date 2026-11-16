# junseong0829.github.io

Personal site of Junseong Lee — https://junseong0829.github.io

A single-page academic profile: a short introduction, followed by publications, education, awards and projects.

## Editing content

All text on the page lives in [`src/content.ts`](src/content.ts). Edit that file to update the bio, contact links or any section entry; no layout code needs to change.

The profile photo is [`public/profile.jpg`](public/profile.jpg).

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run lint
```

## Deployment

Pushing to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The "Last updated" date in the footer is set at build time.

## Structure

| Path | Purpose |
| --- | --- |
| `src/content.ts` | Page content |
| `src/Home.tsx` | Page layout and section menu |
| `src/global.css` | Colors, fonts and component styles |
| `src/routes/` | TanStack Router route registration |

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, TanStack Router.

The previous portfolio site is kept on the `backup/portfolio-2025` branch.
