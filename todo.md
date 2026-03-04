# EPU Portal — Improvement Waves v2.0

## موج ۱ — یکپارچگی داده
- [x] W1.1 تأیید حساب رجیسترها 512 در اسلایدهای ۴۶–۵۰
- [x] W1.2 تأیید HTTP 200 برای CDN URLs
- [x] W1.3 رنگ‌بندی Act برای Deck C/D/E (GA-CONV Dimension 4)
- [x] W1.4 حذف ۴۴۱ مورد TWIN → EPU-MAS
- [x] W1.5 عنوان اسلاید ۱ EN+FA
- [x] W1.6 ۶ اسلاید Deck F با تصاویر سینماتیک
- [x] W1.7 اصلاح C-26 → 5 keyPoints (EN+FA)

## موج ۲ — غنی‌سازی keyPoints
- [ ] W2.1 Deck C: 60 slides → ≥5 keyPoints each (EN+FA)
- [ ] W2.2 Deck D: 120 slides → ≥5 keyPoints each (EN+FA)
- [ ] W2.3 Deck E: verify ≥5, fix any under threshold

## موج ۳ — اسلایدهای جدید (۱۱ اسلاید)
- [x] W3.1 C-NEW-1: 576-Cell Tensor Space Map
- [x] W3.2 C-NEW-2: Moat Timeline by Tensor Cell
- [x] W3.3 C-NEW-3: Valuation Path by Cell Validation
- [x] W3.4 C-NEW-4: Phase Gate Decision Tree
- [x] W3.5 C-NEW-5: Entity Scoring Matrix
- [x] W3.6 C-NEW-6: Sensor-Equation Routing Diagram
- [x] W3.7 C-NEW-7: Dual-Track Resource Allocation
- [x] W3.8 EPU-BRIDGE-1: From Sensor Chaos to Ordered State
- [x] W3.9 EPU-BRIDGE-2: From Mathematical Tool to Architecture
- [x] W3.10 EPU-BRIDGE-3: From Architecture to Certified Product
- [x] W3.11 D-GUIDE: Reading Guide EPU-MAS Architecture

## موج ۴ — تصاویر زیبایی‌شناختی
- [x] W4.1 Generate cinematic images for 7 new Deck C slides + C-01 to C-08
- [x] W4.2 Generate co-design images for D-121 + EPU bridge slides
- [x] W4.3 Match image tones to Act colors (dark navy/teal/gold palette)

## موج ۵ — بهبود UI
- [x] W5.1 Audience path filters (investor/engineer/regulator)
- [x] W5.2 MVD tags in data file headers
- [x] W5.3 Farsi technical term review (consistent across all decks)

## Deck G — Luxury Auto Customization Independence (5 slides)
- [x] G.1 Design 5-slide content architecture from 61-page technical guide
- [x] G.2 Generate 5 cinematic images for the slides (v2 modern machinery)
- [x] G.3 Create slidesG.ts data file with EN+FA bilingual content (expanded to 10 slides)
- [x] G.4 Integrate Deck G into Home.tsx navigation and filtering
- [x] G.5 Verify rendering and save checkpoint
- [x] G.2-REDO Regenerate all 5 Deck G images with modern machinery aesthetic (no hand-craft, focus on CNC/robotics/laser/autoclave)
- [x] G.REDO-1 Re-study guide: extract 5 categorical competitive moats (billion-dollar framing)
- [x] G.REDO-2 Regenerate 5 premium images — category-defining, not workshop tours (v3 moat-level)
- [x] G.REDO-3 Rewrite slidesG.ts with moat-level content (10 slides)
- [x] G.REDO-4 Integrate and verify
- [x] G.V3-1 Study McKinsey Auto SW & Electronics 2030 report
- [x] G.V3-2 Synthesize luxury guide + McKinsey into 10-image architecture (interior + vehicle modules)
- [x] G.V3-3 Generate 10 premium images combining physical craft with SDV architecture
- [x] G.V3-4 Create/update slidesG.ts with 10 slides
- [x] G.V3-5 Integrate and verify

## 3 Curated Pathway Slides (G-11, G-12, G-13) — reach 360 total
- [x] CP.1 Analyze all 357 slides to curate 3 optimal ~40-slide pathways (Investor, Engineer, Regulator)
- [x] CP.2 Generate 3 cinematic images for the pathway slides
- [x] CP.3 Add 3 slides to slidesG.ts with full bilingual content
- [x] CP.4 Update platform to show 360 total, verify and checkpoint

## Image Inspection
- [x] IMG.1 Extract and validate all image URLs across all 8 decks (360 URLs checked)
- [x] IMG.2 Fix 1 broken URL: G-7 sensor_array re-uploaded
- [x] IMG.3 New URL verified (HTTP 200)

## Audit Remediation (Pasted_content_02)
### Tier 1A — ECC Boilerplate Removal (Deck D)
- [ ] T1A.1 Script: remove repeated ECC keyPoint from all D slides except D-47, D-78
### Tier 1B — Appendix Contamination (Deck C)
- [ ] T1B.1 Remove orphaned appendix keyPoints from C-39,40,41,42,43,44,46,48,51,52,53,54
- [ ] T1B.2 Replace each with a topical 5th keyPoint from the slide's own narrative
### Tier 1C — KeyPoints Audit (Decks C, D, E)
- [ ] T1C.1 Programmatic audit: flag all slides with <5 keyPoints in EN or FA
- [ ] T1C.2 Batch-fix shortfalls using narrative/strategic fields
### Tier 2 — Structural Deduplication
- [ ] T2.1 Rewrite E-1, E-2, E-3 with thermal/hydrogen-specific identity
- [ ] T2.2 Reconcile C-40 vs C-51 funding figures (remove $4.2B from C-51)
- [ ] T2.3 Consolidate C-42 vs C-52 IP slides
- [ ] T2.4 Merge C-4 vs C-8 roadmap slides
### Tier 3A — Pathway Image Regeneration
- [ ] T3A.1 Regenerate G-11 with trail-map / wayfinding aesthetic
- [ ] T3A.2 Regenerate G-12 with engineer pathway wayfinding aesthetic
- [ ] T3A.3 Regenerate G-13 with regulator pathway wayfinding aesthetic
### Tier 3B — Deck D Hero Images
- [ ] T3B.1 Identify 10-15 most important D slides for hero image regeneration
- [ ] T3B.2 Regenerate those images with cinematic quality
### Tier 4 — Narrative Polish
- [ ] T4.1 Rewrite C-46 to lead with outcomes (29x accuracy, 189x speed)
- [ ] T4.2 Expand C-6 with chronological provenance arc
- [ ] T4.3 Add plain-language opening to EPU-48
- [ ] T4.4 Rewrite all 8 Deck D Act Synthesis slides around single governing claims
- [ ] T4.5 Restructure C-59 as 2x4 jurisdiction matrix

## Farsi 5th keyPoints Parity (Deck D — 59 slides)
- [ ] FA.D.1 Audit all 59 Deck D slides for FA 5th keyPoint gaps
- [ ] FA.D.2 Inject Farsi 5th keyPoints for all 59 slides
- [ ] FA.D.3 Verify TypeScript and checkpoint
