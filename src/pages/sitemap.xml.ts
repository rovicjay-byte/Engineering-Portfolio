import type { APIRoute } from 'astro';
import { getProjects, isPublic } from '../lib/publish';

// Public pages only (drafts and items in review are left out).
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://engineering-portfolio-kappa-nine.vercel.app');
  const statics = ['/', '/about', '/projects', '/capabilities', '/experience', '/research', '/resume', '/documents', '/contact', '/what-i-deliver', '/notice'];
  const disciplines = ['highway', 'civil-design-cad', 'geotechnical', 'qto-estimation', 'gis-spatial', 'structural-seismic', 'research'];
  const projects = (await getProjects()).filter(isPublic).map((p) => `/projects/${p.id}`);
  const urls = [...statics, ...disciplines.map((d) => `/capabilities/${d}`), ...projects];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${new URL(u, base).href}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
