# H-Project — HyperMatch Creator Marketplace

A Vite-powered, frontend-first creator–brand marketplace demo using vanilla JavaScript and CSS. The source is prepared for GitHub and static hosting such as Cloudflare Pages, Netlify, or Vercel. It does **not** require an Express/Node backend at runtime; Node.js is needed only to run Vite/build the project.

## Run locally

1. Install Node.js 18+.
2. Open this project folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Build and deploy

- Build: `npm run build`
- Output folder: `dist`
- Vercel: Framework preset **Vite**, build command `npm run build`, output directory `dist`.
- Netlify: build command `npm run build`, publish directory `dist`.
- Cloudflare Pages: build command `npm run build`, build output directory `dist`.
- GitHub Pages: can host the built static frontend, but configure Vite's `base` for the repository path if deploying to a project subpath.

## Login and signup

- Demo quick entry is available for Creator, Brand and Admin.
- Create account/sign in works locally in the current browser and device.
- Creator and Brand accounts can be created from the form. Admin is available through the Admin demo entry.
- This is a prototype authentication flow only. Account records and passwords are stored in browser local storage and are **not secure**. Do not use real passwords, private data, or production accounts. A real deployment needs a secure auth provider and server-side role enforcement.

## Features

- Yellow/orange/red creator-first design and responsive layouts.
- Creator discovery and filters, creator profiles, evidence links, verification review gate.
- Brand campaign discovery with explicitly labelled illustrative campaigns.
- Local rule-based HyAI matching and campaign brief builder; no paid AI API.
- Campaign workflow, shortlist/compare, collaboration message drafts, budget/ROI estimator.
- Admin import from CSV/JSON, verification review queue, CSV export.
- Local browser persistence for saved creators, briefs, campaigns, messages, review decisions and imported records.

## Data honesty

The included research workbook contains 207 named candidate records in the source research set; it is not a verified 1,000+ creator database. The 1,000-row research pipeline is a template. Creator discovery remains gated to records that pass the visible verification evidence rules. Do not treat a source link or an imported record as verification. Sample campaign listings are demo examples, not live offers. Missing audience metrics are left unavailable rather than fabricated.

## Static hosting limitations

This Vite build stores changes in each user's browser. Browser-local imports, account records and campaign state do not sync across devices or users, and can be cleared by the browser. Admin imports update only that browser's data. For multi-user production use, connect a database and secure authentication service.


## Project layout

- `index.html` — Vite entry HTML
- `src/main.js` — Vite module entry
- `src/h-project.js` and `src/h-project.css` — app logic and styling
- `public/h-project-data/` — initial research data and CSV templates
- `h-project-research/` — source workbook and research notes
- `h-project-docs/` — demo and data-quality notes
