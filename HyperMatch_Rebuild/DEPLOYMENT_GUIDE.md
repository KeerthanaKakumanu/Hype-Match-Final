# HyperMatch deployment guide

## Replit (full app with JSON API)

1. Import the GitHub repository into Replit, or create a Node.js project and upload all project-root files.
2. Confirm the root contains `package.json`, `server.js`, `.replit`, `index.html`, `styles.css`, `app.js`, and `data/`.
3. Click **Run**. The run command is `npm start`. The server binds to `0.0.0.0` and uses the `PORT` environment variable supplied by the host.
4. Open the web preview. Select a demo role.
5. Check `https://YOUR-REPLIT-URL/api/health` and confirm it returns JSON with `ok: true` and the candidate count.
6. Test admin import and a review status change. Refresh the app and confirm changes persist.
7. Publish/deploy using Replit's current Node.js web app deployment option. Then repeat health, import, refresh and persistence checks on the deployed URL. Do not assume storage persists until these checks pass for the chosen deployment type.

## GitHub

1. Create a repository and upload the project contents to its root.
2. Commit and push `server.js`, `package.json`, `.replit`, frontend files, `data/` and `docs/`.
3. Import the repository in Replit for execution.

GitHub Pages serves static files only and will not run `server.js` or the JSON API. Use Replit or another Node.js host for the full app.

## Local smoke test

```bash
npm run check
npm start
```

In another terminal:

```bash
curl http://localhost:3000/api/health
curl http://localhost:3000/api/data
```

Expected: health returns `ok: true`; `/api/data` returns a `creators` array and a `state` object. Initial creator discovery count should be zero until candidate records pass the evidence gate.

## Demo data verification

To mark a creator `Verified`, fill its profile URL, creator source URL, location evidence URL, language evidence URL, state (`Telangana` or `Andhra Pradesh`), and content language (`Telugu`, `English`, or `Hindi`). Import the corrected CSV/JSON, sign in as Admin, then set the record to `Verified`. The creator should then be eligible for discovery. Never change status solely to inflate the count.

## Production caveats

Demo role selection is not real authentication. Before using real customer data, add secure authentication, role enforcement on the server, input validation, rate limits, audit logs, a database designed for concurrent users, and secure messaging. Replit filesystem persistence varies by deployment mode; use durable storage for production.
