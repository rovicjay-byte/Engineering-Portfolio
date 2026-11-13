import { getProjects, type Project } from './publish';

export const LIBRARY_CATEGORIES: Record<string, string> = {
  highway: 'Highway design',
  civil3d: 'Civil 3D plan sheets and details',
  geotechnical: 'Geotechnical engineering',
  structural: 'Structural engineering',
  qto: 'Quantity takeoff and estimates',
  gis: 'GIS and geohazard mapping',
  research: 'Engineering research',
  academic: 'Academic plan sets',
};

export interface LibItem {
  category: string;
  code: string;
  projectId: string;
  projectTitle: string;
  file: string;
  thumb?: string;
  caption: string;
  kind: 'image' | 'pdf';
}

function categorize(p: Project, file: string): string {
  const d = p.data;
  if (file.startsWith('estimate-')) return 'qto';
  if (file.startsWith('map-') || d.disciplines[0] === 'gis-spatial') return 'gis';
  if (d.work_type === 'RES') return 'research';
  if (d.work_type === 'ACA') return 'academic';
  if (/plan-profile|cross-sections/.test(file)) return 'highway';
  if (d.disciplines[0] === 'geotechnical' || /geohazard/.test(file)) return d.code === 'PRO-2025-006' ? 'gis' : 'geotechnical';
  if (d.code === 'PRO-2025-007') return 'structural';
  if (d.code === 'PRO-2026-001') return 'structural';
  return 'civil3d';
}

/** Every public figure and document, grouped for the document library. */
export async function getLibrary(): Promise<LibItem[]> {
  const items: LibItem[] = [];
  for (const p of await getProjects()) {
    const base = { code: p.data.code, projectId: p.id, projectTitle: p.data.title };
    for (const pv of p.data.previews) {
      const pdf = pv.file.endsWith('.pdf');
      items.push({
        ...base, category: categorize(p, pv.file), file: `/previews/${p.data.code}/${pv.file}`,
        thumb: pdf ? undefined : `/thumbs/${p.data.code}/${pv.file.replace(/\.(png|jpe?g)$/i, '.webp')}`,
        caption: pv.caption, kind: pdf ? 'pdf' : 'image',
      });
    }
    for (const dl of p.data.downloads) {
      const pdf = dl.file.endsWith('.pdf');
      items.push({
        ...base, category: p.data.code === 'PRO-2025-006' ? 'gis' : categorize(p, dl.file),
        file: `/previews/${p.data.code}/${dl.file}`, caption: dl.label, kind: pdf ? 'pdf' : 'image',
        thumb: pdf ? undefined : `/thumbs/${p.data.code}/${dl.file.replace(/\.(png|jpe?g)$/i, '.webp')}`,
      });
    }
  }
  return items;
}
