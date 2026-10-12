# HyperMatch — Replit-ready Creator Marketplace

A dependency-free, single-page HTML/CSS/JavaScript application designed to preview immediately in Replit without npm installs, build commands, paid APIs, or environment variables.

## Start in Replit
1. Create a new **HTML, CSS, JS** Replit project, or import this folder/repository.
2. Put `index.html` at the project root. Keep the `data/` folder beside it.
3. Click **Run**. For a static HTML Replit, the homepage should load directly.
4. Use Replit's Publish option if available on your account to obtain a public URL.

## Features included
- Light yellow, orange and red visual theme, responsive navigation, creator-first landing dashboard.
- Creator discovery search and niche/platform/status filters.
- Creator cards with public source links and evidence notes.
- Brand, creator and admin demo workspace switching.
- Source-linked seed creator records (5) with clear source-listed / needs-review status.
- Creator shortlist, compare table, local persistence and JSON export.
- Campaign pipeline, create/edit via campaign flow, sample campaigns marked as samples.
- Creator-side demo opportunities and draft applications.
- HyAI local rule-based campaign brief generator, keyword matching explanations and profile improvement tips.
- Messages demo inbox and draft messaging (not actually sent).
- Analytics dashboard and editable budget/ROI scenario calculator.
- Admin import for JSON/CSV, source-linked manual add, review queue, JSON export and CSV template.
- Local browser storage, no API keys or paid service required.

## Truthfulness and limitations
- The seed directory contains **5 source-listed creator/channel records**, based on public official directory URLs. These are not independently identity-verified by HyperMatch. Audience metrics are historical snapshots and must be reconfirmed. No claim is made that this package includes 1,000+ verified creators.
- Imported creators are marked `Needs review`; a URL alone does not establish identity or metrics.
- Demo login is role switching, not secure authentication. Campaigns, chat, imports and profile data are local to one browser and are not synced between users.
- HyAI is a local rule-based helper, not a connected generative AI service.
- The opportunities are illustrative demo offers, not live paid campaigns.
- No external API keys or paid APIs are required.
- `data/verified-source-listed-creators.json` is the seed directory for auditing/importing data.

## Suggested GitHub layout
Keep `index.html`, `README.md`, and `data/` at the repository root. Avoid an extra enclosing project folder when importing to hosting.

## Netlify (static site)
Build command: leave blank.
Publish directory: `.` (the repository root containing `index.html`).

## Cloudflare Pages (static site)
Framework preset: None / static HTML.
Build command: leave blank.
Build output directory: `.` (repository root containing `index.html`).

## Manual QA checklist
- Open `index.html`; verify dashboard appears.
- Search `Telugu`, use niche/platform filters.
- Add/remove a creator to shortlist; refresh to check local persistence.
- Generate a HyAI brief, save it as a campaign, and inspect Campaign Manager.
- Switch Brand / Creator / Admin demo roles.
- Import JSON/CSV and verify imported profiles appear as Needs review.
- Export creator JSON and shortlist.
- Test at mobile width.

## Security
Do not collect passwords, secrets, payment data or sensitive personal data in this local demo. Real multi-user authentication and messaging require a backend.
