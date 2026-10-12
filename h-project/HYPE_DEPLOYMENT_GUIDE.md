# HYPE deployment guide

1. Extract the ZIP. The root folder is `h-project/`.
2. Upload the contents of this folder to the root of a GitHub repository (not the ZIP itself).
3. Static host settings: build command `npm install && npm run build`; publish directory `dist`.
4. For GitHub Pages project sites, set Vite `base` to `'/YOUR-REPOSITORY-NAME/'` and use the included `.github/workflows/hype-pages.yml`.
5. Confirm the deployment build succeeds, then test home, creator search, profile/source links, role switch, signup/demo login, brief save, shortlist and mobile layout.

This is a static demo: browser-local login and campaigns are not production-grade multi-user services.
