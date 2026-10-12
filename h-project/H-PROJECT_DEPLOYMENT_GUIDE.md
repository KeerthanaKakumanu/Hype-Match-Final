# H-Project deployment guide (Vite)

## GitHub repository

1. Create a new repository named `h-project`.
2. Upload the **contents** of this folder to the repository root. `package.json`, `index.html`, `src/`, and `public/` must be at the root.
3. Commit and push.

## Render static site

1. Create a **Static Site** (not Web Service).
2. Connect the `h-project` repository.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Deploy and open the generated URL.

## Vercel / Netlify / Cloudflare Pages

Use framework preset **Vite**, build command `npm run build`, output directory `dist`. No backend environment variables or paid API keys are required for the demo.

## Replit

Import the GitHub repository. If Replit asks for a run command, use `npm run dev -- --host 0.0.0.0`; for a production build use `npm run build`. Replit UI options can change, so verify the published URL and build log.

## Verify after deployment

- Open the home page and try Creator, Brand and Admin demo entry.
- Create a test account with a throwaway password and sign in again.
- Test creator search/filter, brief creation, shortlist, campaign status, CSV export, and admin CSV/JSON import.
- Refresh and confirm data is still present in the same browser.
- Remember: local browser storage is not shared between users and may be cleared. This is a frontend demo, not production authentication or shared database persistence.
