---
# Professional DPWH work, published in generalized form at R. Piñon's request.
# Removed from the public version: project name, program, road name, stations,
# municipality and every screenshot from the original report. The figures are
# redrawn from the report's own coordinates and results.
code: PRO-2026-002
title: "Staged Slope Stability Check of a Breastwall and Stone Masonry Wall on a Mountain Road"
work_type: PRO
publication_status: approved
approval_reference: "Publication requested by R. Piñon, 2026-11-12; generalized (project name, stations and location removed, figures redrawn)"
confidentiality: generalized
disciplines: [geotechnical, highway]
project_type: "Slope protection design check"
software: ["GEO5"]
competencies: ["Slope stability", "Limit equilibrium (Bishop)", "Staged construction analysis", "Retaining wall checks", "Slope protection design"]
location_public: "Cordillera Administrative Region"
client_public: "Department of Public Works and Highways"
year: 2026
status: completed
role: "Slope stability analysis in GEO5"
summary: "A five-stage GEO5 slope stability check for an off-carriageway improvement on a mountain road: a battered stone masonry breastwall on the cut slope and a stone masonry wall on the outer edge. It shows why the temporary cut was the critical stage (factor of safety 0.98) and confirms both walls meet the required 1.50 once built."
featured: true
cover: cover.webp
previews:
  - file: final-section.webp
    caption: "Final section with both walls in place and the critical slip circle for each (redrawn from the GEO5 model)"
    wide: true
  - file: stages.webp
    caption: "The five construction stages and the critical slip circle found at each"
    wide: true
  - file: fs-by-stage.webp
    caption: "Factor of safety by stage against the required 1.50 (Bishop, permanent design situation)"
    wide: true
---

## Project overview

Part of an off-carriageway improvement on a secondary national road in the mountains of the Cordillera. The road sits on a bench cut into the slope: there is a cut slope of about 7 m above the carriageway and a drop to the valley side below it. The improvement adds two walls:

- a battered **stone masonry breastwall** with gravel backfill on a concrete footing, which holds the cut slope above the road
- a **stone masonry wall** on the outer edge of the road, which retains the shoulder

The project name, stations and exact location are left out of this public version.

## My specific responsibilities

- Built the slope model in GEO5 from the design cross-section: ground profile, soil and gravel layers, groundwater table, and the masonry and footing as rigid bodies
- Set up the construction sequence as five stages, so that each temporary excavation is checked as well as the finished slope
- Ran the stability analyses (Bishop, circular slip surfaces, optimization and grid search) and checked the results against the required factor of safety

## Engineering methodology

- **Settings:** GEO5 Slope Stability with the Philippines DPWH settings. Verification by safety factors (ASD), with a required factor of safety of 1.50 for the permanent design situation.
- **Materials:**
  - Slope soil: φ′ 36°, c′ 8 kPa, γ 15 kN/m³ (18 kN/m³ saturated)
  - Gravel backfill: φ′ 29°, c′ 8 kPa, γ 19 kN/m³
  - Stone masonry: 29 kN/m³; concrete footing: 24 kN/m³ (both modelled as rigid bodies)
- **Water:** a groundwater table input along the section, lying about 4 to 5 m below the carriageway.
- **Method:** Bishop's simplified method on circular slip surfaces. Each stage was run twice: once with automatic optimization of the slip surface and once with a grid search. The two agreed within 0.01 at every stage, which gives confidence that the critical surface was found.
- **Construction stages:**
  1. Existing slope
  2. Excavation of the cut slope for the breastwall
  3. Excavation at the outer edge for the outer wall
  4. Breastwall built, upper slope checked
  5. Outer wall built, outer slope checked

## Results

| Stage | What is checked | Factor of safety | Against 1.50 |
|---|---|---|---|
| 1 | Existing slope | 1.40 | Below |
| 2 | Cut for the breastwall | 0.98 | Below |
| 3 | Cut for the outer wall | 1.38 | Below |
| 4 | Upper slope with the breastwall | 1.50 | Meets |
| 5 | Outer slope with the outer wall | 1.95 | Meets |

## What the analysis shows

- **The existing slope does not meet the standard.** Its factor of safety of 1.40 is below 1.50, which justifies the slope protection.
- **The temporary cut is the critical moment.** With the cut open and no wall yet, the factor of safety drops to 0.98: the slope is expected to fail. On site, this means the excavation must be done in short lengths, and the wall must be built right after each length is opened. The cut must not be left exposed, especially in rain.
- **Both walls restore the slope.** With the breastwall in place, the upper slope just meets 1.50. With the outer wall in place, the outer slope reaches 1.95.
- **The upper slope has little margin.** At exactly 1.50, the upper slope has none to spare. If the soil strength or the groundwater level on site turns out worse than assumed, this is the first place to look again.

## Applicable standards

DPWH design settings in GEO5 (safety-factor verification, required factor of safety 1.50 for permanent conditions). Earthquake loading was not included in this check.

## Drawings and visual evidence

The figures are redrawn from the report's own coordinates, slip-circle parameters and results. No screenshots from the original report are used, and its title block, project name and stations are not shown.
