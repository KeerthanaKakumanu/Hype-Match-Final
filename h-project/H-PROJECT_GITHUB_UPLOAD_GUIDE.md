# H-Project — GitHub upload fix

## Important: do not select the folder in the Windows Open dialog
The GitHub web uploader's **Open** dialog is for selecting files, not choosing a folder as a repository upload. The black-looking thumbnails in File Explorer are not a special app format; they are just how Windows is previewing those items.

## Recommended reliable method
1. Download `h-project-github-ready.zip` and extract it.
2. Open the extracted `h-project` folder. Confirm you can see `index.html`, `package.json`, `src`, `public`, and the `h-project` documentation/research folders.
3. In GitHub, open your repository and choose **Add file → Upload files**.
4. Do not press **Choose your files** and select the folder. Instead, open the extracted `h-project` folder in File Explorer and drag the files/folders into GitHub's upload drop area if your browser accepts folder drops.
5. If GitHub does not preserve folders via drag-and-drop, use GitHub Desktop or Git to publish the extracted project folder. Keep the directory structure intact.
6. Commit the files to the repository's `main` branch.

## Required repository-root layout
`index.html`, `package.json`, `src/`, `public/`, `.gitignore`, and the `H-PROJECT_*.md` guides must be directly inside the repository root (not inside an extra nested `h-project/h-project/` directory).

## Vite hosting settings
- Framework: Vite
- Build command: `npm install && npm run build`
- Output/publish directory: `dist`

## Checks
- `npm run check` checks the main JavaScript file syntax.
- `npm run build` requires installing Vite dependencies first.
- Authentication is demo-only and browser-local; it is not production-secure or shared between visitors.
