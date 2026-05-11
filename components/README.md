# Components

This project is static HTML for GitHub Pages. Reusable UI is organized as lightweight CSS/JS components instead of framework components:

- AI assistant and WhatsApp support: `css/ai-assistant.min.css`, `js/ai-assistant.min.js`
- Homepage ecommerce interactions: `css/ui-enhancements.min.css`, `js/interactions.min.js`
- Shared layout/navigation/product utilities: `css/styles.min.css`, `js/navbar.min.js`, `js/products.min.js`

When changing source files in the project root, regenerate the matching minified files in `css/` and `js/` before publishing.
