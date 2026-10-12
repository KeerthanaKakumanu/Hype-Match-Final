# HyperMatch — GitHub + Replit-ready project

A responsive creator-brand collaboration marketplace demo built with HTML, CSS, vanilla JavaScript and a small Node.js JSON API. It uses no paid APIs, no external AI key, and no third-party runtime dependencies.

## Run on Replit

1. Create a **Node.js** Replit project (Node.js 18+).
2. Upload or import this repository with the project files at the root: `index.html`, `styles.css`, `app.js`, `server.js`, `package.json`, `.replit`, and `data/`.
3. Run the project. The start command is `npm start`; the app listens on `0.0.0.0:$PORT` (defaults to 3000).
4. Open the Replit web preview. The first screen offers **Continue as Creator**, **Continue as Brand**, and **Continue as Admin**. This is demo role selection, not secure production authentication.
5. To publish, use Replit's deployment flow for a Node.js web app if your account has it. Confirm the deployed URL and storage behavior after publishing; deployment has not been performed by this package build.

No `npm install` is needed for runtime dependencies because the app uses Node built-ins only. Run `npm run check` to check JavaScript syntax.

## Run locally

Install Node.js 18+, unzip the project, open a terminal in the project root, then run:

```bash
npm start
```

Open `http://localhost:3000`. Do not open `index.html` with `file://`; API persistence requires the Node server.

## GitHub workflow

1. Create a new GitHub repository.
2. Upload/commit the **contents** of this folder to the repository root (not an extra nested folder).
3. In Replit, choose **Import from GitHub** and select that repository.
4. Keep `package.json`, `.replit`, `server.js`, `index.html`, `styles.css`, `app.js` and `data/` at the root.
5. GitHub Pages cannot run the Node JSON API. For the full app use Replit or another Node host; GitHub is the source repository.

See [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md) for step-by-step instructions.

## Included features

- Light yellow + orange + red creator-first design; responsive mobile and desktop layouts.
- Instant role-selection demo login for Creator, Brand and Admin dashboards.
- Creator discovery with niche, platform, location, language and status filters; profile links, evidence links, portfolio/source links and initials-based avatar placeholders.
- Brand campaign discovery with explicitly labelled **demo campaigns**, not claimed live offers.
- Local no-key **HyAI-style** matching, campaign brief builder and profile assistant. These use deterministic rules and available fields, not a remote LLM.
- Shortlist and compare, campaign tracking, collaboration message drafts, budget/ROI calculator, CSV/JSON import, CSV export and verification review queue.
- Node API endpoints: `GET /api/health`, `GET /api/data`, `POST /api/state`, `POST /api/candidates`.
- Local JSON persistence in `data/runtime-state.json` and `data/creators.json` while the workspace filesystem is writable.

## Creator database: honest counts

The uploaded workbook's **Creator Candidates** sheet supplied **207 named candidate records**. The `Research Pipeline 1000` sheet is a largely blank research template, not 1,000 populated creator records. Initial eligible discovery count is **0** because no records were pre-approved as fully verified.

Candidates are kept in the Admin review queue. A record enters creator discovery only when all checks pass:

1. Admin explicitly sets its status to `Verified`.
2. A public profile URL exists (Instagram, YouTube or other profile URL).
3. A creator/source evidence URL exists.
4. Location evidence and language evidence URLs exist.
5. State is Telangana or Andhra Pradesh.
6. Content language is Telugu, English or Hindi.

The verification selector blocks the `Verified` state when these fields are missing. Update records by importing a CSV/JSON containing corrected evidence fields, then review them. A directory reference alone is not identity verification.

No follower/subscriber or engagement metrics were fabricated; blank source fields remain blank. The budget/ROI calculator uses clearly labelled assumptions supplied by the user. Counts are live from the actual loaded dataset. The 1,000+ figure is a future target, not a launch claim.

## Important demo limitations

- Role selection is a convenience demo, not secure authentication or authorization. Do not use this app for real accounts, private data, or production creator/brand communications without implementing proper auth and server-side access control.
- JSON persistence depends on the host's filesystem. Some hosted deployments may use ephemeral storage or replace the filesystem during redeploy; export backups and verify persistence for the selected Replit deployment type.
- Messaging is a draft/copy workflow, not a live chat service. Brand campaign examples are demo data, not active offers.
- HyAI is a local explainable heuristic engine, not an LLM. It requires no API key and does not guarantee reach or campaign outcomes.
- Creator photos are not bundled unless a reliable public image source is present; initials placeholders avoid displaying unrelated people. External public media availability can change.
- The project package has been checked with syntax, ZIP and local HTTP/API smoke tests. A live Replit deployment has **not** been performed or verified.

## Data files

- `data/creators.json` — canonical candidate records loaded by the Node API.
- `data/creators.csv` — CSV snapshot of the candidate sheet.
- `data/creator_sources.csv` — source/evidence URLs attached to the imported workbook candidates.
- `data/review_queue.csv` — review checklist for the imported workbook candidates.
- `data/niche_summary.csv` — candidate counts by niche, not verified counts.
- `data/import_template.csv` — import template.
- `data/runtime-state.json` — demo state for shortlist, briefs, campaigns, messages and review statuses.
- `docs/data-quality-report.md` — evidence counts and limitations.
