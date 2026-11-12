---
code: RES-2026-001
title: "Reliability-Based Slope Stability Assessment of Weathered Residual Soils along the Banaue–Mayoyao–Aguinaldo–Alfonso Lista Road Corridor"
work_type: RES
publication_status: approved
approval_reference: "Own MSCE thesis proposal (April 2026); publication requested by R. Piñon, 2026-11-12"
confidentiality: public
disciplines: [geotechnical, research, highway]
project_type: "Graduate thesis (proposal stage)"
software: ["Slide2", "SLOPE/W", "MATLAB", "Python"]
competencies: ["Slope stability", "Probabilistic analysis", "Monte Carlo simulation", "Limit equilibrium methods", "Statistical characterization of soil properties"]
location_public: "Ifugao, Cordillera Administrative Region"
client_public: "Polytechnic University of the Philippines, MS Civil Engineering (Geotechnical)"
year: 2026
status: ongoing
role: "Researcher (MSCE thesis)"
summary: "Graduate research on mountain road slopes in Ifugao. It treats soil strength as uncertain and uses Monte Carlo simulation to report probability of failure and reliability index alongside the conventional factor of safety, to find slopes that look stable but still carry real risk."
featured: true
cover: cover.webp
previews:
  - file: research-design-flowchart.webp
    caption: "Research design: six phases from data collection to comparative analysis"
    wide: true
  - file: conceptual-framework.webp
    caption: "Conceptual framework: inputs, process and outputs"
    wide: true
---

## Project overview

Master of Science in Civil Engineering (Geotechnical) thesis at the Polytechnic University of the Philippines. The proposal was completed in April 2026; the analysis is in progress.

## Engineering background

The Banaue–Mayoyao–Aguinaldo–Alfonso Lista Road Corridor runs about 91 km through the mountains of Ifugao. Its cut and fill slopes are mostly deeply weathered residual soils, and heavy rainfall repeatedly triggers slips and landslides that close the road. In November 2020, during Typhoon Ulysses, a slope collapse on a road section in Banaue killed five people, including DPWH personnel clearing the road.

## Problem statement

Conventional slope design uses one representative value for each soil property and reports a single factor of safety. Weathered residual soils vary widely from point to point, so a slope with an acceptable factor of safety may still have a meaningful chance of failing. Reliability-based assessment of mountain road slopes is still rare in the Philippines.

## Objectives

1. Determine the statistical characteristics of cohesion (c), friction angle (φ) and unit weight (γ) of the corridor's weathered residual soils.
2. Evaluate deterministic factors of safety of selected critical slopes using limit equilibrium analysis.
3. Assess how soil parameter variability affects stability through Monte Carlo simulation.
4. Estimate the probability of failure (Pf) and reliability index (β) of each slope.
5. Compare reliability-based and deterministic results, to find slopes judged stable that still carry significant failure risk.

## Scope and constraints

- **Sites:** at least five critical slope sections with documented instability
- **Data:** existing borehole logs, SPT records and laboratory test results from DPWH geotechnical investigations, used with authorization; no new soil sampling
- **Failure mechanisms:** planar and circular, analyzed by limit equilibrium; 3D and finite element modeling are outside the scope
- **Loading:** rainfall-induced failure is represented by a conservative piezometric surface near the slope face; seismic loading is not included

## Engineering methodology

1. **Database:** compile borehole, SPT, laboratory and soil classification (USCS) data into one geotechnical database.
2. **Statistical characterization:** mean, standard deviation and coefficient of variation for c, φ and γ, then fit normal, lognormal or beta distributions, checked with Kolmogorov–Smirnov and chi-square tests. Where data are thin, published variability ranges (Phoon and Kulhawy, 1999) are used.
3. **Deterministic analysis:** slope cross-sections from topographic surveys and road design drawings, with factors of safety by Bishop's Simplified (circular) and Spencer's (non-circular) methods in Slide2 or SLOPE/W.
4. **Monte Carlo simulation:** at least 10,000 trials per slope with Latin Hypercube sampling, producing a distribution of the factor of safety.
5. **Reliability assessment:** probability of failure, reliability index and sensitivity analysis.
6. **Comparison and recommendations:** deterministic against probabilistic results, leading to risk-informed guidance.

## Software and tools

Rocscience Slide2 or GeoStudio SLOPE/W for slope modeling; MATLAB and Python (NumPy, SciPy) for statistics and distribution fitting.

## Results

Analysis is in progress. Results will be added after they are final.

## Competencies demonstrated

Probabilistic slope stability analysis, statistical characterization of geotechnical data, limit equilibrium methods, and research design.
