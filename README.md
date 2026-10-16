# OPUS Website Demo (proposal)

Static demo of the OPUS Home page and full sitemap (vanilla JS, hash routing). For internal review only — not production.

## Run locally

```bash
cd opus-website-demo
python3 -m http.server 8090
```

Open [http://localhost:8090/#home](http://localhost:8090/#home). Add `#notes` for presenter notes (e.g. `#notes` or `#home&notes`).

## Repository privacy

This project is intended to live in a **private** GitHub repository. Only people you invite can clone or view the code.

To share the demo with others without making the repo public:

1. **GitHub:** Settings → Collaborators → add their GitHub accounts.
2. **Live preview (optional):** Settings → Pages → deploy from `main` / root. On a private repo, the Pages site is only visible to users who have access to the repository.

## Contents

- `index.html` — shell, header, footer
- `app.js` — routing, notes mode, render
- `components.js` / `components.css` — Home section components (C01–C08), placeholders, notes
- `nav.js` — desktop mega-menu and mobile menu
- `data-part1.js` / `data-part2.js` — page content
- `styles.css` — base styles
- `assets/` — demo images
