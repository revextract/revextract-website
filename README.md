# Revextract Website

Astro rebuild of the Revextract landing page (originally built in Webflow at revextract.webflow.io).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Structure

- `src/pages/index.astro`: the landing page. Costs, benefits and steps are data arrays at the top of the file.
- `src/components/Nav.astro`: the fixed header with the inline SVG logo
- `src/layouts/Layout.astro`: `<head>`, SEO/OG tags, fonts
- `src/styles/global.css`: styles ported from the Webflow stylesheet
- `src/site.ts`: booking URL and asset path helper
- `public/`: favicon, OG image, logos

## Deploy

Pushing to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`.
The site URL and base path come from the Pages settings, so adding a custom domain
(Settings → Pages → Custom domain) needs no code changes.
