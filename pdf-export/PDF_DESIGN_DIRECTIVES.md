# PDF Design Directives & Guardrails
## Ghost Hydrogen Powered Autonomous Vehicle — EPU Strategy Document Series

**Version 1.0 · March 2025**
**Applies to:** All PDF exports generated from this project — full-document (EN and FA), subset, and single-page renders.

---

## Purpose

This document codifies the design standards, typographic rules, layout governance, and rendering guardrails that every PDF generator in this project must satisfy. It exists because professional multi-deck technical documents require explicit, enforced standards — not implicit assumptions. Every directive below was derived from a real failure observed in this project. The document is the authoritative reference for any future generator, any regeneration, and any quality audit.

---

## Part I — Document Architecture

### 1.1 Page Hierarchy

Every PDF produced by this project follows a strict four-level page hierarchy. No level may be omitted, reordered, or merged with another.

| Level | Page Type | Purpose | Background |
|-------|-----------|---------|------------|
| 1 | Cover | Document identity, vehicle image, bilingual title | `#080818` |
| 2 | Document Overview | Full deck index, page ranges, totals | `#0A1628` |
| 3 | Deck Divider | Section entry, deck name, slide count | `#0D1B2A` |
| 4 | Slide Page | Full slide content | `#0A1628` |

The Document Overview page (Level 2) is **mandatory** in all full-document PDFs. It is not optional and it is not a deck divider. It is a document-level orientation page that sits between the cover and the first deck divider. Its absence is a governance failure.

Subset PDFs omit the Document Overview and replace it with a cover annotation block listing the included slide numbers. They retain deck dividers only for decks that have at least one slide in the subset.

### 1.2 Page Numbering

Page numbers follow the format **`N of T`** (English) or **`N از T`** (Farsi), where `N` is the current page and `T` is the total page count of the document. This format appears in the bottom-left footer margin on every page.

The total page count `T` is the sum of: 1 (cover) + 1 (Document Overview) + number of deck dividers + total slide count. For the current 425-slide, 9-deck corpus: `T = 1 + 1 + 9 + 425 = 436`. For subset PDFs, `T` is recalculated per subset.

Page numbering is **never** reset at deck boundaries. The document is one continuous numbered sequence.

### 1.3 Footer Content

Every page carries two footer fields, rendered by WeasyPrint's `@page` margin boxes:

| Position | Content | Direction |
|----------|---------|-----------|
| Bottom-left | `N of T` / `N از T` | LTR (numerals) |
| Bottom-right | Current deck name (full Farsi or English name) | RTL for FA, LTR for EN |

The cover page footer carries the document title in the right position, not a deck name. The Document Overview page footer carries "Document Overview" / "نمای کلی سند" in the right position.

---

## Part II — Cover Page

### 2.1 Mandatory Elements

The cover page contains **exactly three elements** in this vertical order:

1. Ghost Hydrogen Powered Autonomous Vehicle image — full width (186mm), maximum height 130mm, `object-fit:contain`
2. English title: *Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip* — centered, white (`#FFFFFF`), 13pt bold, LTR
3. Farsi title: *درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU* — centered, gold (`#D4AF37`), 13pt bold, RTL

No other decorative elements, logos, dates, version numbers, or supplementary text appear on the cover. The cover is an identity page, not an information page.

### 2.2 Subset Cover Annotation

Subset PDFs add a fourth element below the Farsi title: a compact annotation block listing all included slide numbers as inline chips (e.g., `154 · 169 · 172 · ...`) with a total count referenced against 425 (e.g., `زیرمجموعه انتخابی — 17 اسلاید از 425`). This annotation must not exceed two lines and must not alter the spacing or sizing of the three mandatory cover elements.

### 2.3 Cover Guardrails

The following are explicitly prohibited on the cover page:

- Version numbers or dates
- Deck count or slide count statistics
- Author names or organizational logos
- Decorative rules, gradients, or background textures beyond the solid `#080818` background
- Any content that is not one of the three mandatory elements (or the subset annotation)

---

## Part III — Document Overview Page

### 3.1 Purpose and Placement

The Document Overview page is the reader's first orientation point after the cover. It answers three questions: What is this document? What does it contain? Where is each section? It appears as page 2 in all full-document PDFs.

### 3.2 Required Sections

The Document Overview page contains the following sections in order:

**Document Identity Block** — Eyebrow line (framework type, version, year), document title in primary language, subtitle in secondary language, and a scope line stating total slides, total decks, and total pages.

**Horizontal Rule** — A 1.5pt accent-colored (`#4A90D9`) full-width rule separating the identity block from the content body. This rule is the visual signal that the orientation content begins.

