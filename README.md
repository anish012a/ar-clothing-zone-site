# AR Clothing Zone

Static HTML, CSS, and JavaScript site for AR Clothing Zone.

## Production structure

- `assets/img/` contains optimized responsive image assets used by rendered pages.
- `css/` contains minified production CSS for GitHub Pages.
- `js/` contains deferred/minified production JavaScript.
- `components/` documents reusable UI responsibilities for the static component system.
- Original source images in `images/` are kept as local source assets and are not referenced by production pages.

## GitHub Pages performance notes

- Production pages reference versioned assets with `?v=20260508` for cache busting.
- GitHub Pages does not support custom `Cache-Control` or security response headers from this repository alone.
- For long-lived caching and strict security headers, place the site behind Cloudflare or another CDN and cache `assets/img/*`, `*.min.css`, and `*.min.js` for one year with immutable caching.
- Keep original high-resolution source images out of rendered pages; use the optimized files in `assets/img/`.
