# HYPE — Telugu-first Creator Marketplace

A responsive React + Vite static demo with role-specific Creator, Brand, Agency and Admin workspaces. Project folder and internal app files use HYPE naming.

## Run locally
- Install a current Node.js LTS release (needed only to build the Vite app).
- `npm install`
- `npm run dev`
- Production build: `npm run build` (output: `dist/`)

## Publish
Import the repository into Netlify, Vercel, or Render Static Sites. Build command: `npm install && npm run build`; publish/output directory: `dist`. For GitHub Pages, edit `vite.config.js` `base` to `'/REPOSITORY-NAME/'` when deploying at a project URL, then enable Pages with the included workflow.

## Data honesty
The directory contains 207 research candidates retained from the supplied research bundle. They are not 207 verified influencers. Source/status notes remain attached to each record; some profile URLs are inferred from public directory handles or unavailable. Follower and engagement metrics are not invented and are omitted from cards. Open the source link and verify the account, language, location, current activity and business contact before outreach.

## Demo limitation
Login/signup are browser-only demo flows, not secure authentication. Campaign drafts and the demo account are stored in localStorage on the current browser. They do not sync between devices/users and can be cleared by the user. No private credentials are transmitted to a server. For production, integrate a real auth/database service.

## Included features
- Role-specific Creator, Brand, Agency and Admin entry points
- Demo login, signup/onboarding role selection, browser-local demo account
- Search, niche and source-status filters
- Profile/source links and transparent research statuses
- Creator shortlist, campaign brief builder and campaign drafts
- Responsive mobile/desktop layout, orange/red/light-yellow theme
- JSON creator data available at `src/data/hype-creators.json`