**Section Heading** — A small-caps or uppercase label reading "Document Overview — Deck Index" (EN) or "نمای کلی سند — فهرست دسته‌ها" (FA).

**Deck Index Table** — A four-column table listing every deck in document order. The columns are: Deck ID, Full Title, Page Range, Slide Count. Alternating rows use a subtle tint (`#0D1E38`) for readability. The table header row uses the rule background (`#1E3A5A`).

**Summary Statistics Bar** — A horizontal bar below the table showing four aggregate statistics: total decks, total slides, total pages, and largest deck (with its ID). Statistics are displayed as large numerals in gold (`#D4AF37`) with small labels beneath.

### 3.3 Column Specifications

| Column | Alignment | Font | Width |
|--------|-----------|------|-------|
| Deck ID | Center | Noto Sans (Latin), bold, accent color | 12mm |
| Title | Right (FA) / Left (EN) | Noto Sans Arabic (FA) / Noto Sans (EN) | Fill |
| Page Range | Center | Noto Sans (Latin), meta color | 22mm |
| Slide Count | Center | Noto Sans (Latin), meta color | 14mm |

### 3.4 Document Overview Guardrails

The following are explicitly prohibited on the Document Overview page:

- Slide-level detail (individual slide titles, summaries, or images)
- Decorative imagery of any kind
- Deck divider styling (this is not a deck divider)
- Omitting any deck from the table
- Using approximate or rounded page numbers — all page ranges must be exact

---

## Part IV — Deck Divider Pages

### 4.1 Purpose

Deck dividers are section entry pages. They signal a thematic transition and orient the reader to the deck they are entering. They are not navigation pages and do not repeat information from the Document Overview.

### 4.2 Required Elements

Each deck divider contains:

1. Deck label (e.g., "دسته A" or "Deck A") — small, accent-colored, centered
2. Accent rule — 40mm wide, 2px, centered
3. Full deck title — large (18pt bold), centered, full Farsi or English name
4. Accent rule — repeated
5. Slide count for this deck (e.g., "36 اسلاید" or "36 slides") — small, accent-colored, centered

### 4.3 Layout Guardrails

**Critical:** The deck divider uses `display:flex; flex-direction:column; align-items:center; padding:0 20mm`. Every text element inside the divider **must** carry `width:100%` and `overflow-wrap:break-word`. Without these properties, WeasyPrint's RTL flex layout will measure child element width from the page edge rather than the padded container boundary, causing text to overflow and be clipped at the right margin.

This is a confirmed WeasyPrint rendering behavior, not a CSS specification issue. The fix is mandatory and must be applied to every text element inside `.div-page`.

The deck divider background (`#0D1B2A`) is intentionally distinct from the slide page background (`#0A1628`) to provide a visible visual break between sections.

---

## Part V — Slide Pages

### 5.1 Page Sizing

Slide pages use `width:210mm` (A4 width) with **auto height** — no `min-height`, no `height`. WeasyPrint will size each page to its content. This prevents the dead-space problem where short-content slides produce pages with 30–50% blank area at the bottom.

The only exception is the cover page and deck dividers, which use fixed `height:297mm` to produce full A4 pages regardless of content.

### 5.2 Slide Header

Every slide page carries a header row with two elements separated by `justify-content:space-between`:

| Element | Position | Content | Font |
|---------|----------|---------|------|
| Meta label | Right (FA) / Left (EN) | `Deck · Slide ID` | Noto Sans Arabic 7pt, meta color |
| Page number | Left (FA) / Right (EN) | `N / T` | Noto Sans 7.5pt bold, accent color |

The header is separated from the slide body by a 1.5pt rule in `#1E3A5A`.

### 5.3 Content Sections

Slide content is rendered in this order when present:

1. **Title** — 13pt bold, title color (`#E8F0FF`), right-aligned (FA) / left-aligned (EN)
2. **Image** — centered, max-width 170mm, max-height 72mm, `object-fit:contain`
3. **Act label** — if present, italic, meta color
4. **Narrative** (`روایت`) — section heading + body text, 8.5pt, body color
5. **Strategic Context** (`زمینه راهبردی`) — section heading + italic body, 8pt, strategic color (`#A0B8D8`)
6. **Key Points** (`نکات کلیدی`) — section heading + unordered list, 8pt, body color
7. **Tags** — inline chips, right-justified (FA) / left-justified (EN)

No section is fabricated if the source data does not contain it. Missing sections are silently omitted — they are not replaced with placeholder text.

