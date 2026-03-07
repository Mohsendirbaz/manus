#!/usr/bin/env python3
"""
Farsi subset PDF generator — dark navy edition.
Governed by: PDF_DESIGN_DIRECTIVES.md (read before modifying)

Design summary:
  Page hierarchy:  Cover (with slide-number annotation) → Deck Divider → Slide Pages
  Note:            Subset PDFs omit the Document Overview page
  Background:      Slide pages #0A1628 | Dividers #0D1B2A | Cover #080818
  Directionality:  RTL via WeasyPrint native BiDi — NO get_display/reshape
  Page sizing:     Slide pages auto-height (no min-height) — prevents dead space
  Margins:         18mm lateral minimum on all content pages
  Flex+RTL fix:    All flex children inside padded containers carry width:100%
  Fonts:           Noto Sans Arabic (FA text) + Noto Sans (numerals/EN)
  Page numbering:  N از T format, referenced against full 425-slide corpus
  Cover annotation: Slide number chips + total count vs. 425
"""

import json, os
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

SLIDES_JSON = "/tmp/all_slides_data.json"
COVER_IMAGE = "/tmp/cover_image.png"
IMG_DIR     = "/tmp/slide_images"
OUTPUT_PDF  = "/tmp/epu_subset_fa_dark.pdf"

NOTO_REG   = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD  = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
NOTO_AR_R  = "/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf"
NOTO_AR_B  = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"

SUBSET_POSITIONS = [154,169,172,173,176,177,178,220,235,251,282,309,341,344,347,350,380]
TOTAL_DECK = 425

# Dark navy color palette
BG_PAGE    = "#0A1628"   # slide page background
BG_COVER   = "#080818"   # cover background (slightly deeper)
CLR_TITLE  = "#E8F0FF"   # slide title — bright white-blue
CLR_BODY   = "#C8D8F0"   # body text — light blue-white
CLR_ACCENT = "#4A90D9"   # accent (section labels, bullets)
CLR_GOLD   = "#D4AF37"   # gold (cover Farsi title, chips)
CLR_META   = "#6A8AAA"   # meta/footer text — muted blue
CLR_STRAT  = "#A0B8D8"   # strategic context — slightly dimmer
CLR_RULE   = "#1E3A5A"   # divider lines
CLR_TAG_BG = "#0D2040"   # tag background
CLR_TAG_BD = "#1E3A5A"   # tag border

