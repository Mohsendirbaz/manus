// ─── Deck F · Founder Biography — 6 Slides ───────────────────────────────────
// Each slide corresponds to one of the six founder-background pillars:
//   F-1  Petroleum Engineering & Simon subsurface CO₂ sequestration
//   F-2  Chemical Engineering & NH₃ production pathways
//   F-3  Hydrogen pure-stream vertical integration
//   F-4  Chip manufacturing & chemical engineering principles
//   F-5  Zero-to-1 of computing & G10 thesis
//   F-6  Neural networks (2016) → LLM practitioner (2023)

export type ActF =
  | "Subsurface"
  | "Synthesis"
  | "Hydrogen"
  | "Semiconductor"
  | "Computing"
  | "AI";

export interface SlideContentF {
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
}

export interface SlideF {
  id: number;
  act: ActF;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: SlideContentF;
  fa: SlideContentF;
}

export const ACT_LABELS_F: Record<ActF, { en: string; fa: string }> = {
  Subsurface:   { en: "Subsurface & CO₂",   fa: "زیرسطحی و CO₂" },
  Synthesis:    { en: "NH₃ Synthesis",       fa: "سنتز آمونیاک" },
  Hydrogen:     { en: "H₂ Integration",      fa: "یکپارچه‌سازی H₂" },
  Semiconductor:{ en: "Semiconductor Chem",  fa: "شیمی نیمه‌هادی" },
  Computing:    { en: "Zero-to-1 Computing", fa: "صفر تا یک محاسبات" },
  AI:           { en: "Neural Nets → LLM",   fa: "شبکه عصبی تا LLM" },
};

// CDN base — reuse the existing project CDN bucket
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";

// Placeholder images reused from existing CDN assets (distinct per slide)
const IMG_URLS: Record<number, string> = {
  1: `${CDN}/slide_1_084eba59.png`,
  2: `${CDN}/slide_3_3e4d1b64.png`,
  3: `${CDN}/slide_5_32f0a621.png`,
  4: `${CDN}/slide_7_453c97e4.png`,
  5: `${CDN}/slide_9_1f9315f1.png`,
  6: `${CDN}/slide_11_8e064cfd.png`,
};

function imgF(n: number): string {
  return IMG_URLS[n] ?? `${CDN}/slide_1_084eba59.png`;
}

