#!/usr/bin/env python3
"""English-only PDF generator — dark navy edition.
- Dark navy background on ALL slide pages (#0A1628)
- Deck dividers: #0D1B2A
- Cover: #080818
- LTR layout, formula rendering with monospace spans
"""

import json, os, re, subprocess
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

SLIDES_JSON = "/tmp/all_slides_data.json"
COVER_IMAGE = "/tmp/cover_image.png"
IMG_DIR     = "/tmp/slide_images"
OUTPUT_DIR  = "/tmp/en_dark_pdfs"
OUTPUT_PDF  = "/tmp/epu_strategy_en_dark.pdf"

NOTO_REG  = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"

os.makedirs(OUTPUT_DIR, exist_ok=True)

# Dark navy palette
BG_PAGE    = "#0A1628"
BG_DIV     = "#0D1B2A"
BG_COVER   = "#080818"
CLR_TITLE  = "#E8F0FF"
CLR_BODY   = "#C8D8F0"
CLR_ACCENT = "#4A90D9"
CLR_META   = "#6A8AAA"
CLR_STRAT  = "#A0B8D8"
CLR_RULE   = "#1E3A5A"
CLR_TAG_BG = "#0D2040"
CLR_TAG_BD = "#1E3A5A"
CLR_MATH   = "#D4E8FF"
CLR_MATH_BG= "#0A1E38"

def esc(t):
    return (t or "").replace("&","&amp;").replace("<","&lt;").replace(">","&gt;").replace('"',"&quot;")

def fmt(text):
    """HTML-escape and render inline/display math with monospace spans."""
    if not text: return ""
    parts = re.split(r'(\$\$.*?\$\$|\$[^$\n]+?\$)', text, flags=re.DOTALL)
    out = []
    for p in parts:
        if p.startswith('$$') and p.endswith('$$') and len(p)>4:
            out.append(f'<span class="math-display">{esc(p[2:-2])}</span>')
        elif p.startswith('$') and p.endswith('$') and len(p)>2:
            out.append(f'<span class="math-inline">{esc(p[1:-1])}</span>')
        else:
            out.append(esc(p))
    return "".join(out)

def local_img(url):
    if not url: return ""
    fname = url.split("/")[-1]
    local = f"{IMG_DIR}/{fname}"
    return f"file://{local}" if os.path.exists(local) else ""

def deck_name(d):
    return {"EPU":"EPU Vision — From Sensor to Decision on Physics",
            "A":"Deck A — Language, Semantics & Formal Foundations",
            "B":"Deck B — Temporal State Management & Tense Grammar",
            "C":"Deck C — Ghost EPU Chip Architecture & Business Strategy",
            "D":"Deck D — EPU Multi-Agent System (EPU-MAS)",
            "E":"Deck E — Hydrogen Autonomy & Propulsion Systems",
            "F":"Deck F — Founder Biography",
            "G":"Deck G — Ghost Platform Overview",
            "TOC":"Table of Contents"}.get(d, f"Deck {d}")

