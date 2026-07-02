# Pradeep Kalluri — Portfolio

Personal portfolio of **Pradeep Kalluri**, Data Engineer (London, UK).

🔗 **Live site:** https://kalluripradeep.github.io/

## What's inside

| Path | Purpose |
|---|---|
| `index.html` | Single-page portfolio (hero, experience, skills, projects, certifications, writing, open source, recognition, contact) |
| `one-pager.html` | Printable one-page résumé view |
| `css/style.css` | All styles — CSS custom properties, dark/light themes, responsive layout, `prefers-reduced-motion` support |
| `js/main.js` | Vanilla JS — theme toggle, scroll reveals, filters, case-study & résumé modals, live GitHub stats |
| `assets/` | Favicon, Open Graph image, company logos |
| `sitemap.xml`, `robots.txt` | SEO |
| `.github/workflows/deploy.yml` | GitHub Actions → GitHub Pages deployment |

## Stack & principles

- **Zero framework, zero build step** — plain HTML/CSS/JS served as static files. Nothing to install; open `index.html` or run any static server.
- **No tracking, no analytics, no cookies.**
- **Performance-first:** no render-blocking third-party JS, async icon CSS, deferred main bundle, explicit image dimensions, lazy loading.
- **Accessible:** skip link, focus-visible outlines, dialog semantics, reduced-motion support.
- **Honest data:** the GitHub contribution chart and profile stats are pulled live from GitHub, not hard-coded.

## Local development

```bash
git clone https://github.com/kalluripradeep/kalluripradeep.github.io.git
cd kalluripradeep.github.io
python3 -m http.server 8000   # or: npx serve
# open http://localhost:8000
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which publishes the repository root to GitHub Pages.

## Content updates

- **Experience / projects / certifications:** edit the relevant section in `index.html` (sections are marked with `<!-- ===== ... ===== -->` banners).
- **Theme colours:** CSS custom properties at the top of `css/style.css`.
- **Social preview:** replace `assets/og-image.png` (1200×630).

## License

Content © Pradeep Kalluri. Code is free to reference for your own portfolio.
