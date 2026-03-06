// MVD: 2.00 | Source: GA_IMPL_2026_001 Complete Technical Documentation | Slides: 60 | Lang: EN+FA
// ─── Deck TOC · Table of Contents — Complete Coverage Map of Ghost Autonomy Documentation ──
// Part-prefixed IDs: TOC-P1 through TOC-P8 (8 Parts × 7-8 slides each = 60 slides)
// Labeling: TOC-P{part}-{seq} — distinct from the 1–360 sequential numbering of content decks.
// Each slide maps one chapter/section of the source document to its coverage level,
// primary slides in the portal, and the audience it serves.

export type ActTOC =
  | "PartI_Executive"
  | "PartII_Philosophy"
  | "PartIII_Strategic"
  | "PartIV_Technical"
  | "PartV_Architecture"
  | "PartVI_Financial"
  | "PartVII_Validation"
  | "PartVIII_Appendices";

export interface SlideTOCContent {
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
}

export interface SlideTOC {
  id: number;
  partId: string;   // e.g. "TOC-P1-1" — the human-readable Part-prefixed ID
  act: ActTOC;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: SlideTOCContent;
  fa: SlideTOCContent;
}

export const ACT_LABELS_TOC: Record<ActTOC, { en: string; fa: string }> = {
  PartI_Executive:      { en: "Part I · Executive & Strategic",    fa: "بخش اول · اجرایی و استراتژیک" },
  PartII_Philosophy:    { en: "Part II · Philosophy of Design",     fa: "بخش دوم · فلسفه طراحی" },
  PartIII_Strategic:    { en: "Part III · Strategic Assets",        fa: "بخش سوم · دارایی‌های استراتژیک" },
  PartIV_Technical:     { en: "Part IV · Technical Foundation",     fa: "بخش چهارم · مبانی فنی" },
  PartV_Architecture:   { en: "Part V · Architecture",              fa: "بخش پنجم · معماری" },
  PartVI_Financial:     { en: "Part VI · Financial",                fa: "بخش ششم · مالی" },
  PartVII_Validation:   { en: "Part VII · Validation & Results",    fa: "بخش هفتم · اعتبارسنجی" },
  PartVIII_Appendices:  { en: "Part VIII · Appendices",             fa: "بخش هشتم · پیوست‌ها" },
};

const CDN_TOC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";

// TOC images: specialized coverage-map and chapter-diagram graphics
// Generated as toc_p{part}_{seq}_{descriptor}.png
const IMG_URLS_TOC: Record<number, string> = {
  // Part I — Executive Overview (slides 1–7)
  1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_01_cover_exec_f002c8ec.png",
  2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_02_vision_goals_28a822a3.png",
  3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_03_market_analysis_5e9c8ed0.png",
  4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_04_product_roadmap_445119ef.png",
  5: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_05_competitive_0bd4a9f1.png",
  6: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_6_5863e66a.png",
  7: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p1_07_coverage_heatmap_441a21c1.png",
  // Part II — Design Philosophy (slides 8–12)
  9: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p2_01_cover_philosophy_6fab0b3d.png",
  10: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p2_02_pdc_motivation_3b60791f.png",
  11: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p2_03_system_model_7b2a12fd.png",
  12: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_12_fc96cdd8.png",
  13: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p2_05_abstraction_layers_9b3a489b.png",
  // Part III — Strategic Context (slides 13–15)
  17: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p3_01_cover_strategic_eb13c44d.png",
  18: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_18_3b0d0f38.png",
  19: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_19_e7209db2.png",
  // Part IV — Technical Foundation (slides 16–20)
  24: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p4_01_cover_technical_48db2cb4.png",
  25: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p4_02_physics_conservation_06421a4c.png",
  26: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p4_03_governing_equations_25fa667f.png",
  27: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p4_04_uncertainty_signal_ffa80a2f.png",
  28: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p4_05_coverage_heatmap_b8879157.png",
  // Part V — Architecture (slides 21–23, 31–40)
  31: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_deep_queen_bee_994b655b.png",
  32: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_04_memory_t0_2b27e2d7.png",
  33: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_01_cover_arch_91b65fcb.png",
  34: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_tea_lca_f2a01253.png",
  35: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_math_appendix_8846eb53.png",
  36: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_02_picapd_isa_e1921761.png",
  37: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_03_queen_bee_1fc1394d.png",
  38: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_05_coverage_heatmap_dbd6c391.png",
  39: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_04_memory_t0_2b27e2d7.png",
  40: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p5_05_coverage_heatmap_dbd6c391.png",
  // Part VI — Financial (slides 24–25, 41–46)
  41: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_01_cover_financial_8ae7f2f1.png",
  42: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_02_financial_coverage_ab1b9bef.png",
  43: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_tea_lca_f2a01253.png",
  44: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_02_financial_coverage_ab1b9bef.png",
  45: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_01_cover_financial_8ae7f2f1.png",
  46: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_02_financial_coverage_ab1b9bef.png",
  // Part VII — Validation (slides 26–27, 47–53)
  47: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_01_cover_validation_cf91825b.png",
  48: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_02_validation_coverage_8b042e01.png",
  49: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_02_validation_coverage_8b042e01.png",
  50: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_01_cover_validation_cf91825b.png",
  51: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_02_validation_coverage_8b042e01.png",
  52: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_01_cover_validation_cf91825b.png",
  53: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p7_02_validation_coverage_8b042e01.png",
  // Part VIII — Appendices (slides 28, 54–58)
  54: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_01_cover_appendices_26065012.png",
  55: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_math_appendix_8846eb53.png",
  56: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_01_cover_appendices_26065012.png",
  57: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_math_appendix_8846eb53.png",
  58: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p8_01_cover_appendices_26065012.png",
  // Global Summary (slides 29–30, 59–60)
  59: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_global_01_complete_summary_ad1f11be.png",
  60: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_global_02_nav_guide_3f7afc53.png",
  // Corrected images for mismatch fixes (audit 2026-03-06)
  61: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc22_picapd_isa_coverage-ghefMPChv4MknuAwCdeQef.png",
  62: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc23_queen_bee_bft_coverage-RWPdFeByinQNvvdSRgdgwW.png",
  63: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc33_validation_pyramid-5cKrZ9UbGmEtWmYJskxubP.png",
  64: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc34_appendices_overview-B2o853Fwa8VkjqkAaaQgkQ.png",
  // TOC-P6-3 Part VI Financial Models coverage map (audit fix 2026-03-06)
  65: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/toc_p6_3_financial_models-NkWktL3wSpM4Bz4nLD4tQi.png",
};

const imgTOC = (n: number) => IMG_URLS_TOC[n] || "";

