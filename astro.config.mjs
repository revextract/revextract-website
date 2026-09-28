// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH are provided by the GitHub Pages workflow (actions/configure-pages),
// so the build follows whatever domain Pages is serving from, including a custom domain.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
});
