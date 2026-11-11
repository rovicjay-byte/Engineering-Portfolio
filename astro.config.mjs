// @ts-check
import { defineConfig } from 'astro/config';

// Site address, used for canonical links and search engines.
// On Vercel this is filled in automatically from your production domain.
// To force a custom domain, set SITE_URL in Vercel's environment variables.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export default defineConfig({
  site: process.env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : undefined),
  trailingSlash: 'ignore',
});
