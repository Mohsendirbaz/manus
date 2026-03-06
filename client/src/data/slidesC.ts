// MVD: 2.00 | Source: GA_IMPL_2026_001 | Slides: 67 | Lang: EN+FA
// Deck C — Ghost Autonomy Implementation (60 slides)
// Source: GA_IMPL_2026_001_Source_Package
// Theme: Amber/Gold (#D97706) — Implementation & Engineering

export type ActC =
  | "Executive"
  | "PDC"
  | "SAGP"
  | "PhysicsFound"
  | "ArchDeep"
  | "Financial"
  | "Validation"
  | "Integration";

export interface SlideC {
  id: number;
  act: ActC;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: {
    title: string;
    narrative: string;
    strategic: string;
    keyPoints: string[];
    tags: string[];
  };
  fa: {
    title: string;
    narrative: string;
    strategic: string;
    keyPoints: string[];
    tags: string[];
  };
}

export const ACT_LABELS_C: Record<ActC, { en: string; fa: string }> = {
  Executive:    { en: "Executive Vision",      fa: "چشم‌انداز اجرایی" },
  PDC:          { en: "Design Philosophy",     fa: "فلسفه طراحی" },
  SAGP:         { en: "Strategic Assets",      fa: "دارایی‌های استراتژیک" },
  PhysicsFound: { en: "Physics Foundation",    fa: "پایه فیزیکی" },
  ArchDeep:     { en: "Architecture Deep",     fa: "معماری عمیق" },
  Financial:    { en: "Financial & Business",  fa: "مالی و کسب‌وکار" },
  Validation:   { en: "Validation & Results",  fa: "اعتبارسنجی و نتایج" },
  Integration:  { en: "Integration & Future",  fa: "یکپارچه‌سازی و آینده" },
};

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";
const IMG_URLS: Record<number, string> = {
  1:  `${CDN}/c01_three_pillars-g6XQMEZamWaNDxCGasCQ3p.png`,
  2:  `${CDN}/c02_market_size-URAWY8devu3g5i3kkHNn5L.png`,
  3:  `${CDN}/c03_competitive-UTWmuRYgJUB99yK9fHtSn2.png`,
  4:  `${CDN}/c04_milestones-mnfAhoGZpcCQhpT9ooBgtq.png`,
  5:  `${CDN}/c05_value_prop-8BrK25pQvjyo4Eq3ZkHVaz.png`,
  6:  `${CDN}/c06_provenance-JqRjsUWNXbFXaujUt8mMKX.png`,
  7:  `${CDN}/c07_risk_mgmt-iLA7rzAX3HfhUV4ktjsj25.png`,
  8:  `${CDN}/c08_roadmap-4utYrb4fS6aERzHA7brBZK.png`,
  9: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c09_pdc_thesis_v2_e82975ac.png",
  10: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c10_agent_world_causality-4xkAbYX8wHA3iTKHD5ZLBq.png",
  11: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c11_ufp_signal-EvUeFRopLJCPUoaYsHyRxS.png",
  12: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c12_lda_variants-BrRxAxq6a44Smtacv9uvH6.png",
  13: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c13_composition_theorems-dNNdrXMjJauTbd33nyEGQZ.png",
  14: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c14_design_contracts-cftTRxdayp7Tz8GZWFaQA9.png",
  15: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c15_pdc_abstraction-7jJZSEjcpVyFV3RPnaKayk.png",
  16: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c16_sagp_overview-4BxcNGBzw7DQYkKZ78zSrH.png",
  17: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c17_bilinear_provenance-aPaPLUN4wtfAEqc7nuBd2f.png",
  18: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c18_hpsa_supply-GkaM5qTihfcpVVLciuWvA2.png",
  19: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c19_ip_moat-L4PxxamQJwBcNjpRK76aGE.png",
  20: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c20_market_position-kB62FuUJjaffhZYoULw6dD.png",
  21: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c21_regulatory-3m995vdHZE26nbUGHZRn4m.png",
  22: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c22_physics_foundation-3J372xYws9DLEGcaaejEGo.png",
  23: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c23_governing_eq-eyiWmeJsESDwaq49nRUofP.png",
  24: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c24_pbe_moments-Qn5T4fZ7eccpzAZnLhn35P.png",
  25: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c25_uncertainty_types-RmwogKFLfk9HV4ooZkRUqo.png",
  26: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c26_signal_processing-VyL8gTopxecM8MFiNp9gBe.png",
  27: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c27_isomorphism-kZddof4VxzFLY3bnVqr4tn.png",
  28: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c28_picapd_isa-B5FB5rZbsS8V6LrRJARyYs.png",
  29: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c29_queen_bee_bft-SqmyVHkyjJjp7Dy4SBzMkK.png",
  30: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c30_memory_model-Moq4jgXFvGaagbWq9w2hJK.png",
  31: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c31_t0_manager-nGS6pEjnWTCc7bLXCGfDA7.png",
  32: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c32_silicon_design-at2NAofRmMKSin9cCnbajN.png",
  33: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c33_signal_processing_pipeline-YVgGuiKWMet5zoiUns7iP4.png",
  34: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c34_tea_analysis-Wk7EcBpzG37jwaBsMJRp9S.png",
  35: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c35_lca_lifecycle-c97J6gBLY3H2kCfufzpC34.png",
  36: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c36_valuation-CP9Amfk7HikhWVQo3SYeZa.png",
  37: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c37_validation_framework-7BU3MqkBfn5gwiBRHEwmw6.png",
  38: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c38_asil_d-NJfLeMt8PtTcujrwLGg3bu.png",
  39: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c39_perf_benchmarks-N2FxomjvY3mUYCnvGZmzYE.png",
  40: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c40_sensor_fusion-AarAwmSgi9UaCJNMBcC8qR.png",
  41: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c41_ipo_nasdaq-PKKN3YHQ9rRU9YbsD4fVir.png",
  42: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c42_real_world-cmSWDaTevuahC2NMMRuz9m.png",
  43: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c43_integration_roadmap-euDj9TYDwtV3qUaT8ywiKX.png",
  44: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c44_future_arch-ciLMzL9DaKWKgygxYKraD2.png",
  45: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c45_benchmark_orin-PNmgJcAvug6Lan5vU2osmu.png",
  46: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c46_biomass_gasification-9xBcB56jNwsyx7EPqWXSvF.png",
  47: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c47_edge_deployment-mFcb32RXLeZuNtP8eKtroc.png",
  48: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c48_global_expansion-ZXqhZakHFeT9vX2uYpJ4Xn.png",
  49: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c49_standards-Cy4MUarSrii5ba5GP6Morr.png",
  50: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c50_market_sizing_tam_sam_som-aamMaS4c3EXpMZcPFjhkcB.png",
  51: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c51_advisory_board-QNVgjpDYqhTKkGn6yzCvKC.png",
  52: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c52_ip_portfolio-cwSCuafgSvdt3cxRzhRDLr.png",
  53: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c53_exit_strategy-AiDbRx2ghDSLeKGx9ygfPk.png",
  54: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c54_risk_matrix-Y5jGvKcDvXLpD5cBbbohAv.png",
  55: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c55_competitive_moat-N7hVMTB9nVXiqnX2o5RbT5.png",
  56: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c56_tech_differentiation-kz8eeGpfyGKSsZZxqcte6u.png",
  57: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c57_call_to_action-THCTaWa8CXtoGGhZLRAUe5.png",
  58: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c58_multi_agent-6vUUM3vXAorPrehv8Kao7S.png",
  59: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c59_swarm_intelligence-Yy6EuNb5ePvXFw3GnQevRW.png",
  60: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c60_distributed_consensus-QMUqBgQ9qXfbSWUUPPbYuB.png",
  61: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c61_fault_tolerance-KppHkALiBZRxHJa8PV93p4.png",
  62: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c62_system_resilience-XNSeWghT7kntgDoy8QAwd6.png",
  63: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c63_v2x_protocols-Rbis588iTNNF4u77KmTsU2.png",
  64: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c64_cybersecurity-AwgWxoJ7hNbdmpRJmCmMfV.png",
  65: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c65_information_geometry_d3f76609.png",
  66: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c66_category_theory_d0c180a0.png",
  67: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c67_epistemic_laws_6ee99ebd.png",
  68: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c68_entropy_production_8d91f9f7.png",
  69: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c69_free_energy_8b6add5b.png",
  70: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c70_symmetry_groups_e6aea2ac.png",
  71: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c71_formal_verification_nn_a9c34934.png",
  72: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c72_runtime_monitoring_7ddd8123.png",
  73: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c73_smt_solver_961bfbfb.png",
  74: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/c74_stl_monitoring_1a256fa1.png",
};

const imgC = (n: number) => IMG_URLS[n] || "";

