#!/usr/bin/env python3
"""
Renders a professional Document Overview page (page 2 of the full Farsi PDF).

Design directives applied:
  1. Document identity block: title, subtitle, total slide count, date
  2. Full 9-deck table of contents with Farsi deck names, page ranges, and slide counts
  3. Visual hierarchy: deck number column, title column, page-range column, count column
  4. Horizontal rule separating header from body; footer rule above page number
  5. Dark navy palette consistent with the rest of the document
  6. All text RTL; page-range numbers LTR (numerals are direction-neutral)
  7. No decorative clutter — governance-grade typographic restraint
"""

import os
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

NOTO_REG  = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
NOTO_AR_R = "/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf"
NOTO_AR_B = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"

OUTPUT = "/tmp/epu_p2_toc.pdf"

# Palette — identical to rest of document
BG        = "#0A1628"
CLR_TITLE = "#E8F0FF"
CLR_BODY  = "#C8D8F0"
CLR_ACCENT= "#4A90D9"
CLR_GOLD  = "#D4AF37"
CLR_META  = "#6A8AAA"
CLR_RULE  = "#1E3A5A"
CLR_ALT   = "#0D1E38"   # alternating row tint

# 9 decks: (deck_id, farsi_name, slide_count, first_page, last_page)
# Pages computed from generator: cover=1, each deck has 1 divider + N slides
DECKS = [
    ("EPU", "دیدگاه EPU — از حسگر تا تصمیم بر پایه فیزیک",  63,   2,  65),
    ("A",   "دسته A — زبان، معناشناسی و پایه‌های صوری",       36,  66, 102),
    ("B",   "دسته B — مدیریت حالت زمانی و دستور زمان",        36, 103, 139),
    ("C",   "دسته C — معماری تراشه Ghost EPU و راهبرد کسب‌وکار", 74, 140, 214),
    ("D",   "دسته D — سیستم چندعاملی EPU (EPU-MAS)",          127, 215, 342),
    ("E",   "دسته E — خودمختاری هیدروژنی و سیستم‌های پیشرانش", 35, 343, 378),
    ("F",   "دسته F — بیوگرافی بنیان‌گذار",                    6, 379, 385),
    ("G",   "دسته G — مروری بر پلتفرم Ghost",                 13, 386, 399),
    ("TOC", "فهرست مطالب — نقشه جامع محتوا",                  35, 400, 435),
]
TOTAL_SLIDES = sum(d[2] for d in DECKS)
TOTAL_PAGES  = 435

