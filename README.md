# Stop Snus website

Static, buildless GitHub Pages landing page. Open `index.html` or serve this directory with `python3 -m http.server 4173`.

- `index.html`: metadata, navigation and footer.
- `content.js`: retained translations, legal copy and store destinations.
- `site.js`: editorial translations and interactive screenshot gallery.
- `style.css`: responsive layout.
- `assets/redesign/`: optimized illustrations and current app screenshots from `stop_snus_ready/assets/marketing/v2/screenshots`, plus the approved S-and-bird icon.

The gallery offers five app views and supports arrow keys, Home and End. Seven languages are retained; screenshots use Danish example data. No analytics or third-party scripts are loaded. Language preference is stored locally when browser storage is available.

The former interactive demo is no longer loaded because it represents an older app design. Existing demo sources and old assets remain available in Git.

## Verification

JavaScript syntax and Git whitespace checks passed. Headless Chromium verified desktop (1440px), tablet (768px), mobile (390px) and small mobile (320px), image loading, language switching, all five gallery tabs, keyboard navigation and FAQ disclosure. Local preview screenshots are in `reports/` and excluded from Git.

Deployment uses the existing GitHub Pages hosting; no build step or hosting migration is required.