export const slidesC: SlideC[] = [
  // ── ACT 1: Executive Vision (1–8) ──────────────────────────────────────────
  {
    id: 1, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(1),
    en: {
      title: "Ghost Autonomy: Three Pillars of Mathematical Safety",
      narrative: "Ghost Autonomy is built on three inseparable pillars: Mathematical Universality (all physical phenomena reduce to bilinear forms), Computational Efficiency (89.7:1 moment compression enables real-time operation), and Physical Validation (conservation laws enforced at gate level, not approximated in software). These three pillars together constitute a fundamentally different approach to autonomous driving safety.",
      strategic: "The Ghost EPU is not an incremental improvement over existing neural accelerators. It is a category-defining processor whose correctness guarantees derive from physics, not from statistical training. This distinction is the foundation of every competitive advantage, regulatory argument, and valuation claim in this document.",
      keyPoints: [
        "Mathematical Universality: all physical phenomena reduce to bilinear forms B(u,v)",
        "Computational Efficiency: 89.7:1 moment compression ratio enables real-time PBE solving",
        "Physical Validation: conservation laws enforced at gate level — not approximated",
        "Three pillars are inseparable: remove any one and the safety guarantee collapses",
        "Certification path: physics-grounded guarantees satisfy ISO 26262 ASIL-D without probabilistic ML",
      ],
      tags: ["Vision", "Safety", "Bilinear Forms", "EPU", "Ghost Autonomy"],
    },
    fa: {
      title: "Ghost Autonomy: سه ستون ایمنی ریاضی",
      narrative: "Ghost Autonomy بر سه ستون جدایی‌ناپذیر بنا شده است: جهانی‌بودن ریاضی (همه پدیده‌های فیزیکی به فرم‌های دوخطی تقلیل می‌یابند)، کارایی محاسباتی (نسبت فشرده‌سازی ۸۹.۷:۱ عملیات بلادرنگ را ممکن می‌سازد)، و اعتبارسنجی فیزیکی (قوانین بقا در سطح گیت اجرا می‌شوند، نه تقریب زده در نرم‌افزار).",
      strategic: "EPU Ghost یک پردازنده تعریف‌کننده دسته است که صحت آن از فیزیک مشتق می‌شود، نه از آموزش آماری. این تمایز پایه هر مزیت رقابتی، استدلال نظارتی، و ادعای ارزش‌گذاری در این سند است.",
      keyPoints: [
        "جهانی‌بودن ریاضی: همه پدیده‌های فیزیکی به B(u,v) تقلیل می‌یابند",
        "کارایی محاسباتی: نسبت فشرده‌سازی ۸۹.۷:۱ حل بلادرنگ PBE را ممکن می‌سازد",
        "اعتبارسنجی فیزیکی: قوانین بقا در سطح گیت اجرا می‌شوند",
        "هر سه ستون جدایی‌ناپذیرند: حذف هر کدام تضمین ایمنی را از بین می‌برد",
        "مسیر گواهینامه: تضمین‌های فیزیک‌محور بدون ML احتمالاتی ISO 26262 ASIL-D را برآورده می‌کنند",
      ],
      tags: ["چشم‌انداز", "ایمنی", "فرم دوخطی", "EPU", "Ghost Autonomy"],
    },
  },
  {
    id: 2, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(2),
    en: {
      title: "Market Size & Opportunity: $2.1T by 2035",
      narrative: "The autonomous vehicle market is projected to reach $2.1 trillion by 2035, with the safety-critical compute subsegment representing $180B. Current solutions (NVIDIA Drive, Mobileye EyeQ) are probabilistic ML accelerators that cannot provide formal safety guarantees. Ghost EPU targets the $45B Tier-1 safety compute segment where ASIL-D certification is mandatory.",
      strategic: "TAM: $2.1T (full AV market). SAM: $180B (safety-critical compute). SOM: $45B (ASIL-D certified processors). Ghost EPU's physics-grounded approach is the only architecture that can achieve ASIL-D certification without probabilistic ML at the safety core — making it the only viable solution for Level 4/5 autonomy at scale.",
      keyPoints: [
        "TAM $2.1T by 2035 — full autonomous vehicle market",
        "SAM $180B — safety-critical compute subsegment",
        "SOM $45B — ASIL-D certified processor market",
        "Ghost EPU is the only architecture certifiable without probabilistic ML at safety core",
        "Tier-1 entry point: $45B ASIL-D certified compute segment is Ghost EPU's beachhead market",
      ],
      tags: ["Market", "TAM SAM SOM", "ASIL-D", "Level 4/5", "Valuation"],
    },
    fa: {
      title: "اندازه بازار و فرصت: ۲.۱ تریلیون دلار تا ۲۰۳۵",
      narrative: "بازار خودروهای خودمختار تا سال ۲۰۳۵ به ۲.۱ تریلیون دلار می‌رسد، با زیربخش محاسبات حیاتی ایمنی به ارزش ۱۸۰ میلیارد دلار. راه‌حل‌های فعلی (NVIDIA Drive، Mobileye EyeQ) شتاب‌دهنده‌های ML احتمالاتی هستند که نمی‌توانند تضمین‌های ایمنی رسمی ارائه دهند.",
      strategic: "TAM: ۲.۱ تریلیون دلار. SAM: ۱۸۰ میلیارد دلار. SOM: ۴۵ میلیارد دلار. رویکرد فیزیک‌محور Ghost EPU تنها معماری است که می‌تواند گواهینامه ASIL-D را بدون ML احتمالاتی در هسته ایمنی کسب کند.",
      keyPoints: [
        "TAM ۲.۱ تریلیون دلار تا ۲۰۳۵ — بازار کامل خودروهای خودمختار",
        "SAM ۱۸۰ میلیارد دلار — زیربخش محاسبات حیاتی ایمنی",
        "SOM ۴۵ میلیارد دلار — بازار پردازنده‌های گواهی‌شده ASIL-D",
        "Ghost EPU تنها معماری قابل گواهی‌سازی بدون ML احتمالاتی در هسته ایمنی است",
        "نقطه ورود Tier-1: بخش ۴۵ میلیارد دلاری محاسبات گواهی‌شده ASIL-D بازار اولیه Ghost EPU است",
      ],
      tags: ["بازار", "TAM SAM SOM", "ASIL-D", "سطح ۴/۵", "ارزش‌گذاری"],
    },
  },
  {
    id: 3, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(3),
    en: {
      title: "Competitive Landscape: Ghost EPU vs. the Field",
      narrative: "The competitive landscape for autonomous driving compute divides into three categories: (1) GPU-based ML accelerators (NVIDIA Drive Orin/Thor) — high performance, probabilistic, not ASIL-D certifiable at core; (2) Vision-specific ASICs (Mobileye EyeQ6) — optimized for perception, limited to camera, no formal guarantees; (3) Ghost EPU — physics-grounded, ASIL-D certifiable, multi-modal, formally verifiable.",
      strategic: "Key differentiators: Ghost EPU enforces conservation laws in hardware (competitors approximate them in software); Ghost EPU achieves 89.7:1 moment compression (competitors use full-resolution tensor operations); Ghost EPU's Queen Bee architecture provides Byzantine fault tolerance (competitors rely on software redundancy). No competitor can match all three simultaneously.",
      keyPoints: [
        "NVIDIA Drive Orin: 254 TOPS, probabilistic, not ASIL-D certifiable at safety core",
        "Mobileye EyeQ6: camera-optimized, no formal guarantees, limited sensor fusion",
        "Ghost EPU: physics-grounded, ASIL-D certifiable, 89.7:1 compression, Byzantine-tolerant",
        "No competitor enforces conservation laws in hardware",
        "Waymo custom silicon: application-specific, not general-purpose safety compute — different market",
      ],
      tags: ["Competition", "NVIDIA", "Mobileye", "ASIL-D", "Differentiation"],
    },
    fa: {
      title: "چشم‌انداز رقابتی: Ghost EPU در برابر رقبا",
      narrative: "چشم‌انداز رقابتی به سه دسته تقسیم می‌شود: (۱) شتاب‌دهنده‌های ML مبتنی بر GPU (NVIDIA Drive) — عملکرد بالا، احتمالاتی، قابل گواهی‌سازی ASIL-D نیست؛ (۲) ASICهای بینایی خاص (Mobileye EyeQ6) — بهینه برای ادراک، محدود به دوربین؛ (۳) Ghost EPU — فیزیک‌محور، قابل گواهی‌سازی ASIL-D، چندحسگره.",
      strategic: "تمایزات کلیدی: Ghost EPU قوانین بقا را در سخت‌افزار اجرا می‌کند؛ فشرده‌سازی ۸۹.۷:۱ گشتاور؛ تحمل خطای بیزانسی در معماری Queen Bee. هیچ رقیبی نمی‌تواند هر سه را همزمان داشته باشد.",
      keyPoints: [
        "NVIDIA Drive Orin: ۲۵۴ TOPS، احتمالاتی، قابل گواهی‌سازی ASIL-D نیست",
        "Mobileye EyeQ6: بهینه برای دوربین، بدون تضمین رسمی",
        "Ghost EPU: فیزیک‌محور، قابل گواهی‌سازی ASIL-D، فشرده‌سازی ۸۹.۷:۱",
        "هیچ رقیبی قوانین بقا را در سخت‌افزار اجرا نمی‌کند",
        "سیلیکون سفارشی Waymo: اختصاصی است، نه محاسبات ایمنی عمومی — بازار متفاوت",
      ],
      tags: ["رقابت", "NVIDIA", "Mobileye", "ASIL-D", "تمایز"],
    },
  },
  {
    id: 4, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(4),
    en: {
      title: "Strategic Goals 2026–2030: Four Milestones",
      narrative: "Ghost Autonomy's commercialization roadmap is structured around four milestones: (1) 2026 Q3 — PICAPD ISA tape-out at 7nm, first silicon validation; (2) 2027 Q1 — OEM integration pilot with Tier-1 automotive partner, ASIL-D certification process initiated; (3) 2028 Q2 — Series B funding round ($120M target), production-ready EPU; (4) 2030 — IPO on NASDAQ or dual-listing,  valuation target.",
      strategic: "Each milestone is gated by a technical proof: tape-out requires ISA conformance test suite passing 100%; OEM pilot requires ASIL-D pre-certification; Series B requires production yield >85%; IPO requires 3 OEM design wins. The milestones are not aspirational — they are contractually defined with specific measurable criteria.",
      keyPoints: [
        "2026 Q3: PICAPD ISA tape-out at 7nm, first silicon validation",
        "2027 Q1: OEM integration pilot, ASIL-D certification process initiated",
        "2028 Q2: Series B $120M, production-ready EPU with yield >85%",
        "2030: IPO,  valuation, 3 OEM design wins required",
        "PICAPD ISA: 7 instruction classes (P-I-C-A-P-D) map directly to physical conservation operators",
      ],
      tags: ["Roadmap", "Milestones", "IPO", "Series B", "OEM"],
    },
    fa: {
      title: "اهداف استراتژیک ۲۰۲۶–۲۰۳۰: چهار نقطه عطف",
      narrative: "نقشه راه تجاری‌سازی Ghost Autonomy حول چهار نقطه عطف ساختار یافته است: (۱) Q3 2026 — tape-out ISA PICAPD در ۷ نانومتر؛ (۲) Q1 2027 — پایلوت یکپارچه‌سازی OEM، آغاز فرآیند گواهی‌سازی ASIL-D؛ (۳) Q2 2028 — سری B (هدف ۱۲۰ میلیون دلار)؛ (۴) ۲۰۳۰ — IPO با ارزش‌گذاری .",
      strategic: "هر نقطه عطف با یک اثبات فنی مشروط است: tape-out نیاز به گذر ۱۰۰٪ مجموعه تست انطباق ISA دارد؛ پایلوت OEM نیاز به پیش‌گواهی ASIL-D دارد؛ سری B نیاز به بازده تولید بیش از ۸۵٪ دارد.",
      keyPoints: [
        "Q3 2026: tape-out ISA PICAPD در ۷ نانومتر، اولین اعتبارسنجی سیلیکون",
        "Q1 2027: پایلوت یکپارچه‌سازی OEM، آغاز فرآیند گواهی‌سازی ASIL-D",
        "Q2 2028: سری B ۱۲۰ میلیون دلار، EPU آماده تولید با بازده بیش از ۸۵٪",
        "۲۰۳۰: IPO، ارزش‌گذاری ، ۳ طراحی OEM",
        "ISA PICAPD: ۷ کلاس دستورالعمل مستقیماً به عملگرهای بقای فیزیکی نگاشته می‌شوند",
      ],
      tags: ["نقشه راه", "نقاط عطف", "IPO", "سری B", "OEM"],
    },
  },
  {
    id: 5, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(5),
    en: {
      title: "Value Proposition: Physics-Grounded vs. Probabilistic ML",
      narrative: "The fundamental differentiator of Ghost EPU is the distinction between physics-grounded safety and probabilistic ML safety. Probabilistic ML systems (GPT-style, CNN-based) can achieve high average-case performance but cannot provide formal worst-case guarantees. Ghost EPU enforces conservation laws (mass, momentum, energy) at the hardware level, making it the only architecture where safety is a mathematical theorem, not a statistical claim.",
      strategic: "For automotive OEMs, this distinction translates directly to regulatory risk: ISO 26262 ASIL-D requires formal proof of safety, not statistical evidence. Ghost EPU is the only processor that can provide this proof. For investors, this translates to defensible IP: the bilinear form mapping is patented, the PICAPD ISA is trade-secret protected, and the Queen Bee consensus protocol is novel.",
      keyPoints: [
        "Probabilistic ML: high average-case performance, no formal worst-case guarantees",
        "Ghost EPU: conservation laws enforced in hardware — safety is a theorem, not a statistic",
        "ISO 26262 ASIL-D requires formal proof — only Ghost EPU can provide it",
        "Defensible IP: bilinear form mapping (patent), PICAPD ISA (trade secret), Queen Bee (novel)",
        "Bilinear form B(u,v) = Σᵢ uᵢ·Kᵢⱼ·vⱼ: universal representation of all sensor-to-decision paths",
      ],
      tags: ["Value Proposition", "ASIL-D", "ISO 26262", "IP", "Safety Theorem"],
    },
    fa: {
      title: "ارزش پیشنهادی: فیزیک‌محور در برابر ML احتمالاتی",
      narrative: "تمایز اساسی Ghost EPU تفاوت بین ایمنی فیزیک‌محور و ایمنی ML احتمالاتی است. سیستم‌های ML احتمالاتی عملکرد متوسط بالایی دارند اما نمی‌توانند تضمین‌های رسمی بدترین حالت ارائه دهند. Ghost EPU قوانین بقا (جرم، تکانه، انرژی) را در سطح سخت‌افزار اجرا می‌کند.",
      strategic: "برای OEMهای خودروسازی، این تمایز مستقیماً به ریسک نظارتی تبدیل می‌شود: ISO 26262 ASIL-D نیاز به اثبات رسمی ایمنی دارد، نه شواهد آماری. Ghost EPU تنها پردازنده‌ای است که می‌تواند این اثبات را ارائه دهد.",
      keyPoints: [
        "ML احتمالاتی: عملکرد متوسط بالا، بدون تضمین رسمی بدترین حالت",
        "Ghost EPU: قوانین بقا در سخت‌افزار اجرا می‌شوند — ایمنی یک قضیه است، نه آمار",
        "ISO 26262 ASIL-D نیاز به اثبات رسمی دارد — فقط Ghost EPU می‌تواند آن را ارائه دهد",
        "IP قابل دفاع: نگاشت فرم دوخطی (پتنت)، ISA PICAPD (راز تجاری)، Queen Bee (نوآوری)",
        "فرم دوخطی B(u,v) = Σᵢ uᵢ·Kᵢⱼ·vⱼ: نمایش جهانی همه مسیرهای حسگر تا تصمیم",
      ],
      tags: ["ارزش پیشنهادی", "ASIL-D", "ISO 26262", "IP", "قضیه ایمنی"],
    },
  },
  {
    id: 6, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(6),
    en: {
      title: "Scientific Provenance: From IIT Dissertation to Silicon",
      narrative: "The Ghost EPU's mathematical core traces directly to Dr. Mohsen Dirbaz's IIT dissertation on bilinear form mapping in infinite-dimensional function spaces. The key insight — that biomass gasification dynamics and autonomous vehicle perception share the same mathematical structure — led to the realization that a single hardware primitive could solve both. This is not a metaphor: the same PICAPD instruction executes both the gasification moment equations and the vehicle state estimation equations.",
      strategic: "Scientific provenance is a competitive moat: the bilinear form mapping is not a design choice but a mathematical necessity derived from first principles. Competitors cannot replicate this without reproducing the 20-year research lineage. The IIT dissertation, the biomass gasification patents, and the PICAPD ISA form an unbroken chain of prior art that is both defensible and extensible.",
      keyPoints: [
        "IIT dissertation: bilinear form mapping in infinite-dimensional function spaces",
        "Key insight: biomass gasification and AV perception share identical mathematical structure",
        "Same PICAPD instruction executes both gasification moments and vehicle state estimation",
        "20-year research lineage creates an unbreakable competitive moat",
        "Queen Bee BFT: tolerates f = ⌊(n-1)/3⌋ Byzantine faults — proven optimal for async networks",
      ],
      tags: ["Scientific Provenance", "IIT", "Bilinear Forms", "Research Lineage", "IP Moat"],
    },
    fa: {
      title: "منشأ علمی: از رساله IIT تا سیلیکون",
      narrative: "هسته ریاضی Ghost EPU مستقیماً به رساله دکتری دکتر محسن دیرباز در IIT درباره نگاشت فرم دوخطی در فضاهای تابعی بی‌نهایت‌بعدی برمی‌گردد. بینش کلیدی — که دینامیک گازی‌سازی زیست‌توده و ادراک خودروی خودمختار ساختار ریاضی یکسانی دارند — به این درک منجر شد که یک primitive سخت‌افزاری واحد می‌تواند هر دو را حل کند.",
      strategic: "منشأ علمی یک خندق رقابتی است: نگاشت فرم دوخطی یک انتخاب طراحی نیست بلکه یک ضرورت ریاضی مشتق از اصول اولیه است. رقبا نمی‌توانند این را بدون بازتولید نسب تحقیقاتی ۲۰ ساله تکرار کنند.",
      keyPoints: [
        "رساله IIT: نگاشت فرم دوخطی در فضاهای تابعی بی‌نهایت‌بعدی",
        "بینش کلیدی: گازی‌سازی زیست‌توده و ادراک AV ساختار ریاضی یکسانی دارند",
        "همان دستور PICAPD هم معادلات گشتاور گازی‌سازی و هم تخمین حالت خودرو را اجرا می‌کند",
        "نسب تحقیقاتی ۲۰ ساله یک خندق رقابتی شکست‌ناپذیر ایجاد می‌کند",
        "Queen Bee BFT: f = ⌊(n-1)/3⌋ خطای بیزانس را تحمل می‌کند — بهینه اثبات‌شده برای شبکه‌های async",
      ],
      tags: ["منشأ علمی", "IIT", "فرم دوخطی", "نسب تحقیقاتی", "خندق IP"],
    },
  },
  {
    id: 7, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(7),
    en: {
      title: "Risk Management Framework: Technical, Regulatory, Market, Geopolitical",
      narrative: "Ghost Autonomy faces four categories of risk: (1) Technical — tape-out yield, timing closure, thermal management; (2) Regulatory — ASIL-D certification timeline, ISO 26262 compliance, regional type approval; (3) Market — OEM adoption pace, competing architectures, supply chain disruption; (4) Geopolitical — US export controls on semiconductor equipment, Iran sanctions, India-China tensions affecting supply chain.",
      strategic: "Each risk category has a specific mitigation strategy: Technical risks are mitigated by the 3-phase Byzantine protocol (hardware redundancy), formal verification of the ISA, and the STOP-5 platform profile. Regulatory risks are mitigated by early engagement with TÜV SÜD and DEKRA. Market risks are mitigated by the Quad-Plus Alliance. Geopolitical risks are mitigated by the HPSA vertical integration strategy.",
      keyPoints: [
        "Technical: tape-out yield risk mitigated by Byzantine redundancy and formal ISA verification",
        "Regulatory: ASIL-D timeline risk mitigated by early TÜV SÜD engagement",
        "Market: OEM adoption risk mitigated by Quad-Plus Alliance and SAGP partnerships",
        "Geopolitical: export control risk mitigated by HPSA vertical integration",
        "WAL throughput: 3.3 GB/sec sustained write bandwidth — sufficient for 1T sensor-state space",
      ],
      tags: ["Risk Management", "ASIL-D", "Geopolitical", "HPSA", "Byzantine"],
    },
    fa: {
      title: "چارچوب مدیریت ریسک: فنی، نظارتی، بازار، ژئوپلیتیک",
      narrative: "Ghost Autonomy با چهار دسته ریسک مواجه است: (۱) فنی — بازده tape-out، بستن زمان‌بندی، مدیریت حرارتی؛ (۲) نظارتی — جدول زمانی گواهی‌سازی ASIL-D؛ (۳) بازار — سرعت پذیرش OEM؛ (۴) ژئوپلیتیک — کنترل‌های صادراتی آمریکا بر تجهیزات نیمه‌هادی.",
      strategic: "هر دسته ریسک یک استراتژی کاهش خاص دارد: ریسک‌های فنی با پروتکل بیزانسی ۳ مرحله‌ای کاهش می‌یابند. ریسک‌های نظارتی با تعامل زودهنگام با TÜV SÜD. ریسک‌های بازار با اتحاد Quad-Plus. ریسک‌های ژئوپلیتیک با یکپارچه‌سازی عمودی HPSA.",
      keyPoints: [
        "فنی: ریسک بازده tape-out با افزونگی بیزانسی و تأیید رسمی ISA کاهش می‌یابد",
        "نظارتی: ریسک جدول زمانی ASIL-D با تعامل زودهنگام TÜV SÜD کاهش می‌یابد",
        "بازار: ریسک پذیرش OEM با اتحاد Quad-Plus و مشارکت‌های SAGP کاهش می‌یابد",
        "ژئوپلیتیک: ریسک کنترل صادرات با یکپارچه‌سازی عمودی HPSA کاهش می‌یابد",
        "توان عملیاتی WAL: ۳.۳ گیگابایت/ثانیه پهنای باند نوشتن پایدار — کافی برای فضای ۱ تریلیون حالت حسگر",
      ],
      tags: ["مدیریت ریسک", "ASIL-D", "ژئوپلیتیک", "HPSA", "بیزانس"],
    },
  },
  {
    id: 8, act: "Executive", actLabel: ACT_LABELS_C.Executive, imageUrl: imgC(8),
    en: {
      title: "Roadmap to Commercialization: 2026–2030",
      narrative: "The commercialization roadmap has five phases: Phase 0 (2025, complete) — IIT dissertation formalized, PICAPD ISA v1.0 specified, Queen Bee protocol proven in simulation. Phase 1 (2026) — 7nm tape-out, ISA conformance testing, first silicon. Phase 2 (2027) — OEM integration pilot, ASIL-D pre-certification, software-defined vehicle compatibility. Phase 3 (2028) — Series B, production ramp, three OEM design wins. Phase 4 (2030) — IPO, global deployment.",
      strategic: "The roadmap is not linear — it is a dependency graph. Phase 2 cannot begin until Phase 1 silicon passes Byzantine fault injection tests. Phase 3 cannot begin until ASIL-D pre-certification is achieved. This dependency structure is a feature, not a bug: it ensures that each phase builds on formally verified foundations rather than aspirational claims.",
      keyPoints: [
        "Phase 0 (2025): IIT formalized, PICAPD ISA v1.0, Queen Bee proven in simulation",
        "Phase 1 (2026): 7nm tape-out, ISA conformance, first silicon validation",
        "Phase 2 (2027): OEM pilot, ASIL-D pre-certification, SDV compatibility",
        "Phase 3–4 (2028–2030): Series B → production → IPO",
        "Moment compression: M0 (mass), M1 (momentum), M2 (energy) — three conserved quantities per gate",
      ],
      tags: ["Roadmap", "Commercialization", "Tape-out", "OEM", "IPO"],
    },
    fa: {
      title: "نقشه راه تجاری‌سازی: ۲۰۲۶–۲۰۳۰",
      narrative: "نقشه راه تجاری‌سازی پنج مرحله دارد: مرحله ۰ (۲۰۲۵، کامل) — رساله IIT رسمی‌سازی شد، ISA PICAPD v1.0 مشخص شد. مرحله ۱ (۲۰۲۶) — tape-out در ۷ نانومتر، تست انطباق ISA. مرحله ۲ (۲۰۲۷) — پایلوت OEM، پیش‌گواهی ASIL-D. مرحله ۳ (۲۰۲۸) — سری B، رمپ تولید. مرحله ۴ (۲۰۳۰) — IPO.",
      strategic: "نقشه راه خطی نیست — یک گراف وابستگی است. مرحله ۲ نمی‌تواند شروع شود تا زمانی که سیلیکون مرحله ۱ تست‌های تزریق خطای بیزانسی را پاس کند. این ساختار وابستگی یک ویژگی است، نه یک باگ.",
      keyPoints: [
        "مرحله ۰ (۲۰۲۵): رساله IIT رسمی‌سازی شد، PICAPD ISA v1.0، Queen Bee در شبیه‌سازی اثبات شد",
        "مرحله ۱ (۲۰۲۶): tape-out در ۷ نانومتر، انطباق ISA، اولین اعتبارسنجی سیلیکون",
        "مرحله ۲ (۲۰۲۷): پایلوت OEM، پیش‌گواهی ASIL-D، سازگاری SDV",
        "مرحله ۳–۴ (۲۰۲۸–۲۰۳۰): سری B → تولید → IPO",
        "فشرده‌سازی گشتاور: M0 (جرم)، M1 (تکانه)، M2 (انرژی) — سه کمیت بقا در هر دروازه",
      ],
      tags: ["نقشه راه", "تجاری‌سازی", "Tape-out", "OEM", "IPO"],
    },
  },

  // ── ACT 2: Philosophy of Design / PDC (9–15) ────────────────────────────────
  {
    id: 9, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(9),
    en: {
      title: "Why Design Philosophy Precedes Architecture: The PDC Thesis",
      narrative: "The PDC (Philosophy of Design and Contracts) thesis holds that architecture without philosophy is implementation without understanding. Every architectural decision in Ghost EPU — from the choice of bilinear forms as the computational primitive to the Queen Bee consensus protocol — is derivable from three philosophical commitments: (1) Determinism over probability, (2) Contracts over conventions, (3) Physics over heuristics.",
      strategic: "The PDC thesis has a practical consequence: it makes the architecture auditable. Any reviewer can trace any design decision back to a philosophical commitment, and any philosophical commitment back to a physical law. This auditability is not just intellectually satisfying — it is a regulatory requirement for ASIL-D certification, which demands that every design decision be traceable to a safety requirement.",
      keyPoints: [
        "PDC thesis: architecture without philosophy is implementation without understanding",
        "Three commitments: Determinism over probability, Contracts over conventions, Physics over heuristics",
        "Every design decision is traceable to a philosophical commitment and then to a physical law",
        "Auditability is a regulatory requirement for ASIL-D certification",
        "T-distance kappa(Sc): scale-invariant metric enabling cross-domain sensor fusion without unit conversion",
      ],
      tags: ["PDC", "Design Philosophy", "Determinism", "ASIL-D", "Auditability"],
    },
    fa: {
      title: "چرا فلسفه طراحی بر معماری مقدم است: پایان‌نامه PDC",
      narrative: "پایان‌نامه PDC (فلسفه طراحی و قراردادها) معتقد است که معماری بدون فلسفه، پیاده‌سازی بدون درک است. هر تصمیم معماری در Ghost EPU — از انتخاب فرم‌های دوخطی به عنوان primitive محاسباتی تا پروتکل اجماع Queen Bee — از سه تعهد فلسفی قابل استنتاج است: (۱) قطعیت بر احتمال، (۲) قراردادها بر قراردادها، (۳) فیزیک بر اکتشافی.",
      strategic: "پایان‌نامه PDC یک پیامد عملی دارد: معماری را قابل ممیزی می‌کند. هر بازبین می‌تواند هر تصمیم طراحی را به یک تعهد فلسفی و سپس به یک قانون فیزیکی ردیابی کند. این قابلیت ممیزی یک الزام نظارتی برای گواهی‌سازی ASIL-D است.",
      keyPoints: [
        "پایان‌نامه PDC: معماری بدون فلسفه، پیاده‌سازی بدون درک است",
        "سه تعهد: قطعیت بر احتمال، قراردادها بر قراردادها، فیزیک بر اکتشافی",
        "هر تصمیم طراحی به یک تعهد فلسفی و سپس به یک قانون فیزیکی قابل ردیابی است",
        "قابلیت ممیزی یک الزام نظارتی برای گواهی‌سازی ASIL-D است",
        "فاصله T با kappa(Sc): معیار مقیاس‌ناوردا که ترکیب حسگر بین‌حوزه‌ای بدون تبدیل واحد را ممکن می‌سازد",
      ],
      tags: ["PDC", "فلسفه طراحی", "قطعیت", "ASIL-D", "قابلیت ممیزی"],
    },
  },
  {
    id: 10, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(10),
    en: {
      title: "Conceptual System Model: Agent, World, Causality",
      narrative: "The Ghost Autonomy conceptual system model has three entities: (1) Agent — the autonomous vehicle, characterized by its state space S, action space A, and policy π: S→A; (2) World — the physical environment, characterized by its state space W and transition function T: W×A→W; (3) Causality — the causal graph C that constrains which world states can follow which agent actions. The Ghost EPU is the hardware that implements the Agent's policy π in real-time.",
      strategic: "The three-entity model has a critical implication: the Agent's policy must be defined over the causal graph C, not just over the world state W. This means the EPU must maintain a causal model of the world, not just a statistical model. This is the fundamental reason why probabilistic ML (which models P(W) but not C) cannot be the safety core of an autonomous vehicle.",
      keyPoints: [
        "Agent: state space S, action space A, policy π: S→A",
        "World: state space W, transition function T: W×A→W",
        "Causality: causal graph C constraining which world states follow which actions",
        "Policy must be defined over C (causal), not just W (statistical) — this rules out pure ML",
        "Eigenvalue decomposition: lambda_i eigenvalues of K encode physical stability — negative lambda = instability flag",
      ],
      tags: ["System Model", "Agent", "Causality", "Policy", "Causal Graph"],
    },
    fa: {
      title: "مدل سیستم مفهومی: عامل، جهان، علیت",
      narrative: "مدل سیستم مفهومی Ghost Autonomy سه موجودیت دارد: (۱) عامل — خودروی خودمختار با فضای حالت S، فضای عمل A، و سیاست π: S→A؛ (۲) جهان — محیط فیزیکی با فضای حالت W و تابع انتقال T: W×A→W؛ (۳) علیت — گراف علّی C که محدود می‌کند کدام حالات جهان می‌توانند از کدام اعمال عامل پیروی کنند.",
      strategic: "مدل سه‌موجودیتی یک پیامد حیاتی دارد: سیاست عامل باید روی گراف علّی C تعریف شود، نه فقط روی حالت جهان W. این به معنای آن است که EPU باید یک مدل علّی از جهان نگه دارد، نه فقط یک مدل آماری.",
      keyPoints: [
        "عامل: فضای حالت S، فضای عمل A، سیاست π: S→A",
        "جهان: فضای حالت W، تابع انتقال T: W×A→W",
        "علیت: گراف علّی C که محدود می‌کند کدام حالات جهان از کدام اعمال پیروی می‌کنند",
        "سیاست باید روی C (علّی) تعریف شود، نه فقط W (آماری) — این ML خالص را رد می‌کند",
        "تجزیه مقدار ویژه: مقادیر ویژه lambda_i از K پایداری فیزیکی را رمزگذاری می‌کنند — lambda منفی = پرچم ناپایداری",
      ],
      tags: ["مدل سیستم", "عامل", "علیت", "سیاست", "گراف علّی"],
    },
  },
  {
    id: 11, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(11),
    en: {
      title: "Autonomy as a Control Problem: System Boundary Definition",
      narrative: "Defining the system boundary is the most critical design decision in autonomous driving. Ghost Autonomy defines the boundary at the Observation/Action interface: the EPU receives observations O (sensor data) and produces actions A (steering, braking, acceleration). Everything inside this boundary is formally specified; everything outside is modeled as a stochastic disturbance. The key insight is that the boundary must be defined in terms of time, state, and history — not just instantaneous sensor readings.",
      strategic: "The time/state/history boundary definition has a concrete hardware consequence: the EPU must maintain a temporal state buffer that preserves the last N observation-action pairs. This buffer is not a software data structure — it is a hardware register file (the Event Registers E in the PICAPD ISA) that is formally part of the architectural state. This makes the temporal context a first-class hardware citizen, not an afterthought.",
      keyPoints: [
        "System boundary: Observation/Action interface — formally specified inside, stochastic outside",
        "Boundary defined in terms of time, state, and history — not just instantaneous readings",
        "Temporal state buffer: Event Registers E in PICAPD ISA — hardware, not software",
        "Temporal context is a first-class hardware citizen in Ghost EPU",
        "ASIL decomposition: Ghost EPU achieves ASIL-D by decomposing into two ASIL-B independent channels",
      ],
      tags: ["System Boundary", "Control Problem", "Temporal State", "Event Registers", "PICAPD"],
    },
    fa: {
      title: "خودمختاری به عنوان یک مسئله کنترل: تعریف مرز سیستم",
      narrative: "تعریف مرز سیستم حیاتی‌ترین تصمیم طراحی در رانندگی خودمختار است. Ghost Autonomy مرز را در رابط مشاهده/عمل تعریف می‌کند: EPU مشاهدات O (داده‌های حسگر) را دریافت و اعمال A (فرمان، ترمز، شتاب) تولید می‌کند. بینش کلیدی این است که مرز باید بر حسب زمان، حالت، و تاریخچه تعریف شود.",
      strategic: "تعریف مرز زمان/حالت/تاریخچه یک پیامد سخت‌افزاری مشخص دارد: EPU باید یک بافر حالت زمانی نگه دارد که N جفت مشاهده-عمل آخر را حفظ کند. این بافر یک ساختار داده نرم‌افزاری نیست — یک فایل رجیستر سخت‌افزاری است (رجیسترهای رویداد E در ISA PICAPD).",
      keyPoints: [
        "مرز سیستم: رابط مشاهده/عمل — داخل رسمی مشخص، خارج اغتشاش تصادفی",
        "مرز بر حسب زمان، حالت، و تاریخچه تعریف می‌شود — نه فقط خوانش‌های آنی",
        "بافر حالت زمانی: رجیسترهای رویداد E در ISA PICAPD — سخت‌افزار، نه نرم‌افزار",
        "زمینه زمانی یک شهروند سخت‌افزاری درجه اول در Ghost EPU است",
        "تجزیه ASIL: Ghost EPU با تجزیه به دو کانال مستقل ASIL-B به ASIL-D دست می‌یابد",
      ],
      tags: ["مرز سیستم", "مسئله کنترل", "حالت زمانی", "رجیسترهای رویداد", "PICAPD"],
    },
  },
  {
    id: 12, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(12),
    en: {
      title: "Contract-First Interfaces: From Semantics to Signals",
      narrative: "The Contract-First Interface principle holds that every interface in the Ghost system must be specified at the semantic level before it is implemented at the signal level. The Representation Hierarchy defines four levels: (1) Physical signals (voltages, currents); (2) Digital values (bits, words); (3) Typed data (integers, floats, fixed-point); (4) Semantic objects (moments, events, decisions). The PICAPD ISA operates at level 4 — it manipulates semantic objects, not raw bits.",
      strategic: "Mid-Layer Contracts (Perception→Prediction→Decision) are the key innovation: each layer has a formal contract specifying its input type, output type, and invariants. The Perception contract guarantees that its output is a valid moment vector M ∈ ℝ^k satisfying Hausdorff conditions. The Prediction contract guarantees that its output is a valid probability distribution over future states. The Decision contract guarantees ASIL-D compliance.",
      keyPoints: [
        "Representation Hierarchy: Physical → Digital → Typed → Semantic (4 levels)",
        "PICAPD ISA operates at level 4 — manipulates semantic objects, not raw bits",
        "Mid-Layer Contracts: Perception→Prediction→Decision with formal invariants",
        "Perception contract guarantees valid moment vector M ∈ ℝ^k satisfying Hausdorff conditions",
        "Formal verification: model-checked against TLA+ specifications — all safety properties machine-proved",
      ],
      tags: ["Contract-First", "Representation Hierarchy", "Semantic Objects", "PICAPD", "Hausdorff"],
    },
    fa: {
      title: "رابط‌های قرارداد-اول: از معناشناسی تا سیگنال‌ها",
      narrative: "اصل رابط قرارداد-اول معتقد است که هر رابط در سیستم Ghost باید در سطح معنایی مشخص شود قبل از اینکه در سطح سیگنال پیاده‌سازی شود. سلسله‌مراتب نمایش چهار سطح تعریف می‌کند: (۱) سیگنال‌های فیزیکی؛ (۲) مقادیر دیجیتال؛ (۳) داده‌های نوع‌دار؛ (۴) اشیاء معنایی (گشتاورها، رویدادها، تصمیمات). ISA PICAPD در سطح ۴ عمل می‌کند.",
      strategic: "قراردادهای لایه میانی (ادراک→پیش‌بینی→تصمیم) نوآوری کلیدی هستند: هر لایه یک قرارداد رسمی دارد که نوع ورودی، نوع خروجی، و ثابت‌ها را مشخص می‌کند. قرارداد ادراک تضمین می‌کند که خروجی آن یک بردار گشتاور معتبر M ∈ ℝ^k است که شرایط Hausdorff را برآورده می‌کند.",
      keyPoints: [
        "سلسله‌مراتب نمایش: فیزیکی → دیجیتال → نوع‌دار → معنایی (۴ سطح)",
        "ISA PICAPD در سطح ۴ عمل می‌کند — اشیاء معنایی را دستکاری می‌کند، نه بیت‌های خام",
        "قراردادهای لایه میانی: ادراک→پیش‌بینی→تصمیم با ثابت‌های رسمی",
        "قرارداد ادراک بردار گشتاور معتبر M ∈ ℝ^k را با شرایط Hausdorff تضمین می‌کند",
        "تأیید رسمی: در برابر مشخصات TLA+ بررسی مدل شده — همه خواص ایمنی به‌صورت ماشینی اثبات شده‌اند",
      ],
      tags: ["قرارداد-اول", "سلسله‌مراتب نمایش", "اشیاء معنایی", "PICAPD", "Hausdorff"],
    },
  },
  {
    id: 13, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(13),
    en: {
      title: "Determinism & Reproducibility: Why Non-Determinism Cannot Be the Safety Core",
      narrative: "Determinism is not a performance optimization in Ghost EPU — it is a safety requirement. ISO 26262 ASIL-D requires that any safety-critical function be reproducible: given the same inputs, it must always produce the same outputs. Non-deterministic ML systems (dropout, stochastic sampling, floating-point non-associativity) violate this requirement by definition. Ghost EPU achieves determinism through three mechanisms: (1) fixed-point arithmetic with formal rounding specifications; (2) deterministic instruction scheduling (no out-of-order execution in safety-critical paths); (3) Byzantine consensus that eliminates non-determinism from distributed decisions.",
      strategic: "The reproducibility requirement has a practical consequence for debugging: any safety incident can be replayed exactly from the event log. This is not possible with probabilistic ML systems, where the same inputs can produce different outputs depending on random seeds, floating-point rounding order, and hardware temperature. Ghost EPU's determinism makes it the only architecture where post-incident analysis is formally complete.",
      keyPoints: [
        "ASIL-D requires reproducibility: same inputs must always produce same outputs",
        "Non-deterministic ML (dropout, stochastic sampling) violates ASIL-D by definition",
        "Ghost EPU determinism: fixed-point arithmetic + deterministic scheduling + Byzantine consensus",
        "Reproducibility enables complete post-incident analysis — impossible with probabilistic ML",
        "Sensor fusion latency: <2ms end-to-end from raw sensor data to fused state estimate at 512 registers",
      ],
      tags: ["Determinism", "Reproducibility", "ASIL-D", "Fixed-Point", "Post-Incident Analysis"],
    },
    fa: {
      title: "قطعیت و تکرارپذیری: چرا عدم قطعیت نمی‌تواند هسته ایمنی باشد",
      narrative: "قطعیت در Ghost EPU یک بهینه‌سازی عملکرد نیست — یک الزام ایمنی است. ISO 26262 ASIL-D نیاز دارد که هر تابع حیاتی ایمنی تکرارپذیر باشد: با ورودی‌های یکسان، باید همیشه خروجی‌های یکسان تولید کند. سیستم‌های ML غیرقطعی (dropout، نمونه‌گیری تصادفی) این الزام را نقض می‌کنند.",
      strategic: "الزام تکرارپذیری یک پیامد عملی برای اشکال‌زدایی دارد: هر حادثه ایمنی می‌تواند دقیقاً از لاگ رویداد بازپخش شود. این با سیستم‌های ML احتمالاتی ممکن نیست. قطعیت Ghost EPU آن را تنها معماری می‌کند که تحلیل پس از حادثه رسماً کامل است.",
      keyPoints: [
        "ASIL-D نیاز به تکرارپذیری دارد: ورودی‌های یکسان باید همیشه خروجی‌های یکسان تولید کنند",
        "ML غیرقطعی (dropout، نمونه‌گیری تصادفی) ASIL-D را نقض می‌کند",
        "قطعیت Ghost EPU: حساب نقطه ثابت + زمان‌بندی قطعی + اجماع بیزانسی",
        "تکرارپذیری تحلیل کامل پس از حادثه را ممکن می‌سازد — با ML احتمالاتی غیرممکن است",
        "تأخیر ترکیب حسگر: <۲ میلی‌ثانیه از داده خام حسگر تا تخمین حالت ترکیبی در ۵۱۲ رجیستر",
      ],
      tags: ["قطعیت", "تکرارپذیری", "ASIL-D", "نقطه ثابت", "تحلیل پس از حادثه"],
    },
  },
  {
    id: 14, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(14),
    en: {
      title: "Explainability & Inspectability: Auditability as a Design Requirement",
      narrative: "Explainability in Ghost EPU is not a post-hoc rationalization — it is a structural property of the architecture. Every decision made by the EPU can be traced to a specific instruction in the PICAPD ISA, which in turn can be traced to a specific mathematical operation (AGM iteration, elliptic integral evaluation, moment transport). This traceability chain is not optional — it is enforced by the ISA's instruction format, which includes a 4-bit 'justification field' that records which physical law motivated the instruction.",
      strategic: "The justification field is a regulatory innovation: it allows a TÜV SÜD auditor to verify that every computation in the safety-critical path is motivated by a physical law, not by a heuristic. This is the hardware equivalent of a mathematical proof — each step is justified by a previously established theorem. No other autonomous driving processor has this property.",
      keyPoints: [
        "Explainability is structural, not post-hoc — every decision traceable to a PICAPD instruction",
        "Each instruction traceable to a specific mathematical operation (AGM, elliptic, moment transport)",
        "4-bit justification field in PICAPD instruction format records motivating physical law",
        "Justification field enables TÜV SÜD auditors to verify physics-motivated computation",
        "Power envelope: <15W at full 512-register utilization — 10x more efficient than GPU-based alternatives",
      ],
      tags: ["Explainability", "Inspectability", "PICAPD", "Justification Field", "TÜV SÜD"],
    },
    fa: {
      title: "قابلیت توضیح و بازرسی: قابلیت ممیزی به عنوان یک الزام طراحی",
      narrative: "قابلیت توضیح در Ghost EPU یک توجیه پس از واقعه نیست — یک ویژگی ساختاری معماری است. هر تصمیم گرفته شده توسط EPU می‌تواند به یک دستور خاص در ISA PICAPD ردیابی شود، که به نوبه خود می‌تواند به یک عملیات ریاضی خاص ردیابی شود. این زنجیره ردیابی اختیاری نیست — توسط فرمت دستور ISA اجرا می‌شود.",
      strategic: "فیلد توجیه یک نوآوری نظارتی است: به یک ممیز TÜV SÜD اجازه می‌دهد تأیید کند که هر محاسبه در مسیر حیاتی ایمنی توسط یک قانون فیزیکی انگیزه‌بخشی شده است، نه یک اکتشافی. هیچ پردازنده رانندگی خودمختار دیگری این ویژگی را ندارد.",
      keyPoints: [
        "قابلیت توضیح ساختاری است، نه پس از واقعه — هر تصمیم به یک دستور PICAPD قابل ردیابی است",
        "هر دستور به یک عملیات ریاضی خاص قابل ردیابی است (AGM، بیضوی، انتقال گشتاور)",
        "فیلد توجیه ۴ بیتی در فرمت دستور PICAPD قانون فیزیکی انگیزه‌بخش را ثبت می‌کند",
        "فیلد توجیه به ممیزان TÜV SÜD اجازه می‌دهد محاسبه انگیزه‌بخشی فیزیک را تأیید کنند",
        "محدوده توان: <۱۵ وات در استفاده کامل از ۵۱۲ رجیستر — ۱۰ برابر کارآمدتر از جایگزین‌های GPU",
      ],
      tags: ["قابلیت توضیح", "بازرسی", "PICAPD", "فیلد توجیه", "TÜV SÜD"],
    },
  },
  {
    id: 15, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(15),
    en: {
      title: "Documentation as Architecture: Semantic Versioning & Traceability",
      narrative: "In Ghost Autonomy, documentation is not a description of the architecture — it is part of the architecture. The Documentation-as-Architecture principle holds that every document (ISA specification, safety case, test plan) is a formal artifact with a semantic version number, a set of invariants, and a set of backward-compatibility guarantees. A change to the ISA specification that breaks a safety case invariant is treated as an architectural defect, not a documentation update.",
      strategic: "The traceability requirement — Requirements→Design→Implementation→Test — is enforced by the documentation system. Every requirement has a unique ID (e.g., REQ-SAFETY-042), every design decision references the requirements it satisfies, every implementation references the design decisions it implements, and every test references the implementation it validates. This four-level traceability is a prerequisite for ASIL-D certification.",
      keyPoints: [
        "Documentation-as-Architecture: documents are formal artifacts with semantic versions and invariants",
        "ISA specification change that breaks safety case invariant = architectural defect",
        "Traceability: Requirements→Design→Implementation→Test with unique IDs at each level",
        "Four-level traceability is a prerequisite for ASIL-D certification",
        "Deterministic timing: WCET bounds provable at design time — no runtime jitter from garbage collection",
      ],
      tags: ["Documentation", "Semantic Versioning", "Traceability", "ASIL-D", "Requirements"],
    },
    fa: {
      title: "مستندسازی به عنوان معماری: نسخه‌بندی معنایی و ردیابی‌پذیری",
      narrative: "در Ghost Autonomy، مستندسازی توصیف معماری نیست — بخشی از معماری است. اصل مستندسازی-به-عنوان-معماری معتقد است که هر سند (مشخصات ISA، پرونده ایمنی، طرح آزمون) یک مصنوع رسمی با شماره نسخه معنایی، مجموعه‌ای از ثابت‌ها، و مجموعه‌ای از تضمین‌های سازگاری به عقب است.",
      strategic: "الزام ردیابی‌پذیری — الزامات→طراحی→پیاده‌سازی→آزمون — توسط سیستم مستندسازی اجرا می‌شود. هر الزام یک ID منحصربه‌فرد دارد، هر تصمیم طراحی به الزاماتی که برآورده می‌کند ارجاع می‌دهد، هر پیاده‌سازی به تصمیمات طراحی که پیاده‌سازی می‌کند ارجاع می‌دهد، و هر آزمون به پیاده‌سازی که اعتبارسنجی می‌کند ارجاع می‌دهد.",
      keyPoints: [
        "مستندسازی-به-عنوان-معماری: اسناد مصنوعات رسمی با نسخه‌های معنایی و ثابت‌ها هستند",
        "تغییر مشخصات ISA که ثابت پرونده ایمنی را نقض کند = نقص معماری",
        "ردیابی‌پذیری: الزامات→طراحی→پیاده‌سازی→آزمون با IDهای منحصربه‌فرد در هر سطح",
        "ردیابی‌پذیری چهار سطحی پیش‌نیاز گواهی‌سازی ASIL-D است",
        "زمان‌بندی قطعی: کران WCET در زمان طراحی قابل اثبات است — بدون لرزش زمان اجرا از جمع‌آوری زباله",
      ],
      tags: ["مستندسازی", "نسخه‌بندی معنایی", "ردیابی‌پذیری", "ASIL-D", "الزامات"],
    },
  },

  // ── ACT 3: Strategic Assets / SAGP (16–23) ──────────────────────────────────
  {
    id: 16, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(16),
    en: {
      title: "Scientific Provenance: The Bilinear Form Mapping Origin Story",
      narrative: "The bilinear form mapping B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy was first derived in Dr. Dirbaz's IIT dissertation as a tool for analyzing biomass gasification dynamics. The key mathematical insight was that the kernel K(x,y) could be factored as a product of moment basis functions, reducing the infinite-dimensional integral to a finite-dimensional matrix multiplication. This factorization — the Moment-PBE Isomorphism — is the mathematical foundation of the Ghost EPU.",
      strategic: "The IIT dissertation is not just historical context — it is prior art that establishes the patentability of the bilinear form mapping in the autonomous driving domain. The chain of prior art runs: IIT dissertation (2005) → biomass gasification patents (2008–2012) → PICAPD ISA specification (2023) → Ghost EPU tape-out (2026). This 20-year chain is unbreakable and creates a defensible IP moat.",
      keyPoints: [
        "B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy — first derived in IIT dissertation for biomass gasification",
        "Key insight: kernel K(x,y) factors as product of moment basis functions",
        "Moment-PBE Isomorphism: reduces infinite-dimensional integral to finite matrix multiplication",
        "20-year prior art chain: IIT (2005) → gasification patents → PICAPD ISA → EPU tape-out",
        "Ghost EPU roadmap: Tape-out Q4 2026 to ASIL-D certification Q2 2027 to Tier-1 volume Q4 2028",
      ],
      tags: ["Bilinear Forms", "IIT", "Moment-PBE Isomorphism", "Prior Art", "IP Chain"],
    },
    fa: {
      title: "منشأ علمی: داستان منشأ نگاشت فرم دوخطی",
      narrative: "نگاشت فرم دوخطی B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy اولین بار در رساله دکتری دکتر دیرباز در IIT به عنوان ابزاری برای تحلیل دینامیک گازی‌سازی زیست‌توده مشتق شد. بینش ریاضی کلیدی این بود که هسته K(x,y) می‌تواند به عنوان حاصل‌ضرب توابع پایه گشتاور فاکتور شود، که انتگرال بی‌نهایت‌بعدی را به ضرب ماتریسی متناهی‌بعدی تقلیل می‌دهد.",
      strategic: "رساله IIT فقط زمینه تاریخی نیست — این هنر قبلی است که قابلیت ثبت اختراع نگاشت فرم دوخطی در حوزه رانندگی خودمختار را ثابت می‌کند. زنجیره هنر قبلی: رساله IIT (۲۰۰۵) → پتنت‌های گازی‌سازی (۲۰۰۸–۲۰۱۲) → مشخصات ISA PICAPD (۲۰۲۳) → tape-out Ghost EPU (۲۰۲۶).",
      keyPoints: [
        "B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy — اولین بار در رساله IIT برای گازی‌سازی زیست‌توده مشتق شد",
        "بینش کلیدی: هسته K(x,y) به عنوان حاصل‌ضرب توابع پایه گشتاور فاکتور می‌شود",
        "ایزومورفیسم Moment-PBE: انتگرال بی‌نهایت‌بعدی را به ضرب ماتریسی متناهی تقلیل می‌دهد",
        "زنجیره هنر قبلی ۲۰ ساله: IIT (۲۰۰۵) → پتنت‌های گازی‌سازی → ISA PICAPD → tape-out EPU",
        "نقشه راه Ghost EPU: Tape-out Q4 2026 تا گواهینامه ASIL-D Q2 2027 تا حجم Tier-1 Q4 2028",
      ],
      tags: ["فرم دوخطی", "IIT", "ایزومورفیسم Moment-PBE", "هنر قبلی", "زنجیره IP"],
    },
  },
  {
    id: 17, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(17),
    en: {
      title: "HPSA Vertical Integration: From Raw Silica to EPU Chip",
      narrative: "The HPSA (High-Purity Silica to Autonomy) vertical integration strategy covers the complete supply chain from raw silica mining to finished EPU chip. The four stages are: (1) Raw Silica Mining — Iranian mine with 99.7% SiO₂ purity, 50-year reserve; (2) Polysilicon Production — Siemens process, 99.9999% purity (6N); (3) Wafer Fabrication — 300mm wafers, 7nm node; (4) EPU Chip — PICAPD ISA, Queen Bee architecture, ASIL-D certified.",
      strategic: "Vertical integration provides three strategic advantages: (1) Cost — eliminating intermediaries reduces EPU manufacturing cost by 35–40%; (2) Security — domestic supply chain eliminates dependence on US export-controlled equipment; (3) ESG — Iranian mine operates under ISO 14001 environmental standards, providing ESG credentials for European OEM customers. The HPSA strategy is the only way to achieve cost parity with NVIDIA while maintaining ASIL-D certification.",
      keyPoints: [
        "Stage 1: Iranian silica mine — 99.7% SiO₂ purity, 50-year reserve",
        "Stage 2: Polysilicon — Siemens process, 99.9999% purity (6N)",
        "Stage 3: 300mm wafers, 7nm node fabrication",
        "Stage 4: EPU chip — PICAPD ISA, Queen Bee, ASIL-D certified",
        "IP moat: 7 patent-pending claims covering PICAPD ISA, Queen Bee BFT, and T-distance metric",
      ],
      tags: ["HPSA", "Vertical Integration", "Silica", "Polysilicon", "Supply Chain"],
    },
    fa: {
      title: "یکپارچه‌سازی عمودی HPSA: از سیلیس خام تا تراشه EPU",
      narrative: "استراتژی یکپارچه‌سازی عمودی HPSA (سیلیس با خلوص بالا تا خودمختاری) زنجیره تأمین کامل از استخراج سیلیس خام تا تراشه EPU نهایی را پوشش می‌دهد. چهار مرحله: (۱) استخراج سیلیس خام — معدن ایرانی با خلوص ۹۹.۷٪ SiO₂؛ (۲) تولید پلی‌سیلیکون — فرآیند Siemens، خلوص ۹۹.۹۹۹۹٪ (6N)؛ (۳) ساخت ویفر — ویفرهای ۳۰۰ میلی‌متری، نود ۷ نانومتری؛ (۴) تراشه EPU — ISA PICAPD، معماری Queen Bee، گواهی‌شده ASIL-D.",
      strategic: "یکپارچه‌سازی عمودی سه مزیت استراتژیک دارد: (۱) هزینه — حذف واسطه‌ها هزینه تولید EPU را ۳۵–۴۰٪ کاهش می‌دهد؛ (۲) امنیت — زنجیره تأمین داخلی وابستگی به تجهیزات کنترل‌شده صادراتی آمریکا را حذف می‌کند؛ (۳) ESG — معدن ایرانی تحت استانداردهای محیطی ISO 14001 عمل می‌کند.",
      keyPoints: [
        "مرحله ۱: معدن سیلیس ایرانی — خلوص ۹۹.۷٪ SiO₂، ذخیره ۵۰ ساله",
        "مرحله ۲: پلی‌سیلیکون — فرآیند Siemens، خلوص ۹۹.۹۹۹۹٪ (6N)",
        "مرحله ۳: ویفرهای ۳۰۰ میلی‌متری، ساخت نود ۷ نانومتری",
        "مرحله ۴: تراشه EPU — ISA PICAPD، Queen Bee، گواهی‌شده ASIL-D",
        "خندق IP: ۷ ادعای ثبت اختراع در انتظار پوشش ISA PICAPD، Queen Bee BFT، و معیار T-distance",
      ],
      tags: ["HPSA", "یکپارچه‌سازی عمودی", "سیلیس", "پلی‌سیلیکون", "زنجیره تأمین"],
    },
  },
  {
    id: 18, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(18),
    en: {
      title: "Iranian Mine Characterization: 99.7% SiO₂, 50-Year Reserve",
      narrative: "The Iranian silica mine at [location] has been characterized through a 3-year geological survey. Key findings: (1) SiO₂ purity: 99.7% (average), with peaks of 99.85% in the eastern deposit; (2) Reserve: 2.3 billion tonnes, sufficient for 50 years of production at projected EPU manufacturing volumes; (3) Contaminants: Fe₂O₃ < 0.02%, Al₂O₃ < 0.15%, TiO₂ < 0.01% — all within Siemens process specifications for 6N polysilicon production; (4) Mining cost: $12/tonne (vs. $18/tonne for Norwegian quartz).",
      strategic: "The mine characterization data is not public — it is a trade secret that forms part of the HPSA competitive moat. The 50-year reserve at $12/tonne mining cost, combined with the Siemens process yield of 6N polysilicon, gives Ghost Autonomy a structural cost advantage over any competitor that relies on spot market silica procurement. This advantage compounds over time as EPU production volumes scale.",
      keyPoints: [
        "SiO₂ purity: 99.7% average, 99.85% peak — within Siemens 6N polysilicon specifications",
        "Reserve: 2.3 billion tonnes — 50 years at projected EPU volumes",
        "Contaminants: Fe₂O₃ < 0.02%, Al₂O₃ < 0.15%, TiO₂ < 0.01%",
        "Mining cost: $12/tonne vs. $18/tonne for Norwegian quartz — 33% cost advantage",
        "Licensing model: $2-5M per Tier-1 design win + $0.50/unit royalty — capital-light revenue stream",
      ],
      tags: ["Iranian Mine", "Silica", "SiO₂", "HPSA", "Cost Advantage"],
    },
    fa: {
      title: "مشخصات معدن ایران: خلوص ۹۹.۷٪ SiO₂، ذخیره ۵۰ ساله",
      narrative: "معدن سیلیس ایرانی از طریق یک بررسی زمین‌شناسی ۳ ساله مشخص شده است. یافته‌های کلیدی: (۱) خلوص SiO₂: ۹۹.۷٪ (میانگین)، با اوج ۹۹.۸۵٪ در رسوب شرقی؛ (۲) ذخیره: ۲.۳ میلیارد تن؛ (۳) ناخالصی‌ها: Fe₂O₃ < ۰.۰۲٪، Al₂O₃ < ۰.۱۵٪، TiO₂ < ۰.۰۱٪؛ (۴) هزینه استخراج: ۱۲ دلار/تن (در مقابل ۱۸ دلار/تن برای کوارتز نروژی).",
      strategic: "داده‌های مشخصات معدن عمومی نیستند — یک راز تجاری هستند که بخشی از خندق رقابتی HPSA را تشکیل می‌دهند. ذخیره ۵۰ ساله با هزینه استخراج ۱۲ دلار/تن، همراه با بازده فرآیند Siemens برای پلی‌سیلیکون 6N، به Ghost Autonomy یک مزیت هزینه ساختاری می‌دهد.",
      keyPoints: [
        "خلوص SiO₂: میانگین ۹۹.۷٪، اوج ۹۹.۸۵٪ — در محدوده مشخصات پلی‌سیلیکون 6N Siemens",
        "ذخیره: ۲.۳ میلیارد تن — ۵۰ سال با حجم‌های پیش‌بینی‌شده EPU",
        "ناخالصی‌ها: Fe₂O₃ < ۰.۰۲٪، Al₂O₃ < ۰.۱۵٪، TiO₂ < ۰.۰۱٪",
        "هزینه استخراج: ۱۲ دلار/تن در مقابل ۱۸ دلار/تن برای کوارتز نروژی — مزیت هزینه ۳۳٪",
        "مدل مجوزدهی: ۲ تا ۵ میلیون دلار برای هر برنده Tier-1 + ۰.۵۰ دلار/واحد حق امتیاز — جریان درآمد سبک سرمایه",
      ],
      tags: ["معدن ایران", "سیلیس", "SiO₂", "HPSA", "مزیت هزینه"],
    },
  },
  {
    id: 19, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(19),
    en: {
      title: "Silica → Polysilicon → Wafers → EPU: Four-Stage Value Chain",
      narrative: "The HPSA value chain has four stages with specific technical and economic parameters: Stage 1→2 (Silica to Polysilicon): Siemens process, 8:1 silica-to-polysilicon ratio by mass, 6N purity, $45/kg polysilicon cost (vs. $65/kg spot market). Stage 2→3 (Polysilicon to Wafers): Czochralski crystal growth, 300mm wafers, <0.1 defects/cm², $180/wafer (vs. $240/wafer spot). Stage 3→4 (Wafers to EPU): TSMC 7nm process, 85% yield target, 120 EPU dies/wafer, $2,400/EPU manufacturing cost.",
      strategic: "The four-stage value chain creates a $1,800/EPU cost advantage over a competitor that procures all inputs from spot markets. At 100,000 EPUs/year production volume, this represents $180M/year in cost savings — more than the entire Series A funding round. This structural cost advantage is the primary driver of the  valuation range.",
      keyPoints: [
        "Silica→Polysilicon: 8:1 ratio, 6N purity, $45/kg (vs. $65/kg spot) — 31% savings",
        "Polysilicon→Wafers: 300mm, <0.1 defects/cm², $180/wafer (vs. $240/wafer) — 25% savings",
        "Wafers→EPU: 7nm TSMC, 85% yield, 120 dies/wafer, $2,400/EPU manufacturing cost",
        "Total: $1,800/EPU cost advantage → $180M/year savings at 100K EPU/year volume",
        "Vertical integration option: HPSA silica mine to polysilicon to wafer to EPU chip — full supply chain control",
      ],
      tags: ["Value Chain", "HPSA", "Polysilicon", "Wafers", "Cost Advantage"],
    },
    fa: {
      title: "سیلیس → پلی‌سیلیکون → ویفر → EPU: زنجیره ارزش چهار مرحله‌ای",
      narrative: "زنجیره ارزش HPSA چهار مرحله با پارامترهای فنی و اقتصادی خاص دارد: مرحله ۱→۲ (سیلیس به پلی‌سیلیکون): فرآیند Siemens، نسبت ۸:۱ سیلیس به پلی‌سیلیکون، خلوص 6N، هزینه ۴۵ دلار/کیلوگرم. مرحله ۲→۳ (پلی‌سیلیکون به ویفر): رشد کریستال Czochralski، ویفرهای ۳۰۰ میلی‌متری، ۱۸۰ دلار/ویفر. مرحله ۳→۴ (ویفر به EPU): فرآیند TSMC 7nm، هدف بازده ۸۵٪، ۱۲۰ die EPU/ویفر، هزینه تولید ۲۴۰۰ دلار/EPU.",
      strategic: "زنجیره ارزش چهار مرحله‌ای یک مزیت هزینه ۱۸۰۰ دلار/EPU نسبت به رقیبی ایجاد می‌کند که همه ورودی‌ها را از بازار آزاد تهیه می‌کند. در حجم تولید ۱۰۰,۰۰۰ EPU/سال، این ۱۸۰ میلیون دلار/سال صرفه‌جویی در هزینه را نشان می‌دهد.",
      keyPoints: [
        "سیلیس→پلی‌سیلیکون: نسبت ۸:۱، خلوص 6N، ۴۵ دلار/کیلوگرم (در مقابل ۶۵ دلار) — صرفه‌جویی ۳۱٪",
        "پلی‌سیلیکون→ویفر: ۳۰۰ میلی‌متری، <۰.۱ نقص/سانتی‌متر مربع، ۱۸۰ دلار/ویفر — صرفه‌جویی ۲۵٪",
        "ویفر→EPU: TSMC 7nm، بازده ۸۵٪، ۱۲۰ die/ویفر، هزینه تولید ۲۴۰۰ دلار/EPU",
        "مجموع: مزیت هزینه ۱۸۰۰ دلار/EPU → صرفه‌جویی ۱۸۰ میلیون دلار/سال در حجم ۱۰۰K EPU/سال",
        "گزینه یکپارچه‌سازی عمودی: معدن سیلیکا HPSA تا پلی‌سیلیکون تا ویفر تا تراشه EPU — کنترل کامل زنجیره تأمین",
      ],
      tags: ["زنجیره ارزش", "HPSA", "پلی‌سیلیکون", "ویفر", "مزیت هزینه"],
    },
  },
  {
    id: 20, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(20),
    en: {
      title: "India Semiconductor Partnership: ISM 1.0/2.0/2.0+ Alignment",
      narrative: "India's Semiconductor Mission (ISM) has three phases: ISM 1.0 (2021–2024) — $10B investment in fab incentives, focus on legacy nodes (28nm+); ISM 2.0 (2024–2027) — $15B investment, advanced packaging, 7nm design ecosystem; ISM 2.0+ (2027+) — indigenous fab capability, 5nm target. Ghost Autonomy's PICAPD ISA tape-out at 7nm aligns perfectly with ISM 2.0's design ecosystem phase, making India a natural partner for the first production run.",
      strategic: "The India partnership has three components: (1) Design — Sharif University talent pipeline provides 40 VLSI engineers/year; (2) Manufacturing — ISM 2.0 fab incentives reduce TSMC 7nm cost by 15%; (3) Market — India's AV market is projected at $180B by 2035, with Ghost EPU positioned as the domestic safety processor. The India partnership is not charity — it is a strategic asset that reduces manufacturing cost, provides talent, and opens a $180B market.",
      keyPoints: [
        "ISM 1.0: $10B, legacy nodes (28nm+) — 2021–2024",
        "ISM 2.0: $15B, advanced packaging, 7nm design ecosystem — 2024–2027",
        "ISM 2.0+: indigenous fab, 5nm target — 2027+",
        "Ghost EPU 7nm tape-out aligns with ISM 2.0 design ecosystem phase",
        "ESG alignment: hydrogen-powered Ghost vehicle + physics-certified EPU = zero-emission autonomous platform",
      ],
      tags: ["India", "ISM", "Semiconductor Mission", "7nm", "Partnership"],
    },
    fa: {
      title: "مشارکت نیمه‌هادی هند: همراستایی با ISM 1.0/2.0/2.0+",
      narrative: "مأموریت نیمه‌هادی هند (ISM) سه مرحله دارد: ISM 1.0 (۲۰۲۱–۲۰۲۴) — سرمایه‌گذاری ۱۰ میلیارد دلاری در مشوق‌های fab، تمرکز بر نودهای قدیمی (۲۸ نانومتر+)؛ ISM 2.0 (۲۰۲۴–۲۰۲۷) — سرمایه‌گذاری ۱۵ میلیارد دلاری، بسته‌بندی پیشرفته، اکوسیستم طراحی ۷ نانومتری؛ ISM 2.0+ (۲۰۲۷+) — توانایی fab بومی، هدف ۵ نانومتری.",
      strategic: "مشارکت هند سه مؤلفه دارد: (۱) طراحی — خط لوله استعداد دانشگاه شریف ۴۰ مهندس VLSI/سال فراهم می‌کند؛ (۲) تولید — مشوق‌های fab ISM 2.0 هزینه TSMC 7nm را ۱۵٪ کاهش می‌دهد؛ (۳) بازار — بازار AV هند تا ۲۰۳۵ به ۱۸۰ میلیارد دلار می‌رسد.",
      keyPoints: [
        "ISM 1.0: ۱۰ میلیارد دلار، نودهای قدیمی (۲۸ نانومتر+) — ۲۰۲۱–۲۰۲۴",
        "ISM 2.0: ۱۵ میلیارد دلار، بسته‌بندی پیشرفته، اکوسیستم طراحی ۷ نانومتری — ۲۰۲۴–۲۰۲۷",
        "ISM 2.0+: fab بومی، هدف ۵ نانومتری — ۲۰۲۷+",
        "tape-out EPU Ghost در ۷ نانومتر با مرحله اکوسیستم طراحی ISM 2.0 همراستا است",
        "همسویی ESG: خودروی Ghost هیدروژنی + EPU گواهی‌شده فیزیکی = سکوی خودمختار بدون انتشار",
      ],
      tags: ["هند", "ISM", "مأموریت نیمه‌هادی", "۷ نانومتر", "مشارکت"],
    },
  },
  {
    id: 21, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(21),
    en: {
      title: "South Korea Partnership: Memory, Foundry, HBM for AI",
      narrative: "South Korea's semiconductor ecosystem has three relevant capabilities for Ghost EPU: (1) Memory — Samsung and SK Hynix produce HBM3 (High Bandwidth Memory) at 1.2 TB/s bandwidth, which is required for the EPU's moment buffer (512 registers × 64-bit × 1GHz = 32 GB/s minimum); (2) Foundry — Samsung Foundry offers 7nm GAA (Gate-All-Around) process as an alternative to TSMC; (3) AI Chips — Korea's NAVER HyperCLOVA and KT's AI chips demonstrate domestic AI chip design capability.",
      strategic: "The Korea-US-Iran trilemma: US export controls on semiconductor equipment (EAR 99) restrict Iran's access to advanced fab equipment. Korea, as a US ally, faces pressure not to supply Iran directly. The HPSA strategy resolves this by routing the supply chain through India (ISM partnership) and using Korean foundry services for the final EPU fabrication — a structure that is legally compliant with US export controls while maintaining the HPSA cost advantages.",
      keyPoints: [
        "Samsung/SK Hynix HBM3: 1.2 TB/s bandwidth — required for EPU moment buffer",
        "Samsung Foundry 7nm GAA: alternative to TSMC for EPU fabrication",
        "Korea-US-Iran trilemma: US export controls restrict direct Iran supply",
        "HPSA routes through India to maintain legal compliance with US export controls",
        "Conservation law enforcement: div(J) + drho/dt = 0 checked at every gate cycle — not post-hoc verified",
      ],
      tags: ["South Korea", "HBM", "Samsung", "Export Controls", "HPSA"],
    },
    fa: {
      title: "مشارکت کره جنوبی: حافظه، فاندری، HBM برای هوش مصنوعی",
      narrative: "اکوسیستم نیمه‌هادی کره جنوبی سه توانایی مرتبط برای Ghost EPU دارد: (۱) حافظه — Samsung و SK Hynix HBM3 با پهنای باند ۱.۲ TB/s تولید می‌کنند که برای بافر گشتاور EPU مورد نیاز است؛ (۲) فاندری — Samsung Foundry فرآیند ۷ نانومتری GAA را به عنوان جایگزین TSMC ارائه می‌دهد؛ (۳) تراشه‌های هوش مصنوعی — HyperCLOVA NAVER و تراشه‌های هوش مصنوعی KT توانایی طراحی تراشه هوش مصنوعی داخلی را نشان می‌دهند.",
      strategic: "معمای سه‌گانه کره-آمریکا-ایران: کنترل‌های صادراتی آمریکا بر تجهیزات نیمه‌هادی (EAR 99) دسترسی ایران به تجهیزات fab پیشرفته را محدود می‌کند. استراتژی HPSA این را با مسیریابی زنجیره تأمین از طریق هند حل می‌کند.",
      keyPoints: [
        "Samsung/SK Hynix HBM3: پهنای باند ۱.۲ TB/s — برای بافر گشتاور EPU مورد نیاز است",
        "Samsung Foundry 7nm GAA: جایگزین TSMC برای ساخت EPU",
        "معمای سه‌گانه کره-آمریکا-ایران: کنترل‌های صادراتی آمریکا تأمین مستقیم ایران را محدود می‌کند",
        "HPSA از طریق هند مسیریابی می‌کند تا انطباق قانونی با کنترل‌های صادراتی آمریکا را حفظ کند",
        "اجرای قانون بقا: div(J) + drho/dt = 0 در هر چرخه دروازه بررسی می‌شود — نه پس از واقعه",
      ],
      tags: ["کره جنوبی", "HBM", "Samsung", "کنترل‌های صادراتی", "HPSA"],
    },
  },
  {
    id: 22, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(22),
    en: {
      title: "Quad-Plus Alliance: India-Korea-America-Iran",
      narrative: "The Quad-Plus Alliance is a proposed multilateral framework for semiconductor and autonomous vehicle technology cooperation between India, South Korea, the United States, and Iran. The complementary strengths are: India (talent pipeline, ISM fab incentives, $180B AV market), South Korea (HBM memory, foundry capacity, AI chip expertise), United States (IP law, capital markets, OEM customer base), Iran (HPSA silica supply, PICAPD ISA IP, Ghost Autonomy technology).",
      strategic: "The Quad-Plus Alliance is not a geopolitical statement — it is a supply chain optimization. The alliance structure routes each country's contribution through its area of comparative advantage, creating a supply chain that is more resilient, more cost-effective, and more legally compliant than any single-country alternative. The pilot project roadmap (2026–2028) proposes a specific governance structure for the alliance, including IP licensing terms, revenue sharing, and dispute resolution.",
      keyPoints: [
        "India: talent (40 VLSI engineers/year), ISM fab incentives, $180B AV market",
        "South Korea: HBM3 memory, Samsung Foundry 7nm, AI chip expertise",
        "United States: IP law, capital markets (NASDAQ), OEM customer base",
        "Iran: HPSA silica supply, PICAPD ISA IP, Ghost Autonomy technology",
        "Gasification heritage: 4B state space navigated with 200-register working set proves compression principle",
      ],
      tags: ["Quad-Plus", "Alliance", "India", "South Korea", "Geopolitics"],
    },
    fa: {
      title: "اتحاد Quad-Plus: هند-کره-آمریکا-ایران",
      narrative: "اتحاد Quad-Plus یک چارچوب چندجانبه پیشنهادی برای همکاری در فناوری نیمه‌هادی و خودروهای خودمختار بین هند، کره جنوبی، ایالات متحده، و ایران است. نقاط قوت مکمل: هند (خط لوله استعداد، مشوق‌های fab ISM، بازار AV ۱۸۰ میلیارد دلاری)، کره جنوبی (حافظه HBM، ظرفیت فاندری، تخصص تراشه هوش مصنوعی)، ایالات متحده (قانون IP، بازارهای سرمایه، پایگاه مشتری OEM)، ایران (تأمین سیلیس HPSA، IP ISA PICAPD، فناوری Ghost Autonomy).",
      strategic: "اتحاد Quad-Plus یک بیانیه ژئوپلیتیک نیست — یک بهینه‌سازی زنجیره تأمین است. ساختار اتحاد مشارکت هر کشور را از طریق حوزه مزیت نسبی آن مسیریابی می‌کند و یک زنجیره تأمین ایجاد می‌کند که انعطاف‌پذیرتر، مقرون‌به‌صرفه‌تر، و از نظر قانونی سازگارتر است.",
      keyPoints: [
        "هند: استعداد (۴۰ مهندس VLSI/سال)، مشوق‌های fab ISM، بازار AV ۱۸۰ میلیارد دلاری",
        "کره جنوبی: حافظه HBM3، Samsung Foundry 7nm، تخصص تراشه هوش مصنوعی",
        "ایالات متحده: قانون IP، بازارهای سرمایه (NASDAQ)، پایگاه مشتری OEM",
        "ایران: تأمین سیلیس HPSA، IP ISA PICAPD، فناوری Ghost Autonomy",
        "میراث گازی‌سازی: فضای ۴ میلیارد حالت با مجموعه کاری ۲۰۰ رجیستر اصل فشرده‌سازی را اثبات می‌کند",
      ],
      tags: ["Quad-Plus", "اتحاد", "هند", "کره جنوبی", "ژئوپلیتیک"],
    },
  },
  {
    id: 23, act: "SAGP", actLabel: ACT_LABELS_C.SAGP, imageUrl: imgC(23),
    en: {
      title: "Pilot Project Roadmap 2026–2028: Multi-Lateral Governance",
      narrative: "The Quad-Plus pilot project has three phases: Phase 1 (2026) — IP licensing framework established, India ISM 2.0 fab incentive application submitted, Korea HBM3 supply agreement signed; Phase 2 (2027) — First EPU prototype fabricated at Samsung Foundry 7nm, India VLSI team integrated into PICAPD ISA verification, Korea HBM3 memory integrated into EPU development board; Phase 3 (2028) — Production ramp at Samsung Foundry, India team leads software-defined vehicle integration, Korea team leads HBM3 memory subsystem.",
      strategic: "The governance structure for the Quad-Plus alliance includes: (1) IP licensing — Ghost Autonomy licenses PICAPD ISA to India and Korea partners at cost-plus pricing; (2) Revenue sharing — 15% of EPU revenue to India partner, 10% to Korea partner, in exchange for fab incentives and HBM supply; (3) Dispute resolution — ICC arbitration in Singapore. This governance structure is designed to be legally compliant with US export controls while maximizing the strategic benefits of the alliance.",
      keyPoints: [
        "Phase 1 (2026): IP licensing framework, ISM 2.0 application, HBM3 supply agreement",
        "Phase 2 (2027): First EPU prototype at Samsung Foundry 7nm, India VLSI integration",
        "Phase 3 (2028): Production ramp, India leads SDV integration, Korea leads HBM3 subsystem",
        "Governance: IP licensing at cost-plus, 15% India revenue share, 10% Korea revenue share",
        "Sharif University pipeline: 5 PhD candidates in EPU-aligned research — talent moat for next 5 years",
      ],
      tags: ["Pilot Project", "Governance", "Quad-Plus", "Samsung Foundry", "Revenue Sharing"],
    },
    fa: {
      title: "نقشه راه پروژه پایلوت ۲۰۲۶–۲۰۲۸: حاکمیت چندجانبه",
      narrative: "پروژه پایلوت Quad-Plus سه مرحله دارد: مرحله ۱ (۲۰۲۶) — چارچوب مجوز IP ایجاد شد، درخواست مشوق fab ISM 2.0 هند ارسال شد، توافق تأمین HBM3 کره امضا شد؛ مرحله ۲ (۲۰۲۷) — اولین نمونه اولیه EPU در Samsung Foundry 7nm ساخته شد؛ مرحله ۳ (۲۰۲۸) — رمپ تولید در Samsung Foundry.",
      strategic: "ساختار حاکمیت برای اتحاد Quad-Plus شامل: (۱) مجوز IP — Ghost Autonomy ISA PICAPD را به شرکای هند و کره با قیمت‌گذاری cost-plus مجوز می‌دهد؛ (۲) تقسیم درآمد — ۱۵٪ درآمد EPU به شریک هند، ۱۰٪ به شریک کره؛ (۳) حل اختلاف — داوری ICC در سنگاپور.",
      keyPoints: [
        "مرحله ۱ (۲۰۲۶): چارچوب مجوز IP، درخواست ISM 2.0، توافق تأمین HBM3",
        "مرحله ۲ (۲۰۲۷): اولین نمونه اولیه EPU در Samsung Foundry 7nm، یکپارچه‌سازی VLSI هند",
        "مرحله ۳ (۲۰۲۸): رمپ تولید، هند یکپارچه‌سازی SDV را هدایت می‌کند، کره زیرسیستم HBM3 را هدایت می‌کند",
        "حاکمیت: مجوز IP با قیمت cost-plus، سهم درآمد ۱۵٪ هند، سهم درآمد ۱۰٪ کره",
        "خط لوله دانشگاه شریف: ۵ دانشجوی دکترا در تحقیقات همسو با EPU — خندق استعداد برای ۵ سال آینده",
      ],
      tags: ["پروژه پایلوت", "حاکمیت", "Quad-Plus", "Samsung Foundry", "تقسیم درآمد"],
    },
  },

  // ── ACT 4: Physics Foundation (24–33) ───────────────────────────────────────
  {
    id: 24, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(24),
    en: {
      title: "Bilinear Form Mapping: The Core Mathematical Object",
      narrative: "The bilinear form B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy is the mathematical object that unifies all computations in the Ghost EPU. The kernel K(x,y) encodes the physical relationship between input u and output v. For perception, K encodes the sensor response function. For prediction, K encodes the vehicle dynamics model. For decision, K encodes the cost function. The key property of bilinear forms is that they are simultaneously: (1) linear in u (holding v fixed), (2) linear in v (holding u fixed), and (3) bounded: |B(u,v)| ≤ ‖K‖ · ‖u‖ · ‖v‖.",
      strategic: "The boundedness property is the safety guarantee: if the kernel K is bounded (which is guaranteed by conservation laws), then the output B(u,v) is bounded regardless of the inputs u and v. This is the mathematical foundation of the Ghost EPU's safety claim: the EPU cannot produce an unbounded output (e.g., infinite steering angle) because the bilinear form is bounded by construction.",
      keyPoints: [
        "B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy — unified mathematical object for all EPU computations",
        "Kernel K(x,y) encodes physical relationship: sensor response, dynamics model, cost function",
        "Boundedness: |B(u,v)| ≤ ‖K‖ · ‖u‖ · ‖v‖ — the mathematical safety guarantee",
        "Conservation laws guarantee bounded K → EPU cannot produce unbounded outputs",
        "imec partnership: Prof. Mahdi Taheri collaboration validates EPU architecture at European semiconductor level",
      ],
      tags: ["Bilinear Forms", "Kernel", "Boundedness", "Safety Guarantee", "Conservation Laws"],
    },
    fa: {
      title: "نگاشت فرم دوخطی: شیء ریاضی اصلی",
      narrative: "فرم دوخطی B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy شیء ریاضی است که تمام محاسبات در Ghost EPU را یکپارچه می‌کند. هسته K(x,y) رابطه فیزیکی بین ورودی u و خروجی v را رمزگذاری می‌کند. برای ادراک، K تابع پاسخ حسگر را رمزگذاری می‌کند. برای پیش‌بینی، K مدل دینامیک خودرو را رمزگذاری می‌کند. ویژگی کلیدی فرم‌های دوخطی این است که همزمان هم در u و هم در v خطی هستند و کراندار هستند.",
      strategic: "ویژگی کراندار بودن تضمین ایمنی است: اگر هسته K کراندار باشد (که توسط قوانین بقا تضمین می‌شود)، آنگاه خروجی B(u,v) صرف‌نظر از ورودی‌ها کراندار است. این پایه ریاضی ادعای ایمنی Ghost EPU است: EPU نمی‌تواند خروجی نامحدود تولید کند.",
      keyPoints: [
        "B(u,v) = ∫∫ u(x)K(x,y)v(y)dxdy — شیء ریاضی یکپارچه برای تمام محاسبات EPU",
        "هسته K(x,y) رابطه فیزیکی را رمزگذاری می‌کند: پاسخ حسگر، مدل دینامیک، تابع هزینه",
        "کراندار بودن: |B(u,v)| ≤ ‖K‖ · ‖u‖ · ‖v‖ — تضمین ریاضی ایمنی",
        "قوانین بقا K کراندار را تضمین می‌کنند → EPU نمی‌تواند خروجی نامحدود تولید کند",
        "مشارکت imec: همکاری پروفسور مهدی طاهری معماری EPU را در سطح نیمه‌هادی اروپایی تأیید می‌کند",
      ],
      tags: ["فرم دوخطی", "هسته", "کراندار بودن", "تضمین ایمنی", "قوانین بقا"],
    },
  },
  {
    id: 25, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(25),
    en: {
      title: "Conservation Laws as Hardware Constraints",
      narrative: "The Ghost EPU enforces three conservation laws at the hardware level: (1) Mass conservation: ∂ρ/∂t + ∇·(ρv) = 0 — implemented as a check on the moment vector M that its zeroth moment (total mass) is conserved between time steps; (2) Momentum conservation: ∂(ρv)/∂t + ∇·(ρv⊗v + P) = F — implemented as a check on the first moment of the velocity distribution; (3) Energy conservation: ∂E/∂t + ∇·(Ev + Pv) = Q — implemented as a check on the second moment.",
      strategic: "The conservation law checks are not software assertions — they are hardware interlocks. If the EPU computes a moment vector that violates mass conservation, the hardware raises a Conservation Violation Exception (CVE) that is handled by the Byzantine fault tolerance protocol. This means that a sensor failure that would cause a probabilistic ML system to output an incorrect prediction is instead caught by the hardware and handled by the consensus protocol.",
      keyPoints: [
        "Mass conservation: ∂ρ/∂t + ∇·(ρv) = 0 — zeroth moment check between time steps",
        "Momentum conservation: ∂(ρv)/∂t + ∇·(ρv⊗v + P) = F — first moment check",
        "Energy conservation: ∂E/∂t + ∇·(Ev + Pv) = Q — second moment check",
        "Conservation violations raise CVE hardware exception → handled by Byzantine protocol",
        "India ISM 2.0 alignment: Ghost EPU maps to India Tier-1 semiconductor mission — $10B government backing",
      ],
      tags: ["Conservation Laws", "Hardware Constraints", "CVE", "Byzantine", "Mass Momentum Energy"],
    },
    fa: {
      title: "قوانین بقا به عنوان قیود سخت‌افزاری",
      narrative: "Ghost EPU سه قانون بقا را در سطح سخت‌افزار اجرا می‌کند: (۱) بقای جرم: ∂ρ/∂t + ∇·(ρv) = 0 — به عنوان بررسی بردار گشتاور M پیاده‌سازی شده است؛ (۲) بقای تکانه: ∂(ρv)/∂t + ∇·(ρv⊗v + P) = F — به عنوان بررسی گشتاور اول توزیع سرعت پیاده‌سازی شده است؛ (۳) بقای انرژی: ∂E/∂t + ∇·(Ev + Pv) = Q — به عنوان بررسی گشتاور دوم پیاده‌سازی شده است.",
      strategic: "بررسی‌های قانون بقا ادعاهای نرم‌افزاری نیستند — قفل‌های سخت‌افزاری هستند. اگر EPU یک بردار گشتاور محاسبه کند که بقای جرم را نقض کند، سخت‌افزار یک استثنای نقض بقا (CVE) ایجاد می‌کند که توسط پروتکل تحمل خطای بیزانسی مدیریت می‌شود.",
      keyPoints: [
        "بقای جرم: ∂ρ/∂t + ∇·(ρv) = 0 — بررسی گشتاور صفرم بین گام‌های زمانی",
        "بقای تکانه: ∂(ρv)/∂t + ∇·(ρv⊗v + P) = F — بررسی گشتاور اول",
        "بقای انرژی: ∂E/∂t + ∇·(Ev + Pv) = Q — بررسی گشتاور دوم",
        "نقض بقا استثنای CVE سخت‌افزاری ایجاد می‌کند → توسط پروتکل بیزانسی مدیریت می‌شود",
        "همسویی ISM 2.0 هند: Ghost EPU با مأموریت نیمه‌هادی Tier-1 هند همسو است — پشتیبانی ۱۰ میلیارد دلاری دولت",
      ],
      tags: ["قوانین بقا", "قیود سخت‌افزاری", "CVE", "بیزانس", "جرم تکانه انرژی"],
    },
  },
  {
    id: 26, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(26),
    en: {
      title: "Governing Equations Taxonomy: Hyperbolic, Parabolic, Transport",
      narrative: "The Ghost EPU's instruction set is organized around three classes of governing equations: (1) Hyperbolic equations (wave propagation): ∂²u/∂t² = c²∇²u — used for acoustic sensor modeling and shock wave detection; (2) Parabolic equations (diffusion): ∂u/∂t = D∇²u — used for thermal modeling and uncertainty propagation; (3) Transport equations: ∂f/∂t + v·∇f = Q[f] — used for population balance and particle distribution evolution. Each class has dedicated PICAPD instructions optimized for its specific mathematical structure.",
      strategic: "The three-class taxonomy is not arbitrary — it reflects a fundamental classification of physical phenomena by their characteristic information propagation speed. Hyperbolic equations propagate information at finite speed (wave speed c), parabolic equations propagate information at infinite speed (diffusion), and transport equations propagate information along characteristics. This classification determines the optimal numerical method and hardware architecture for each class.",
      keyPoints: [
        "Hyperbolic: ∂²u/∂t² = c²∇²u — acoustic sensing, shock detection (finite propagation speed)",
        "Parabolic: ∂u/∂t = D∇²u — thermal modeling, uncertainty propagation (infinite speed)",
        "Transport: ∂f/∂t + v·∇f = Q[f] — population balance, particle distribution (characteristic curves)",
        "Each class has dedicated PICAPD instructions optimized for its mathematical structure",
        "Classification determines hardware pipeline: Hyperbolic → combinational logic (<5ns), Parabolic → iterative solver (50ns), Transport → moment closure (15ns) — latency budget allocated per equation class",
      ],
      tags: ["Governing Equations", "Hyperbolic", "Parabolic", "Transport", "PICAPD"],
    },
    fa: {
      title: "طبقه‌بندی معادلات حاکم: هذلولی، سهموی، انتقال",
      narrative: "مجموعه دستورات Ghost EPU حول سه کلاس معادلات حاکم سازماندهی شده است: (۱) معادلات هذلولی (انتشار موج): ∂²u/∂t² = c²∇²u — برای مدل‌سازی حسگر صوتی و تشخیص موج شوک استفاده می‌شود؛ (۲) معادلات سهموی (پراکندگی): ∂u/∂t = D∇²u — برای مدل‌سازی حرارتی و انتشار عدم‌قطعیت استفاده می‌شود؛ (۳) معادلات انتقال: ∂f/∂t + v·∇f = Q[f] — برای تعادل جمعیت استفاده می‌شود.",
      strategic: "طبقه‌بندی سه‌کلاسه دلبخواهی نیست — یک طبقه‌بندی اساسی پدیده‌های فیزیکی بر اساس سرعت انتشار اطلاعات مشخصه آن‌ها را منعکس می‌کند. این طبقه‌بندی روش عددی بهینه و معماری سخت‌افزاری برای هر کلاس را تعیین می‌کند.",
      keyPoints: [
        "هذلولی: ∂²u/∂t² = c²∇²u — حسگر صوتی، تشخیص شوک (سرعت انتشار متناهی)",
        "سهموی: ∂u/∂t = D∇²u — مدل‌سازی حرارتی، انتشار عدم‌قطعیت (سرعت بی‌نهایت)",
        "انتقال: ∂f/∂t + v·∇f = Q[f] — تعادل جمعیت، توزیع ذرات (منحنی‌های مشخصه)",
        "هر کلاس دستورات PICAPD اختصاصی بهینه‌شده برای ساختار ریاضی خود دارد",
        "طبقه‌بندی خط لوله سخت‌افزاری را تعیین می‌کند: هذلولی → منطق ترکیبی (<5ns)، سهموی → حل‌کننده تکراری (50ns)، انتقال → بستار گشتاور (15ns) — بودجه تأخیر بر اساس کلاس معادله تخصیص می‌یابد",
      ],
      tags: ["معادلات حاکم", "هذلولی", "سهموی", "انتقال", "PICAPD"],
    },
  },
  {
    id: 27, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(27),
    en: {
      title: "Topological Vector Spaces: Why Infinite Dimensions Require New Hardware",
      narrative: "The population balance equation (PBE) for particle size distributions lives in an infinite-dimensional function space — the space L²([0,∞)) of square-integrable functions on the positive real line. Standard hardware (CPUs, GPUs) operates on finite-dimensional vector spaces (ℝⁿ for fixed n). The Ghost EPU bridges this gap through the Moment-PBE Isomorphism: it represents the infinite-dimensional PBE solution as a finite vector of moments M = (m₀, m₁, ..., m_k) where k is determined by the Hausdorff realizability conditions.",
      strategic: "The topological vector space perspective explains why the 89.7:1 compression ratio is not an approximation — it is exact. The moment vector M = (m₀, ..., m_k) is not a lossy compression of the PBE solution — it is an exact representation in the sense that any physical observable (mean particle size, variance, skewness) can be computed exactly from M. The compression is lossless because the Hausdorff conditions guarantee that M uniquely determines the underlying distribution.",
      keyPoints: [
        "PBE lives in L²([0,∞)) — infinite-dimensional function space, not representable in fixed ℝⁿ",
        "Moment-PBE Isomorphism: represents infinite-dimensional solution as finite moment vector M",
        "89.7:1 compression is exact (not approximate) — Hausdorff conditions guarantee uniqueness",
        "Any physical observable computable exactly from M — lossless compression",
        "PDC design philosophy: Correctness, Simplicity, Scalability — three principles that precede architecture",
      ],
      tags: ["Topological Vector Spaces", "L²", "Moment-PBE", "Hausdorff", "Lossless Compression"],
    },
    fa: {
      title: "فضاهای برداری توپولوژیک: چرا ابعاد بی‌نهایت به سخت‌افزار جدید نیاز دارند",
      narrative: "معادله تعادل جمعیت (PBE) برای توزیع‌های اندازه ذرات در یک فضای تابعی بی‌نهایت‌بعدی زندگی می‌کند — فضای L²([0,∞)) توابع مربع‌انتگرال‌پذیر روی خط حقیقی مثبت. سخت‌افزار استاندارد (CPU، GPU) روی فضاهای برداری متناهی‌بعدی عمل می‌کند. Ghost EPU این شکاف را از طریق ایزومورفیسم Moment-PBE پر می‌کند.",
      strategic: "دیدگاه فضای برداری توپولوژیک توضیح می‌دهد که چرا نسبت فشرده‌سازی ۸۹.۷:۱ یک تقریب نیست — دقیق است. بردار گشتاور M = (m₀, ..., m_k) یک فشرده‌سازی با اتلاف از راه‌حل PBE نیست — یک نمایش دقیق است به این معنا که هر مشاهده‌پذیر فیزیکی می‌تواند دقیقاً از M محاسبه شود.",
      keyPoints: [
        "PBE در L²([0,∞)) زندگی می‌کند — فضای تابعی بی‌نهایت‌بعدی، قابل نمایش در ℝⁿ ثابت نیست",
        "ایزومورفیسم Moment-PBE: راه‌حل بی‌نهایت‌بعدی را به عنوان بردار گشتاور متناهی M نمایش می‌دهد",
        "فشرده‌سازی ۸۹.۷:۱ دقیق است (نه تقریبی) — شرایط Hausdorff یکتایی را تضمین می‌کنند",
        "هر مشاهده‌پذیر فیزیکی دقیقاً از M قابل محاسبه است — فشرده‌سازی بدون اتلاف",
        "فلسفه طراحی PDC: صحت، سادگی، مقیاس‌پذیری — سه اصل که بر معماری مقدم هستند",
      ],
      tags: ["فضاهای برداری توپولوژیک", "L²", "Moment-PBE", "Hausdorff", "فشرده‌سازی بدون اتلاف"],
    },
  },
  {
    id: 28, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(28),
    en: {
      title: "Population Balance Equations: The 89.7:1 Compression Ratio Derived",
      narrative: "The Population Balance Equation for a particle size distribution n(x,t) is: ∂n/∂t + ∂(G·n)/∂x = B - D + ∫₀ˣ β(x-x',x')n(x-x',t)n(x',t)dx' - n(x,t)∫₀^∞ β(x,x')n(x',t)dx'. This is a nonlinear integro-differential equation in infinite dimensions. The moment transformation mₖ = ∫₀^∞ xᵏ n(x,t)dx reduces this to a finite system of ODEs: dmₖ/dt = f(m₀, m₁, ..., m_{k+1}). The 89.7:1 ratio comes from the fact that a typical particle size distribution requires 89.7 floating-point values to represent at engineering accuracy, but only 1 moment vector (k=6) to represent exactly.",
      strategic: "The 89.7:1 compression ratio is not a theoretical bound — it is an empirically measured value from the biomass gasification experiments that motivated the Ghost EPU design. The measurement was made by comparing the storage required for a 64-point discretization of the particle size distribution (64 floats) versus the 6-moment representation (6 floats + 1 normalization constant = 7 values). The ratio 64/7 ≈ 9.1 per dimension, and for a 3D distribution (x, y, z particle coordinates) the ratio is 9.1³ ≈ 754. The 89.7:1 figure is the geometric mean across the relevant distribution families.",
      keyPoints: [
        "PBE: ∂n/∂t + ∂(G·n)/∂x = B - D + aggregation integral — nonlinear integro-differential",
        "Moment transform: mₖ = ∫₀^∞ xᵏ n(x,t)dx → finite ODE system dmₖ/dt = f(m₀,...,m_{k+1})",
        "89.7:1 ratio: empirically measured from biomass gasification experiments",
        "k=6 moments represent distribution exactly (Hausdorff) vs. 64-point discretization",
        "Autonomy as control problem: observation/action contracts define system boundary — not ML heuristics",
      ],
      tags: ["PBE", "Moment Transform", "89.7:1", "Compression", "Biomass Gasification"],
    },
    fa: {
      title: "معادلات تعادل جمعیت: استخراج نسبت فشرده‌سازی ۸۹.۷:۱",
      narrative: "معادله تعادل جمعیت برای توزیع اندازه ذرات n(x,t) یک معادله انتگرو-دیفرانسیل غیرخطی در ابعاد بی‌نهایت است. تبدیل گشتاور mₖ = ∫₀^∞ xᵏ n(x,t)dx این را به یک سیستم متناهی از ODE تبدیل می‌کند. نسبت ۸۹.۷:۱ از آزمایش‌های گازی‌سازی زیست‌توده اندازه‌گیری شده است.",
      strategic: "نسبت ۸۹.۷:۱ یک حد نظری نیست — یک مقدار تجربی اندازه‌گیری‌شده است. ۶ گشتاور توزیع را دقیقاً نمایش می‌دهند در مقابل ۶۴ نقطه گسسته‌سازی.",
      keyPoints: [
        "PBE: معادله انتگرو-دیفرانسیل غیرخطی در L²([0,∞))",
        "تبدیل گشتاور: mₖ = ∫₀^∞ xᵏ n(x,t)dx → سیستم ODE متناهی",
        "نسبت ۸۹.۷:۱ از آزمایش‌های گازی‌سازی زیست‌توده اندازه‌گیری شده",
        "k=6 گشتاور توزیع را دقیقاً نمایش می‌دهند (Hausdorff) در مقابل ۶۴ نقطه",
        "خودمختاری به‌عنوان مسئله کنترل: قراردادهای مشاهده/عمل مرز سیستم را تعریف می‌کنند — نه اکتشافی ML",
      ],
      tags: ["PBE", "تبدیل گشتاور", "۸۹.۷:۱", "فشرده‌سازی", "گازی‌سازی زیست‌توده"],
    },
  },
  // ── ACT 5: Architecture Deep (29–38) ──────────────────────────────────────
  {
    id: 29, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(29),
    en: {
      title: "PICAPD ISA: The Physics-Informed Compute Architecture",
      narrative: "PICAPD (Physics-Informed Compute Architecture for Particle Dynamics) is a custom ISA designed around four instruction classes: MOMENT (moment vector operations), BILIN (bilinear form evaluation), CONSERVE (conservation law enforcement), and SYNC (Byzantine-tolerant synchronization). The ISA has 47 opcodes, 512 registers (256 scalar + 256 moment-vector), and a 256-bit data path. Every instruction has a formally verified correctness proof in Coq.",
      strategic: "The PICAPD ISA is the core IP of Ghost Autonomy. It is not a general-purpose ISA with physics extensions — it is a physics-first ISA where every opcode corresponds to a mathematically defined operation with a formal correctness guarantee. This means that a program written in PICAPD assembly is itself a formal proof of physical correctness.",
      keyPoints: [
        "47 opcodes in 4 classes: MOMENT, BILIN, CONSERVE, SYNC",
        "512 registers: 256 scalar (64-bit) + 256 moment-vector (6×64-bit)",
        "256-bit data path — moment vectors processed in single instruction",
        "Every opcode has formal Coq correctness proof",
        "Epistemic vs aleatoric uncertainty: Ghost EPU separates knowable from irreducible uncertainty at gate level",
      ],
      tags: ["PICAPD ISA", "Opcodes", "Registers", "Coq", "Formal Verification"],
    },
    fa: {
      title: "ISA PICAPD: معماری محاسباتی مبتنی بر فیزیک",
      narrative: "PICAPD یک ISA سفارشی طراحی‌شده حول چهار کلاس دستورالعمل است: MOMENT (عملیات بردار گشتاور)، BILIN (ارزیابی فرم دوخطی)، CONSERVE (اجرای قانون بقا)، و SYNC (همگام‌سازی تحمل‌کننده خطای بیزانسی). ISA دارای ۴۷ opcode، ۵۱۲ رجیستر، و مسیر داده ۲۵۶ بیتی است.",
      strategic: "ISA PICAPD IP اصلی Ghost Autonomy است. هر opcode به یک عملیات ریاضی تعریف‌شده با تضمین صحت رسمی مربوط می‌شود — یعنی یک برنامه نوشته‌شده در assembly PICAPD خود یک اثبات رسمی صحت فیزیکی است.",
      keyPoints: [
        "۴۷ opcode در ۴ کلاس: MOMENT، BILIN، CONSERVE، SYNC",
        "۵۱۲ رجیستر: ۲۵۶ اسکالر (۶۴ بیتی) + ۲۵۶ بردار گشتاور (۶×۶۴ بیتی)",
        "مسیر داده ۲۵۶ بیتی — بردارهای گشتاور در یک دستورالعمل پردازش می‌شوند",
        "هر opcode دارای اثبات صحت رسمی Coq است",
        "عدم قطعیت معرفتی در مقابل تصادفی: Ghost EPU عدم قطعیت قابل دانستن را از تقلیل‌ناپذیر در سطح دروازه جدا می‌کند",
      ],
      tags: ["ISA PICAPD", "Opcodes", "رجیسترها", "Coq", "تأیید رسمی"],
    },
  },
  {
    id: 30, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(30),
    en: {
      title: "Queen Bee Architecture: Byzantine Fault Tolerance in Silicon",
       narrative: "The Queen Bee architecture implements Byzantine fault tolerance at the hardware level. The Queen Bee node is the primary computation unit; 6 Drone nodes provide redundant computation and Byzantine voting. Consensus uses modified PBFT with O(n log n) message complexity through hierarchical aggregation. Hardware-level BFT means that even if 2 of 7 nodes are physically compromised, the system continues to produce correct outputs.",
      strategic: "Hardware-level Byzantine fault tolerance is a regulatory requirement for Level 4/5 autonomy in all major markets (EU, US, China). Ghost EPU is the only processor that implements BFT in silicon rather than software. Software BFT adds 15–40ms latency; hardware BFT adds <0.3ms. At 100 km/h, 40ms = 1.1m of uncontrolled travel.",
      keyPoints: [
        "n=7 nodes (1 Queen Bee + 6 Drones), tolerates f=2 simultaneous faults",
        "Modified PBFT: O(n log n) message complexity via hierarchical aggregation",
        "Hardware BFT latency: <0.3ms vs. 15–40ms for software BFT",
        "At 100 km/h: 40ms software BFT = 1.1m uncontrolled travel",
        "Documentation as architecture: 101 EPU-MAS files are executable specifications, not descriptive prose",
      ],
      tags: ["Queen Bee", "Byzantine Fault Tolerance", "PBFT", "Hardware BFT", "Level 4/5"],
    },
    fa: {
      title: "معماری Queen Bee: تحمل خطای بیزانسی در سیلیکون",
      narrative: "معماری Queen Bee تحمل خطای بیزانسی را در سطح سخت‌افزار با استفاده از افزونگی n=7 (برای تحمل f=2 خطا) پیاده‌سازی می‌کند. گره Queen Bee واحد محاسباتی اصلی است؛ ۶ گره Drone محاسبات افزونه و رأی‌گیری بیزانسی را فراهم می‌کنند. پروتکل اجماع از PBFT اصلاح‌شده با پیچیدگی پیام O(n log n) استفاده می‌کند.",
      strategic: "تحمل خطای بیزانسی در سطح سخت‌افزار یک الزام نظارتی برای خودمختاری سطح ۴/۵ در تمام بازارهای اصلی است. Ghost EPU تنها پردازنده‌ای است که BFT را در سیلیکون پیاده‌سازی می‌کند. BFT نرم‌افزاری ۱۵–۴۰ میلی‌ثانیه تأخیر اضافه می‌کند؛ BFT سخت‌افزاری کمتر از ۰.۳ میلی‌ثانیه.",
      keyPoints: [
        "n=7 گره (۱ Queen Bee + ۶ Drone)، تحمل f=2 خطای همزمان",
        "PBFT اصلاح‌شده: پیچیدگی پیام O(n log n) از طریق تجمیع سلسله‌مراتبی",
        "تأخیر BFT سخت‌افزاری: کمتر از ۰.۳ میلی‌ثانیه در مقابل ۱۵–۴۰ میلی‌ثانیه برای BFT نرم‌افزاری",
        "در ۱۰۰ کیلومتر/ساعت: ۴۰ میلی‌ثانیه BFT نرم‌افزاری = ۱.۱ متر حرکت کنترل‌نشده",
        "مستندسازی به‌عنوان معماری: ۱۰۱ فایل EPU-MAS مشخصات اجرایی هستند، نه نثر توصیفی",
      ],
      tags: ["Queen Bee", "تحمل خطای بیزانسی", "PBFT", "BFT سخت‌افزاری", "سطح ۴/۵"],
    },
  },
  {
    id: 31, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(31),
    en: {
      title: "ASIL-D Certification Path: From Physics to ISO 26262",
      narrative: "ASIL-D (Automotive Safety Integrity Level D) is the highest safety classification in ISO 26262, requiring a probability of dangerous failure <10⁻⁹ per hour. Ghost EPU's certification path has three layers: (1) Formal verification — all PICAPD opcodes verified in Coq; (2) Hardware safety mechanisms — lockstep execution, ECC memory, CRC on all data paths; (3) Functional safety analysis — FMEA, FTA, and HAZOP completed for all 47 opcodes.",
      strategic: "The ASIL-D certification path for Ghost EPU is shorter than for probabilistic ML processors because the formal verification layer eliminates the need for extensive statistical testing. NVIDIA Drive Orin requires 10⁹ test miles for ASIL-D certification; Ghost EPU requires formal proof + 10⁶ test miles. This is a 1000x reduction in certification cost and time.",
      keyPoints: [
        "ASIL-D requirement: dangerous failure probability <10⁻⁹/hour",
        "Layer 1: Coq formal verification of all 47 PICAPD opcodes",
        "Layer 2: Lockstep execution, ECC memory, CRC on all data paths",
        "Layer 3: FMEA + FTA + HAZOP for all opcodes — 1000x less test miles than ML processors",
        "PICAPD ISA fulcrum: all 7 instruction classes are physics operators — no general-purpose compute leakage",
      ],
      tags: ["ASIL-D", "ISO 26262", "Coq", "FMEA", "Certification"],
    },
    fa: {
      title: "مسیر گواهی‌سازی ASIL-D: از فیزیک به ISO 26262",
      narrative: "ASIL-D بالاترین طبقه‌بندی ایمنی در ISO 26262 است و نیاز به احتمال خرابی خطرناک کمتر از ۱۰⁻⁹ در ساعت دارد. مسیر گواهی‌سازی Ghost EPU سه لایه دارد: (۱) تأیید رسمی — همه opcodeهای PICAPD در Coq تأیید شده‌اند؛ (۲) مکانیزم‌های ایمنی سخت‌افزاری؛ (۳) تحلیل ایمنی عملکردی.",
      strategic: "مسیر گواهی‌سازی ASIL-D برای Ghost EPU کوتاه‌تر از پردازنده‌های ML احتمالاتی است زیرا لایه تأیید رسمی نیاز به آزمایش آماری گسترده را حذف می‌کند. NVIDIA Drive Orin به ۱۰⁹ مایل آزمایش نیاز دارد؛ Ghost EPU به اثبات رسمی + ۱۰⁶ مایل — کاهش ۱۰۰۰ برابری در هزینه و زمان گواهی‌سازی.",
      keyPoints: [
        "الزام ASIL-D: احتمال خرابی خطرناک کمتر از ۱۰⁻⁹ در ساعت",
        "لایه ۱: تأیید رسمی Coq همه ۴۷ opcode PICAPD",
        "لایه ۲: اجرای lockstep، حافظه ECC، CRC روی همه مسیرهای داده",
        "لایه ۳: FMEA + FTA + HAZOP — ۱۰۰۰ برابر کمتر مایل آزمایش نسبت به پردازنده‌های ML",
        "محور ISA PICAPD: همه ۷ کلاس دستورالعمل عملگرهای فیزیکی هستند — بدون نشت محاسبات عمومی",
      ],
      tags: ["ASIL-D", "ISO 26262", "Coq", "FMEA", "گواهی‌سازی"],
    },
  },
  {
    id: 32, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(32),
    en: {
      title: "EPU Silicon: 7nm Process, Power Budget, and Die Area",
      narrative: "The Ghost EPU silicon implementation targets TSMC 7nm FinFET process. Die area: 142 mm² (Queen Bee core: 68 mm², 6 Drone cores: 54 mm², I/O and interconnect: 20 mm²). Power budget: 25W TDP (Queen Bee: 12W, Drones: 9W, I/O: 4W). Clock frequency: 2.4 GHz. Memory bandwidth: 512 GB/s via LPDDR5X. The 7nm process enables the 512-register file to fit within the die area budget while maintaining <0.3ms BFT latency.",
      strategic: "The 7nm process selection is driven by three constraints: (1) power budget — 25W TDP fits automotive thermal envelope without active cooling; (2) die area — 142 mm² fits in standard automotive package (BGA-1156); (3) yield — 7nm yield at TSMC is >85% for 142 mm² die, meeting the Series B production requirement.",
      keyPoints: [
        "TSMC 7nm FinFET, 142 mm² die area, 25W TDP",
        "Queen Bee core: 68 mm², 12W; 6 Drone cores: 54 mm², 9W",
        "2.4 GHz clock, 512 GB/s memory bandwidth (LPDDR5X)",
        "7nm yield >85% at 142 mm² — meets Series B production requirement",
        "Timing/memory contracts: WCET x memory budget = deterministic resource envelope — certifiable at design time",
      ],
      tags: ["7nm", "TSMC", "Die Area", "Power Budget", "LPDDR5X"],
    },
    fa: {
      title: "سیلیکون EPU: فرآیند ۷ نانومتری، بودجه توان، و مساحت Die",
      narrative: "پیاده‌سازی سیلیکون Ghost EPU فرآیند TSMC 7nm FinFET را هدف قرار می‌دهد. مساحت die: ۱۴۲ mm² (هسته Queen Bee: ۶۸ mm²، ۶ هسته Drone: ۵۴ mm²، I/O و اتصال‌دهنده: ۲۰ mm²). بودجه توان: ۲۵ وات TDP. فرکانس کلاک: ۲.۴ گیگاهرتز. پهنای باند حافظه: ۵۱۲ گیگابایت/ثانیه.",
      strategic: "انتخاب فرآیند ۷ نانومتری توسط سه محدودیت هدایت می‌شود: (۱) بودجه توان — ۲۵ وات TDP در پوشش حرارتی خودرویی بدون خنک‌کننده فعال جا می‌شود؛ (۲) مساحت die — ۱۴۲ mm² در بسته‌بندی استاندارد خودرویی جا می‌شود؛ (۳) بازده — بازده ۷ نانومتری در TSMC بیش از ۸۵٪ است.",
      keyPoints: [
        "TSMC 7nm FinFET، مساحت die ۱۴۲ mm²، TDP ۲۵ وات",
        "هسته Queen Bee: ۶۸ mm²، ۱۲ وات؛ ۶ هسته Drone: ۵۴ mm²، ۹ وات",
        "کلاک ۲.۴ گیگاهرتز، پهنای باند حافظه ۵۱۲ گیگابایت/ثانیه (LPDDR5X)",
        "بازده ۷ نانومتری بیش از ۸۵٪ در ۱۴۲ mm² — الزام تولید سری B را برآورده می‌کند",
        "قراردادهای زمان‌بندی/حافظه: WCET x بودجه حافظه = پوشش منابع قطعی — قابل گواهینامه در زمان طراحی",
      ],
      tags: ["۷ نانومتر", "TSMC", "مساحت Die", "بودجه توان", "LPDDR5X"],
    },
  },
  {
    id: 33, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(33),
    en: {
      title: "Signal Processing Pipeline: From Sensor to Moment Vector",
      narrative: "The Ghost EPU signal processing pipeline has five stages: (1) Sensor ingestion — LiDAR (128-channel, 10 Hz), radar (4D, 77 GHz), camera (8×4K, 30 fps); (2) Preprocessing — noise filtering, coordinate transformation, time synchronization; (3) Feature extraction — bilinear form computation B(u,v) for each sensor modality; (4) Moment compression — 89.7:1 compression to moment vector M; (5) PBE solving — real-time solution of Population Balance Equation using moment ODE system.",
      strategic: "The five-stage pipeline is designed so that each stage has a formal correctness guarantee: sensor ingestion uses CRC-verified data paths; preprocessing uses formally verified coordinate transforms; feature extraction uses Coq-verified bilinear form opcodes; moment compression uses Hausdorff-guaranteed moment transforms; PBE solving uses conservation-law-enforcing CONSERVE opcodes.",
      keyPoints: [
        "Stage 1: LiDAR 128ch/10Hz + Radar 4D/77GHz + Camera 8×4K/30fps",
        "Stage 3: Bilinear form B(u,v) computed per sensor modality",
        "Stage 4: 89.7:1 moment compression M = (m₀,...,m₅)",
        "Stage 5: Real-time PBE solving via moment ODE system with CONSERVE opcodes",
        "Risk budget: Ghost EPU allocates explicit risk budgets per subsystem — no implicit safety assumptions",
      ],
      tags: ["Signal Processing", "LiDAR", "Radar", "Moment Compression", "PBE"],
    },
    fa: {
      title: "خط لوله پردازش سیگنال: از حسگر تا بردار گشتاور",
      narrative: "خط لوله پردازش سیگنال Ghost EPU پنج مرحله دارد: (۱) دریافت حسگر — LiDAR (128 کانال، ۱۰ هرتز)، رادار (4D، ۷۷ گیگاهرتز)، دوربین (8×4K، ۳۰ fps)؛ (۲) پیش‌پردازش؛ (۳) استخراج ویژگی — محاسبه فرم دوخطی B(u,v)؛ (۴) فشرده‌سازی گشتاور — ۸۹.۷:۱؛ (۵) حل PBE بلادرنگ.",
      strategic: "خط لوله پنج‌مرحله‌ای طراحی شده تا هر مرحله تضمین صحت رسمی داشته باشد: دریافت حسگر از مسیرهای داده تأیید‌شده CRC استفاده می‌کند؛ استخراج ویژگی از opcodeهای فرم دوخطی تأیید‌شده Coq استفاده می‌کند.",
      keyPoints: [
        "مرحله ۱: LiDAR 128 کانال/۱۰ هرتز + رادار 4D/۷۷ گیگاهرتز + دوربین 8×4K/۳۰ fps",
        "مرحله ۳: فرم دوخطی B(u,v) برای هر مدالیته حسگر محاسبه می‌شود",
        "مرحله ۴: فشرده‌سازی گشتاور ۸۹.۷:۱ به M = (m₀,...,m₅)",
        "مرحله ۵: حل بلادرنگ PBE از طریق سیستم ODE گشتاور با opcodeهای CONSERVE",
        "بودجه ریسک: Ghost EPU بودجه‌های ریسک صریح را برای هر زیرسیستم تخصیص می‌دهد — بدون فرضیات ایمنی ضمنی",
      ],
      tags: ["پردازش سیگنال", "LiDAR", "رادار", "فشرده‌سازی گشتاور", "PBE"],
    },
  },
  {
    id: 34, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(34),
    en: {
      title: "WCET Analysis: Worst-Case Execution Time Bounds",
      narrative: "Worst-Case Execution Time (WCET) analysis for the Ghost EPU pipeline yields the following bounds: sensor ingestion 0.8ms, preprocessing 1.2ms, feature extraction 2.1ms, moment compression 0.4ms, PBE solving 1.8ms, Byzantine consensus 0.3ms. Total pipeline WCET: 6.6ms. At 100 km/h, 6.6ms = 18.3cm of travel — well within the 50cm safety margin required by ISO 26262 for Level 4 autonomy.",
      strategic: "The 6.6ms WCET is a formal upper bound, not a statistical estimate. It is derived from the PICAPD ISA timing model (each opcode has a formally verified cycle count) and the Queen Bee memory hierarchy (all memory accesses have bounded latency due to scratchpad memory architecture). This formal WCET bound is the key evidence for ASIL-D certification.",
      keyPoints: [
        "Total pipeline WCET: 6.6ms (formally verified upper bound)",
        "At 100 km/h: 6.6ms = 18.3cm — within 50cm ISO 26262 Level 4 safety margin",
        "WCET derived from formally verified PICAPD opcode timing model",
        "Scratchpad memory architecture ensures bounded memory access latency",
        "Traceability: requirements to design to implementation chain is machine-verifiable — audit-ready at all times",
      ],
      tags: ["WCET", "Real-Time", "ISO 26262", "Safety Margin", "Scratchpad Memory"],
    },
    fa: {
      title: "تحلیل WCET: کران‌های زمان اجرای بدترین حالت",
      narrative: "تحلیل زمان اجرای بدترین حالت (WCET) برای خط لوله Ghost EPU کران‌های زیر را می‌دهد: دریافت حسگر ۰.۸ میلی‌ثانیه، پیش‌پردازش ۱.۲ میلی‌ثانیه، استخراج ویژگی ۲.۱ میلی‌ثانیه، فشرده‌سازی گشتاور ۰.۴ میلی‌ثانیه، حل PBE ۱.۸ میلی‌ثانیه، اجماع بیزانسی ۰.۳ میلی‌ثانیه. WCET کل خط لوله: ۶.۶ میلی‌ثانیه.",
      strategic: "WCET ۶.۶ میلی‌ثانیه یک کران بالای رسمی است، نه یک تخمین آماری. در ۱۰۰ کیلومتر/ساعت، ۶.۶ میلی‌ثانیه = ۱۸.۳ سانتی‌متر حرکت — در محدوده حاشیه ایمنی ۵۰ سانتی‌متری ISO 26262 برای خودمختاری سطح ۴.",
      keyPoints: [
        "WCET کل خط لوله: ۶.۶ میلی‌ثانیه (کران بالای تأیید‌شده رسمی)",
        "در ۱۰۰ کیلومتر/ساعت: ۶.۶ میلی‌ثانیه = ۱۸.۳ سانتی‌متر — در محدوده حاشیه ایمنی ۵۰ سانتی‌متری",
        "WCET از مدل زمان‌بندی opcode PICAPD تأیید‌شده رسمی مشتق شده",
        "معماری حافظه scratchpad تضمین تأخیر دسترسی حافظه محدود را می‌دهد",
        "ردیابی: زنجیره الزامات تا طراحی تا پیاده‌سازی قابل تأیید ماشینی است — همیشه آماده حسابرسی",
      ],
      tags: ["WCET", "بلادرنگ", "ISO 26262", "حاشیه ایمنی", "حافظه Scratchpad"],
    },
  },
  {
    id: 35, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(35),
    en: {
      title: "Memory Architecture: Scratchpad, ECC, and WAL",
      narrative: "Ghost EPU memory architecture has three tiers: (1) L1 Scratchpad (512 KB, 1-cycle access, no cache misses) — stores moment vectors and intermediate bilinear form results; (2) L2 ECC SRAM (8 MB, 4-cycle access, SECDED error correction) — stores sensor data buffers and PBE state; (3) WAL (Write-Ahead Log, 256 MB LPDDR5X, 4.7 GB/s bandwidth) — stores Byzantine consensus log and audit trail. The scratchpad architecture eliminates cache miss uncertainty, enabling formal WCET analysis.",
      strategic: "The WAL (Write-Ahead Log) is a key differentiator for regulatory compliance. Every computation performed by the Ghost EPU is logged to the WAL with a cryptographic hash, creating an immutable audit trail. This enables post-incident forensic analysis and is required by NHTSA's Automated Driving System regulations (FMVSS 127).",
      keyPoints: [
        "L1 Scratchpad: 512 KB, 1-cycle access, no cache misses — enables formal WCET",
        "L2 ECC SRAM: 8 MB, 4-cycle, SECDED error correction",
        "WAL: 256 MB LPDDR5X, 4.7 GB/s — immutable audit trail with cryptographic hashes",
        "WAL required by NHTSA FMVSS 127 for post-incident forensic analysis",
        "Semantic versioning: backward compatibility guaranteed across EPU-MAS releases — no breaking changes to safety core",
      ],
      tags: ["Scratchpad Memory", "ECC", "WAL", "WCET", "NHTSA FMVSS 127"],
    },
    fa: {
      title: "معماری حافظه: Scratchpad، ECC، و WAL",
      narrative: "معماری حافظه Ghost EPU سه لایه دارد: (۱) L1 Scratchpad (512 کیلوبایت، دسترسی ۱ سیکل، بدون cache miss) — بردارهای گشتاور را ذخیره می‌کند؛ (۲) L2 ECC SRAM (8 مگابایت، دسترسی ۴ سیکل، تصحیح خطای SECDED)؛ (۳) WAL (گزارش پیش‌نویس، 256 مگابایت LPDDR5X، پهنای باند ۴.۷ گیگابایت/ثانیه).",
      strategic: "WAL یک متمایزکننده کلیدی برای انطباق نظارتی است. هر محاسبه‌ای که توسط Ghost EPU انجام می‌شود با یک هش رمزنگاری به WAL ثبت می‌شود و یک مسیر حسابرسی تغییرناپذیر ایجاد می‌کند. این برای تحلیل جنایی پس از حادثه مورد نیاز است.",
      keyPoints: [
        "L1 Scratchpad: 512 کیلوبایت، دسترسی ۱ سیکل، بدون cache miss — WCET رسمی را ممکن می‌سازد",
        "L2 ECC SRAM: 8 مگابایت، ۴ سیکل، تصحیح خطای SECDED",
        "WAL: 256 مگابایت LPDDR5X، ۴.۷ گیگابایت/ثانیه — مسیر حسابرسی تغییرناپذیر",
        "WAL برای تحلیل جنایی پس از حادثه توسط NHTSA FMVSS 127 مورد نیاز است",
        "نسخه‌بندی معنایی: سازگاری به عقب در نسخه‌های EPU-MAS تضمین شده — بدون تغییرات شکننده در هسته ایمنی",
      ],
      tags: ["حافظه Scratchpad", "ECC", "WAL", "WCET", "NHTSA FMVSS 127"],
    },
  },
  {
    id: 36, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(36),
    en: {
      title: "Bilinear Form Hardware: The BILIN Opcode Family",
      narrative: "The BILIN opcode family implements bilinear form evaluation B(u,v) = uᵀAv in hardware. The family has 8 opcodes: BILIN.DOT (standard inner product), BILIN.QUAD (quadratic form uᵀAu), BILIN.CROSS (cross-product bilinear), BILIN.MOMENT (moment-generating bilinear), BILIN.CONSERVE (conservation-law bilinear), BILIN.KALMAN (Kalman filter update bilinear), BILIN.LYAP (Lyapunov stability bilinear), BILIN.NERNST (electrochemical Nernst bilinear). Each opcode processes a 256-bit moment vector in a single clock cycle at 2.4 GHz.",
      strategic: "The BILIN opcode family is the reason Ghost EPU can process all physical phenomena in a unified framework. Every physical law — from Newton's equations to Maxwell's equations to the Nernst equation — can be expressed as a bilinear form. By implementing bilinear form evaluation in hardware, Ghost EPU achieves a level of physical generality that no other processor can match.",
      keyPoints: [
        "8 BILIN opcodes: DOT, QUAD, CROSS, MOMENT, CONSERVE, KALMAN, LYAP, NERNST",
        "Each opcode: 256-bit moment vector input, single clock cycle at 2.4 GHz",
        "BILIN.KALMAN: Kalman filter update in 1 cycle — enables real-time sensor fusion",
        "BILIN.LYAP: Lyapunov stability check in 1 cycle — enables real-time stability verification",
        "Scientific provenance: IIT to biomass gasification to autonomous computing — continuous mathematical lineage",
      ],
      tags: ["BILIN Opcodes", "Bilinear Form", "Kalman", "Lyapunov", "Hardware"],
    },
    fa: {
      title: "سخت‌افزار فرم دوخطی: خانواده opcode BILIN",
      narrative: "خانواده opcode BILIN ارزیابی فرم دوخطی B(u,v) = uᵀAv را در سخت‌افزار پیاده‌سازی می‌کند. این خانواده ۸ opcode دارد: BILIN.DOT، BILIN.QUAD، BILIN.CROSS، BILIN.MOMENT، BILIN.CONSERVE، BILIN.KALMAN، BILIN.LYAP، BILIN.NERNST. هر opcode یک بردار گشتاور ۲۵۶ بیتی را در یک سیکل کلاک پردازش می‌کند.",
      strategic: "خانواده opcode BILIN دلیلی است که Ghost EPU می‌تواند همه پدیده‌های فیزیکی را در یک چارچوب یکپارچه پردازش کند. هر قانون فیزیکی — از معادلات نیوتن تا معادلات ماکسول — می‌تواند به عنوان یک فرم دوخطی بیان شود.",
      keyPoints: [
        "۸ opcode BILIN: DOT، QUAD، CROSS، MOMENT، CONSERVE، KALMAN، LYAP، NERNST",
        "هر opcode: ورودی بردار گشتاور ۲۵۶ بیتی، یک سیکل کلاک در ۲.۴ گیگاهرتز",
        "BILIN.KALMAN: به‌روزرسانی فیلتر Kalman در ۱ سیکل — ادغام حسگر بلادرنگ را ممکن می‌سازد",
        "BILIN.LYAP: بررسی پایداری Lyapunov در ۱ سیکل — تأیید پایداری بلادرنگ را ممکن می‌سازد",
        "منشأ علمی: IIT تا گازی‌سازی زیست‌توده تا محاسبات خودمختار — نسب ریاضی پیوسته",
      ],
      tags: ["opcodeهای BILIN", "فرم دوخطی", "Kalman", "Lyapunov", "سخت‌افزار"],
    },
  },
  {
    id: 37, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(37),
    en: {
      title: "Conservation Law Enforcement: The CONSERVE Opcode Family",
      narrative: "The CONSERVE opcode family enforces physical conservation laws at the gate level. The family has 6 opcodes: CONSERVE.MASS (mass conservation ∂ρ/∂t + ∇·(ρv) = 0), CONSERVE.MOMENTUM (momentum conservation ρ Dv/Dt = -∇p + ∇·τ + ρg), CONSERVE.ENERGY (energy conservation ∂E/∂t + ∇·(Ev) = Q - W), CONSERVE.CHARGE (charge conservation ∂ρ_e/∂t + ∇·J = 0), CONSERVE.ENTROPY (entropy production ∂s/∂t + ∇·(sv) ≥ 0), CONSERVE.MOMENT (moment conservation for PBE). Each opcode checks the conservation law and raises a hardware exception if violated.",
      strategic: "Conservation law enforcement at the gate level means that Ghost EPU physically cannot produce outputs that violate fundamental physics. This is the key safety guarantee: not 'we tested it and it usually works' but 'it is physically impossible for it to produce a conservation-violating output.' This distinction is the foundation of the ASIL-D certification argument.",
      keyPoints: [
        "6 CONSERVE opcodes: MASS, MOMENTUM, ENERGY, CHARGE, ENTROPY, MOMENT",
        "Each opcode checks conservation law and raises hardware exception if violated",
        "CONSERVE.MASS: ∂ρ/∂t + ∇·(ρv) = 0 checked at gate level",
        "Physically impossible to produce conservation-violating output — ASIL-D foundation",
        "Technology transfer: US incorporation + patent filing + Sharif pipeline = complete commercialization stack",
      ],
      tags: ["CONSERVE Opcodes", "Conservation Laws", "Hardware Exception", "ASIL-D", "Physics"],
    },
    fa: {
      title: "اجرای قوانین بقا: خانواده opcode CONSERVE",
      narrative: "خانواده opcode CONSERVE قوانین بقای فیزیکی را در سطح گیت اجرا می‌کند. این خانواده ۶ opcode دارد: CONSERVE.MASS (بقای جرم)، CONSERVE.MOMENTUM (بقای تکانه)، CONSERVE.ENERGY (بقای انرژی)، CONSERVE.CHARGE (بقای بار)، CONSERVE.ENTROPY (تولید آنتروپی)، CONSERVE.MOMENT (بقای گشتاور برای PBE). هر opcode قانون بقا را بررسی می‌کند و در صورت نقض یک استثنای سخت‌افزاری ایجاد می‌کند.",
      strategic: "اجرای قوانین بقا در سطح گیت به این معناست که Ghost EPU فیزیکاً نمی‌تواند خروجی‌هایی تولید کند که فیزیک بنیادی را نقض کنند. این تضمین ایمنی کلیدی است: نه 'آزمایش کردیم و معمولاً کار می‌کند' بلکه 'فیزیکاً غیرممکن است خروجی ناقض بقا تولید کند.'",
      keyPoints: [
        "۶ opcode CONSERVE: MASS، MOMENTUM، ENERGY، CHARGE، ENTROPY، MOMENT",
        "هر opcode قانون بقا را بررسی می‌کند و در صورت نقض استثنای سخت‌افزاری ایجاد می‌کند",
        "CONSERVE.MASS: ∂ρ/∂t + ∇·(ρv) = 0 در سطح گیت بررسی می‌شود",
        "فیزیکاً غیرممکن است خروجی ناقض بقا تولید شود — پایه ASIL-D",
        "انتقال فناوری: ثبت در آمریکا + ثبت اختراع + خط لوله شریف = پشته کامل تجاری‌سازی",
      ],
      tags: ["opcodeهای CONSERVE", "قوانین بقا", "استثنای سخت‌افزاری", "ASIL-D", "فیزیک"],
    },
  },
  {
    id: 38, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(38),
    en: {
      title: "Formal Verification Framework: Coq Proofs for All 47 Opcodes",
      narrative: "All 47 PICAPD opcodes have formal correctness proofs in the Coq proof assistant. The proof framework has three layers: (1) Operational semantics — each opcode is defined as a state transition function on the EPU state (registers, memory, flags); (2) Safety properties — each opcode is proven to preserve conservation laws and not produce undefined behavior; (3) Liveness properties — each opcode is proven to terminate in a bounded number of cycles. The Coq proof repository is 127,000 lines of proof code.",
      strategic: "The Coq proof repository is a core IP asset. It is the evidence base for ASIL-D certification and the technical foundation for the Ghost EPU's regulatory moat. No competitor has a comparable formal verification infrastructure for their processor ISA. The 127,000 lines of Coq proofs represent approximately 18 person-years of formal verification work.",
      keyPoints: [
        "127,000 lines of Coq proof code covering all 47 PICAPD opcodes",
        "Layer 1: Operational semantics as state transition functions",
        "Layer 2: Conservation law preservation proofs for all opcodes",
        "Layer 3: Termination proofs — bounded cycle count for all opcodes",
        "HPSA silica: Iranian mine grade >99.5% SiO2 — pharmaceutical-grade purity for semiconductor wafer production",
      ],
      tags: ["Coq", "Formal Verification", "Operational Semantics", "Safety Properties", "IP"],
    },
    fa: {
      title: "چارچوب تأیید رسمی: اثبات‌های Coq برای همه ۴۷ opcode",
      narrative: "همه ۴۷ opcode PICAPD دارای اثبات‌های صحت رسمی در دستیار اثبات Coq هستند. چارچوب اثبات سه لایه دارد: (۱) معناشناسی عملیاتی؛ (۲) ویژگی‌های ایمنی — هر opcode ثابت شده که قوانین بقا را حفظ می‌کند؛ (۳) ویژگی‌های زنده‌بودن — هر opcode ثابت شده که در تعداد محدودی از سیکل‌ها پایان می‌یابد. مخزن اثبات Coq ۱۲۷,۰۰۰ خط کد اثبات دارد.",
      strategic: "مخزن اثبات Coq یک دارایی IP اصلی است. این پایه شواهد برای گواهی‌سازی ASIL-D و پایه فنی برای خندق نظارتی Ghost EPU است. هیچ رقیبی زیرساخت تأیید رسمی مشابهی برای ISA پردازنده خود ندارد.",
      keyPoints: [
        "۱۲۷,۰۰۰ خط کد اثبات Coq پوشش‌دهنده همه ۴۷ opcode PICAPD",
        "لایه ۱: معناشناسی عملیاتی به عنوان توابع انتقال حالت",
        "لایه ۲: اثبات‌های حفظ قانون بقا برای همه opcodeها",
        "لایه ۳: اثبات‌های پایان‌پذیری — تعداد سیکل محدود برای همه opcodeها",
        "سیلیکا HPSA: درجه معدن ایران >۹۹.۵٪ SiO2 — خلوص درجه دارویی برای تولید ویفر نیمه‌هادی",
      ],
      tags: ["Coq", "تأیید رسمی", "معناشناسی عملیاتی", "ویژگی‌های ایمنی", "IP"],
    },
  },
  // ── ACT 6: Financial & Business (39–44) ────────────────────────────────────
  {
    id: 39, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(39),
    en: {
      title: "Business Model: Licensing, Royalties, and IP Stack",
      narrative: "Ghost Autonomy's business model has three revenue streams: (1) IP licensing — PICAPD ISA licensed to Tier-1 automotive suppliers at $2M–$8M per design win; (2) Silicon royalties — $45–$120 per EPU unit shipped, targeting 500K units/year by 2030; (3) Safety certification services — ASIL-D certification consulting at $500K–$2M per OEM program. The IP licensing model is asset-light and scales without manufacturing investment.",
      strategic: "The three-stream model is designed to capture value at each layer of the automotive supply chain: OEMs pay for certification services; Tier-1 suppliers pay for IP licensing; silicon manufacturers pay royalties. This creates a diversified revenue base that is resilient to supply chain disruptions and OEM consolidation.",
      keyPoints: [
        "Stream 1: IP licensing — $2M–$8M per design win (PICAPD ISA)",
        "Stream 2: Silicon royalties — $45–$120/unit, 500K units/year target by 2030",
        "Stream 3: ASIL-D certification consulting — $500K–$2M per OEM program",
        "Asset-light model: scales without manufacturing investment",
        "TCO advantage: Ghost EPU deterministic WCET eliminates redundant compute — 40% lower system TCO vs GPU",
      ],
      tags: ["Business Model", "IP Licensing", "Royalties", "ASIL-D", "Revenue"],
    },
    fa: {
      title: "مدل کسب‌وکار: مجوزدهی، حق امتیاز، و پشته IP",
      narrative: "مدل کسب‌وکار Ghost Autonomy سه جریان درآمدی دارد: (۱) مجوزدهی IP — ISA PICAPD به تأمین‌کنندگان خودرویی Tier-1 با ۲–۸ میلیون دلار در هر برنده طراحی مجوز داده می‌شود؛ (۲) حق امتیاز سیلیکون — ۴۵–۱۲۰ دلار در هر واحد EPU ارسال‌شده؛ (۳) خدمات گواهی‌سازی ایمنی — مشاوره گواهی‌سازی ASIL-D.",
      strategic: "مدل سه‌جریانه برای کسب ارزش در هر لایه از زنجیره تأمین خودرویی طراحی شده است. این یک پایه درآمدی متنوع ایجاد می‌کند که در برابر اختلالات زنجیره تأمین مقاوم است.",
      keyPoints: [
        "جریان ۱: مجوزدهی IP — ۲–۸ میلیون دلار در هر برنده طراحی (ISA PICAPD)",
        "جریان ۲: حق امتیاز سیلیکون — ۴۵–۱۲۰ دلار/واحد، هدف ۵۰۰ هزار واحد/سال تا ۲۰۳۰",
        "جریان ۳: مشاوره گواهی‌سازی ASIL-D — ۵۰۰ هزار تا ۲ میلیون دلار در هر برنامه OEM",
        "مدل سبک از نظر دارایی: بدون سرمایه‌گذاری تولیدی مقیاس می‌شود",
        "مزیت TCO: WCET قطعی Ghost EPU محاسبات اضافی را حذف می‌کند — ۴۰٪ TCO سیستم کمتر در مقابل GPU",
      ],
      tags: ["مدل کسب‌وکار", "مجوزدهی IP", "حق امتیاز", "ASIL-D", "درآمد"],
    },
  },
  {
    id: 40, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(40),
    en: {
      title: "Funding History & Series B: $120M Target",
      narrative: "Ghost Autonomy's funding history: Seed ($2.5M, 2021, 3 angel investors), Series A ($18M, 2023, led by Andreessen Horowitz with participation from TSMC Ventures and Bosch Ventures). Series B target: $120M, targeting Q2 2028 close. Series B use of proceeds: 40% silicon tape-out and production ramp, 30% ASIL-D certification and regulatory, 20% OEM integration and field testing, 10% IP expansion and Coq proof infrastructure.",
      strategic: "The Series B timing is gated by the tape-out milestone (2026 Q3) and OEM pilot results (2027 Q1). The $120M target is based on a 24-month runway to production-ready EPU with >85% yield. The Series B valuation target is $600M–$900M (5–7.5x Series A valuation), based on comparable semiconductor IP companies at similar stages.",
      keyPoints: [
        "Seed: $2.5M (2021), Series A: $18M (2023, led by Andreessen Horowitz)",
        "Series B target: $120M, Q2 2028, 24-month runway to production",
        "Use of proceeds: 40% silicon, 30% ASIL-D certification, 20% OEM integration",
        "Series B valuation target: $600M–$900M (5–7.5x Series A)",
        "Revenue model: three streams — IP licensing ($45B SAM), chip sales ($180B SAM), certification services",
      ],
      tags: ["Funding", "Series B", "Andreessen Horowitz", "Valuation", "TSMC Ventures"],
    },
    fa: {
      title: "تاریخچه تأمین مالی و سری B: هدف ۱۲۰ میلیون دلار",
      narrative: "تاریخچه تأمین مالی Ghost Autonomy: بذر (۲.۵ میلیون دلار، ۲۰۲۱)، سری A (۱۸ میلیون دلار، ۲۰۲۳، به رهبری Andreessen Horowitz). هدف سری B: ۱۲۰ میلیون دلار، بسته‌شدن در Q2 2028. استفاده از درآمد: ۴۰٪ tape-out سیلیکون، ۳۰٪ گواهی‌سازی ASIL-D، ۲۰٪ یکپارچه‌سازی OEM.",
      strategic: "زمان‌بندی سری B به نقطه عطف tape-out (Q3 2026) و نتایج پایلوت OEM (Q1 2027) مشروط است. هدف ارزش‌گذاری سری B: ۶۰۰–۹۰۰ میلیون دلار (۵–۷.۵ برابر ارزش‌گذاری سری A).",
      keyPoints: [
        "بذر: ۲.۵ میلیون دلار (۲۰۲۱)، سری A: ۱۸ میلیون دلار (۲۰۲۳، به رهبری Andreessen Horowitz)",
        "هدف سری B: ۱۲۰ میلیون دلار، Q2 2028، ۲۴ ماه تا تولید",
        "استفاده از درآمد: ۴۰٪ سیلیکون، ۳۰٪ گواهی‌سازی ASIL-D، ۲۰٪ یکپارچه‌سازی OEM",
        "هدف ارزش‌گذاری سری B: ۶۰۰–۹۰۰ میلیون دلار (۵–۷.۵ برابر سری A)",
        "مدل درآمد: سه جریان — مجوزدهی IP (SAM ۴۵ میلیارد دلار)، فروش تراشه (SAM ۱۸۰ میلیارد دلار)، خدمات گواهینامه",
      ],
      tags: ["تأمین مالی", "سری B", "Andreessen Horowitz", "ارزش‌گذاری", "TSMC Ventures"],
    },
  },
  {
    id: 41, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(41),
    en: {
      title: "IPO Strategy: NASDAQ Listing,  Valuation",
      narrative: "Ghost Autonomy's IPO strategy targets a 2030 NASDAQ listing with a  valuation range. The valuation is based on three comparable transactions: Mobileye IPO (2022, $17B valuation, 12x revenue); Ambarella (2012, $800M valuation, 8x revenue); Lattice Semiconductor (2018, $1.2B valuation, 6x revenue). Ghost EPU's valuation at IPO is based on 3 OEM design wins × $8M average license value × 50x revenue multiple = $1.2B minimum, plus royalty stream NPV of $1.6B–$3B.",
      strategic: "The IPO timing (2030) is chosen to coincide with the first wave of Level 4 autonomous vehicle deployments, when the $45B ASIL-D processor market will be at peak growth. The dual-listing option (NASDAQ + Hong Kong Stock Exchange) is being evaluated to capture Chinese OEM demand, given that China represents 35% of global autonomous vehicle production.",
      keyPoints: [
        "Target: 2030 NASDAQ IPO,  valuation",
        "Comparable: Mobileye 2022 IPO at $17B (12x revenue)",
        "Valuation floor: 3 OEM design wins × $8M × 50x = $1.2B + royalty NPV $1.6B–$3B",
        "Dual-listing option: NASDAQ + HKEX for Chinese OEM demand (35% of global AV production)",
        "Series A target: $12M for tape-out + ASIL-D certification — 18-month milestone to first Tier-1 design win",
      ],
      tags: ["IPO", "NASDAQ", "Valuation", "Mobileye", "HKEX"],
    },
    fa: {
      title: "استراتژی IPO: پذیرش در NASDAQ، ارزش‌گذاری ",
      narrative: "استراتژی IPO Ghost Autonomy پذیرش NASDAQ در سال ۲۰۳۰ با محدوده ارزش‌گذاری  را هدف قرار می‌دهد. ارزش‌گذاری بر اساس سه معامله قابل مقایسه است: IPO Mobileye (۲۰۲۲، ۱۷ میلیارد دلار، ۱۲ برابر درآمد).",
      strategic: "زمان‌بندی IPO (۲۰۳۰) برای همزمانی با اولین موج استقرار خودروهای خودمختار سطح ۴ انتخاب شده است. گزینه پذیرش دوگانه (NASDAQ + بورس هنگ‌کنگ) برای جذب تقاضای OEM چینی در حال بررسی است.",
      keyPoints: [
        "هدف: IPO NASDAQ 2030، ارزش‌گذاری ",
        "قابل مقایسه: IPO Mobileye 2022 با ۱۷ میلیارد دلار (۱۲ برابر درآمد)",
        "کف ارزش‌گذاری: ۳ برنده طراحی OEM × ۸ میلیون دلار × ۵۰ = ۱.۲ میلیارد دلار + NPV حق امتیاز",
        "گزینه پذیرش دوگانه: NASDAQ + HKEX برای تقاضای OEM چینی (۳۵٪ تولید جهانی AV)",
        "هدف سری A: ۱۲ میلیون دلار برای tape-out + گواهینامه ASIL-D — نقطه عطف ۱۸ ماهه تا اولین برنده Tier-1",
      ],
      tags: ["IPO", "NASDAQ", "ارزش‌گذاری", "Mobileye", "HKEX"],
    },
  },
  {
    id: 42, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(42),
    en: {
      title: "IP Portfolio: 23 Patents, Coq Repository, Trade Secrets",
      narrative: "Ghost Autonomy's IP portfolio consists of: (1) 23 granted patents (12 US, 6 EU, 5 China) covering PICAPD ISA opcodes, Queen Bee BFT architecture, and moment-compression algorithms; (2) 127,000-line Coq proof repository (trade secret, not patented); (3) 8 pending patent applications covering BILIN opcode family extensions and WAL cryptographic audit protocol; (4) 3 trade secrets: TSMC 7nm process optimization parameters, biomass gasification calibration dataset, and OEM integration API specification.",
      strategic: "The IP portfolio creates a multi-layer moat: patents prevent direct copying of the ISA and architecture; the Coq repository creates a knowledge barrier (18 person-years to replicate); trade secrets protect the manufacturing and calibration know-how. The combination of all three layers means that even a well-funded competitor would need 5–8 years to replicate Ghost EPU's capabilities.",
      keyPoints: [
        "23 granted patents: 12 US + 6 EU + 5 China covering ISA, BFT, moment compression",
        "127,000-line Coq repository: 18 person-years, trade secret",
        "8 pending patents: BILIN extensions, WAL cryptographic audit protocol",
        "Multi-layer moat: patents + Coq knowledge barrier + manufacturing trade secrets",
        "Exit paths: Tier-1 acquisition ($500M-$2B), IPO (2030+), or licensing-only model — multiple optionality",
      ],
      tags: ["IP Portfolio", "Patents", "Coq", "Trade Secrets", "Moat"],
    },
    fa: {
      title: "پرتفوی IP: ۲۳ پتنت، مخزن Coq، اسرار تجاری",
      narrative: "پرتفوی IP Ghost Autonomy شامل: (۱) ۲۳ پتنت اعطاشده (۱۲ آمریکا، ۶ اتحادیه اروپا، ۵ چین) پوشش‌دهنده opcodeهای ISA PICAPD، معماری BFT Queen Bee، و الگوریتم‌های فشرده‌سازی گشتاور؛ (۲) مخزن اثبات Coq ۱۲۷,۰۰۰ خطی (راز تجاری)؛ (۳) ۸ درخواست پتنت در انتظار.",
      strategic: "پرتفوی IP یک خندق چندلایه ایجاد می‌کند: پتنت‌ها از کپی‌برداری مستقیم ISA جلوگیری می‌کنند؛ مخزن Coq یک مانع دانشی ایجاد می‌کند (۱۸ سال-نفر برای تکرار)؛ اسرار تجاری دانش تولید و کالیبراسیون را محافظت می‌کنند.",
      keyPoints: [
        "۲۳ پتنت اعطاشده: ۱۲ آمریکا + ۶ اتحادیه اروپا + ۵ چین",
        "مخزن Coq ۱۲۷,۰۰۰ خطی: ۱۸ سال-نفر، راز تجاری",
        "۸ پتنت در انتظار: توسعه‌های BILIN، پروتکل حسابرسی رمزنگاری WAL",
        "خندق چندلایه: پتنت‌ها + مانع دانشی Coq + اسرار تجاری تولید",
        "مسیرهای خروج: تملک Tier-1 (۵۰۰ میلیون تا ۲ میلیارد دلار)، IPO (۲۰۳۰+)، یا مدل فقط مجوزدهی — چندگانگی",
      ],
      tags: ["پرتفوی IP", "پتنت‌ها", "Coq", "اسرار تجاری", "خندق"],
    },
  },
  {
    id: 43, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(43),
    en: {
      title: "Financial Projections 2026–2030: Revenue, EBITDA, Cash Flow",
      narrative: "Ghost Autonomy financial projections (base case): 2026 revenue $0 (pre-revenue, tape-out year), 2027 revenue $4M (first IP licensing deals), 2028 revenue $22M (3 OEM design wins, certification services), 2029 revenue $68M (royalty ramp begins, 50K units shipped), 2030 revenue $185M (500K units/year, 5 OEM design wins). EBITDA turns positive in 2029 at $12M. 2030 EBITDA: $52M (28% margin).",
      strategic: "The revenue ramp is back-loaded because the IP licensing model requires OEM design wins (18–24 month sales cycle) before royalties begin. The 2029 royalty ramp is the critical inflection point: once 3 OEM design wins are in production, the royalty stream becomes self-sustaining and the company achieves positive cash flow without additional funding.",
      keyPoints: [
        "2027: $4M revenue (first IP licensing), 2028: $22M (3 OEM wins)",
        "2029: $68M revenue, EBITDA positive at $12M — royalty ramp begins",
        "2030: $185M revenue, $52M EBITDA (28% margin), 500K units/year",
        "Cash flow positive in 2029 — no additional funding required after Series B",
        "Validation strategy: hardware-in-the-loop simulation + formal model checking + ASIL-D audit trail",
      ],
      tags: ["Financial Projections", "Revenue", "EBITDA", "Royalties", "Cash Flow"],
    },
    fa: {
      title: "پیش‌بینی‌های مالی ۲۰۲۶–۲۰۳۰: درآمد، EBITDA، جریان نقدی",
      narrative: "پیش‌بینی‌های مالی Ghost Autonomy (سناریوی پایه): درآمد ۲۰۲۶: صفر (سال tape-out)، ۲۰۲۷: ۴ میلیون دلار (اولین قراردادهای مجوزدهی IP)، ۲۰۲۸: ۲۲ میلیون دلار (۳ برنده طراحی OEM)، ۲۰۲۹: ۶۸ میلیون دلار (شروع رشد حق امتیاز)، ۲۰۳۰: ۱۸۵ میلیون دلار (۵۰۰ هزار واحد/سال).",
      strategic: "رشد درآمد به دلیل مدل مجوزدهی IP که نیاز به برنده‌های طراحی OEM (چرخه فروش ۱۸–۲۴ ماهه) دارد، به عقب موکول شده است. رشد حق امتیاز ۲۰۲۹ نقطه عطف حیاتی است.",
      keyPoints: [
        "۲۰۲۷: ۴ میلیون دلار درآمد (اولین مجوزدهی IP)، ۲۰۲۸: ۲۲ میلیون دلار (۳ برنده OEM)",
        "۲۰۲۹: ۶۸ میلیون دلار درآمد، EBITDA مثبت در ۱۲ میلیون دلار",
        "۲۰۳۰: ۱۸۵ میلیون دلار درآمد، ۵۲ میلیون دلار EBITDA (حاشیه ۲۸٪)",
        "جریان نقدی مثبت در ۲۰۲۹ — نیازی به تأمین مالی اضافی پس از سری B نیست",
        "استراتژی اعتبارسنجی: شبیه‌سازی سخت‌افزار در حلقه + بررسی مدل رسمی + مسیر حسابرسی ASIL-D",
      ],
      tags: ["پیش‌بینی مالی", "درآمد", "EBITDA", "حق امتیاز", "جریان نقدی"],
    },
  },
  {
    id: 44, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(44),
    en: {
      title: "Risk Matrix: Technical, Regulatory, Market, and Execution Risks",
      narrative: "Ghost Autonomy's risk matrix identifies four risk categories: (1) Technical risks — tape-out yield <85% (probability: 15%, mitigation: TSMC partnership, redundant test structures); (2) Regulatory risks — ASIL-D certification delayed >12 months (probability: 20%, mitigation: parallel certification tracks in EU and US); (3) Market risks — OEM consolidation reduces design win opportunities (probability: 25%, mitigation: Tier-1 licensing model independent of OEM count); (4) Execution risks — key personnel departure (probability: 10%, mitigation: equity retention packages, knowledge documentation in Coq repository).",
      strategic: "The risk matrix is designed to show that Ghost Autonomy's risks are manageable and that the mitigation strategies are already in place. The highest-probability risk (OEM consolidation at 25%) is mitigated by the Tier-1 licensing model, which means that even if the number of OEMs decreases, the number of Tier-1 suppliers (and thus design win opportunities) remains stable.",
      keyPoints: [
        "Technical: tape-out yield <85% (15% probability, TSMC partnership mitigation)",
        "Regulatory: ASIL-D delay >12 months (20% probability, parallel EU/US tracks)",
        "Market: OEM consolidation (25% probability, Tier-1 model mitigates)",
        "Execution: key personnel departure (10% probability, equity + Coq documentation)",
        "Ghost vehicle integration: EPU chip to Ghost Autonomy stack to hydrogen powertrain = vertically integrated demo",
      ],
      tags: ["Risk Matrix", "ASIL-D", "OEM", "Tape-Out", "Mitigation"],
    },
    fa: {
      title: "ماتریس ریسک: ریسک‌های فنی، نظارتی، بازار، و اجرایی",
      narrative: "ماتریس ریسک Ghost Autonomy چهار دسته ریسک را شناسایی می‌کند: (۱) ریسک‌های فنی — بازده tape-out کمتر از ۸۵٪ (احتمال: ۱۵٪)؛ (۲) ریسک‌های نظارتی — تأخیر گواهی‌سازی ASIL-D بیش از ۱۲ ماه (احتمال: ۲۰٪)؛ (۳) ریسک‌های بازار — تجمیع OEM (احتمال: ۲۵٪)؛ (۴) ریسک‌های اجرایی — خروج پرسنل کلیدی (احتمال: ۱۰٪).",
      strategic: "بالاترین ریسک احتمالاتی (تجمیع OEM با ۲۵٪) توسط مدل مجوزدهی Tier-1 کاهش می‌یابد، که به این معناست که حتی اگر تعداد OEMها کاهش یابد، تعداد تأمین‌کنندگان Tier-1 ثابت می‌ماند.",
      keyPoints: [
        "فنی: بازده tape-out کمتر از ۸۵٪ (احتمال ۱۵٪، کاهش: مشارکت TSMC)",
        "نظارتی: تأخیر ASIL-D بیش از ۱۲ ماه (احتمال ۲۰٪، مسیرهای موازی EU/US)",
        "بازار: تجمیع OEM (احتمال ۲۵٪، مدل Tier-1 کاهش می‌دهد)",
        "اجرایی: خروج پرسنل کلیدی (احتمال ۱۰٪، سهام + مستندسازی Coq)",
        "یکپارچه‌سازی خودروی Ghost: تراشه EPU تا پشته Ghost Autonomy تا سیستم محرکه هیدروژنی = نمایش یکپارچه عمودی",
      ],
      tags: ["ماتریس ریسک", "ASIL-D", "OEM", "Tape-Out", "کاهش ریسک"],
    },
  },
  // ── ACT 7: Validation & Results (45–52) ────────────────────────────────────
  {
    id: 45, act: "Validation", actLabel: ACT_LABELS_C.Validation, imageUrl: imgC(45),
    en: {
      title: "Benchmark Results: Ghost EPU vs. NVIDIA Drive Orin",
      narrative: "Ghost EPU benchmark results vs. NVIDIA Drive Orin on the ASIL-D safety compute benchmark suite: (1) Latency: Ghost EPU 6.6ms WCET vs. Orin 23ms average (3.5x improvement); (2) Power efficiency: Ghost EPU 3.8 TOPS/W vs. Orin 2.5 TOPS/W (52% improvement); (3) Safety: Ghost EPU 0 conservation law violations in 10⁸ test cases vs. Orin N/A (no conservation law checking); (4) Certification: Ghost EPU ASIL-D certifiable vs. Orin ASIL-B maximum.",
      strategic: "The benchmark results demonstrate that Ghost EPU is not just safer than NVIDIA Drive Orin — it is also faster and more power-efficient. This is counterintuitive because formal safety guarantees are usually associated with performance penalties. The reason Ghost EPU achieves both is the moment compression: by reducing the problem dimensionality by 89.7x, Ghost EPU can afford to spend cycles on formal verification without sacrificing throughput.",
      keyPoints: [
        "Latency: Ghost EPU 6.6ms WCET vs. Orin 23ms average (3.5x faster)",
        "Power: Ghost EPU 3.8 TOPS/W vs. Orin 2.5 TOPS/W (52% more efficient)",
        "Safety: 0 conservation violations in 10⁸ tests vs. Orin N/A",
        "Certification: Ghost EPU ASIL-D vs. Orin ASIL-B maximum",
        "2030 vision: Ghost EPU in 10M autonomous vehicles/year — $5B annual royalty stream at $0.50/unit",
      ],
      tags: ["Benchmark", "NVIDIA Drive Orin", "ASIL-D", "Latency", "Power Efficiency"],
    },
    fa: {
      title: "نتایج بنچمارک: Ghost EPU در برابر NVIDIA Drive Orin",
      narrative: "نتایج بنچمارک Ghost EPU در برابر NVIDIA Drive Orin در مجموعه بنچمارک محاسبات ایمنی ASIL-D: (۱) تأخیر: WCET 6.6 میلی‌ثانیه Ghost EPU در برابر میانگین ۲۳ میلی‌ثانیه Orin (بهبود ۳.۵ برابری)؛ (۲) کارایی توان: ۳.۸ TOPS/W در برابر ۲.۵ TOPS/W (بهبود ۵۲٪)؛ (۳) ایمنی: ۰ نقض قانون بقا در ۱۰⁸ مورد آزمایش.",
      strategic: "نتایج بنچمارک نشان می‌دهد که Ghost EPU نه تنها ایمن‌تر از NVIDIA Drive Orin است — بلکه سریع‌تر و کارآمدتر از نظر توان نیز هست. دلیل این است که فشرده‌سازی گشتاور ۸۹.۷:۱ ابعاد مسئله را کاهش می‌دهد.",
      keyPoints: [
        "تأخیر: WCET 6.6 میلی‌ثانیه Ghost EPU در برابر میانگین ۲۳ میلی‌ثانیه Orin (۳.۵ برابر سریع‌تر)",
        "توان: ۳.۸ TOPS/W در برابر ۲.۵ TOPS/W (۵۲٪ کارآمدتر)",
        "ایمنی: ۰ نقض بقا در ۱۰⁸ آزمایش در برابر N/A Orin",
        "گواهی‌سازی: Ghost EPU ASIL-D در برابر حداکثر ASIL-B Orin",
        "چشم‌انداز ۲۰۳۰: Ghost EPU در ۱۰ میلیون خودروی خودمختار/سال — ۵ میلیارد دلار جریان حق امتیاز سالانه",
      ],
      tags: ["بنچمارک", "NVIDIA Drive Orin", "ASIL-D", "تأخیر", "کارایی توان"],
    },
  },
  {
    id: 46, act: "Validation", actLabel: ACT_LABELS_C.Validation, imageUrl: imgC(46),
    en: {
      title: "Experimental Validation: Biomass Gasification Test Results",
      narrative: "The Ghost EPU was validated on the original problem that motivated its design: biomass gasification particle size distribution tracking. Test setup: 500 kg/h biomass gasifier, 128-channel LiDAR particle tracking, Ghost EPU real-time PBE solving. Results: Ghost EPU tracked particle size distribution with 0.3% mean absolute error vs. 8.7% for GPU-based solver; Ghost EPU solved PBE in 1.8ms vs. 340ms for GPU; Ghost EPU detected 3 conservation law violations that the GPU solver missed (all three were precursors to gasifier instability events).",
      strategic: "The biomass gasification validation is significant for two reasons: (1) it is the original application domain, so the 89.7:1 compression ratio is validated in the exact context where it was measured; (2) the 3 conservation law violations detected by Ghost EPU but missed by the GPU solver demonstrate the practical safety value of hardware-level conservation law enforcement.",
      keyPoints: [
        "Test: 500 kg/h biomass gasifier, 128-channel LiDAR, real-time PBE solving",
        "Accuracy: 0.3% MAE (Ghost EPU) vs. 8.7% MAE (GPU solver) — 29x improvement",
        "Speed: 1.8ms (Ghost EPU) vs. 340ms (GPU) — 189x improvement",
        "Safety: 3 conservation violations detected by Ghost EPU, missed by GPU — all were instability precursors",
        "Appendix A: PICAPD ISA full instruction set — 7 classes, 64 opcodes, all physics-grounded",
      ],
      tags: ["Biomass Gasification", "PBE", "Experimental Validation", "Conservation Laws", "LiDAR"],
    },
    fa: {
      title: "اعتبارسنجی تجربی: نتایج آزمایش گازی‌سازی زیست‌توده",
      strategic: "اعتبارسنجی تجربی روی مسئله اصلی که طراحی Ghost EPU را برانگیخت، نشان می‌دهد که رویکرد سخت‌افزاری نظری نیست — نتایج قابل اندازه‌گیری در محیط‌های صنعتی واقعی ارائه می‌دهد.",
      narrative: "Ghost EPU روی مسئله اصلی که طراحی آن را برانگیخت اعتبارسنجی شد: ردیابی توزیع اندازه ذرات گازی‌سازی زیست‌توده. نتایج: Ghost EPU توزیع اندازه ذرات را با دقت ۹۸.۷٪ ردیابی کرد — ۲۳٪ بهتر از GPU NVIDIA A100 با مصرف توان ۱۲۰ برابر کمتر. این اعتبارسنجی نشان می‌دهد که معادلات PBE می‌توانند در سخت‌افزار تخصصی با کارایی بی‌سابقه اجرا شوند.",
      keyPoints: ["دقت ردیابی ۹۸.۷٪ در برابر ۷۵.۳٪ GPU", "مصرف توان ۱۲۰ برابر کمتر از A100", "اعتبارسنجی کامل معادلات PBE", "پایه‌ای برای تمام کاربردهای صنعتی", "پیوست A: مجموعه دستورالعمل کامل PICAPD ISA — ۷ کلاس، ۶۴ opcode، همه فیزیک‌محور"],
      tags: ["اعتبارسنجی", "گازی‌سازی", "PBE", "مقایسه GPU"]
    }
  },
  {
    id: 47, act: "Validation", actLabel: ACT_LABELS_C.Validation, imageUrl: imgC(47),
    en: {
      title: "OEM Integration: Tier-1 Supplier Qualification Results",
      narrative: "Ghost EPU completed Tier-1 supplier qualification with three major OEMs (anonymized as OEM-A, OEM-B, OEM-C) covering automotive-grade reliability testing. Results: 0 field failures across 2.3 million simulated drive hours, ASIL-D certification achieved in 14 months (industry average: 24 months), and thermal performance within spec at -40°C to +125°C junction temperature range.",
      strategic: "OEM qualification is the highest barrier to entry in automotive semiconductors. Completing qualification with three Tier-1 OEMs simultaneously demonstrates that Ghost EPU is not a research prototype — it is a production-ready component ready for volume deployment.",
      keyPoints: [
        "0 field failures across 2.3M simulated drive hours",
        "ASIL-D certification in 14 months vs. 24-month industry average",
        "Thermal spec: -40°C to +125°C junction temperature",
        "Three simultaneous OEM qualifications — unprecedented for a startup",
        "Appendix B: Queen Bee BFT proof — Byzantine agreement in O(n2) messages, f < n/3 fault tolerance",
      ],
      tags: ["OEM Integration", "ASIL-D", "Tier-1", "Qualification", "Automotive"],
    },
    fa: {
      title: "یکپارچه‌سازی OEM: نتایج صلاحیت‌سنجی تأمین‌کننده Tier-1",
      strategic: "صلاحیت‌سنجی OEM بالاترین مانع ورود در نیمه‌هادی‌های خودرویی است. تکمیل صلاحیت‌سنجی با سه OEM Tier-1 به‌طور همزمان نشان می‌دهد که Ghost EPU یک نمونه تحقیقاتی نیست — یک قطعه آماده تولید است.",
      narrative: "Ghost EPU صلاحیت‌سنجی تأمین‌کننده Tier-1 را با سه OEM بزرگ تکمیل کرد. نتایج: ۰ خرابی میدانی در ۲.۳ میلیون ساعت رانندگی شبیه‌سازی‌شده، گواهینامه ASIL-D در ۱۴ ماه (میانگین صنعت: ۲۴ ماه)، و عملکرد حرارتی در محدوده -۴۰°C تا +۱۲۵°C دمای اتصال.",
      keyPoints: ["۰ خرابی در ۲.۳ میلیون ساعت شبیه‌سازی", "ASIL-D در ۱۴ ماه در برابر ۲۴ ماه میانگین", "محدوده حرارتی -۴۰°C تا +۱۲۵°C", "سه صلاحیت‌سنجی OEM همزمان", "پیوست B: اثبات Queen Bee BFT — توافق بیزانس در O(n2) پیام، تحمل خطا f < n/3"],
      tags: ["یکپارچه‌سازی OEM", "ASIL-D", "Tier-1", "صلاحیت‌سنجی"]
    }
  },
  {
    id: 48, act: "Validation", actLabel: ACT_LABELS_C.Validation, imageUrl: imgC(48),
    en: {
      title: "Comparative Benchmark: Ghost EPU vs. NVIDIA Orin vs. Mobileye EyeQ6",
      narrative: "Head-to-head benchmark across five dimensions: (1) Latency: Ghost EPU 0.8ms, Orin 12ms, EyeQ6 8ms. (2) Power: Ghost EPU 4.2W, Orin 65W, EyeQ6 12W. (3) TOPS/W: Ghost EPU 47.6, Orin 4.0, EyeQ6 8.3. (4) ASIL-D native: Ghost EPU yes, Orin no (software layer required), EyeQ6 partial. (5) BFT native: Ghost EPU yes, Orin no, EyeQ6 no.",
      strategic: "The benchmark demonstrates that Ghost EPU is not competing on a single dimension — it dominates across all five dimensions simultaneously. This is the result of co-designing the ISA, microarchitecture, and safety architecture from first principles rather than adapting a general-purpose GPU.",
      keyPoints: [
        "Latency: 15x better than Orin, 10x better than EyeQ6",
        "Power efficiency: 11.9x better than Orin (TOPS/W)",
        "Only processor with native ASIL-D + BFT in silicon",
        "Ghost EPU wins all 5 benchmark dimensions simultaneously",
        "Appendix C: T-distance derivation — from Boltzmann entropy to scale-invariant sensor metric",
      ],
      tags: ["Benchmark", "NVIDIA Orin", "Mobileye EyeQ6", "TOPS/W", "Competitive"],
    },
    fa: {
      title: "بنچمارک مقایسه‌ای: Ghost EPU در برابر NVIDIA Orin و Mobileye EyeQ6",
      strategic: "بنچمارک نشان می‌دهد که Ghost EPU در یک بُعد رقابت نمی‌کند — در تمام پنج بُعد به‌طور همزمان برتری دارد. این نتیجه طراحی مشترک ISA، میکروآرکیتکچر، و معماری ایمنی از اصول اولیه است.",
      narrative: "بنچمارک مستقیم در پنج بُعد: (۱) تأخیر: Ghost EPU 0.8ms، Orin 12ms، EyeQ6 8ms. (۲) توان: Ghost EPU 4.2W، Orin 65W، EyeQ6 12W. (۳) TOPS/W: Ghost EPU 47.6، Orin 4.0، EyeQ6 8.3. (۴) ASIL-D بومی: Ghost EPU بله، Orin خیر، EyeQ6 جزئی. (۵) BFT بومی: Ghost EPU بله، Orin خیر، EyeQ6 خیر.",
      keyPoints: ["تأخیر ۱۵ برابر بهتر از Orin", "کارایی توان ۱۱.۹ برابر بهتر (TOPS/W)", "تنها پردازنده با ASIL-D + BFT بومی", "برنده تمام ۵ بُعد بنچمارک", "پیوست C: استخراج T-distance — از آنتروپی بولتزمان تا معیار حسگر مقیاس‌ناوردا"],
      tags: ["بنچمارک", "NVIDIA Orin", "Mobileye", "TOPS/W", "رقابتی"]
    }
  },
  {
    id: 49, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(49),
    en: {
      title: "Business Model: Hardware + IP Licensing + Safety Certification Stack",
      narrative: "Ghost EPU monetizes through three revenue streams: (1) Hardware sales: $2,400/unit at 100k volume, targeting 2M units/year by 2030 ($4.8B revenue). (2) IP licensing: $0.15/TOPS-hour for cloud inference using Ghost EPU ISA, targeting hyperscalers. (3) Safety certification stack: $180K/vehicle-platform for ASIL-D certification package including toolchain, formal proofs, and regulatory filing support.",
      strategic: "The three-stream model creates defensible moats at each layer: hardware moat (custom silicon), IP moat (patented ISA and microarchitecture), and regulatory moat (pre-certified safety stack). Competitors must replicate all three simultaneously to displace Ghost EPU.",
      keyPoints: [
        "Hardware: $2,400/unit × 2M units = $4.8B by 2030",
        "IP licensing: $0.15/TOPS-hour targeting hyperscalers",
        "Safety stack: $180K/platform — recurring per new vehicle platform",
        "Three independent moats: hardware, IP, regulatory",
        "Appendix D: Register allocation proof — 128+96+80+80+64+64=512 is Pareto-optimal under Landauer bound",
      ],
      tags: ["Business Model", "Revenue Streams", "IP Licensing", "Safety Stack", "Moat"],
    },
    fa: {
      title: "مدل کسب‌وکار: سخت‌افزار + لایسنس IP + بسته گواهینامه ایمنی",
      strategic: "مدل سه‌جریانی در هر لایه خندق‌های دفاعی ایجاد می‌کند: خندق سخت‌افزاری (سیلیکون سفارشی)، خندق IP (ISA و میکروآرکیتکچر ثبت‌شده)، و خندق نظارتی (بسته ایمنی پیش‌گواهی‌شده).",
      narrative: "Ghost EPU از طریق سه جریان درآمدی کسب درآمد می‌کند: (۱) فروش سخت‌افزار: ۲,۴۰۰ دلار/واحد در حجم ۱۰۰ هزار، هدف ۲ میلیون واحد/سال تا ۲۰۳۰ (۴.۸ میلیارد دلار). (۲) لایسنس IP: ۰.۱۵ دلار/TOPS-ساعت برای استنتاج ابری. (۳) بسته گواهینامه ایمنی: ۱۸۰ هزار دلار/پلتفرم خودرو.",
      keyPoints: ["سخت‌افزار: ۴.۸ میلیارد دلار تا ۲۰۳۰", "لایسنس IP: ۰.۱۵ دلار/TOPS-ساعت", "بسته ایمنی: ۱۸۰ هزار دلار/پلتفرم", "سه خندق مستقل: سخت‌افزار، IP، نظارتی", "پیوست D: اثبات تخصیص رجیستر — ۱۲۸+۹۶+۸۰+۸۰+۶۴+۶۴=۵۱۲ تحت کران لانداور بهینه پارتو است"],
      tags: ["مدل کسب‌وکار", "جریان درآمد", "لایسنس IP", "بسته ایمنی"]
    }
  },
  {
    id: 50, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(50),
    en: {
      title: "Market Sizing: TAM/SAM/SOM for Autonomous Vehicle Compute",
      narrative: "TAM (2030): $847B — total autonomous vehicle compute market including all processors, software, and safety certification. SAM: $124B — automotive-grade AI processors with ASIL-D requirement (Ghost EPU's addressable segment). SOM (2030): $12.4B — 10% SAM capture based on 2M units × $2,400 hardware + IP licensing + safety stack. Key driver: regulatory mandates requiring ASIL-D for Level 3+ autonomy in EU (2026), US (2027), China (2028).",
      strategic: "The regulatory mandate timeline creates a hard deadline for OEMs: they must qualify ASIL-D processors before 2026 (EU). Ghost EPU is the only processor that has completed Tier-1 OEM qualification with native ASIL-D. This creates a 24-month window of competitive exclusivity.",
      keyPoints: [
        "TAM $847B → SAM $124B → SOM $12.4B by 2030",
        "Regulatory mandates: EU 2026, US 2027, China 2028",
        "24-month window of competitive exclusivity (OEM qualification lead)",
        "10% SAM capture = $12.4B — conservative given qualification advantage",
        "Appendix E: epsilon_action calibration — temperature analog maps to physical action space with SI units",
      ],
      tags: ["Market Sizing", "TAM SAM SOM", "Regulatory Mandate", "ASIL-D", "2030"],
    },
    fa: {
      title: "اندازه‌گیری بازار: TAM/SAM/SOM برای محاسبات خودروی خودران",
      strategic: "جدول زمانی الزامات نظارتی یک مهلت سخت برای OEMها ایجاد می‌کند: باید پردازنده‌های ASIL-D را قبل از ۲۰۲۶ (EU) واجد شرایط کنند. Ghost EPU تنها پردازنده‌ای است که صلاحیت‌سنجی OEM Tier-1 با ASIL-D بومی را تکمیل کرده.",
      narrative: "TAM (2030): ۸۴۷ میلیارد دلار. SAM: ۱۲۴ میلیارد دلار (پردازنده‌های AI خودرویی با الزام ASIL-D). SOM (2030): ۱۲.۴ میلیارد دلار — ۱۰٪ SAM بر اساس ۲ میلیون واحد × ۲,۴۰۰ دلار سخت‌افزار + لایسنس IP + بسته ایمنی. محرک کلیدی: الزامات نظارتی برای ASIL-D در سطح ۳+ خودران در EU (2026)، US (2027)، چین (2028).",
      keyPoints: ["TAM ۸۴۷ → SAM ۱۲۴ → SOM ۱۲.۴ میلیارد دلار تا ۲۰۳۰", "الزامات نظارتی: EU 2026، US 2027، چین 2028", "پنجره ۲۴ ماهه انحصار رقابتی", "۱۰٪ SAM = ۱۲.۴ میلیارد دلار", "پیوست E: کالیبراسیون epsilon_action — آنالوگ دما به فضای عمل فیزیکی با واحدهای SI نگاشته می‌شود"],
      tags: ["اندازه‌گیری بازار", "TAM SAM SOM", "الزام نظارتی", "ASIL-D"]
    }
  },
  {
    id: 51, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(51),
    en: {
      title: "Funding Strategy: Series B to IPO Roadmap",
      narrative: "Series B ($85M, Q3 2026): fund tape-out of Ghost EPU v2.0 (TSMC 3nm), expand OEM qualification to 5 additional OEMs, hire 40 engineers. Series C ($220M, Q1 2028): fund volume production ramp, establish Asia-Pacific manufacturing partnership, complete regulatory filing in EU/US/China. IPO (2030, target): based on $840M ARR at 5x revenue multiple, with $12.4B SOM capture trajectory.",
      strategic: "The funding roadmap is milestone-driven, not time-driven. Each round is triggered by a specific technical and commercial milestone: Series B by v2.0 tape-out, Series C by first OEM production contract, IPO by $100M ARR. This structure minimizes dilution and maximizes valuation at each stage.",
      keyPoints: [
        "Series B $85M (Q3 2026): v2.0 tape-out + 5 OEM qualifications",
        "Series C $220M (Q1 2028): volume production + regulatory filing",
        "IPO 2030: at $840M ARR × 5x multiple",
        "Milestone-driven structure minimizes dilution",
        "Appendix F: Gasification validation — 4B state space, 200-register working set, 20M:1 compression ratio",
      ],
      tags: ["Funding", "Series B", "IPO", "Valuation", "Roadmap"],
    },
    fa: {
      title: "استراتژی تأمین مالی: نقشه راه از Series B تا IPO",
      strategic: "نقشه راه تأمین مالی مبتنی بر نقاط عطف است، نه زمان. هر دور با یک نقطه عطف فنی و تجاری خاص فعال می‌شود: Series B با tape-out نسخه ۲.۰، Series C با اولین قرارداد تولید OEM، IPO با ۱۰۰ میلیون دلار ARR.",
      narrative: "Series B (۸۵ میلیون دلار، Q3 2026): tape-out Ghost EPU v2.0 (TSMC 3nm)، گسترش صلاحیت‌سنجی به ۵ OEM اضافی، استخدام ۴۰ مهندس. Series C (۲۲۰ میلیون دلار، Q1 2028): رمپ تولید انبوه، مشارکت تولیدی آسیا-اقیانوسیه، ثبت نظارتی EU/US/چین. IPO (2030، هدف).",
      keyPoints: ["Series B ۸۵ میلیون دلار: tape-out v2.0 + ۵ صلاحیت OEM", "Series C ۲۲۰ میلیون دلار: تولید انبوه + ثبت نظارتی", "IPO 2030:", "ساختار مبتنی بر نقطه عطف", "پیوست F: اعتبارسنجی گازی‌سازی — فضای ۴ میلیارد حالت، مجموعه کاری ۲۰۰ رجیستر، نسبت فشرده‌سازی ۲۰ میلیون:۱"],
      tags: ["تأمین مالی", "Series B", "IPO", "ارزش‌گذاری", "نقشه راه"]
    }
  },
  {
    id: 52, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(52),
    en: {
      title: "IP Portfolio: 23 Patents Covering ISA, Microarchitecture, and Safety",
      narrative: "Ghost EPU's IP portfolio comprises 23 granted patents and 41 pending applications across three categories: (1) ISA patents (8 granted): PICAPD instruction encoding, bilinear form execution units, PBE solver hardware. (2) Microarchitecture patents (9 granted): Queen Bee BFT protocol, WAL memory subsystem, register file organization. (3) Safety patents (6 granted): ASIL-D decomposition methodology, formal verification flow, hardware fault injection testing.",
      strategic: "The IP portfolio creates a patent thicket that competitors must navigate to build a comparable processor. The combination of ISA + microarchitecture + safety patents means that even a well-funded competitor would require 5–7 years to design around the portfolio while Ghost EPU continues to advance.",
      keyPoints: [
        "23 granted patents + 41 pending across ISA, microarchitecture, safety",
        "PICAPD ISA encoding: core moat — competitors must redesign from scratch",
        "Queen Bee BFT protocol: only hardware BFT implementation in automotive",
        "5–7 year design-around timeline for well-funded competitors",
        "Appendix G: Automotive validation — 1T state space, 512-register working set, 20M:1 compression ratio",
      ],
      tags: ["IP Portfolio", "Patents", "PICAPD", "Queen Bee", "Moat"],
    },
    fa: {
      title: "پورتفولیو IP: ۲۳ پتنت پوشش‌دهنده ISA، میکروآرکیتکچر، و ایمنی",
      strategic: "پورتفولیو IP یک تور پتنتی ایجاد می‌کند که رقبا باید از آن عبور کنند. ترکیب پتنت‌های ISA + میکروآرکیتکچر + ایمنی به این معنی است که حتی یک رقیب با منابع کافی به ۵–۷ سال نیاز دارد تا راهی دور پورتفولیو طراحی کند.",
      narrative: "پورتفولیو IP شامل ۲۳ پتنت اعطاشده و ۴۱ درخواست در انتظار در سه دسته: (۱) پتنت‌های ISA (۸ اعطاشده): رمزگذاری دستورالعمل PICAPD، واحدهای اجرای فرم دوخطی، سخت‌افزار حل‌کننده PBE. (۲) پتنت‌های میکروآرکیتکچر (۹ اعطاشده): پروتکل BFT Queen Bee، زیرسیستم حافظه WAL، سازمان‌دهی فایل رجیستر. (۳) پتنت‌های ایمنی (۶ اعطاشده).",
      keyPoints: ["۲۳ پتنت اعطاشده + ۴۱ در انتظار", "رمزگذاری ISA PICAPD: خندق اصلی", "پروتکل BFT Queen Bee: تنها پیاده‌سازی سخت‌افزاری در خودرو", "جدول زمانی ۵–۷ ساله برای طراحی دور", "پیوست G: اعتبارسنجی خودرویی — فضای ۱ تریلیون حالت، مجموعه کاری ۵۱۲ رجیستر، نسبت فشرده‌سازی ۲۰ میلیون:۱"],
      tags: ["پورتفولیو IP", "پتنت", "PICAPD", "Queen Bee", "خندق"]
    }
  },
  {
    id: 53, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(53),
    en: {
      title: "Strategic Partnerships: HPSA Vertical Integration and Quad-Plus Alliance",
      narrative: "Ghost EPU operates within two strategic frameworks: (1) HPSA (High-Performance Safety Architecture) Vertical Integration: a consortium of 7 companies covering chip design (Ghost), EDA tools, foundry (TSMC), packaging, board design, system integration, and OEM. This vertical integration reduces time-to-market by 40% and cost by 28% vs. traditional supply chain. (2) Quad-Plus Alliance: a geopolitical supply chain diversification strategy with manufacturing nodes in Taiwan, Japan, South Korea, and the Netherlands.",
      strategic: "The HPSA consortium and Quad-Plus Alliance transform Ghost EPU from a chip company into a platform company. Platform companies command 3–5x higher valuations than component companies because they capture value at multiple layers of the stack.",
      keyPoints: [
        "HPSA: 7-company consortium covering full stack from EDA to OEM",
        "40% faster time-to-market, 28% lower cost vs. traditional supply chain",
        "Quad-Plus: manufacturing in Taiwan, Japan, South Korea, Netherlands",
        "Platform company valuation: 3–5x higher than component company",
        "Appendix H: ISO 26262 ASIL-D mapping — each EPU functional block traced to specific ASIL-D requirement",
      ],
      tags: ["HPSA", "Quad-Plus", "Strategic Partnership", "Vertical Integration", "Platform"],
    },
    fa: {
      title: "مشارکت‌های استراتژیک: یکپارچه‌سازی عمودی HPSA و اتحاد Quad-Plus",
      strategic: "کنسرسیوم HPSA و اتحاد Quad-Plus Ghost EPU را از یک شرکت چیپ به یک شرکت پلتفرم تبدیل می‌کنند. شرکت‌های پلتفرم ارزش‌گذاری ۳–۵ برابر بالاتری نسبت به شرکت‌های قطعه دارند.",
      narrative: "Ghost EPU در دو چارچوب استراتژیک عمل می‌کند: (۱) یکپارچه‌سازی عمودی HPSA: کنسرسیوم ۷ شرکتی پوشش‌دهنده طراحی چیپ، ابزار EDA، کارخانه (TSMC)، بسته‌بندی، طراحی برد، یکپارچه‌سازی سیستم، و OEM. (۲) اتحاد Quad-Plus: تنوع‌بخشی زنجیره تأمین ژئوپلیتیکی با گره‌های تولیدی در تایوان، ژاپن، کره جنوبی، و هلند.",
      keyPoints: ["HPSA: کنسرسیوم ۷ شرکتی پوشش کامل پشته", "۴۰٪ سریع‌تر به بازار، ۲۸٪ هزینه کمتر", "Quad-Plus: تولید در ۴ کشور", "ارزش‌گذاری پلتفرم: ۳–۵ برابر بالاتر", "پیوست H: نگاشت ASIL-D ISO 26262 — هر بلوک کارکردی EPU به الزام ASIL-D خاص ردیابی شده است"],
      tags: ["HPSA", "Quad-Plus", "مشارکت استراتژیک", "یکپارچه‌سازی عمودی"]
    }
  },
  {
    id: 54, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(54),
    en: {
      title: "Philosophy of Design Contracts: CSS and Information Contracts",
      narrative: "The Philosophy of Design Contracts (PDC) framework defines three types of contracts that govern Ghost EPU's architecture: (1) Computational Safety Specification (CSS): formal contracts between hardware and software specifying what computations are guaranteed to be correct under what conditions. (2) Information contracts: specifications of what information must be preserved across computation boundaries (Landauer's principle applied to hardware design). (3) Temporal contracts: specifications of timing guarantees (WCET bounds, jitter bounds, latency bounds).",
      strategic: "PDC is the theoretical foundation that makes ASIL-D certification tractable. Without formal contracts, ASIL-D certification requires exhaustive testing (impossible for complex systems). With PDC, certification reduces to verifying that contracts are satisfied — a tractable formal verification problem.",
      keyPoints: [
        "CSS: formal contracts guaranteeing computational correctness under conditions",
        "Information contracts: Landauer's principle applied to hardware design",
        "Temporal contracts: WCET, jitter, latency bounds as first-class specifications",
        "PDC makes ASIL-D certification tractable via formal verification",
        "Appendix I: Financial model assumptions — TAM growth 28% CAGR, ASP $45/chip, 5% market share by 2030",
      ],
      tags: ["PDC", "CSS", "Information Contracts", "Landauer", "ASIL-D"],
    },
    fa: {
      title: "فلسفه قراردادهای طراحی: CSS و قراردادهای اطلاعاتی",
      strategic: "PDC پایه نظری است که گواهینامه ASIL-D را عملی می‌کند. بدون قراردادهای رسمی، گواهینامه ASIL-D نیاز به آزمایش جامع دارد (برای سیستم‌های پیچیده غیرممکن). با PDC، گواهینامه به تأیید رضایت قراردادها کاهش می‌یابد.",
      narrative: "چارچوب فلسفه قراردادهای طراحی (PDC) سه نوع قرارداد تعریف می‌کند: (۱) مشخصات ایمنی محاسباتی (CSS): قراردادهای رسمی بین سخت‌افزار و نرم‌افزار. (۲) قراردادهای اطلاعاتی: مشخصات اطلاعاتی که باید در مرزهای محاسباتی حفظ شوند (اصل Landauer). (۳) قراردادهای زمانی: تضمین‌های زمان‌بندی (کران‌های WCET، jitter، تأخیر).",
      keyPoints: ["CSS: قراردادهای رسمی صحت محاسباتی", "قراردادهای اطلاعاتی: اصل Landauer در طراحی سخت‌افزار", "قراردادهای زمانی: WCET، jitter، تأخیر", "PDC گواهینامه ASIL-D را از طریق تأیید رسمی عملی می‌کند", "پیوست I: فرضیات مدل مالی — رشد TAM ۲۸٪ CAGR، ASP ۴۵ دلار/تراشه، ۵٪ سهم بازار تا ۲۰۳۰"],
      tags: ["PDC", "CSS", "قراردادهای اطلاعاتی", "Landauer", "ASIL-D"]
    }
  },
  {
    id: 55, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(55),
    en: {
      title: "Uncertainty Quantification as a First-Class Hardware Primitive",
      narrative: "Ghost EPU treats uncertainty quantification (UQ) as a hardware primitive rather than a software post-processing step. The UQ unit computes Bayesian confidence intervals for every output using propagated uncertainty from input sensors. This is implemented via the Moment-Isomorphism Theorem: the statistical moments of the output distribution are computed directly from the moments of the input distribution using the Jacobian of the computation.",
      strategic: "Hardware UQ is a regulatory requirement for Level 4/5 autonomy in the EU AI Act (2025) and ISO 21448 (SOTIF). Ghost EPU is the only processor that provides certified UQ outputs. This means OEMs using Ghost EPU can directly use the UQ outputs for regulatory compliance without additional software layers.",
      keyPoints: [
        "UQ as hardware primitive: Bayesian confidence intervals for every output",
        "Moment-Isomorphism Theorem: output moments from input moments via Jacobian",
        "EU AI Act + ISO 21448 (SOTIF) require certified UQ outputs",
        "Ghost EPU: only processor with certified hardware UQ",
        "Appendix J: Risk register — 12 identified risks with mitigation strategies and residual risk ratings",
      ],
      tags: ["Uncertainty Quantification", "Bayesian", "Moment-Isomorphism", "SOTIF", "EU AI Act"],
    },
    fa: {
      title: "کمیت‌سنجی عدم‌قطعیت به عنوان یک Primitive سخت‌افزاری درجه اول",
      strategic: "UQ سخت‌افزاری یک الزام نظارتی برای خودران سطح ۴/۵ در قانون AI اتحادیه اروپا (2025) و ISO 21448 (SOTIF) است. Ghost EPU تنها پردازنده‌ای است که خروجی‌های UQ گواهی‌شده ارائه می‌دهد.",
      narrative: "Ghost EPU کمیت‌سنجی عدم‌قطعیت (UQ) را به عنوان یک primitive سخت‌افزاری در نظر می‌گیرد. واحد UQ فاصله‌های اطمینان بیزی را برای هر خروجی با استفاده از عدم‌قطعیت منتشرشده از سنسورهای ورودی محاسبه می‌کند. این از طریق قضیه Moment-Isomorphism پیاده‌سازی می‌شود.",
      keyPoints: ["UQ به عنوان primitive سخت‌افزاری", "قضیه Moment-Isomorphism: لحظات خروجی از لحظات ورودی", "قانون AI EU + ISO 21448 نیاز به خروجی UQ گواهی‌شده دارند", "Ghost EPU: تنها پردازنده با UQ سخت‌افزاری گواهی‌شده", "پیوست J: ثبت ریسک — ۱۲ ریسک شناسایی‌شده با استراتژی‌های کاهش و رتبه‌بندی ریسک باقی‌مانده"],
      tags: ["کمیت‌سنجی عدم‌قطعیت", "بیزی", "Moment-Isomorphism", "SOTIF"]
    }
  },
  {
    id: 56, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(56),
    en: {
      title: "Signal Processing Unification: From Stencil to Spectral via UFP",
      narrative: "The Universal Filtration Primitive (UFP) unifies all signal processing operations in Ghost EPU under a single five-component framework: (Kernel K, Domain D, Metric M, Boundary B, Composition C). Spatial filtering (stencil convolution), frequency filtering (FFT-based), statistical filtering (Kalman, particle), and probabilistic filtering (Bayesian) are all instances of UFP with different (K, D, M, B, C) configurations. This unification means a single hardware unit handles all signal processing modes.",
      strategic: "UFP unification reduces Ghost EPU's silicon area by 34% compared to a design with separate units for each signal processing type. This area reduction directly translates to lower power consumption, lower cost, and higher yield — all critical for automotive-grade production.",
      keyPoints: [
        "UFP: (K, D, M, B, C) — five components unify all signal processing",
        "Stencil, FFT, Kalman, Bayesian — all UFP instances",
        "34% silicon area reduction vs. separate-unit design",
        "Single hardware unit handles all signal processing modes",
        "Appendix K: Team bios — founder dual PhD (petroleum + chemical engineering) + 7 years LLM practitioner",
      ],
      tags: ["UFP", "Signal Processing", "Unification", "Silicon Area", "Kalman"],
    },
    fa: {
      title: "یکپارچه‌سازی پردازش سیگنال: از Stencil تا Spectral از طریق UFP",
      strategic: "یکپارچه‌سازی UFP مساحت سیلیکون Ghost EPU را ۳۴٪ نسبت به طراحی با واحدهای جداگانه کاهش می‌دهد. این کاهش مساحت مستقیماً به مصرف توان کمتر، هزینه کمتر، و بازده بالاتر ترجمه می‌شود.",
      narrative: "UFP تمام عملیات پردازش سیگنال در Ghost EPU را تحت یک چارچوب پنج‌مؤلفه‌ای یکپارچه می‌کند: (K, D, M, B, C). فیلتر فضایی (کانولوشن stencil)، فیلتر فرکانسی (مبتنی بر FFT)، فیلتر آماری (Kalman، ذره‌ای)، و فیلتر احتمالاتی (بیزی) همگی نمونه‌های UFP با پیکربندی‌های مختلف هستند.",
      keyPoints: ["UFP: (K, D, M, B, C) — پنج مؤلفه همه پردازش سیگنال را یکپارچه می‌کنند", "Stencil، FFT، Kalman، بیزی — همه نمونه‌های UFP", "کاهش ۳۴٪ مساحت سیلیکون", "یک واحد سخت‌افزاری همه حالت‌های پردازش سیگنال را مدیریت می‌کند", "پیوست K: بیوگرافی تیم — دکترای دوگانه بنیان‌گذار (مهندسی نفت + شیمی) + ۷ سال تجربه LLM"],
      tags: ["UFP", "پردازش سیگنال", "یکپارچه‌سازی", "مساحت سیلیکون", "Kalman"]
    }
  },
  {
    id: 57, act: "PDC", actLabel: ACT_LABELS_C.PDC, imageUrl: imgC(57),
    en: {
      title: "Temporal State Management in Hardware: T⁰ Manager Implementation",
      narrative: "Ghost EPU implements the T⁰ temporal state manager in hardware — a dedicated unit that manages the temporal consistency of all computational state. The T⁰ manager enforces three invariants: (1) Causal consistency: outputs cannot depend on future inputs. (2) Temporal monotonicity: the system's internal clock cannot go backward. (3) State integrity: the Landauer bound is enforced — no information is destroyed without recording the destruction event in the WAL.",
      strategic: "Hardware T⁰ management is the key enabler for Ghost EPU's formal verification approach. By enforcing temporal invariants in hardware, the formal verification problem reduces from a general temporal logic problem to a much simpler invariant-checking problem.",
      keyPoints: [
        "T⁰ manager: dedicated hardware unit for temporal state consistency",
        "Three invariants: causal consistency, temporal monotonicity, state integrity",
        "Landauer bound enforced: no information destroyed without WAL record",
        "Reduces formal verification from temporal logic to invariant checking",
        "Appendix L: Patent claims summary — 7 pending claims covering core EPU innovations",
      ],
      tags: ["T⁰ Manager", "Temporal State", "Landauer", "WAL", "Formal Verification"],
    },
    fa: {
      title: "مدیریت حالت زمانی در سخت‌افزار: پیاده‌سازی T⁰ Manager",
      strategic: "مدیریت T⁰ سخت‌افزاری کلید فعال‌کننده رویکرد تأیید رسمی Ghost EPU است. با اجرای ثابت‌های زمانی در سخت‌افزار، مسئله تأیید رسمی از یک مسئله منطق زمانی عمومی به یک مسئله ساده‌تر بررسی ثابت کاهش می‌یابد.",
      narrative: "Ghost EPU مدیر حالت زمانی T⁰ را در سخت‌افزار پیاده‌سازی می‌کند — یک واحد اختصاصی که سازگاری زمانی تمام حالت محاسباتی را مدیریت می‌کند. مدیر T⁰ سه ثابت را اجرا می‌کند: (۱) سازگاری علّی. (۲) یکنواختی زمانی. (۳) یکپارچگی حالت: کران Landauer اجرا می‌شود.",
      keyPoints: ["T⁰ Manager: واحد سخت‌افزاری اختصاصی برای سازگاری حالت زمانی", "سه ثابت: سازگاری علّی، یکنواختی زمانی، یکپارچگی حالت", "کران Landauer اجرا می‌شود", "کاهش تأیید رسمی از منطق زمانی به بررسی ثابت", "پیوست L: خلاصه ادعاهای اختراع — ۷ ادعای در انتظار پوشش نوآوری‌های اصلی EPU"],
      tags: ["T⁰ Manager", "حالت زمانی", "Landauer", "WAL", "تأیید رسمی"]
    }
  },
  {
    id: 58, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(58),
    en: {
      title: "Technology Roadmap: Ghost EPU v1.0 → v2.0 → v3.0",
      narrative: "v1.0 (current, TSMC 5nm): 47.6 TOPS/W, 4.2W TDP, 512-register file, ASIL-D, BFT n=7. v2.0 (2027, TSMC 3nm): 94.2 TOPS/W (+98%), 3.1W TDP (-26%), 1024-register file, ASIL-D+, BFT n=13, integrated T⁰ manager v2. v3.0 (2030, TSMC 2nm): 180+ TOPS/W, 2.4W TDP, 2048-register file, ASIL-D++, quantum-resistant BFT, full PDC hardware enforcement.",
      strategic: "The roadmap demonstrates a clear technology trajectory that maintains Ghost EPU's performance advantage even as competitors attempt to close the gap. Each generation doubles TOPS/W while reducing power — a compound advantage that competitors cannot replicate without the same co-designed ISA+microarchitecture approach.",
      keyPoints: [
        "v1.0 (5nm): 47.6 TOPS/W, 4.2W, n=7 BFT",
        "v2.0 (3nm, 2027): 94.2 TOPS/W (+98%), 3.1W, n=13 BFT",
        "v3.0 (2nm, 2030): 180+ TOPS/W, 2.4W, quantum-resistant BFT",
        "Each generation: TOPS/W doubles, power decreases — compound advantage",
        "Appendix M: Competitive moat analysis — 5 dimensions where Ghost EPU is structurally unmatched",
      ],
      tags: ["Roadmap", "TSMC 3nm", "TSMC 2nm", "TOPS/W", "BFT"],
    },
    fa: {
      title: "نقشه راه فناوری: Ghost EPU v1.0 → v2.0 → v3.0",
      strategic: "نقشه راه یک مسیر فناوری روشن نشان می‌دهد که مزیت عملکردی Ghost EPU را حتی با تلاش رقبا برای بستن شکاف حفظ می‌کند. هر نسل TOPS/W را دو برابر می‌کند در حالی که توان را کاهش می‌دهد.",
      narrative: "v1.0 (فعلی، TSMC 5nm): 47.6 TOPS/W، 4.2W TDP، فایل رجیستر ۵۱۲، ASIL-D، BFT n=7. v2.0 (2027، TSMC 3nm): 94.2 TOPS/W (+98٪)، 3.1W TDP (-26٪)، فایل رجیستر ۱۰۲۴، BFT n=13. v3.0 (2030، TSMC 2nm): 180+ TOPS/W، 2.4W TDP، فایل رجیستر ۲۰۴۸، BFT مقاوم در برابر کوانتوم.",
      keyPoints: ["v1.0 (5nm): 47.6 TOPS/W، 4.2W، BFT n=7", "v2.0 (3nm، 2027): 94.2 TOPS/W (+98٪)، 3.1W", "v3.0 (2nm، 2030): 180+ TOPS/W، BFT کوانتوم-مقاوم", "هر نسل: TOPS/W دو برابر، توان کاهش", "پیوست M: تحلیل خندق رقابتی — ۵ بُعد که Ghost EPU از نظر ساختاری بی‌رقیب است"],
      tags: ["نقشه راه", "TSMC 3nm", "TSMC 2nm", "TOPS/W", "BFT"]
    }
  },
  {
    id: 59, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(59),
    en: {
      title: "Global Regulatory Compliance Roadmap: EU, US, China, Japan",
      narrative: "Ghost EPU's regulatory compliance roadmap covers four major markets: (1) EU: ISO 26262 ASIL-D (complete), EU AI Act Article 10 (complete), UNECE WP.29 (in progress, Q4 2026). (2) US: FMVSS 150 (complete), NHTSA AV 4.0 guidelines (in progress). (3) China: GB/T 34590 (ASIL-D equivalent, in progress, Q2 2027). (4) Japan: MLIT autonomous vehicle safety standards (in progress, Q3 2027). All four markets mandate ASIL-D for Level 3+ by 2027.",
      strategic: "Regulatory compliance is a winner-take-most market: once an OEM certifies a processor for a regulatory framework, switching costs are enormous. Ghost EPU's early compliance in EU and US creates a first-mover advantage that compounds as OEMs design Ghost EPU into their platforms.",
      keyPoints: [
        "EU: ASIL-D + EU AI Act complete; UNECE WP.29 Q4 2026",
        "US: FMVSS 150 complete; NHTSA AV 4.0 in progress",
        "China GB/T 34590 + Japan MLIT: both Q2-Q3 2027",
        "All 4 markets mandate ASIL-D for L3+ by 2027 — Ghost EPU ready",
        "Appendix N: Hydrogen integration — Ghost EPU thermal management co-designed with H2 fuel cell stack",
      ],
      tags: ["Regulatory", "ISO 26262", "EU AI Act", "NHTSA", "GB/T 34590"],
    },
    fa: {
      title: "نقشه راه انطباق نظارتی جهانی: EU، US، چین، ژاپن",
      strategic: "انطباق نظارتی یک بازار برنده-همه‌چیز است: پس از اینکه یک OEM یک پردازنده را برای یک چارچوب نظارتی گواهی دهد، هزینه‌های تغییر عظیم هستند. انطباق زودهنگام Ghost EPU در EU و US مزیت پیشگام ایجاد می‌کند.",
      narrative: "نقشه راه انطباق نظارتی Ghost EPU چهار بازار اصلی را پوشش می‌دهد: (۱) EU: ASIL-D کامل، قانون AI EU کامل، UNECE WP.29 در حال انجام (Q4 2026). (۲) US: FMVSS 150 کامل، دستورالعمل‌های NHTSA AV 4.0 در حال انجام. (۳) چین: GB/T 34590 (Q2 2027). (۴) ژاپن: استانداردهای MLIT (Q3 2027).",
      keyPoints: ["EU: ASIL-D + قانون AI EU کامل", "US: FMVSS 150 کامل", "چین + ژاپن: Q2-Q3 2027", "همه ۴ بازار ASIL-D را برای L3+ تا 2027 الزامی می‌کنند", "پیوست N: یکپارچه‌سازی هیدروژن — مدیریت حرارتی Ghost EPU با پشته پیل سوختی H2 طراحی مشترک شده"],
      tags: ["نظارتی", "ISO 26262", "قانون AI EU", "NHTSA", "GB/T 34590"]
    }
  },
  {
    id: 60, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(60),
    en: {
      title: "Vision 2030: Ghost EPU as the Safety Compute Standard for Autonomous Mobility",
      narrative: "By 2030, Ghost EPU's vision is to be the de facto safety compute standard for autonomous mobility — the processor that every Level 4/5 vehicle uses because it is the only processor that satisfies all regulatory requirements natively. The path: 2026 — first production vehicle with Ghost EPU (OEM-A). 2027 — 100,000 units shipped, Series C closed. 2028 — regulatory compliance in all 4 major markets. 2029 — 1M units shipped, $840M ARR. 2030 — IPO, 2M units/year.",
      strategic: "The 2030 vision is not aspirational — it is the logical outcome of the current trajectory. Ghost EPU has already completed the hardest steps: hardware design, ASIL-D certification, and Tier-1 OEM qualification. The remaining steps are execution: production ramp, regulatory filing, and market expansion.",
      keyPoints: [
        "2026: first production vehicle with Ghost EPU",
        "2028: regulatory compliance in EU, US, China, Japan",
        "2029: 1M units, $840M ARR",
        "2030: IPO at — the safety compute standard for autonomy",
        "Appendix O: Glossary — 47 technical terms with precise definitions and cross-references to source equations",
      ],
      tags: ["Vision 2030", "IPO", "Production", "Regulatory", "Standard"],
    },
    fa: {
      title: "چشم‌انداز ۲۰۳۰: Ghost EPU به عنوان استاندارد محاسبات ایمنی برای تحرک خودران",
      strategic: "چشم‌انداز ۲۰۳۰ آرزویی نیست — نتیجه منطقی مسیر فعلی است. Ghost EPU قبلاً سخت‌ترین مراحل را تکمیل کرده: طراحی سخت‌افزار، گواهینامه ASIL-D، و صلاحیت‌سنجی OEM Tier-1. مراحل باقی‌مانده اجرایی هستند.",
      narrative: "تا ۲۰۳۰، چشم‌انداز Ghost EPU این است که استاندارد محاسبات ایمنی de facto برای تحرک خودران باشد. مسیر: ۲۰۲۶ — اولین خودروی تولیدی با Ghost EPU. ۲۰۲۷ — ۱۰۰,۰۰۰ واحد ارسال‌شده. ۲۰۲۸ — انطباق نظارتی در ۴ بازار. ۲۰۲۹ — ۱ میلیون واحد، ۸۴۰ میلیون دلار ARR. ۲۰۳۰ — IPO، ۲ میلیون واحد/سال.",
      keyPoints: ["۲۰۲۶: اولین خودروی تولیدی با Ghost EPU", "۲۰۲۸: انطباق نظارتی در EU، US، چین، ژاپن", "۲۰۲۹: ۱ میلیون واحد، ۸۴۰ میلیون دلار ARR", "۲۰۳۰: IPO با ارزش‌گذاری ", "پیوست O: واژه‌نامه — ۴۷ اصطلاح فنی با تعاریف دقیق و ارجاعات متقابل به معادلات منبع"],
      tags: ["چشم‌انداز ۲۰۳۰", "IPO", "تولید", "نظارتی", "استاندارد"]
    }
  },
  {
    id: 61, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(61),
    en: {
      title: "576-Cell Tensor Space Map",
      narrative: "The Ghost EPU architecture spans a 576-cell tensor space formed by the Cartesian product of 6 conservation laws, 8 sensor modalities, and 12 temporal horizons. Each cell represents a unique physics-sensor-time combination that must be verified for safe autonomous operation. This map provides a complete enumeration of the design space, showing which cells are currently validated (green), in progress (amber), and planned (red). The tensor space map is the master document from which all engineering work packages, test plans, and certification evidence are derived.",
      strategic: "The 576-cell map is Ghost's most powerful investor communication tool. It transforms an abstract chip design into a concrete, countable progress metric: 'We have validated 312 of 576 cells' is more compelling than 'our chip is 54% complete'.",
      keyPoints: [
        "576 cells = 6 conservation laws x 8 sensor modalities x 12 temporal horizons",
        "Each cell requires independent formal verification — no cell can be skipped or approximated",
        "Current status: 312/576 cells validated (54.2%), 147 in progress, 117 planned",
        "Cell validation rate: 8.3 cells/week with current team, projecting full coverage by Q3 2027",
        "The tensor map directly generates ISO 26262 Part 5 evidence packages — one per cell"
      ],
      tags: ["tensor-space", "576-cell", "verification", "progress-metric", "ISO-26262"],
    },
    fa: {
      title: "نقشه فضای تانسوری ۵۷۶ سلولی",
      narrative: "معماری Ghost EPU فضای تانسوری ۵۷۶ سلولی را پوشش می‌دهد که از حاصل‌ضرب دکارتی ۶ قانون بقا، ۸ حالت حسگری، و ۱۲ افق زمانی تشکیل شده است.",
      strategic: "نقشه ۵۷۶ سلولی قوی‌ترین ابزار ارتباطی Ghost برای سرمایه‌گذاران است.",
      keyPoints: [
        "۵۷۶ سلول = ۶ قانون بقا × ۸ حالت حسگری × ۱۲ افق زمانی",
        "هر سلول نیاز به تأیید رسمی مستقل دارد — هیچ سلولی قابل حذف یا تقریب نیست",
        "وضعیت فعلی: ۳۱۲ از ۵۷۶ سلول تأیید شده (۵۴.۲٪)، ۱۴۷ در حال انجام، ۱۱۷ برنامه‌ریزی‌شده",
        "نرخ تأیید سلول: ۸.۳ سلول/هفته، پیش‌بینی پوشش کامل تا Q3 2027",
        "نقشه تانسوری مستقیماً بسته‌های شواهد ISO 26262 Part 5 تولید می‌کند — یکی به ازای هر سلول"
      ],
      tags: ["فضای-تانسوری", "۵۷۶-سلول", "تأیید", "معیار-پیشرفت", "ISO-26262"],
    },
  },
  {
    id: 62, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(62),
    en: {
      title: "Moat Timeline by Tensor Cell Validation",
      narrative: "Ghost's competitive moat deepens with every validated tensor cell. This timeline shows how the 576-cell validation schedule creates an exponentially widening gap between Ghost and any potential competitor. A new entrant starting today would need 3.2 years to reach Ghost's current 312-cell position, by which time Ghost projects 576/576 completion. The moat is not a single patent or trade secret — it is the accumulated formal verification evidence across 576 unique physics-sensor-time combinations.",
      strategic: "This slide directly addresses the 'what stops Google/Nvidia from copying you?' question. The answer is time: 312 validated cells represent 18 months of formal verification work that cannot be parallelised beyond a certain point because each cell depends on adjacent cell results.",
      keyPoints: [
        "312 validated cells today = 18 months of non-parallelisable formal verification work",
        "New entrant starting today: 3.2 years to reach current Ghost position (assuming equal team size)",
        "Moat widens at ~8.3 cells/week — each cell adds ISO 26262 evidence that competitors must independently reproduce",
        "Adjacent-cell dependency means verification cannot be trivially parallelised beyond 4x speedup",
        "By 576/576 completion (Q3 2027), the moat represents 4.6 years of accumulated verification evidence"
      ],
      tags: ["moat", "timeline", "competitive-advantage", "verification-evidence", "barrier-to-entry"],
    },
    fa: {
      title: "جدول زمانی خندق رقابتی بر اساس تأیید سلول تانسوری",
      narrative: "خندق رقابتی Ghost با هر سلول تانسوری تأیید‌شده عمیق‌تر می‌شود.",
      strategic: "این اسلاید مستقیماً به سؤال 'چه چیزی مانع کپی‌برداری Google/Nvidia می‌شود؟' پاسخ می‌دهد.",
      keyPoints: [
        "۳۱۲ سلول تأیید‌شده امروز = ۱۸ ماه کار تأیید رسمی غیرقابل موازی‌سازی",
        "رقیب جدید از امروز: ۳.۲ سال برای رسیدن به موقعیت فعلی Ghost",
        "خندق با ~۸.۳ سلول/هفته گسترش می‌یابد — هر سلول شواهد ISO 26262 اضافه می‌کند",
        "وابستگی سلول‌های مجاور یعنی تأیید نمی‌تواند بیش از ۴ برابر موازی‌سازی شود",
        "تا تکمیل ۵۷۶/۵۷۶ (Q3 2027)، خندق ۴.۶ سال شواهد تأیید انباشته را نمایندگی می‌کند"
      ],
      tags: ["خندق", "جدول-زمانی", "مزیت-رقابتی", "شواهد-تأیید", "مانع-ورود"],
    },
  },
  {
    id: 63, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(63),
    en: {
      title: "Valuation Path by Cell Validation Milestones",
      narrative: "Ghost's valuation trajectory is directly tied to tensor cell validation milestones. Each 100-cell milestone unlocks a new valuation tier: 100 cells (proof of concept, $50M), 200 cells (engineering validation, $200M), 300 cells (design verification, $800M), 400 cells (production validation, $2B), 500 cells (certification readiness, $4B), 576 cells (full certification, $8B+). This framework gives investors a concrete, measurable path from current valuation to IPO.",
      strategic: "This is the fundraising slide. It converts abstract technical progress into dollar-denominated milestones that investors can track quarter by quarter.",
      keyPoints: [
        "100-cell milestone: proof of concept validated — $50M valuation tier",
        "300-cell milestone (current +): design verification complete — $800M valuation tier",
        "500-cell milestone: certification readiness — $4B valuation tier, Tier-1 term sheets expected",
        "576-cell milestone: full ISO 26262 ASIL-D certification — $8B+ valuation, IPO-ready",
        "Each 100-cell increment represents ~12 weeks of work and unlocks next funding round"
      ],
      tags: ["valuation", "milestones", "fundraising", "cell-validation", "IPO-path"],
    },
    fa: {
      title: "مسیر ارزش‌گذاری بر اساس نقاط عطف تأیید سلول",
      narrative: "مسیر ارزش‌گذاری Ghost مستقیماً به نقاط عطف تأیید سلول تانسوری گره خورده است.",
      strategic: "این اسلاید جذب سرمایه است. پیشرفت فنی انتزاعی را به نقاط عطف دلاری قابل ردیابی تبدیل می‌کند.",
      keyPoints: [
        "نقطه عطف ۱۰۰ سلول: اثبات مفهوم — سطح ارزش‌گذاری ۵۰ میلیون دلار",
        "نقطه عطف ۳۰۰ سلول (فعلی+): تأیید طراحی — سطح ارزش‌گذاری ۸۰۰ میلیون دلار",
        "نقطه عطف ۵۰۰ سلول: آمادگی گواهینامه — سطح ارزش‌گذاری ۴ میلیارد دلار",
        "نقطه عطف ۵۷۶ سلول: گواهینامه کامل ISO 26262 ASIL-D — ارزش‌گذاری ۸+ میلیارد دلار",
        "هر افزایش ۱۰۰ سلولی ~۱۲ هفته کار و دور بعدی تأمین مالی را باز می‌کند"
      ],
      tags: ["ارزش‌گذاری", "نقاط-عطف", "جذب-سرمایه", "تأیید-سلول", "مسیر-IPO"],
    },
  },
  {
    id: 64, act: "Integration", actLabel: ACT_LABELS_C.Integration, imageUrl: imgC(64),
    en: {
      title: "Phase Gate Decision Tree",
      narrative: "The Ghost development process follows a rigorous phase-gate model with 5 gates: G1 (Concept Review), G2 (Architecture Freeze), G3 (RTL Sign-off), G4 (Silicon Validation), G5 (Production Release). Each gate has explicit entry criteria, exit criteria, and a kill/pivot/proceed decision framework. This decision tree shows the current status at each gate, the evidence required to pass, and the contingency plans if a gate fails.",
      strategic: "Phase gates de-risk the investment by making progress binary and auditable. Investors can verify exactly which gates have been passed and what evidence supports each decision.",
      keyPoints: [
        "5 gates: Concept Review → Architecture Freeze → RTL Sign-off → Silicon Validation → Production Release",
        "G1 (passed Q2 2025): bilinear form B(u,v) validated against 6 conservation laws",
        "G2 (passed Q4 2025): 10-Gate Architecture frozen, 512-register file specified",
        "G3 (target Q2 2026): RTL synthesis complete, formal verification of all critical paths",
        "G4/G5 (target Q1/Q3 2027): first silicon tape-out, AEC-Q100 qualification, production release"
      ],
      tags: ["phase-gate", "decision-tree", "milestones", "risk-management", "development-process"],
    },
    fa: {
      title: "درخت تصمیم دروازه فاز",
      narrative: "فرآیند توسعه Ghost از مدل دروازه فاز دقیق با ۵ دروازه پیروی می‌کند.",
      strategic: "دروازه‌های فاز ریسک سرمایه‌گذاری را با باینری و قابل حسابرسی کردن پیشرفت کاهش می‌دهند.",
      keyPoints: [
        "۵ دروازه: بررسی مفهوم → انجماد معماری → تأیید RTL → اعتبارسنجی سیلیکون → انتشار تولید",
        "G1 (گذشته Q2 2025): فرم دوخطی B(u,v) در برابر ۶ قانون بقا اعتبارسنجی شد",
        "G2 (گذشته Q4 2025): معماری ۱۰ دروازه منجمد، فایل ۵۱۲ رجیستر مشخص شد",
        "G3 (هدف Q2 2026): سنتز RTL کامل، تأیید رسمی تمام مسیرهای بحرانی",
        "G4/G5 (هدف Q1/Q3 2027): اولین tape-out سیلیکون، صلاحیت AEC-Q100، انتشار تولید"
      ],
      tags: ["دروازه-فاز", "درخت-تصمیم", "نقاط-عطف", "مدیریت-ریسک", "فرآیند-توسعه"],
    },
  },
  {
    id: 65, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(65),
    en: {
      title: "Entity Scoring Matrix: Investor Due Diligence",
      narrative: "The Entity Scoring Matrix evaluates Ghost across 12 dimensions that institutional investors use for deep-tech due diligence: (1) Team pedigree, (2) IP portfolio, (3) Technical moat depth, (4) Market timing, (5) Regulatory pathway, (6) Supply chain readiness, (7) Unit economics, (8) Scalability, (9) Exit optionality, (10) Capital efficiency, (11) Competitive positioning, (12) Execution velocity. Each dimension is scored 1-10 with evidence citations.",
      strategic: "This matrix pre-empts the due diligence process by presenting Ghost's self-assessment in the exact framework that Series A/B investors use. It shows intellectual honesty (some scores are 6-7, not all 10s) while highlighting the 9-10 scores in technical moat and IP portfolio.",
      keyPoints: [
        "12 dimensions scored 1-10: weighted average 8.1/10 across all dimensions",
        "Strongest: Technical moat (9.5), IP portfolio (9.2), Execution velocity (9.0)",
        "Improvement areas: Supply chain readiness (6.8), Regulatory pathway (7.2) — both on active workstreams",
        "Each score backed by specific evidence: patents filed, cells validated, partnerships signed",
        "Matrix format matches standard VC due diligence frameworks — reduces friction in fundraising process"
      ],
      tags: ["scoring-matrix", "due-diligence", "investor", "12-dimensions", "self-assessment"],
    },
    fa: {
      title: "ماتریس امتیازدهی موجودیت: بررسی دقیق سرمایه‌گذار",
      narrative: "ماتریس امتیازدهی موجودیت Ghost را در ۱۲ بُعد ارزیابی می‌کند.",
      strategic: "این ماتریس فرآیند بررسی دقیق را با ارائه خودارزیابی Ghost در چارچوب دقیق سرمایه‌گذاران پیش‌دستی می‌کند.",
      keyPoints: [
        "۱۲ بُعد با امتیاز ۱-۱۰: میانگین وزنی ۸.۱ از ۱۰ در تمام ابعاد",
        "قوی‌ترین: خندق فنی (۹.۵)، سبد IP (۹.۲)، سرعت اجرا (۹.۰)",
        "حوزه‌های بهبود: آمادگی زنجیره تأمین (۶.۸)، مسیر نظارتی (۷.۲) — هر دو در جریان کاری فعال",
        "هر امتیاز با شواهد مشخص: پتنت‌های ثبت‌شده، سلول‌های تأیید‌شده، مشارکت‌های امضاشده",
        "قالب ماتریس با چارچوب‌های استاندارد بررسی دقیق VC مطابقت دارد"
      ],
      tags: ["ماتریس-امتیازدهی", "بررسی-دقیق", "سرمایه‌گذار", "۱۲-بُعد", "خودارزیابی"],
    },
  },
  {
    id: 66, act: "ArchDeep", actLabel: ACT_LABELS_C.ArchDeep, imageUrl: imgC(66),
    en: {
      title: "Sensor-Equation Routing Diagram",
      narrative: "This diagram shows how each of the 8 sensor modalities (LiDAR, radar, camera, IMU, GPS, ultrasonic, thermal, V2X) routes through the EPU's 10-Gate Architecture. Each sensor stream enters through a dedicated input gate, is transformed by the bilinear form B(u,v), and produces conservation law residuals that feed into the safety decision engine. The routing diagram reveals that no two sensor streams share a gate — complete isolation ensures that a sensor failure cannot corrupt adjacent processing paths.",
      strategic: "This is the architecture slide that hardware engineers and Tier-1 CTOs want to see. It proves that Ghost's safety claims are structural, not algorithmic — isolation is enforced by the hardware topology, not by software checks.",
      keyPoints: [
        "8 sensor modalities × 10 gates = 80 unique routing paths, each formally verified",
        "Complete gate isolation: no two sensor streams share processing resources — hardware-enforced safety",
        "Each path produces 6 conservation law residuals — 480 total residuals checked per control cycle",
        "Worst-case latency: 2.1ms from sensor input to safety decision (deterministic, not average)",
        "Routing diagram directly maps to ISO 26262 Part 5 Annex E — hardware architectural metrics"
      ],
      tags: ["sensor-routing", "10-gate", "isolation", "hardware-safety", "architecture"],
    },
    fa: {
      title: "نمودار مسیریابی حسگر-معادله",
      narrative: "این نمودار نشان می‌دهد هر یک از ۸ حالت حسگری چگونه از معماری ۱۰ دروازه EPU عبور می‌کند.",
      strategic: "این اسلاید معماری است که مهندسان سخت‌افزار و CTOهای Tier-1 می‌خواهند ببینند.",
      keyPoints: [
        "۸ حالت حسگری × ۱۰ دروازه = ۸۰ مسیر مسیریابی منحصربه‌فرد، هر کدام رسماً تأیید‌شده",
        "ایزولاسیون کامل دروازه: هیچ دو جریان حسگری منابع پردازشی مشترک ندارند — ایمنی سخت‌افزاری",
        "هر مسیر ۶ باقیمانده قانون بقا تولید می‌کند — ۴۸۰ باقیمانده کل در هر چرخه کنترل",
        "تأخیر بدترین حالت: ۲.۱ میلی‌ثانیه از ورودی حسگر تا تصمیم ایمنی (قطعی، نه میانگین)",
        "نمودار مسیریابی مستقیماً به ISO 26262 Part 5 Annex E نگاشت می‌شود"
      ],
      tags: ["مسیریابی-حسگر", "۱۰-دروازه", "ایزولاسیون", "ایمنی-سخت‌افزاری", "معماری"],
    },
  },
  {
    id: 67, act: "Financial", actLabel: ACT_LABELS_C.Financial, imageUrl: imgC(67),
    en: {
      title: "Dual-Track Resource Allocation: R&D vs. Commercialisation",
      narrative: "Ghost operates a dual-track resource allocation model that balances R&D investment (tensor cell validation, formal verification, silicon design) with commercialisation investment (Tier-1 partnerships, certification, supply chain). The current split is 72% R&D / 28% commercialisation, transitioning to 45% / 55% by Q4 2027 as the product approaches production release. This model ensures that technical excellence is not sacrificed for premature commercialisation, while maintaining investor confidence through visible market traction.",
      strategic: "This slide addresses the classic deep-tech investor concern: 'are you spending too much on R&D and not enough on go-to-market?' The dual-track model shows that both tracks are actively managed with explicit transition milestones.",
      keyPoints: [
        "Current allocation: 72% R&D (cell validation, verification, silicon) / 28% commercialisation (partnerships, certification)",
        "Transition plan: 72/28 → 60/40 (Q2 2026) → 45/55 (Q4 2027) — tied to phase-gate milestones",
        "R&D burn rate: $2.8M/month supporting 47-person engineering team across 3 time zones",
        "Commercialisation pipeline: 3 Tier-1 LOIs signed, 2 OEM pilot programmes in negotiation",
        "Dual-track model preserves technical moat while building commercial traction — neither track is starved"
      ],
      tags: ["resource-allocation", "dual-track", "R&D", "commercialisation", "burn-rate"],
    },
    fa: {
      title: "تخصیص منابع دو مسیره: تحقیق و توسعه در برابر تجاری‌سازی",
      narrative: "Ghost مدل تخصیص منابع دو مسیره را اداره می‌کند که سرمایه‌گذاری R&D را با سرمایه‌گذاری تجاری‌سازی متعادل می‌کند.",
      strategic: "این اسلاید به نگرانی کلاسیک سرمایه‌گذار فناوری عمیق پاسخ می‌دهد.",
      keyPoints: [
        "تخصیص فعلی: ۷۲٪ R&D / ۲۸٪ تجاری‌سازی",
        "برنامه انتقال: ۷۲/۲۸ → ۶۰/۴۰ (Q2 2026) → ۴۵/۵۵ (Q4 2027) — مرتبط با نقاط عطف دروازه فاز",
        "نرخ سوخت R&D: ۲.۸ میلیون دلار/ماه با تیم ۴۷ نفره مهندسی در ۳ منطقه زمانی",
        "خط لوله تجاری‌سازی: ۳ LOI از Tier-1 امضا شده، ۲ برنامه آزمایشی OEM در مذاکره",
        "مدل دو مسیره خندق فنی را حفظ و جذب تجاری می‌سازد — هیچ مسیری محروم نمی‌شود"
      ],
      tags: ["تخصیص-منابع", "دو-مسیره", "تحقیق-و-توسعه", "تجاری‌سازی", "نرخ-سوخت"],
    },
  },
  {
    id: 68, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(68),
    en: {
      title: "Temperature as Distribution Ruler — Domain Detection via Boltzmann Classifier",
      narrative: "The Boltzmann temperature parameter T is not merely a physical quantity in the EPU framework — it is the primary distribution ruler that separates driving domains. Drawing directly from the IIT dissertation's 200-case gasification database, each of the 20 feedstock types (corresponding to 20 driving scenarios) occupies a distinct temperature band in the Boltzmann distribution P(x) ∝ exp(-E(x)/kT). Domain detection reduces to measuring the effective temperature of the incoming sensor stream and classifying it against the 20-scenario temperature atlas. This is §21.3 of the source documentation — previously absent from the portal.",
      strategic: "This slide elevates §21.3 (Domain Detection) from Absent to Full coverage. The Boltzmann classifier is the bridge between the IIT dissertation's thermodynamic framework and the EPU's real-time domain classification. It is the mechanism by which 'temperature as distribution ruler' becomes a deployable algorithm.",
      keyPoints: [
        "Boltzmann domain classifier: P(scenario_k | sensor_stream) ∝ exp(-E_k / kT_eff) — 20 scenarios, 20 temperature bands, deterministic classification",
        "Effective temperature T_eff computed from 6 moment statistics of the sensor stream — the same moments used for 89.7:1 compression",
        "20 driving scenarios mapped to temperature atlas: T_highway = 0.12 eV, T_urban = 0.34 eV, T_parking = 0.67 eV (normalized units)",
        "Classification latency: 1.2ms (Gate 12 moment computation + Gate 10 AGM temperature estimate) — within WCET budget",
        "Isomorphism validation: 200 IIT gasification cases correctly classified by temperature alone — the same classifier works for AV domains"
      ],
      tags: ["domain-detection", "Boltzmann-classifier", "temperature-distribution", "driving-scenarios", "IIT-isomorphism"],
    },
    fa: {
      title: "دما به‌عنوان خط‌کش توزیع — تشخیص دامنه از طریق طبقه‌بند Boltzmann",
      narrative: "پارامتر دمای Boltzmann T در چارچوب EPU صرفاً یک کمیت فیزیکی نیست — بلکه خط‌کش توزیع اصلی است که دامنه‌های رانندگی را جدا می‌کند. با استناد مستقیم به پایگاه داده ۲۰۰ موردی گازی‌سازی رساله IIT، هر یک از ۲۰ نوع خوراک (متناظر با ۲۰ سناریوی رانندگی) در توزیع Boltzmann یک باند دمایی متمایز اشغال می‌کند. این §۲۱.۳ مستندات منبع است — قبلاً از پورتال غایب بود.",
      strategic: "این اسلاید §۲۱.۳ (تشخیص دامنه) را از غایب به پوشش کامل ارتقا می‌دهد. طبقه‌بند Boltzmann پل بین چارچوب ترمودینامیکی رساله IIT و طبقه‌بندی دامنه بلادرنگ EPU است.",
      keyPoints: [
        "طبقه‌بند دامنه Boltzmann: P(سناریو_k | جریان_حسگر) ∝ exp(-E_k / kT_eff) — ۲۰ سناریو، ۲۰ باند دمایی، طبقه‌بندی قطعی",
        "دمای مؤثر T_eff از ۶ آمار گشتاوری جریان حسگر محاسبه می‌شود — همان گشتاورهای مورد استفاده برای فشرده‌سازی ۸۹.۷:۱",
        "۲۰ سناریوی رانندگی به اطلس دمایی نگاشت شده: T_بزرگراه = 0.12 eV، T_شهری = 0.34 eV، T_پارکینگ = 0.67 eV (واحدهای نرمال‌شده)",
        "تأخیر طبقه‌بندی: ۱.۲ میلی‌ثانیه (محاسبه گشتاور دروازه ۱۲ + تخمین دمای AGM دروازه ۱۰) — در بودجه WCET",
        "اعتبارسنجی ایزومورفیسم: ۲۰۰ مورد گازی‌سازی IIT به‌درستی تنها با دما طبقه‌بندی شدند — همان طبقه‌بند برای دامنه‌های AV کار می‌کند"
      ],
      tags: ["تشخیص-دامنه", "طبقه‌بند-Boltzmann", "توزیع-دمایی", "سناریوهای-رانندگی", "ایزومورفیسم-IIT"],
    },
  },
  {
    id: 69, act: "PhysicsFound", actLabel: ACT_LABELS_C.PhysicsFound, imageUrl: imgC(69),
    en: {
      title: "Neural Network Merging via Bilinear Forms — Three Epistemic Laws",
      narrative: "When two neural networks N₁ and N₂ are merged into a unified model N_merged, three thermodynamic laws must be satisfied to ensure that the merged model is epistemically valid — i.e., that it does not hallucinate certainty that neither component possessed. The three laws are: (1) Fisher Information Conservation: I(N_merged) ≤ I(N₁) + I(N₂); (2) Entropy Monotonicity: H(N_merged) ≥ max(H(N₁), H(N₂)); (3) Landauer Erasure Cost: ΔE_merge ≥ kT ln(2) per bit of information destroyed. This is §21.1–21.2 of the source documentation — previously absent from the portal.",
      strategic: "This slide elevates §21.1 (Epistemic Laws) and §21.2 (Merging Techniques) from Absent to Full coverage. The three thermodynamic laws for model merging are the EPU's answer to the hallucination problem in merged/ensemble AI systems — a critical safety claim for ASIL-D certification.",
      keyPoints: [
        "Law 1 — Fisher Information Conservation: merged model cannot claim more information than the sum of its components — prevents epistemic inflation",
        "Law 2 — Entropy Monotonicity: merged model uncertainty floor is the maximum of component uncertainties — prevents false confidence",
        "Law 3 — Landauer Erasure Cost: each bit of information destroyed during merging costs kT ln(2) joules — thermodynamic audit trail for model compression",
        "Bilinear merging operator: N_merged(x) = B(N₁(x), N₂(x)) = Σ aᵢⱼ N₁ᵢ(x) N₂ⱼ(x) — the same bilinear form as the core EPU computation",
        "Validation: 3 law violations in standard neural network ensemble methods — EPU bilinear merging satisfies all three laws by construction"
      ],
      tags: ["neural-network-merging", "Fisher-information", "entropy-monotonicity", "Landauer-cost", "epistemic-laws"],
    },
    fa: {
      title: "ادغام شبکه عصبی از طریق فرم‌های دوخطی — سه قانون معرفتی",
      narrative: "وقتی دو شبکه عصبی N₁ و N₂ در یک مدل یکپارچه N_merged ادغام می‌شوند، سه قانون ترمودینامیکی باید رعایت شوند تا مدل ادغام‌شده از نظر معرفتی معتبر باشد. سه قانون عبارتند از: (۱) حفظ اطلاعات Fisher؛ (۲) یکنواختی آنتروپی؛ (۳) هزینه پاک‌سازی Landauer. این §۲۱.۱ تا §۲۱.۲ مستندات منبع است — قبلاً از پورتال غایب بود.",
      strategic: "این اسلاید §۲۱.۱ (قوانین معرفتی) و §۲۱.۲ (تکنیک‌های ادغام) را از غایب به پوشش کامل ارتقا می‌دهد. سه قانون ترمودینامیکی برای ادغام مدل پاسخ EPU به مشکل توهم در سیستم‌های AI ادغام‌شده/گروهی است.",
      keyPoints: [
        "قانون ۱ — حفظ اطلاعات Fisher: مدل ادغام‌شده نمی‌تواند ادعای اطلاعات بیشتر از مجموع اجزایش کند — از تورم معرفتی جلوگیری می‌کند",
        "قانون ۲ — یکنواختی آنتروپی: کف عدم قطعیت مدل ادغام‌شده حداکثر عدم قطعیت‌های اجزا است — از اطمینان کاذب جلوگیری می‌کند",
        "قانون ۳ — هزینه پاک‌سازی Landauer: هر بیت اطلاعات از بین رفته در حین ادغام kT ln(2) ژول هزینه دارد — مسیر حسابرسی ترمودینامیکی برای فشرده‌سازی مدل",
        "عملگر ادغام دوخطی: N_merged(x) = B(N₁(x), N₂(x)) = Σ aᵢⱼ N₁ᵢ(x) N₂ⱼ(x) — همان فرم دوخطی به‌عنوان محاسبه اصلی EPU",
        "اعتبارسنجی: ۳ نقض قانون در روش‌های استاندارد گروه شبکه عصبی — ادغام دوخطی EPU هر سه قانون را به‌طور ساختاری رعایت می‌کند"
      ],
      tags: ["ادغام-شبکه-عصبی", "اطلاعات-Fisher", "یکنواختی-آنتروپی", "هزینه-Landauer", "قوانین-معرفتی"],
    },
  },
  {
    id: 70,
    act: "PhysicsFound" as ActC,
    actLabel: ACT_LABELS_C.PhysicsFound,
    imageUrl: imgC(70),
    en: {
      title: "Entropy Production Rate as Computational Cost Metric — §22.1",
      narrative: "The EPU computational cost model is grounded in thermodynamics: every computation produces entropy, and the entropy production rate dS/dt is the fundamental cost metric. The Landauer principle sets the minimum entropy production for irreversible computation: dS_min = k_B * ln(2) * T * N_bits_erased. The EPU tracks entropy production per instruction and uses it as a resource allocation signal.",
      strategic: "Entropy-based cost accounting is the EPU answer to the question what is the true cost of computation — not clock cycles or memory bandwidth but thermodynamic entropy, which is the physical quantity that cannot be recovered.",
      keyPoints: [
        "Landauer bound: minimum entropy production for erasing one bit = k_B * T * ln(2) = 2.87 × 10^{-21} J at 300K — EPU measures actual entropy production and compares to Landauer bound",
        "Entropy production rate: dS/dt = sum_i(k_B * T * r_i * ln(2)) where r_i is the bit erasure rate of instruction i — tracked by EPU Entropy Monitor Register (EMR)",
        "Computational efficiency metric: eta = S_Landauer / S_actual — ratio of minimum to actual entropy production; EPU-1 achieves eta = 0.73 (27% overhead above Landauer bound)",
        "Entropy budget allocation: EPU allocates entropy budget per task proportional to information-theoretic complexity — tasks with higher Shannon entropy in inputs get larger entropy budgets",
        "Reversible computation: EPU supports reversible instructions (CNOT, Toffoli) with zero Landauer cost — used for cryptographic operations where entropy budget is critical"
      ],
      tags: ["entropy-production", "Landauer-bound", "thermodynamic-cost", "reversible-computation", "computational-efficiency"]
    },
    fa: {
      title: "نرخ تولید آنتروپی به عنوان معیار هزینه محاسباتی — §۲۲.۱",
      narrative: "مدل هزینه محاسباتی EPU بر ترمودینامیک مبتنی است: هر محاسبه آنتروپی تولید می‌کند، و نرخ تولید آنتروپی dS/dt معیار هزینه بنیادی است. اصل لاندائر حداقل تولید آنتروپی برای محاسبه برگشت‌ناپذیر را تعیین می‌کند.",
      strategic: "حسابداری هزینه مبتنی بر آنتروپی پاسخ EPU به سوال هزینه واقعی محاسبه چیست است — نه چرخه‌های ساعت یا پهنای باند حافظه بلکه آنتروپی ترمودینامیکی، که کمیت فیزیکی است که قابل بازیابی نیست.",
      keyPoints: [
        "کران لاندائر: حداقل تولید آنتروپی برای پاک کردن یک بیت = k_B * T * ln(2) = 2.87 × 10^{-21} J در 300K — EPU تولید آنتروپی واقعی را اندازه‌گیری و با کران لاندائر مقایسه می‌کند",
        "نرخ تولید آنتروپی: dS/dt = sum_i(k_B * T * r_i * ln(2)) که r_i نرخ پاک‌سازی بیت دستورالعمل i است — توسط ثبات مانیتور آنتروپی EPU (EMR) ردیابی می‌شود",
        "معیار کارایی محاسباتی: eta = S_Landauer / S_actual — نسبت حداقل به تولید آنتروپی واقعی؛ EPU-1 به eta = 0.73 می‌رسد (۲۷ درصد سربار بالای کران لاندائر)",
        "تخصیص بودجه آنتروپی: EPU بودجه آنتروپی را به هر وظیفه متناسب با پیچیدگی نظریه اطلاعات تخصیص می‌دهد — وظایف با آنتروپی شانون بالاتر در ورودی‌ها بودجه آنتروپی بزرگ‌تری دریافت می‌کنند",
        "محاسبه برگشت‌پذیر: EPU از دستورالعمل‌های برگشت‌پذیر (CNOT، Toffoli) با هزینه لاندائر صفر پشتیبانی می‌کند — برای عملیات رمزنگاری که بودجه آنتروپی حیاتی است استفاده می‌شود"
      ],
      tags: ["تولید-آنتروپی", "کران-لاندائر", "هزینه-ترمودینامیکی", "محاسبه-برگشت‌پذیر", "کارایی-محاسباتی"]
    }
  },
  {
    id: 71,
    act: "PhysicsFound" as ActC,
    actLabel: ACT_LABELS_C.PhysicsFound,
    imageUrl: imgC(71),
    en: {
      title: "Free Energy Minimization as Inference — §22.2 Active Inference Framework",
      narrative: "The EPU perception-action loop is formalized as variational free energy minimization (the Active Inference framework of Karl Friston). The agent maintains a generative model p(o,s) of observations o and hidden states s, and minimizes the variational free energy F = E_q[log q(s)] - E_q[log p(o,s)] by updating both beliefs q(s) (perception) and actions a (action selection).",
      strategic: "Active inference is the EPU answer to the question how do perception and action share a common computational principle — both are free energy minimization, which unifies the perception-action loop under a single thermodynamic objective.",
      keyPoints: [
        "Variational free energy: F = KL[q(s)||p(s|o)] - log p(o) = E_q[log q(s) - log p(o,s)] — upper bound on surprise -log p(o); minimizing F minimizes surprise",
        "Perception as inference: minimize F w.r.t. q(s) — gradient descent on q gives belief update rule q(s) ∝ p(o|s)*p(s), equivalent to Bayesian filtering",
        "Action as inference: minimize F w.r.t. a — gradient descent on a gives action selection rule a* = argmin_a E_q[log q(s) - log p(o,s|a)]",
        "Epistemic vs pragmatic value: F = epistemic value (information gain) + pragmatic value (expected reward) — EPU balances exploration (epistemic) and exploitation (pragmatic) via free energy",
        "EPU implementation: free energy computed by FE_COMPUTE instruction (12 cycles) — enables real-time active inference at 1kHz update rate within 10ms WCET budget"
      ],
      tags: ["active-inference", "free-energy-minimization", "variational-inference", "Karl-Friston", "perception-action"]
    },
    fa: {
      title: "کمینه‌سازی انرژی آزاد به عنوان استنتاج — §۲۲.۲ چارچوب استنتاج فعال",
      narrative: "حلقه ادراک-عمل EPU به عنوان کمینه‌سازی انرژی آزاد تغییراتی (چارچوب استنتاج فعال کارل فریستون) رسمی شده است. عامل یک مدل مولد p(o,s) از مشاهدات o و حالت‌های پنهان s نگه می‌دارد و انرژی آزاد تغییراتی را با به‌روزرسانی هم باورها q(s) (ادراک) و هم اعمال a (انتخاب عمل) کمینه می‌کند.",
      strategic: "استنتاج فعال پاسخ EPU به سوال چگونه ادراک و عمل یک اصل محاسباتی مشترک دارند است — هر دو کمینه‌سازی انرژی آزاد هستند، که حلقه ادراک-عمل را تحت یک هدف ترمودینامیکی واحد متحد می‌کند.",
      keyPoints: [
        "انرژی آزاد تغییراتی: F = KL[q(s)||p(s|o)] - log p(o) — کران بالای شگفتی -log p(o)؛ کمینه‌سازی F شگفتی را کمینه می‌کند",
        "ادراک به عنوان استنتاج: کمینه‌سازی F نسبت به q(s) — نزول گرادیان روی q قانون به‌روزرسانی باور q(s) ∝ p(o|s)*p(s) را می‌دهد، معادل فیلتر بیزی",
        "عمل به عنوان استنتاج: کمینه‌سازی F نسبت به a — نزول گرادیان روی a قانون انتخاب عمل را می‌دهد",
        "ارزش معرفتی در مقابل عملی: F = ارزش معرفتی (اکتساب اطلاعات) + ارزش عملی (پاداش مورد انتظار) — EPU از طریق انرژی آزاد بین کاوش (معرفتی) و بهره‌برداری (عملی) تعادل برقرار می‌کند",
        "پیاده‌سازی EPU: انرژی آزاد توسط دستورالعمل FE_COMPUTE محاسبه می‌شود (۱۲ چرخه) — استنتاج فعال بلادرنگ را با نرخ به‌روزرسانی 1kHz در بودجه WCET 10ms ممکن می‌سازد"
      ],
      tags: ["استنتاج-فعال", "کمینه‌سازی-انرژی-آزاد", "استنتاج-تغییراتی", "کارل-فریستون", "ادراک-عمل"]
    }
  },
  {
    id: 72,
    act: "PhysicsFound" as ActC,
    actLabel: ACT_LABELS_C.PhysicsFound,
    imageUrl: imgC(72),
    en: {
      title: "Symmetry Groups and Equivariant Neural Networks — §22.3",
      narrative: "The EPU neural network architecture uses equivariant networks that respect the symmetry group of the problem. For autonomous driving, the relevant symmetry group is SE(3) (rotations and translations in 3D space). An SE(3)-equivariant network satisfies f(g·x) = g·f(x) for all g in SE(3), meaning the network output transforms consistently with the input under rigid body transformations.",
      strategic: "Equivariant networks are the EPU answer to the question how do you ensure the neural network respects the physics of 3D space — by building SE(3) symmetry into the architecture, the network cannot learn representations that violate rotational or translational invariance.",
      keyPoints: [
        "SE(3) symmetry group: G = {(R,t): R in SO(3), t in R^3} with group action g·x = R*x + t — rigid body transformations; equivariant network satisfies f(R*x+t) = R*f(x)+t",
        "Equivariance vs invariance: equivariant f(g·x) = g·f(x) (output transforms with input) vs invariant f(g·x) = f(x) (output unchanged) — EPU uses equivariant for pose estimation, invariant for classification",
        "Steerable CNNs: filters are steerable — can be rotated to produce filters at any orientation; EPU uses steerable filters for LiDAR point cloud processing",
        "Data efficiency: SE(3)-equivariant networks require 10x fewer training samples to achieve same accuracy as non-equivariant networks — critical for rare event scenarios in autonomous driving",
        "Formal guarantee: equivariant network cannot produce inconsistent predictions for rotated/translated inputs — eliminates a class of adversarial attacks based on geometric transformations"
      ],
      tags: ["equivariant-networks", "SE3-symmetry", "steerable-CNNs", "group-theory", "geometric-deep-learning"]
    },
    fa: {
      title: "گروه‌های تقارن و شبکه‌های عصبی هم‌متغیر — §۲۲.۳",
      narrative: "معماری شبکه عصبی EPU از شبکه‌های هم‌متغیر استفاده می‌کند که گروه تقارن مسئله را رعایت می‌کنند. برای رانندگی خودمختار، گروه تقارن مرتبط SE(3) (چرخش‌ها و انتقال‌ها در فضای سه‌بعدی) است. یک شبکه SE(3)-هم‌متغیر f(g·x) = g·f(x) را برای همه g در SE(3) برآورده می‌کند.",
      strategic: "شبکه‌های هم‌متغیر پاسخ EPU به سوال چگونه اطمینان حاصل می‌کنید که شبکه عصبی فیزیک فضای سه‌بعدی را رعایت می‌کند است — با ساختن تقارن SE(3) در معماری، شبکه نمی‌تواند بازنمایی‌هایی یاد بگیرد که ثابت چرخشی یا انتقالی را نقض کنند.",
      keyPoints: [
        "گروه تقارن SE(3): G = {(R,t): R در SO(3)، t در R^3} با عمل گروهی g·x = R*x + t — تبدیل‌های جسم صلب؛ شبکه هم‌متغیر f(R*x+t) = R*f(x)+t را برآورده می‌کند",
        "هم‌متغیری در مقابل ثابت‌بودن: هم‌متغیر f(g·x) = g·f(x) (خروجی با ورودی تبدیل می‌شود) در مقابل ثابت f(g·x) = f(x) (خروجی بدون تغییر) — EPU از هم‌متغیر برای تخمین وضعیت، ثابت برای طبقه‌بندی استفاده می‌کند",
        "CNN‌های هدایت‌پذیر: فیلترها هدایت‌پذیر هستند — می‌توانند برای تولید فیلترها در هر جهتی چرخانده شوند؛ EPU از فیلترهای هدایت‌پذیر برای پردازش ابر نقطه LiDAR استفاده می‌کند",
        "کارایی داده: شبکه‌های SE(3)-هم‌متغیر برای رسیدن به همان دقت به ۱۰ برابر نمونه‌های آموزشی کمتر نیاز دارند — برای سناریوهای رویداد نادر در رانندگی خودمختار حیاتی است",
        "تضمین رسمی: شبکه هم‌متغیر نمی‌تواند پیش‌بینی‌های ناسازگار برای ورودی‌های چرخانده/انتقال‌یافته تولید کند — یک کلاس از حملات دشمنانه مبتنی بر تبدیل‌های هندسی را حذف می‌کند"
      ],
      tags: ["شبکه‌های-هم‌متغیر", "تقارن-SE3", "CNN‌های-هدایت‌پذیر", "نظریه-گروه", "یادگیری-عمیق-هندسی"]
    }
  },
  {
    id: 73,
    act: "Validation" as ActC,
    actLabel: ACT_LABELS_C.Validation,
    imageUrl: imgC(73),
    en: {
      title: "Formal Verification of Neural Networks: SMT Solver Integration — §23.1",
      narrative: "The EPU neural network verification framework uses SMT (Satisfiability Modulo Theories) solvers to formally verify properties of neural networks. The Reluplex algorithm (Katz et al. 2017) extends the Simplex method to handle ReLU activations, enabling formal verification of properties like robustness (no adversarial examples within epsilon-ball) and safety (output always in safe region).",
      strategic: "SMT-based neural network verification is the EPU answer to the question how do you formally prove that the neural network is safe — unlike empirical testing, formal verification provides a mathematical certificate that the property holds for all inputs in the specified domain.",
      keyPoints: [
        "Reluplex algorithm: extends Simplex to handle ReLU(x) = max(0,x) — encodes neural network as linear arithmetic constraints with ReLU case splits; DPLL(T) framework",
        "Robustness verification: forall x' in B_epsilon(x): argmax f(x') = argmax f(x) — no adversarial example within L-infinity ball of radius epsilon; verified by Reluplex in O(2^n) worst case",
        "Safety verification: forall x in Input_region: f(x) in Safe_output_region — output always in safe region; EPU verifies this for all 847 critical input regions in the test suite",
        "Abstraction-refinement: CEGAR (Counterexample-Guided Abstraction Refinement) reduces verification complexity — abstract network verified first, counterexamples used to refine abstraction",
        "Scalability: Reluplex verified EPU-1 perception network (12 layers, 4096 neurons) in 47 hours — feasible for offline certification, not real-time; EPU uses runtime monitors for online safety"
      ],
      tags: ["SMT-solver", "Reluplex", "neural-network-verification", "formal-safety", "adversarial-robustness"]
    },
    fa: {
      title: "تایید رسمی شبکه‌های عصبی: یکپارچه‌سازی حل‌کننده SMT — §۲۳.۱",
      narrative: "چارچوب تایید شبکه عصبی EPU از حل‌کننده‌های SMT (نظریه‌های رضایت‌پذیری مدولو) برای تایید رسمی خواص شبکه‌های عصبی استفاده می‌کند. الگوریتم Reluplex روش سیمپلکس را برای مدیریت فعال‌سازی‌های ReLU گسترش می‌دهد.",
      strategic: "تایید شبکه عصبی مبتنی بر SMT پاسخ EPU به سوال چگونه به طور رسمی ثابت می‌کنید که شبکه عصبی ایمن است است — برخلاف آزمایش تجربی، تایید رسمی یک گواهی ریاضی فراهم می‌کند که خاصیت برای همه ورودی‌ها در دامنه مشخص شده برقرار است.",
      keyPoints: [
        "الگوریتم Reluplex: سیمپلکس را برای مدیریت ReLU(x) = max(0,x) گسترش می‌دهد — شبکه عصبی را به عنوان قیود حساب خطی با تقسیم‌بندی‌های حالت ReLU کدگذاری می‌کند",
        "تایید استحکام: هیچ نمونه دشمنانه‌ای در توپ L-infinity با شعاع epsilon وجود ندارد — توسط Reluplex در بدترین حالت O(2^n) تایید شده",
        "تایید ایمنی: خروجی همیشه در ناحیه ایمن است — EPU این را برای همه ۸۴۷ ناحیه ورودی بحرانی در مجموعه آزمون تایید می‌کند",
        "انتزاع-پالایش: CEGAR پیچیدگی تایید را کاهش می‌دهد — شبکه انتزاعی ابتدا تایید می‌شود، نقض‌های مثال برای پالایش انتزاع استفاده می‌شوند",
        "مقیاس‌پذیری: Reluplex شبکه ادراک EPU-1 (۱۲ لایه، ۴۰۹۶ نورون) را در ۴۷ ساعت تایید کرد — برای صدور گواهینامه آفلاین امکان‌پذیر است"
      ],
      tags: ["حل‌کننده-SMT", "Reluplex", "تایید-شبکه-عصبی", "ایمنی-رسمی", "استحکام-دشمنانه"]
    }
  },
  {
    id: 74,
    act: "Validation" as ActC,
    actLabel: ACT_LABELS_C.Validation,
    imageUrl: imgC(74),
    en: {
      title: "Runtime Monitoring with Signal Temporal Logic — §23.2",
      narrative: "The EPU runtime monitor uses Signal Temporal Logic (STL) to specify and monitor safety properties over continuous-time signals. STL formulas like G[0,T](speed < v_max) (always within [0,T] speed is below v_max) or F[0,T](distance > d_min) (eventually within [0,T] distance exceeds d_min) are evaluated online using the STL robustness metric rho.",
      strategic: "STL runtime monitoring is the EPU answer to the question how do you detect safety violations before they become accidents — the STL robustness metric provides a quantitative measure of how far the system is from violating a safety property, enabling proactive intervention.",
      keyPoints: [
        "STL syntax: phi ::= p | !phi | phi1 && phi2 | phi1 U[a,b] phi2 | G[a,b] phi | F[a,b] phi — temporal operators G (globally), F (eventually), U (until) with time bounds [a,b]",
        "STL robustness: rho(phi, s, t) — real-valued measure of how much signal s satisfies phi at time t; rho > 0 means satisfied, rho < 0 means violated, |rho| measures margin",
        "Online computation: STL robustness computed incrementally as new signal samples arrive — O(|phi|) per time step; EPU evaluates 47 STL formulas at 100Hz within 1ms budget",
        "Predictive monitoring: EPU predicts future STL robustness using MPC trajectory — if predicted rho < delta_warning, triggers SAFETY_WARNING interrupt before violation occurs",
        "Formal guarantee: if STL monitor detects rho < 0, safety property is violated — zero false negatives (no missed violations); false positive rate < 0.1% from prediction uncertainty"
      ],
      tags: ["signal-temporal-logic", "runtime-monitoring", "STL-robustness", "safety-properties", "predictive-monitoring"]
    },
    fa: {
      title: "نظارت بلادرنگ با منطق زمانی سیگنال — §۲۳.۲",
      narrative: "مانیتور بلادرنگ EPU از منطق زمانی سیگنال (STL) برای مشخص‌سازی و نظارت بر خواص ایمنی روی سیگنال‌های زمان پیوسته استفاده می‌کند. فرمول‌های STL مانند G[0,T](speed < v_max) به صورت آنلاین با استفاده از معیار استحکام STL rho ارزیابی می‌شوند.",
      strategic: "نظارت بلادرنگ STL پاسخ EPU به سوال چگونه نقض‌های ایمنی را قبل از اینکه به تصادف تبدیل شوند تشخیص می‌دهید است — معیار استحکام STL یک اندازه‌گیری کمی از فاصله سیستم از نقض یک خاصیت ایمنی فراهم می‌کند.",
      keyPoints: [
        "نحو STL: عملگرهای زمانی G (همیشه)، F (در نهایت)، U (تا) با کران‌های زمانی [a,b] — رسمی‌سازی خواص ایمنی پیوسته",
        "استحکام STL: rho(phi, s, t) — اندازه‌گیری با مقدار واقعی از میزان ارضای سیگنال s از phi در زمان t؛ rho > 0 یعنی ارضا شده، rho < 0 یعنی نقض شده",
        "محاسبه آنلاین: استحکام STL به صورت افزایشی با رسیدن نمونه‌های جدید سیگنال محاسبه می‌شود — O(|phi|) در هر مرحله زمانی؛ EPU ۴۷ فرمول STL را در 100Hz در بودجه ۱ms ارزیابی می‌کند",
        "نظارت پیش‌بینانه: EPU استحکام STL آینده را با استفاده از مسیر MPC پیش‌بینی می‌کند — اگر rho پیش‌بینی شده < delta_warning باشد، قبل از وقوع نقض وقفه SAFETY_WARNING را فعال می‌کند",
        "تضمین رسمی: اگر مانیتور STL rho < 0 را تشخیص دهد، خاصیت ایمنی نقض شده است — صفر منفی کاذب (هیچ نقضی از دست نمی‌رود)؛ نرخ مثبت کاذب < ۰.۱ درصد از عدم قطعیت پیش‌بینی"
      ],
      tags: ["منطق-زمانی-سیگنال", "نظارت-بلادرنگ", "استحکام-STL", "خواص-ایمنی", "نظارت-پیش‌بینانه"]
    }
  }
];
