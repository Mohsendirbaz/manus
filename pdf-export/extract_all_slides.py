#!/usr/bin/env python3
"""
Extract ALL slide content from all deck TypeScript files into a structured JSON.
Captures: id, deck, title (en+fa), narrative (en+fa), strategic (en+fa),
keyPoints (en+fa), tags (en+fa), imageUrl, act, actLabel (en+fa).
"""

import re, json
from pathlib import Path

DATA_DIR = Path("/home/ubuntu/epu-strategy-site/client/src/data")
CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K"

def parse_img_urls(text: str) -> dict:
    cdn_val = CDN_BASE
    cdn_m = re.search(r'const CDN(?:_\w+)?\s*=\s*"([^"]+)"', text)
    if cdn_m:
        cdn_val = cdn_m.group(1)
    block_m = re.search(r'const IMG_URLS(?:_\w+)?\s*[=:][^{]*\{(.*?)\};', text, re.DOTALL)
    if not block_m:
        return {}, cdn_val
    block = block_m.group(1)
    urls = {}
    for m in re.finditer(r'(\d+)\s*:\s*[`"]([^`"]*)[`"]', block):
        n = int(m.group(1))
        raw = m.group(2)
        raw = re.sub(r'\$\{CDN(?:_\w+)?\}', cdn_val, raw)
        urls[n] = raw
    return urls, cdn_val

def extract_string_list(text: str, key: str) -> list:
    m = re.search(rf'{key}\s*:\s*\[(.*?)\]', text, re.DOTALL)
    if not m:
        return []
    return re.findall(r'"([^"]*)"', m.group(1))

def extract_string(text: str, key: str) -> str:
    # Try double-quoted
    m = re.search(rf'{key}\s*:\s*"((?:[^"\\]|\\.)*)"', text, re.DOTALL)
    if m:
        return m.group(1).replace('\\"', '"').replace('\\n', '\n')
    # Try template literal
    m = re.search(rf'{key}\s*:\s*`((?:[^`\\]|\\.)*)`', text, re.DOTALL)
    if m:
        return m.group(1)
    return ""

def extract_lang_block(chunk: str, lang: str) -> dict:
    """Extract a language block (en: {...} or fa: {...}) from a slide chunk."""
    # Find the lang block
    pattern = rf'\b{lang}\s*:\s*\{{(.*?)(?=\n\s{{2,6}}(?:en|fa)\s*:|(?=\n\s{{0,4}}\}})\s*(?:,|\n))'
    m = re.search(pattern, chunk, re.DOTALL)
    if not m:
        # Fallback: try to find the block more loosely
        m = re.search(rf'\b{lang}\s*:\s*\{{(.*)', chunk, re.DOTALL)
        if not m:
            return {}
        block = m.group(1)
        # Find closing brace at same nesting level
        depth = 1
        end = 0
        for i, c in enumerate(block):
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            if depth == 0:
                end = i
                break
        block = block[:end]
    else:
        block = m.group(1)
    
    return {
        "title": extract_string(block, "title"),
        "narrative": extract_string(block, "narrative"),
        "strategic": extract_string(block, "strategic"),
        "keyPoints": extract_string_list(block, "keyPoints"),
        "tags": extract_string_list(block, "tags"),
    }

def audit_file(filename: str, deck_label: str) -> list:
    path = DATA_DIR / filename
    if not path.exists():
        return []
    text = path.read_text()
    img_urls, cdn_val = parse_img_urls(text)
    
    results = []
    id_positions = [(m.start(), int(m.group(1))) for m in re.finditer(r'\bid:\s*(\d+)\s*,', text)]
    
    for i, (pos, slide_id) in enumerate(id_positions):
        end_pos = id_positions[i+1][0] if i+1 < len(id_positions) else len(text)
        chunk = text[pos:end_pos]
        
        # Extract act
        act_m = re.search(r'act\s*:\s*"([^"]+)"', chunk)
        act = act_m.group(1) if act_m else ""
        
        # Extract actLabel
        act_label_en = ""
        act_label_fa = ""
        al_m = re.search(r'actLabel\s*:\s*\{([^}]+)\}', chunk)
        if al_m:
            al_block = al_m.group(1)
            en_m = re.search(r'en\s*:\s*"([^"]+)"', al_block)
            fa_m = re.search(r'fa\s*:\s*"([^"]+)"', al_block)
            act_label_en = en_m.group(1) if en_m else ""
            act_label_fa = fa_m.group(1) if fa_m else ""
        
        # Resolve imageUrl
        img_call_m = re.search(r'imageUrl\s*:\s*\w+\s*\((\d+)\)', chunk)
        if img_call_m:
            img_idx = int(img_call_m.group(1))
            image_url = img_urls.get(img_idx, "")
        else:
            img_direct_m = re.search(r'imageUrl\s*:\s*[`"]([^`"]+)[`"]', chunk)
            if img_direct_m:
                raw = img_direct_m.group(1)
                raw = re.sub(r'\$\{CDN(?:_\w+)?\}', cdn_val, raw)
                image_url = raw
            else:
                image_url = img_urls.get(slide_id, "")
        
        # Extract en and fa blocks
        en = extract_lang_block(chunk, "en")
        fa = extract_lang_block(chunk, "fa")
        
        # Fallback: if en block failed, try top-level fields
        if not en.get("title"):
            en["title"] = extract_string(chunk, "title")
            en["keyPoints"] = extract_string_list(chunk, "keyPoints")
            en["tags"] = extract_string_list(chunk, "tags")
        
        results.append({
            "deck": deck_label,
            "id": slide_id,
            "act": act,
            "actLabel": {"en": act_label_en, "fa": act_label_fa},
            "imageUrl": image_url,
            "en": en,
            "fa": fa,
        })
    
    return results

DECKS = [
    ("slides60.ts",  "EPU"),
    ("slidesA.ts",   "A"),
    ("slidesB.ts",   "B"),
    ("slidesC.ts",   "C"),
    ("slidesD.ts",   "D"),
    ("slidesE.ts",   "E"),
    ("slidesBio.ts", "F"),
    ("slidesG.ts",   "G"),
    ("slidesTOC.ts", "TOC"),
]

all_slides = []
for fname, label in DECKS:
    slides = audit_file(fname, label)
    all_slides.extend(slides)
    print(f"  Deck {label:4s}: {len(slides):3d} slides extracted")

print(f"\nTotal: {len(all_slides)} slides")

# Verify no empty titles
empty_titles = [s for s in all_slides if not s["en"].get("title")]
print(f"Empty en.title: {len(empty_titles)}")
if empty_titles[:5]:
    for s in empty_titles[:5]:
        print(f"  Deck {s['deck']} #{s['id']}")

with open("/tmp/all_slides_data.json", "w", encoding="utf-8") as f:
    json.dump(all_slides, f, ensure_ascii=False, indent=2)
print("Saved to /tmp/all_slides_data.json")
