// Makes small copies of every preview image for galleries and the document library.
//   npm run thumbs
// Writes public/thumbs/<CODE>/<file>.webp (640 px) and public/mid/<CODE>/<file>.webp (1600 px). Run it after adding images
// to public/previews/, then commit the new thumbs. Uses sharp, which Astro already installs.
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = 'public/previews';
// Two sizes: thumbs (640 px) for grids and cards, mid (1600 px) for figures shown in a page.
const SIZES = [{ dir: 'public/thumbs', width: 640, q: 72 }, { dir: 'public/mid', width: 1600, q: 78 }];
let made = 0;
for (const code of await readdir(SRC)) {
  const dir = join(SRC, code);
  if (!(await stat(dir)).isDirectory()) continue;
  for (const size of SIZES) {
    await mkdir(join(size.dir, code), { recursive: true });
    for (const f of await readdir(dir)) {
      if (!/\.(webp|png|jpe?g)$/i.test(f)) continue;
      const out = join(size.dir, code, f.replace(/\.(png|jpe?g)$/i, '.webp'));
      const src = join(dir, f);
      try { if ((await stat(out)).mtimeMs >= (await stat(src)).mtimeMs) continue; } catch {}
      await sharp(src, { limitInputPixels: false }).resize({ width: size.width, withoutEnlargement: true }).webp({ quality: size.q }).toFile(out);
      made++;
    }
  }
}
console.log(`thumbs: ${made} made`);
