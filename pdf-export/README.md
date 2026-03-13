# PDF Export Scripts

This directory contains the Python scripts used to generate the official PDF exports of the EPU Strategy slide deck.

> **Design Standards:** All generators in this directory are governed by [`PDF_DESIGN_DIRECTIVES.md`](./PDF_DESIGN_DIRECTIVES.md). Read that document before modifying any generator or adding a new one. It defines the mandatory page hierarchy, margin rules, color palette, typography, directionality requirements, and the pre-delivery quality verification protocol.

## Requirements

```bash
pip install weasyprint arabic-reshaper python-bidi pdf2image
sudo apt-get install fonts-noto fonts-noto-cjk poppler-utils
```

Also requires the cover image at `/tmp/cover_image.png` (Ghost EPU vehicle diagram) and all 425 slide images pre-downloaded to `/tmp/slide_images/`.

## Scripts

### `extract_all_slides.py`
Extracts all 425 slides' full content (title, Farsi title, narrative, strategic context, key points, tags, imageUrl) from the TypeScript data files into `/tmp/all_slides_data.json`. Run this first before generating any PDF.

```bash
python3 extract_all_slides.py
```

### `generate_en_dark.py`
Generates the full **English** PDF — all 425 slides across 9 decks, dark navy background, LTR layout. Outputs to `/tmp/epu_strategy_en_dark.pdf`.

```bash
python3 generate_en_dark.py
```

### `generate_fa_dark.py`
Generates the full **Farsi** PDF — all 425 slides across 9 decks, dark navy background, RTL layout with Noto Sans Arabic. Outputs to `/tmp/epu_strategy_fa_dark.pdf`.

```bash
python3 generate_fa_dark.py
```

### `generate_subset_fa_dark.py`
Generates a **Farsi subset PDF** for a curated selection of slides. Edit the `SUBSET_SLIDES` list at the top of the script to change which slides are included. The cover page automatically lists all included slide numbers referenced against the full 425.

```bash
python3 generate_subset_fa_dark.py
```

## Subset PDF Convention

Subset PDFs follow this naming and cover annotation convention:

- **Cover page**: Same Ghost vehicle image + both title lines (English and Farsi) + a bottom annotation block listing all included slide numbers as chips (e.g., `154 · 169 · 172 ...`) with total count referenced against 425
- **Slide header**: Shows deck name · slide ID · position in 425 (e.g., `دسته C · اسلاید 19 · شماره 154 از 425`)
- **File naming**: `epu_subset_<description>_fa.pdf` for Farsi, `epu_subset_<description>_en.pdf` for English

## Cover Page Specification

The cover page contains **only**:
1. Ghost Hydrogen Powered Autonomous Vehicle image (full width)
2. English title: *Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip*
3. Farsi title: *درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU*

For subset PDFs, a small annotation block is added below the titles listing the included slide numbers — this must not interfere with the main cover content.
