#!/usr/bin/env python3
"""
English Document Overview page (page 2 of the full English PDF).
Same governance-grade layout as the Farsi version — LTR.
"""

import os
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

NOTO_REG  = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"

OUTPUT = "/tmp/epu_p2_toc_en.pdf"

BG        = "#0A1628"
CLR_TITLE = "#E8F0FF"
CLR_BODY  = "#C8D8F0"
CLR_ACCENT= "#4A90D9"
CLR_GOLD  = "#D4AF37"
CLR_META  = "#6A8AAA"
CLR_RULE  = "#1E3A5A"
CLR_ALT   = "#0D1E38"

DECKS = [
    ("EPU", "EPU Vision — From Sensor to Decision on Physics",              63,   2,  65),
    ("A",   "Deck A — Language, Semantics and Formal Foundations",          36,  66, 102),
    ("B",   "Deck B — Temporal State Management and Time Command",          36, 103, 139),
    ("C",   "Deck C — Ghost EPU Chip Architecture and Business Strategy",   74, 140, 214),
    ("D",   "Deck D — EPU Multi-Agent System (EPU-MAS)",                   127, 215, 342),
    ("E",   "Deck E — Hydrogen Autonomy and Propulsion Systems",            35, 343, 378),
    ("F",   "Deck F — Founder Biography",                                    6, 379, 385),
    ("G",   "Deck G — Ghost Platform Overview",                             13, 386, 399),
    ("TOC", "Table of Contents — Comprehensive Content Map",                35, 400, 435),
]
TOTAL_SLIDES = sum(d[2] for d in DECKS)
TOTAL_PAGES  = 435

def esc(t):
    return (t or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")

def build_rows():
    rows = []
    for i, (did, name, count, p_start, p_end) in enumerate(DECKS):
        bg = CLR_ALT if i % 2 == 0 else BG
        rows.append(f"""
        <tr style="background:{bg};">
          <td class="col-id">{esc(did)}</td>
          <td class="col-name">{esc(name)}</td>
          <td class="col-pages">{p_start}–{p_end}</td>
          <td class="col-count">{count}</td>
        </tr>""")
    return "".join(rows)

CSS = f"""
@font-face {{ font-family:'NS'; src:url('file://{NOTO_REG}'); font-weight:normal; }}
@font-face {{ font-family:'NS'; src:url('file://{NOTO_BOLD}'); font-weight:bold; }}
* {{ box-sizing:border-box; margin:0; padding:0; }}

@page {{
    size:A4; margin:0;
    @bottom-left {{
        content:"2 of {TOTAL_PAGES}";
        font-family:'NS',sans-serif; font-size:7pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm;
    }}
    @bottom-right {{
        content:"Document Overview";
        font-family:'NS',sans-serif; font-size:7pt; color:{CLR_META};
        margin-right:18mm; margin-bottom:7mm;
    }}
}}

html, body {{
    direction:ltr;
    font-family:'NS',sans-serif;
    background:{BG};
    color:{CLR_BODY};
}}

.page {{
    width:210mm;
    min-height:297mm;
    padding:16mm 18mm 18mm 18mm;
    background:{BG};
    direction:ltr;
}}

.doc-eyebrow {{
    font-family:'NS',sans-serif;
    font-size:7pt;
    color:{CLR_ACCENT};
    letter-spacing:1.5px;
    text-align:left;
    text-transform:uppercase;
    margin-bottom:3mm;
}}
.doc-title {{
    font-family:'NS',sans-serif;
    font-size:15pt;
    font-weight:bold;
    color:{CLR_TITLE};
    text-align:left;
    line-height:1.4;
    margin-bottom:1.5mm;
}}
.doc-subtitle {{
    font-family:'NS',sans-serif;
    font-size:9pt;
    color:{CLR_GOLD};
    text-align:left;
    margin-bottom:5mm;
}}
.doc-meta {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:left;
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
.section-head {{
    font-family:'NS',sans-serif;
    font-size:7pt;
    font-weight:bold;
    color:{CLR_ACCENT};
    text-align:left;
    letter-spacing:1px;
    text-transform:uppercase;
    margin-bottom:3mm;
}}

table.toc {{
    width:100%;
    border-collapse:collapse;
    direction:ltr;
}}
table.toc thead tr {{
    background:{CLR_RULE};
}}
table.toc thead th {{
    font-family:'NS',sans-serif;
    font-size:7pt;
    font-weight:bold;
    color:{CLR_ACCENT};
    padding:2mm 3mm;
    text-align:left;
    border-bottom:1pt solid {CLR_ACCENT};
}}
table.toc thead th.col-pages,
table.toc thead th.col-count {{
    text-align:center;
}}
table.toc tbody td {{
    font-family:'NS',sans-serif;
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
    width:12mm;
    white-space:nowrap;
}}
.col-name {{
    text-align:left;
    line-height:1.5;
}}
.col-pages {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:center;
    white-space:nowrap;
    width:22mm;
}}
.col-count {{
    font-family:'NS',sans-serif;
    font-size:7.5pt;
    color:{CLR_META};
    text-align:center;
    white-space:nowrap;
    width:14mm;
}}

.summary {{
    margin-top:5mm;
    display:flex;
    justify-content:space-between;
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
    display:block;
}}
.summary-lbl {{
    font-family:'NS',sans-serif;
    font-size:7pt;
    color:{CLR_META};
    display:block;
    margin-top:1mm;
}}
"""

HTML_BODY = f"""
<div class="page">

  <div class="doc-eyebrow">Concept Framework · Version 1.0 · 2025</div>

  <div class="doc-title">Ghost Hydrogen Powered Autonomous Vehicle<br/>with Event Processing Unit microchip</div>
  <div class="doc-subtitle">درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU</div>
  <div class="doc-meta">425 slides · 9 decks · 435 pages (including cover and deck dividers)</div>

  <div class="rule-heavy"></div>

  <div class="section-head">Document Overview — Deck Index</div>

  <table class="toc">
    <thead>
      <tr>
        <th class="col-id">Deck</th>
        <th class="col-name">Title</th>
        <th class="col-pages">Pages</th>
        <th class="col-count">Slides</th>
      </tr>
    </thead>
    <tbody>
      {build_rows()}
    </tbody>
  </table>

  <div class="summary">
    <div class="summary-item">
      <span class="summary-num">9</span>
      <span class="summary-lbl">Decks</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">425</span>
      <span class="summary-lbl">Slides</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">435</span>
      <span class="summary-lbl">Total Pages</span>
    </div>
    <div class="summary-item">
      <span class="summary-num">127</span>
      <span class="summary-lbl">Largest Deck (D)</span>
    </div>
  </div>

</div>
"""

def main():
    html = (
        '<!DOCTYPE html>'
        '<html lang="en" dir="ltr">'
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