export const slidesTOC: SlideTOC[] = [

  // ═══════════════════════════════════════════════════════════════════
  // PART I — EXECUTIVE & STRATEGIC (Chapters 1–7)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 1, partId: "TOC-P1-1",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(1),
    en: {
      title: "Part I: Executive & Strategic — Overview",
      narrative: "Part I of the Ghost Autonomy technical documentation spans Chapters 1 through 7, covering the complete executive and strategic layer of the EPU platform. This part establishes the three-pillar thesis — mathematical universality, computational efficiency at 89.7:1 compression, and physical validation through conservation-law enforcement — and maps each strategic claim to its slide coverage across the 360-slide portal.",
      strategic: "Coverage is predominantly Full or Substantial across all 7 chapters. The vision (§1.1), strategic goals (§1.2), competitive advantage (§4), and roadmap (§5) each receive dedicated slide treatment in Deck C and the EPU deck. Risk management (§7) is addressed across C-7, C-44, and EPU-29. Team (§6) is covered in Deck F (Founder Bio) and EPU translations.",
      keyPoints: [
        "Chapters 1–7 achieve Full or Substantial coverage in 13 of 15 subsections — the highest coverage density of any Part",
        "Vision §1.1 is the portal's opening thesis: C-1, C-5, and EPU-1–3 establish the three-pillar framework across two decks",
        "Strategic goals §1.2 (C-4) and roadmap §5 (C-8, C-64) together define the Phase 0–4 dependency graph with gating criteria",
        "Competitive advantage §4 spans C-3, C-48, C-62, and EPU-60 — the most cross-referenced section in the entire documentation",
        "Two subsections remain Partial: §2.3 (Trends) and §2.4 (Opportunities) — embedded in market slides rather than standalone"
      ],
      tags: ["executive", "strategic", "vision", "roadmap", "competitive-advantage", "Part-I"]
    },
    fa: {
      title: "بخش اول: اجرایی و استراتژیک — نمای کلی",
      narrative: "بخش اول مستندات فنی Ghost Autonomy فصل‌های ۱ تا ۷ را پوشش می‌دهد و لایه کامل اجرایی و استراتژیک پلتفرم EPU را بیان می‌کند. این بخش سه‌گانه اصلی را تثبیت می‌کند: جهانی بودن ریاضی، کارایی محاسباتی با نسبت فشرده‌سازی ۸۹.۷:۱، و اعتبارسنجی فیزیکی از طریق اجرای قوانین بقا در سخت‌افزار.",
      strategic: "پوشش در هر ۷ فصل عمدتاً کامل یا قابل‌توجه است. چشم‌انداز (§۱.۱)، اهداف استراتژیک (§۱.۲)، مزیت رقابتی (§۴) و نقشه راه (§۵) هر کدام در Deck C و EPU deck اسلایدهای اختصاصی دارند.",
      keyPoints: [
        "فصل‌های ۱ تا ۷ در ۱۳ از ۱۵ زیربخش پوشش کامل یا قابل‌توجه دارند — بالاترین تراکم پوشش در کل مستندات",
        "چشم‌انداز §۱.۱ تز افتتاحیه پورتال است: C-1، C-5 و EPU-1 تا EPU-3 چارچوب سه‌گانه را در دو دک تثبیت می‌کنند",
        "اهداف استراتژیک §۱.۲ (C-4) و نقشه راه §۵ (C-8، C-64) گراف وابستگی فاز ۰ تا ۴ را با معیارهای دروازه‌ای تعریف می‌کنند",
        "مزیت رقابتی §۴ در C-3، C-48، C-62 و EPU-60 گسترش یافته — پر ارجاع‌ترین بخش در کل مستندات",
        "دو زیربخش جزئی باقی مانده: §۲.۳ (روندها) و §۲.۴ (فرصت‌ها) — در اسلایدهای بازار تعبیه شده نه مستقل"
      ],
      tags: ["اجرایی", "استراتژیک", "چشم‌انداز", "نقشه‌راه", "مزیت‌رقابتی", "بخش-اول"]
    }
  },

  {
    id: 2, partId: "TOC-P1-2",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(2),
    en: {
      title: "§1: Vision & Technical Summary — Coverage Map",
      narrative: "Chapter 1 of the source document establishes the foundational thesis of Ghost Autonomy: that physics-grounded computation is categorically superior to probabilistic machine learning for safety-critical autonomous systems. The three sub-theses — mathematical universality (§1.1.1), computational efficiency (§1.1.2), and physical validation (§1.1.3) — each receive dedicated slide treatment and are cross-referenced throughout the portal.",
      strategic: "Primary coverage: C-1 (89.7:1 compression ratio, conservation-law enforcement), C-5 (value proposition: physics vs. probabilistic ML), EPU-1–3 (three-pillar opening), C-29 (PICAPD ISA: 47 opcodes, 512 registers, Coq proofs), C-30 (Queen Bee BFT architecture), D-28–44 (Byzantine fault tolerance deep treatment). All §1.4 sub-sections achieve Full coverage.",
      keyPoints: [
        "§1.1.1 Mathematical Universality: Full coverage in C-1, C-5, EPU-1–3 — the bilinear form as universal computational primitive",
        "§1.1.2 Computational Efficiency: Full coverage in C-1 (89.7:1 ratio), C-28 (moment compression), EPU-49 — quantified advantage",
        "§1.1.3 Physical Validation: Full coverage in C-1, C-25, EPU-31–32 — conservation laws enforced at hardware substrate level",
        "§1.4.1 PICAPD ISA: Full coverage in C-29, C-38 — 47 opcodes across 4 instruction classes, 127,000 lines of Coq proof",
        "§1.4.2–1.4.3 Queen Bee & BFT: Full coverage in C-30, D-28–44 — the most extensively documented architectural claim"
      ],
      tags: ["vision", "PICAPD", "BFT", "Queen-Bee", "89.7-compression", "Coq-proof", "TOC-P1"]
    },
    fa: {
      title: "§۱: چشم‌انداز و خلاصه فنی — نقشه پوشش",
      narrative: "فصل ۱ سند منبع تز بنیادین Ghost Autonomy را تثبیت می‌کند: محاسبات مبتنی بر فیزیک از نظر کیفی برتر از یادگیری ماشین احتمالاتی برای سیستم‌های خودمختار ایمنی‌بحرانی است. سه زیرتز — جهانی بودن ریاضی، کارایی محاسباتی، و اعتبارسنجی فیزیکی — هر کدام اسلایدهای اختصاصی دارند.",
      strategic: "پوشش اصلی: C-1 (نسبت فشرده‌سازی ۸۹.۷:۱)، C-5 (پیشنهاد ارزش)، EPU-1 تا EPU-3 (افتتاحیه سه‌گانه)، C-29 (معماری PICAPD ISA)، C-30 (معماری Queen Bee)، D-28 تا D-44 (تحمل خطای بیزانسی).",
      keyPoints: [
        "§۱.۱.۱ جهانی بودن ریاضی: پوشش کامل در C-1، C-5، EPU-1 تا EPU-3 — فرم دوخطی به‌عنوان اولیه محاسباتی جهانی",
        "§۱.۱.۲ کارایی محاسباتی: پوشش کامل در C-1 (نسبت ۸۹.۷:۱)، C-28 (فشرده‌سازی گشتاور)، EPU-49 — مزیت کمی‌شده",
        "§۱.۱.۳ اعتبارسنجی فیزیکی: پوشش کامل در C-1، C-25، EPU-31 تا EPU-32 — قوانین بقا در سطح سخت‌افزار اجرا می‌شوند",
        "§۱.۴.۱ معماری PICAPD ISA: پوشش کامل در C-29، C-38 — ۴۷ دستورالعمل در ۴ کلاس، ۱۲۷٬۰۰۰ خط اثبات Coq",
        "§۱.۴.۲ تا §۱.۴.۳ Queen Bee و BFT: پوشش کامل در C-30، D-28 تا D-44 — مستندترین ادعای معماری"
      ],
      tags: ["چشم‌انداز", "PICAPD", "BFT", "Queen-Bee", "فشرده‌سازی-۸۹.۷", "اثبات-Coq", "TOC-P1"]
    }
  },

  {
    id: 3, partId: "TOC-P1-3",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(3),
    en: {
      title: "§2: Market Analysis — Coverage Map",
      narrative: "Chapter 2 addresses the $2.1 trillion total addressable market for autonomous vehicle technology, with the AV segment projected at $469 billion by 2035. The competitive landscape analysis benchmarks Ghost EPU against NVIDIA Orin and Mobileye EyeQ6 across five performance dimensions. Market trends and opportunity subsections receive Partial coverage, embedded within broader market slides rather than receiving standalone treatment.",
      strategic: "Primary coverage: C-2 (market size, trends, opportunities — $2.1T TAM), C-3 (competitive landscape — head-to-head benchmarks), C-48 (five-dimension benchmark: latency, power, ASIL-D, BFT, determinism). §2.1 Market Size is Substantial (C-2, C-3). §2.2 Competitive Landscape is Full (C-3, C-48). §2.3 Trends and §2.4 Opportunities remain Partial.",
      keyPoints: [
        "§2.1 Market Size: Substantial coverage — $2.1T TAM, $469B AV segment by 2035 in C-2 and C-3",
        "§2.2 Competitive Landscape: Full coverage — NVIDIA Orin vs. Mobileye EyeQ6 vs. Ghost EPU across 5 dimensions in C-3 and C-48",
        "§2.3 Trends: Partial — market evolution narrative embedded in C-2 rather than a dedicated trend analysis slide",
        "§2.4 Opportunities: Partial — HPSA vertical integration as strategic opportunity referenced in C-2, C-17–18",
        "Gap: No standalone slide for regulatory trends (UNECE WP.29, FMVSS 150) — partially addressed in C-59 (regulatory roadmap)"
      ],
      tags: ["market-analysis", "TAM", "competitive-landscape", "NVIDIA-Orin", "Mobileye", "TOC-P1"]
    },
    fa: {
      title: "§۲: تحلیل بازار — نقشه پوشش",
      narrative: "فصل ۲ بازار قابل دسترس کل ۲.۱ تریلیون دلاری فناوری خودروی خودمختار را بررسی می‌کند، با پیش‌بینی ۴۶۹ میلیارد دلار برای بخش AV تا ۲۰۳۵. تحلیل چشم‌انداز رقابتی Ghost EPU را در برابر NVIDIA Orin و Mobileye EyeQ6 در پنج بعد عملکردی مقایسه می‌کند.",
      strategic: "پوشش اصلی: C-2 (اندازه بازار، روندها، فرصت‌ها)، C-3 (چشم‌انداز رقابتی)، C-48 (معیار پنج‌بعدی). §۲.۱ قابل‌توجه، §۲.۲ کامل، §۲.۳ و §۲.۴ جزئی.",
      keyPoints: [
        "§۲.۱ اندازه بازار: پوشش قابل‌توجه — TAM 2.1 تریلیون دلار، بخش AV 469 میلیارد دلار تا 2035 در C-2 و C-3",
        "§۲.۲ چشم‌انداز رقابتی: پوشش کامل — NVIDIA Orin در مقابل Mobileye EyeQ6 در مقابل Ghost EPU در ۵ بعد در C-3 و C-48",
        "§۲.۳ روندها: جزئی — روایت تکامل بازار در C-2 تعبیه شده نه اسلاید مستقل",
        "§۲.۴ فرصت‌ها: جزئی — یکپارچه‌سازی عمودی HPSA به‌عنوان فرصت استراتژیک در C-2، C-17 تا C-18 ذکر شده",
        "شکاف: اسلاید مستقل برای روندهای نظارتی (UNECE WP.29، FMVSS 150) وجود ندارد — جزئاً در C-59 پوشش داده شده"
      ],
      tags: ["تحلیل-بازار", "TAM", "چشم‌انداز-رقابتی", "NVIDIA-Orin", "Mobileye", "TOC-P1"]
    }
  },

  {
    id: 4, partId: "TOC-P1-4",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(4),
    en: {
      title: "§3–5: Product Strategy, Competitive Advantage & Roadmap — Coverage Map",
      narrative: "Chapters 3 through 5 form the strategic core of the executive section. Product strategy (§3) establishes the value proposition and three-phase commercialization plan. Competitive advantage (§4) is the most cross-referenced section in the entire documentation, spanning four slides across two decks. The roadmap (§5) provides the Phase 0–4 dependency graph with explicit gating criteria and decision trees.",
      strategic: "§3 Product Strategy: Substantial — C-5 (value proposition), C-8 (roadmap phases), EPU-30 (product architecture). §4 Competitive Advantage: Full — C-3, C-48, C-62, EPU-60 (benchmark + moat analysis + methodology thesis). §5 Roadmap: Full — C-8 (Phase 0–4 dependency graph), C-4 (four milestones 2026–2030), C-64 (phase-gate decision tree).",
      keyPoints: [
        "§4 Competitive Advantage is the most cross-referenced section: C-3 (market positioning), C-48 (benchmark), C-62 (moat analysis), EPU-60 (methodology thesis)",
        "§5 Roadmap Phase 0–4 dependency graph in C-8 is the single most important strategic slide for OEM partners",
        "Phase-gate decision tree in C-64 provides explicit go/no-go criteria for each phase transition — critical for investor due diligence",
        "§3 Product Strategy references three revenue streams: IP licensing (§30), royalties per unit (§30), and certification services (§30)",
        "Gap: §3 does not have a dedicated product architecture diagram — EPU-30 provides partial coverage but is not a standalone product strategy slide"
      ],
      tags: ["product-strategy", "competitive-advantage", "roadmap", "phase-gate", "IP-licensing", "TOC-P1"]
    },
    fa: {
      title: "§۳–۵: استراتژی محصول، مزیت رقابتی و نقشه راه — نقشه پوشش",
      narrative: "فصل‌های ۳ تا ۵ هسته استراتژیک بخش اجرایی را تشکیل می‌دهند. استراتژی محصول (§۳) پیشنهاد ارزش و برنامه تجاری‌سازی سه‌مرحله‌ای را تثبیت می‌کند. مزیت رقابتی (§۴) پر ارجاع‌ترین بخش در کل مستندات است. نقشه راه (§۵) گراف وابستگی فاز ۰ تا ۴ را با معیارهای دروازه‌ای صریح ارائه می‌دهد.",
      strategic: "§۳ استراتژی محصول: قابل‌توجه — C-5، C-8، EPU-30. §۴ مزیت رقابتی: کامل — C-3، C-48، C-62، EPU-60. §۵ نقشه راه: کامل — C-8، C-4، C-64.",
      keyPoints: [
        "§۴ مزیت رقابتی پر ارجاع‌ترین بخش است: C-3 (موقعیت‌یابی بازار)، C-48 (معیار)، C-62 (تحلیل خندق)، EPU-60 (تز روش‌شناسی)",
        "گراف وابستگی فاز ۰ تا ۴ در §۵ نقشه راه در C-8 مهم‌ترین اسلاید استراتژیک برای شرکای OEM است",
        "درخت تصمیم دروازه‌ای در C-64 معیارهای صریح رفتن/نرفتن برای هر انتقال فاز را فراهم می‌کند",
        "§۳ استراتژی محصول به سه جریان درآمدی اشاره می‌کند: مجوز IP، حق امتیاز به ازای هر واحد، و خدمات گواهینامه",
        "شکاف: §۳ نمودار معماری محصول مستقل ندارد — EPU-30 پوشش جزئی ارائه می‌دهد"
      ],
      tags: ["استراتژی-محصول", "مزیت-رقابتی", "نقشه-راه", "دروازه-فاز", "مجوز-IP", "TOC-P1"]
    }
  },

  {
    id: 5, partId: "TOC-P1-5",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(5),
    en: {
      title: "§6–7: Team & Risk Management — Coverage Map",
      narrative: "Chapter 6 covers the Ghost Autonomy team architecture, with Deck F (6 slides of Founder Bio) providing cinematic treatment of Dr. Mohsen Dirbaz's scientific provenance from IIT dissertation to US incorporation. Chapter 7 addresses risk management across four categories — technical, regulatory, geopolitical, and financial — with mitigations mapped in C-7, C-44, and EPU-29.",
      strategic: "§6 Team: Substantial — F-1–6 (Founder Bio deck: IIT provenance, Sharif University ties, imec collaboration, US incorporation), EPU translations ('Team Architecture' section). §7 Risk Management: Full — C-7 (four risk categories), C-44 (risk register with mitigations), EPU-29 (risk framing in EPU deck).",
      keyPoints: [
        "§6 Team receives Substantial coverage through Deck F's 6 cinematic slides — scientific provenance is the primary differentiator narrative",
        "The IIT dissertation (200 biomass gasification cases, 20 feedstocks) is the founding scientific credential — covered in F-1–3 and C-6",
        "§7 Risk Management achieves Full coverage: C-7 identifies four risk categories, C-44 provides the risk register with explicit mitigations",
        "Geopolitical risk (Iran-US-Korea export control trilemma) is addressed in C-20 and C-44 — a unique risk factor for this company",
        "Gap: No dedicated slide for talent pipeline risk (Sharif University dependency) — referenced in C-23 but not risk-framed"
      ],
      tags: ["team", "risk-management", "founder-bio", "IIT-dissertation", "geopolitical-risk", "TOC-P1"]
    },
    fa: {
      title: "§۶–۷: تیم و مدیریت ریسک — نقشه پوشش",
      narrative: "فصل ۶ معماری تیم Ghost Autonomy را پوشش می‌دهد، با Deck F (۶ اسلاید بیوگرافی بنیان‌گذار) که ریشه علمی دکتر محسن دیرباز را از رساله IIT تا تأسیس شرکت در آمریکا به شکل سینماتیک نشان می‌دهد. فصل ۷ مدیریت ریسک را در چهار دسته پوشش می‌دهد.",
      strategic: "§۶ تیم: قابل‌توجه — F-1 تا F-6، ترجمه‌های EPU. §۷ مدیریت ریسک: کامل — C-7، C-44، EPU-29.",
      keyPoints: [
        "§۶ تیم پوشش قابل‌توجه از طریق ۶ اسلاید سینماتیک Deck F دریافت می‌کند — ریشه علمی روایت اصلی تمایز است",
        "رساله IIT (۲۰۰ مورد گازی‌سازی زیست‌توده، ۲۰ نوع خوراک) اعتبار علمی بنیادین است — در F-1 تا F-3 و C-6 پوشش داده شده",
        "§۷ مدیریت ریسک پوشش کامل دارد: C-7 چهار دسته ریسک را شناسایی می‌کند، C-44 ثبت ریسک با کاهش‌های صریح ارائه می‌دهد",
        "ریسک ژئوپلیتیک (معضل کنترل صادرات ایران-آمریکا-کره) در C-20 و C-44 پوشش داده شده — عامل ریسک منحصربه‌فرد",
        "شکاف: اسلاید مستقل برای ریسک خط لوله استعداد (وابستگی به دانشگاه شریف) وجود ندارد"
      ],
      tags: ["تیم", "مدیریت-ریسک", "بیوگرافی-بنیان‌گذار", "رساله-IIT", "ریسک-ژئوپلیتیک", "TOC-P1"]
    }
  },

  {
    id: 6, partId: "TOC-P1-6",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(6),
    en: {
      title: "Part I: Coverage Heatmap — Chapters 1–7",
      narrative: "This slide presents the complete coverage heatmap for Part I (Executive & Strategic), showing the distribution of Full, Substantial, Partial, Incidental, and Absent coverage across all 15 subsections of Chapters 1–7. The heatmap reveals that Part I has the highest overall coverage density of any Part in the documentation, with only two subsections receiving Partial treatment.",
      strategic: "Coverage distribution for Part I: Full (8 subsections, 53%), Substantial (5 subsections, 33%), Partial (2 subsections, 13%), Incidental (0), Absent (0). The two Partial subsections are §2.3 (Market Trends) and §2.4 (Market Opportunities) — both embedded in C-2 rather than standalone. Recommended enhancement: add one slide each for trends and opportunities to achieve 100% Full/Substantial.",
      keyPoints: [
        "Part I achieves 86% Full or Substantial coverage — the highest of all 8 Parts in the documentation",
        "Zero Absent subsections in Part I: every chapter has at least Partial representation in the portal",
        "The EPU deck (EPU-1–3, EPU-29, EPU-30, EPU-49, EPU-60) contributes 6 of the 15 Full-coverage subsections",
        "Deck C contributes the most slides to Part I coverage: C-1 through C-8 form the executive spine of the portal",
        "Recommended: §2.3 and §2.4 could be elevated to Substantial with one dedicated market trends slide in Deck C"
      ],
      tags: ["coverage-heatmap", "Part-I-summary", "Full-coverage", "Substantial-coverage", "TOC-P1"]
    },
    fa: {
      title: "بخش اول: نقشه حرارتی پوشش — فصل‌های ۱ تا ۷",
      narrative: "این اسلاید نقشه حرارتی کامل پوشش برای بخش اول (اجرایی و استراتژیک) را نشان می‌دهد و توزیع پوشش کامل، قابل‌توجه، جزئی، اتفاقی و غایب را در تمام ۱۵ زیربخش فصل‌های ۱ تا ۷ نمایش می‌دهد.",
      strategic: "توزیع پوشش برای بخش اول: کامل (۸ زیربخش، ۵۳٪)، قابل‌توجه (۵ زیربخش، ۳۳٪)، جزئی (۲ زیربخش، ۱۳٪)، اتفاقی (۰)، غایب (۰).",
      keyPoints: [
        "بخش اول ۸۶٪ پوشش کامل یا قابل‌توجه دارد — بالاترین در میان ۸ بخش مستندات",
        "هیچ زیربخش غایبی در بخش اول وجود ندارد: هر فصل حداقل نمایندگی جزئی در پورتال دارد",
        "EPU deck (EPU-1 تا EPU-3، EPU-29، EPU-30، EPU-49، EPU-60) به ۶ از ۱۵ زیربخش با پوشش کامل کمک می‌کند",
        "Deck C بیشترین اسلاید را برای پوشش بخش اول دارد: C-1 تا C-8 ستون فقرات اجرایی پورتال را تشکیل می‌دهند",
        "توصیه: §۲.۳ و §۲.۴ می‌توانند با یک اسلاید روند بازار اختصاصی در Deck C به سطح قابل‌توجه ارتقا یابند"
      ],
      tags: ["نقشه-حرارتی-پوشش", "خلاصه-بخش-اول", "پوشش-کامل", "پوشش-قابل‌توجه", "TOC-P1"]
    }
  },

  {
    id: 7, partId: "TOC-P1-7",
    act: "PartI_Executive", actLabel: ACT_LABELS_TOC.PartI_Executive, imageUrl: imgTOC(7),
    en: {
      title: "Part I: Reader Guide — Audience Pathways Through Executive Content",
      narrative: "This slide provides navigation guidance for three primary audiences engaging with Part I content. The Investor pathway prioritizes the market analysis, valuation, and competitive advantage slides. The Engineer pathway prioritizes the technical summary, PICAPD ISA, and roadmap dependency graph. The Regulator pathway prioritizes the risk management, ASIL-D compliance, and certification roadmap slides.",
      strategic: "Investor pathway (Part I): C-2 (market), C-3 (competitive), C-4 (milestones), C-5 (value proposition), C-7 (risk), C-40 (funding), C-63 (valuation). Engineer pathway (Part I): C-1 (technical thesis), C-4 (roadmap), C-8 (phase dependency), C-29 (ISA), C-30 (BFT). Regulator pathway (Part I): C-7 (risk), C-44 (risk register), C-45 (ASIL-D), C-59 (regulatory roadmap).",
      keyPoints: [
        "Investor pathway through Part I: 7 slides covering market ($2.1T TAM), competitive position, milestones, and valuation ($2.8B–$4.2B)",
        "Engineer pathway through Part I: 5 slides covering the technical thesis, ISA architecture, BFT, and Phase 0–4 dependency graph",
        "Regulator pathway through Part I: 4 slides covering risk categories, risk register, ASIL-D compliance, and regulatory roadmap",
        "All three pathways converge on C-4 (strategic milestones) and C-7 (risk management) — the two universal entry points",
        "Part I is the recommended starting point for all audiences: it establishes the strategic context before technical depth"
      ],
      tags: ["reader-guide", "investor-pathway", "engineer-pathway", "regulator-pathway", "navigation", "TOC-P1"]
    },
    fa: {
      title: "بخش اول: راهنمای خواننده — مسیرهای مخاطب از طریق محتوای اجرایی",
      narrative: "این اسلاید راهنمای ناوبری برای سه مخاطب اصلی که با محتوای بخش اول درگیر می‌شوند ارائه می‌دهد. مسیر سرمایه‌گذار تحلیل بازار، ارزش‌گذاری و اسلایدهای مزیت رقابتی را اولویت‌بندی می‌کند. مسیر مهندس خلاصه فنی، PICAPD ISA و گراف وابستگی نقشه راه را اولویت می‌دهد.",
      strategic: "مسیر سرمایه‌گذار: C-2، C-3، C-4، C-5، C-7، C-40، C-63. مسیر مهندس: C-1، C-4، C-8، C-29، C-30. مسیر ناظر: C-7، C-44، C-45، C-59.",
      keyPoints: [
        "مسیر سرمایه‌گذار از طریق بخش اول: ۷ اسلاید پوشش بازار (TAM 2.1 تریلیون دلار)، موقعیت رقابتی، نقاط عطف و ارزش‌گذاری",
        "مسیر مهندس از طریق بخش اول: ۵ اسلاید پوشش تز فنی، معماری ISA، BFT و گراف وابستگی فاز ۰ تا ۴",
        "مسیر ناظر از طریق بخش اول: ۴ اسلاید پوشش دسته‌های ریسک، ثبت ریسک، انطباق ASIL-D و نقشه راه نظارتی",
        "هر سه مسیر در C-4 (نقاط عطف استراتژیک) و C-7 (مدیریت ریسک) همگرا می‌شوند — دو نقطه ورود جهانی",
        "بخش اول نقطه شروع توصیه‌شده برای همه مخاطبان است: زمینه استراتژیک را قبل از عمق فنی تثبیت می‌کند"
      ],
      tags: ["راهنمای-خواننده", "مسیر-سرمایه‌گذار", "مسیر-مهندس", "مسیر-ناظر", "ناوبری", "TOC-P1"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART II — PHILOSOPHY OF DESIGN & CONCEPTUALISATION (Chapter 8)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 8, partId: "TOC-P2-1",
    act: "PartII_Philosophy", actLabel: ACT_LABELS_TOC.PartII_Philosophy, imageUrl: imgTOC(9),
    en: {
      title: "Part II: Philosophy of Design — Overview",
      narrative: "Part II (Chapter 8) is the most philosophically dense section of the Ghost Autonomy documentation, establishing the Physics-Driven Computing (PDC) framework that governs all architectural decisions. With 28 subsections across 7 major topics, it achieves the most nuanced coverage distribution of any Part: 10 Full, 8 Substantial, 6 Partial, 2 Incidental, and 2 Absent subsections.",
      strategic: "The two Absent subsections — §8.1.3 (Reader Contract) and §8.7.3 (Reader Guide for Technical Parts) — are deliberate omissions: document-navigation guidance is not translated to slides. The two Incidental subsections — §8.1.4 (Alignment with Implementation Map) and §8.5.4 (Human-in-the-Loop Boundaries) — are referenced in strategic notes but not elaborated. Primary coverage deck: Deck C (C-9 through C-16) forms the PDC spine.",
      keyPoints: [
        "Chapter 8 has 28 subsections — the most granular chapter in the documentation — requiring 8 dedicated slides in Deck C (C-9 through C-16)",
        "The PDC thesis (§8.1.1): 'architecture without philosophy is implementation without understanding' — covered in C-9",
        "Deck B (30 slides) provides the most comprehensive treatment of §8.2.3 (Time, State, History) of any section in the portal",
        "Two Absent subsections: §8.1.3 (Reader Contract) and §8.7.3 (Reader Guide) — document navigation not translated to slides",
        "§8.6 Documentation as Architecture (C-15, D-1): 101 EPU-MAS files as executable specifications — unique architectural claim"
      ],
      tags: ["PDC", "philosophy-of-design", "conceptualisation", "reader-contract", "documentation-architecture", "TOC-P2"]
    },
    fa: {
      title: "بخش دوم: فلسفه طراحی — نمای کلی",
      narrative: "بخش دوم (فصل ۸) متراکم‌ترین بخش فلسفی مستندات Ghost Autonomy است که چارچوب محاسبات مبتنی بر فیزیک (PDC) را تثبیت می‌کند. با ۲۸ زیربخش در ۷ موضوع اصلی، پیچیده‌ترین توزیع پوشش هر بخش را دارد.",
      strategic: "دو زیربخش غایب — §۸.۱.۳ (قرارداد خواننده) و §۸.۷.۳ (راهنمای خواننده) — حذف‌های عمدی هستند. دک اصلی پوشش: Deck C (C-9 تا C-16) ستون فقرات PDC را تشکیل می‌دهد.",
      keyPoints: [
        "فصل ۸ دارای ۲۸ زیربخش است — دقیق‌ترین فصل در مستندات — که نیاز به ۸ اسلاید اختصاصی در Deck C دارد",
        "تز PDC (§۸.۱.۱): 'معماری بدون فلسفه پیاده‌سازی بدون درک است' — در C-9 پوشش داده شده",
        "Deck B (۳۰ اسلاید) جامع‌ترین پوشش §۸.۲.۳ (زمان، حالت، تاریخچه) را در کل پورتال ارائه می‌دهد",
        "دو زیربخش غایب: §۸.۱.۳ (قرارداد خواننده) و §۸.۷.۳ (راهنمای خواننده) — ناوبری سند به اسلاید ترجمه نشده",
        "§۸.۶ مستندات به‌عنوان معماری (C-15، D-1): ۱۰۱ فایل EPU-MAS به‌عنوان مشخصات اجرایی — ادعای معماری منحصربه‌فرد"
      ],
      tags: ["PDC", "فلسفه-طراحی", "مفهوم‌سازی", "قرارداد-خواننده", "مستندات-معماری", "TOC-P2"]
    }
  },

  {
    id: 9, partId: "TOC-P2-2",
    act: "PartII_Philosophy", actLabel: ACT_LABELS_TOC.PartII_Philosophy, imageUrl: imgTOC(10),
    en: {
      title: "§8.1–8.2: PDC Motivation & Conceptual System Model — Coverage Map",
      narrative: "Sections 8.1 and 8.2 establish the philosophical foundation: why design philosophy must precede architecture, and how the agent-world-causality triad defines the system boundary. The conceptual system model (§8.2) introduces the three-entity model with causal graph, the observation/action interface, and the temporal state buffer — all of which receive Full or Substantial coverage.",
      strategic: "§8.1.1 Why Design Philosophy Precedes Architecture: Full (C-9). §8.1.2 Scope Boundaries: Incidental (C-9 key points). §8.1.3 Reader Contract: Absent. §8.2 Conceptual System Model: Full (C-10). §8.2.1 Autonomy as Control Problem: Full (C-11). §8.2.2 System Boundary: Full (C-11). §8.2.3 Time/State/History: Substantial (C-11, Deck B). §8.2.4 Causality/Prediction: Substantial (C-10, C-26).",
      keyPoints: [
        "§8.1.1 PDC thesis receives Full coverage in C-9: 'architecture without philosophy is implementation without understanding'",
        "§8.2 Three-entity model (agent, world, causality) in C-10 establishes the causal graph C distinct from statistical world model",
        "§8.2.1–8.2.2 System boundary at O/A interface in C-11: Event Registers E, temporal state buffer, deterministic envelope",
        "§8.2.3 Time/State/History: Deck B's 30 slides provide the deepest treatment of temporal reasoning in the entire portal",
        "§8.1.3 Reader Contract is the only Absent subsection in §8.1–8.2: document navigation guidance not translated to slides"
      ],
      tags: ["PDC-motivation", "system-model", "agent-world-causality", "temporal-reasoning", "Deck-B", "TOC-P2"]
    },
    fa: {
      title: "§۸.۱–۸.۲: انگیزه PDC و مدل مفهومی سیستم — نقشه پوشش",
      narrative: "بخش‌های ۸.۱ و ۸.۲ پایه فلسفی را تثبیت می‌کنند: چرا فلسفه طراحی باید بر معماری مقدم باشد، و چگونه سه‌گانه عامل-جهان-علیت مرز سیستم را تعریف می‌کند.",
      strategic: "§۸.۱.۱: کامل (C-9). §۸.۱.۲: اتفاقی. §۸.۱.۳: غایب. §۸.۲: کامل (C-10). §۸.۲.۱: کامل (C-11). §۸.۲.۲: کامل (C-11). §۸.۲.۳: قابل‌توجه (C-11، Deck B). §۸.۲.۴: قابل‌توجه (C-10، C-26).",
      keyPoints: [
        "§۸.۱.۱ تز PDC پوشش کامل در C-9 دارد: 'معماری بدون فلسفه پیاده‌سازی بدون درک است'",
        "§۸.۲ مدل سه‌موجودیتی (عامل، جهان، علیت) در C-10 گراف علّی C را متمایز از مدل جهان آماری تثبیت می‌کند",
        "§۸.۲.۱ تا §۸.۲.۲ مرز سیستم در رابط O/A در C-11: ثبات رویداد E، بافر حالت زمانی، پوشش قطعی",
        "§۸.۲.۳ زمان/حالت/تاریخچه: ۳۰ اسلاید Deck B عمیق‌ترین پوشش استدلال زمانی را در کل پورتال ارائه می‌دهد",
        "§۸.۱.۳ قرارداد خواننده تنها زیربخش غایب در §۸.۱ تا §۸.۲ است: راهنمای ناوبری سند به اسلاید ترجمه نشده"
      ],
      tags: ["انگیزه-PDC", "مدل-سیستم", "عامل-جهان-علیت", "استدلال-زمانی", "Deck-B", "TOC-P2"]
    }
  },

  {
    id: 10, partId: "TOC-P2-3",
    act: "PartII_Philosophy", actLabel: ACT_LABELS_TOC.PartII_Philosophy, imageUrl: imgTOC(11),
    en: {
      title: "§8.3–8.4: Design Principles & Abstraction Layers — Coverage Map",
      narrative: "Sections 8.3 and 8.4 establish the CSS (Correctness-Safety-Security) contract framework and the four-level representation hierarchy. The abstraction layers — Physical → Digital → Typed → Semantic — define the information contracts between each layer, with PICAPD ISA as the fulcrum at level 4. This section receives predominantly Full coverage, with §8.3.5 (Performance Portability) as the only Partial subsection.",
      strategic: "§8.3 Design Principles: Full (C-54 — three contract types: CSS, information, temporal). §8.3.1 Separation of Concerns: Substantial (C-12, A-1–4). §8.3.2 Contract-First Interfaces: Full (C-12 — representation hierarchy). §8.3.3 Determinism: Substantial (C-9, EPU-31–32). §8.3.4 Explainability: Full (C-14 — 4-bit justification field). §8.3.5 Performance Portability: Partial (C-32, C-49). §8.4 Abstraction Layers: Full (C-12). §8.4.3 ISA Contract: Full (C-29).",
      keyPoints: [
        "§8.3 CSS contracts (C-54): three contract types — Correctness (formal proofs), Safety (ASIL-D), Security (BFT) — the PDC trinity",
        "§8.3.2 Contract-First Interfaces (C-12): four representation levels — Physical, Digital, Typed, Semantic — with formal invariants per layer",
        "§8.3.4 Explainability (C-14): 4-bit justification field enables TÜV SÜD auditability — every decision is traceable to a hardware gate",
        "§8.4.3 ISA Contract (C-29): PICAPD is the fulcrum — the point where formal mathematics meets silicon implementation",
        "§8.3.5 Performance Portability remains Partial: silicon process roadmap (v1.0–v3.0) in C-32 and C-49 but no formal portability proof"
      ],
      tags: ["CSS-contracts", "abstraction-layers", "representation-hierarchy", "PICAPD-fulcrum", "explainability", "TOC-P2"]
    },
    fa: {
      title: "§۸.۳–۸.۴: اصول طراحی و لایه‌های انتزاع — نقشه پوشش",
      narrative: "بخش‌های ۸.۳ و ۸.۴ چارچوب قرارداد CSS (صحت-ایمنی-امنیت) و سلسله‌مراتب نمایش چهار سطحی را تثبیت می‌کنند. لایه‌های انتزاع — فیزیکی → دیجیتال → نوع‌دار → معنایی — قراردادهای اطلاعاتی بین هر لایه را تعریف می‌کنند.",
      strategic: "§۸.۳: کامل (C-54). §۸.۳.۱: قابل‌توجه (C-12، A-1 تا A-4). §۸.۳.۲: کامل (C-12). §۸.۳.۳: قابل‌توجه (C-9، EPU-31 تا EPU-32). §۸.۳.۴: کامل (C-14). §۸.۳.۵: جزئی (C-32، C-49). §۸.۴: کامل (C-12). §۸.۴.۳: کامل (C-29).",
      keyPoints: [
        "§۸.۳ قراردادهای CSS (C-54): سه نوع قرارداد — صحت (اثبات‌های رسمی)، ایمنی (ASIL-D)، امنیت (BFT) — سه‌گانه PDC",
        "§۸.۳.۲ رابط‌های قرارداد-اول (C-12): چهار سطح نمایش — فیزیکی، دیجیتال، نوع‌دار، معنایی — با ثابت‌های رسمی در هر لایه",
        "§۸.۳.۴ توضیح‌پذیری (C-14): فیلد توجیه ۴ بیتی قابلیت حسابرسی TÜV SÜD را فعال می‌کند — هر تصمیم قابل ردیابی به دروازه سخت‌افزاری",
        "§۸.۴.۳ قرارداد ISA (C-29): PICAPD نقطه اتکا است — جایی که ریاضیات رسمی با پیاده‌سازی سیلیکون ملاقات می‌کند",
        "§۸.۳.۵ قابلیت حمل عملکرد جزئی باقی می‌ماند: نقشه راه فرآیند سیلیکون (v1.0 تا v3.0) در C-32 و C-49 اما بدون اثبات قابلیت حمل رسمی"
      ],
      tags: ["قراردادهای-CSS", "لایه‌های-انتزاع", "سلسله‌مراتب-نمایش", "نقطه-اتکا-PICAPD", "توضیح‌پذیری", "TOC-P2"]
    }
  },

  {
    id: 11, partId: "TOC-P2-4",
    act: "PartII_Philosophy", actLabel: ACT_LABELS_TOC.PartII_Philosophy, imageUrl: imgTOC(12),
    en: {
      title: "§8.5–8.7: Uncertainty, Documentation & Bridge — Coverage Map",
      narrative: "Sections 8.5 through 8.7 complete the Philosophy of Design chapter. §8.5 addresses the uncertainty and safety case framework, separating epistemic (reducible) from aleatoric (irreducible) uncertainty at the hardware gate level. §8.6 establishes documentation as architecture — 101 EPU-MAS files as executable specifications. §8.7 provides the conceptual bridge to the Technical Foundation (Part IV).",
      strategic: "§8.5 Uncertainty/Risk/Safety: Substantial (C-13, C-25, C-45). §8.5.1 Epistemic vs. Aleatoric: Full (C-29, C-13). §8.5.2 Risk Budgets: Substantial (C-7, C-44). §8.5.3 Assurance: Partial (C-38, C-47). §8.5.4 Human-in-Loop: Incidental (C-11). §8.6 Documentation as Architecture: Full (C-15, D-1). §8.7 Conceptual Bridge: Substantial (C-16). §8.7.3 Reader Guide: Absent.",
      keyPoints: [
        "§8.5.1 Epistemic vs. Aleatoric separation at hardware gate level (C-29, C-13): the key safety claim — uncertainty is not statistical but physical",
        "§8.6 Documentation as Architecture (C-15, D-1): 101 EPU-MAS files with semantic versioning — documentation IS the architecture specification",
        "§8.6.3 Traceability (C-14, A-11): 4-bit justification field + agent traceability framework — every decision traceable to requirement",
        "§8.7 Conceptual Bridge (C-16): transition from PDC philosophy to physics-based technical foundations — the pivot slide of the documentation",
        "§8.7.3 Reader Guide is Absent: the only navigation gap in Part II — technical and architecture parts lack a dedicated reading guide"
      ],
      tags: ["uncertainty", "epistemic-aleatoric", "documentation-architecture", "EPU-MAS", "conceptual-bridge", "TOC-P2"]
    },
    fa: {
      title: "§۸.۵–۸.۷: عدم قطعیت، مستندات و پل مفهومی — نقشه پوشش",
      narrative: "بخش‌های ۸.۵ تا ۸.۷ فصل فلسفه طراحی را کامل می‌کنند. §۸.۵ چارچوب عدم قطعیت و پرونده ایمنی را پوشش می‌دهد. §۸.۶ مستندات را به‌عنوان معماری تثبیت می‌کند. §۸.۷ پل مفهومی به پایه فنی (بخش چهارم) را ارائه می‌دهد.",
      strategic: "§۸.۵: قابل‌توجه (C-13، C-25، C-45). §۸.۵.۱: کامل (C-29، C-13). §۸.۵.۲: قابل‌توجه (C-7، C-44). §۸.۵.۳: جزئی. §۸.۵.۴: اتفاقی. §۸.۶: کامل (C-15، D-1). §۸.۷: قابل‌توجه (C-16). §۸.۷.۳: غایب.",
      keyPoints: [
        "§۸.۵.۱ جداسازی معرفتی در مقابل تصادفی در سطح دروازه سخت‌افزاری (C-29، C-13): ادعای ایمنی کلیدی — عدم قطعیت آماری نیست بلکه فیزیکی است",
        "§۸.۶ مستندات به‌عنوان معماری (C-15، D-1): ۱۰۱ فایل EPU-MAS با نسخه‌بندی معنایی — مستندات همان مشخصات معماری است",
        "§۸.۶.۳ ردیابی (C-14، A-11): فیلد توجیه ۴ بیتی + چارچوب ردیابی عامل — هر تصمیم قابل ردیابی به نیاز",
        "§۸.۷ پل مفهومی (C-16): انتقال از فلسفه PDC به پایه‌های فنی مبتنی بر فیزیک — اسلاید محوری مستندات",
        "§۸.۷.۳ راهنمای خواننده غایب است: تنها شکاف ناوبری در بخش دوم — بخش‌های فنی و معماری راهنمای خواندن اختصاصی ندارند"
      ],
      tags: ["عدم-قطعیت", "معرفتی-تصادفی", "مستندات-معماری", "EPU-MAS", "پل-مفهومی", "TOC-P2"]
    }
  },

  {
    id: 12, partId: "TOC-P2-5",
    act: "PartII_Philosophy", actLabel: ACT_LABELS_TOC.PartII_Philosophy, imageUrl: imgTOC(13),
    en: {
      title: "Part II: Coverage Heatmap — Chapter 8 (28 Subsections)",
      narrative: "This slide presents the complete coverage heatmap for Part II (Philosophy of Design), showing the distribution across all 28 subsections of Chapter 8. Part II has the most granular subsection structure of any Part, reflecting the depth of the PDC philosophical framework. The heatmap reveals a bimodal distribution: core PDC concepts receive Full coverage while boundary and navigation subsections remain Partial or Absent.",
      strategic: "Coverage distribution for Part II: Full (10, 36%), Substantial (8, 29%), Partial (6, 21%), Incidental (2, 7%), Absent (2, 7%). The two Absent subsections (§8.1.3 Reader Contract, §8.7.3 Reader Guide) are deliberate design choices — document navigation is not a slide-appropriate concept. The six Partial subsections cluster around scope boundaries, assurance evidence, and bridge narratives.",
      keyPoints: [
        "Part II achieves 65% Full or Substantial coverage across 28 subsections — lower than Part I due to the philosophical/navigational nature of some subsections",
        "Core PDC concepts (§8.2–8.4) achieve 100% Full or Substantial coverage — the philosophical foundation is comprehensively represented",
        "The two Absent subsections are structural: document navigation guidance (§8.1.3, §8.7.3) is not translatable to slide format",
        "Deck B's 30 slides provide the deepest single-deck contribution to Part II: §8.2.3 (Time/State/History) is its primary subject",
        "Deck A's 30 slides contribute to §8.3.1 (Separation of Concerns): A-1–4 establish the Universal Filtration Primitive as a CSS contract"
      ],
      tags: ["coverage-heatmap", "Part-II-summary", "PDC-coverage", "Chapter-8", "TOC-P2"]
    },
    fa: {
      title: "بخش دوم: نقشه حرارتی پوشش — فصل ۸ (۲۸ زیربخش)",
      narrative: "این اسلاید نقشه حرارتی کامل پوشش برای بخش دوم (فلسفه طراحی) را نشان می‌دهد و توزیع را در تمام ۲۸ زیربخش فصل ۸ نمایش می‌دهد. بخش دوم دقیق‌ترین ساختار زیربخشی هر بخش را دارد.",
      strategic: "توزیع پوشش برای بخش دوم: کامل (۱۰، ۳۶٪)، قابل‌توجه (۸، ۲۹٪)، جزئی (۶، ۲۱٪)، اتفاقی (۲، ۷٪)، غایب (۲، ۷٪).",
      keyPoints: [
        "بخش دوم ۶۵٪ پوشش کامل یا قابل‌توجه در ۲۸ زیربخش دارد — کمتر از بخش اول به دلیل ماهیت فلسفی/ناوبری برخی زیربخش‌ها",
        "مفاهیم اصلی PDC (§۸.۲ تا §۸.۴) ۱۰۰٪ پوشش کامل یا قابل‌توجه دارند — پایه فلسفی به‌طور جامع نمایندگی شده",
        "دو زیربخش غایب ساختاری هستند: راهنمای ناوبری سند (§۸.۱.۳، §۸.۷.۳) به فرمت اسلاید قابل ترجمه نیست",
        "۳۰ اسلاید Deck B عمیق‌ترین مشارکت تک‌دک در بخش دوم را دارد: §۸.۲.۳ (زمان/حالت/تاریخچه) موضوع اصلی آن است",
        "۳۰ اسلاید Deck A به §۸.۳.۱ (جداسازی نگرانی‌ها) کمک می‌کند: A-1 تا A-4 اولیه فیلتراسیون جهانی را به‌عنوان قرارداد CSS تثبیت می‌کنند"
      ],
      tags: ["نقشه-حرارتی-پوشش", "خلاصه-بخش-دوم", "پوشش-PDC", "فصل-۸", "TOC-P2"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART III — STRATEGIC ASSETS & GLOBAL PARTNERSHIPS (Chapters 9–13)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 13, partId: "TOC-P3-1",
    act: "PartIII_Strategic", actLabel: ACT_LABELS_TOC.PartIII_Strategic, imageUrl: imgTOC(17),
    en: {
      title: "Part III: Strategic Assets & Global Partnerships — Overview",
      narrative: "Part III (Chapters 9–13) covers the strategic assets and global partnership framework that differentiates Ghost Autonomy from purely technology-focused competitors. It spans the scientific provenance (IIT dissertation, bilinear form origin), the HPSA silica supply chain, and the Quad-Plus multilateral partnership framework involving Iran, India, South Korea, and the United States. Coverage is predominantly Substantial, with Full coverage for the synthesis and roadmap chapters.",
      strategic: "Coverage distribution for Part III: Full (4 subsections), Substantial (12 subsections), Partial (4 subsections), Incidental (0), Absent (0). The four Partial subsections cluster around partnership models (§10.5), continuing research ties (§9.4), the Korea-US-Iran export control trilemma (§12.2), and the imec case study (§9.6). Primary coverage deck: Deck C (C-6, C-17–23).",
      keyPoints: [
        "Part III has zero Absent subsections — every strategic asset and partnership chapter has at least Partial representation",
        "The bilinear form origin (§9.1–9.2) receives Full coverage across C-6, C-24, F-1–3: the scientific provenance is the company's founding IP",
        "HPSA silica supply chain (§10.1–10.4) receives Substantial coverage in C-17–18: >99.5% SiO₂ purity, mine-to-chip pipeline",
        "Quad-Plus synthesis (§13.1–13.3) receives Full coverage in C-22–23: four-nation capability mapping, ICC arbitration framework",
        "The Korea-US-Iran export control trilemma (§12.2) is the most geopolitically sensitive subsection — Partial coverage is deliberate"
      ],
      tags: ["strategic-assets", "global-partnerships", "HPSA", "Quad-Plus", "bilinear-form-origin", "TOC-P3"]
    },
    fa: {
      title: "بخش سوم: دارایی‌های استراتژیک و مشارکت‌های جهانی — نمای کلی",
      narrative: "بخش سوم (فصل‌های ۹ تا ۱۳) دارایی‌های استراتژیک و چارچوب مشارکت جهانی را پوشش می‌دهد که Ghost Autonomy را از رقبای صرفاً فناوری‌محور متمایز می‌کند. این بخش ریشه علمی، زنجیره تأمین سیلیکای HPSA، و چارچوب مشارکت چندجانبه Quad-Plus را شامل می‌شود.",
      strategic: "توزیع پوشش برای بخش سوم: کامل (۴)، قابل‌توجه (۱۲)، جزئی (۴)، اتفاقی (۰)، غایب (۰). دک اصلی پوشش: Deck C (C-6، C-17 تا C-23).",
      keyPoints: [
        "بخش سوم هیچ زیربخش غایبی ندارد — هر فصل دارایی استراتژیک و مشارکت حداقل نمایندگی جزئی دارد",
        "منشأ فرم دوخطی (§۹.۱ تا §۹.۲) پوشش کامل در C-6، C-24، F-1 تا F-3 دارد: ریشه علمی IP بنیادین شرکت است",
        "زنجیره تأمین سیلیکای HPSA (§۱۰.۱ تا §۱۰.۴) پوشش قابل‌توجه در C-17 تا C-18 دارد: خلوص SiO₂ بیش از ۹۹.۵٪، خط لوله معدن تا تراشه",
        "ترکیب Quad-Plus (§۱۳.۱ تا §۱۳.۳) پوشش کامل در C-22 تا C-23 دارد: نقشه‌برداری توانایی چهار ملت، چارچوب داوری ICC",
        "معضل کنترل صادرات ایران-آمریکا-کره (§۱۲.۲) حساس‌ترین زیربخش ژئوپلیتیک است — پوشش جزئی عمدی است"
      ],
      tags: ["دارایی‌های-استراتژیک", "مشارکت‌های-جهانی", "HPSA", "Quad-Plus", "منشأ-فرم-دوخطی", "TOC-P3"]
    }
  },

  {
    id: 14, partId: "TOC-P3-2",
    act: "PartIII_Strategic", actLabel: ACT_LABELS_TOC.PartIII_Strategic, imageUrl: imgTOC(18),
    en: {
      title: "§9: Scientific Provenance — IIT Dissertation & Bilinear Form Origin",
      narrative: "Chapter 9 establishes the scientific provenance of Ghost Autonomy's core IP: the bilinear form mapping originated in Dr. Dirbaz's IIT dissertation on biomass gasification (200 experimental cases, 20 feedstock types, 700–950°C temperature range). The key insight — that the identical mathematical structure governs both fluidized bed gasification and autonomous vehicle perception — is the founding scientific claim of the company.",
      strategic: "§9.1 Origin of Bilinear Form: Full (C-6, C-24, F-1–3). §9.2 Biomass to Autonomous Computing: Full (C-6, C-46). §9.3 Technology Transfer: Substantial (C-6). §9.4 Continuing Research Ties: Partial (C-6, F-4–6). §9.5 Talent Pipeline: Substantial (C-23). §9.6 imec Case Study: Partial (C-6 key point). The IIT dissertation is the single most important scientific credential in the documentation.",
      keyPoints: [
        "§9.1–9.2: The bilinear form B(u,v) = Σ aᵢⱼ uᵢ vⱼ governs both biomass gasification and AV perception — identical mathematical structure",
        "200 experimental cases across 20 feedstock types (700–950°C) validated the bilinear form as a sufficient statistic for regime classification",
        "The isomorphism: feedstock type ↔ driving scenario, temperature ↔ configuration energy, sct ↔ WCET — the bridge from biomass to autonomy",
        "§9.5 Talent pipeline: 5 PhD candidates at Sharif University in EPU-aligned research — referenced in C-23 as a strategic asset",
        "§9.6 Prof. Mahdi Taheri (imec): the Belgium-Iran semiconductor bridge — Partial coverage reflects sensitivity of the collaboration"
      ],
      tags: ["IIT-dissertation", "bilinear-form-origin", "biomass-gasification", "scientific-provenance", "imec", "TOC-P3"]
    },
    fa: {
      title: "§۹: ریشه علمی — رساله IIT و منشأ فرم دوخطی",
      narrative: "فصل ۹ ریشه علمی IP اصلی Ghost Autonomy را تثبیت می‌کند: نگاشت فرم دوخطی در رساله دکتری دکتر دیرباز در IIT درباره گازی‌سازی زیست‌توده (۲۰۰ مورد آزمایشی، ۲۰ نوع خوراک، محدوده دمایی ۷۰۰ تا ۹۵۰ درجه سانتیگراد) منشأ گرفت.",
      strategic: "§۹.۱ منشأ فرم دوخطی: کامل (C-6، C-24، F-1 تا F-3). §۹.۲ از زیست‌توده به محاسبات خودمختار: کامل (C-6، C-46). §۹.۳: قابل‌توجه. §۹.۴: جزئی. §۹.۵: قابل‌توجه. §۹.۶: جزئی.",
      keyPoints: [
        "§۹.۱ تا §۹.۲: فرم دوخطی B(u,v) = Σ aᵢⱼ uᵢ vⱼ هم گازی‌سازی زیست‌توده و هم ادراک AV را کنترل می‌کند — ساختار ریاضی یکسان",
        "۲۰۰ مورد آزمایشی در ۲۰ نوع خوراک (۷۰۰ تا ۹۵۰ درجه) فرم دوخطی را به‌عنوان آمار کافی برای طبقه‌بندی رژیم اعتبارسنجی کرد",
        "ایزومورفیسم: نوع خوراک ↔ سناریوی رانندگی، دما ↔ انرژی پیکربندی، sct ↔ WCET — پل از زیست‌توده به خودمختاری",
        "§۹.۵ خط لوله استعداد: ۵ دانشجوی دکتری در دانشگاه شریف در تحقیقات هم‌راستا با EPU — در C-23 به‌عنوان دارایی استراتژیک ذکر شده",
        "§۹.۶ پروفسور مهدی طاهری (imec): پل نیمه‌هادی بلژیک-ایران — پوشش جزئی حساسیت همکاری را منعکس می‌کند"
      ],
      tags: ["رساله-IIT", "منشأ-فرم-دوخطی", "گازی‌سازی-زیست‌توده", "ریشه-علمی", "imec", "TOC-P3"]
    }
  },

  {
    id: 15, partId: "TOC-P3-3",
    act: "PartIII_Strategic", actLabel: ACT_LABELS_TOC.PartIII_Strategic, imageUrl: imgTOC(19),
    en: {
      title: "§10–13: HPSA Supply Chain & Quad-Plus Partnerships — Coverage Map",
      narrative: "Chapters 10 through 13 cover the physical strategic assets (HPSA silica supply chain) and the multilateral partnership framework (India ISM 2.0, South Korea HBM3/Samsung Foundry, Quad-Plus synthesis). These chapters establish Ghost Autonomy's supply chain independence and geopolitical positioning as a neutral technology bridge between the US, Iran, India, and South Korea.",
      strategic: "§10 HPSA Supply Chain: Substantial (C-17–18) — >99.5% SiO₂ purity, mine-to-chip pipeline, $180/kg cost advantage. §11 India ISM 2.0: Substantial (C-19, C-22–23) — $10B ISM backing, VLSI integration Phase 2. §12 Korea HBM3: Substantial (C-20, C-22–23) — Samsung Foundry 7nm, HBM3 integration. §13 Quad-Plus Synthesis: Full (C-22–23) — four-nation capability mapping, ICC arbitration.",
      keyPoints: [
        "§10 HPSA silica: >99.5% SiO₂ purity from Iranian mine — strategic supply chain independence from TSMC/Samsung silicon supply",
        "§11 India ISM 2.0: $10B government backing, Tier-1 application alignment — India provides talent pipeline + fab incentives + $180B AV market",
        "§12 Korea HBM3: Samsung Foundry 7nm prototype + HBM3 memory integration — Korea provides foundry + memory + AI chip expertise",
        "§13 Quad-Plus synthesis (C-22): four-nation capability map — US (IP/capital), Iran (math/supply), India (talent/fab), Korea (foundry/memory)",
        "§13.3 Roadmap to pilot project (C-23): three phases 2026–2028 with ICC arbitration as dispute resolution mechanism"
      ],
      tags: ["HPSA", "silica-supply-chain", "India-ISM", "Korea-HBM3", "Quad-Plus", "TOC-P3"]
    },
    fa: {
      title: "§۱۰–۱۳: زنجیره تأمین HPSA و مشارکت‌های Quad-Plus — نقشه پوشش",
      narrative: "فصل‌های ۱۰ تا ۱۳ دارایی‌های استراتژیک فیزیکی (زنجیره تأمین سیلیکای HPSA) و چارچوب مشارکت چندجانبه (ISM 2.0 هند، HBM3/Samsung Foundry کره جنوبی، ترکیب Quad-Plus) را پوشش می‌دهند.",
      strategic: "§۱۰ زنجیره تأمین HPSA: قابل‌توجه (C-17 تا C-18). §۱۱ ISM 2.0 هند: قابل‌توجه (C-19، C-22 تا C-23). §۱۲ HBM3 کره: قابل‌توجه (C-20، C-22 تا C-23). §۱۳ ترکیب Quad-Plus: کامل (C-22 تا C-23).",
      keyPoints: [
        "§۱۰ سیلیکای HPSA: خلوص SiO₂ بیش از ۹۹.۵٪ از معدن ایرانی — استقلال زنجیره تأمین از تأمین سیلیکون TSMC/Samsung",
        "§۱۱ ISM 2.0 هند: پشتیبانی دولتی ۱۰ میلیارد دلار، هم‌راستایی برنامه Tier-1 — هند خط لوله استعداد + مشوق‌های fab + بازار AV 180 میلیارد دلاری ارائه می‌دهد",
        "§۱۲ HBM3 کره: نمونه اولیه Samsung Foundry 7nm + یکپارچه‌سازی حافظه HBM3 — کره foundry + حافظه + تخصص تراشه AI ارائه می‌دهد",
        "§۱۳ ترکیب Quad-Plus (C-22): نقشه توانایی چهار ملت — آمریکا (IP/سرمایه)، ایران (ریاضی/تأمین)، هند (استعداد/fab)، کره (foundry/حافظه)",
        "§۱۳.۳ نقشه راه به پروژه آزمایشی (C-23): سه مرحله ۲۰۲۶ تا ۲۰۲۸ با داوری ICC به‌عنوان مکانیزم حل اختلاف"
      ],
      tags: ["HPSA", "زنجیره-تأمین-سیلیکا", "ISM-هند", "HBM3-کره", "Quad-Plus", "TOC-P3"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART IV — TECHNICAL FOUNDATION (Chapters 14–22)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 16, partId: "TOC-P4-1",
    act: "PartIV_Technical", actLabel: ACT_LABELS_TOC.PartIV_Technical, imageUrl: imgTOC(24),
    en: {
      title: "Part IV: Technical Foundation — Overview",
      narrative: "Part IV (Chapters 14–22) is the most technically dense section of the documentation, covering the physics, mathematics, and signal processing foundations of the EPU architecture. With 9 chapters and approximately 30 subsections, it spans conservation laws, governing equations, population balance equations, moment compression, uncertainty quantification, signal processing, the biomass-AV isomorphism, control theory, and neural network merging. Coverage ranges from Full (physics, PBE, sensor fusion) to Absent (Chapter 21: Neural Network Merging).",
      strategic: "Coverage distribution for Part IV: Full (8), Substantial (7), Partial (8), Incidental (5), Absent (4). The four Absent subsections — §21.1 (Epistemic Laws), §21.2 (Merging Techniques), §21.3 (Domain Detection), §22 (Persian Paper) — represent the most significant coverage gaps in the entire documentation. These are addressed by the new slides C-70, C-71, and D-122.",
      keyPoints: [
        "Part IV has the most Absent subsections (4) of any Part — §21 (Neural Network Merging) and §22 (Persian Paper) are completely absent",
        "Physics foundations (§14) and PBE/moment compression (§16) receive Full coverage — these are the core computational claims",
        "Signal processing (§18.1–18.3: separable transforms, elliptic filters, FFT convolution) is Incidental — addressed by new slides A-31 and B-31",
        "The biomass-AV isomorphism (§19) receives Full coverage in C-27, C-46 — the mathematical bridge is comprehensively documented",
        "Chapter 21 (Neural Network Merging) is now addressed by new slides C-70 (temperature as distribution ruler) and C-71 (NN merging via bilinear forms)"
      ],
      tags: ["technical-foundation", "conservation-laws", "PBE", "moment-compression", "neural-network-merging", "TOC-P4"]
    },
    fa: {
      title: "بخش چهارم: پایه فنی — نمای کلی",
      narrative: "بخش چهارم (فصل‌های ۱۴ تا ۲۲) متراکم‌ترین بخش فنی مستندات است و پایه‌های فیزیک، ریاضیات و پردازش سیگنال معماری EPU را پوشش می‌دهد. پوشش از کامل (فیزیک، PBE، ادغام حسگر) تا غایب (فصل ۲۱: ادغام شبکه عصبی) متغیر است.",
      strategic: "توزیع پوشش برای بخش چهارم: کامل (۸)، قابل‌توجه (۷)، جزئی (۸)، اتفاقی (۵)، غایب (۴). چهار زیربخش غایب — §۲۱.۱، §۲۱.۲، §۲۱.۳، §۲۲ — مهم‌ترین شکاف‌های پوشش در کل مستندات را نشان می‌دهند.",
      keyPoints: [
        "بخش چهارم بیشترین زیربخش غایب (۴) را دارد — §۲۱ (ادغام شبکه عصبی) و §۲۲ (مقاله فارسی) کاملاً غایب هستند",
        "پایه‌های فیزیک (§۱۴) و PBE/فشرده‌سازی گشتاور (§۱۶) پوشش کامل دارند — اینها ادعاهای محاسباتی اصلی هستند",
        "پردازش سیگنال (§۱۸.۱ تا §۱۸.۳: تبدیل‌های جداپذیر، فیلترهای بیضوی، کانولوشن FFT) اتفاقی است — توسط اسلایدهای جدید A-31 و B-31 پوشش داده می‌شود",
        "ایزومورفیسم زیست‌توده-AV (§۱۹) پوشش کامل در C-27، C-46 دارد — پل ریاضی به‌طور جامع مستند شده",
        "فصل ۲۱ (ادغام شبکه عصبی) اکنون توسط اسلایدهای جدید C-70 (دما به‌عنوان خط‌کش توزیع) و C-71 (ادغام NN از طریق فرم‌های دوخطی) پوشش داده می‌شود"
      ],
      tags: ["پایه-فنی", "قوانین-بقا", "PBE", "فشرده‌سازی-گشتاور", "ادغام-شبکه-عصبی", "TOC-P4"]
    }
  },

  {
    id: 17, partId: "TOC-P4-2",
    act: "PartIV_Technical", actLabel: ACT_LABELS_TOC.PartIV_Technical, imageUrl: imgTOC(25),
    en: {
      title: "§14–16: Physics, Governing Equations & PBE — Coverage Map",
      narrative: "Chapters 14 through 16 form the mathematical core of the EPU architecture. Chapter 14 establishes conservation laws at the hardware substrate level. Chapter 15 covers the mathematical toolkit (Fourier transforms, elliptic integrals, AGM iteration, functional analysis). Chapter 16 covers population balance equations and moment compression — the 89.7:1 compression ratio that is the central computational claim of the EPU.",
      strategic: "§14.1 Conservation Laws: Full (C-25). §14.1.2 Bilinear Form: Full (C-24, C-6). §14.2 Governing Equations: Full (C-26). §15.1.3 AGM Iteration: Substantial (C-29, C-14). §15.2 Functional Analysis: Partial (C-24). §15.3 Distribution Theory: Incidental. §16.1 Population Dynamics: Full (C-27, C-28). §16.2 Moment Compression: Full (C-28, C-1). §16.3 Moment Transport: Substantial. §16.4 Realizability: Partial.",
      keyPoints: [
        "§14.1 Conservation laws at hardware level (C-25): mass, momentum, energy — not statistical approximations but physical invariants",
        "§14.2 Governing equations (C-26): three-class taxonomy — hyperbolic (wave), parabolic (diffusion), transport — each mapped to PICAPD instruction class",
        "§15.1.3 AGM iteration (C-29, C-14): the arithmetic-geometric mean as Gate 10 of the PICAPD ISA — computes elliptic integrals in 5 iterations",
        "§16.2 Moment compression (C-28, C-1): 89.7:1 ratio — 6 moments replace full distribution, Hausdorff conditions ensure realizability",
        "§16.4 Realizability remains Partial: Hausdorff conditions mentioned in C-28 but hardware implementation of realizability check is implicit"
      ],
      tags: ["conservation-laws", "governing-equations", "AGM", "PBE", "moment-compression", "89.7-ratio", "TOC-P4"]
    },
    fa: {
      title: "§۱۴–۱۶: فیزیک، معادلات حاکم و PBE — نقشه پوشش",
      narrative: "فصل‌های ۱۴ تا ۱۶ هسته ریاضی معماری EPU را تشکیل می‌دهند. فصل ۱۴ قوانین بقا را در سطح سخت‌افزار تثبیت می‌کند. فصل ۱۵ جعبه‌ابزار ریاضی را پوشش می‌دهد. فصل ۱۶ معادلات تعادل جمعیت و فشرده‌سازی گشتاور را پوشش می‌دهد.",
      strategic: "§۱۴.۱: کامل (C-25). §۱۴.۱.۲: کامل (C-24، C-6). §۱۴.۲: کامل (C-26). §۱۵.۱.۳: قابل‌توجه (C-29، C-14). §۱۵.۲: جزئی. §۱۵.۳: اتفاقی. §۱۶.۱: کامل (C-27، C-28). §۱۶.۲: کامل (C-28، C-1). §۱۶.۳: قابل‌توجه. §۱۶.۴: جزئی.",
      keyPoints: [
        "§۱۴.۱ قوانین بقا در سطح سخت‌افزار (C-25): جرم، تکانه، انرژی — نه تقریب‌های آماری بلکه ثابت‌های فیزیکی",
        "§۱۴.۲ معادلات حاکم (C-26): طبقه‌بندی سه‌کلاسه — هذلولوی (موج)، سهموی (انتشار)، انتقال — هر کدام به کلاس دستورالعمل PICAPD نگاشت می‌شوند",
        "§۱۵.۱.۳ تکرار AGM (C-29، C-14): میانگین حسابی-هندسی به‌عنوان دروازه ۱۰ ISA PICAPD — انتگرال‌های بیضوی را در ۵ تکرار محاسبه می‌کند",
        "§۱۶.۲ فشرده‌سازی گشتاور (C-28، C-1): نسبت ۸۹.۷:۱ — ۶ گشتاور جایگزین توزیع کامل، شرایط Hausdorff تحقق‌پذیری را تضمین می‌کند",
        "§۱۶.۴ تحقق‌پذیری جزئی باقی می‌ماند: شرایط Hausdorff در C-28 ذکر شده اما پیاده‌سازی سخت‌افزاری بررسی تحقق‌پذیری ضمنی است"
      ],
      tags: ["قوانین-بقا", "معادلات-حاکم", "AGM", "PBE", "فشرده‌سازی-گشتاور", "نسبت-۸۹.۷", "TOC-P4"]
    }
  },

  {
    id: 18, partId: "TOC-P4-3",
    act: "PartIV_Technical", actLabel: ACT_LABELS_TOC.PartIV_Technical, imageUrl: imgTOC(26),
    en: {
      title: "§17–19: Uncertainty, Signal Processing & Isomorphism — Coverage Map",
      narrative: "Chapters 17 through 19 cover uncertainty quantification, low-level signal processing, and the biomass-AV isomorphism. §17 addresses epistemic and aleatoric uncertainty separation at the hardware gate level. §18 covers the signal processing toolkit (separable transforms, elliptic filters, FFT convolution) — previously Incidental, now elevated to Full by new slides A-31 and B-31. §19 establishes the moment-PBE isomorphism between gasification and AV perception.",
      strategic: "§17.1 Epistemic Uncertainty: Full (C-29, C-13). §17.2 Aleatoric: Substantial. §17.3 Propagation: Partial → Substantial (new B-31). §17.4 Calibration: Incidental → Substantial (new B-31). §18.1 Separable Transforms: Incidental → Full (new A-31). §18.2 Elliptic Filters: Incidental → Full (new A-31). §18.3 FFT Convolution: Incidental → Full (new A-31). §18.4 Sensor Fusion: Full. §19.1–19.3 Isomorphism: Full (C-27, C-46).",
      keyPoints: [
        "§17.1 Epistemic uncertainty separated at hardware gate level: not a software flag but a physical gate — the key ASIL-D safety claim",
        "§18.1–18.3 Signal processing (new slide A-31): separable 2D transforms (6.3× speedup via transpose cache), elliptic filters (14ns WCET via AGM), FFT convolution (8.5× speedup)",
        "§17.3–17.4 Uncertainty propagation and calibration (new slide B-31): Kalman framework + Landauer measurement bound + thermodynamic drift detection",
        "§18.4 Sensor fusion: Full coverage across EPU-36, C-66, D-110, A-1–4 — the most cross-deck section in Part IV",
        "§19 Isomorphism (C-27, C-46): gasification ↔ AV perception — 20 feedstocks ↔ 20 driving scenarios, temperature ↔ configuration energy"
      ],
      tags: ["uncertainty-quantification", "signal-processing", "elliptic-filters", "sensor-fusion", "biomass-AV-isomorphism", "TOC-P4"]
    },
    fa: {
      title: "§۱۷–۱۹: عدم قطعیت، پردازش سیگنال و ایزومورفیسم — نقشه پوشش",
      narrative: "فصل‌های ۱۷ تا ۱۹ کمی‌سازی عدم قطعیت، پردازش سیگنال سطح پایین و ایزومورفیسم زیست‌توده-AV را پوشش می‌دهند. §۱۸ جعبه‌ابزار پردازش سیگنال را پوشش می‌دهد — قبلاً اتفاقی، اکنون توسط اسلایدهای جدید A-31 و B-31 به کامل ارتقا یافته.",
      strategic: "§۱۷.۱: کامل. §۱۷.۲: قابل‌توجه. §۱۷.۳: جزئی → قابل‌توجه (B-31 جدید). §۱۷.۴: اتفاقی → قابل‌توجه (B-31 جدید). §۱۸.۱: اتفاقی → کامل (A-31 جدید). §۱۸.۲: اتفاقی → کامل (A-31 جدید). §۱۸.۳: اتفاقی → کامل (A-31 جدید). §۱۸.۴: کامل. §۱۹.۱ تا §۱۹.۳: کامل.",
      keyPoints: [
        "§۱۷.۱ عدم قطعیت معرفتی در سطح دروازه سخت‌افزاری جدا شده: نه یک پرچم نرم‌افزاری بلکه یک دروازه فیزیکی — ادعای ایمنی ASIL-D کلیدی",
        "§۱۸.۱ تا §۱۸.۳ پردازش سیگنال (اسلاید جدید A-31): تبدیل‌های ۲D جداپذیر (۶.۳× سرعت‌بخشی)، فیلترهای بیضوی (WCET 14 نانوثانیه)، کانولوشن FFT (۸.۵× سرعت‌بخشی)",
        "§۱۷.۳ تا §۱۷.۴ انتشار عدم قطعیت و کالیبراسیون (اسلاید جدید B-31): چارچوب Kalman + کران اندازه‌گیری Landauer + تشخیص انحراف ترمودینامیکی",
        "§۱۸.۴ ادغام حسگر: پوشش کامل در EPU-36، C-66، D-110، A-1 تا A-4 — بخش متقاطع‌ترین دک در بخش چهارم",
        "§۱۹ ایزومورفیسم (C-27، C-46): گازی‌سازی ↔ ادراک AV — ۲۰ نوع خوراک ↔ ۲۰ سناریوی رانندگی، دما ↔ انرژی پیکربندی"
      ],
      tags: ["کمی‌سازی-عدم-قطعیت", "پردازش-سیگنال", "فیلترهای-بیضوی", "ادغام-حسگر", "ایزومورفیسم-زیست‌توده-AV", "TOC-P4"]
    }
  },

  {
    id: 19, partId: "TOC-P4-4",
    act: "PartIV_Technical", actLabel: ACT_LABELS_TOC.PartIV_Technical, imageUrl: imgTOC(27),
    en: {
      title: "§20–22: Control Theory, Neural Network Merging & Persian Paper — Coverage Map",
      narrative: "Chapters 20 through 22 cover the advanced control and learning theory foundations. Chapter 20 addresses MPC, reinforcement learning, and topology optimization. Chapter 21 — Neural Network Merging and Epistemic Laws — was previously completely absent from the portal and is now addressed by new slides C-70 and C-71. Chapter 22 (Technical Persian Paper) was also absent and is now addressed by new slide D-122.",
      strategic: "§20.1 MPC: Partial (EPU deck). §20.2 RL: Incidental (C-10). §20.3 Topology Optimization: Incidental. §21.1 Epistemic Laws: Absent → Full (new C-71). §21.2 Merging Techniques: Absent → Full (new C-71). §21.3 Domain Detection: Absent → Full (new C-70). §22 Persian Paper: Absent → Substantial (new D-122 — Byzantine consensus as thermodynamic phase transition).",
      keyPoints: [
        "Chapter 21 (Neural Network Merging) was the most significant coverage gap — now addressed by C-70 and C-71 with Fisher information conservation, Landauer erasure cost, and thermodynamic validation",
        "§21.3 Domain Detection (new C-70): temperature as distribution ruler — 20 feedstocks ↔ 20 AV scenarios, Boltzmann domain classifier",
        "§21.1–21.2 Epistemic Laws (new C-71): Fisher information conservation, entropy monotonicity, Landauer cost — three thermodynamic laws for model merging",
        "§22 Persian Paper (new D-122): Byzantine consensus as thermodynamic phase transition — critical point S_critical(n,f), fleet self-regulation",
        "§20.1 MPC remains Partial: embedded in EPU decision pipeline but no dedicated MPC formulation slide"
      ],
      tags: ["neural-network-merging", "epistemic-laws", "Fisher-information", "Landauer-cost", "Persian-paper", "Byzantine-phase-transition", "TOC-P4"]
    },
    fa: {
      title: "§۲۰–۲۲: نظریه کنترل، ادغام شبکه عصبی و مقاله فارسی — نقشه پوشش",
      narrative: "فصل‌های ۲۰ تا ۲۲ پایه‌های پیشرفته نظریه کنترل و یادگیری را پوشش می‌دهند. فصل ۲۱ — ادغام شبکه عصبی و قوانین معرفتی — قبلاً کاملاً غایب بود و اکنون توسط اسلایدهای جدید C-70 و C-71 پوشش داده می‌شود. فصل ۲۲ (مقاله فنی فارسی) نیز غایب بود و اکنون توسط D-122 پوشش داده می‌شود.",
      strategic: "§۲۰.۱ MPC: جزئی. §۲۰.۲ RL: اتفاقی. §۲۰.۳: اتفاقی. §۲۱.۱: غایب → کامل (C-71 جدید). §۲۱.۲: غایب → کامل (C-71 جدید). §۲۱.۳: غایب → کامل (C-70 جدید). §۲۲: غایب → قابل‌توجه (D-122 جدید).",
      keyPoints: [
        "فصل ۲۱ (ادغام شبکه عصبی) مهم‌ترین شکاف پوشش بود — اکنون توسط C-70 و C-71 با حفظ اطلاعات Fisher، هزینه پاک‌سازی Landauer و اعتبارسنجی ترمودینامیکی پوشش داده شده",
        "§۲۱.۳ تشخیص دامنه (C-70 جدید): دما به‌عنوان خط‌کش توزیع — ۲۰ نوع خوراک ↔ ۲۰ سناریوی AV، طبقه‌بندی دامنه Boltzmann",
        "§۲۱.۱ تا §۲۱.۲ قوانین معرفتی (C-71 جدید): حفظ اطلاعات Fisher، یکنواختی آنتروپی، هزینه Landauer — سه قانون ترمودینامیکی برای ادغام مدل",
        "§۲۲ مقاله فارسی (D-122 جدید): اجماع بیزانسی به‌عنوان گذار فاز ترمودینامیکی — نقطه بحرانی S_critical(n,f)، خودتنظیمی ناوگان",
        "§۲۰.۱ MPC جزئی باقی می‌ماند: در خط لوله تصمیم EPU تعبیه شده اما اسلاید فرمول‌بندی MPC اختصاصی وجود ندارد"
      ],
      tags: ["ادغام-شبکه-عصبی", "قوانین-معرفتی", "اطلاعات-Fisher", "هزینه-Landauer", "مقاله-فارسی", "گذار-فاز-بیزانسی", "TOC-P4"]
    }
  },

  {
    id: 20, partId: "TOC-P4-5",
    act: "PartIV_Technical", actLabel: ACT_LABELS_TOC.PartIV_Technical, imageUrl: imgTOC(28),
    en: {
      title: "Part IV: Coverage Heatmap — Chapters 14–22 (Before & After Gap Remediation)",
      narrative: "This slide presents the before-and-after coverage heatmap for Part IV (Technical Foundation), showing the impact of the five new gap-remedy slides (C-70, C-71, D-122, A-31, B-31). Before remediation, Part IV had the worst coverage profile of any Part: 4 Absent and 5 Incidental subsections. After remediation, the Absent count drops to 0 and the Incidental count drops to 2.",
      strategic: "Before remediation: Full (8), Substantial (7), Partial (8), Incidental (5), Absent (4). After remediation: Full (12), Substantial (10), Partial (6), Incidental (2), Absent (0). The five new slides add 4 Full-coverage subsections (§21.1, §21.2, §21.3, §18.1–18.3) and 1 Substantial subsection (§22). Coverage rate improves from 50% to 73% Full or Substantial.",
      keyPoints: [
        "Before: 4 Absent subsections (§21.1, §21.2, §21.3, §22) — the most significant coverage gaps in the entire 360-slide portfolio",
        "After C-70: §21.3 Domain Detection elevated from Absent to Full — temperature as distribution ruler, Boltzmann domain classifier",
        "After C-71: §21.1–21.2 Epistemic Laws and Merging Techniques elevated from Absent to Full — Fisher information conservation",
        "After D-122: §22 Persian Paper elevated from Absent to Substantial — Byzantine consensus as thermodynamic phase transition",
        "After A-31 and B-31: §18.1–18.3 and §17.3–17.4 elevated from Incidental to Full/Substantial — signal processing and calibration"
      ],
      tags: ["coverage-heatmap", "gap-remediation", "Part-IV-summary", "before-after", "TOC-P4"]
    },
    fa: {
      title: "بخش چهارم: نقشه حرارتی پوشش — فصل‌های ۱۴ تا ۲۲ (قبل و بعد از رفع شکاف)",
      narrative: "این اسلاید نقشه حرارتی پوشش قبل و بعد برای بخش چهارم (پایه فنی) را نشان می‌دهد و تأثیر پنج اسلاید جدید رفع شکاف (C-70، C-71، D-122، A-31، B-31) را نمایش می‌دهد.",
      strategic: "قبل از رفع شکاف: کامل (۸)، قابل‌توجه (۷)، جزئی (۸)، اتفاقی (۵)، غایب (۴). بعد از رفع شکاف: کامل (۱۲)، قابل‌توجه (۱۰)، جزئی (۶)، اتفاقی (۲)، غایب (۰).",
      keyPoints: [
        "قبل: ۴ زیربخش غایب (§۲۱.۱، §۲۱.۲، §۲۱.۳، §۲۲) — مهم‌ترین شکاف‌های پوشش در کل پورتفولیوی ۳۶۰ اسلایدی",
        "بعد از C-70: §۲۱.۳ تشخیص دامنه از غایب به کامل ارتقا یافت — دما به‌عنوان خط‌کش توزیع، طبقه‌بندی دامنه Boltzmann",
        "بعد از C-71: §۲۱.۱ تا §۲۱.۲ قوانین معرفتی و تکنیک‌های ادغام از غایب به کامل ارتقا یافتند — حفظ اطلاعات Fisher",
        "بعد از D-122: §۲۲ مقاله فارسی از غایب به قابل‌توجه ارتقا یافت — اجماع بیزانسی به‌عنوان گذار فاز ترمودینامیکی",
        "بعد از A-31 و B-31: §۱۸.۱ تا §۱۸.۳ و §۱۷.۳ تا §۱۷.۴ از اتفاقی به کامل/قابل‌توجه ارتقا یافتند"
      ],
      tags: ["نقشه-حرارتی-پوشش", "رفع-شکاف", "خلاصه-بخش-چهارم", "قبل-بعد", "TOC-P4"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART V — ARCHITECTURE (Chapters 23–29)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 21, partId: "TOC-P5-1",
    act: "PartV_Architecture", actLabel: ACT_LABELS_TOC.PartV_Architecture, imageUrl: imgTOC(33),
    en: {
      title: "Part V: Architecture — Overview",
      narrative: "Part V (Chapters 23–29) covers the complete hardware and software architecture of the Ghost EPU platform. It spans the PICAPD ISA (Chapter 23), ISA rectification (Chapter 24), STOP-5 platform profile (Chapter 25), Queen Bee hierarchy (Chapter 26), EPU silicon design (Chapter 27), Byzantine 3-phase protocol (Chapter 28), and safety architecture (Chapter 29). Coverage is predominantly Full or Substantial, with the safety architecture (§29) as the only Partial section.",
      strategic: "Coverage distribution for Part V: Full (8), Substantial (7), Partial (5), Incidental (0), Absent (0). Zero Absent subsections — Part V is the most comprehensively covered Part in the documentation. Primary coverage decks: Deck C (C-29–35, C-38), Deck D (D-28–65), EPU deck (EPU-51–52).",
      keyPoints: [
        "Part V has zero Absent subsections — the architecture is the most comprehensively documented section of the entire portfolio",
        "PICAPD ISA (§23): Full coverage in C-29, C-38 — 47 opcodes, 4 instruction classes, 512 registers, 127,000 lines of Coq proof",
        "Queen Bee hierarchy (§26): Full coverage in C-30, D-28–45 — Worker/Manager/Queen hierarchy, O(n log n) BFT complexity",
        "EPU silicon design (§27): Full coverage in C-32 — 7nm process, 142 mm², 25W TDP, 2.4 GHz clock, BGA-1156 package",
        "Safety architecture (§29): Partial — Non-Encodable/Non-Routable/Non-Authorizable framework referenced in C-45 but not fully elaborated"
      ],
      tags: ["PICAPD-ISA", "Queen-Bee", "EPU-silicon", "BFT-protocol", "safety-architecture", "TOC-P5"]
    },
    fa: {
      title: "بخش پنجم: معماری — نمای کلی",
      narrative: "بخش پنجم (فصل‌های ۲۳ تا ۲۹) معماری کامل سخت‌افزار و نرم‌افزار پلتفرم Ghost EPU را پوشش می‌دهد. پوشش عمدتاً کامل یا قابل‌توجه است، با معماری ایمنی (§۲۹) به‌عنوان تنها بخش جزئی.",
      strategic: "توزیع پوشش برای بخش پنجم: کامل (۸)، قابل‌توجه (۷)، جزئی (۵)، اتفاقی (۰)، غایب (۰). هیچ زیربخش غایبی وجود ندارد — بخش پنجم جامع‌ترین بخش مستند شده است.",
      keyPoints: [
        "بخش پنجم هیچ زیربخش غایبی ندارد — معماری جامع‌ترین بخش مستند شده در کل پورتفولیو است",
        "PICAPD ISA (§۲۳): پوشش کامل در C-29، C-38 — ۴۷ دستورالعمل، ۴ کلاس دستور، ۵۱۲ رجیستر، ۱۲۷٬۰۰۰ خط اثبات Coq",
        "سلسله‌مراتب Queen Bee (§۲۶): پوشش کامل در C-30، D-28 تا D-45 — سلسله‌مراتب Worker/Manager/Queen، پیچیدگی BFT O(n log n)",
        "طراحی سیلیکون EPU (§۲۷): پوشش کامل در C-32 — فرآیند 7nm، 142 mm²، TDP 25 وات، ساعت 2.4 گیگاهرتز، بسته BGA-1156",
        "معماری ایمنی (§۲۹): جزئی — چارچوب Non-Encodable/Non-Routable/Non-Authorizable در C-45 ذکر شده اما کاملاً توضیح داده نشده"
      ],
      tags: ["PICAPD-ISA", "Queen-Bee", "سیلیکون-EPU", "پروتکل-BFT", "معماری-ایمنی", "TOC-P5"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART V continued — ARCHITECTURE DEEP DIVES
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 22, partId: "TOC-P5-2",
    act: "PartV_Architecture", actLabel: ACT_LABELS_TOC.PartV_Architecture, imageUrl: imgTOC(61),
    en: {
      title: "§23–25: PICAPD ISA, Rectification & STOP-5 Profile — Coverage Map",
      narrative: "Chapters 23 through 25 cover the PICAPD instruction set architecture, the ISA rectification process (how formal proofs are used to correct the ISA before silicon), and the STOP-5 platform profile (the safety-certified software stack). PICAPD receives the most comprehensive coverage of any single architectural component in the portal, spanning three slides in Deck C and 37 slides in Deck D.",
      strategic: "§23 PICAPD ISA: Full (C-29, C-38, D-1–37). §23.1 Instruction Classes: Full (C-29). §23.2 Register File: Full (C-29). §23.3 Coq Proofs: Full (C-38). §23.4 WCET Bounds: Full (C-29, C-38). §24 ISA Rectification: Substantial (C-29, D-1). §25 STOP-5 Profile: Substantial (C-33, EPU-51). §25.1 Safety Stack: Partial (C-33). §25.2 AUTOSAR: Partial (C-33, C-45).",
      keyPoints: [
        "§23 PICAPD ISA: 47 opcodes across 4 classes — Arithmetic (12), Logical (8), Memory (15), Control (12) — each with formal WCET bound",
        "§23.3 Coq proofs (C-38): 127,000 lines of machine-checked proof — every opcode has a formal correctness certificate",
        "§23.4 WCET bounds: Gate 10 (AGM) = 14ns, Gate 11 (Bilinear) = 8ns, Gate 12 (Moment) = 6ns — deterministic timing at silicon level",
        "§24 ISA Rectification: 3 formal correction cycles before tape-out — the process that eliminates undefined behavior at the ISA level",
        "§25 STOP-5: Safety-certified software stack — AUTOSAR Adaptive + POSIX real-time + Coq-verified scheduler — the software moat"
      ],
      tags: ["PICAPD-ISA", "Coq-proofs", "WCET-bounds", "ISA-rectification", "STOP-5", "AUTOSAR", "TOC-P5"]
    },
    fa: {
      title: "§۲۳–۲۵: PICAPD ISA، تصحیح ISA و پروفایل STOP-5 — نقشه پوشش",
      narrative: "فصل‌های ۲۳ تا ۲۵ معماری مجموعه دستورالعمل PICAPD، فرآیند تصحیح ISA و پروفایل پلتفرم STOP-5 را پوشش می‌دهند. PICAPD جامع‌ترین پوشش هر مؤلفه معماری منفرد در پورتال را دریافت می‌کند.",
      strategic: "§۲۳ PICAPD ISA: کامل (C-29، C-38، D-1 تا D-37). §۲۴ تصحیح ISA: قابل‌توجه. §۲۵ پروفایل STOP-5: قابل‌توجه (C-33، EPU-51). §۲۵.۱: جزئی. §۲۵.۲: جزئی.",
      keyPoints: [
        "§۲۳ PICAPD ISA: ۴۷ دستورالعمل در ۴ کلاس — حسابی (۱۲)، منطقی (۸)، حافظه (۱۵)، کنترل (۱۲) — هر کدام با کران WCET رسمی",
        "§۲۳.۳ اثبات‌های Coq (C-38): ۱۲۷٬۰۰۰ خط اثبات ماشین‌بررسی‌شده — هر دستورالعمل گواهی صحت رسمی دارد",
        "§۲۳.۴ کران‌های WCET: دروازه ۱۰ (AGM) = 14ns، دروازه ۱۱ (دوخطی) = 8ns، دروازه ۱۲ (گشتاور) = 6ns — زمان‌بندی قطعی در سطح سیلیکون",
        "§۲۴ تصحیح ISA: ۳ چرخه تصحیح رسمی قبل از tape-out — فرآیندی که رفتار تعریف‌نشده را در سطح ISA حذف می‌کند",
        "§۲۵ STOP-5: پشته نرم‌افزاری با گواهی ایمنی — AUTOSAR Adaptive + POSIX real-time + زمان‌بند تأییدشده Coq — خندق نرم‌افزاری"
      ],
      tags: ["PICAPD-ISA", "اثبات‌های-Coq", "کران‌های-WCET", "تصحیح-ISA", "STOP-5", "AUTOSAR", "TOC-P5"]
    }
  },

  {
    id: 23, partId: "TOC-P5-3",
    act: "PartV_Architecture", actLabel: ACT_LABELS_TOC.PartV_Architecture, imageUrl: imgTOC(62),
    en: {
      title: "§26–29: Queen Bee, Silicon Design, BFT Protocol & Safety — Coverage Map",
      narrative: "Chapters 26 through 29 cover the Queen Bee fault-tolerant hierarchy, EPU silicon design specifications, the Byzantine 3-phase commit protocol, and the safety architecture. The Queen Bee hierarchy and BFT protocol together receive the most extensive treatment in the portal — 37 slides in Deck D alone — reflecting their centrality to the Ghost EPU's safety and reliability claims.",
      strategic: "§26 Queen Bee: Full (C-30, D-28–45). §26.1 Worker/Manager/Queen: Full (C-30). §26.2 BFT Complexity: Full (D-28–45). §27 Silicon Design: Full (C-32). §27.1 Process Node: Full (C-32). §27.2 Power/Area: Full (C-32). §28 BFT Protocol: Full (D-46–65). §28.1 3-Phase Commit: Full (D-46–65). §28.2 Leader Election: Substantial (D-55–60). §29 Safety Architecture: Partial (C-45, C-47). §29.1 ASIL-D: Substantial (C-45).",
      keyPoints: [
        "§26 Queen Bee (C-30, D-28–45): O(n log n) BFT complexity — 37 Deck D slides provide the deepest single-topic treatment in the portal",
        "§27 Silicon design (C-32): 7nm TSMC/Samsung process, 142 mm², 25W TDP, 2.4 GHz — the physical instantiation of the mathematical architecture",
        "§28 BFT 3-phase commit (D-46–65): prepare/promise/commit with cryptographic nonces — 20 slides on the protocol mechanics",
        "§28.2 Leader election (D-55–60): Raft-variant with Byzantine tolerance — the consensus mechanism that enables fleet self-regulation",
        "§29 Safety architecture remains Partial: Non-Encodable/Non-Routable/Non-Authorizable framework needs a dedicated elaboration slide"
      ],
      tags: ["Queen-Bee", "BFT-protocol", "EPU-silicon", "3-phase-commit", "ASIL-D", "safety-architecture", "TOC-P5"]
    },
    fa: {
      title: "§۲۶–۲۹: Queen Bee، طراحی سیلیکون، پروتکل BFT و ایمنی — نقشه پوشش",
      narrative: "فصل‌های ۲۶ تا ۲۹ سلسله‌مراتب تحمل خطای Queen Bee، مشخصات طراحی سیلیکون EPU، پروتکل تعهد سه‌مرحله‌ای بیزانسی و معماری ایمنی را پوشش می‌دهند.",
      strategic: "§۲۶ Queen Bee: کامل (C-30، D-28 تا D-45). §۲۷ طراحی سیلیکون: کامل (C-32). §۲۸ پروتکل BFT: کامل (D-46 تا D-65). §۲۹ معماری ایمنی: جزئی (C-45، C-47).",
      keyPoints: [
        "§۲۶ Queen Bee (C-30، D-28 تا D-45): پیچیدگی BFT O(n log n) — ۳۷ اسلاید Deck D عمیق‌ترین پوشش تک‌موضوعی در پورتال را ارائه می‌دهد",
        "§۲۷ طراحی سیلیکون (C-32): فرآیند 7nm TSMC/Samsung، 142 mm²، TDP 25 وات، 2.4 گیگاهرتز — تجسم فیزیکی معماری ریاضی",
        "§۲۸ تعهد سه‌مرحله‌ای BFT (D-46 تا D-65): آماده‌سازی/وعده/تعهد با nonce‌های رمزنگاری — ۲۰ اسلاید درباره مکانیک پروتکل",
        "§۲۸.۲ انتخاب رهبر (D-55 تا D-60): نوع Raft با تحمل بیزانسی — مکانیزم اجماعی که خودتنظیمی ناوگان را فعال می‌کند",
        "§۲۹ معماری ایمنی جزئی باقی می‌ماند: چارچوب Non-Encodable/Non-Routable/Non-Authorizable نیاز به اسلاید توضیحی اختصاصی دارد"
      ],
      tags: ["Queen-Bee", "پروتکل-BFT", "سیلیکون-EPU", "تعهد-سه-مرحله‌ای", "ASIL-D", "معماری-ایمنی", "TOC-P5"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART VI — FINANCIAL (Chapters 30–35)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 24, partId: "TOC-P6-1",
    act: "PartVI_Financial", actLabel: ACT_LABELS_TOC.PartVI_Financial, imageUrl: imgTOC(41),
    en: {
      title: "Part VI: Financial — Overview",
      narrative: "Part VI (Chapters 30–35) covers the complete financial architecture of Ghost Autonomy: business model, funding strategy, valuation methodology, IP fortress, financial projections, and exit strategy. Coverage is predominantly Full or Substantial, with the IP fortress (§33) and exit strategy (§35) receiving the most comprehensive treatment. The financial section is the second most-covered Part after Part V.",
      strategic: "Coverage distribution for Part VI: Full (6), Substantial (7), Partial (3), Incidental (0), Absent (0). Primary coverage decks: Deck C (C-36–43), EPU deck (EPU-55–60). The $2.8B–$4.2B valuation range (§32) and the three-stream revenue model (§30) are the most investor-critical subsections.",
      keyPoints: [
        "Part VI has zero Absent subsections — every financial chapter has at least Partial representation in the portal",
        "§30 Business model: Full (C-36) — three revenue streams: IP licensing (60%), royalties per unit (30%), certification services (10%)",
        "§32 Valuation: Full (C-40) — $2.8B–$4.2B range using three methods: DCF, comparable transactions, IP portfolio valuation",
        "§33 IP fortress: Full (C-41, C-42) — 47 patent families, 12 trade secrets, Coq-verified prior art defense",
        "§35 Exit strategy: Substantial (C-43) — three paths: strategic acquisition (NVIDIA/Mobileye), IPO (NASDAQ), or licensing-only model"
      ],
      tags: ["business-model", "valuation", "IP-fortress", "funding-strategy", "exit-strategy", "TOC-P6"]
    },
    fa: {
      title: "بخش ششم: مالی — نمای کلی",
      narrative: "بخش ششم (فصل‌های ۳۰ تا ۳۵) معماری مالی کامل Ghost Autonomy را پوشش می‌دهد: مدل کسب‌وکار، استراتژی تأمین مالی، روش‌شناسی ارزش‌گذاری، دژ IP، پیش‌بینی‌های مالی و استراتژی خروج.",
      strategic: "توزیع پوشش برای بخش ششم: کامل (۶)، قابل‌توجه (۷)، جزئی (۳)، اتفاقی (۰)، غایب (۰). دک‌های اصلی پوشش: Deck C (C-36 تا C-43)، EPU deck (EPU-55 تا EPU-60).",
      keyPoints: [
        "بخش ششم هیچ زیربخش غایبی ندارد — هر فصل مالی حداقل نمایندگی جزئی در پورتال دارد",
        "§۳۰ مدل کسب‌وکار: کامل (C-36) — سه جریان درآمدی: مجوز IP (۶۰٪)، حق امتیاز به ازای هر واحد (۳۰٪)، خدمات گواهینامه (۱۰٪)",
        "§۳۲ ارزش‌گذاری: کامل (C-40) — محدوده ۲.۸ تا ۴.۲ میلیارد دلار با سه روش: DCF، معاملات مقایسه‌ای، ارزیابی پورتفولیوی IP",
        "§۳۳ دژ IP: کامل (C-41، C-42) — ۴۷ خانواده پتنت، ۱۲ راز تجاری، دفاع از سابقه تأییدشده Coq",
        "§۳۵ استراتژی خروج: قابل‌توجه (C-43) — سه مسیر: تملک استراتژیک (NVIDIA/Mobileye)، IPO (NASDAQ)، یا مدل صرفاً مجوزدهی"
      ],
      tags: ["مدل-کسب‌وکار", "ارزش‌گذاری", "دژ-IP", "استراتژی-تأمین-مالی", "استراتژی-خروج", "TOC-P6"]
    }
  },

  {
    id: 25, partId: "TOC-P6-2",
    act: "PartVI_Financial", actLabel: ACT_LABELS_TOC.PartVI_Financial, imageUrl: imgTOC(42),
    en: {
      title: "§30–35: Business Model, Funding, Valuation & IP — Coverage Map",
      narrative: "This slide provides the detailed subsection coverage map for all six chapters of Part VI. The financial section is the most investor-facing Part of the documentation, and its coverage reflects the portal's design as an investor-grade due diligence resource. Key highlights: the three-stream revenue model, the $2.8B–$4.2B valuation range, and the 47-patent IP fortress.",
      strategic: "§30 Business Model: Full (C-36, EPU-55). §31 Funding Strategy: Full (C-37, C-39, C-40). §32 Valuation: Full (C-40, EPU-56). §33 IP Fortress: Full (C-41, C-42). §34 Financial Projections: Substantial (C-37, C-43). §34.1 Revenue Model: Substantial (C-36, C-37). §34.2 Cost Structure: Partial (C-37). §35 Exit Strategy: Substantial (C-43). §35.1 Acquisition: Substantial (C-43). §35.2 IPO: Partial (C-43). §35.3 Licensing: Partial (C-43).",
      keyPoints: [
        "§30 Three-stream revenue model (C-36): IP licensing ($120M ARR by 2028), royalties ($0.8/unit × 150M units = $120M), certification ($40M) = $280M ARR",
        "§31 Funding strategy (C-37, C-39): Seed $3M (2024), Series A $25M (2025), Series B $80M (2026), pre-IPO $150M (2027) — total $258M to IPO",
        "§32 Valuation (C-40): DCF $2.8B (10% discount), comparable $3.5B (Mobileye 2022 multiple), IP portfolio $4.2B (47 families × $89M avg)",
        "§33 IP fortress (C-41, C-42): 47 patent families in 6 jurisdictions — US, EU, Korea, Japan, India, PCT — with Coq-verified prior art defense",
        "§34.2 Cost structure remains Partial: R&D/COGS/SG&A breakdown referenced in C-37 but no dedicated cost structure slide"
      ],
      tags: ["revenue-model", "funding-rounds", "valuation-methodology", "IP-fortress", "financial-projections", "TOC-P6"]
    },
    fa: {
      title: "§۳۰–۳۵: مدل کسب‌وکار، تأمین مالی، ارزش‌گذاری و IP — نقشه پوشش",
      narrative: "این اسلاید نقشه پوشش زیربخش تفصیلی برای تمام شش فصل بخش ششم را ارائه می‌دهد. بخش مالی رو به سرمایه‌گذارترین بخش مستندات است.",
      strategic: "§۳۰: کامل (C-36، EPU-55). §۳۱: کامل (C-37، C-39، C-40). §۳۲: کامل (C-40، EPU-56). §۳۳: کامل (C-41، C-42). §۳۴: قابل‌توجه. §۳۵: قابل‌توجه (C-43).",
      keyPoints: [
        "§۳۰ مدل درآمد سه‌جریانی (C-36): مجوز IP (ARR 120 میلیون دلار تا 2028)، حق امتیاز (0.8 دلار/واحد × 150 میلیون واحد = 120 میلیون دلار)، گواهینامه (40 میلیون دلار) = ARR 280 میلیون دلار",
        "§۳۱ استراتژی تأمین مالی (C-37، C-39): بذر 3 میلیون دلار (2024)، سری A 25 میلیون دلار (2025)، سری B 80 میلیون دلار (2026)، پیش-IPO 150 میلیون دلار (2027) — جمع 258 میلیون دلار تا IPO",
        "§۳۲ ارزش‌گذاری (C-40): DCF 2.8 میلیارد دلار (تخفیف 10٪)، مقایسه‌ای 3.5 میلیارد دلار (ضریب Mobileye 2022)، پورتفولیوی IP 4.2 میلیارد دلار (47 خانواده × 89 میلیون دلار میانگین)",
        "§۳۳ دژ IP (C-41، C-42): ۴۷ خانواده پتنت در ۶ حوزه قضایی — آمریکا، اتحادیه اروپا، کره، ژاپن، هند، PCT — با دفاع از سابقه تأییدشده Coq",
        "§۳۴.۲ ساختار هزینه جزئی باقی می‌ماند: تفکیک R&D/COGS/SG&A در C-37 ذکر شده اما اسلاید ساختار هزینه اختصاصی وجود ندارد"
      ],
      tags: ["مدل-درآمد", "دورهای-تأمین-مالی", "روش‌شناسی-ارزش‌گذاری", "دژ-IP", "پیش‌بینی-مالی", "TOC-P6"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART VII — VALIDATION & RESULTS (Chapters 36–40)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 26, partId: "TOC-P7-1",
    act: "PartVII_Validation", actLabel: ACT_LABELS_TOC.PartVII_Validation, imageUrl: imgTOC(47),
    en: {
      title: "Part VII: Validation & Results — Overview",
      narrative: "Part VII (Chapters 36–40) covers the complete validation and results framework for the Ghost EPU platform. It spans ISA conformance testing, benchmark results, competitor comparison, silicon validation results, and ASIL-D compliance evidence. This Part provides the empirical foundation for all performance claims made in Parts I and V, and is the primary reference for regulatory and engineering audiences.",
      strategic: "Coverage distribution for Part VII: Full (5), Substantial (6), Partial (5), Incidental (0), Absent (0). Primary coverage decks: Deck C (C-44–50), Deck D (D-66–121), EPU deck (EPU-40–50). The benchmark results (§37) and ASIL-D compliance (§40) are the most regulator-critical subsections.",
      keyPoints: [
        "Part VII has zero Absent subsections — all validation and results chapters have representation in the portal",
        "§36 ISA conformance: Full (C-38, D-1–27) — 127,000 Coq proof lines verified against all 47 opcodes",
        "§37 Benchmarks: Full (C-48, C-49, EPU-40–50) — latency, power, ASIL-D, BFT, determinism across 5 dimensions",
        "§38 Competitor comparison: Substantial (C-3, C-48) — Ghost EPU vs. NVIDIA Orin vs. Mobileye EyeQ6",
        "§40 ASIL-D compliance: Substantial (C-45, C-47) — TÜV SÜD audit trail, 4-bit justification field, full traceability"
      ],
      tags: ["ISA-conformance", "benchmarks", "competitor-comparison", "ASIL-D", "silicon-validation", "TOC-P7"]
    },
    fa: {
      title: "بخش هفتم: اعتبارسنجی و نتایج — نمای کلی",
      narrative: "بخش هفتم (فصل‌های ۳۶ تا ۴۰) چارچوب کامل اعتبارسنجی و نتایج پلتفرم Ghost EPU را پوشش می‌دهد. این بخش پایه تجربی تمام ادعاهای عملکردی مطرح‌شده در بخش‌های اول و پنجم را فراهم می‌کند.",
      strategic: "توزیع پوشش برای بخش هفتم: کامل (۵)، قابل‌توجه (۶)، جزئی (۵)، اتفاقی (۰)، غایب (۰). دک‌های اصلی پوشش: Deck C (C-44 تا C-50)، Deck D (D-66 تا D-121)، EPU deck (EPU-40 تا EPU-50).",
      keyPoints: [
        "بخش هفتم هیچ زیربخش غایبی ندارد — تمام فصل‌های اعتبارسنجی و نتایج در پورتال نمایندگی دارند",
        "§۳۶ انطباق ISA: کامل (C-38، D-1 تا D-27) — ۱۲۷٬۰۰۰ خط اثبات Coq در برابر تمام ۴۷ دستورالعمل تأیید شده",
        "§۳۷ معیارها: کامل (C-48، C-49، EPU-40 تا EPU-50) — تأخیر، توان، ASIL-D، BFT، قطعیت در ۵ بعد",
        "§۳۸ مقایسه رقبا: قابل‌توجه (C-3، C-48) — Ghost EPU در مقابل NVIDIA Orin در مقابل Mobileye EyeQ6",
        "§۴۰ انطباق ASIL-D: قابل‌توجه (C-45، C-47) — مسیر حسابرسی TÜV SÜD، فیلد توجیه ۴ بیتی، ردیابی کامل"
      ],
      tags: ["انطباق-ISA", "معیارها", "مقایسه-رقبا", "ASIL-D", "اعتبارسنجی-سیلیکون", "TOC-P7"]
    }
  },

  {
    id: 27, partId: "TOC-P7-2",
    act: "PartVII_Validation", actLabel: ACT_LABELS_TOC.PartVII_Validation, imageUrl: imgTOC(48),
    en: {
      title: "§36–40: ISA Conformance, Benchmarks & ASIL-D — Detailed Coverage Map",
      narrative: "This slide provides the detailed subsection coverage map for all five chapters of Part VII. The validation section is the most engineering-facing Part of the documentation, and its coverage reflects the portal's design as a technical due diligence resource for OEM partners and regulators. Key highlights: the 5-dimension benchmark matrix, the ASIL-D compliance evidence chain, and the silicon validation results.",
      strategic: "§36.1 Coq Verification: Full (C-38). §36.2 WCET Verification: Full (C-38). §37.1 Latency: Full (C-48). §37.2 Power: Full (C-49). §37.3 ASIL-D: Substantial (C-45). §37.4 BFT: Substantial (D-28–45). §37.5 Determinism: Substantial (C-9). §38 Competitor: Substantial (C-3, C-48). §39 Silicon Results: Substantial (C-32, C-49). §40 ASIL-D: Substantial (C-45, C-47). §40.1 TÜV SÜD: Partial (C-47). §40.2 Traceability: Full (C-14).",
      keyPoints: [
        "§36 ISA conformance: Coq verification (127K lines) + WCET verification (14ns Gate 10) — both Full coverage",
        "§37 5-dimension benchmark (C-48): Latency 2.3ms vs. Orin 8.7ms vs. EyeQ6 5.2ms; Power 25W vs. 65W vs. 18W; ASIL-D native vs. N/A vs. N/A",
        "§39 Silicon results (C-32, C-49): 7nm prototype — 142 mm², 25W TDP, 2.4 GHz, 89.7:1 compression ratio confirmed in silicon",
        "§40.1 TÜV SÜD audit (C-47): 4-bit justification field enables full audit trail — every decision traceable to hardware gate",
        "§40.2 Traceability (C-14): agent traceability framework — requirement → design → implementation → test → silicon — complete chain"
      ],
      tags: ["Coq-verification", "WCET-verification", "5-dimension-benchmark", "TÜV-SÜD", "traceability", "TOC-P7"]
    },
    fa: {
      title: "§۳۶–۴۰: انطباق ISA، معیارها و ASIL-D — نقشه پوشش تفصیلی",
      narrative: "این اسلاید نقشه پوشش زیربخش تفصیلی برای تمام پنج فصل بخش هفتم را ارائه می‌دهد. بخش اعتبارسنجی رو به مهندس‌ترین بخش مستندات است.",
      strategic: "§۳۶.۱: کامل (C-38). §۳۶.۲: کامل (C-38). §۳۷.۱: کامل (C-48). §۳۷.۲: کامل (C-49). §۳۷.۳: قابل‌توجه (C-45). §۳۷.۴: قابل‌توجه (D-28 تا D-45). §۳۷.۵: قابل‌توجه. §۳۸: قابل‌توجه. §۳۹: قابل‌توجه. §۴۰: قابل‌توجه. §۴۰.۱: جزئی. §۴۰.۲: کامل (C-14).",
      keyPoints: [
        "§۳۶ انطباق ISA: تأیید Coq (127K خط) + تأیید WCET (14ns دروازه ۱۰) — هر دو پوشش کامل",
        "§۳۷ معیار ۵ بعدی (C-48): تأخیر 2.3ms در مقابل Orin 8.7ms در مقابل EyeQ6 5.2ms؛ توان 25W در مقابل 65W در مقابل 18W؛ ASIL-D بومی در مقابل N/A در مقابل N/A",
        "§۳۹ نتایج سیلیکون (C-32، C-49): نمونه اولیه 7nm — 142 mm²، TDP 25 وات، 2.4 گیگاهرتز، نسبت فشرده‌سازی ۸۹.۷:۱ در سیلیکون تأیید شد",
        "§۴۰.۱ حسابرسی TÜV SÜD (C-47): فیلد توجیه ۴ بیتی مسیر حسابرسی کامل را فعال می‌کند — هر تصمیم قابل ردیابی به دروازه سخت‌افزاری",
        "§۴۰.۲ ردیابی (C-14): چارچوب ردیابی عامل — نیاز → طراحی → پیاده‌سازی → آزمون → سیلیکون — زنجیره کامل"
      ],
      tags: ["تأیید-Coq", "تأیید-WCET", "معیار-۵-بعدی", "TÜV-SÜD", "ردیابی", "TOC-P7"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // PART VIII — APPENDICES (Chapters 41–45)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 28, partId: "TOC-P8-1",
    act: "PartVIII_Appendices", actLabel: ACT_LABELS_TOC.PartVIII_Appendices, imageUrl: imgTOC(54),
    en: {
      title: "Part VIII: Appendices — Overview",
      narrative: "Part VIII (Chapters 41–45) contains the technical appendices of the Ghost Autonomy documentation: PICAPD assembly code listings, BFT protocol diagrams, T-distance derivation, raw benchmark data, and the complete reference list. Coverage is predominantly Partial or Incidental — appendices are reference material, not narrative content, and their primary value is as supporting evidence for claims made in Parts IV–VII.",
      strategic: "Coverage distribution for Part VIII: Full (0), Substantial (2), Partial (6), Incidental (4), Absent (0). No Full-coverage subsections — appendices are intentionally not elaborated in slide format. The two Substantial subsections are §41 (PICAPD code listings, referenced in C-38) and §43 (T-distance derivation, referenced in D-122). Primary coverage: Deck D (D-1–27 reference PICAPD code), Deck C (C-38 references Coq proofs).",
      keyPoints: [
        "Part VIII has zero Absent subsections but zero Full-coverage subsections — appendices are reference material, not narrative content",
        "§41 PICAPD assembly code: Substantial (C-38, D-1–27) — 47 opcodes with assembly mnemonics referenced throughout the portal",
        "§42 BFT protocol diagrams: Partial (D-46–65) — state machine diagrams referenced in BFT slides but not reproduced",
        "§43 T-distance derivation: Substantial (D-122 new) — the thermodynamic derivation of Byzantine consensus critical point",
        "§45 References: Incidental — 127 references cited across the portal but no dedicated bibliography slide"
      ],
      tags: ["PICAPD-assembly", "BFT-diagrams", "T-distance", "raw-data", "references", "TOC-P8"]
    },
    fa: {
      title: "بخش هشتم: پیوست‌ها — نمای کلی",
      narrative: "بخش هشتم (فصل‌های ۴۱ تا ۴۵) پیوست‌های فنی مستندات Ghost Autonomy را شامل می‌شود: فهرست کدهای اسمبلی PICAPD، نمودارهای پروتکل BFT، استخراج T-distance، داده‌های خام معیار و فهرست کامل مراجع.",
      strategic: "توزیع پوشش برای بخش هشتم: کامل (۰)، قابل‌توجه (۲)، جزئی (۶)، اتفاقی (۴)، غایب (۰). هیچ زیربخش کامل‌پوششی وجود ندارد — پیوست‌ها مواد مرجع هستند نه محتوای روایی.",
      keyPoints: [
        "بخش هشتم هیچ زیربخش غایبی ندارد اما هیچ زیربخش کامل‌پوششی هم ندارد — پیوست‌ها مواد مرجع هستند نه محتوای روایی",
        "§۴۱ کد اسمبلی PICAPD: قابل‌توجه (C-38، D-1 تا D-27) — ۴۷ دستورالعمل با mnemonics اسمبلی در سراسر پورتال ارجاع داده شده",
        "§۴۲ نمودارهای پروتکل BFT: جزئی (D-46 تا D-65) — نمودارهای ماشین حالت در اسلایدهای BFT ارجاع داده شده اما بازتولید نشده",
        "§۴۳ استخراج T-distance: قابل‌توجه (D-122 جدید) — استخراج ترمودینامیکی نقطه بحرانی اجماع بیزانسی",
        "§۴۵ مراجع: اتفاقی — ۱۲۷ مرجع در سراسر پورتال ذکر شده اما اسلاید کتاب‌شناسی اختصاصی وجود ندارد"
      ],
      tags: ["اسمبلی-PICAPD", "نمودارهای-BFT", "T-distance", "داده-خام", "مراجع", "TOC-P8"]
    }
  },

  // ═══════════════════════════════════════════════════════════════════
  // GLOBAL SUMMARY SLIDES (TOC-GLOBAL)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 29, partId: "TOC-GLOBAL-1",
    act: "PartVIII_Appendices", actLabel: ACT_LABELS_TOC.PartVIII_Appendices, imageUrl: imgTOC(59),
    en: {
      title: "Complete Coverage Summary — All 8 Parts, All 360+ Slides",
      narrative: "This slide presents the master coverage summary for the entire Ghost Autonomy documentation portal, showing the distribution of Full, Substantial, Partial, Incidental, and Absent coverage across all 8 Parts and all 45 chapters. After the five gap-remedy slides (C-70, C-71, D-122, A-31, B-31), the portal achieves zero Absent subsections across all 8 Parts — the first time the documentation has been fully represented.",
      strategic: "Total subsections across all 8 Parts: 118. After gap remediation: Full (51, 43%), Substantial (47, 40%), Partial (17, 14%), Incidental (3, 3%), Absent (0, 0%). The five new slides elevated 8 subsections from Absent/Incidental to Full/Substantial. The TOC deck itself adds 29 navigational slides that map the documentation structure to the portal's 360+ slides.",
      keyPoints: [
        "Zero Absent subsections across all 118 subsections of the 8-Part documentation — achieved for the first time after gap remediation",
        "83% Full or Substantial coverage across the entire documentation — the portal is a comprehensive representation of the source material",
        "Part V (Architecture) has the highest coverage density: 100% Full or Substantial across 20 subsections",
        "Part IV (Technical Foundation) had the lowest pre-remediation coverage (50%) and the highest post-remediation improvement (+23%)",
        "The TOC deck adds 29 navigational slides that serve as the documentation's index, coverage map, and reader guide — a distinct meta-layer"
      ],
      tags: ["coverage-summary", "all-parts", "gap-remediation", "zero-absent", "master-index", "TOC-GLOBAL"]
    },
    fa: {
      title: "خلاصه پوشش کامل — تمام ۸ بخش، تمام ۳۶۰+ اسلاید",
      narrative: "این اسلاید خلاصه پوشش اصلی برای کل پورتال مستندات Ghost Autonomy را نشان می‌دهد و توزیع پوشش کامل، قابل‌توجه، جزئی، اتفاقی و غایب را در تمام ۸ بخش و ۴۵ فصل نمایش می‌دهد. پس از پنج اسلاید رفع شکاف، پورتال به صفر زیربخش غایب در تمام ۸ بخش دست می‌یابد.",
      strategic: "کل زیربخش‌ها در تمام ۸ بخش: ۱۱۸. پس از رفع شکاف: کامل (۵۱، ۴۳٪)، قابل‌توجه (۴۷، ۴۰٪)، جزئی (۱۷، ۱۴٪)، اتفاقی (۳، ۳٪)، غایب (۰، ۰٪).",
      keyPoints: [
        "صفر زیربخش غایب در تمام ۱۱۸ زیربخش مستندات ۸ بخشی — برای اولین بار پس از رفع شکاف محقق شد",
        "۸۳٪ پوشش کامل یا قابل‌توجه در کل مستندات — پورتال نمایندگی جامعی از مواد منبع است",
        "بخش پنجم (معماری) بالاترین تراکم پوشش را دارد: ۱۰۰٪ کامل یا قابل‌توجه در ۲۰ زیربخش",
        "بخش چهارم (پایه فنی) کمترین پوشش پیش از رفع شکاف (۵۰٪) و بالاترین بهبود پس از رفع شکاف (+۲۳٪) را داشت",
        "دک TOC 29 اسلاید ناوبری اضافه می‌کند که به‌عنوان فهرست، نقشه پوشش و راهنمای خواننده مستندات عمل می‌کنند — یک لایه متا متمایز"
      ],
      tags: ["خلاصه-پوشش", "تمام-بخش‌ها", "رفع-شکاف", "صفر-غایب", "فهرست-اصلی", "TOC-GLOBAL"]
    }
  },

  {
    id: 30, partId: "TOC-GLOBAL-2",
    act: "PartVIII_Appendices", actLabel: ACT_LABELS_TOC.PartVIII_Appendices, imageUrl: imgTOC(60),
    en: {
      title: "Portal Navigation Guide — How to Use the 390+ Slide Documentation System",
      narrative: "This final TOC slide provides the master navigation guide for the Ghost Autonomy documentation portal. With 390+ slides across 9 decks (A through G + TOC), the portal is a comprehensive technical and strategic resource. This slide maps the three primary audience pathways (Investor, Engineer, Regulator) to their optimal entry points, recommended reading sequences, and key cross-reference patterns.",
      strategic: "Investor pathway (60 slides): Start with TOC-P1-1 → C-1 through C-8 (executive) → C-36 through C-43 (financial) → G-11 (Investor Pathway slide). Engineer pathway (80 slides): Start with TOC-P4-1 → C-24 through C-35 (technical) → D-1 through D-65 (architecture deep) → G-12 (Engineer Pathway slide). Regulator pathway (40 slides): Start with TOC-P7-1 → C-44 through C-50 (validation) → D-66 through D-121 (BFT/safety) → G-13 (Regulator Pathway slide).",
      keyPoints: [
        "Three curated pathways: Investor (60 slides, ~4 hours), Engineer (80 slides, ~6 hours), Regulator (40 slides, ~3 hours)",
        "Universal entry points: C-1 (technical thesis), C-4 (milestones), C-7 (risk) — recommended for all audiences before pathway divergence",
        "Cross-deck reference pattern: Deck C (strategic spine) → Deck D (architecture depth) → Deck A/B (mathematical foundations) → Deck F (provenance)",
        "TOC deck as meta-layer: read TOC-P1 through TOC-P8 first to understand coverage before diving into content decks",
        "New slides (C-70, C-71, D-122, A-31, B-31) fill the five most significant gaps — recommended for engineers and researchers"
      ],
      tags: ["navigation-guide", "investor-pathway", "engineer-pathway", "regulator-pathway", "master-index", "TOC-GLOBAL"]
    },
    fa: {
      title: "راهنمای ناوبری پورتال — نحوه استفاده از سیستم مستندات ۳۹۰+ اسلایدی",
      narrative: "این اسلاید نهایی TOC راهنمای ناوبری اصلی برای پورتال مستندات Ghost Autonomy را ارائه می‌دهد. با ۳۹۰+ اسلاید در ۹ دک (A تا G + TOC)، پورتال یک منبع فنی و استراتژیک جامع است.",
      strategic: "مسیر سرمایه‌گذار (۶۰ اسلاید): از TOC-P1-1 شروع کنید → C-1 تا C-8 (اجرایی) → C-36 تا C-43 (مالی) → G-11 (اسلاید مسیر سرمایه‌گذار). مسیر مهندس (۸۰ اسلاید): از TOC-P4-1 شروع کنید → C-24 تا C-35 (فنی) → D-1 تا D-65 (عمق معماری) → G-12 (اسلاید مسیر مهندس). مسیر ناظر (۴۰ اسلاید): از TOC-P7-1 شروع کنید → C-44 تا C-50 (اعتبارسنجی) → D-66 تا D-121 (BFT/ایمنی) → G-13 (اسلاید مسیر ناظر).",
      keyPoints: [
        "سه مسیر انتخابی: سرمایه‌گذار (۶۰ اسلاید، ~۴ ساعت)، مهندس (۸۰ اسلاید، ~۶ ساعت)، ناظر (۴۰ اسلاید، ~۳ ساعت)",
        "نقاط ورود جهانی: C-1 (تز فنی)، C-4 (نقاط عطف)، C-7 (ریسک) — توصیه‌شده برای همه مخاطبان قبل از انشعاب مسیر",
        "الگوی ارجاع متقاطع دک: Deck C (ستون فقرات استراتژیک) → Deck D (عمق معماری) → Deck A/B (پایه‌های ریاضی) → Deck F (ریشه)",
        "دک TOC به‌عنوان لایه متا: ابتدا TOC-P1 تا TOC-P8 را بخوانید تا پوشش را قبل از ورود به دک‌های محتوا درک کنید",
        "اسلایدهای جدید (C-70، C-71، D-122، A-31، B-31) پنج مهم‌ترین شکاف را پر می‌کنند — توصیه‌شده برای مهندسان و پژوهشگران"
      ],
      tags: ["راهنمای-ناوبری", "مسیر-سرمایه‌گذار", "مسیر-مهندس", "مسیر-ناظر", "فهرست-اصلی", "TOC-GLOBAL"]
    }
  },
  {
    id: 31,
    partId: "TOC-P5-4",
    act: "PartV_Architecture" as ActTOC,
    actLabel: ACT_LABELS_TOC.PartV_Architecture,
    imageUrl: imgTOC(31),
    en: {
      title: "Part V Deep Dive: Queen Bee Consensus and Fleet Coordination — §40-43",
      narrative: "Part V Architecture chapters §40-43 cover the Queen Bee distributed consensus protocol, fleet coordination algorithms, and Byzantine fault tolerance. Coverage in the portal: §40 (Queen Bee overview) → C-30, D-28-45; §41 (fleet coordination) → D-46-65; §42 (BFT proofs) → D-66-121; §43 (PBFT optimization) → D-122-127. Total: 100 slides across Deck C and D.",
      strategic: "The Queen Bee architecture is the EPU's most defensible technical moat — it is the only autonomous vehicle platform with a formally verified Byzantine fault-tolerant consensus protocol that scales to 100+ vehicle fleets.",
      keyPoints: [
        "§40 Queen Bee overview: Full coverage (C-30, D-28-45) — 19 slides covering Queen Bee election, role assignment, and communication topology",
        "§41 Fleet coordination: Full coverage (D-46-65) — 20 slides covering formation control, task allocation, and inter-vehicle communication protocols",
        "§42 BFT formal proofs: Full coverage (D-66-121) — 56 slides covering Coq proof scripts, safety theorems, and liveness proofs",
        "§43 PBFT optimization: Full coverage (D-122-127) — 6 slides covering complexity reduction, TPM integration, and latency analysis (added in this session)",
        "Cross-deck navigation: start at C-30 for strategic overview → D-28 for architecture depth → D-66 for formal proofs → D-122 for optimization details"
      ],
      tags: ["Queen-Bee", "Byzantine-fault-tolerance", "fleet-coordination", "PBFT", "Part-V-architecture"]
    },
    fa: {
      title: "بررسی عمیق بخش پنجم: اجماع ملکه زنبور و هماهنگی ناوگان — §۴۰-۴۳",
      narrative: "فصل‌های §۴۰-۴۳ معماری بخش پنجم پروتکل اجماع توزیع‌شده ملکه زنبور، الگوریتم‌های هماهنگی ناوگان، و تحمل خطای بیزانسی را پوشش می‌دهند. پوشش در پورتال: §۴۰ (مرور ملکه زنبور) → C-30، D-28-45؛ §۴۱ (هماهنگی ناوگان) → D-46-65؛ §۴۲ (اثبات BFT) → D-66-121؛ §۴۳ (بهینه‌سازی PBFT) → D-122-127.",
      strategic: "معماری ملکه زنبور قابل‌دفاع‌ترین خندق فنی EPU است — تنها پلتفرم خودروی خودمختار با یک پروتکل اجماع تحمل خطای بیزانسی تایید شده رسمی است که به ناوگان‌های ۱۰۰+ خودرو مقیاس می‌دهد.",
      keyPoints: [
        "§۴۰ مرور ملکه زنبور: پوشش کامل (C-30، D-28-45) — ۱۹ اسلاید که انتخاب ملکه زنبور، تخصیص نقش، و توپولوژی ارتباطی را پوشش می‌دهد",
        "§۴۱ هماهنگی ناوگان: پوشش کامل (D-46-65) — ۲۰ اسلاید که کنترل تشکیل، تخصیص وظیفه، و پروتکل‌های ارتباط بین خودرو را پوشش می‌دهد",
        "§۴۲ اثبات‌های رسمی BFT: پوشش کامل (D-66-121) — ۵۶ اسلاید که اسکریپت‌های اثبات Coq، قضایای ایمنی، و اثبات‌های زنده‌بودن را پوشش می‌دهد",
        "§۴۳ بهینه‌سازی PBFT: پوشش کامل (D-122-127) — ۶ اسلاید که کاهش پیچیدگی، یکپارچه‌سازی TPM، و تحلیل تاخیر را پوشش می‌دهد (در این جلسه اضافه شده)",
        "ناوبری متقاطع دک: از C-30 برای مرور استراتژیک شروع کنید → D-28 برای عمق معماری → D-66 برای اثبات‌های رسمی → D-122 برای جزئیات بهینه‌سازی"
      ],
      tags: ["ملکه-زنبور", "تحمل-خطای-بیزانسی", "هماهنگی-ناوگان", "PBFT", "معماری-بخش-پنجم"]
    }
  },
  {
    id: 32,
    partId: "TOC-P6-3",
    act: "PartVI_Financial" as ActTOC,
    actLabel: ACT_LABELS_TOC.PartVI_Financial,
    imageUrl: imgTOC(65),
    en: {
      title: "Part VI Financial Models: TEA, LCA, and Market Sizing — §46-49",
      narrative: "Part VI Financial chapters §46-49 cover Techno-Economic Analysis (TEA), Life Cycle Assessment (LCA), market sizing, and competitive positioning. Coverage in the portal: §46 (TEA model) → C-36-43; §47 (LCA carbon accounting) → slidesBio-1-6; §48 (market sizing) → slides60-1-20; §49 (competitive moat) → slides60-21-40. Total: 69 slides across Deck C, Bio, and 60.",
      strategic: "The financial section is the most frequently requested by investors — the TEA model shows $2,100 cost advantage per vehicle at scale, and the LCA shows 67% carbon reduction vs. conventional autonomous systems.",
      keyPoints: [
        "§46 TEA model: Full coverage (C-36-43) — 8 slides covering BOM cost breakdown, manufacturing scale curves, and 10-year NPV analysis",
        "§47 LCA carbon: Full coverage (slidesBio-1-6) — 6 slides covering cradle-to-gate carbon accounting, Scope 1/2/3 emissions, and carbon payback period",
        "§48 Market sizing: Full coverage (slides60-1-20) — 20 slides covering TAM/SAM/SOM analysis, fleet operator segments, and geographic rollout",
        "§49 Competitive moat: Full coverage (slides60-21-40) — 20 slides covering IP portfolio, switching costs, and network effects",
        "Investor pathway: C-36 (TEA overview) → C-40 (NPV waterfall) → slidesBio-1 (carbon story) → slides60-1 (market size) — recommended 4-slide investor summary path"
      ],
      tags: ["TEA", "LCA", "market-sizing", "competitive-moat", "Part-VI-financial"]
    },
    fa: {
      title: "مدل‌های مالی بخش ششم: TEA، LCA، و اندازه‌گیری بازار — §۴۶-۴۹",
      narrative: "فصل‌های §۴۶-۴۹ مالی بخش ششم تحلیل اقتصادی-فنی (TEA)، ارزیابی چرخه عمر (LCA)، اندازه‌گیری بازار، و موضع‌گیری رقابتی را پوشش می‌دهند. پوشش در پورتال: §۴۶ (مدل TEA) → C-36-43؛ §۴۷ (حسابداری کربن LCA) → slidesBio-1-6؛ §۴۸ (اندازه‌گیری بازار) → slides60-1-20؛ §۴۹ (خندق رقابتی) → slides60-21-40.",
      strategic: "بخش مالی بیشترین درخواست را از سوی سرمایه‌گذاران دارد — مدل TEA مزیت هزینه ۲,۱۰۰ دلاری در هر خودرو در مقیاس را نشان می‌دهد، و LCA کاهش ۶۷ درصدی کربن در مقابل سیستم‌های خودمختار معمولی را نشان می‌دهد.",
      keyPoints: [
        "§۴۶ مدل TEA: پوشش کامل (C-36-43) — ۸ اسلاید که تجزیه هزینه BOM، منحنی‌های مقیاس تولید، و تحلیل NPV ۱۰ ساله را پوشش می‌دهد",
        "§۴۷ کربن LCA: پوشش کامل (slidesBio-1-6) — ۶ اسلاید که حسابداری کربن از گهواره تا دروازه، انتشارات دامنه ۱/۲/۳، و دوره بازگشت کربن را پوشش می‌دهد",
        "§۴۸ اندازه‌گیری بازار: پوشش کامل (slides60-1-20) — ۲۰ اسلاید که تحلیل TAM/SAM/SOM، بخش‌های اپراتور ناوگان، و استقرار جغرافیایی را پوشش می‌دهد",
        "§۴۹ خندق رقابتی: پوشش کامل (slides60-21-40) — ۲۰ اسلاید که پورتفولیوی IP، هزینه‌های تغییر، و اثرات شبکه را پوشش می‌دهد",
        "مسیر سرمایه‌گذار: C-36 (مرور TEA) → C-40 (آبشار NPV) → slidesBio-1 (داستان کربن) → slides60-1 (اندازه بازار) — مسیر خلاصه ۴ اسلایدی توصیه‌شده برای سرمایه‌گذاران"
      ],
      tags: ["TEA", "LCA", "اندازه‌گیری-بازار", "خندق-رقابتی", "مالی-بخش-ششم"]
    }
  },
  {
    id: 33,
    partId: "TOC-P7-3",
    act: "PartVII_Validation" as ActTOC,
    actLabel: ACT_LABELS_TOC.PartVII_Validation,
    imageUrl: imgTOC(63),
    en: {
      title: "Part VII Validation: Formal Proofs, Hardware-in-Loop, and Field Testing — §50-53",
      narrative: "Part VII Validation chapters §50-53 cover the complete validation pyramid: formal proofs (Coq), hardware-in-loop (HIL) testing, software-in-loop (SIL) simulation, and field testing results. Coverage in the portal: §50 (Coq proofs) → D-66-121; §51 (HIL testing) → C-44-50; §52 (SIL simulation) → C-51-57; §53 (field results) → C-58-69. Total: 79 slides.",
      strategic: "The validation section is the most important for regulatory approval — the Coq formal proofs provide mathematical certainty that the safety properties hold, while the field testing results provide empirical evidence across 2.3 million km.",
      keyPoints: [
        "§50 Coq formal proofs: Full coverage (D-66-121) — 56 slides covering all 847 safety theorems, proof scripts, and certification artifacts",
        "§51 HIL testing: Full coverage (C-44-50) — 7 slides covering HIL test bench architecture, 1,200 test scenarios, and pass/fail criteria",
        "§52 SIL simulation: Full coverage (C-51-57) — 7 slides covering simulation environment, Monte Carlo testing (10M scenarios), and edge case coverage",
        "§53 Field testing: Full coverage (C-58-69) — 12 slides covering 2.3M km field data, incident analysis, and performance metrics",
        "Regulator pathway: D-66 (safety theorem overview) → C-44 (HIL evidence) → C-58 (field data) → G-13 (regulator summary) — recommended 4-deck regulatory submission path"
      ],
      tags: ["formal-verification", "HIL-testing", "SIL-simulation", "field-testing", "Part-VII-validation"]
    },
    fa: {
      title: "اعتبارسنجی بخش هفتم: اثبات‌های رسمی، سخت‌افزار در حلقه، و آزمایش میدانی — §۵۰-۵۳",
      narrative: "فصل‌های §۵۰-۵۳ اعتبارسنجی بخش هفتم هرم اعتبارسنجی کامل را پوشش می‌دهند: اثبات‌های رسمی (Coq)، آزمایش سخت‌افزار در حلقه (HIL)، شبیه‌سازی نرم‌افزار در حلقه (SIL)، و نتایج آزمایش میدانی. پوشش در پورتال: §۵۰ (اثبات‌های Coq) → D-66-121؛ §۵۱ (آزمایش HIL) → C-44-50؛ §۵۲ (شبیه‌سازی SIL) → C-51-57؛ §۵۳ (نتایج میدانی) → C-58-69.",
      strategic: "بخش اعتبارسنجی برای تأیید نظارتی مهم‌ترین است — اثبات‌های رسمی Coq قطعیت ریاضی فراهم می‌کنند که خواص ایمنی برقرار هستند، در حالی که نتایج آزمایش میدانی شواهد تجربی در ۲.۳ میلیون کیلومتر فراهم می‌کنند.",
      keyPoints: [
        "§۵۰ اثبات‌های رسمی Coq: پوشش کامل (D-66-121) — ۵۶ اسلاید که همه ۸۴۷ قضیه ایمنی، اسکریپت‌های اثبات، و مصنوعات گواهی‌نامه را پوشش می‌دهد",
        "§۵۱ آزمایش HIL: پوشش کامل (C-44-50) — ۷ اسلاید که معماری میز آزمایش HIL، ۱,۲۰۰ سناریوی آزمایش، و معیارهای قبولی/رد را پوشش می‌دهد",
        "§۵۲ شبیه‌سازی SIL: پوشش کامل (C-51-57) — ۷ اسلاید که محیط شبیه‌سازی، آزمایش مونت کارلو (۱۰ میلیون سناریو)، و پوشش موارد لبه‌ای را پوشش می‌دهد",
        "§۵۳ آزمایش میدانی: پوشش کامل (C-58-69) — ۱۲ اسلاید که ۲.۳ میلیون کیلومتر داده میدانی، تحلیل حوادث، و معیارهای عملکرد را پوشش می‌دهد",
        "مسیر ناظر: D-66 (مرور قضیه ایمنی) → C-44 (شواهد HIL) → C-58 (داده میدانی) → G-13 (خلاصه ناظر) — مسیر ارسال نظارتی ۴ دکی توصیه‌شده"
      ],
      tags: ["تایید-رسمی", "آزمایش-HIL", "شبیه‌سازی-SIL", "آزمایش-میدانی", "اعتبارسنجی-بخش-هفتم"]
    }
  },
  {
    id: 34,
    partId: "TOC-P8-2",
    act: "PartVIII_Appendices" as ActTOC,
    actLabel: ACT_LABELS_TOC.PartVIII_Appendices,
    imageUrl: imgTOC(64),
    en: {
      title: "Part VIII Appendices: Mathematical Proofs, Glossary, and Reference Tables — §54-57",
      narrative: "Part VIII Appendices chapters §54-57 contain the complete mathematical derivations, glossary of 340 technical terms, reference tables (physical constants, material properties, performance benchmarks), and bibliography. Coverage in the portal: §54 (math appendix) → Deck A slides 1-36; §55 (glossary) → Deck B slides 1-36; §56 (reference tables) → Deck G slides 1-13; §57 (bibliography) → not yet covered (gap).",
      strategic: "The appendices are the foundation that makes all other claims verifiable — every equation in the main body has a derivation in §54, every term has a definition in §55, and every benchmark has a source in §56.",
      keyPoints: [
        "§54 Mathematical appendix: Full coverage (Deck A, 36 slides) — complete derivations of UFP algebra, LDA variants, and composition theorems",
        "§55 Glossary: Full coverage (Deck B, 36 slides) — 340 technical terms with formal definitions, cross-references, and usage examples",
        "§56 Reference tables: Partial coverage (Deck G, 13 slides) — physical constants, material properties, and performance benchmarks; 7 tables not yet covered",
        "§57 Bibliography: Absent (gap) — 847 citations not yet in portal; recommended addition: Deck G slides 14-20 with annotated bibliography",
        "Navigation: Deck A for mathematical depth → Deck B for terminology → Deck G for quick reference → return to main decks with full context"
      ],
      tags: ["appendices", "mathematical-proofs", "glossary", "reference-tables", "Part-VIII-appendices"]
    },
    fa: {
      title: "پیوست‌های بخش هشتم: اثبات‌های ریاضی، واژه‌نامه، و جداول مرجع — §۵۴-۵۷",
      narrative: "فصل‌های §۵۴-۵۷ پیوست‌های بخش هشتم شامل استخراج‌های ریاضی کامل، واژه‌نامه ۳۴۰ اصطلاح فنی، جداول مرجع (ثابت‌های فیزیکی، خواص مواد، معیارهای عملکرد)، و کتابنامه است. پوشش در پورتال: §۵۴ (پیوست ریاضی) → دک A اسلایدهای 1-36؛ §۵۵ (واژه‌نامه) → دک B اسلایدهای 1-36؛ §۵۶ (جداول مرجع) → دک G اسلایدهای 1-13؛ §۵۷ (کتابنامه) → هنوز پوشش داده نشده (شکاف).",
      strategic: "پیوست‌ها پایه‌ای هستند که همه ادعاهای دیگر را قابل تأیید می‌کنند — هر معادله در متن اصلی دارای استخراج در §۵۴ است، هر اصطلاح دارای تعریف در §۵۵ است، و هر معیار دارای منبع در §۵۶ است.",
      keyPoints: [
        "§۵۴ پیوست ریاضی: پوشش کامل (دک A، ۳۶ اسلاید) — استخراج‌های کامل جبر UFP، انواع LDA، و قضایای ترکیب",
        "§۵۵ واژه‌نامه: پوشش کامل (دک B، ۳۶ اسلاید) — ۳۴۰ اصطلاح فنی با تعاریف رسمی، ارجاعات متقاطع، و مثال‌های استفاده",
        "§۵۶ جداول مرجع: پوشش جزئی (دک G، ۱۳ اسلاید) — ثابت‌های فیزیکی، خواص مواد، و معیارهای عملکرد؛ ۷ جدول هنوز پوشش داده نشده",
        "§۵۷ کتابنامه: غایب (شکاف) — ۸۴۷ ارجاع هنوز در پورتال نیستند؛ اضافه‌کردن توصیه‌شده: اسلایدهای G 14-20 با کتابنامه حاشیه‌نویسی شده",
        "ناوبری: دک A برای عمق ریاضی → دک B برای اصطلاح‌شناسی → دک G برای مرجع سریع → بازگشت به دک‌های اصلی با زمینه کامل"
      ],
      tags: ["پیوست‌ها", "اثبات‌های-ریاضی", "واژه‌نامه", "جداول-مرجع", "پیوست‌های-بخش-هشتم"]
    }
  },
  {
    id: 35,
    partId: "TOC-GLOBAL-3",
    act: "PartI_Executive" as ActTOC,
    actLabel: ACT_LABELS_TOC.PartI_Executive,
    imageUrl: imgTOC(35),
    en: {
      title: "Coverage Gap Analysis: Remaining Absent Sections and Recommended Additions",
      narrative: "This slide provides the complete coverage gap analysis for the portal as of the current session (425 slides). Three sections remain Absent: §57 Bibliography (847 citations), §48.3 Geographic rollout model (detailed country-by-country analysis), and §22.4 Quantum computing integration roadmap. Two sections are Partial: §56 Reference tables (7 of 12 tables covered) and §49.2 Patent claim mapping (3 of 8 claim families covered).",
      strategic: "The gap analysis is the living roadmap for portal expansion — each Absent section represents a future deck addition that would increase the portal's completeness score from the current 94% to 100%.",
      keyPoints: [
        "Absent §57 Bibliography: 847 citations not yet in portal — recommended: Deck G slides 14-20 (7 slides) with annotated bibliography organized by topic",
        "Absent §48.3 Geographic rollout: country-by-country TAM analysis not yet in portal — recommended: slides60 extension (slides 41-50, 10 slides) with country heat maps",
        "Absent §22.4 Quantum roadmap: quantum computing integration timeline not yet in portal — recommended: Deck A extension (slides 37-42, 6 slides) with quantum algorithm analysis",
        "Partial §56 Reference tables: 5 of 12 reference tables missing — recommended: Deck G slides 14-18 (5 slides) with physical constants and material properties tables",
        "Current completeness: 94% (425/450 planned slides) — 25 slides remaining to reach 100% coverage; priority order: Bibliography → Geographic rollout → Reference tables → Quantum roadmap"
      ],
      tags: ["coverage-gap-analysis", "portal-completeness", "roadmap", "absent-sections", "TOC-GLOBAL"]
    },
    fa: {
      title: "تحلیل شکاف پوشش: بخش‌های غایب باقیمانده و اضافه‌کردن‌های توصیه‌شده",
      narrative: "این اسلاید تحلیل شکاف پوشش کامل برای پورتال تا جلسه فعلی (۴۲۵ اسلاید) را ارائه می‌دهد. سه بخش غایب باقی مانده: §۵۷ کتابنامه (۸۴۷ ارجاع)، §۴۸.۳ مدل استقرار جغرافیایی (تحلیل تفصیلی کشور به کشور)، و §۲۲.۴ نقشه راه یکپارچه‌سازی محاسبات کوانتومی. دو بخش جزئی: §۵۶ جداول مرجع (۷ از ۱۲ جدول پوشش داده شده) و §۴۹.۲ نگاشت ادعای ثبت اختراع (۳ از ۸ خانواده ادعا پوشش داده شده).",
      strategic: "تحلیل شکاف نقشه راه زنده برای گسترش پورتال است — هر بخش غایب نشان‌دهنده یک اضافه‌کردن دک آینده است که امتیاز کامل بودن پورتال را از ۹۴ درصد فعلی به ۱۰۰ درصد افزایش می‌دهد.",
      keyPoints: [
        "§۵۷ کتابنامه غایب: ۸۴۷ ارجاع هنوز در پورتال نیستند — توصیه‌شده: اسلایدهای G 14-20 (۷ اسلاید) با کتابنامه حاشیه‌نویسی شده سازمان‌یافته بر اساس موضوع",
        "§۴۸.۳ استقرار جغرافیایی غایب: تحلیل TAM کشور به کشور هنوز در پورتال نیست — توصیه‌شده: گسترش slides60 (اسلایدهای 41-50، ۱۰ اسلاید) با نقشه‌های حرارتی کشور",
        "§۲۲.۴ نقشه راه کوانتومی غایب: جدول زمانی یکپارچه‌سازی محاسبات کوانتومی هنوز در پورتال نیست — توصیه‌شده: گسترش دک A (اسلایدهای 37-42، ۶ اسلاید) با تحلیل الگوریتم کوانتومی",
        "§۵۶ جداول مرجع جزئی: ۵ از ۱۲ جدول مرجع مفقود هستند — توصیه‌شده: اسلایدهای G 14-18 (۵ اسلاید) با جداول ثابت‌های فیزیکی و خواص مواد",
        "کامل بودن فعلی: ۹۴ درصد (۴۲۵/۴۵۰ اسلاید برنامه‌ریزی شده) — ۲۵ اسلاید باقیمانده برای رسیدن به پوشش ۱۰۰ درصد؛ ترتیب اولویت: کتابنامه → استقرار جغرافیایی → جداول مرجع → نقشه راه کوانتومی"
      ],
      tags: ["تحلیل-شکاف-پوشش", "کامل-بودن-پورتال", "نقشه-راه", "بخش‌های-غایب", "TOC-GLOBAL"]
    }
  }
];
