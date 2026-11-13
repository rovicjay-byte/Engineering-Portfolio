import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

/**
 * Drafts are shown only when running `npm run dev` on your own computer, or
 * when the SHOW_DRAFTS environment variable is "true" (use this for Vercel
 * Preview deployments only, never for Production).
 */
export const SHOW_DRAFTS = import.meta.env.DEV || import.meta.env.SHOW_DRAFTS === 'true';

export type Project = CollectionEntry<'projects'>;

export function isPublic(p: Project) {
  return p.data.publication_status === 'approved';
}

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all
    .filter((p) => p.data.publication_status !== 'withdrawn')
    .filter((p) => SHOW_DRAFTS || isPublic(p))
    .sort((a, b) => b.data.year - a.data.year || a.data.code.localeCompare(b.data.code));
}

export async function getProfile() {
  const me = await getEntry('profile', 'me');
  if (!me) throw new Error('src/data/profile.yaml must contain an entry named "me".');
  return me.data;
}

export const DISCIPLINE_LABELS: Record<string, string> = {
  highway: 'Highway and roadway engineering',
  'civil-design-cad': 'Civil design and CAD',
  geotechnical: 'Geotechnical engineering',
  'qto-estimation': 'Quantity takeoff and cost estimation',
  'gis-spatial': 'GIS and spatial analysis',
  'structural-seismic': 'Structural and seismic engineering',
  research: 'Engineering research',
};

export const DISCIPLINE_SHORT: Record<string, string> = {
  highway: 'Highway',
  'civil-design-cad': 'Civil design / CAD',
  geotechnical: 'Geotechnical',
  'qto-estimation': 'QTO and estimates',
  'gis-spatial': 'GIS',
  'structural-seismic': 'Structural / seismic',
  research: 'Research',
};

export const WORK_TYPE_LABELS: Record<string, string> = {
  PRO: 'Professional project',
  TRN: 'Supervised training',
  ACA: 'Academic work',
  RES: 'Research',
  IND: 'Independent demonstration',
};

export const LEVEL_LABELS: Record<string, string> = {
  professional: 'Applied in professional work',
  academic: 'Academic and research work',
  developing: 'Developing',
};

export const STATUS_LABELS: Record<string, string> = {
  planned: 'Planned',
  ongoing: 'Ongoing',
  completed: 'Completed',  // my deliverable, see `stage` for the project
  suspended: 'Suspended',
};

export const STAGE_LABELS: Record<string, string> = {
  planning: 'Planning',
  'detailed-engineering': 'Detailed engineering',
  'design-review': 'Design review',
  'plans-approved': 'Plans approved',
  procurement: 'Plans approved, in procurement',
  'under-construction': 'Plans approved, under construction',
  'construction-complete': 'Construction completed',
};

export async function getCapabilities() {
  return (await getCollection('capabilities')).sort((a, b) => a.data.order - b.data.order);
}

export const SOFTWARE_CATEGORIES: Record<string, string> = {
  'highway-cad': 'Highway and CAD',
  geotechnical: 'Geotechnical',
  structural: 'Structural',
  gis: 'GIS and survey',
  computation: 'Computation and documentation',
  visualization: 'Visualization',
};

export async function getSoftware() {
  return (await getCollection('software')).sort((a, b) => a.data.order - b.data.order);
}

/** Map of project code -> public project, for linking evidence by code. */
export async function getProjectsByCode() {
  const map = new Map<string, Project>();
  for (const p of await getProjects()) map.set(p.data.code, p);
  return map;
}

export async function getDeliverables() {
  return (await getCollection('deliverables')).sort((a, b) => a.data.order - b.data.order);
}
