# OPUS Website Demo (proposal)

Static demo of the OPUS Home page and full sitemap (vanilla JS, hash routing). For internal review only — not production.

## Run locally

```bash
cd opus-website-demo
python3 -m http.server 8090
```

Open [http://localhost:8090/#home](http://localhost:8090/#home). Add `#notes` for presenter notes (e.g. `#notes` or `#home&notes`).

### Two layout versions

| Version | URL | Behavior |
|--------|-----|----------|
| **Multi-page** (default) | `/#opus-lab` | Overview + separate sub-pages (current sitemap). |
| **Hub pages** | `?layout=hub#opus-lab` | One long page per pillar: OPUSlab, OPUStudio, and OPUS Manufacturing each include all sub-page content in order. Use the **Multi-page / Hub pages** toggle (bottom-left) or share `?layout=hub` in the link. |

## Share a link (no login)

Use **public GitHub Pages** so anyone can open the demo from a URL:

```bash
./scripts/publish-public-pages.sh
```

Example: `https://<your-github-user>.github.io/opus-website-demo/#home` (presenter notes: `#notes`).

The repository must be **public** for free GitHub Pages to work without sign-in. (A private repo cannot offer anonymous viewing on the free plan.)

For a **private** repo (code hidden), use `./scripts/publish-private-github.sh` and invite collaborators only — they will need a GitHub account to view.

## Contents

- `index.html` — shell, header, footer
- `app.js` — routing, notes mode, render
- `components.js` / `components.css` — Home section components (C01–C08), placeholders, notes
- `nav.js` — desktop mega-menu and mobile menu
- `data-part1.js` / `data-part2.js` — page content
- `styles.css` — base styles
- `assets/` — demo images
