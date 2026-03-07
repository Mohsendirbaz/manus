#!/usr/bin/env python3
"""
Full Farsi PDF generator — dark navy edition.
Governed by: PDF_DESIGN_DIRECTIVES.md (read before modifying)

Design summary:
  Page hierarchy:  Cover → Document Overview → Deck Divider → Slide Pages
  Background:      Slide pages #0A1628 | Dividers #0D1B2A | Cover #080818
  Directionality:  RTL via WeasyPrint native BiDi — NO get_display/reshape
  Page sizing:     Slide pages auto-height (no min-height) — prevents dead space
  Margins:         18mm lateral minimum on all content pages
  Flex+RTL fix:    All flex children inside padded containers carry width:100%
  Fonts:           Noto Sans Arabic (FA text) + Noto Sans (numerals/EN)
  Page numbering:  N از T format, continuous across all decks
"""

import json, os, subprocess
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

SLIDES_JSON = "/tmp/all_slides_data.json"
COVER_IMAGE = "/tmp/cover_image.png"
IMG_DIR     = "/tmp/slide_images"
OUTPUT_DIR  = "/tmp/fa_dark_pdfs"
OUTPUT_PDF  = "/tmp/epu_strategy_fa_dark.pdf"

NOTO_REG   = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD  = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
NOTO_AR_R  = "/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf"
NOTO_AR_B  = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Dark navy palette
BG_PAGE    = "#0A1628"
BG_DIV     = "#0D1B2A"
BG_COVER   = "#080818"
CLR_TITLE  = "#E8F0FF"
CLR_BODY   = "#C8D8F0"
CLR_ACCENT = "#4A90D9"
CLR_GOLD   = "#D4AF37"
CLR_META   = "#6A8AAA"
CLR_STRAT  = "#A0B8D8"
CLR_RULE   = "#1E3A5A"
CLR_TAG_BG = "#0D2040"
CLR_TAG_BD = "#1E3A5A"

def esc(t):
    """HTML-escape only. WeasyPrint handles BiDi natively."""
    return (t or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

def local_img(url):
    if not url: return ""
    fname = url.split("/")[-1]
    local = f"{IMG_DIR}/{fname}"
    return f"file://{local}" if os.path.exists(local) else ""

def deck_name_fa(d):
    return {"EPU":"دیدگاه EPU — از حسگر تا تصمیم بر پایه فیزیک",
            "A":"دسته A — زبان، معناشناسی و پایه‌های صوری",
            "B":"دسته B — مدیریت حالت زمانی و دستور زمان",
            "C":"دسته C — معماری تراشه Ghost EPU و راهبرد کسب‌وکار",
            "D":"دسته D — سیستم چندعاملی EPU (EPU-MAS)",
            "E":"دسته E — خودمختاری هیدروژنی و سیستم‌های پیشرانش",
            "F":"دسته F — بیوگرافی بنیان‌گذار",
            "G":"دسته G — مروری بر پلتفرم Ghost",
            "TOC":"فهرست مطالب"}.get(d, f"دسته {d}")

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
        font-family:'NA',sans-serif; font-size:7.5pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm; direction:rtl;
    }}
    @bottom-right {{
        content:string(deck-name);
        font-family:'NA',sans-serif; font-size:7.5pt; color:{CLR_META};
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
    page-break-after:always; padding:0 12mm;
}}
.cover img {{ width:186mm; max-height:130mm; object-fit:contain; margin-bottom:18mm; }}
.cover-en {{
    font-family:'NS',sans-serif; font-size:13pt; font-weight:bold; color:#FFFFFF;
    text-align:center; line-height:1.45; margin-bottom:10mm;
    direction:ltr; unicode-bidi:embed;
}}
.cover-fa {{
    font-family:'NA',sans-serif; font-size:13pt; font-weight:bold; color:{CLR_GOLD};
    text-align:center; line-height:1.7;
    direction:rtl; unicode-bidi:embed;
}}

/* ── Deck dividers ── */
.div-page {{
    width:210mm; height:297mm; background:{BG_DIV};
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    page-break-after:always; padding:0 20mm;
    string-set:deck-name attr(data-deck); direction:rtl;
}}
.div-lbl {{
    font-family:'NA',sans-serif; font-size:10pt; color:{CLR_ACCENT};
    letter-spacing:2px; margin-bottom:8mm;
    direction:rtl; unicode-bidi:embed;
}}
.div-acc {{ width:40mm; height:2px; background:{CLR_ACCENT}; margin:5mm auto; }}
.div-ttl {{
    font-family:'NA',sans-serif; font-size:18pt; font-weight:bold; color:{CLR_TITLE};
    text-align:center; line-height:1.5;
    direction:rtl; unicode-bidi:embed;
}}
.div-cnt {{
    font-family:'NA',sans-serif; font-size:9pt; color:{CLR_ACCENT};
    margin-top:5mm; direction:rtl; unicode-bidi:embed;
}}