### 5.4 Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Slide title | Noto Sans Arabic (FA) / Noto Sans (EN) | 13pt | Bold | `#E8F0FF` |
| Narrative body | Noto Sans Arabic (FA) / Noto Sans (EN) | 8.5pt | Regular | `#C8D8F0` |
| Strategic context | Noto Sans Arabic (FA) / Noto Sans (EN) | 8pt | Regular Italic | `#A0B8D8` |
| Key points | Noto Sans Arabic (FA) / Noto Sans (EN) | 8pt | Regular | `#C8D8F0` |
| Section headings | Noto Sans Arabic (FA) / Noto Sans (EN) | 6.5pt | Bold | `#4A90D9` |
| Tags | Noto Sans Arabic (FA) / Noto Sans (EN) | 6pt | Regular | `#4A90D9` |
| Meta / footer | Noto Sans Arabic (FA) / Noto Sans (EN) | 7–7.5pt | Regular | `#6A8AAA` |

### 5.5 Slide Page Guardrails

The following are explicitly prohibited on slide pages:

- `min-height:297mm` or any fixed height on the `.slide` container — this causes dead space
- `get_display()` or `arabic_reshaper` pre-processing on Farsi text — WeasyPrint handles BiDi natively; pre-processing causes double-reversal artifacts
- Fabricated or summarized content — all text must come verbatim from the source data
- English text used as a fallback title when a Farsi title exists — the fallback chain is `fa.title → en.title`, and the fallback must only trigger when `fa.title` is genuinely absent or empty
- Images sourced from URLs not in the local image cache — all images must be pre-downloaded to `/tmp/slide_images/` and referenced via `file://` paths

---

## Part VI — Color Palette

The following palette is canonical for all dark-mode PDFs. No color outside this palette may be introduced without explicit revision of this document.

| Token | Hex | Usage |
|-------|-----|-------|
| `BG_PAGE` | `#0A1628` | Slide page background |
| `BG_DIV` | `#0D1B2A` | Deck divider background |
| `BG_COVER` | `#080818` | Cover page background |
| `BG_ALT` | `#0D1E38` | Alternating table row tint |
| `CLR_TITLE` | `#E8F0FF` | Slide titles, document title |
| `CLR_BODY` | `#C8D8F0` | Body text, key points |
| `CLR_ACCENT` | `#4A90D9` | Section headings, rules, tags, deck labels |
| `CLR_GOLD` | `#D4AF37` | Farsi cover title, summary statistics |
| `CLR_META` | `#6A8AAA` | Footer text, meta labels, page ranges |
| `CLR_STRAT` | `#A0B8D8` | Strategic context text |
| `CLR_RULE` | `#1E3A5A` | Horizontal rules, table borders |
| `CLR_TAG_BG` | `#0D2040` | Tag chip background |
| `CLR_TAG_BD` | `#1E3A5A` | Tag chip border |

---

## Part VII — Directionality

### 7.1 Farsi PDFs

All Farsi PDFs use `direction:rtl` at the `html` and `body` level. Every text container carries `direction:rtl; unicode-bidi:embed`. WeasyPrint's native BiDi engine handles character-level directionality. No pre-processing libraries (`arabic_reshaper`, `python-bidi`) are used — they cause double-reversal when combined with WeasyPrint's own BiDi.

Numerals (page numbers, slide counts, page ranges) are rendered LTR regardless of document direction. They are placed in elements with `direction:ltr; unicode-bidi:embed` or in LTR-designated columns.

### 7.2 English PDFs

All English PDFs use `direction:ltr`. The Farsi subtitle on the Document Overview page uses `direction:rtl; unicode-bidi:embed` on its specific element only.

### 7.3 Mixed-Direction Elements

The slide header contains both a RTL meta label and a LTR page number. These are placed in a flex container with `direction:rtl` (FA) or `direction:ltr` (EN), and the page number element explicitly overrides to `direction:ltr; unicode-bidi:embed`. The flex `justify-content:space-between` ensures they sit at opposite ends of the header regardless of document direction.

---

## Part VIII — Fonts

All PDFs use Noto fonts exclusively. No web fonts, no system fonts, no fallback to generic families.

| Font | File | Usage |
|------|------|-------|
| Noto Sans Regular | `NotoSans-Regular.ttf` | English body text |
| Noto Sans Bold | `NotoSans-Bold.ttf` | English titles, bold elements |
| Noto Sans Arabic Regular | `NotoSansArabic-Regular.ttf` | All Farsi text |
| Noto Sans Arabic Bold | `NotoSansArabic-Bold.ttf` | Farsi titles, bold elements |

Font paths are absolute (`/usr/share/fonts/truetype/noto/`) and referenced via `file://` in `@font-face` declarations. The `FontConfiguration` object from `weasyprint.text.fonts` is passed to every `write_pdf()` call.

---

## Part IX — Margins

### 9.1 Page Margins

