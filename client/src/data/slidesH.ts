// MVD: 2.00 | Source: PHILIPPINES_ECONOMY_MIRROR_BRIDGE_BRITAIN_FRANCE | Slides: 30 | Lang: EN+FA
// ─── Deck H · Capability Transfer Map Pack (CTMP) ────────────────────────────
// Philippines as the sovereign mirror: Britain and France as capability suppliers
// Strategic framing: From colonial extraction to physics-grounded co-production
// Acts: Premise → Mirror → BritainMap → FranceMap → Synthesis → Pathway

export type ActH =
  | "Premise"
  | "Mirror"
  | "BritainMap"
  | "FranceMap"
  | "Synthesis"
  | "Pathway";

export interface SlideContentH {
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
}

export interface SlideH {
  id: number;
  act: ActH;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: SlideContentH;
  fa: SlideContentH;
}

export const ACT_LABELS_H: Record<ActH, { en: string; fa: string }> = {
  Premise:    { en: "Strategic Premise",        fa: "پیش‌فرض استراتژیک" },
  Mirror:     { en: "Philippines Mirror",        fa: "آینه فیلیپین" },
  BritainMap: { en: "Britain Capability Map",    fa: "نقشه توانمندی بریتانیا" },
  FranceMap:  { en: "France Capability Map",     fa: "نقشه توانمندی فرانسه" },
  Synthesis:  { en: "Synthesis & Convergence",   fa: "ترکیب و همگرایی" },
  Pathway:    { en: "Sovereign Pathway",         fa: "مسیر حاکمیتی" },
};

// Placeholder CDN base — images to be generated and uploaded
const CDN_H = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";
const IMG_H: Record<number, string> = {
  1:  `${CDN_H}/h01_ctmp_cover_premise-placeholder.png`,
  2:  `${CDN_H}/h02_colonial_extraction_map-placeholder.png`,
  3:  `${CDN_H}/h03_physics_grounded_frame-placeholder.png`,
  4:  `${CDN_H}/h04_sovereign_mirror_concept-placeholder.png`,
  5:  `${CDN_H}/h05_philippines_gdp_structure-placeholder.png`,
  6:  `${CDN_H}/h06_philippines_stem_pipeline-placeholder.png`,
  7:  `${CDN_H}/h07_philippines_diaspora_network-placeholder.png`,
  8:  `${CDN_H}/h08_philippines_territorial_zones-placeholder.png`,
  9:  `${CDN_H}/h09_philippines_regulatory_readiness-placeholder.png`,
  10: `${CDN_H}/h10_philippines_mirror_synthesis-placeholder.png`,
  11: `${CDN_H}/h11_britain_aerospace_heritage-placeholder.png`,
  12: `${CDN_H}/h12_britain_semiconductor_cluster-placeholder.png`,
  13: `${CDN_H}/h13_britain_battery_catapult-placeholder.png`,
  14: `${CDN_H}/h14_britain_ai_safety_institute-placeholder.png`,
  15: `${CDN_H}/h15_britain_finance_instruments-placeholder.png`,
  16: `${CDN_H}/h16_britain_transfer_matrix-placeholder.png`,
  17: `${CDN_H}/h17_france_nuclear_thermal-placeholder.png`,
  18: `${CDN_H}/h18_france_alstom_rail-placeholder.png`,
  19: `${CDN_H}/h19_france_thales_perception-placeholder.png`,
  20: `${CDN_H}/h20_france_bpifrance_instruments-placeholder.png`,
  21: `${CDN_H}/h21_france_grandes_ecoles-placeholder.png`,
  22: `${CDN_H}/h22_france_transfer_matrix-placeholder.png`,
  23: `${CDN_H}/h23_convergence_map-placeholder.png`,
  24: `${CDN_H}/h24_capability_gap_analysis-placeholder.png`,
  25: `${CDN_H}/h25_joint_venture_architecture-placeholder.png`,
  26: `${CDN_H}/h26_timeline_phased-placeholder.png`,
  27: `${CDN_H}/h27_sovereign_ip_framework-placeholder.png`,
  28: `${CDN_H}/h28_landing_zone_map-placeholder.png`,
  29: `${CDN_H}/h29_risk_register-placeholder.png`,
  30: `${CDN_H}/h30_ctmp_closing_call-placeholder.png`,
};
function imgH(n: number): string {
  return IMG_H[n] ?? IMG_H[1];
}