/* ── Slide pages ── */
.slide {{
    width:210mm; min-height:297mm; padding:12mm 18mm 16mm 18mm;
    page-break-after:always; background:{BG_PAGE};
    string-set:deck-name attr(data-deck);
    direction:rtl; unicode-bidi:embed;
}}
.hdr {{
    display:flex; justify-content:space-between; align-items:flex-start;
    border-bottom:1.5pt solid {CLR_RULE}; padding-bottom:2.5mm; margin-bottom:4mm;
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

def cover_html():
    fa_title = "درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU"
    return (f'<div class="cover">'
            f'<img src="file://{COVER_IMAGE}" alt="Ghost EPU Vehicle"/>'
            f'<div class="cover-en">Ghost Hydrogen Powered Autonomous Vehicle<br/>with Event Processing Unit microchip</div>'
            f'<div class="cover-fa">{esc(fa_title)}</div>'
            f'</div>')

def divider(deck, count):
    fa_name  = deck_name_fa(deck)
    fa_count = f"{count} اسلاید"
    return (f'<div class="div-page" data-deck="{esc(deck_name_fa(deck))}">'
            f'<div class="div-lbl">دسته {deck}</div>'
            f'<div class="div-acc"></div>'
            f'<div class="div-ttl">{esc(fa_name)}</div>'
            f'<div class="div-acc"></div>'
            f'<div class="div-cnt">{esc(fa_count)}</div>'
            f'</div>')

def slide_html(s, num, total):
    deck = s["deck"]; fa = s.get("fa",{}); en = s.get("en",{}); sid = s["id"]
    title = fa.get("title","") or en.get("title","")
    narr  = fa.get("narrative","") or en.get("narrative","")
    strat = fa.get("strategic","") or en.get("strategic","")
    kp    = fa.get("keyPoints",[]) or en.get("keyPoints",[])
    tags  = fa.get("tags",[]) or en.get("tags",[])
    act_fa = s.get("actLabel",{}).get("fa","") or s.get("actLabel",{}).get("en","")
    img = local_img(s.get("imageUrl",""))

    img_html = f'<div class="img-wrap"><img src="{img}" alt="{esc(title)}"/></div>' if img else ""
    act_html = f'<div class="act">{esc(act_fa)}</div>' if act_fa else ""

    body = []
    if narr:  body += ['<div class="sec">روایت</div>', f'<div class="narr">{esc(narr)}</div>']
    if strat: body += ['<div class="sec">زمینه راهبردی</div>', f'<div class="strat">{esc(strat)}</div>']
    if kp:
        items = "".join(f'<li>{esc(k)}</li>' for k in kp)
        body += ['<div class="sec">نکات کلیدی</div>', f'<ul class="kp">{items}</ul>']
    if tags:
        t = "".join(f'<span class="tag">{esc(t)}</span>' for t in tags)
        body.append(f'<div class="tags">{t}</div>')

    meta_txt = f"دسته {deck} · اسلاید {sid}"
    num_txt  = f"{num} / {total}"

    return (f'<div class="slide" data-deck="{esc(deck_name_fa(deck))}">'
            f'<div class="hdr">'
            f'<div class="meta">{esc(meta_txt)}</div>'
            f'<div class="num">{num_txt}</div>'
            f'</div>'
            f'<div class="ttl">{esc(title)}</div>'
            f'{img_html}'
            f'{act_html}'
            f'{"".join(body)}'
            f'</div>')

def render(html_str, out):
    fc = FontConfiguration()
    HTML(string=html_str, base_url="/").write_pdf(out, font_config=fc)

def wrap(body):
    return (f'<!DOCTYPE html>'
            f'<html lang="fa" dir="rtl">'
            f'<head><meta charset="UTF-8"/>'
            f'<style>{CSS}</style>'
            f'</head>'
            f'<body>{body}</body>'
            f'</html>')

def main():
    with open(SLIDES_JSON) as f: slides = json.load(f)
    total = len(slides)

    seen = []
    for s in slides:
        if s["deck"] not in seen: seen.append(s["deck"])

    parts = []

    # Cover
    cp = f"{OUTPUT_DIR}/00_cover.pdf"
    if not os.path.exists(cp):
        print("Rendering cover...")
        render(wrap(cover_html()), cp)
        print(f"  Cover: {os.path.getsize(cp)//1024}KB")
    else:
        print("Cover: cached")
    parts.append(cp)

    # Decks
    snum = 0
    for i, deck in enumerate(seen):
        group = [s for s in slides if s["deck"]==deck]
        dp = f"{OUTPUT_DIR}/{i+1:02d}_deck_{deck}.pdf"
        if not os.path.exists(dp):
            print(f"Rendering Deck {deck} ({len(group)} slides)...")
            pages = [divider(deck, len(group))]
            for s in group:
                snum += 1
                pages.append(slide_html(s, snum, total))
            render(wrap("".join(pages)), dp)
            print(f"  Deck {deck}: {os.path.getsize(dp)//1024}KB")
        else:
            snum += len(group)
            print(f"Deck {deck}: cached ({os.path.getsize(dp)//1024}KB)")
        parts.append(dp)

    # Merge
    print(f"\nMerging {len(parts)} parts with pdfunite...")
    subprocess.run(["pdfunite"] + parts + [OUTPUT_PDF], check=True)
    size_mb = os.path.getsize(OUTPUT_PDF) / (1024*1024)
    print(f"\n✓ Full Farsi dark PDF: {OUTPUT_PDF}  ({size_mb:.1f}MB)")

if __name__ == "__main__":
    main()