CSS = f"""
@font-face {{ font-family:'NS'; src:url('file://{NOTO_REG}'); font-weight:normal; }}
@font-face {{ font-family:'NS'; src:url('file://{NOTO_BOLD}'); font-weight:bold; }}
* {{ box-sizing:border-box; margin:0; padding:0; }}
@page {{
    size:A4; margin:0;
    @bottom-right {{
        content:counter(page)" of "counter(pages);
        font-family:'NS',sans-serif; font-size:7.5pt; color:{CLR_META};
        margin-right:18mm; margin-bottom:7mm;
    }}
    @bottom-left {{
        content:string(deck-name);
        font-family:'NS',sans-serif; font-size:7.5pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm;
    }}
}}
body {{
    font-family:'NS',sans-serif; font-size:10pt;
    color:{CLR_BODY}; background:{BG_PAGE};
}}

/* ── Cover ── */
.cover {{
    width:210mm; height:297mm; background:{BG_COVER};
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    page-break-after:always; padding:0 12mm;
}}
.cover img {{ width:186mm; max-height:130mm; object-fit:contain; margin-bottom:18mm; }}
.cover-en {{
    font-size:15pt; font-weight:bold; color:#FFFFFF;
    text-align:center; line-height:1.45;
}}

/* ── Deck dividers ── */
.div-page {{
    width:210mm; height:297mm; background:{BG_DIV};
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    page-break-after:always; padding:0 20mm;
    string-set:deck-name attr(data-deck);
}}
.div-lbl {{
    font-size:10pt; color:{CLR_ACCENT};
    letter-spacing:5px; text-transform:uppercase; margin-bottom:8mm;
}}
.div-acc {{ width:40mm; height:2px; background:{CLR_ACCENT}; margin:5mm auto; }}
.div-ttl {{
    font-size:20pt; font-weight:bold; color:{CLR_TITLE};
    text-align:center; line-height:1.4;
}}
.div-cnt {{ font-size:9pt; color:{CLR_ACCENT}; margin-top:5mm; }}

/* ── Slide pages ── */
.slide {{
    width:210mm; min-height:297mm; padding:12mm 18mm 16mm 18mm;
    page-break-after:always; background:{BG_PAGE};
    string-set:deck-name attr(data-deck);
}}
.hdr {{
    display:flex; justify-content:space-between; align-items:flex-start;
    border-bottom:1.5pt solid {CLR_RULE}; padding-bottom:2.5mm; margin-bottom:4mm;
}}
.meta {{
    font-size:7pt; color:{CLR_META};
    letter-spacing:1.5px; text-transform:uppercase;
}}
.num  {{ font-size:7.5pt; color:{CLR_ACCENT}; font-weight:bold; }}
.ttl  {{
    font-size:13pt; font-weight:bold; color:{CLR_TITLE};
    line-height:1.35; margin-bottom:4mm;
}}
.img-wrap {{ text-align:center; margin-bottom:5mm; }}
.img-wrap img {{ max-width:170mm; max-height:72mm; object-fit:contain; }}
.sec {{
    font-size:6.5pt; font-weight:bold; color:{CLR_ACCENT};
    letter-spacing:2px; text-transform:uppercase;
    border-bottom:0.5pt solid {CLR_RULE};
    padding-bottom:0.5mm; margin-top:3.5mm; margin-bottom:1.5mm;
}}
.narr {{
    font-size:8.5pt; color:{CLR_BODY};
    line-height:1.6; text-align:justify;
}}
.strat {{
    font-size:8pt; color:{CLR_STRAT};
    line-height:1.55; font-style:italic; text-align:justify;
}}
.kp {{ list-style:none; padding:0; margin:0; }}
.kp li {{
    font-size:8pt; color:{CLR_BODY};
    line-height:1.5; padding-left:4mm; margin-bottom:1mm; position:relative;
}}
.kp li::before {{ content:"▸"; color:{CLR_ACCENT}; position:absolute; left:0; font-size:7pt; }}
.tags {{ margin-top:3mm; display:flex; flex-wrap:wrap; gap:1.5mm; }}
.tag {{
    font-size:6pt; color:{CLR_ACCENT};
    background:{CLR_TAG_BG}; border:0.5pt solid {CLR_TAG_BD};
    border-radius:1mm; padding:0.3mm 2mm;
}}
.math-inline {{
    font-family:monospace; font-size:7.5pt; color:{CLR_MATH};
    background:{CLR_MATH_BG}; padding:0 0.8mm; border-radius:0.5mm;
}}
.math-display {{
    display:block; font-family:monospace; font-size:8pt; color:{CLR_MATH};
    background:{CLR_MATH_BG}; padding:1.5mm 2.5mm; border-radius:1mm;
    text-align:center; margin:1.5mm 0; border-left:2pt solid {CLR_ACCENT};
}}
.act {{ font-size:6.5pt; color:{CLR_META}; font-style:italic; margin-top:0.5mm; }}
"""

def cover_html():
    return (f'<div class="cover">'
            f'<img src="file://{COVER_IMAGE}" alt="Ghost EPU Vehicle"/>'
            f'<div class="cover-en">Ghost Hydrogen Powered Autonomous Vehicle<br/>with Event Processing Unit microchip</div>'
            f'</div>')

def divider(deck, count):
    return (f'<div class="div-page" data-deck="Deck {deck}">'
            f'<div class="div-lbl">Deck {deck}</div>'
            f'<div class="div-acc"></div>'
            f'<div class="div-ttl">{esc(deck_name(deck))}</div>'
            f'<div class="div-acc"></div>'
            f'<div class="div-cnt">{count} slides</div>'
            f'</div>')

def slide_html(s, num, total):
    deck = s["deck"]; en = s.get("en",{}); sid = s["id"]
    title = en.get("title","")
    narr  = en.get("narrative","")
    strat = en.get("strategic","")
    kp    = en.get("keyPoints",[])
    tags  = en.get("tags",[])
    act   = s.get("actLabel",{}).get("en","")
    img   = local_img(s.get("imageUrl",""))

    img_html = f'<div class="img-wrap"><img src="{img}" alt="{esc(title)}"/></div>' if img else ""
    act_html = f'<div class="act">{esc(act)}</div>' if act else ""

    body = []
    if narr:  body += ['<div class="sec">Narrative</div>', f'<div class="narr">{fmt(narr)}</div>']
    if strat: body += ['<div class="sec">Strategic Context</div>', f'<div class="strat">{fmt(strat)}</div>']
    if kp:
        items = "".join(f'<li>{fmt(k)}</li>' for k in kp)
        body += ['<div class="sec">Key Points</div>', f'<ul class="kp">{items}</ul>']
    if tags:
        t = "".join(f'<span class="tag">{esc(t)}</span>' for t in tags)
        body.append(f'<div class="tags">{t}</div>')

    return (f'<div class="slide" data-deck="Deck {deck}">'
            f'<div class="hdr">'
            f'<div><div class="meta">Deck {deck} · Slide {sid}</div>{act_html}</div>'
            f'<div class="num">{num} / {total}</div>'
            f'</div>'
            f'<div class="ttl">{fmt(title)}</div>'
            f'{img_html}'
            f'{"".join(body)}'
            f'</div>')

def render(html_str, out):
    fc = FontConfiguration()
    HTML(string=html_str, base_url="/").write_pdf(out, font_config=fc)

def wrap(body):
    return (f'<!DOCTYPE html>'
            f'<html lang="en">'
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
    print(f"\n✓ Full English dark PDF: {OUTPUT_PDF}  ({size_mb:.1f}MB)")

if __name__ == "__main__":
    main()