// ═══════════════════════════════════════════════════════════════════════════════
// ACT I — STRATEGIC PREMISE (H-1 to H-4)
// ═══════════════════════════════════════════════════════════════════════════════
export const slidesH: SlideH[] = [
  {
    id: 1,
    act: "Premise",
    actLabel: ACT_LABELS_H.Premise,
    imageUrl: imgH(1),
    en: {
      title: "Capability Transfer Map Pack — Why Now, Why Here",
      narrative: "The Capability Transfer Map Pack (CTMP) is not a trade document. It is a physics-grounded sovereignty instrument. It answers one question: which capabilities, held by Britain and France, can be transferred to a sovereign partner in Southeast Asia without replicating the colonial extraction logic that defined the previous century of technology flows. The Philippines is the designated mirror — not because it is convenient, but because its structural profile (STEM density, diaspora network, territorial geometry, and regulatory trajectory) makes it the most legible test case for a new model of co-production.",
      strategic: "The CTMP reframes capability transfer from a commercial transaction into a sovereignty-building protocol. Every capability listed has a physics basis, a local absorption pathway, and a non-extraction clause.",
      keyPoints: [
        "CTMP is a sovereignty instrument, not a trade document",
        "Philippines selected on structural merit: STEM density, diaspora, territorial geometry",
        "Britain and France mapped as capability suppliers, not colonial successors",
        "Physics-grounded framing: every capability has an absorption pathway",
        "Non-extraction clause: no capability transfer that creates permanent dependency",
      ],
      tags: ["CTMP", "sovereignty", "capability transfer", "Philippines", "Britain", "France"],
    },
    fa: {
      title: "بسته نقشه انتقال توانمندی — چرا اکنون، چرا اینجا",
      narrative: "بسته نقشه انتقال توانمندی (CTMP) یک سند تجاری نیست. این یک ابزار حاکمیتی مبتنی بر فیزیک است که به یک سؤال پاسخ می‌دهد: کدام توانمندی‌های بریتانیا و فرانسه می‌توانند بدون تکرار منطق استخراج استعماری به یک شریک حاکمیتی در جنوب شرق آسیا منتقل شوند؟ فیلیپین به عنوان آینه انتخاب شده است — نه به دلیل راحتی، بلکه به دلیل پروفایل ساختاری آن.",
      strategic: "CTMP انتقال توانمندی را از یک معامله تجاری به یک پروتکل ساخت حاکمیت تبدیل می‌کند.",
      keyPoints: [
        "CTMP یک ابزار حاکمیتی است، نه یک سند تجاری",
        "فیلیپین بر اساس شایستگی ساختاری انتخاب شده است",
        "بریتانیا و فرانسه به عنوان تأمین‌کنندگان توانمندی نقشه‌برداری شده‌اند",
        "چارچوب مبتنی بر فیزیک: هر توانمندی یک مسیر جذب دارد",
        "بند غیراستخراجی: هیچ انتقال توانمندی که وابستگی دائمی ایجاد کند",
      ],
      tags: ["CTMP", "حاکمیت", "انتقال توانمندی", "فیلیپین", "بریتانیا", "فرانسه"],
    },
  },
  {
    id: 2,
    act: "Premise",
    actLabel: ACT_LABELS_H.Premise,
    imageUrl: imgH(2),
    en: {
      title: "The Colonial Extraction Problem — What We Are Not Doing",
      narrative: "Colonial technology transfer had a consistent architecture: extract raw materials, export finished goods, and ensure that the knowledge required to close the loop never crossed the border. The result was a century of structural dependency in which Southeast Asian economies became permanent consumers of technology they could not produce. The CTMP explicitly rejects this architecture. The test for every capability listed is whether it can be absorbed, reproduced, and eventually improved upon by local engineers without requiring continued access to the original supplier.",
      strategic: "The non-extraction test is binary: does this transfer create a pathway to independence, or does it create a new form of dependency? Only transfers that pass the independence test are included.",
      keyPoints: [
        "Colonial transfer: extract raw materials, withhold production knowledge",
        "Result: permanent structural dependency in Southeast Asia",
        "CTMP test: can the capability be absorbed and reproduced locally?",
        "Independence pathway required for every listed capability",
        "Dependency-creating transfers explicitly excluded from CTMP",
      ],
      tags: ["colonial extraction", "dependency", "independence pathway", "technology transfer"],
    },
    fa: {
      title: "مشکل استخراج استعماری — آنچه انجام نمی‌دهیم",
      narrative: "انتقال فناوری استعماری یک معماری ثابت داشت: استخراج مواد خام، صادرات کالاهای نهایی، و اطمینان از اینکه دانش لازم برای بستن حلقه هرگز از مرز عبور نکند. CTMP این معماری را صریحاً رد می‌کند.",
      strategic: "آزمون غیراستخراجی دوگانه است: آیا این انتقال مسیری به سوی استقلال ایجاد می‌کند، یا شکل جدیدی از وابستگی؟",
      keyPoints: [
        "انتقال استعماری: استخراج مواد خام، پنهان کردن دانش تولید",
        "نتیجه: وابستگی ساختاری دائمی در جنوب شرق آسیا",
        "آزمون CTMP: آیا توانمندی می‌تواند به صورت محلی جذب و بازتولید شود؟",
        "مسیر استقلال برای هر توانمندی فهرست‌شده الزامی است",
        "انتقال‌های ایجادکننده وابستگی صریحاً از CTMP حذف شده‌اند",
      ],
      tags: ["استخراج استعماری", "وابستگی", "مسیر استقلال", "انتقال فناوری"],
    },
  },
  {
    id: 3,
    act: "Premise",
    actLabel: ACT_LABELS_H.Premise,
    imageUrl: imgH(3),
    en: {
      title: "Physics-Grounded Framing — The Absorption Test",
      narrative: "Physics-grounded framing means that every capability in the CTMP is described in terms of its underlying physical principles, not its commercial packaging. A battery management system is not a product — it is an electrochemical state estimation problem. A perception stack is not software — it is a sensor fusion problem with specific signal-to-noise constraints. When capabilities are described in physical terms, the absorption pathway becomes visible: local engineers can be trained on the physics, not just the product, and can therefore modify, improve, and eventually replace the imported system.",
      strategic: "Physics-first description is the mechanism that converts a commercial transfer into a sovereignty-building transfer. It is the difference between buying a tool and understanding how to make one.",
      keyPoints: [
        "Every capability described in physical principles, not commercial packaging",
        "Battery management = electrochemical state estimation problem",
        "Perception stack = sensor fusion with signal-to-noise constraints",
        "Physics description makes the absorption pathway visible",
        "Local engineers trained on physics can modify and eventually replace imported systems",
      ],
      tags: ["physics-grounded", "absorption test", "sensor fusion", "electrochemistry", "sovereignty"],
    },
    fa: {
      title: "چارچوب مبتنی بر فیزیک — آزمون جذب",
      narrative: "چارچوب مبتنی بر فیزیک به این معنی است که هر توانمندی در CTMP بر اساس اصول فیزیکی زیربنایی آن توصیف می‌شود، نه بسته‌بندی تجاری آن. یک سیستم مدیریت باتری یک محصول نیست — یک مسئله تخمین حالت الکتروشیمیایی است.",
      strategic: "توصیف فیزیک‌محور مکانیزمی است که انتقال تجاری را به انتقال ساخت حاکمیت تبدیل می‌کند.",
      keyPoints: [
        "هر توانمندی بر اساس اصول فیزیکی توصیف می‌شود، نه بسته‌بندی تجاری",
        "مدیریت باتری = مسئله تخمین حالت الکتروشیمیایی",
        "پشته ادراک = ترکیب حسگر با محدودیت‌های نسبت سیگنال به نویز",
        "توصیف فیزیکی مسیر جذب را قابل مشاهده می‌کند",
        "مهندسان محلی آموزش‌دیده در فیزیک می‌توانند سیستم‌های وارداتی را اصلاح و جایگزین کنند",
      ],
      tags: ["مبتنی بر فیزیک", "آزمون جذب", "ترکیب حسگر", "الکتروشیمی", "حاکمیت"],
    },
  },
  {
    id: 4,
    act: "Premise",
    actLabel: ACT_LABELS_H.Premise,
    imageUrl: imgH(4),
    en: {
      title: "The Sovereign Mirror Concept — Why a Partner, Not a Market",
      narrative: "The sovereign mirror concept reframes the Philippines from a market (a place to sell technology) to a mirror (a place that reflects the capability gaps and absorption strengths of the supplier). A mirror reveals what the supplier does not know about its own technology: which parts of its capability stack are genuinely transferable, which parts require tacit knowledge that cannot be documented, and which parts are so deeply embedded in supplier infrastructure that transfer is structurally impossible. The mirror relationship is therefore diagnostic for both parties.",
      strategic: "The mirror relationship is not charity. It is a structured diagnostic that reveals the true transferability of each capability and forces both parties to confront the limits of what can actually be shared.",
      keyPoints: [
        "Philippines as mirror, not market: reveals supplier capability gaps",
        "Mirror shows which capabilities are genuinely transferable",
        "Tacit knowledge test: what cannot be documented cannot be transferred",
        "Infrastructure-embedded capabilities are structurally non-transferable",
        "Mirror relationship is diagnostic for both Britain/France and Philippines",
      ],
      tags: ["sovereign mirror", "tacit knowledge", "transferability", "diagnostic", "co-production"],
    },
    fa: {
      title: "مفهوم آینه حاکمیتی — چرا یک شریک، نه یک بازار",
      narrative: "مفهوم آینه حاکمیتی فیلیپین را از یک بازار (جایی برای فروش فناوری) به یک آینه (جایی که شکاف‌های توانمندی و نقاط قوت جذب تأمین‌کننده را منعکس می‌کند) تبدیل می‌کند.",
      strategic: "رابطه آینه خیریه نیست. این یک تشخیص ساختاریافته است که قابلیت انتقال واقعی هر توانمندی را آشکار می‌کند.",
      keyPoints: [
        "فیلیپین به عنوان آینه، نه بازار: شکاف‌های توانمندی تأمین‌کننده را آشکار می‌کند",
        "آینه نشان می‌دهد کدام توانمندی‌ها واقعاً قابل انتقال هستند",
        "آزمون دانش ضمنی: آنچه مستند نمی‌شود قابل انتقال نیست",
        "توانمندی‌های تعبیه‌شده در زیرساخت به صورت ساختاری غیرقابل انتقال هستند",
        "رابطه آینه برای هر دو طرف تشخیصی است",
      ],
      tags: ["آینه حاکمیتی", "دانش ضمنی", "قابلیت انتقال", "تشخیص", "تولید مشترک"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACT II — PHILIPPINES MIRROR (H-5 to H-10)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 5,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(5),
    en: {
      title: "Philippines GDP Structure — The Absorption Capacity Profile",
      narrative: "The Philippines GDP structure reveals an economy in transition: services dominate at 61%, industry at 28%, and agriculture at 10%. Within services, business process outsourcing (BPO) accounts for $32 billion annually — a sector built entirely on English-language technical communication and process execution. This is not a low-skill economy. The BPO sector has trained a workforce in structured problem-solving, documentation, and quality assurance that is directly applicable to technology absorption. The industrial sector, dominated by electronics assembly (Semiconductor and Electronics Industry of the Philippines: $47 billion in exports), provides the manufacturing base for capability landing.",
      strategic: "The Philippines is not a blank slate. It has a documented absorption capacity in electronics manufacturing and technical services that makes it a credible first-landing zone for advanced capability transfer.",
      keyPoints: [
        "GDP: Services 61%, Industry 28%, Agriculture 10%",
        "BPO sector: $32B annually — English-language technical workforce",
        "Electronics exports: $47B — existing manufacturing absorption base",
        "BPO workforce trained in structured problem-solving and QA",
        "Electronics assembly provides manufacturing base for capability landing",
      ],
      tags: ["Philippines GDP", "BPO", "electronics manufacturing", "absorption capacity", "SEIPI"],
    },
    fa: {
      title: "ساختار تولید ناخالص داخلی فیلیپین — پروفایل ظرفیت جذب",
      narrative: "ساختار تولید ناخالص داخلی فیلیپین یک اقتصاد در حال گذار را نشان می‌دهد: خدمات با ۶۱٪ غالب است، صنعت ۲۸٪ و کشاورزی ۱۰٪. بخش BPO با ۳۲ میلیارد دلار سالانه، نیروی کاری آموزش‌دیده در حل مسئله ساختاریافته ایجاد کرده است.",
      strategic: "فیلیپین یک صفحه سفید نیست. ظرفیت جذب مستند در تولید الکترونیک و خدمات فنی دارد.",
      keyPoints: [
        "تولید ناخالص داخلی: خدمات ۶۱٪، صنعت ۲۸٪، کشاورزی ۱۰٪",
        "بخش BPO: ۳۲ میلیارد دلار سالانه — نیروی کار فنی انگلیسی‌زبان",
        "صادرات الکترونیک: ۴۷ میلیارد دلار — پایه تولید جذب موجود",
        "نیروی کار BPO در حل مسئله ساختاریافته و تضمین کیفیت آموزش دیده",
        "مونتاژ الکترونیک پایه تولیدی برای فرود توانمندی فراهم می‌کند",
      ],
      tags: ["تولید ناخالص داخلی فیلیپین", "BPO", "تولید الکترونیک", "ظرفیت جذب"],
    },
  },
  {
    id: 6,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(6),
    en: {
      title: "Philippines STEM Pipeline — The Engineering Absorption Depth",
      narrative: "The Philippines produces approximately 170,000 STEM graduates annually, with engineering and technology accounting for 40% of that total. The Commission on Higher Education (CHED) reports 68,000 engineering graduates per year — a pipeline that ranks among the highest per-capita in Southeast Asia. Crucially, the engineering curriculum in the Philippines is accredited by ABET-equivalent standards through the Philippine Accreditation Board for Engineering Education (PABEE), which means the foundational physics and mathematics training is compatible with British and French engineering education standards. This is the absorption depth that makes advanced capability transfer viable.",
      strategic: "68,000 engineering graduates per year with ABET-equivalent accreditation is not a developing-economy profile. It is a co-production partner profile.",
      keyPoints: [
        "170,000 STEM graduates annually; 68,000 in engineering",
        "Per-capita engineering output among highest in Southeast Asia",
        "PABEE accreditation: ABET-equivalent standards",
        "Compatible with British and French engineering education",
        "Engineering pipeline is the absorption depth for advanced capability transfer",
      ],
      tags: ["STEM pipeline", "engineering graduates", "PABEE", "ABET", "absorption depth"],
    },
    fa: {
      title: "خط لوله STEM فیلیپین — عمق جذب مهندسی",
      narrative: "فیلیپین سالانه حدود ۱۷۰,۰۰۰ فارغ‌التحصیل STEM تولید می‌کند که ۴۰٪ آن‌ها در مهندسی و فناوری هستند. ۶۸,۰۰۰ فارغ‌التحصیل مهندسی در سال با اعتبارسنجی معادل ABET.",
      strategic: "۶۸,۰۰۰ فارغ‌التحصیل مهندسی در سال با اعتبارسنجی معادل ABET یک پروفایل شریک تولید مشترک است، نه یک اقتصاد در حال توسعه.",
      keyPoints: [
        "۱۷۰,۰۰۰ فارغ‌التحصیل STEM سالانه؛ ۶۸,۰۰۰ در مهندسی",
        "تولید مهندسی سرانه در بین بالاترین‌ها در جنوب شرق آسیا",
        "اعتبارسنجی PABEE: استانداردهای معادل ABET",
        "سازگار با آموزش مهندسی بریتانیا و فرانسه",
        "خط لوله مهندسی عمق جذب برای انتقال توانمندی پیشرفته است",
      ],
      tags: ["خط لوله STEM", "فارغ‌التحصیلان مهندسی", "PABEE", "ABET", "عمق جذب"],
    },
  },
  {
    id: 7,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(7),
    en: {
      title: "Philippines Diaspora Network — The Knowledge Bridge",
      narrative: "The Philippine diaspora numbers approximately 10 million overseas Filipino workers (OFWs) globally, with significant concentrations in the United Kingdom (250,000+) and France (80,000+). This is not a remittance story — it is a knowledge bridge story. Filipino engineers and technicians working in British aerospace, automotive, and semiconductor firms carry tacit knowledge of British engineering practice that cannot be transmitted through documentation alone. The diaspora network is the mechanism through which tacit knowledge flows back to the Philippines, and it is the reason why Britain-to-Philippines capability transfer has a structural advantage over transfers from countries with no diaspora connection.",
      strategic: "The diaspora is not a welfare concern. It is a knowledge infrastructure asset that reduces the tacit knowledge barrier in capability transfer by an order of magnitude.",
      keyPoints: [
        "10 million OFWs globally; 250,000+ in UK, 80,000+ in France",
        "Filipino engineers in British aerospace and semiconductor firms",
        "Diaspora carries tacit knowledge of British engineering practice",
        "Tacit knowledge flows back through diaspora network",
        "UK-Philippines transfer has structural advantage due to diaspora density",
      ],
      tags: ["diaspora", "OFW", "tacit knowledge", "knowledge bridge", "UK Philippines"],
    },
    fa: {
      title: "شبکه دیاسپورای فیلیپین — پل دانش",
      narrative: "دیاسپورای فیلیپین حدود ۱۰ میلیون کارگر فیلیپینی خارج از کشور (OFW) در سراسر جهان دارد، با تمرکز قابل توجه در بریتانیا (۲۵۰,۰۰۰+) و فرانسه (۸۰,۰۰۰+). این یک داستان حواله نیست — یک داستان پل دانش است.",
      strategic: "دیاسپورا یک دارایی زیرساخت دانش است که مانع دانش ضمنی در انتقال توانمندی را به میزان قابل توجهی کاهش می‌دهد.",
      keyPoints: [
        "۱۰ میلیون OFW در سراسر جهان؛ ۲۵۰,۰۰۰+ در بریتانیا، ۸۰,۰۰۰+ در فرانسه",
        "مهندسان فیلیپینی در شرکت‌های هوافضا و نیمه‌هادی بریتانیا",
        "دیاسپورا دانش ضمنی عملکرد مهندسی بریتانیا را حمل می‌کند",
        "دانش ضمنی از طریق شبکه دیاسپورا به فیلیپین باز می‌گردد",
        "انتقال بریتانیا-فیلیپین به دلیل تراکم دیاسپورا مزیت ساختاری دارد",
      ],
      tags: ["دیاسپورا", "OFW", "دانش ضمنی", "پل دانش", "بریتانیا فیلیپین"],
    },
  },
  {
    id: 8,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(8),
    en: {
      title: "Philippines Territorial Landing Zones — Where Capability Lands",
      narrative: "The Philippines archipelago of 7,641 islands is not a liability — it is a distributed manufacturing and testing geography. The CTMP identifies four primary territorial landing zones: (1) Metro Manila and CALABARZON for high-skill assembly and software integration; (2) Central Visayas (Cebu) for maritime and logistics technology; (3) Northern Mindanao for energy systems and resource processing; (4) Clark and Subic Bay Freeport Zones for aerospace and defense-adjacent manufacturing. Each zone has existing infrastructure, regulatory frameworks, and workforce concentrations that match specific capability categories in the CTMP.",
      strategic: "The territorial landing zone map converts the Philippines from an abstract partner to a specific geography with specific absorption points for specific capabilities.",
      keyPoints: [
        "7,641 islands = distributed manufacturing and testing geography",
        "Metro Manila/CALABARZON: high-skill assembly and software integration",
        "Cebu: maritime and logistics technology",
        "Northern Mindanao: energy systems and resource processing",
        "Clark/Subic: aerospace and defense-adjacent manufacturing",
      ],
      tags: ["territorial zones", "landing zones", "Clark Subic", "CALABARZON", "Cebu", "Mindanao"],
    },
    fa: {
      title: "مناطق فرود سرزمینی فیلیپین — جایی که توانمندی فرود می‌آید",
      narrative: "مجمع‌الجزایر ۷,۶۴۱ جزیره‌ای فیلیپین یک بدهی نیست — یک جغرافیای تولید و آزمایش توزیع‌شده است. CTMP چهار منطقه فرود سرزمینی اصلی را شناسایی می‌کند.",
      strategic: "نقشه منطقه فرود سرزمینی فیلیپین را از یک شریک انتزاعی به یک جغرافیای خاص با نقاط جذب خاص برای توانمندی‌های خاص تبدیل می‌کند.",
      keyPoints: [
        "۷,۶۴۱ جزیره = جغرافیای تولید و آزمایش توزیع‌شده",
        "مترو مانیلا/CALABARZON: مونتاژ مهارت بالا و یکپارچه‌سازی نرم‌افزار",
        "سبو: فناوری دریایی و لجستیک",
        "شمال مینداناو: سیستم‌های انرژی و پردازش منابع",
        "کلارک/سوبیک: تولید هوافضا و مجاور دفاعی",
      ],
      tags: ["مناطق سرزمینی", "مناطق فرود", "کلارک سوبیک", "CALABARZON", "سبو", "مینداناو"],
    },
  },
  {
    id: 9,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(9),
    en: {
      title: "Philippines Regulatory Readiness — The Governance Absorption Layer",
      narrative: "Capability transfer fails when the governance layer cannot absorb it. The Philippines has a documented regulatory trajectory that is relevant to the CTMP: the Philippine Competition Act (2015) provides an antitrust framework compatible with EU competition law; the Foreign Investment Act amendments (2022) allow 100% foreign ownership in most sectors; the CREATE Act (2021) provides fiscal incentives for R&D and technology-intensive investment; and the Philippine Innovation Act (2019) establishes a national innovation agenda. These are not aspirational documents — they are enacted legislation with implementing rules.",
      strategic: "Regulatory readiness is the governance absorption layer. Without it, capability transfer produces technology that cannot be legally operated, commercially deployed, or institutionally sustained.",
      keyPoints: [
        "Philippine Competition Act (2015): EU-compatible antitrust framework",
        "Foreign Investment Act (2022): 100% foreign ownership in most sectors",
        "CREATE Act (2021): fiscal incentives for R&D and tech-intensive investment",
        "Philippine Innovation Act (2019): national innovation agenda",
        "All are enacted legislation with implementing rules, not aspirational documents",
      ],
      tags: ["regulatory readiness", "CREATE Act", "Foreign Investment Act", "Philippine Innovation Act", "governance"],
    },
    fa: {
      title: "آمادگی نظارتی فیلیپین — لایه جذب حاکمیتی",
      narrative: "انتقال توانمندی زمانی شکست می‌خورد که لایه حاکمیتی نتواند آن را جذب کند. فیلیپین یک مسیر نظارتی مستند دارد که برای CTMP مرتبط است.",
      strategic: "آمادگی نظارتی لایه جذب حاکمیتی است. بدون آن، انتقال توانمندی فناوری‌ای تولید می‌کند که نمی‌توان آن را به صورت قانونی اداره کرد.",
      keyPoints: [
        "قانون رقابت فیلیپین (۲۰۱۵): چارچوب ضد انحصار سازگار با اتحادیه اروپا",
        "قانون سرمایه‌گذاری خارجی (۲۰۲۲): مالکیت خارجی ۱۰۰٪ در اکثر بخش‌ها",
        "قانون CREATE (۲۰۲۱): مشوق‌های مالی برای تحقیق و توسعه",
        "قانون نوآوری فیلیپین (۲۰۱۹): دستور کار نوآوری ملی",
        "همه قوانین تصویب‌شده با قوانین اجرایی هستند، نه اسناد آرمانی",
      ],
      tags: ["آمادگی نظارتی", "قانون CREATE", "قانون سرمایه‌گذاری خارجی", "قانون نوآوری فیلیپین", "حاکمیت"],
    },
  },
  {
    id: 10,
    act: "Mirror",
    actLabel: ACT_LABELS_H.Mirror,
    imageUrl: imgH(10),
    en: {
      title: "Philippines Mirror Synthesis — The Absorption Profile Summary",
      narrative: "The Philippines absorption profile, across all five dimensions examined, produces a composite score that places it in the top tier of Southeast Asian capability transfer candidates. STEM pipeline depth (68,000 engineering graduates/year), diaspora knowledge bridge (330,000+ in UK/France), territorial landing zone diversity (4 distinct zones with existing infrastructure), regulatory readiness (4 enacted innovation-relevant laws), and existing manufacturing base (electronics exports $47B) combine to create an absorption profile that is not replicated by any other single Southeast Asian economy. Vietnam has manufacturing depth but lacks the diaspora bridge. Indonesia has scale but lacks the regulatory clarity. Thailand has automotive manufacturing but lacks the STEM pipeline depth.",
      strategic: "The Philippines is the correct first-landing zone for the CTMP not because it is the largest economy, but because it has the most complete absorption profile across all five dimensions simultaneously.",
      keyPoints: [
        "Top-tier absorption profile across all 5 dimensions",
        "Vietnam: manufacturing depth, no diaspora bridge",
        "Indonesia: scale, no regulatory clarity",
        "Thailand: automotive manufacturing, insufficient STEM pipeline",
        "Philippines: only Southeast Asian economy with all 5 dimensions simultaneously",
      ],
      tags: ["absorption profile", "Southeast Asia comparison", "Vietnam", "Indonesia", "Thailand", "Philippines"],
    },
    fa: {
      title: "ترکیب آینه فیلیپین — خلاصه پروفایل جذب",
      narrative: "پروفایل جذب فیلیپین در تمام پنج بعد بررسی‌شده، یک امتیاز ترکیبی تولید می‌کند که آن را در ردیف برتر نامزدهای انتقال توانمندی در جنوب شرق آسیا قرار می‌دهد.",
      strategic: "فیلیپین اولین منطقه فرود صحیح برای CTMP است نه به دلیل اینکه بزرگترین اقتصاد است، بلکه به دلیل اینکه کامل‌ترین پروفایل جذب را در تمام پنج بعد به طور همزمان دارد.",
      keyPoints: [
        "پروفایل جذب ردیف برتر در تمام ۵ بعد",
        "ویتنام: عمق تولید، بدون پل دیاسپورا",
        "اندونزی: مقیاس، بدون وضوح نظارتی",
        "تایلند: تولید خودرو، خط لوله STEM ناکافی",
        "فیلیپین: تنها اقتصاد جنوب شرق آسیا با هر ۵ بعد به طور همزمان",
      ],
      tags: ["پروفایل جذب", "مقایسه جنوب شرق آسیا", "ویتنام", "اندونزی", "تایلند", "فیلیپین"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACT III — BRITAIN CAPABILITY MAP (H-11 to H-16)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 11,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(11),
    en: {
      title: "Britain Aerospace Heritage — The Physics Depth Asset",
      narrative: "Britain's aerospace heritage is not nostalgia — it is a physics depth asset. Rolls-Royce's gas turbine thermodynamics, BAE Systems' aerodynamic structures, and GKN Aerospace's composite manufacturing represent three distinct capability clusters that have direct application to autonomous vehicle development: thermal management (gas turbine → hydrogen fuel cell thermal systems), structural optimization (aerodynamic → vehicle chassis lightweight design), and advanced composites (aerospace → vehicle body and battery enclosure). The Aerospace Technology Institute (ATI) has documented these transfer pathways in its Aerospace Technology Strategy 2030.",
      strategic: "Britain's aerospace heritage is a transferable physics asset, not a legacy industry. The transfer pathway from gas turbine thermodynamics to hydrogen fuel cell thermal management is a documented engineering pathway, not a speculative one.",
      keyPoints: [
        "Rolls-Royce: gas turbine thermodynamics → hydrogen fuel cell thermal systems",
        "BAE Systems: aerodynamic structures → vehicle chassis lightweight design",
        "GKN Aerospace: composite manufacturing → vehicle body and battery enclosure",
        "ATI Aerospace Technology Strategy 2030 documents transfer pathways",
        "Physics depth, not legacy nostalgia",
      ],
      tags: ["Britain aerospace", "Rolls-Royce", "BAE Systems", "GKN", "ATI", "thermal management"],
    },
    fa: {
      title: "میراث هوافضای بریتانیا — دارایی عمق فیزیک",
      narrative: "میراث هوافضای بریتانیا نوستالژی نیست — یک دارایی عمق فیزیک است. ترمودینامیک توربین گازی رولز-رویس، سازه‌های آیرودینامیک BAE Systems، و تولید کامپوزیت GKN Aerospace سه خوشه توانمندی متمایز را نشان می‌دهند.",
      strategic: "میراث هوافضای بریتانیا یک دارایی فیزیک قابل انتقال است، نه یک صنعت قدیمی.",
      keyPoints: [
        "رولز-رویس: ترمودینامیک توربین گازی → سیستم‌های حرارتی پیل سوختی هیدروژن",
        "BAE Systems: سازه‌های آیرودینامیک → طراحی سبک شاسی خودرو",
        "GKN Aerospace: تولید کامپوزیت → بدنه خودرو و محفظه باتری",
        "استراتژی فناوری هوافضا ATI 2030 مسیرهای انتقال را مستند می‌کند",
        "عمق فیزیک، نه نوستالژی قدیمی",
      ],
      tags: ["هوافضای بریتانیا", "رولز-رویس", "BAE Systems", "GKN", "ATI", "مدیریت حرارتی"],
    },
  },
  {
    id: 12,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(12),
    en: {
      title: "Britain Semiconductor Cluster — The Signal Processing Asset",
      narrative: "Britain's semiconductor capability is concentrated in three clusters: the Cambridge ecosystem (ARM Holdings, Arm-licensed chip designers, Cambridge Consultants), the Bristol/Bath corridor (Graphcore, Ultraleap, XMOS), and the Scottish microelectronics cluster (Compound Semiconductor Applications Catapult, Newport Wafer Fab). ARM's instruction set architecture is the foundation of virtually every mobile and embedded processor globally — a physics-level capability that is already embedded in Philippine electronics manufacturing. The transfer pathway is not from zero: it is from ARM-licensed assembly to ARM-licensed design, a step that requires STEM depth but not greenfield infrastructure.",
      strategic: "The ARM ecosystem is the most globally distributed semiconductor capability in existence. Philippines electronics manufacturers are already operating within it. The transfer pathway is from consumption to design — a step, not a leap.",
      keyPoints: [
        "Cambridge: ARM Holdings, ARM-licensed chip designers, Cambridge Consultants",
        "Bristol/Bath: Graphcore (AI chips), Ultraleap, XMOS",
        "Scotland: Compound Semiconductor Applications Catapult",
        "Philippines already operates ARM-licensed assembly",
        "Transfer pathway: ARM-licensed assembly → ARM-licensed design",
      ],
      tags: ["Britain semiconductor", "ARM", "Cambridge", "Graphcore", "compound semiconductor", "Philippines electronics"],
    },
    fa: {
      title: "خوشه نیمه‌هادی بریتانیا — دارایی پردازش سیگنال",
      narrative: "توانمندی نیمه‌هادی بریتانیا در سه خوشه متمرکز است: اکوسیستم کمبریج (ARM Holdings)، دالان بریستول/باث (Graphcore)، و خوشه میکروالکترونیک اسکاتلند.",
      strategic: "اکوسیستم ARM توزیع‌شده‌ترین توانمندی نیمه‌هادی در جهان است. تولیدکنندگان الکترونیک فیلیپین از قبل در آن فعالیت می‌کنند.",
      keyPoints: [
        "کمبریج: ARM Holdings، طراحان چیپ دارای مجوز ARM",
        "بریستول/باث: Graphcore (چیپ‌های هوش مصنوعی)، Ultraleap، XMOS",
        "اسکاتلند: کاتاپولت کاربردهای نیمه‌هادی مرکب",
        "فیلیپین از قبل مونتاژ دارای مجوز ARM را اجرا می‌کند",
        "مسیر انتقال: مونتاژ دارای مجوز ARM → طراحی دارای مجوز ARM",
      ],
      tags: ["نیمه‌هادی بریتانیا", "ARM", "کمبریج", "Graphcore", "نیمه‌هادی مرکب", "الکترونیک فیلیپین"],
    },
  },
  {
    id: 13,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(13),
    en: {
      title: "Britain Battery Catapult — The Electrochemical Transfer Asset",
      narrative: "The Faraday Institution and the UK Battery Industrialisation Centre (UKBIC) in Coventry represent Britain's most directly transferable capability cluster for autonomous vehicle development. UKBIC is a £130 million facility that provides end-to-end battery manufacturing process development — from cell chemistry to pack assembly to thermal management system integration. The Faraday Institution's research programs in solid-state electrolytes, battery degradation modeling, and second-life battery systems are all physics-level capabilities that can be transferred through researcher exchange and co-publication programs without requiring technology export licenses.",
      strategic: "UKBIC is the most directly transferable Britain capability for Philippine autonomous vehicle development because it operates at the manufacturing process level, not the product level. Process knowledge is more transferable than product knowledge.",
      keyPoints: [
        "UKBIC: £130M facility, end-to-end battery manufacturing process development",
        "Faraday Institution: solid-state electrolytes, degradation modeling, second-life systems",
        "Physics-level capabilities transferable through researcher exchange",
        "No technology export license required for research-level transfer",
        "Process knowledge more transferable than product knowledge",
      ],
      tags: ["UKBIC", "Faraday Institution", "battery manufacturing", "solid-state", "electrochemistry", "Coventry"],
    },
    fa: {
      title: "کاتاپولت باتری بریتانیا — دارایی انتقال الکتروشیمیایی",
      narrative: "مؤسسه فارادی و مرکز صنعتی‌سازی باتری بریتانیا (UKBIC) در کاونتری نمایانگر مستقیم‌ترین خوشه توانمندی قابل انتقال بریتانیا برای توسعه خودروهای خودران هستند.",
      strategic: "UKBIC مستقیم‌ترین توانمندی بریتانیا برای توسعه خودروهای خودران فیلیپین است زیرا در سطح فرآیند تولید، نه سطح محصول، عمل می‌کند.",
      keyPoints: [
        "UKBIC: تسهیلات ۱۳۰ میلیون پوندی، توسعه فرآیند تولید باتری انتها به انتها",
        "مؤسسه فارادی: الکترولیت‌های حالت جامد، مدل‌سازی تخریب، سیستم‌های عمر دوم",
        "توانمندی‌های سطح فیزیک از طریق تبادل محقق قابل انتقال",
        "مجوز صادرات فناوری برای انتقال سطح تحقیق لازم نیست",
        "دانش فرآیند قابل انتقال‌تر از دانش محصول است",
      ],
      tags: ["UKBIC", "مؤسسه فارادی", "تولید باتری", "حالت جامد", "الکتروشیمی", "کاونتری"],
    },
  },
  {
    id: 14,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(14),
    en: {
      title: "Britain AI Safety Institute — The Governance Transfer Asset",
      narrative: "The UK AI Safety Institute (AISI), established in 2023 at Bletchley Park, represents a governance capability that is as important as any technical capability in the CTMP. The Philippines is developing its AI regulatory framework under the proposed Philippine AI Roadmap — a framework that has no established precedent to follow. AISI's evaluation methodologies, red-teaming protocols, and safety benchmarking frameworks are governance-level capabilities that can be transferred through policy exchange programs, secondment of Philippine regulators to AISI, and joint publication of safety standards. This is the governance absorption layer for AI-enabled autonomous systems.",
      strategic: "Governance transfer is the most undervalued form of capability transfer. A country that can evaluate AI systems safely is more sovereign than a country that can only deploy them.",
      keyPoints: [
        "UK AISI established 2023 at Bletchley Park",
        "Philippines AI Roadmap under development — no established precedent",
        "AISI evaluation methodologies transferable through policy exchange",
        "Philippine regulator secondment to AISI as transfer mechanism",
        "Governance transfer: evaluation capability = sovereignty",
      ],
      tags: ["UK AISI", "AI Safety Institute", "Bletchley Park", "AI governance", "Philippine AI Roadmap", "secondment"],
    },
    fa: {
      title: "مؤسسه ایمنی هوش مصنوعی بریتانیا — دارایی انتقال حاکمیتی",
      narrative: "مؤسسه ایمنی هوش مصنوعی بریتانیا (AISI)، تأسیس‌شده در ۲۰۲۳ در بلچلی پارک، یک توانمندی حاکمیتی را نشان می‌دهد که به اندازه هر توانمندی فنی در CTMP مهم است.",
      strategic: "انتقال حاکمیتی کم‌ارزش‌ترین شکل انتقال توانمندی است. کشوری که می‌تواند سیستم‌های هوش مصنوعی را به طور ایمن ارزیابی کند از کشوری که فقط می‌تواند آن‌ها را مستقر کند حاکمیتی‌تر است.",
      keyPoints: [
        "AISI بریتانیا در ۲۰۲۳ در بلچلی پارک تأسیس شد",
        "نقشه راه هوش مصنوعی فیلیپین در حال توسعه — بدون سابقه مستقر",
        "روش‌های ارزیابی AISI از طریق تبادل سیاست قابل انتقال",
        "مأموریت ناظران فیلیپین به AISI به عنوان مکانیزم انتقال",
        "انتقال حاکمیتی: توانمندی ارزیابی = حاکمیت",
      ],
      tags: ["AISI بریتانیا", "مؤسسه ایمنی هوش مصنوعی", "بلچلی پارک", "حاکمیت هوش مصنوعی", "نقشه راه هوش مصنوعی فیلیپین"],
    },
  },
  {
    id: 15,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(15),
    en: {
      title: "Britain Finance Instruments — The Capital Transfer Architecture",
      narrative: "Capability transfer without capital transfer is aspiration. Britain's development finance architecture for Southeast Asia includes: UK Export Finance (UKEF) with a £50 billion capacity and specific provisions for clean technology and infrastructure; British International Investment (BII) with a £9 billion portfolio and a mandate for productive investment in Asia; the Innovate UK Global program with co-funding mechanisms for UK-Philippines joint R&D; and the GREAT Britain Campaign's trade mission infrastructure for SME-level technology transfer. The CTMP maps each capability cluster to a specific financing instrument, ensuring that the transfer is not blocked by capital constraints.",
      strategic: "The capital architecture is as important as the capability architecture. A capability that cannot be financed cannot be transferred. UKEF + BII + Innovate UK = a complete capital stack for the CTMP.",
      keyPoints: [
        "UKEF: £50B capacity, clean technology and infrastructure provisions",
        "British International Investment: £9B portfolio, Asia productive investment mandate",
        "Innovate UK Global: co-funding for UK-Philippines joint R&D",
        "GREAT Britain Campaign: trade mission infrastructure for SME transfer",
        "Each CTMP capability cluster mapped to specific financing instrument",
      ],
      tags: ["UKEF", "British International Investment", "Innovate UK", "development finance", "capital stack"],
    },
    fa: {
      title: "ابزارهای مالی بریتانیا — معماری انتقال سرمایه",
      narrative: "انتقال توانمندی بدون انتقال سرمایه آرزو است. معماری مالی توسعه بریتانیا برای جنوب شرق آسیا شامل: UKEF با ظرفیت ۵۰ میلیارد پوند، BII با پرتفوی ۹ میلیارد پوند، و Innovate UK Global است.",
      strategic: "معماری سرمایه به اندازه معماری توانمندی مهم است. توانمندی‌ای که نمی‌توان آن را تأمین مالی کرد قابل انتقال نیست.",
      keyPoints: [
        "UKEF: ظرفیت ۵۰ میلیارد پوند، مقررات فناوری پاک و زیرساخت",
        "سرمایه‌گذاری بین‌المللی بریتانیا: پرتفوی ۹ میلیارد پوند، مأموریت سرمایه‌گذاری مولد آسیا",
        "Innovate UK Global: هم‌تأمین‌مالی برای تحقیق و توسعه مشترک بریتانیا-فیلیپین",
        "کمپین GREAT Britain: زیرساخت مأموریت تجاری برای انتقال SME",
        "هر خوشه توانمندی CTMP به ابزار تأمین مالی خاص نقشه‌برداری شده",
      ],
      tags: ["UKEF", "سرمایه‌گذاری بین‌المللی بریتانیا", "Innovate UK", "مالی توسعه", "پشته سرمایه"],
    },
  },
  {
    id: 16,
    act: "BritainMap",
    actLabel: ACT_LABELS_H.BritainMap,
    imageUrl: imgH(16),
    en: {
      title: "Britain Transfer Matrix — Capability to Landing Zone Mapping",
      narrative: "The Britain Transfer Matrix maps each of the five Britain capability clusters to the specific Philippine territorial landing zone, absorption mechanism, financing instrument, and timeline for transfer. Aerospace heritage → Clark/Subic (aerospace-adjacent manufacturing zone) via ATI-DOST researcher exchange, financed by UKEF, 36-month implementation. Semiconductor cluster → CALABARZON (electronics manufacturing zone) via ARM licensing expansion, financed by BII, 24-month implementation. Battery Catapult → Metro Manila (R&D zone) via UKBIC-DOST joint laboratory, financed by Innovate UK, 48-month implementation. AI Safety Institute → Manila (regulatory zone) via AISI-DICT secondment, financed by GREAT Campaign, 18-month implementation.",
      strategic: "The Transfer Matrix is the operational document of the CTMP. It converts strategic intent into specific actions with specific timelines and specific financing sources.",
      keyPoints: [
        "Aerospace → Clark/Subic: ATI-DOST exchange, UKEF, 36 months",
        "Semiconductor → CALABARZON: ARM licensing expansion, BII, 24 months",
        "Battery → Metro Manila: UKBIC-DOST joint lab, Innovate UK, 48 months",
        "AI Safety → Manila: AISI-DICT secondment, GREAT Campaign, 18 months",
        "Transfer Matrix = operational document converting strategy to action",
      ],
      tags: ["Transfer Matrix", "Clark Subic", "CALABARZON", "DOST", "DICT", "operational timeline"],
    },
    fa: {
      title: "ماتریس انتقال بریتانیا — نقشه‌برداری توانمندی به منطقه فرود",
      narrative: "ماتریس انتقال بریتانیا هر یک از پنج خوشه توانمندی بریتانیا را به منطقه فرود سرزمینی خاص فیلیپین، مکانیزم جذب، ابزار تأمین مالی، و جدول زمانی انتقال نقشه‌برداری می‌کند.",
      strategic: "ماتریس انتقال سند عملیاتی CTMP است. قصد استراتژیک را به اقدامات خاص با جداول زمانی خاص و منابع تأمین مالی خاص تبدیل می‌کند.",
      keyPoints: [
        "هوافضا → کلارک/سوبیک: تبادل ATI-DOST، UKEF، ۳۶ ماه",
        "نیمه‌هادی → CALABARZON: گسترش مجوز ARM، BII، ۲۴ ماه",
        "باتری → مترو مانیلا: آزمایشگاه مشترک UKBIC-DOST، Innovate UK، ۴۸ ماه",
        "ایمنی هوش مصنوعی → مانیلا: مأموریت AISI-DICT، کمپین GREAT، ۱۸ ماه",
        "ماتریس انتقال = سند عملیاتی تبدیل استراتژی به اقدام",
      ],
      tags: ["ماتریس انتقال", "کلارک سوبیک", "CALABARZON", "DOST", "DICT", "جدول زمانی عملیاتی"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACT IV — FRANCE CAPABILITY MAP (H-17 to H-22)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 17,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(17),
    en: {
      title: "France Nuclear Thermal — The Energy Systems Transfer Asset",
      narrative: "France's nuclear thermal capability is the most concentrated energy systems physics depth in Europe. EDF's reactor design expertise, CEA's (Commissariat à l'énergie atomique) materials science and thermal hydraulics research, and Framatome's pressure vessel and heat exchanger manufacturing represent a capability cluster that has direct application to hydrogen fuel cell thermal management — not because hydrogen fuel cells are nuclear, but because the thermal physics of managing high-temperature, high-pressure fluid systems is identical. The CEA's hydrogen research program (CEA-Liten) is specifically focused on the intersection of nuclear thermal physics and hydrogen energy systems.",
      strategic: "France's nuclear thermal physics depth is the most underutilized capability transfer asset in the CTMP. The thermal physics of a pressurized water reactor and a hydrogen fuel cell stack are governed by the same equations.",
      keyPoints: [
        "EDF: reactor design expertise → thermal system architecture",
        "CEA: materials science and thermal hydraulics → fuel cell materials",
        "Framatome: pressure vessel and heat exchanger → fuel cell stack components",
        "CEA-Liten: nuclear thermal physics × hydrogen energy systems",
        "Same thermal physics equations: PWR and hydrogen fuel cell stack",
      ],
      tags: ["France nuclear", "CEA", "EDF", "Framatome", "thermal hydraulics", "CEA-Liten", "hydrogen"],
    },
    fa: {
      title: "حرارت هسته‌ای فرانسه — دارایی انتقال سیستم‌های انرژی",
      narrative: "توانمندی حرارت هسته‌ای فرانسه متمرکزترین عمق فیزیک سیستم‌های انرژی در اروپا است. تخصص طراحی راکتور EDF، تحقیقات علم مواد و هیدرولیک حرارتی CEA، و تولید مخزن فشار Framatome یک خوشه توانمندی را نشان می‌دهند.",
      strategic: "عمق فیزیک حرارت هسته‌ای فرانسه کم‌استفاده‌ترین دارایی انتقال توانمندی در CTMP است. معادلات فیزیک حرارتی یکسان هستند.",
      keyPoints: [
        "EDF: تخصص طراحی راکتور → معماری سیستم حرارتی",
        "CEA: علم مواد و هیدرولیک حرارتی → مواد پیل سوختی",
        "Framatome: مخزن فشار و مبدل حرارتی → اجزای پشته پیل سوختی",
        "CEA-Liten: فیزیک حرارت هسته‌ای × سیستم‌های انرژی هیدروژن",
        "معادلات فیزیک حرارتی یکسان: PWR و پشته پیل سوختی هیدروژن",
      ],
      tags: ["هسته‌ای فرانسه", "CEA", "EDF", "Framatome", "هیدرولیک حرارتی", "CEA-Liten", "هیدروژن"],
    },
  },
  {
    id: 18,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(18),
    en: {
      title: "France Alstom Rail — The Mobility Systems Transfer Asset",
      narrative: "Alstom's rail systems capability is the most directly applicable French mobility technology for Philippine infrastructure development. The Philippines is investing in rail infrastructure through the Metro Manila Subway Project (MMSP) and the North-South Commuter Railway (NSCR) — both of which are procurement opportunities for Alstom's signaling, rolling stock, and traction systems. But the CTMP is not interested in procurement — it is interested in the transfer of rail systems engineering knowledge to Philippine engineers. Alstom's École Polytechnique partnership and its apprenticeship programs in traction systems, power electronics, and signaling are the transfer mechanisms.",
      strategic: "The Philippines rail infrastructure build-out is a 20-year program. The question is not whether to buy French rail systems — it is whether to buy them in a way that transfers the engineering knowledge to build the next generation locally.",
      keyPoints: [
        "MMSP and NSCR: active procurement opportunities for Alstom",
        "CTMP focus: engineering knowledge transfer, not procurement",
        "Alstom-École Polytechnique partnership as transfer mechanism",
        "Traction systems, power electronics, signaling as transfer domains",
        "20-year rail build-out = 20-year knowledge transfer window",
      ],
      tags: ["Alstom", "MMSP", "NSCR", "rail systems", "traction", "power electronics", "signaling"],
    },
    fa: {
      title: "راه‌آهن Alstom فرانسه — دارایی انتقال سیستم‌های تحرک",
      narrative: "توانمندی سیستم‌های ریلی Alstom مستقیم‌ترین فناوری تحرک فرانسوی قابل اعمال برای توسعه زیرساخت فیلیپین است. فیلیپین در حال سرمایه‌گذاری در زیرساخت ریلی از طریق پروژه مترو مانیلا (MMSP) و راه‌آهن مسافری شمال-جنوب (NSCR) است.",
      strategic: "برنامه ساخت زیرساخت ریلی فیلیپین یک برنامه ۲۰ ساله است. سؤال این نیست که آیا سیستم‌های ریلی فرانسوی بخریم — بلکه این است که آیا آن‌ها را به گونه‌ای بخریم که دانش مهندسی را منتقل کند.",
      keyPoints: [
        "MMSP و NSCR: فرصت‌های تدارک فعال برای Alstom",
        "تمرکز CTMP: انتقال دانش مهندسی، نه تدارک",
        "شراکت Alstom-École Polytechnique به عنوان مکانیزم انتقال",
        "سیستم‌های کشش، الکترونیک قدرت، علامت‌دهی به عنوان حوزه‌های انتقال",
        "ساخت ریلی ۲۰ ساله = پنجره انتقال دانش ۲۰ ساله",
      ],
      tags: ["Alstom", "MMSP", "NSCR", "سیستم‌های ریلی", "کشش", "الکترونیک قدرت", "علامت‌دهی"],
    },
  },
  {
    id: 19,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(19),
    en: {
      title: "France Thales Perception — The Sensor Systems Transfer Asset",
      narrative: "Thales Group's perception and sensor systems capability spans radar, sonar, electro-optical systems, and electronic warfare — a breadth that reflects France's defense-industrial base. For the CTMP, the relevant transfer is from defense-grade sensor physics to civilian autonomous vehicle perception: Thales's radar signal processing algorithms, its electro-optical sensor fusion architectures, and its real-time embedded computing platforms are all directly applicable to autonomous vehicle perception stacks. The transfer pathway is through Thales's civilian mobility division (Thales Ground Transportation Systems) and its academic partnerships with INRIA and Sorbonne Université.",
      strategic: "Defense-grade sensor physics is the highest-quality perception capability available. The transfer pathway from defense to civilian autonomous systems is well-documented in France's dual-use technology policy.",
      keyPoints: [
        "Thales: radar, sonar, electro-optical, electronic warfare",
        "Transfer domain: defense sensor physics → civilian AV perception",
        "Radar signal processing → AV radar perception algorithms",
        "Electro-optical sensor fusion → AV camera-lidar fusion",
        "Transfer pathway: Thales GTS + INRIA + Sorbonne partnerships",
      ],
      tags: ["Thales", "radar", "sensor fusion", "electro-optical", "INRIA", "autonomous vehicle perception"],
    },
    fa: {
      title: "ادراک Thales فرانسه — دارایی انتقال سیستم‌های حسگر",
      narrative: "توانمندی سیستم‌های ادراک و حسگر گروه Thales شامل رادار، سونار، سیستم‌های الکترو-اپتیکی، و جنگ الکترونیکی است. برای CTMP، انتقال مرتبط از فیزیک حسگر درجه دفاعی به ادراک خودروهای خودران غیرنظامی است.",
      strategic: "فیزیک حسگر درجه دفاعی بالاترین کیفیت توانمندی ادراک موجود است. مسیر انتقال از دفاعی به سیستم‌های خودران غیرنظامی در سیاست فناوری دوگانه فرانسه مستند شده است.",
      keyPoints: [
        "Thales: رادار، سونار، الکترو-اپتیکی، جنگ الکترونیکی",
        "حوزه انتقال: فیزیک حسگر دفاعی → ادراک AV غیرنظامی",
        "پردازش سیگنال رادار → الگوریتم‌های ادراک رادار AV",
        "ترکیب حسگر الکترو-اپتیکی → ترکیب دوربین-لیدار AV",
        "مسیر انتقال: Thales GTS + INRIA + شراکت‌های سوربن",
      ],
      tags: ["Thales", "رادار", "ترکیب حسگر", "الکترو-اپتیکی", "INRIA", "ادراک خودروی خودران"],
    },
  },
  {
    id: 20,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(20),
    en: {
      title: "France Bpifrance Instruments — The French Capital Transfer Architecture",
      narrative: "Bpifrance (Banque Publique d'Investissement) is France's public investment bank with a €100 billion balance sheet and a specific mandate for international technology transfer through its Bpifrance International division. For the CTMP, the relevant instruments are: the French Tech Visa program (talent mobility for Philippine engineers to French tech companies); the Bpifrance Export guarantee scheme (risk mitigation for French SMEs entering Philippine markets); the French Development Agency (AFD) with €12 billion in annual commitments including Southeast Asia infrastructure; and the FASEP (Fonds d'Aide au Secteur Privé) grant scheme for feasibility studies in developing markets.",
      strategic: "Bpifrance + AFD + FASEP = a complete French capital stack for the CTMP that mirrors the British UKEF + BII + Innovate UK stack. Both stacks are necessary; neither is sufficient alone.",
      keyPoints: [
        "Bpifrance: €100B balance sheet, international technology transfer mandate",
        "French Tech Visa: talent mobility for Philippine engineers",
        "AFD: €12B annual commitments, Southeast Asia infrastructure",
        "FASEP: grant scheme for feasibility studies in developing markets",
        "French capital stack mirrors British stack — both necessary",
      ],
      tags: ["Bpifrance", "AFD", "FASEP", "French Tech Visa", "development finance", "capital stack"],
    },
    fa: {
      title: "ابزارهای Bpifrance فرانسه — معماری انتقال سرمایه فرانسوی",
      narrative: "Bpifrance بانک سرمایه‌گذاری عمومی فرانسه با ترازنامه ۱۰۰ میلیارد یورو و مأموریت خاص برای انتقال فناوری بین‌المللی است. برای CTMP، ابزارهای مرتبط عبارتند از: برنامه ویزای French Tech، طرح ضمانت صادرات Bpifrance، AFD با ۱۲ میلیارد یورو تعهدات سالانه، و FASEP.",
      strategic: "Bpifrance + AFD + FASEP = یک پشته سرمایه کامل فرانسوی برای CTMP که پشته بریتانیایی UKEF + BII + Innovate UK را منعکس می‌کند.",
      keyPoints: [
        "Bpifrance: ترازنامه ۱۰۰ میلیارد یورو، مأموریت انتقال فناوری بین‌المللی",
        "ویزای French Tech: تحرک استعداد برای مهندسان فیلیپینی",
        "AFD: ۱۲ میلیارد یورو تعهدات سالانه، زیرساخت جنوب شرق آسیا",
        "FASEP: طرح کمک‌هزینه برای مطالعات امکان‌سنجی در بازارهای در حال توسعه",
        "پشته سرمایه فرانسوی پشته بریتانیایی را منعکس می‌کند — هر دو ضروری هستند",
      ],
      tags: ["Bpifrance", "AFD", "FASEP", "ویزای French Tech", "مالی توسعه", "پشته سرمایه"],
    },
  },
  {
    id: 21,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(21),
    en: {
      title: "France Grandes Écoles — The Educational Transfer Asset",
      narrative: "France's Grandes Écoles system — École Polytechnique, CentraleSupélec, ENSTA Paris, and ISAE-SUPAERO — represents an educational capability that is as important as any industrial capability in the CTMP. These institutions produce engineers trained in the physics-first methodology that the CTMP requires: mathematical rigor, physical intuition, and systems-level thinking. The transfer mechanism is dual: (1) Philippine engineers admitted to Grandes Écoles programs through the French government's Eiffel Excellence Scholarship; (2) Grandes Écoles faculty deployed to Philippine universities through the French Institute of the Philippines (IFP) and Campus France programs. Both mechanisms are already operational — the CTMP scales them.",
      strategic: "Educational transfer is the longest-duration but highest-leverage form of capability transfer. A Philippine engineer trained at École Polytechnique returns with physics-first methodology that cannot be acquired through any other mechanism.",
      keyPoints: [
        "École Polytechnique, CentraleSupélec, ENSTA Paris, ISAE-SUPAERO",
        "Physics-first methodology: mathematical rigor + physical intuition + systems thinking",
        "Eiffel Excellence Scholarship: Philippine engineers to Grandes Écoles",
        "IFP and Campus France: Grandes Écoles faculty to Philippine universities",
        "Both mechanisms already operational — CTMP scales them",
      ],
      tags: ["Grandes Écoles", "École Polytechnique", "Eiffel Scholarship", "Campus France", "IFP", "physics-first"],
    },
    fa: {
      title: "Grandes Écoles فرانسه — دارایی انتقال آموزشی",
      narrative: "سیستم Grandes Écoles فرانسه — École Polytechnique، CentraleSupélec، ENSTA Paris، و ISAE-SUPAERO — یک توانمندی آموزشی را نشان می‌دهد که به اندازه هر توانمندی صنعتی در CTMP مهم است.",
      strategic: "انتقال آموزشی طولانی‌ترین اما بالاترین اهرم شکل انتقال توانمندی است. یک مهندس فیلیپینی آموزش‌دیده در École Polytechnique با روش‌شناسی فیزیک‌محور بازمی‌گردد.",
      keyPoints: [
        "École Polytechnique، CentraleSupélec، ENSTA Paris، ISAE-SUPAERO",
        "روش‌شناسی فیزیک‌محور: دقت ریاضی + شهود فیزیکی + تفکر سیستمی",
        "بورسیه تعالی Eiffel: مهندسان فیلیپینی به Grandes Écoles",
        "IFP و Campus France: اعضای هیئت علمی Grandes Écoles به دانشگاه‌های فیلیپین",
        "هر دو مکانیزم از قبل عملیاتی هستند — CTMP آن‌ها را مقیاس می‌دهد",
      ],
      tags: ["Grandes Écoles", "École Polytechnique", "بورسیه Eiffel", "Campus France", "IFP", "فیزیک‌محور"],
    },
  },
  {
    id: 22,
    act: "FranceMap",
    actLabel: ACT_LABELS_H.FranceMap,
    imageUrl: imgH(22),
    en: {
      title: "France Transfer Matrix — Capability to Landing Zone Mapping",
      narrative: "The France Transfer Matrix maps each of the five France capability clusters to the specific Philippine territorial landing zone, absorption mechanism, financing instrument, and timeline. Nuclear thermal → Northern Mindanao (energy systems zone) via CEA-DOE researcher exchange, financed by AFD, 60-month implementation. Alstom rail → Metro Manila (infrastructure zone) via MMSP/NSCR procurement with knowledge transfer clauses, financed by Bpifrance Export, 24-month implementation. Thales perception → Clark/Subic (defense-adjacent zone) via Thales GTS-DICT partnership, financed by FASEP, 36-month implementation. Grandes Écoles → Manila (educational zone) via Eiffel Scholarship scaling, financed by Campus France, 12-month implementation.",
      strategic: "The France Transfer Matrix completes the bilateral capability architecture. Together with the Britain Transfer Matrix, it provides a complete capability coverage map for the Philippines absorption profile.",
      keyPoints: [
        "Nuclear thermal → Mindanao: CEA-DOE exchange, AFD, 60 months",
        "Alstom rail → Metro Manila: MMSP/NSCR with knowledge transfer clauses, Bpifrance, 24 months",
        "Thales perception → Clark/Subic: Thales GTS-DICT, FASEP, 36 months",
        "Grandes Écoles → Manila: Eiffel Scholarship scaling, Campus France, 12 months",
        "France + Britain matrices = complete bilateral capability coverage",
      ],
      tags: ["France Transfer Matrix", "CEA-DOE", "Mindanao", "MMSP", "Thales GTS", "Eiffel Scholarship"],
    },
    fa: {
      title: "ماتریس انتقال فرانسه — نقشه‌برداری توانمندی به منطقه فرود",
      narrative: "ماتریس انتقال فرانسه هر یک از پنج خوشه توانمندی فرانسه را به منطقه فرود سرزمینی خاص فیلیپین، مکانیزم جذب، ابزار تأمین مالی، و جدول زمانی نقشه‌برداری می‌کند.",
      strategic: "ماتریس انتقال فرانسه معماری توانمندی دوجانبه را کامل می‌کند. به همراه ماتریس انتقال بریتانیا، یک نقشه پوشش توانمندی کامل برای پروفایل جذب فیلیپین فراهم می‌کند.",
      keyPoints: [
        "حرارت هسته‌ای → مینداناو: تبادل CEA-DOE، AFD، ۶۰ ماه",
        "راه‌آهن Alstom → مترو مانیلا: MMSP/NSCR با بندهای انتقال دانش، Bpifrance، ۲۴ ماه",
        "ادراک Thales → کلارک/سوبیک: Thales GTS-DICT، FASEP، ۳۶ ماه",
        "Grandes Écoles → مانیلا: مقیاس‌دهی بورسیه Eiffel، Campus France، ۱۲ ماه",
        "ماتریس‌های فرانسه + بریتانیا = پوشش توانمندی دوجانبه کامل",
      ],
      tags: ["ماتریس انتقال فرانسه", "CEA-DOE", "مینداناو", "MMSP", "Thales GTS", "بورسیه Eiffel"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACT V — SYNTHESIS & CONVERGENCE (H-23 to H-26)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 23,
    act: "Synthesis",
    actLabel: ACT_LABELS_H.Synthesis,
    imageUrl: imgH(23),
    en: {
      title: "Convergence Map — Where Britain and France Capabilities Overlap",
      narrative: "The Convergence Map identifies the three zones where British and French capability clusters overlap and can be jointly deployed in the Philippines: (1) Thermal systems — Rolls-Royce gas turbine thermodynamics and CEA nuclear thermal hydraulics both apply to hydrogen fuel cell thermal management; (2) Perception and AI — Thales sensor fusion and UK AISI governance frameworks are complementary, not competing; (3) Educational infrastructure — Grandes Écoles physics-first methodology and UK engineering accreditation standards are compatible and can be jointly applied to Philippine engineering curriculum reform. Joint deployment in overlap zones reduces transfer cost and increases absorption speed.",
      strategic: "The convergence zones are where the CTMP achieves its highest leverage. A joint Britain-France capability transfer in the overlap zones is more than the sum of two bilateral transfers.",
      keyPoints: [
        "Thermal overlap: Rolls-Royce thermodynamics + CEA thermal hydraulics → H2 fuel cell",
        "AI/perception overlap: Thales sensor fusion + UK AISI governance → AV safety framework",
        "Education overlap: Grandes Écoles + UK accreditation → Philippine curriculum reform",
        "Joint deployment reduces transfer cost and increases absorption speed",
        "Convergence zones = highest CTMP leverage points",
      ],
      tags: ["convergence", "joint deployment", "thermal systems", "AI governance", "curriculum reform"],
    },
    fa: {
      title: "نقشه همگرایی — جایی که توانمندی‌های بریتانیا و فرانسه همپوشانی دارند",
      narrative: "نقشه همگرایی سه منطقه‌ای را شناسایی می‌کند که خوشه‌های توانمندی بریتانیا و فرانسه همپوشانی دارند و می‌توانند به طور مشترک در فیلیپین مستقر شوند.",
      strategic: "مناطق همگرایی جایی هستند که CTMP بالاترین اهرم خود را به دست می‌آورد. انتقال توانمندی مشترک بریتانیا-فرانسه در مناطق همپوشانی بیش از مجموع دو انتقال دوجانبه است.",
      keyPoints: [
        "همپوشانی حرارتی: ترمودینامیک رولز-رویس + هیدرولیک حرارتی CEA → پیل سوختی H2",
        "همپوشانی هوش مصنوعی/ادراک: ترکیب حسگر Thales + حاکمیت AISI بریتانیا → چارچوب ایمنی AV",
        "همپوشانی آموزشی: Grandes Écoles + اعتبارسنجی بریتانیا → اصلاح برنامه درسی فیلیپین",
        "استقرار مشترک هزینه انتقال را کاهش می‌دهد و سرعت جذب را افزایش می‌دهد",
        "مناطق همگرایی = بالاترین نقاط اهرمی CTMP",
      ],
      tags: ["همگرایی", "استقرار مشترک", "سیستم‌های حرارتی", "حاکمیت هوش مصنوعی", "اصلاح برنامه درسی"],
    },
  },
  {
    id: 24,
    act: "Synthesis",
    actLabel: ACT_LABELS_H.Synthesis,
    imageUrl: imgH(24),
    en: {
      title: "Capability Gap Analysis — What the Philippines Still Needs",
      narrative: "The Capability Gap Analysis maps the difference between the Philippines current absorption capacity and the full capability set required for sovereign autonomous vehicle development. After applying all Britain and France transfers, three residual gaps remain: (1) Advanced materials synthesis — neither Britain nor France has a transferable capability in carbon fiber precursor production or solid-state electrolyte synthesis at the scale required; (2) Precision manufacturing — the Philippines lacks the machine tool base for micron-level precision manufacturing required for fuel cell bipolar plates and semiconductor wafer processing; (3) Regulatory enforcement — the Philippines regulatory framework is enacted but enforcement capacity is underdeveloped relative to the complexity of autonomous system certification.",
      strategic: "The gap analysis is not a failure report — it is a sequencing guide. The three residual gaps define the second phase of the CTMP, after the initial Britain-France transfers have built the absorption base.",
      keyPoints: [
        "Gap 1: Advanced materials synthesis — carbon fiber precursor, solid-state electrolyte",
        "Gap 2: Precision manufacturing — micron-level machine tool base",
        "Gap 3: Regulatory enforcement capacity for autonomous system certification",
        "Gaps define Phase 2 of CTMP, not failures of Phase 1",
        "Gap analysis is a sequencing guide, not a failure report",
      ],
      tags: ["capability gap", "advanced materials", "precision manufacturing", "regulatory enforcement", "Phase 2"],
    },
    fa: {
      title: "تحلیل شکاف توانمندی — آنچه فیلیپین هنوز نیاز دارد",
      narrative: "تحلیل شکاف توانمندی تفاوت بین ظرفیت جذب فعلی فیلیپین و مجموعه توانمندی کامل مورد نیاز برای توسعه خودروهای خودران حاکمیتی را نقشه‌برداری می‌کند. پس از اعمال تمام انتقال‌های بریتانیا و فرانسه، سه شکاف باقیمانده وجود دارد.",
      strategic: "تحلیل شکاف یک گزارش شکست نیست — یک راهنمای توالی است. سه شکاف باقیمانده مرحله دوم CTMP را تعریف می‌کنند.",
      keyPoints: [
        "شکاف ۱: سنتز مواد پیشرفته — پیش‌ماده الیاف کربن، الکترولیت حالت جامد",
        "شکاف ۲: تولید دقیق — پایه ابزار ماشین سطح میکرون",
        "شکاف ۳: ظرفیت اجرای نظارتی برای صدور گواهی سیستم خودران",
        "شکاف‌ها مرحله ۲ CTMP را تعریف می‌کنند، نه شکست‌های مرحله ۱",
        "تحلیل شکاف یک راهنمای توالی است، نه یک گزارش شکست",
      ],
      tags: ["شکاف توانمندی", "مواد پیشرفته", "تولید دقیق", "اجرای نظارتی", "مرحله ۲"],
    },
  },
  {
    id: 25,
    act: "Synthesis",
    actLabel: ACT_LABELS_H.Synthesis,
    imageUrl: imgH(25),
    en: {
      title: "Joint Venture Architecture — The Institutional Transfer Vehicle",
      narrative: "The CTMP requires an institutional vehicle for capability transfer that is neither a procurement contract nor a development aid grant. The proposed architecture is a Joint Technology Development Corporation (JTDC) — a Philippines-registered entity with equity participation from British and French industrial partners, the Philippine government (through DOST and DTI), and a multilateral development bank (ADB or World Bank IFC). The JTDC structure provides: IP co-ownership (not licensing), technology escrow (ensuring Philippines retains access if a partner withdraws), local employment requirements (minimum 60% Philippine workforce), and a sunset clause (full Philippine ownership after 15 years).",
      strategic: "The JTDC is the institutional mechanism that converts the CTMP from a document into a legal entity with enforceable obligations. Without it, the CTMP is a wish list.",
      keyPoints: [
        "JTDC: Philippines-registered, equity from UK/France industry + DOST/DTI + ADB/IFC",
        "IP co-ownership, not licensing — Philippines retains rights",
        "Technology escrow: Philippines retains access if partner withdraws",
        "60% Philippine workforce requirement",
        "Sunset clause: full Philippine ownership after 15 years",
      ],
      tags: ["JTDC", "joint venture", "IP co-ownership", "technology escrow", "DOST", "DTI", "ADB"],
    },
    fa: {
      title: "معماری سرمایه‌گذاری مشترک — وسیله انتقال نهادی",
      narrative: "CTMP به یک وسیله نهادی برای انتقال توانمندی نیاز دارد که نه یک قرارداد تدارک و نه یک کمک‌هزینه توسعه باشد. معماری پیشنهادی یک شرکت توسعه فناوری مشترک (JTDC) است.",
      strategic: "JTDC مکانیزم نهادی است که CTMP را از یک سند به یک نهاد قانونی با تعهدات قابل اجرا تبدیل می‌کند. بدون آن، CTMP یک فهرست آرزو است.",
      keyPoints: [
        "JTDC: ثبت‌شده در فیلیپین، سهام از صنعت بریتانیا/فرانسه + DOST/DTI + ADB/IFC",
        "مالکیت مشترک IP، نه مجوز — فیلیپین حقوق را حفظ می‌کند",
        "امانت فناوری: فیلیپین دسترسی را حفظ می‌کند اگر شریک خارج شود",
        "الزام ۶۰٪ نیروی کار فیلیپینی",
        "بند غروب: مالکیت کامل فیلیپین پس از ۱۵ سال",
      ],
      tags: ["JTDC", "سرمایه‌گذاری مشترک", "مالکیت مشترک IP", "امانت فناوری", "DOST", "DTI", "ADB"],
    },
  },
  {
    id: 26,
    act: "Synthesis",
    actLabel: ACT_LABELS_H.Synthesis,
    imageUrl: imgH(26),
    en: {
      title: "Phased Timeline — The CTMP Implementation Sequence",
      narrative: "The CTMP implementation sequence is structured in three phases: Phase 1 (Months 1–24): Institutional establishment — JTDC registration, financing instrument activation, Eiffel Scholarship scaling, ARM licensing expansion, AISI-DICT secondment initiation. Phase 2 (Months 25–60): Capability transfer — UKBIC-DOST joint laboratory commissioning, CEA-DOE researcher exchange, Thales GTS-DICT partnership, Alstom MMSP/NSCR knowledge transfer clauses activation, ATI-DOST aerospace exchange. Phase 3 (Months 61–180): Absorption and independence — Philippine engineers leading JTDC projects, local IP generation, curriculum reform implementation, regulatory enforcement capacity development, sunset clause progression.",
      strategic: "The three-phase structure ensures that institutional foundations are in place before capability transfer begins, and that absorption capacity is developed before the sunset clause activates. Sequence matters as much as content.",
      keyPoints: [
        "Phase 1 (0–24 months): Institutional establishment and financing activation",
        "Phase 2 (25–60 months): Active capability transfer across all clusters",
        "Phase 3 (61–180 months): Absorption, independence, and sunset progression",
        "Sequence: institution first, transfer second, independence third",
        "Sunset clause activates at month 180 (15 years)",
      ],
      tags: ["phased timeline", "Phase 1", "Phase 2", "Phase 3", "implementation sequence", "sunset clause"],
    },
    fa: {
      title: "جدول زمانی مرحله‌ای — توالی اجرای CTMP",
      narrative: "توالی اجرای CTMP در سه مرحله ساختار یافته است: مرحله ۱ (ماه‌های ۱-۲۴): تأسیس نهادی. مرحله ۲ (ماه‌های ۲۵-۶۰): انتقال توانمندی. مرحله ۳ (ماه‌های ۶۱-۱۸۰): جذب و استقلال.",
      strategic: "ساختار سه‌مرحله‌ای تضمین می‌کند که پایه‌های نهادی قبل از شروع انتقال توانمندی در جای خود باشند.",
      keyPoints: [
        "مرحله ۱ (۰-۲۴ ماه): تأسیس نهادی و فعال‌سازی تأمین مالی",
        "مرحله ۲ (۲۵-۶۰ ماه): انتقال توانمندی فعال در تمام خوشه‌ها",
        "مرحله ۳ (۶۱-۱۸۰ ماه): جذب، استقلال، و پیشرفت بند غروب",
        "توالی: نهاد اول، انتقال دوم، استقلال سوم",
        "بند غروب در ماه ۱۸۰ (۱۵ سال) فعال می‌شود",
      ],
      tags: ["جدول زمانی مرحله‌ای", "مرحله ۱", "مرحله ۲", "مرحله ۳", "توالی اجرا", "بند غروب"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // ACT VI — SOVEREIGN PATHWAY (H-27 to H-30)
  // ═══════════════════════════════════════════════════════════════════════════════
  {
    id: 27,
    act: "Pathway",
    actLabel: ACT_LABELS_H.Pathway,
    imageUrl: imgH(27),
    en: {
      title: "Sovereign IP Framework — Owning What You Build",
      narrative: "The sovereign IP framework is the legal architecture that ensures the Philippines retains ownership of the intellectual property generated through CTMP capability transfers. The framework has four components: (1) Co-invention agreements — any IP generated by Philippine engineers using transferred capabilities is co-owned by the JTDC (Philippines majority); (2) Technology escrow — all transferred technology is deposited in escrow with WIPO, accessible to the Philippines if a partner withdraws; (3) Non-assertion clauses — British and French partners agree not to assert existing IP against Philippines-developed improvements; (4) Open licensing provisions — Philippines-generated IP in safety-critical domains is licensed openly to prevent monopolization.",
      strategic: "Sovereign IP is the difference between a country that uses technology and a country that owns technology. The CTMP is designed to produce the latter.",
      keyPoints: [
        "Co-invention: JTDC (Philippines majority) co-owns all generated IP",
        "Technology escrow: WIPO deposit, Philippines access guaranteed",
        "Non-assertion: UK/France cannot assert existing IP against PH improvements",
        "Open licensing: safety-critical PH IP licensed openly",
        "Sovereign IP = technology ownership, not just technology use",
      ],
      tags: ["sovereign IP", "co-invention", "technology escrow", "WIPO", "non-assertion", "open licensing"],
    },
    fa: {
      title: "چارچوب IP حاکمیتی — مالکیت آنچه می‌سازید",
      narrative: "چارچوب IP حاکمیتی معماری قانونی است که تضمین می‌کند فیلیپین مالکیت مالکیت معنوی تولیدشده از طریق انتقال توانمندی CTMP را حفظ کند. چارچوب چهار جزء دارد.",
      strategic: "IP حاکمیتی تفاوت بین کشوری است که از فناوری استفاده می‌کند و کشوری که فناوری را مالک است. CTMP برای تولید دومی طراحی شده است.",
      keyPoints: [
        "اختراع مشترک: JTDC (اکثریت فیلیپین) تمام IP تولیدشده را مشترکاً مالک است",
        "امانت فناوری: سپرده WIPO، دسترسی فیلیپین تضمین شده",
        "عدم ادعا: بریتانیا/فرانسه نمی‌توانند IP موجود را در برابر بهبودهای فیلیپین ادعا کنند",
        "مجوز باز: IP فیلیپین در حوزه‌های ایمنی‌حیاتی به صورت باز مجوز داده می‌شود",
        "IP حاکمیتی = مالکیت فناوری، نه فقط استفاده از فناوری",
      ],
      tags: ["IP حاکمیتی", "اختراع مشترک", "امانت فناوری", "WIPO", "عدم ادعا", "مجوز باز"],
    },
  },
  {
    id: 28,
    act: "Pathway",
    actLabel: ACT_LABELS_H.Pathway,
    imageUrl: imgH(28),
    en: {
      title: "Landing Zone Map — The Complete Geographic Architecture",
      narrative: "The complete Landing Zone Map integrates all Britain and France capability transfers with their specific Philippine territorial landing zones, creating a geographic architecture for the CTMP. Clark/Subic Freeport: aerospace heritage (Britain) + Thales perception (France) + defense-adjacent manufacturing. Metro Manila/CALABARZON: semiconductor cluster (Britain) + Alstom rail (France) + electronics manufacturing expansion. Northern Mindanao: battery catapult (Britain) + nuclear thermal (France) + energy systems development. Manila regulatory zone: AI Safety Institute (Britain) + Grandes Écoles (France) + regulatory capacity building. The geographic architecture ensures that no single zone is overloaded and that each zone's existing infrastructure is matched to the incoming capability.",
      strategic: "The Landing Zone Map is the spatial expression of the CTMP. It converts the abstract bilateral capability architecture into a concrete geographic deployment plan.",
      keyPoints: [
        "Clark/Subic: aerospace (UK) + Thales perception (FR) + defense manufacturing",
        "CALABARZON: semiconductor (UK) + Alstom rail (FR) + electronics expansion",
        "Mindanao: battery (UK) + nuclear thermal (FR) + energy systems",
        "Manila: AI Safety (UK) + Grandes Écoles (FR) + regulatory capacity",
        "No zone overloaded; each matched to existing infrastructure",
      ],
      tags: ["landing zone map", "Clark Subic", "CALABARZON", "Mindanao", "Manila", "geographic architecture"],
    },
    fa: {
      title: "نقشه منطقه فرود — معماری جغرافیایی کامل",
      narrative: "نقشه منطقه فرود کامل تمام انتقال‌های توانمندی بریتانیا و فرانسه را با مناطق فرود سرزمینی خاص فیلیپین ادغام می‌کند و یک معماری جغرافیایی برای CTMP ایجاد می‌کند.",
      strategic: "نقشه منطقه فرود بیان فضایی CTMP است. معماری توانمندی دوجانبه انتزاعی را به یک برنامه استقرار جغرافیایی ملموس تبدیل می‌کند.",
      keyPoints: [
        "کلارک/سوبیک: هوافضا (بریتانیا) + ادراک Thales (فرانسه) + تولید مجاور دفاعی",
        "CALABARZON: نیمه‌هادی (بریتانیا) + راه‌آهن Alstom (فرانسه) + گسترش الکترونیک",
        "مینداناو: باتری (بریتانیا) + حرارت هسته‌ای (فرانسه) + سیستم‌های انرژی",
        "مانیلا: ایمنی هوش مصنوعی (بریتانیا) + Grandes Écoles (فرانسه) + ظرفیت نظارتی",
        "هیچ منطقه‌ای بیش از حد بارگذاری نشده؛ هر کدام با زیرساخت موجود مطابقت دارند",
      ],
      tags: ["نقشه منطقه فرود", "کلارک سوبیک", "CALABARZON", "مینداناو", "مانیلا", "معماری جغرافیایی"],
    },
  },
  {
    id: 29,
    act: "Pathway",
    actLabel: ACT_LABELS_H.Pathway,
    imageUrl: imgH(29),
    en: {
      title: "Risk Register — What Can Go Wrong and Why",
      narrative: "The CTMP Risk Register identifies seven categories of risk with specific mitigation protocols: (1) Political risk — change of government in Philippines, Britain, or France disrupts institutional continuity; mitigation: JTDC structure insulates from single-government dependency. (2) Tacit knowledge loss — key individuals leave before knowledge is documented; mitigation: mandatory knowledge documentation protocols and dual-expert redundancy. (3) IP leakage — transferred technology is reverse-engineered and exported; mitigation: technology escrow and audit rights. (4) Absorption failure — Philippines STEM pipeline insufficient for specific capability; mitigation: gap analysis triggers Phase 2 partner search. (5) Currency and financing risk — development finance instruments withdrawn; mitigation: multi-instrument capital stack. (6) Regulatory capture — Philippines regulatory framework captured by incumbent interests; mitigation: AISI secondment provides independent technical capacity. (7) Geopolitical disruption — UK/France relationship with China affects Philippines positioning; mitigation: CTMP explicitly non-aligned.",
      strategic: "The Risk Register is not pessimism — it is operational realism. A CTMP that cannot survive the identified risks is not a CTMP — it is a conference paper.",
      keyPoints: [
        "Political risk: JTDC structure insulates from single-government dependency",
        "Tacit knowledge loss: mandatory documentation + dual-expert redundancy",
        "IP leakage: technology escrow + audit rights",
        "Absorption failure: gap analysis triggers Phase 2 partner search",
        "Geopolitical: CTMP explicitly non-aligned",
      ],
      tags: ["risk register", "political risk", "tacit knowledge", "IP leakage", "absorption failure", "geopolitical"],
    },
    fa: {
      title: "ثبت ریسک — آنچه می‌تواند اشتباه پیش برود و چرا",
      narrative: "ثبت ریسک CTMP هفت دسته ریسک را با پروتکل‌های کاهش خاص شناسایی می‌کند: ریسک سیاسی، از دست دادن دانش ضمنی، نشت IP، شکست جذب، ریسک ارزی و تأمین مالی، تصرف نظارتی، و اختلال ژئوپلیتیکی.",
      strategic: "ثبت ریسک بدبینی نیست — واقع‌گرایی عملیاتی است. CTMP که نمی‌تواند از ریسک‌های شناسایی‌شده جان سالم به در ببرد یک CTMP نیست — یک مقاله کنفرانس است.",
      keyPoints: [
        "ریسک سیاسی: ساختار JTDC از وابستگی به دولت واحد محافظت می‌کند",
        "از دست دادن دانش ضمنی: مستندسازی اجباری + افزونگی دو متخصص",
        "نشت IP: امانت فناوری + حقوق حسابرسی",
        "شکست جذب: تحلیل شکاف جستجوی شریک مرحله ۲ را فعال می‌کند",
        "ژئوپلیتیکی: CTMP صریحاً غیرمتعهد",
      ],
      tags: ["ثبت ریسک", "ریسک سیاسی", "دانش ضمنی", "نشت IP", "شکست جذب", "ژئوپلیتیکی"],
    },
  },
  {
    id: 30,
    act: "Pathway",
    actLabel: ACT_LABELS_H.Pathway,
    imageUrl: imgH(30),
    en: {
      title: "The Sovereign Call — From Capability Transfer to Capability Ownership",
      narrative: "The CTMP closes with a sovereign call: the Philippines is not asking Britain and France for technology. It is offering them a mirror. The mirror shows them which of their capabilities are genuinely transferable, which are genuinely valuable, and which are genuinely non-extractive. The countries that accept the mirror offer will build the most durable partnerships in Southeast Asia. The countries that refuse it will find that the Philippines, and countries like it, will eventually source their capabilities elsewhere — from partners who understand that the era of technology as a colonial instrument is over. The CTMP is not a negotiating document. It is a statement of what sovereign co-production looks like when it is done correctly.",
      strategic: "The sovereign call is the closing argument of the CTMP. It reframes the entire document from a request to an offer — and offers are accepted or declined, not negotiated away.",
      keyPoints: [
        "Philippines offers Britain and France a mirror, not a request",
        "Mirror shows which capabilities are genuinely transferable and non-extractive",
        "Countries that accept the mirror build durable Southeast Asia partnerships",
        "Countries that refuse will find Philippines sources capabilities elsewhere",
        "CTMP = statement of what sovereign co-production looks like when done correctly",
      ],
      tags: ["sovereign call", "mirror offer", "co-production", "Southeast Asia", "non-extractive", "closing argument"],
    },
    fa: {
      title: "فراخوان حاکمیتی — از انتقال توانمندی به مالکیت توانمندی",
      narrative: "CTMP با یک فراخوان حاکمیتی پایان می‌یابد: فیلیپین از بریتانیا و فرانسه فناوری نمی‌خواهد. آینه‌ای به آن‌ها ارائه می‌دهد. آینه نشان می‌دهد کدام توانمندی‌هایشان واقعاً قابل انتقال، ارزشمند، و غیراستخراجی هستند.",
      strategic: "فراخوان حاکمیتی استدلال پایانی CTMP است. کل سند را از یک درخواست به یک پیشنهاد تبدیل می‌کند — و پیشنهادها پذیرفته یا رد می‌شوند، نه مذاکره می‌شوند.",
      keyPoints: [
        "فیلیپین به بریتانیا و فرانسه آینه ارائه می‌دهد، نه درخواست",
        "آینه نشان می‌دهد کدام توانمندی‌ها واقعاً قابل انتقال و غیراستخراجی هستند",
        "کشورهایی که آینه را می‌پذیرند شراکت‌های پایدار جنوب شرق آسیا می‌سازند",
        "کشورهایی که رد می‌کنند می‌یابند که فیلیپین توانمندی‌ها را از جای دیگر تأمین می‌کند",
        "CTMP = بیانیه‌ای از آنچه تولید مشترک حاکمیتی وقتی درست انجام می‌شود به نظر می‌رسد",
      ],
      tags: ["فراخوان حاکمیتی", "پیشنهاد آینه", "تولید مشترک", "جنوب شرق آسیا", "غیراستخراجی", "استدلال پایانی"],
    },
  },
];
