---
# Professional DPWH work, approved for publication by R. Piñon 2026-11-13. Figures are exported from his own
# design workbook (unsigned Excel file).
code: PRO-2025-007
title: "Structural Design Spreadsheet for a Covered Reinforced Concrete Canal (NSCP 2015)"
work_type: PRO
publication_status: approved
approval_reference: "Design workbook figures and text approved for publication by R. Piñon, 2026-11-13"
confidentiality: public
disciplines: [highway, geotechnical]
project_type: "Drainage structure design"
software: ["Excel"]
competencies: ["Reinforced concrete design (NSCP 2015)", "Lateral earth pressure (Rankine)", "Flexure and shear design", "Drainage structure design", "Design spreadsheet development"]
location_public: "Aguinaldo and Alfonso Lista, Ifugao"
client_public: "Department of Public Works and Highways, Ifugao 2nd District Engineering Office"
year: 2025
status: completed
role: "Built the design spreadsheet and ran the designs"
summary: "An Excel design sheet I built for a covered reinforced concrete canal (0.90 x 0.90 m clear, 180 mm walls) under soil, water, surcharge and uplift loads, designed for flexure and shear to NSCP 2015. Used for two FY 2026 road projects in Ifugao."
featured: false
cover: cover.webp
previews:
  - file: canal-design-1.webp
    caption: "Parameters, load diagram, earth pressure and uplift calculations, and the shear and moment diagrams for the cover, bottom slab and sidewalls"
    wide: true
  - file: canal-design-2.webp
    caption: "Design of the cover for flexure at the support and at midspan"
    wide: true
  - file: canal-design-3.webp
    caption: "Design of the cover for shear, and the bottom slab for flexure at the support"
    wide: true
  - file: canal-design-4.webp
    caption: "Design of the bottom slab for flexure at midspan and for shear"
    wide: true
  - file: canal-design-5.webp
    caption: "Design of the sidewalls for flexure and shear"
    wide: true
  - file: canal-design-drainage-project.webp
    caption: "The same sheet run for the drainage project in Alfonso Lista, with that site's soil unit weight (15.6 kN/m³)"
    wide: true
---

## Project overview

Two FY 2026 road projects on the Banaue–Mayoyao–Alfonso Lista road needed a covered concrete canal: an off-carriageway improvement in Aguinaldo and a drainage project in Alfonso Lista. I built a spreadsheet that takes the canal geometry, soil and material properties, works out the loads, analyzes each member and designs the reinforcement, so the same canal can be checked quickly for each site.

## Design basis

- **Section:** 0.90 x 0.90 m clear opening, 180 mm thick cover, walls and bottom slab (1.26 x 1.26 m overall), analyzed per 1 m length
- **Loads:** at-rest soil pressure from a soil friction angle of 36° (Rankine coefficient 0.26), water pressure, a 9.81 kN/m² surcharge on the cover, and soil uplift on the bottom slab with the canal full
- **Analysis:** cover and bottom slab as fixed-ended members, sidewalls as cantilevers
- **Design:** f'c = 20.7 MPa, fy = 414 MPa, 12 mm bars at 300 mm, 25 mm cover; flexure and shear checked at the supports and midspan of each member against NSCP 2015, with the steel ratio, strength reduction factor and maximum spacing checks

All members pass. For example, the cover's factored moment at the support is 1.82 kN·m against a design strength of 20.31 kN·m.

## My specific responsibilities

- Built the spreadsheet: inputs, load calculations, member analysis, diagrams and the design checks
- Ran the design for both projects

## Applicable standards

National Structural Code of the Philippines (NSCP 2015), Volume I; DPWH Design Guidelines, Criteria and Standards.