All pages use `@page { margin:0 }`. Content margins are applied via padding on the outermost content container, not via CSS page margins. This gives precise control over the content area without interference from WeasyPrint's margin-box rendering.

### 9.2 Content Padding

| Page Type | Padding |
|-----------|---------|
| Cover | `0 12mm` |
| Document Overview | `16mm 18mm 18mm 18mm` |
| Deck Divider | `0 20mm` |
| Slide Page | `12mm 18mm 16mm 18mm` |

The 18mm lateral padding on slide pages and deck dividers is the **minimum safe margin**. It must not be reduced. It provides the visual breathing room that separates content from the physical page edge and ensures text is never clipped during printing or PDF rendering.

### 9.3 Margin Guardrails

The following conditions constitute a margin violation and must be caught before any PDF is delivered:

- Any text element that visually touches or crosses the 18mm lateral boundary
- Any image that extends beyond the `max-width:170mm` constraint on slide pages
- Any flex child element inside a padded container that does not carry `width:100%` — this is the root cause of the RTL overflow-clipping failure documented in this project
- Any page with more than approximately 15% blank space at the bottom (indicating a `min-height` constraint is active on a content page)

---

## Part X — Quality Verification Protocol

### 10.1 Mandatory Pre-Delivery Checks

Every PDF must pass the following checks before it is delivered. These checks are not optional and are not satisfied by the absence of rendering errors.

**Check 1 — Page count.** Verify that the total page count matches the expected value: `1 (cover) + 1 (overview) + N_decks (dividers) + N_slides (content)`. A mismatch indicates a missing page type.

**Check 2 — Visual margin inspection.** Extract every page as a raster image at ≥150 DPI and visually inspect each page. Specifically: (a) no text touches the lateral page edges; (b) no page has excessive blank space at the bottom; (c) all deck divider titles are fully visible and not clipped.

**Check 3 — Content completeness.** For a random sample of at least 10% of slides, verify that the rendered page contains the same title, narrative, and key points as the source data. Truncation, summarization, or substitution of content is a failure.

**Check 4 — Image presence.** For all slides that have an `imageUrl` in the source data, verify that the rendered page contains an image. A missing image (due to a failed local cache lookup) is a failure.

**Check 5 — Directionality.** For Farsi PDFs, verify that all Farsi text is right-aligned and flows right-to-left. For English PDFs, verify that all English text is left-aligned and flows left-to-right. Mixed-direction elements (page numbers, deck IDs) must render correctly in both.

**Check 6 — Document Overview completeness.** Verify that the Document Overview table contains all 9 decks, that page ranges are correct and contiguous, and that slide counts sum to 425.

### 10.2 Failure Classification

| Severity | Description | Action |
|----------|-------------|--------|
| Critical | Text clipped at page edge; missing page type; wrong page count | Do not deliver. Fix and re-render. |
| Major | Blank space >15% at page bottom; missing image on slide with imageUrl | Do not deliver. Fix and re-render. |
| Minor | Cosmetic spacing inconsistency not affecting readability | Document and deliver with note. |
| Pre-existing | Mismatch between slide image and slide content originating in source data | Document and deliver with note. Do not fix in PDF generator — fix at source. |

### 10.3 Verification Is Not Confirmed by File Size or Page Count Alone

A PDF that renders without errors, produces a plausible file size, and has the correct page count may still fail Checks 2 through 6. File size and page count are necessary but not sufficient evidence of correctness. Visual inspection of rendered pages is the only sufficient evidence.

---

## Part XI — Generator Architecture

### 11.1 Caching Strategy

The full-document generators use a per-deck caching strategy: each deck is rendered to a separate PDF file, and the final document is assembled with `pdfunite`. If a deck's cached file already exists, it is reused without re-rendering. This reduces regeneration time from ~30 minutes to ~2 minutes when only one deck has changed.

**Guardrail:** When any design directive in this document changes, all cached deck files must be deleted before regenerating. Stale cached files will produce a document with inconsistent styling across decks.

### 11.2 Source Data Extraction

All generators consume `/tmp/all_slides_data.json`, produced by `extract_all_slides.py`. This file must be regenerated whenever the TypeScript source data files (`slides60.ts`, `slidesA.ts`, etc.) are modified. Generators must never read TypeScript files directly.

### 11.3 Image Cache

All slide images must be pre-downloaded to `/tmp/slide_images/` before PDF generation. The `local_img()` function resolves CloudFront CDN URLs to local file paths. If a local file does not exist, the image is silently omitted from the rendered page — this is a **Major** failure per Section 10.2 and must be caught by Check 4.

---

*This document is the authoritative design standard for the EPU Strategy PDF series. Any deviation from these directives requires explicit revision of this document before implementation.*
