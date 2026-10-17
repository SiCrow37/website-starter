# Website Starter

Reusable Next.js App Router baseline using JavaScript and ordinary CSS.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Before shipping, run `npm run lint` and `npm run build`.
`npm start` serves the production build.

## Customize a client copy

- `src/config/site.js`: company name, description, public contact email.
- `src/config/content.js`: home headline, services, project cards.
- `src/config/navigation.js`: navigation labels and paths (create corresponding pages too).
- `src/app/about/page.js`: company story and process.
- `src/app/contact/page.js`: inquiry guidance.
- `src/app/globals.css`: colors, spacing, typography, responsive layout.
- Replace the placeholder photos and starter icons before launch.

Shared Header, Footer, service/project grids, and CallToAction are components.
Only Navigation needs a client boundary, to track the active URL.
The rest of the pages remain Server Components. No database is required.

Contact currently opens an email app. It does not submit a form or store inquiries.
Never place passwords or API keys in the public site configuration.

## Create the metal-shop project

Keep this repository as the generic starter. Use a GitHub template repository to
create a new, separate client repository, then clone it and run npm ci.
Copies do not receive future starter updates automatically.
Before launch, replace all placeholders, verify company claims, add approved photos,
set the real contact email, and implement/test the agreed inquiry workflow.
Add production-domain metadata, sitemap and robots settings once the domain is known.

## Dependency note

Preserves the supplied Next/React versions and lockfile. The previously reported
braces issue is in lint tooling; do not use npm audit fix --force to downgrade
eslint-config-next. Recheck npm audit and npm audit --omit=dev before release.
