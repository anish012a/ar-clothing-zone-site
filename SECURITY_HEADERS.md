# Security headers for production hosting

GitHub Pages does not let this repository set custom response headers directly. If AR Clothing Zone is later served through Cloudflare, Netlify, Vercel, or another proxy/CDN, apply these headers at the edge:

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com; connect-src 'self'; base-uri 'self'; form-action 'self' https://wa.me; object-src 'none'; upgrade-insecure-requests; trusted-types default; require-trusted-types-for 'script'
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: DENY
Cross-Origin-Opener-Policy: same-origin
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

For GitHub Pages specifically, keep all third-party scripts removed, use only HTTPS links, and route the custom domain through a CDN if strict response headers are required for Lighthouse or security audits.
