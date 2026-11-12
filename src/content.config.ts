// Content schema for the portfolio.
// This file is the automatic publication gate (Gate 2): a project file that
// breaks these rules stops the build, and only `approved` projects are built
// for the public site (see src/lib/publish.ts).
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

export const DISCIPLINES = [
  'highway',
  'civil-design-cad',
  'geotechnical',
  'qto-estimation',
  'gis-spatial',
  'structural-seismic',
  'research',
] as const;

export const WORK_TYPES = ['PRO', 'TRN', 'ACA', 'RES', 'IND'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z
    .object({
      code: z.string().regex(/^(PRO|TRN|ACA|RES|IND)-\d{4}-\d{3}$/, 'Use TYPE-YYYY-NNN, e.g. PRO-2025-001'),
      title: z.string().min(5),
      work_type: z.enum(WORK_TYPES),
      publication_status: z.enum(['draft', 'review', 'approved', 'withdrawn']),
      confidentiality: z.enum(['public', 'generalized', 'internal', 'private']),
      approval_reference: z.string().optional(),
      disciplines: z.array(z.enum(DISCIPLINES)).min(1),
      project_type: z.string(),
      software: z.array(z.string()).default([]),
      competencies: z.array(z.string()).default([]),
      location_public: z.string().optional(),
      client_public: z.string().optional(),
      year: z.number().int().min(2015).max(2100),
      status: z.enum(['planned', 'ongoing', 'completed', 'suspended']),
      role: z.string(),
      summary: z.string().min(20),
      featured: z.boolean().default(false),
      cover: z.string().optional(),
      previews: z.array(z.object({ file: z.string(), caption: z.string(), wide: z.boolean().default(false) })).default([]),
      downloads: z.array(z.object({ file: z.string(), label: z.string() })).default([]),
    })
    .refine(
      (p) =>
        p.publication_status !== 'approved' ||
        ((p.confidentiality === 'public' || p.confidentiality === 'generalized') && !!p.approval_reference),
      {
        message:
          'An approved project must have confidentiality "public" or "generalized" AND an approval_reference (who authorized it, and when).',
      },
    )
    .refine((p) => p.code.startsWith(p.work_type), {
      message: 'The project code prefix must match work_type.',
    }),
});

const level = z.enum(['professional', 'academic', 'developing']);

const capabilities = defineCollection({
  loader: file('src/data/capabilities.yaml'),
  schema: z.object({
    discipline: z.enum(DISCIPLINES),
    order: z.number().default(99),
    name: z.string(),
    level,
    evidence: z.string(),
    tools: z.array(z.string()).default([]),
  }),
});

const deliverables = defineCollection({
  loader: file('src/data/deliverables.yaml'),
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    disciplines: z.array(z.enum(DISCIPLINES)).min(1),
    basis: z.string(),
    scope: z.string(),
    outputs: z.array(z.string()).min(1),
    inputs: z.array(z.string()).min(1),
    limits: z.string(),
    review: z.string(),
  }),
});

const profile = defineCollection({
  loader: file('src/data/profile.yaml'),
  schema: z.object({
    name: z.string(),
    short_name: z.string(),
    designation: z.string(),
    headline: z.string(),
    intro: z.string(),
    location: z.string(),
    email: z.string().optional(),
    linkedin: z.string().optional(),
    resume_pdf: z.string().optional(),
    portfolio_pdf: z.string().optional(),
    philosophy: z.array(z.string()).default([]),
    objectives: z.string(),
    employment: z.array(
      z.object({ role: z.string(), org: z.string(), period: z.string(), notes: z.array(z.string()).default([]) }),
    ),
    education: z.array(
      z.object({ degree: z.string(), school: z.string(), period: z.string(), notes: z.array(z.string()).default([]) }),
    ),
    credentials: z.array(z.object({ name: z.string(), detail: z.string() })).default([]),
    trainings: z
      .array(z.object({ name: z.string(), detail: z.string(), category: z.enum(['professional', 'student', 'competition']).default('professional'), certificate: z.string().optional() }))
      .default([]),
  }),
});

export const collections = { projects, capabilities, deliverables, profile };