def esc(t):
    return (t or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def build_rows():
    rows = []
    for i, (did, fname, count, p_start, p_end) in enumerate(DECKS):
        bg = CLR_ALT if i % 2 == 0 else BG
        rows.append(f"""
        <tr style="background:{bg};">
          <td class="col-id">{esc(did)}</td>
          <td class="col-name">{esc(fname)}</td>
          <td class="col-pages">{p_start}–{p_end}</td>
          <td class="col-count">{count}</td>
        </tr>""")
    return "".join(rows)

CSS = f"""
@font-face {{ font-family:'NS'; src:url('file://{NOTO_REG}'); font-weight:normal; }}
@font-face {{ font-family:'NS'; src:url('file://{NOTO_BOLD}'); font-weight:bold; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_R}'); font-weight:normal; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_B}'); font-weight:bold; }}
* {{ box-sizing:border-box; margin:0; padding:0; }}

@page {{
    size:A4; margin:0;
    @bottom-left {{
        content:"2 از {TOTAL_PAGES}";
        font-family:'NA',sans-serif; font-size:7pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm; direction:rtl;
    }}
    @bottom-right {{
        content:"نمای کلی سند";
        font-family:'NA',sans-serif; font-size:7pt; color:{CLR_META};
        margin-right:18mm; margin-bottom:7mm; direction:rtl;
    }}
}}

html, body {{
    direction:rtl;
    font-family:'NA',sans-serif;
    background:{BG};
    color:{CLR_BODY};
}}

.page {{
    width:210mm;
    min-height:297mm;
    padding:16mm 18mm 18mm 18mm;
    background:{BG};
    direction:rtl;
}}

/* ── Document identity block ── */
.doc-eyebrow {{
    font-family:'NA',sans-serif;
    font-size:7pt;
    color:{CLR_ACCENT};
    letter-spacing:1.5px;
    text-align:right;
    direction:rtl;
    margin-bottom:3mm;
    text-transform:uppercase;
}}
.doc-title {{
    font-family:'NA',sans-serif;
    font-size:15pt;
    font-weight:bold;
    color:{CLR_TITLE};
    text-align:right;
    direction:rtl;
    line-height:1.4;
    margin-bottom:1.5mm;
}}
.doc-subtitle {{
    font-family:'NA',sans-serif;
    font-size:9pt;
    color:{CLR_GOLD};
    text-align:right;
    direction:rtl;
    margin-bottom:5mm;
}}
.doc-meta {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:right;
    direction:ltr;
    unicode-bidi:embed;
    margin-bottom:6mm;
}}
.rule-heavy {{
    width:100%;
    height:1.5pt;
    background:{CLR_ACCENT};
    margin-bottom:6mm;
}}
.rule-light {{
    width:100%;
    height:0.5pt;
    background:{CLR_RULE};
    margin-bottom:5mm;
}}

/* ── Section heading ── */
.section-head {{
    font-family:'NA',sans-serif;
    font-size:7pt;
    font-weight:bold;
    color:{CLR_ACCENT};
    text-align:right;
    direction:rtl;
    letter-spacing:1px;
    margin-bottom:3mm;
}}

/* ── TOC table ── */
table.toc {{
    width:100%;
    border-collapse:collapse;
    direction:rtl;
}}
table.toc thead tr {{
    background:{CLR_RULE};
}}
table.toc thead th {{
    font-family:'NA',sans-serif;
    font-size:7pt;
    font-weight:bold;
    color:{CLR_ACCENT};
    padding:2mm 3mm;
    text-align:right;
    direction:rtl;
    border-bottom:1pt solid {CLR_ACCENT};
}}
table.toc thead th.col-pages,
table.toc thead th.col-count {{
    text-align:center;
    direction:ltr;
}}
table.toc tbody td {{
    font-family:'NA',sans-serif;
    font-size:8.5pt;
    color:{CLR_BODY};
    padding:2.5mm 3mm;
    vertical-align:middle;
    border-bottom:0.5pt solid {CLR_RULE};
}}
.col-id {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    font-weight:bold;
    color:{CLR_ACCENT};
    text-align:center;
    direction:ltr;
    width:12mm;
    white-space:nowrap;
}}
.col-name {{
    text-align:right;
    direction:rtl;
    unicode-bidi:embed;
    line-height:1.5;
}}
.col-pages {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:center;
    direction:ltr;
    white-space:nowrap;
    width:22mm;
}}
.col-count {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:center;
    direction:ltr;
    white-space:nowrap;
    width:14mm;
}}

/* ── Summary bar ── */
.summary {{
    margin-top:5mm;
    display:flex;
    justify-content:space-between;
    direction:rtl;
    border-top:0.5pt solid {CLR_RULE};
    padding-top:3mm;
}}
.summary-item {{
    text-align:center;
}}
.summary-num {{
    font-family:'NS',sans-serif;
    font-size:16pt;
    font-weight:bold;
    color:{CLR_GOLD};
    direction:ltr;
    display:block;
}}
.summary-lbl {{
    font-family:'NA',sans-serif;
    font-size:7pt;
    color:{CLR_META};
    direction:rtl;
    display:block;
    margin-top:1mm;
}}
"""

HTML_BODY = f"""
<div class="page">

  <div class="doc-eyebrow">چارچوب مفهومی · نسخه ۱.۰ · ۱۴۰۴</div>

  <div class="doc-title">خودروی هیدروژنی شبح با ریزپردازنده EPU</div>
  <div class="doc-subtitle">Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip</div>
  <div class="doc-meta">425 slides · 9 decks · 435 pages (including cover and deck dividers)</div>

  <div class="rule-heavy"></div>

  <div class="section-head">نمای کلی سند — فهرست دسته‌ها</div>

  <table class="toc">
    <thead>
      <tr>
        <th class="col-id">دسته</th>
        <th class="col-name">عنوان</th>
        <th class="col-pages">صفحات</th>
        <th class="col-count">اسلاید</th>
      </tr>
    </thead>
    <tbody>
      {build_rows()}
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-item">
      <span class="summary-num">9</span>
      <span class="summary-lbl">دسته</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">425</span>
      <span class="summary-lbl">اسلاید</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">435</span>
      <span class="summary-lbl">صفحه کل</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">127</span>
      <span class="summary-lbl">بیشترین اسلاید در یک دسته (D)</span>
    </div>
  </div>

</div>
"""

def main():
    html = (
        '<!DOCTYPE html>'
        '<html lang="fa" dir="rtl">'
        '<head><meta charset="UTF-8"/>'
        f'<style>{CSS}</style>'
        '</head>'
        f'<body>{HTML_BODY}</body>'
        '</html>'
    )
    fc = FontConfiguration()
    HTML(string=html, base_url="/").write_pdf(OUTPUT, font_config=fc)
    size = os.path.getsize(OUTPUT) / 1024
    print(f"Done: {OUTPUT}  ({size:.0f} KB)")

if __name__ == "__main__":
    main()