export const slidesBio: SlideF[] = [
  // ── F-1 ─────────────────────────────────────────────────────────────────────
  {
    id: 1,
    act: "Subsurface",
    actLabel: ACT_LABELS_F.Subsurface,
    imageUrl: imgF(1),
    en: {
      title: "Petroleum Engineering Roots & Simon Subsurface CO₂ Sequestration",
      narrative:
        "Mohsen Dirbaz began his academic career at Sharif University of Technology (Iran's MIT equivalent) in Petroleum Engineering — one of fewer than 1% of applicants admitted through the national entrance examination. His thesis, 'Damage Assessment in Horizontal Fractured Wells with Low-Permeability Reservoirs,' developed a combined analytical-numerical framework for spatially variable damage functions in two flow regimes (linear fracture-to-matrix and pseudo-radial). The parametric analysis demonstrated that moderate damage reduces productivity by 40–60% in ultra-low-permeability reservoirs, establishing the environmental and economic case for CO₂ sequestration in deep saline formations — the Simon-class subsurface reservoirs that anchor the Ghost H₂ platform's carbon-neutral lifecycle.",
      strategic:
        "Simon subsurface assets provide dual value: (1) permanent geological storage for captured CO₂ from H₂ production via SMR or ATR, and (2) pressure-management infrastructure that can be repurposed for compressed-gas energy storage. The PVT laboratory and core-analysis experience from Sharif gives the founder direct fluids-mechanics insight into reservoir seal integrity — a prerequisite for credible carbon-accounting in the Ghost vehicle's lifecycle assessment.",
      keyPoints: [
        "Sharif University of Technology — top 1% national entrance; full academic scholarship",
        "Thesis: damage functions in horizontal fractured wells, ultra-low-permeability reservoirs",
        "40–60% productivity reduction from moderate damage — quantified via parametric analysis",
        "Simon subsurface = geological CO₂ sink + compressed-gas storage for H₂ platform",
        "PVT & core-analysis lab experience → reservoir seal integrity for carbon accounting",
      ],
      tags: ["Petroleum Engineering", "CO₂ Sequestration", "Simon Reservoir", "Sharif", "Subsurface"],
    },
    fa: {
      title: "ریشه‌های مهندسی نفت و ذخایر زیرسطحی سایمون برای ترسیب CO₂",
      narrative:
        "محسن دیرباز مسیر تحصیلی خود را در دانشگاه صنعتی شریف — برترین دانشگاه فنی ایران — در رشته مهندسی نفت آغاز کرد. پذیرش از طریق کنکور سراسری با نرخ کمتر از یک درصد صورت گرفت و بورسیه تحصیلی کامل دریافت شد. پایان‌نامه کارشناسی با عنوان «ارزیابی آسیب در چاه‌های افقی دارای شکاف با مخازن کم‌نفوذپذیری» چارچوبی ترکیبی تحلیلی-عددی برای توابع آسیب متغیر مکانی در دو رژیم جریان (خطی شکاف-به-ماتریس و شبه‌شعاعی) توسعه داد. تحلیل پارامتری نشان داد که آسیب متوسط بهره‌وری را ۴۰ تا ۶۰ درصد در مخازن با نفوذپذیری بسیار پایین کاهش می‌دهد.",
      strategic:
        "دارایی‌های زیرسطحی سایمون ارزش دوگانه‌ای دارند: (۱) ذخیره‌سازی زمین‌شناختی دائمی CO₂ حاصل از تولید H₂ از طریق SMR یا ATR، و (۲) زیرساخت مدیریت فشار که می‌تواند برای ذخیره‌سازی انرژی گاز فشرده مورد استفاده مجدد قرار گیرد. تجربه آزمایشگاه PVT و تحلیل مغزه از شریف، بینش مستقیم مکانیک سیالات در مورد یکپارچگی آب‌بند مخزن را به بنیان‌گذار می‌دهد.",
      keyPoints: [
        "دانشگاه صنعتی شریف — پذیرش در یک درصد برتر کنکور؛ بورسیه کامل تحصیلی",
        "پایان‌نامه: توابع آسیب در چاه‌های افقی شکاف‌دار، مخازن کم‌نفوذپذیری",
        "کاهش ۴۰ تا ۶۰ درصدی بهره‌وری از آسیب متوسط — کمی‌سازی از طریق تحلیل پارامتری",
        "زیرسطحی سایمون = چاهک زمین‌شناختی CO₂ + ذخیره‌سازی گاز فشرده برای پلتفرم H₂",
        "تجربه آزمایشگاه PVT و تحلیل مغزه → یکپارچگی آب‌بند مخزن برای حسابداری کربن",
      ],
      tags: ["مهندسی نفت", "ترسیب CO₂", "مخزن سایمون", "شریف", "زیرسطحی"],
    },
  },

  // ── F-2 ─────────────────────────────────────────────────────────────────────
  {
    id: 2,
    act: "Synthesis",
    actLabel: ACT_LABELS_F.Synthesis,
    imageUrl: imgF(2),
    en: {
      title: "Chemical Engineering PhD & NH₃ Production Pathways",
      narrative:
        "After completing his undergraduate studies at Sharif, Mohsen Dirbaz pursued a PhD in Chemical Engineering at Illinois Institute of Technology (IIT), graduating in 2020 with a GPA of 3.58. His doctoral research spanned two exploratory projects: (1) hydraulic fracturing environmental impacts and produced-water treatment via physicochemical and biological pathways, and (2) a two-year investigation of gasification and pollutant-control technologies for Integrated Gasification Combined Cycle (IGCC) systems — covering coal/biomass gasification in fixed, fluidized, and entrained-flow reactors, intermediate cleanup stages (sulfur removal, COS hydrolysis, trace-metal reduction, carbon capture), and energy/power generation islands. The NH₃ production pathway analysis — documented in the technical report co-authored with Yangcheng Shing — covers Haber-Bosch, electrochemical synthesis, green ammonia via biomass gasification, and lithium-mediated routes, directly informing the Ghost H₂ platform's fuel-carrier strategy.",
      strategic:
        "NH₃ is the preferred hydrogen carrier for long-haul transport: energy density 3× compressed H₂, no cryogenic requirement, existing global infrastructure. The founder's first-principles understanding of NH₃ synthesis kinetics — Haber-Bosch loop design, catalyst deactivation, electrochemical N₂ reduction — enables Ghost to evaluate green-ammonia cracking on-board as a H₂ release mechanism, closing the energy loop from renewable electricity to vehicle propulsion.",
      keyPoints: [
        "PhD Chemical Engineering, IIT (Illinois Institute of Technology), 2020, GPA 3.58",
        "IGCC research: gasification, intermediate cleanup, COS hydrolysis, carbon capture",
        "NH₃ pathways: Haber-Bosch, electrochemical synthesis, green ammonia, Li-mediated routes",
        "NH₃ as H₂ carrier: 3× energy density vs. compressed H₂, no cryogenic storage needed",
        "On-board NH₃ cracking → H₂ release: closes renewable-electricity-to-propulsion loop",
      ],
      tags: ["Chemical Engineering", "NH₃", "Ammonia", "IGCC", "IIT", "PhD", "Haber-Bosch"],
    },
    fa: {
      title: "دکترای مهندسی شیمی و مسیرهای تولید آمونیاک (NH₃)",
      narrative:
        "محسن دیرباز پس از تحصیلات کارشناسی در شریف، دکترای مهندسی شیمی را در مؤسسه فناوری ایلینوی (IIT) دنبال کرد و در سال ۲۰۲۰ با معدل ۳.۵۸ فارغ‌التحصیل شد. تحقیقات دکترای او دو پروژه اکتشافی را پوشش داد: (۱) اثرات زیست‌محیطی شکست هیدرولیکی و تصفیه آب تولیدی، و (۲) بررسی دو ساله فناوری‌های گازی‌سازی و کنترل آلاینده برای سیستم‌های IGCC. تحلیل مسیرهای تولید NH₃ — مستند در گزارش فنی مشترک با یانگ‌چنگ شینگ — شامل هابر-بوش، سنتز الکتروشیمیایی، آمونیاک سبز از طریق گازی‌سازی زیست‌توده، و مسیرهای لیتیوم‌واسطه است.",
      strategic:
        "NH₃ حامل ترجیحی هیدروژن برای حمل‌ونقل مسافت طولانی است: چگالی انرژی ۳ برابر H₂ فشرده، بدون نیاز به ذخیره‌سازی کرایوژنیک، زیرساخت جهانی موجود. درک اصول اولیه بنیان‌گذار از سینتیک سنتز NH₃ به Ghost امکان می‌دهد کراکینگ آمونیاک سبز در داخل خودرو را به عنوان مکانیزم آزادسازی H₂ ارزیابی کند.",
      keyPoints: [
        "دکترا مهندسی شیمی، IIT (مؤسسه فناوری ایلینوی)، ۲۰۲۰، معدل ۳.۵۸",
        "تحقیق IGCC: گازی‌سازی، پاکسازی میانی، هیدرولیز COS، جذب کربن",
        "مسیرهای NH₃: هابر-بوش، سنتز الکتروشیمیایی، آمونیاک سبز، مسیرهای Li-واسطه",
        "NH₃ به عنوان حامل H₂: چگالی انرژی ۳ برابر H₂ فشرده، بدون ذخیره‌سازی کرایوژنیک",
        "کراکینگ NH₃ در داخل خودرو → آزادسازی H₂: حلقه برق تجدیدپذیر تا پیشرانش را می‌بندد",
      ],
      tags: ["مهندسی شیمی", "آمونیاک", "NH₃", "IGCC", "IIT", "دکترا", "هابر-بوش"],
    },
  },

  // ── F-3 ─────────────────────────────────────────────────────────────────────
  {
    id: 3,
    act: "Hydrogen",
    actLabel: ACT_LABELS_F.Hydrogen,
    imageUrl: imgF(3),
    en: {
      title: "Hydrogen Pure Streams & Vertical Integration of Expertise",
      narrative:
        "The technical report 'Technical and Economic Analysis of Electronic Gases in Semiconductor Industries' (co-authored with Yangcheng Shing, University of Missouri–Columbia, September 2024) provides a rigorous techno-economic analysis of high-purity gas production — including NF₃, H₂, and fluorocarbon streams — for the semiconductor industry. The report covers fluorite and fluorapatite sourcing (Illinois, Colorado, Idaho, North Carolina, Utah), NF₃ synthesis via Haber-Bosch-derived routes, H₂ production pathways (electrolysis, fossil-fuel reforming, biomass), and a full Techno-Economic Assessment (TEA) with cash-flow analysis and capital cost estimation. This work directly maps to the Ghost H₂ platform's need for ultra-pure hydrogen fuel streams — purity levels equivalent to those required for semiconductor CVD chambers.",
      strategic:
        "Vertical integration of expertise means the Ghost H₂ platform is designed by someone who understands the entire hydrogen value chain: from subsurface CO₂ sequestration (Petroleum Engineering) → NH₃ synthesis as H₂ carrier (Chemical Engineering PhD) → ultra-pure H₂ stream production and TEA (semiconductor gas analysis) → on-board fuel-cell integration (EPU architecture). No single consultant or team can replicate this breadth of first-principles knowledge in one person.",
      keyPoints: [
        "TEA of electronic gases: NF₃, H₂, fluorocarbons for semiconductor CVD — full cash-flow model",
        "H₂ purity standard: semiconductor-grade (99.9999%) as design target for Ghost fuel cell",
        "Fluorite/fluorapatite sourcing: Illinois, Colorado, Idaho, NC, Utah — domestic supply chain",
        "Vertical integration: subsurface CO₂ → NH₃ carrier → pure H₂ stream → EPU fuel cell",
        "TEA framework: CAPEX, OPEX, NPV, IRR — same methodology applied to Ghost H₂ economics",
      ],
      tags: ["Hydrogen", "Pure Streams", "TEA", "Semiconductor", "Vertical Integration", "NF₃"],
    },
    fa: {
      title: "جریان‌های خالص هیدروژن و یکپارچه‌سازی عمودی تخصص",
      narrative:
        "گزارش فنی «تحلیل فنی و اقتصادی گازهای الکترونیکی در صنایع نیمه‌هادی» (مشترک با یانگ‌چنگ شینگ، دانشگاه میزوری-کلمبیا، سپتامبر ۲۰۲۴) تحلیل دقیق فنی-اقتصادی تولید گاز با خلوص بالا — شامل NF₃، H₂، و جریان‌های فلوروکربن — برای صنعت نیمه‌هادی ارائه می‌دهد. این گزارش منابع فلوریت و فلوراپاتیت، سنتز NF₃، مسیرهای تولید H₂ (الکترولیز، اصلاح سوخت فسیلی، زیست‌توده)، و ارزیابی اقتصادی-فنی کامل (TEA) با تحلیل جریان نقدی را پوشش می‌دهد.",
      strategic:
        "یکپارچه‌سازی عمودی تخصص به این معناست که پلتفرم Ghost H₂ توسط کسی طراحی شده که کل زنجیره ارزش هیدروژن را می‌فهمد: از ترسیب CO₂ زیرسطحی (مهندسی نفت) → سنتز NH₃ به عنوان حامل H₂ (دکترا مهندسی شیمی) → تولید جریان خالص H₂ و TEA (تحلیل گاز نیمه‌هادی) → یکپارچه‌سازی پیل سوختی در خودرو (معماری EPU).",
      keyPoints: [
        "TEA گازهای الکترونیکی: NF₃، H₂، فلوروکربن‌ها برای CVD نیمه‌هادی — مدل جریان نقدی کامل",
        "استاندارد خلوص H₂: درجه نیمه‌هادی (۹۹.۹۹۹۹٪) به عنوان هدف طراحی برای پیل سوختی Ghost",
        "تأمین فلوریت/فلوراپاتیت: ایلینوی، کلرادو، ایداهو، NC، یوتا — زنجیره تأمین داخلی",
        "یکپارچه‌سازی عمودی: CO₂ زیرسطحی → حامل NH₃ → جریان خالص H₂ → پیل سوختی EPU",
        "چارچوب TEA: CAPEX، OPEX، NPV، IRR — همان روش‌شناسی برای اقتصاد Ghost H₂",
      ],
      tags: ["هیدروژن", "جریان‌های خالص", "TEA", "نیمه‌هادی", "یکپارچه‌سازی عمودی", "NF₃"],
    },
  },

  // ── F-4 ─────────────────────────────────────────────────────────────────────
  {
    id: 4,
    act: "Semiconductor",
    actLabel: ACT_LABELS_F.Semiconductor,
    imageUrl: imgF(4),
    en: {
      title: "Chip Manufacturing & Chemical Engineering Principles in Semiconductor Production",
      narrative:
        "The technical report 'Chemical Engineering Principles in Autonomous Vehicle Microchip Production' (Mohsen Dirbaz, University of Missouri–Columbia) provides a rigorous mapping of chemical engineering unit operations to semiconductor fabrication: CVD (Chemical Vapor Deposition) for thin-film deposition, plasma etching for pattern transfer, CMP (Chemical Mechanical Planarization) for surface finishing, and dopant diffusion/ion implantation for transistor formation. The report covers process gases (SiH₄, NF₃, SF₆, HCl, HBr, AsH₃, PH₃), reaction kinetics, mass-transfer limitations, and the thermodynamic constraints governing sub-10nm node fabrication. This expertise directly informs the EPU chip's manufacturing specification — ensuring that the safety compute core is designed with fabrication-process awareness, not just circuit-level abstraction.",
      strategic:
        "Understanding chip manufacturing at the chemical-process level gives Ghost a unique advantage in EPU specification: the founder can evaluate foundry process nodes (TSMC N3, Samsung SF3) not just by transistor density but by process-gas availability, yield-limiting defect mechanisms, and supply-chain resilience of specialty gases. This is the chemical engineer's lens on semiconductor strategy — invisible to pure EE or CS backgrounds.",
      keyPoints: [
        "CVD, plasma etch, CMP, dopant diffusion — mapped to ChE unit operations",
        "Process gases: SiH₄, NF₃, SF₆, HCl, HBr, AsH₃, PH₃ — kinetics and mass-transfer",
        "Sub-10nm node constraints: thermodynamic limits, defect mechanisms, yield models",
        "EPU chip spec informed by fabrication-process awareness, not just circuit abstraction",
        "Foundry evaluation: process-gas supply chain + yield-limiting defects, not just transistor density",
      ],
      tags: ["Chip Manufacturing", "Semiconductor", "CVD", "EPU", "Chemical Engineering", "Process Gases"],
    },
    fa: {
      title: "تولید ریزتراشه و اصول مهندسی شیمی در تولید نیمه‌هادی",
      narrative:
        "گزارش فنی «اصول مهندسی شیمی در تولید ریزتراشه‌های خودروی خودران» (محسن دیرباز، دانشگاه میزوری-کلمبیا) نقشه‌برداری دقیقی از عملیات واحد مهندسی شیمی به ساخت نیمه‌هادی ارائه می‌دهد: CVD (رسوب‌گذاری بخار شیمیایی) برای رسوب‌گذاری فیلم نازک، حکاکی پلاسما برای انتقال الگو، CMP (تسطیح مکانیکی-شیمیایی) برای پرداخت سطح، و انتشار ناخالصی/کاشت یون برای تشکیل ترانزیستور. این گزارش گازهای فرآیندی، سینتیک واکنش، محدودیت‌های انتقال جرم، و محدودیت‌های ترمودینامیکی حاکم بر ساخت گره زیر ۱۰ نانومتر را پوشش می‌دهد.",
      strategic:
        "درک ساخت ریزتراشه در سطح فرآیند شیمیایی به Ghost مزیت منحصربه‌فردی در مشخصات EPU می‌دهد: بنیان‌گذار می‌تواند گره‌های فرآیند کارخانه (TSMC N3، Samsung SF3) را نه فقط بر اساس چگالی ترانزیستور، بلکه بر اساس در دسترس بودن گاز فرآیندی، مکانیزم‌های نقص محدودکننده بازده، و انعطاف‌پذیری زنجیره تأمین گازهای تخصصی ارزیابی کند.",
      keyPoints: [
        "CVD، حکاکی پلاسما، CMP، انتشار ناخالصی — نقشه‌برداری به عملیات واحد مهندسی شیمی",
        "گازهای فرآیندی: SiH₄، NF₃، SF₆، HCl، HBr، AsH₃، PH₃ — سینتیک و انتقال جرم",
        "محدودیت‌های گره زیر ۱۰ نانومتر: محدودیت‌های ترمودینامیکی، مکانیزم‌های نقص، مدل‌های بازده",
        "مشخصات ریزتراشه EPU با آگاهی از فرآیند ساخت، نه فقط انتزاع مدار",
        "ارزیابی کارخانه: زنجیره تأمین گاز فرآیندی + نقص‌های محدودکننده بازده، نه فقط چگالی ترانزیستور",
      ],
      tags: ["تولید ریزتراشه", "نیمه‌هادی", "CVD", "EPU", "مهندسی شیمی", "گازهای فرآیندی"],
    },
  },

  // ── F-5 ─────────────────────────────────────────────────────────────────────
  {
    id: 5,
    act: "Computing",
    actLabel: ACT_LABELS_F.Computing,
    imageUrl: imgF(5),
    en: {
      title: "Zero-to-1 of Computing & the G10 Multi-Gate Thesis",
      narrative:
        "During his PhD at IIT, Mohsen Dirbaz developed the G10 (10-Gate) computational framework — a multi-gate architecture that maps physical conservation laws and mathematical structures onto a unified computational pipeline. The G10 framework defines ten gates: (1) Statistical (canonical correlation analysis), (2) Trigonometric (simplex embedding), (3) Geometric (metric adaptation), (4) Topological (partition + bi-simplicial encoding), (5) Electrochemical (Nernst/Faraday coupling), (6) Recurrence (Fibonacci sequence), (7) Neural Network (three-activation-function laboratory), (8) Equilibrium (convergent matrix normalization), (9) Irreversibility (Landauer boundary + SCT matrix), (10) Integration (AGM + full elliptic integral). Each gate enforces a specific physical invariant, ensuring that computational outputs remain physically consistent across domains — from chemical thermodynamics to signal processing.",
      strategic:
        "The G10 framework is the intellectual precursor to the EPU (Event Processing Unit) architecture. Where G10 maps physical laws to mathematical gates, EPU maps sensor events to physics-certified decision pathways. The zero-to-1 insight — that all computation can be grounded in physical conservation laws — is the constitutional principle behind Ghost's claim that its safety core is 'physics-certified, not statistically inferred.'",
      keyPoints: [
        "G10: 10-gate computational architecture mapping physical conservation laws to computation",
        "Gates: Statistical, Trigonometric, Geometric, Topological, Electrochemical, Recurrence, Neural, Equilibrium, Irreversibility, Integration",
        "Each gate enforces a physical invariant — outputs remain physically consistent across domains",
        "G10 is the intellectual precursor to EPU: physical laws → mathematical gates → sensor events → decisions",
        "Zero-to-1 insight: all computation grounded in conservation laws = 'physics-certified' safety core",
      ],
      tags: ["G10", "Computing", "Multi-Gate", "EPU", "Physics-Certified", "IIT", "Thesis"],
    },
    fa: {
      title: "صفر تا یک محاسبات و پایان‌نامه G10 چند-دروازه‌ای",
      narrative:
        "در طول دکترا در IIT، محسن دیرباز چارچوب محاسباتی G10 (۱۰ دروازه) را توسعه داد — یک معماری چند-دروازه‌ای که قوانین حفاظت فیزیکی و ساختارهای ریاضی را به یک خط لوله محاسباتی یکپارچه نگاشت می‌کند. چارچوب G10 ده دروازه تعریف می‌کند: (۱) آماری (تحلیل همبستگی متعارف)، (۲) مثلثاتی (جاسازی سیمپلکس)، (۳) هندسی (انطباق متریک)، (۴) توپولوژیکی (پارتیشن‌بندی + کدگذاری دو-سیمپلیسی)، (۵) الکتروشیمیایی (کوپلینگ نرنست/فارادی)، (۶) بازگشتی (دنباله فیبوناچی)، (۷) شبکه عصبی (آزمایشگاه سه تابع فعال‌سازی)، (۸) تعادل (نرمال‌سازی ماتریس همگرا)، (۹) برگشت‌ناپذیری (مرز لاندائر + ماتریس SCT)، (۱۰) انتگرال‌گیری (AGM + انتگرال بیضوی کامل).",
      strategic:
        "چارچوب G10 پیشرو فکری معماری EPU (واحد پردازش رویداد) است. جایی که G10 قوانین فیزیکی را به دروازه‌های ریاضی نگاشت می‌کند، EPU رویدادهای حسگر را به مسیرهای تصمیم‌گیری تأیید شده فیزیکی نگاشت می‌کند. بینش صفر تا یک — که همه محاسبات می‌توانند در قوانین حفاظت فیزیکی ریشه داشته باشند — اصل بنیادی پشت ادعای Ghost است که هسته ایمنی آن «تأیید شده فیزیکی، نه استنتاج آماری» است.",
      keyPoints: [
        "G10: معماری محاسباتی ۱۰ دروازه‌ای که قوانین حفاظت فیزیکی را به محاسبات نگاشت می‌کند",
        "دروازه‌ها: آماری، مثلثاتی، هندسی، توپولوژیکی، الکتروشیمیایی، بازگشتی، عصبی، تعادل، برگشت‌ناپذیری، انتگرال‌گیری",
        "هر دروازه یک ثابت فیزیکی را اعمال می‌کند — خروجی‌ها در حوزه‌ها از نظر فیزیکی سازگار می‌مانند",
        "G10 پیشرو فکری EPU است: قوانین فیزیکی → دروازه‌های ریاضی → رویدادهای حسگر → تصمیمات",
        "بینش صفر تا یک: همه محاسبات در قوانین حفاظت = هسته ایمنی «تأیید شده فیزیکی»",
      ],
      tags: ["G10", "محاسبات", "چند-دروازه", "EPU", "تأیید فیزیکی", "IIT", "پایان‌نامه"],
    },
  },

  // ── F-6 ─────────────────────────────────────────────────────────────────────
  {
    id: 6,
    act: "AI",
    actLabel: ACT_LABELS_F.AI,
    imageUrl: imgF(6),
    en: {
      title: "Neural Networks (2016) → LLM Practitioner (2023): A Decade of AI Continuity",
      narrative:
        "Gate 7 of the G10 thesis (completed 2016–2020 at IIT) is a Neural Network computational laboratory — a three-activation-function architecture (with displacement-learning, distributional averaging, and functional spaces) that treats neural networks not as black-box pattern matchers but as physics-constrained inference engines. This early, rigorous exposure to neural network theory — predating the transformer era — gave Mohsen Dirbaz a structural understanding of how learned representations relate to physical conservation laws. When large language models became publicly accessible in 2023, he was immediately positioned as a practitioner rather than a novice: the mathematical foundations (activation functions, gradient flow, representation learning) were already internalized from the G10 work in 2016.",
      strategic:
        "The 2016→2023 continuity is strategically significant for Ghost: the EPU's AI inference layer is designed by someone who understands neural networks at the mathematical-physics level, not just the API level. This means the EPU's LLM-assisted decision pathways can be formally bounded — the founder knows where neural inference is physically consistent (Gate 7 domain) and where it must be overridden by deterministic physics-certified logic (Gates 1–6, 8–10). This is the architectural moat: AI-assisted but physics-governed.",
      keyPoints: [
        "2016: Gate 7 (Neural Network) in G10 thesis — three-activation-function physics-constrained architecture",
        "Neural networks as physics-constrained inference engines, not black-box pattern matchers",
        "2023: First LLM practitioner — mathematical foundations already internalized from 2016 G10 work",
        "7-year continuity: activation functions, gradient flow, representation learning → LLM deployment",
        "EPU AI layer: LLM-assisted but physics-governed — formal bounds on neural inference pathways",
      ],
      tags: ["Neural Networks", "LLM", "AI", "G10", "Gate 7", "EPU", "2016", "2023"],
    },
    fa: {
      title: "شبکه‌های عصبی (۲۰۱۶) تا متخصص LLM (۲۰۲۳): یک دهه تداوم هوش مصنوعی",
      narrative:
        "دروازه ۷ از پایان‌نامه G10 (تکمیل شده ۲۰۱۶–۲۰۲۰ در IIT) یک آزمایشگاه محاسباتی شبکه عصبی است — معماری سه تابع فعال‌سازی (با یادگیری جابجایی، میانگین‌گیری توزیعی، و فضاهای تابعی) که شبکه‌های عصبی را نه به عنوان تطبیق‌دهنده‌های الگوی جعبه سیاه، بلکه به عنوان موتورهای استنتاج محدود شده فیزیکی در نظر می‌گیرد. این مواجهه اولیه و دقیق با نظریه شبکه عصبی — پیش از عصر ترانسفورمر — به محسن دیرباز درک ساختاری از چگونگی ارتباط بازنمایی‌های آموخته شده با قوانین حفاظت فیزیکی داد. وقتی مدل‌های زبانی بزرگ در سال ۲۰۲۳ در دسترس عموم قرار گرفتند، او فوراً به عنوان متخصص قرار گرفت نه مبتدی.",
      strategic:
        "تداوم ۲۰۱۶→۲۰۲۳ از نظر استراتژیک برای Ghost اهمیت دارد: لایه استنتاج هوش مصنوعی EPU توسط کسی طراحی شده که شبکه‌های عصبی را در سطح ریاضی-فیزیکی می‌فهمد، نه فقط در سطح API. این به این معناست که مسیرهای تصمیم‌گیری با کمک LLM در EPU می‌توانند به طور رسمی محدود شوند — بنیان‌گذار می‌داند کجا استنتاج عصبی از نظر فیزیکی سازگار است (حوزه دروازه ۷) و کجا باید توسط منطق قطعی تأیید شده فیزیکی لغو شود.",
      keyPoints: [
        "۲۰۱۶: دروازه ۷ (شبکه عصبی) در پایان‌نامه G10 — معماری سه تابع فعال‌سازی محدود شده فیزیکی",
        "شبکه‌های عصبی به عنوان موتورهای استنتاج محدود شده فیزیکی، نه تطبیق‌دهنده‌های الگوی جعبه سیاه",
        "۲۰۲۳: اولین متخصص LLM — پایه‌های ریاضی از کار G10 در ۲۰۱۶ قبلاً درونی شده بود",
        "تداوم ۷ ساله: توابع فعال‌سازی، جریان گرادیان، یادگیری بازنمایی → استقرار LLM",
        "لایه هوش مصنوعی EPU: با کمک LLM اما تحت حاکمیت فیزیک — محدودیت‌های رسمی بر مسیرهای استنتاج عصبی",
      ],
      tags: ["شبکه‌های عصبی", "LLM", "هوش مصنوعی", "G10", "دروازه ۷", "EPU", "۲۰۱۶", "۲۰۲۳"],
    },
  },
];

export default slidesBio;
