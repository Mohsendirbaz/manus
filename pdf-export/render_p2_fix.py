#!/usr/bin/env python3
"""
Renders ONLY the corrected page 2 (EPU deck divider) as a standalone PDF.
Fix: div-ttl gets width:100% + overflow-wrap:break-word so RTL text
     stays inside the padded flex container and does not clip the right edge.
"""

import os
from weasyprint import HTML
from weasyprint.text.fonts import FontConfiguration

NOTO_REG  = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
NOTO_BOLD = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
NOTO_AR_R = "/usr/share/fonts/truetype/noto/NotoSansArabic-Regular.ttf"
NOTO_AR_B = "/usr/share/fonts/truetype/noto/NotoSansArabic-Bold.ttf"

OUTPUT = "/tmp/epu_p2_corrected.pdf"

BG_DIV    = "#0D1B2A"
CLR_TITLE = "#E8F0FF"
CLR_ACCENT= "#4A90D9"
CLR_META  = "#6A8AAA"

CSS = f"""
@font-face {{ font-family:'NS'; src:url('file://{NOTO_REG}'); font-weight:normal; }}
@font-face {{ font-family:'NS'; src:url('file://{NOTO_BOLD}'); font-weight:bold; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_R}'); font-weight:normal; }}
@font-face {{ font-family:'NA'; src:url('file://{NOTO_AR_B}'); font-weight:bold; }}
* {{ box-sizing:border-box; margin:0; padding:0; }}
@page {{
    size:A4; margin:0;
    @bottom-left {{
        content:"2 از 446";
        font-family:'NA',sans-serif; font-size:7.5pt; color:{CLR_META};
        margin-left:18mm; margin-bottom:7mm; direction:rtl;
    }}
    @bottom-right {{
        content:"دیدگاه EPU — از حسگر تا تصمیم بر پایه فیزیک";
        font-family:'NA',sans-serif; font-size:7.5pt; color:{CLR_META};
        margin-right:18mm; margin-bottom:7mm; direction:rtl;
    }}
}}
html {{ direction:rtl; }}
body {{
    font-family:'NA',sans-serif;
    background:{BG_DIV};
    direction:rtl;
}}

/* ── Deck divider — CORRECTED ── */
.div-page {{
    width:210mm;
    height:297mm;
    background:{BG_DIV};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    /* 20mm padding on BOTH sides — this is what was being violated */
    padding:0 20mm;
    direction:rtl;
}}
.div-lbl {{
    font-family:'NA',sans-serif;
    font-size:10pt;
    color:{CLR_ACCENT};
    letter-spacing:2px;
    margin-bottom:8mm;
    direction:rtl;
    unicode-bidi:embed;
    /* FIX: constrain to container width */
    width:100%;
    text-align:center;
    overflow-wrap:break-word;
}}
.div-acc {{
    width:40mm;
    height:2px;
    background:{CLR_ACCENT};
    margin:5mm auto;
}}
.div-ttl {{
    font-family:'NA',sans-serif;
    font-size:18pt;
    font-weight:bold;
    color:{CLR_TITLE};
    line-height:1.5;
    direction:rtl;
    unicode-bidi:embed;
    /* FIX: these two lines are what was missing */
    width:100%;
    text-align:center;
    overflow-wrap:break-word;
    word-break:break-word;
}}
.div-cnt {{
    font-family:'NA',sans-serif;
    font-size:9pt;
    color:{CLR_ACCENT};
    margin-top:5mm;
    direction:rtl;
    unicode-bidi:embed;
    width:100%;
    text-align:center;
}}
"""

HTML_BODY = """
<div class="div-page">
  <div class="div-lbl">دسته EPU</div>
  <div class="div-acc"></div>
  <div class="div-ttl">دیدگاه EPU — از حسگر تا تصمیم بر پایه فیزیک</div>
  <div class="div-acc"></div>
  <div class="div-cnt">۶۰ اسلاید</div>
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
