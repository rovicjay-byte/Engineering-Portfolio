# Engineering portfolio: Rovic-Jay S. Piñon, RCE

Source for my public engineering portfolio. It's built with [Astro](https://astro.build) and deployed on Vercel.
**Keep this repository private.** It holds drafts that are not yet approved.

## How publishing works

Every project file has a `publication_status`. Only `approved` projects reach the live site.

| Status | Where it shows |
| --- | --- |
| `draft` | Only on your computer (`npm run dev`) |
| `review` | Only on your computer, and on Vercel Preview deployments if you turn drafts on there |
| `approved` | The live site |
| `withdrawn` | Nowhere (kept for the record) |

The build **stops with an error** if a project is marked `approved` without both of these:

- `confidentiality` set to `public` or `generalized`
- an `approval_reference` (who authorized it, and when)

Example: `approval_reference: "Own research; adviser OK to post, 2026-12-01"`.

Original engineering files (DWG, models, official PDFs) never go in this repository. Only redacted web previews do.

## Common edits

You can make every edit below in the GitHub website: open the file, click the pencil icon, and choose **Commit changes**. Vercel redeploys automatically in a minute or two.

| To change | Edit this file |
| --- | --- |
| Name, headline, intro, employment, education, email, LinkedIn | `src/data/profile.yaml` |
| Capability matrix (skill, experience level, evidence) | `src/data/capabilities.yaml` |
| "What I deliver" page | `src/data/deliverables.yaml` |
| A project or case study | `src/content/projects/<file>.md` |
| Resume PDF | Upload to `public/files/`, then set `resume_pdf: "/files/<name>.pdf"` in `profile.yaml` |

### Add a project

1. Copy an existing file in `src/content/projects/` and rename it to `<code>-<short-title>.md`, e.g. `pro-2026-002-road-widening.md`. The file name becomes the page URL.
2. Fill in the fields between the `---` lines.
3. Write the case study below the second `---`. Use `## ` headings for each section (overview, problem, my responsibilities, methodology, and so on).
4. Put images or PDFs in `public/previews/<CODE>/`, e.g. `public/previews/PRO-2026-002/typical-section.webp`. List them under `previews:` with a caption. Add `wide: true` under a caption to show that image at full width (use it for renders, posters and long strips).
   - Optional: `cover: cover.webp` sets the thumbnail shown in project lists (a square image about 480 px works best).
   - Optional: `downloads:` lists files visitors can download, each with a `label`.
5. Leave `publication_status: review` until you have checked every line and have any permission needed. Then set it to `approved` and add `approval_reference`.

Project codes are `TYPE-YYYY-NNN`:

| Type | Meaning |
| --- | --- |
| PRO | Professional |
| TRN | Training |
| ACA | Academic |
| RES | Research |
| IND | Independent demonstration |

### Preview images

- Export drawings as PDF or WebP, ideally under 2 MB each.
- Remove signatures, seals, names, station numbers, costs and coordinates before export.
- Caption recreated figures as recreated.

## Run it on your computer (optional)

You need [Node.js](https://nodejs.org) 22.23 or newer (or 24).

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # production build, approved items only
```

## Deploying on Vercel (one-time setup)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Choose **Add New → Project**, then import this repository. Vercel detects Astro, so leave the defaults.
3. Click **Deploy**. Your site appears at `https://<project-name>.vercel.app`.
4. Optional: turn on drafts for Preview deployments only.
   - Go to **Settings → Environment Variables**.
   - Add `SHOW_DRAFTS` = `true` with only **Preview** ticked. Never tick Production.
   - Keep **Settings → Deployment Protection → Vercel Authentication** on, so previews stay private.
5. Optional: add a custom domain under **Settings → Domains**.

Vercel's free Hobby plan covers personal, non-commercial sites like this portfolio.