def esc(t):
    """HTML-escape only. Do NOT reshape or bidi-flip Farsi text for WeasyPrint."""
    return (t or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

def local_img(url):
    if not url: return ""
    fname = url.split("/")[-1]
    local = f"{IMG_DIR}/{fname}"
    return f"file://{local}" if os.path.exists(local) else ""

CSS = f"""
@font-face {{ font-family:'NS'; src:url('file://{NOTO_REG}'); font-weight:normal; }}
@font-face {{ font-family:'NS'; src:url('file://{NOTO_BOLD}'); font-weight:bold; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_R}'); font-weight:normal; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_B}'); font-weight:bold; }}
* {{ box-sizing:border-box; margin:0; padding:0; }}
@page {{
    size:A4; margin:0;
    @bottom-left  {{
        content:counter(page)" از "counter(pages);
        font-family:'NA',sans-serif; font-size:7pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm; direction:rtl;
    }}
    @bottom-right {{
        content:"زیرمجموعه اسلایدهای EPU";
        font-family:'NA',sans-serif; font-size:7pt; color:{CLR_META};
        margin-right:18mm; margin-bottom:7mm; direction:rtl;
    }}
}}
html {{ direction:rtl; }}
body {{
    font-family:'NA',sans-serif; font-size:10pt;
    color:{CLR_BODY}; background:{BG_PAGE};
    direction:rtl; unicode-bidi:embed;
}}

/* ── Cover ── */
.cover {{
    width:210mm; height:297mm; background:{BG_COVER};
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    page-break-after:always;
}}
.cover-img {{ width:180mm; max-height:115mm; object-fit:contain; margin-bottom:12mm; }}
.cover-en {{
    font-family:'NS',sans-serif; font-size:12.5pt; font-weight:bold; color:#FFFFFF;
    text-align:center; line-height:1.5; margin-bottom:7mm;
    direction:ltr; unicode-bidi:embed;
    width:180mm; padding:0 4mm;
}}
.cover-fa {{
    font-family:'NA',sans-serif; font-size:11pt; font-weight:bold; color:{CLR_GOLD};
    text-align:center; line-height:1.8;
    direction:rtl; unicode-bidi:embed; margin-bottom:9mm;
    width:180mm; padding:0 4mm;
}}
.subset-box {{
    width:170mm;
    border-top:0.5pt solid #2A4A7A;
    padding-top:5mm; margin-top:2mm;
    direction:rtl;
}}
.subset-label {{
    font-family:'NA',sans-serif; font-size:7pt; color:#6FA3D4;
    text-align:center; letter-spacing:1px; margin-bottom:3mm;
    direction:rtl; unicode-bidi:embed;
}}
.subset-chips {{
    display:flex; flex-wrap:wrap; gap:2mm; justify-content:center;
    direction:ltr;
}}
.chip {{
    font-family:'NS',sans-serif; font-size:7pt; color:{CLR_GOLD};
    background:rgba(212,175,55,0.10); border:0.5pt solid rgba(212,175,55,0.40);
    border-radius:1.5mm; padding:0.8mm 2.5mm;
    direction:ltr; unicode-bidi:embed;
}}

/* ── Slide pages ── */
.slide {{
    width:210mm; padding:14mm 18mm 14mm 18mm;
    page-break-after:always; background:{BG_PAGE};
    direction:rtl; unicode-bidi:embed;
}}
.hdr {{
    display:flex; justify-content:space-between; align-items:flex-start;
    border-bottom:1pt solid {CLR_RULE}; padding-bottom:2.5mm; margin-bottom:4mm;
    direction:rtl;
}}
.meta {{
    font-family:'NA',sans-serif; font-size:7pt; color:{CLR_META};
    direction:rtl; unicode-bidi:embed;
}}
.num  {{
    font-family:'NS',sans-serif; font-size:7.5pt; color:{CLR_ACCENT};
    font-weight:bold; direction:ltr; unicode-bidi:embed;
}}
.ttl  {{
    font-family:'NA',sans-serif; font-size:13pt; font-weight:bold;
    color:{CLR_TITLE}; line-height:1.45; margin-bottom:4mm;
    text-align:right; direction:rtl; unicode-bidi:embed;
}}
.img-wrap {{ text-align:center; margin-bottom:5mm; }}
.img-wrap img {{ max-width:170mm; max-height:72mm; object-fit:contain; }}
.sec {{
    font-family:'NA',sans-serif; font-size:6.5pt; font-weight:bold;
    color:{CLR_ACCENT}; border-bottom:0.5pt solid {CLR_RULE};
    padding-bottom:0.5mm; margin-top:3.5mm; margin-bottom:1.5mm;
    text-align:right; direction:rtl;
}}
.narr {{
    font-family:'NA',sans-serif; font-size:8.5pt; color:{CLR_BODY};
    line-height:1.7; text-align:right; direction:rtl; unicode-bidi:embed;
}}
.strat {{
    font-family:'NA',sans-serif; font-size:8pt; color:{CLR_STRAT};
    line-height:1.6; font-style:italic; text-align:right;
    direction:rtl; unicode-bidi:embed;
}}
.kp {{ list-style:none; padding:0; margin:0; direction:rtl; }}
.kp li {{
    font-family:'NA',sans-serif; font-size:8pt; color:{CLR_BODY};
    line-height:1.6; padding-right:4mm; margin-bottom:1mm;
    position:relative; text-align:right; direction:rtl; unicode-bidi:embed;
}}
.kp li::before {{ content:"◂"; color:{CLR_ACCENT}; margin-left:2mm; font-size:7pt; }}
.tags {{
    margin-top:3mm; display:flex; flex-wrap:wrap; gap:1.5mm;
    justify-content:flex-end; direction:rtl;
}}
.tag {{
    font-family:'NA',sans-serif; font-size:6pt; color:{CLR_ACCENT};
    background:{CLR_TAG_BG}; border:0.5pt solid {CLR_TAG_BD};
    border-radius:1mm; padding:0.3mm 2mm;
    direction:rtl; unicode-bidi:embed;
}}
.act {{
    font-family:'NA',sans-serif; font-size:6.5pt; color:{CLR_META};
    font-style:italic; margin-top:0.5mm; text-align:right;
    direction:rtl; unicode-bidi:embed;
}}
"""

def cover_html(positions):
    fa_title = "درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU"
    subset_label = f"زیرمجموعه انتخابی — {len(positions)} اسلاید از {TOTAL_DECK}"
    chips = "".join(f'<span class="chip">{p}</span>' for p in positions)
    return f"""<div class="cover">
  <img class="cover-img" src="file://{COVER_IMAGE}" alt="Ghost EPU Vehicle"/>
  <div class="cover-en">Ghost Hydrogen Powered Autonomous Vehicle<br/>with Event Processing Unit microchip</div>
  <div class="cover-fa">{esc(fa_title)}</div>
  <div class="subset-box">
    <div class="subset-label">{esc(subset_label)}</div>
    <div class="subset-chips">{chips}</div>
  </div>
</div>"""

def slide_html(s, pos_in_425, page_num, total_pages):
    deck = s["deck"]; fa = s.get("fa",{}); en = s.get("en",{}); sid = s["id"]
    title = fa.get("title","") or en.get("title","")
    narr  = fa.get("narrative","") or en.get("narrative","")
    strat = fa.get("strategic","") or en.get("strategic","")
    kp    = fa.get("keyPoints",[]) or en.get("keyPoints",[])
    tags  = fa.get("tags",[]) or en.get("tags",[])
    act   = s.get("actLabel",{}).get("fa","") or s.get("actLabel",{}).get("en","")
    img   = local_img(s.get("imageUrl",""))

    img_html = f'<div class="img-wrap"><img src="{img}" alt="{esc(title)}"/></div>' if img else ""
    act_html = f'<div class="act">{esc(act)}</div>' if act else ""

    body = []
    if narr:  body += ['<div class="sec">روایت</div>', f'<div class="narr">{esc(narr)}</div>']
    if strat: body += ['<div class="sec">زمینه راهبردی</div>', f'<div class="strat">{esc(strat)}</div>']
    if kp:
        items = "".join(f'<li>{esc(k)}</li>' for k in kp)
        body += ['<div class="sec">نکات کلیدی</div>', f'<ul class="kp">{items}</ul>']
    if tags:
        t = "".join(f'<span class="tag">{esc(t)}</span>' for t in tags)
        body.append(f'<div class="tags">{t}</div>')

    meta_txt = f"دسته {deck} · اسلاید {sid} · شماره {pos_in_425} از {TOTAL_DECK}"
    num_txt  = f"{page_num} / {total_pages}"

    return f"""<div class="slide">
  <div class="hdr">
    <div class="meta">{esc(meta_txt)}</div>
    <div class="num">{num_txt}</div>
  </div>
  <div class="ttl">{esc(title)}</div>
  {img_html}
  {act_html}
  {"".join(body)}
</div>"""

def render(html_str, out):
    fc = FontConfiguration()
    HTML(string=html_str, base_url="/").write_pdf(out, font_config=fc)

def wrap(body):
    return (
        '<!DOCTYPE html>'
        '<html lang="fa" dir="rtl">'
        '<head><meta charset="UTF-8"/>'
        f'<style>{CSS}</style>'
        '</head>'
        f'<body>{body}</body>'
        '</html>'
    )

def main():
    with open(SLIDES_JSON) as f:
        all_slides = json.load(f)

    pos_map = {pos: s for pos, s in enumerate(all_slides, 1)}
    subset_slides = [(p, pos_map[p]) for p in SUBSET_POSITIONS if p in pos_map]
    total_pages = 1 + len(subset_slides)

    print(f"Generating dark-navy subset PDF: {len(subset_slides)} slides")

    pages = [cover_html(SUBSET_POSITIONS)]
    for page_num, (pos, s) in enumerate(subset_slides, 2):
        pages.append(slide_html(s, pos, page_num, total_pages))
        print(f"  Slide {pos} (page {page_num}/{total_pages}): {s.get('en',{}).get('title','')[:55]}")

    html = wrap("".join(pages))
    print("Rendering PDF...")
    render(html, OUTPUT_PDF)
    size_mb = os.path.getsize(OUTPUT_PDF) / (1024*1024)
    print(f"Done: {OUTPUT_PDF}  ({size_mb:.1f} MB)")

if __name__ == "__main__":
    main()
