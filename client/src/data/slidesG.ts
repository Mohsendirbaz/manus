// MVD: 2.00 | Source: LUXURY_CUSTOMIZATION_GUIDE + McKINSEY_AUTO_SW_2030 | Slides: 10 | Lang: EN+FA
// ─── Deck G · Luxury Auto Customization — Independence Through Vertical Integration ──
// Interior Modules (G-1 to G-5) + Vehicle Modules (G-6 to G-10)
// Design philosophy: No steering wheel — fully autonomous steer-by-wire with hoisted controller

export type ActG =
  | "CockpitDomain"
  | "SensorCabin"
  | "AmbientArch"
  | "AcousticEng"
  | "HapticSurface"
  | "CentralCompute"
  | "PerceptionArray"
  | "PowerElectronics"
  | "SWPowertrain"
  | "DigitalTwin"
  | "InvestorPath"
  | "EngineerPath"
  | "RegulatorPath";

export interface SlideContentG {
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
}

export interface SlideG {
  id: number;
  act: ActG;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: SlideContentG;
  fa: SlideContentG;
}

export const ACT_LABELS_G: Record<ActG, { en: string; fa: string }> = {
  CockpitDomain:    { en: "Cockpit Domain",       fa: "دامنه کاکپیت" },
  SensorCabin:      { en: "Sensor-Fused Cabin",    fa: "کابین حسگر-ادغام" },
  AmbientArch:      { en: "Ambient Architecture",  fa: "معماری محیطی" },
  AcousticEng:      { en: "Acoustic Engineering",  fa: "مهندسی آکوستیک" },
  HapticSurface:    { en: "Haptic Surfaces",        fa: "سطوح لامسه‌ای" },
  CentralCompute:   { en: "Central Compute",        fa: "محاسبات مرکزی" },
  PerceptionArray:  { en: "Perception Array",       fa: "آرایه ادراکی" },
  PowerElectronics: { en: "Power Electronics",      fa: "الکترونیک قدرت" },
  SWPowertrain:     { en: "SW-Defined Powertrain",  fa: "پیشرانه نرم‌افزاری" },
  DigitalTwin:      { en: "Digital Twin",            fa: "دوقلوی دیجیتال" },
  InvestorPath:     { en: "Investor Pathway",        fa: "مسیر سرمایه‌گذار" },
  EngineerPath:     { en: "Engineer Pathway",        fa: "مسیر مهندس" },
  RegulatorPath:    { en: "Regulator Pathway",       fa: "مسیر ناظر" },
};

const CDN_G = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";

const IMG_URLS_G: Record<number, string> = {
  1:  `${CDN_G}/g_int01_cockpit_dcu_v2-ceJVj23EG6QbCvDKiCEm2h.png`,
  2:  `${CDN_G}/g_int02_sensor_cabin-KabVbLoTbcifvZE2sj3r4s.png`,
  3:  `${CDN_G}/g_int03_ambient_arch_v2-gmNm8An7p9jaJfwG9sWr8d.png`,
  4:  `${CDN_G}/g_int04_acoustic_module-AsRG22DxeYq2xMr96addXw.png`,
  5:  `${CDN_G}/g_int05_haptic_surface-cKbBBafNRT7DCbtTDTB5Xq.png`,
  6:  `${CDN_G}/g_veh06_central_computer-DQYuSVsvkVPEdJcNoBuHL3.png`,
  7:  `${CDN_G}/g_veh07_sensor_array_6cd95825.png`,
  8:  `${CDN_G}/g_veh08_power_electronics-YursXh6dAqGpVeNoiX3rPg.png`,
  9:  `${CDN_G}/g_veh09_sw_powertrain-V4AUuCBpMbA4LWvechhNYC.png`,
  10: `${CDN_G}/g_veh10_digital_twin-VpjS5rt9H6L7daTZdoYzcy.png`,
  11: `${CDN_G}/g11_investor_pathway_v3-a4fXyCngDHnkmios3pbRMR.png`,
  12: `${CDN_G}/g12_engineer_pathway_v3-DkHkg9WBdqm49VQpQrG425.png`,
  13: `${CDN_G}/g13_regulator_pathway_v3-B3r8HZ8zRmK5KbhuzZkSgs.png`,
};

function imgG(n: number): string {
  return IMG_URLS_G[n] ?? `${CDN_G}/g_int01_cockpit_dcu_v2-ceJVj23EG6QbCvDKiCEm2h.png`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// INTERIOR MODULES (G-1 to G-5)
// ═══════════════════════════════════════════════════════════════════════════════

export const slidesG: SlideG[] = [
  // ── G-1: Cockpit Domain Controller ──────────────────────────────────────────
  {
    id: 1,
    act: "CockpitDomain",
    actLabel: ACT_LABELS_G.CockpitDomain,
    imageUrl: imgG(1),
    en: {
      title: "Cockpit Domain Controller — The Autonomous Interior Brain",
      narrative:
        "The cockpit domain controller replaces 30+ discrete ECUs with a single high-performance compute module running infotainment, HMI, ambient lighting, seat memory, climate, and gesture recognition as virtualized micro-services. In a steer-by-wire autonomous architecture with no steering wheel, the cockpit DCU becomes the primary interface between occupant intent and vehicle behavior — processing inputs from the hoisted haptic controller, voice commands, gesture sensors, and biometric monitors. The carbon fiber dashboard housing is CNC-machined to ±0.05mm tolerance, integrating a pillar-to-pillar curved OLED display stack with the DCU's thermal management system.",
      strategic:
        "McKinsey projects the cockpit electronics market at $15,361 per premium L3 vehicle by 2030, with software comprising $2,888 of that total. By owning the cockpit DCU integration — hardware housing, software stack, and HMI design — the platform captures the highest-value customization layer. The 5th-generation architecture (virtual domains on a central compute unit) means every interior function is software-configurable, enabling OTA personalization that traditional luxury houses cannot match.",
      keyPoints: [
        "Single DCU replaces 30+ discrete ECUs — infotainment, HMI, climate, lighting, seat memory all virtualized",
        "Steer-by-wire architecture: no steering wheel, hoisted haptic controller as primary input device",
        "$15,361 E/E content per premium L3 vehicle by 2030 (McKinsey) — cockpit is the largest share",
        "CNC-machined carbon fiber dashboard housing at ±0.05mm — aerospace-grade integration",
        "OTA-updatable interior experience: ambient scenes, haptic profiles, voice personas deployed post-delivery",
      ],
      tags: ["cockpit-DCU", "domain-controller", "steer-by-wire", "autonomous-interior", "5th-gen-architecture"],
    },
    fa: {
      title: "کنترلر دامنه کاکپیت — مغز داخلی خودمختار",
      narrative:
        "کنترلر دامنه کاکپیت بیش از ۳۰ ECU مجزا را با یک ماژول محاسباتی واحد جایگزین می‌کند که اینفوتینمنت، HMI، نورپردازی محیطی، حافظه صندلی، تهویه و تشخیص ژست را به‌صورت میکروسرویس‌های مجازی اجرا می‌کند. در معماری خودمختار فرمان‌سیمی بدون فرمان، DCU کاکپیت رابط اصلی بین نیت سرنشین و رفتار خودرو است.",
      strategic:
        "مکینزی بازار الکترونیک کاکپیت را ۱۵,۳۶۱ دلار به‌ازای هر خودروی پرمیوم L3 تا ۲۰۳۰ پیش‌بینی می‌کند. با مالکیت یکپارچه‌سازی DCU کاکپیت، پلتفرم ارزشمندترین لایه سفارشی‌سازی را تصاحب می‌کند.",
      keyPoints: [
        "یک DCU جایگزین ۳۰+ ECU مجزا — اینفوتینمنت، HMI، تهویه، نورپردازی همه مجازی‌سازی شده",
        "معماری فرمان‌سیمی: بدون فرمان، کنترلر لامسه‌ای بالابر به‌عنوان ورودی اصلی",
        "۱۵,۳۶۱ دلار محتوای E/E به‌ازای هر خودروی پرمیوم L3 تا ۲۰۳۰ (مکینزی)",
        "بدنه داشبورد کربن‌فایبر CNC با تلرانس ±۰.۰۵ میلی‌متر — یکپارچه‌سازی هوافضایی",
        "تجربه داخلی قابل به‌روزرسانی OTA: صحنه‌های محیطی، پروفایل‌های لامسه‌ای پس از تحویل",
      ],
      tags: ["کنترلر-دامنه", "فرمان-سیمی", "داخلی-خودمختار", "معماری-نسل-پنجم"],
    },
  },

  // ── G-2: Sensor-Fused Cabin ─────────────────────────────────────────────────
  {
    id: 2,
    act: "SensorCabin",
    actLabel: ACT_LABELS_G.SensorCabin,
    imageUrl: imgG(2),
    en: {
      title: "Sensor-Fused Cabin — Occupant Intelligence Layer",
      narrative:
        "The cabin sensor fusion layer integrates time-of-flight 3D cameras, infrared occupant detection, capacitive touch surfaces embedded beneath hand-stitched leather, pressure-sensing seat matrices, and driver monitoring systems into a unified perception pipeline. In an autonomous vehicle without a steering wheel, cabin sensing replaces driver monitoring — the system must understand occupant state (awake, asleep, distressed, engaged) to manage handoff protocols, adjust climate, and personalize the ambient environment. Each sensor modality feeds the cockpit DCU at 30-60Hz, enabling real-time gesture recognition, biometric health monitoring, and child-presence detection for regulatory compliance.",
      strategic:
        "McKinsey's sensor market grows at 8% CAGR to $63B by 2030, with ADAS/AD sensors at 13% CAGR. Interior sensing is the overlooked frontier — Euro NCAP 2025+ mandates driver monitoring for 5-star ratings, and L3+ regulations require occupant state detection for handoff protocols. By embedding sensors into premium interior surfaces (leather, Alcantara, aluminum trim), the platform creates a sensing layer that is invisible to the occupant but indispensable to the vehicle's autonomous operation.",
      keyPoints: [
        "Time-of-flight 3D cameras + IR occupant detection + capacitive touch surfaces + pressure-sensing seat matrices",
        "30-60Hz sensor fusion pipeline feeding cockpit DCU — real-time gesture, biometric, and presence detection",
        "Euro NCAP 2025+ mandates driver monitoring for 5-star ratings — interior sensing is regulatory-required",
        "Sensors embedded beneath hand-stitched Nappa leather — invisible to occupant, indispensable to autonomy",
        "ADAS/AD sensor market: $13B (2020) → $43B (2030) at 13% CAGR (McKinsey Exhibit 10)",
      ],
      tags: ["sensor-fusion", "cabin-sensing", "occupant-detection", "biometric", "Euro-NCAP"],
    },
    fa: {
      title: "کابین حسگر-ادغام — لایه هوش سرنشین",
      narrative:
        "لایه ادغام حسگر کابین دوربین‌های سه‌بعدی زمان پرواز، تشخیص مادون‌قرمز سرنشین، سطوح لمسی خازنی زیر چرم دوخته‌شده، ماتریس‌های فشارسنج صندلی و سیستم‌های نظارت راننده را در خط لوله ادراکی واحد یکپارچه می‌کند.",
      strategic:
        "بازار حسگر مکینزی با CAGR ۸٪ به ۶۳ میلیارد دلار تا ۲۰۳۰ رشد می‌کند. حسگر داخلی مرز نادیده‌گرفته‌شده است — Euro NCAP 2025+ نظارت راننده را برای رتبه ۵ ستاره الزامی می‌کند.",
      keyPoints: [
        "دوربین‌های سه‌بعدی + تشخیص IR + سطوح لمسی خازنی + ماتریس فشارسنج صندلی",
        "خط لوله ادغام حسگر ۳۰-۶۰ هرتز — تشخیص ژست، بیومتریک و حضور بلادرنگ",
        "Euro NCAP 2025+ نظارت راننده را الزامی می‌کند — حسگر داخلی الزام قانونی است",
        "حسگرها زیر چرم ناپا دوخته‌شده — نامرئی برای سرنشین، ضروری برای خودمختاری",
        "بازار حسگر ADAS/AD: ۱۳ میلیارد (۲۰۲۰) → ۴۳ میلیارد (۲۰۳۰) با CAGR ۱۳٪",
      ],
      tags: ["ادغام-حسگر", "حسگر-کابین", "تشخیص-سرنشین", "بیومتریک"],
    },
  },

  // ── G-3: Programmable Ambient Architecture ──────────────────────────────────
  {
    id: 3,
    act: "AmbientArch",
    actLabel: ACT_LABELS_G.AmbientArch,
    imageUrl: imgG(3),
    en: {
      title: "Programmable Ambient Architecture — 256-Zone Spatial Experience",
      narrative:
        "The programmable ambient architecture transforms the autonomous cabin into a spatial experience engine. Without a steering wheel or traditional instrument cluster, the entire forward cabin becomes a canvas for immersive lighting, display, and material interaction. 256 individually addressable RGB LED zones trace every surface contour — door panels, dashboard, center console, footwell, and ceiling. A fiber-optic star field embedded in the Alcantara headliner creates constellation effects with 500+ points of light. Electrochromic glass panels transition from clear to opaque in 3-5 seconds, controlled by the ambient scene engine. Precision-milled brushed aluminum trim bezels frame each lighting zone, CNC-machined with chamfered edges that catch and redirect the ambient glow.",
      strategic:
        "In the software-defined vehicle paradigm (McKinsey 5th-gen architecture), ambient experience is a software product — deployable via OTA, monetizable as subscription scenes, and infinitely customizable. The $2,888 software content per premium vehicle (McKinsey 2030) includes ambient scene engines as a growing category. By owning the hardware integration (LED arrays, fiber optics, electrochromic glass) and the software layer (scene composition, sensor-reactive adaptation), the platform creates a recurring revenue stream from post-delivery experience updates.",
      keyPoints: [
        "256 individually addressable RGB LED zones across all interior surfaces — software-defined ambiance",
        "Fiber-optic star field: 500+ points in Alcantara headliner — constellation effects per scene",
        "Electrochromic glass: clear-to-opaque in 3-5 seconds — privacy and light control via DCU",
        "CNC-machined aluminum trim bezels with chamfered edges — precision framing for each light zone",
        "OTA-deployable ambient scenes: monetizable as subscription content post-delivery",
      ],
      tags: ["ambient-lighting", "256-zone", "electrochromic", "fiber-optic", "OTA-scenes"],
    },
    fa: {
      title: "معماری محیطی برنامه‌پذیر — تجربه فضایی ۲۵۶ ناحیه‌ای",
      narrative:
        "معماری محیطی برنامه‌پذیر کابین خودمختار را به موتور تجربه فضایی تبدیل می‌کند. بدون فرمان یا صفحه ابزار سنتی، کل کابین جلو بوم نورپردازی غوطه‌ور، نمایشگر و تعامل مواد می‌شود.",
      strategic:
        "در پارادایم خودروی نرم‌افزار-محور (معماری نسل پنجم مکینزی)، تجربه محیطی یک محصول نرم‌افزاری است — قابل استقرار OTA، قابل درآمدزایی به‌عنوان صحنه‌های اشتراکی.",
      keyPoints: [
        "۲۵۶ ناحیه RGB LED قابل آدرس‌دهی فردی — محیط نرم‌افزار-محور",
        "آسمان فیبر نوری: ۵۰۰+ نقطه در سقف آلکانتارا — جلوه‌های صورت فلکی",
        "شیشه الکتروکرومیک: شفاف تا مات در ۳-۵ ثانیه — کنترل حریم و نور",
        "قاب‌های آلومینیومی CNC با لبه‌های پخ‌دار — قاب‌بندی دقیق هر ناحیه نوری",
        "صحنه‌های محیطی قابل استقرار OTA: قابل درآمدزایی پس از تحویل",
      ],
      tags: ["نورپردازی-محیطی", "۲۵۶-ناحیه", "الکتروکرومیک", "فیبر-نوری"],
    },
  },

  // ── G-4: Acoustic Engineering Module ────────────────────────────────────────
  {
    id: 4,
    act: "AcousticEng",
    actLabel: ACT_LABELS_G.AcousticEng,
    imageUrl: imgG(4),
    en: {
      title: "Acoustic Engineering Module — Layered Sound Architecture",
      narrative:
        "The acoustic engineering module treats the cabin as a precision instrument. The door panel cross-section reveals five engineered layers: outer carbon fiber skin (structural), acoustic dampening foam (NVH absorption), constrained layer damper with silver foil surface (vibration isolation), air gap (resonance tuning), and inner leather trim (aesthetic surface). CNC-machined aluminum speaker grilles with geometric perforation patterns house high-end driver arrays — mid-range, tweeter, and subwoofer per door. MEMS microphone arrays embedded in the Alcantara headliner enable active noise cancellation across the 20Hz-20kHz spectrum, with zone-specific audio delivery that creates independent sound environments for each seat position.",
      strategic:
        "In an autonomous cabin where occupants may work, sleep, or converse, acoustic isolation and zone-specific audio become primary comfort differentiators. The 5-layer door construction eliminates 85-90% of road noise at source, while the ANC system handles residual frequencies. The software layer (equalizer profiles, noise cancellation algorithms, spatial audio rendering) is OTA-updatable, meaning the acoustic experience improves over the vehicle's lifetime. This is a $2,000+ per-vehicle value-add that traditional customizers cannot replicate because it requires both material science (dampening layers) and software engineering (ANC algorithms).",
      keyPoints: [
        "5-layer door construction: carbon fiber → acoustic foam → constrained layer damper → air gap → leather trim",
        "CNC-machined aluminum speaker grilles with geometric perforation — mid-range + tweeter + sub per door",
        "MEMS microphone arrays in Alcantara headliner — active noise cancellation across 20Hz-20kHz",
        "Zone-specific audio: independent sound environments per seat position — work, sleep, converse modes",
        "85-90% road noise elimination at source + ANC for residual — OTA-updatable acoustic profiles",
      ],
      tags: ["acoustic-engineering", "NVH", "active-noise-cancellation", "zone-audio", "5-layer-construction"],
    },
    fa: {
      title: "ماژول مهندسی آکوستیک — معماری صدای لایه‌ای",
      narrative:
        "ماژول مهندسی آکوستیک کابین را به‌عنوان ابزار دقیق در نظر می‌گیرد. مقطع پنل درب پنج لایه مهندسی‌شده را نشان می‌دهد: پوسته کربن‌فایبر، فوم میرایی آکوستیک، میراکننده لایه محدود، فاصله هوایی و روکش چرم.",
      strategic:
        "در کابین خودمختار که سرنشینان ممکن است کار، خواب یا گفتگو کنند، عایق‌بندی آکوستیک و صدای ناحیه‌ای تمایزدهنده‌های اصلی راحتی هستند.",
      keyPoints: [
        "ساختار ۵ لایه درب: کربن‌فایبر → فوم آکوستیک → میراکننده لایه محدود → فاصله هوایی → چرم",
        "توری‌های بلندگوی آلومینیومی CNC — میان‌بر + تویتر + ساب‌ووفر در هر درب",
        "آرایه‌های میکروفون MEMS در سقف آلکانتارا — حذف فعال نویز ۲۰Hz-۲۰kHz",
        "صدای ناحیه‌ای: محیط‌های صوتی مستقل برای هر صندلی — حالت‌های کار، خواب، گفتگو",
        "حذف ۸۵-۹۰٪ نویز جاده + ANC برای باقیمانده — پروفایل‌های آکوستیک OTA",
      ],
      tags: ["مهندسی-آکوستیک", "NVH", "حذف-فعال-نویز", "صدای-ناحیه‌ای"],
    },
  },

  // ── G-5: Haptic Surface Intelligence ────────────────────────────────────────
  {
    id: 5,
    act: "HapticSurface",
    actLabel: ACT_LABELS_G.HapticSurface,
    imageUrl: imgG(5),
    en: {
      title: "Haptic Surface Intelligence — Programmable Touch Layer",
      narrative:
        "The haptic surface intelligence system transforms every contact surface into a programmable interface. Diamond-quilted Nappa leather at 40×40mm pattern with 8 stitches per inch is CNC-sewn by Dürkopp Adler programmable machines — not hand-stitched, but mathematically precise. Beneath the leather: a matrix of thermoelectric Peltier elements for zoned heating and cooling, pneumatic massage bladders with 12 independent chambers per seat, and force-feedback actuators for haptic confirmation of touch inputs. A compact seat control module (SCM) mounted on the frame coordinates all actuators at 100Hz refresh, connected to the cockpit DCU via automotive Ethernet. Diagnostic tablets display real-time thermal maps and pressure distribution during calibration.",
      strategic:
        "The seat is the most intimate interface between vehicle and occupant — in an autonomous cabin where the occupant reclines rather than drives, the seat becomes the primary comfort platform. CNC leather cutting at 300-500mm/s with ±0.5mm accuracy, combined with NURBS-based pattern flattening and strain analysis (<5% green zone), ensures every surface fits with aerospace precision. The programmable haptic layer adds $3,000-5,000 per vehicle in customization value, with software-defined massage programs, thermal profiles, and posture correction algorithms deployable via OTA.",
      keyPoints: [
        "CNC diamond quilting: 40×40mm pattern, 8 stitches/inch, ±0.5mm cut accuracy — mathematically precise",
        "Thermoelectric Peltier matrix: zoned heating/cooling with 0.5°C precision per zone",
        "12-chamber pneumatic massage + force-feedback actuators — 100Hz refresh via seat control module",
        "NURBS pattern flattening with strain analysis: <5% green, 5-10% yellow, >10% red — zero distortion",
        "OTA-deployable comfort programs: massage sequences, thermal profiles, posture correction algorithms",
      ],
      tags: ["haptic-surfaces", "CNC-quilting", "thermoelectric", "pneumatic-massage", "seat-intelligence"],
    },
    fa: {
      title: "هوش سطح لامسه‌ای — لایه لمسی برنامه‌پذیر",
      narrative:
        "سیستم هوش سطح لامسه‌ای هر سطح تماسی را به رابط برنامه‌پذیر تبدیل می‌کند. چرم ناپا با الگوی لوزی ۴۰×۴۰ میلی‌متر و ۸ بخیه در اینچ توسط ماشین‌های برنامه‌پذیر CNC دوخته می‌شود — نه دست‌دوز، بلکه دقیق ریاضیاتی.",
      strategic:
        "صندلی صمیمی‌ترین رابط بین خودرو و سرنشین است — در کابین خودمختار که سرنشین تکیه می‌دهد نه رانندگی می‌کند، صندلی پلتفرم اصلی راحتی می‌شود.",
      keyPoints: [
        "دوخت لوزی CNC: الگوی ۴۰×۴۰ میلی‌متر، ۸ بخیه/اینچ، دقت برش ±۰.۵ میلی‌متر",
        "ماتریس ترموالکتریک پلتیه: گرمایش/سرمایش ناحیه‌ای با دقت ۰.۵ درجه",
        "ماساژ پنوماتیک ۱۲ محفظه + محرک‌های بازخورد نیرو — رفرش ۱۰۰ هرتز",
        "صاف‌سازی الگوی NURBS با تحلیل کرنش: <۵٪ سبز، ۵-۱۰٪ زرد، >۱۰٪ قرمز",
        "برنامه‌های راحتی OTA: توالی ماساژ، پروفایل حرارتی، الگوریتم‌های اصلاح وضعیت",
      ],
      tags: ["سطوح-لامسه‌ای", "دوخت-CNC", "ترموالکتریک", "ماساژ-پنوماتیک"],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════════
  // VEHICLE MODULES (G-6 to G-10)
  // ═══════════════════════════════════════════════════════════════════════════════

  // ── G-6: Central Vehicle Computer ───────────────────────────────────────────
  {
    id: 6,
    act: "CentralCompute",
    actLabel: ACT_LABELS_G.CentralCompute,
    imageUrl: imgG(6),
    en: {
      title: "Central Vehicle Computer — 5th-Generation Architecture",
      narrative:
        "The central vehicle computer represents the 5th generation of automotive E/E architecture: a single high-performance compute unit running virtual domains (ADAS, Body, Powertrain, Infotainment) as containerized micro-services on a real-time hypervisor. The aerospace-grade CNC-machined aluminum enclosure houses a multi-core SoC with DDR5 memory, NVMe storage, and automotive-grade Ethernet PHY chips. Copper heat pipes route thermal energy from the SoC to external cooling fins. Fiber-optic data cables with blue-glowing connectors replace the traditional copper wiring harness, reducing weight by 30-40% while increasing bandwidth 100×. This single module replaces 100+ ECUs found in current luxury vehicles.",
      strategic:
        "McKinsey's architecture evolution (Exhibit 1) shows the industry converging from 100+ discrete ECUs to 3-5 domain controllers and ultimately to a single central compute unit. The ECU/DCU market grows from $92B to $156B by 2030 (5% CAGR), but the value shifts from hardware volume to software complexity. By designing the central compute integration — enclosure, thermal management, connector architecture, and software partitioning — the platform owns the vehicle's nervous system. Every function becomes a software feature, deployable and monetizable via OTA.",
      keyPoints: [
        "5th-gen architecture: single compute unit runs ADAS, Body, Powertrain, Infotainment as virtual domains",
        "Replaces 100+ discrete ECUs — from distributed complexity to centralized intelligence",
        "Fiber-optic backbone: 100× bandwidth increase, 30-40% harness weight reduction vs. copper",
        "ECU/DCU market: $92B (2020) → $156B (2030) — value shifts from hardware to software (McKinsey)",
        "Aerospace-grade aluminum enclosure with copper heat pipes — automotive-qualified thermal management",
      ],
      tags: ["central-compute", "5th-gen", "virtual-domains", "fiber-optic", "ECU-consolidation"],
    },
    fa: {
      title: "کامپیوتر مرکزی خودرو — معماری نسل پنجم",
      narrative:
        "کامپیوتر مرکزی خودرو نسل پنجم معماری E/E خودرویی را نمایندگی می‌کند: واحد محاسباتی واحد با عملکرد بالا که دامنه‌های مجازی (ADAS، بدنه، پیشرانه، اینفوتینمنت) را اجرا می‌کند.",
      strategic:
        "تکامل معماری مکینزی نشان می‌دهد صنعت از ۱۰۰+ ECU مجزا به ۳-۵ کنترلر دامنه و نهایتاً به واحد محاسباتی مرکزی واحد همگرا می‌شود.",
      keyPoints: [
        "معماری نسل پنجم: واحد محاسباتی واحد ADAS، بدنه، پیشرانه، اینفوتینمنت را اجرا می‌کند",
        "جایگزین ۱۰۰+ ECU مجزا — از پیچیدگی توزیع‌شده به هوش متمرکز",
        "ستون فقرات فیبر نوری: افزایش پهنای باند ۱۰۰×، کاهش وزن سیم‌کشی ۳۰-۴۰٪",
        "بازار ECU/DCU: ۹۲ میلیارد (۲۰۲۰) → ۱۵۶ میلیارد (۲۰۳۰) — ارزش به نرم‌افزار منتقل می‌شود",
        "محفظه آلومینیومی هوافضایی با لوله‌های حرارتی مسی — مدیریت حرارتی خودرویی",
      ],
      tags: ["محاسبات-مرکزی", "نسل-پنجم", "دامنه‌های-مجازی", "فیبر-نوری"],
    },
  },

  // ── G-7: Perception Sensor Array ────────────────────────────────────────────
  {
    id: 7,
    act: "PerceptionArray",
    actLabel: ACT_LABELS_G.PerceptionArray,
    imageUrl: imgG(7),
    en: {
      title: "Perception Sensor Array — L3+ Autonomous Sensing",
      narrative:
        "The perception sensor array integrates the full L3+ autonomous driving sensor suite into custom carbon fiber body panels. The configuration includes: roof-mounted LiDAR with 360° coverage, 8 cameras (surround-view + forward stereo), 8 radar modules (long-range front + medium-range corners + short-range rear), and 12+ ultrasonic sensors for close-range detection. Each sensor is housed in a CNC-machined billet aluminum enclosure with dark anodized finish, integrated into the carbon fiber fascia through precision-machined apertures with radar-transparent covers. Teal LED indicator rings around each sensor show active status. The carbon fiber body panels maintain the 2×2 twill weave aesthetic while accommodating the sensor geometry.",
      strategic:
        "McKinsey projects ADAS/AD sensors growing from $13B to $43B by 2030 (13% CAGR), with LiDAR alone reaching $12B from near-zero. An L4/5 vehicle requires 50+ sensors — the integration challenge is enormous. By designing custom carbon fiber sensor housings that maintain luxury aesthetics while meeting sensor performance requirements (field-of-view, thermal management, cleaning systems), the platform solves the industry's hardest integration problem: making autonomous vehicles look beautiful, not like sensor-covered prototypes.",
      keyPoints: [
        "Full L3+ suite: roof LiDAR, 8 cameras, 8 radars, 12+ ultrasonic — 50+ sensors total",
        "Custom carbon fiber sensor housings with CNC-machined aluminum enclosures — luxury aesthetics preserved",
        "ADAS/AD sensor market: $13B → $43B by 2030, LiDAR alone $0 → $12B (McKinsey Exhibit 10)",
        "Radar-transparent covers integrated into carbon fiber fascia — no visible sensor protrusions",
        "Teal LED status indicators per sensor — active monitoring visible to occupants and service technicians",
      ],
      tags: ["sensor-array", "LiDAR", "camera-fusion", "radar", "L3-autonomous"],
    },
    fa: {
      title: "آرایه حسگر ادراکی — حسگرهای خودمختار L3+",
      narrative:
        "آرایه حسگر ادراکی مجموعه کامل حسگرهای رانندگی خودمختار L3+ را در پنل‌های بدنه کربن‌فایبر سفارشی یکپارچه می‌کند.",
      strategic:
        "مکینزی حسگرهای ADAS/AD را از ۱۳ میلیارد به ۴۳ میلیارد دلار تا ۲۰۳۰ پیش‌بینی می‌کند. با طراحی محفظه‌های حسگر کربن‌فایبر سفارشی، پلتفرم سخت‌ترین مسئله یکپارچه‌سازی صنعت را حل می‌کند.",
      keyPoints: [
        "مجموعه کامل L3+: LiDAR سقفی، ۸ دوربین، ۸ رادار، ۱۲+ اولتراسونیک — ۵۰+ حسگر",
        "محفظه‌های حسگر کربن‌فایبر سفارشی با محفظه آلومینیومی CNC — زیبایی‌شناسی لوکس حفظ شده",
        "بازار حسگر ADAS/AD: ۱۳ میلیارد → ۴۳ میلیارد تا ۲۰۳۰، LiDAR ۰ → ۱۲ میلیارد",
        "پوشش‌های شفاف رادار در فاسیای کربن‌فایبر — بدون برآمدگی حسگر قابل مشاهده",
        "نشانگرهای LED وضعیت به‌ازای هر حسگر — نظارت فعال قابل مشاهده",
      ],
      tags: ["آرایه-حسگر", "LiDAR", "ادغام-دوربین", "رادار", "خودمختار-L3"],
    },
  },

  // ── G-8: Power Electronics Stack ────────────────────────────────────────────
  {
    id: 8,
    act: "PowerElectronics",
    actLabel: ACT_LABELS_G.PowerElectronics,
    imageUrl: imgG(8),
    en: {
      title: "Power Electronics Stack — The $81B Electrification Layer",
      narrative:
        "The power electronics stack is the fastest-growing segment of automotive electronics at 15% CAGR, reaching $81B by 2030 (McKinsey). The complete stack includes: silicon carbide (SiC) inverter for motor drive efficiency >97%, bidirectional DC/DC converter for 400V/800V compatibility, 11kW on-board charger with PFC and LLC resonant topology, and battery junction box with high-current copper busbars and contactors. Each module is housed in CNC-machined aluminum enclosures with liquid cooling channels — braided stainless steel coolant hoses connect the thermal management loop. Diagnostic instrumentation (oscilloscopes showing SiC switching waveforms, power analyzers displaying efficiency curves) validates every module before integration.",
      strategic:
        "Power electronics is the EV transition's value epicenter. The BJB alone grows at 18% CAGR, DC/DC converters at 20% CAGR. By integrating the complete power electronics stack in-house — from SiC inverter design to thermal management to diagnostic validation — the platform controls the vehicle's energy architecture. This is the $15K+ electronic layer per premium vehicle that McKinsey identifies as the customization frontier. Custom power electronics enable unique driving characteristics: torque curves, regenerative braking profiles, and charging behaviors that define the vehicle's personality.",
      keyPoints: [
        "Power electronics market: $20B (2020) → $81B (2030) at 15% CAGR — fastest-growing segment (McKinsey)",
        "SiC inverter: >97% efficiency, 400V/800V compatible — next-gen wide-bandgap semiconductor technology",
        "Complete stack: inverter + DC/DC + on-board charger + BJB — all liquid-cooled, CNC-machined aluminum",
        "BJB at 18% CAGR, DC/DC at 20% CAGR — highest-growth individual components in automotive E/E",
        "Custom power electronics = custom driving personality: torque curves, regen profiles, charge behaviors",
      ],
      tags: ["power-electronics", "SiC-inverter", "DC-DC", "BJB", "EV-electrification"],
    },
    fa: {
      title: "پشته الکترونیک قدرت — لایه الکتریفیکاسیون ۸۱ میلیارد دلاری",
      narrative:
        "پشته الکترونیک قدرت سریع‌ترین بخش رشد الکترونیک خودرویی با CAGR ۱۵٪ است که تا ۲۰۳۰ به ۸۱ میلیارد دلار می‌رسد.",
      strategic:
        "الکترونیک قدرت مرکز ارزش انتقال EV است. با یکپارچه‌سازی پشته کامل الکترونیک قدرت، پلتفرم معماری انرژی خودرو را کنترل می‌کند.",
      keyPoints: [
        "بازار الکترونیک قدرت: ۲۰ میلیارد (۲۰۲۰) → ۸۱ میلیارد (۲۰۳۰) با CAGR ۱۵٪",
        "اینورتر SiC: بازده >۹۷٪، سازگار ۴۰۰V/۸۰۰V — فناوری نیمه‌هادی باند‌وسیع نسل بعد",
        "پشته کامل: اینورتر + DC/DC + شارژر داخلی + BJB — همه خنک‌شونده مایع، آلومینیوم CNC",
        "BJB با CAGR ۱۸٪، DC/DC با CAGR ۲۰٪ — بالاترین رشد در E/E خودرویی",
        "الکترونیک قدرت سفارشی = شخصیت رانندگی سفارشی: منحنی گشتاور، پروفایل بازیابی",
      ],
      tags: ["الکترونیک-قدرت", "اینورتر-SiC", "DC-DC", "الکتریفیکاسیون-EV"],
    },
  },

  // ── G-9: Software-Defined Powertrain ────────────────────────────────────────
  {
    id: 9,
    act: "SWPowertrain",
    actLabel: ACT_LABELS_G.SWPowertrain,
    imageUrl: imgG(9),
    en: {
      title: "Software-Defined Powertrain — OTA-Updatable Performance",
      narrative:
        "The software-defined powertrain separates hardware capability from software behavior. A dual-motor setup on a dynamometer test stand validates torque vectoring algorithms, regenerative braking energy recovery curves, and thermal management strategies under controlled conditions. Carbon-ceramic brake rotors rated to 1,200°C+ with 50% weight savings over iron sit alongside the electric drive units. The thermal management manifold routes coolant between motors, inverters, and radiator assemblies with real-time flow optimization. Wall-mounted telemetry displays show torque curves (front vs. rear motor), state-of-charge waterfall, and thermal node temperatures — all in teal and gold on dark backgrounds. Every parameter is software-tunable and OTA-deployable.",
      strategic:
        "McKinsey's software market grows at 9% CAGR to $50B by 2030. The powertrain software layer — ECU calibration, torque maps, regenerative braking algorithms, thermal management strategies — is where vehicle personality lives. With HW/SW separation (McKinsey Chapter 3.2), the same hardware platform can deliver different driving experiences through software alone. This enables a subscription model: 'Sport Mode' with aggressive torque vectoring, 'Comfort Mode' with maximized regeneration, 'Track Mode' with thermal management optimized for sustained high output. The vehicle evolves with the client.",
      keyPoints: [
        "HW/SW separation: same hardware, different driving experiences via software — McKinsey's fundamental shift",
        "Dual-motor dynamometer validation: torque vectoring, regen curves, thermal strategies under test",
        "Carbon-ceramic brakes: 1,200°C+ rated, 50% weight savings — validated on brake dynamometer",
        "Software market: $20B (2020) → $50B (2030) at 9% CAGR — powertrain SW is the personality layer",
        "Subscription driving modes: Sport / Comfort / Track / Eco — OTA-deployable, revenue-generating",
      ],
      tags: ["SW-powertrain", "torque-vectoring", "carbon-ceramic", "OTA-performance", "HW-SW-separation"],
    },
    fa: {
      title: "پیشرانه نرم‌افزار-محور — عملکرد قابل به‌روزرسانی OTA",
      narrative:
        "پیشرانه نرم‌افزار-محور قابلیت سخت‌افزاری را از رفتار نرم‌افزاری جدا می‌کند. مجموعه دو موتوره روی پایه آزمون داینامومتر الگوریتم‌های توزیع گشتاور، منحنی‌های بازیابی انرژی ترمز و استراتژی‌های مدیریت حرارتی را اعتبارسنجی می‌کند.",
      strategic:
        "بازار نرم‌افزار مکینزی با CAGR ۹٪ به ۵۰ میلیارد دلار تا ۲۰۳۰ رشد می‌کند. با جداسازی HW/SW، همان پلتفرم سخت‌افزاری تجربه‌های رانندگی متفاوت ارائه می‌دهد.",
      keyPoints: [
        "جداسازی HW/SW: سخت‌افزار یکسان، تجربه‌های رانندگی متفاوت — تغییر بنیادین مکینزی",
        "اعتبارسنجی داینامومتر دو موتوره: توزیع گشتاور، منحنی بازیابی، استراتژی حرارتی",
        "ترمز کربن-سرامیک: مقاوم تا ۱,۲۰۰°C+، کاهش وزن ۵۰٪",
        "بازار نرم‌افزار: ۲۰ میلیارد (۲۰۲۰) → ۵۰ میلیارد (۲۰۳۰) با CAGR ۹٪",
        "حالت‌های رانندگی اشتراکی: اسپرت / راحتی / پیست / اکو — قابل استقرار OTA",
      ],
      tags: ["پیشرانه-نرم‌افزاری", "توزیع-گشتاور", "کربن-سرامیک", "عملکرد-OTA"],
    },
  },

  // ── G-10: Digital Twin Validation ───────────────────────────────────────────
  {
    id: 10,
    act: "DigitalTwin",
    actLabel: ACT_LABELS_G.DigitalTwin,
    imageUrl: imgG(10),
    en: {
      title: "Digital Twin Validation — Every Component Gets a Birth Certificate",
      narrative:
        "The digital twin validation system creates a complete dimensional and material record for every vehicle. A FARO articulated arm with blue laser line scanner (±0.025mm, 600K points/sec) traces body lines while structured light scanners project blue fringe patterns for surface capture. Photogrammetry rigs with synchronized cameras capture reference targets. On a massive curved display, the 3D digital twin assembles in real-time — point cloud building as scanners work, with color-coded deviation mapping (green ±0.1mm, yellow ±0.3mm, red >0.5mm) overlaid on the CAD nominal. A second monitor shows the vehicle's digital birth certificate: serial numbers, material certifications, dimensional reports, paint thickness maps, and quality sign-off checkboxes. The metrology bay maintains 20.0°C ±0.5° on an anti-vibration isolated floor.",
      strategic:
        "The digital twin is the convergence point of physical craft and software intelligence. Every component — from carbon fiber panels (±0.05mm CNC trim) to paint surfaces (ΔE <1.0) to leather patterns (±0.5mm CNC cut) — receives a dimensional record that becomes part of the vehicle's permanent digital identity. This enables predictive maintenance (deviation trends over time), warranty validation (original specifications on record), and resale certification (provenance documentation). The metrology infrastructure (CMM at ±0.002mm, FARO at ±0.025mm, structured light at 1-5M point clouds) is the quality backbone of a Tier-1 aerospace supplier — applied to luxury automotive customization.",
      keyPoints: [
        "FARO arm: ±0.025mm accuracy, 600K points/sec — aerospace-grade dimensional capture",
        "Color-coded deviation mapping: green ±0.1mm, yellow ±0.3mm, red >0.5mm — instant quality visualization",
        "Digital birth certificate per vehicle: serial numbers, material certs, dimensional reports, paint maps",
        "Metrology bay: 20.0°C ±0.5°, anti-vibration floor, CMM at ±0.002mm — Tier-1 aerospace infrastructure",
        "Predictive maintenance + warranty validation + resale certification — the twin lives with the vehicle",
      ],
      tags: ["digital-twin", "metrology", "FARO", "CMM", "quality-assurance", "birth-certificate"],
    },
    fa: {
      title: "اعتبارسنجی دوقلوی دیجیتال — هر قطعه شناسنامه می‌گیرد",
      narrative:
        "سیستم اعتبارسنجی دوقلوی دیجیتال یک رکورد ابعادی و مواد کامل برای هر خودرو ایجاد می‌کند. بازوی مفصلی FARO با اسکنر لیزری خطی آبی بدنه را ردیابی می‌کند.",
      strategic:
        "دوقلوی دیجیتال نقطه همگرایی صنعت فیزیکی و هوش نرم‌افزاری است. هر قطعه رکورد ابعادی دریافت می‌کند که بخشی از هویت دیجیتال دائمی خودرو می‌شود.",
      keyPoints: [
        "بازوی FARO: دقت ±۰.۰۲۵ میلی‌متر، ۶۰۰ هزار نقطه/ثانیه — ثبت ابعادی هوافضایی",
        "نقشه انحراف رنگی: سبز ±۰.۱ میلی‌متر، زرد ±۰.۳ میلی‌متر، قرمز >۰.۵ میلی‌متر",
        "شناسنامه دیجیتال هر خودرو: شماره سریال، گواهی مواد، گزارش ابعادی، نقشه رنگ",
        "اتاق اندازه‌گیری: ۲۰.۰°C ±۰.۵°، کف ضد ارتعاش، CMM ±۰.۰۰۲ میلی‌متر",
        "نگهداری پیش‌بینانه + اعتبارسنجی گارانتی + گواهی فروش مجدد — دوقلو با خودرو زندگی می‌کند",
      ],
      tags: ["دوقلوی-دیجیتال", "اندازه‌شناسی", "FARO", "CMM", "تضمین-کیفیت"],
    },
  },
  // ─── G-11: INVESTOR PATHWAY ─────────────────────────────────────────
  {
    id: 11,
    act: "InvestorPath" as ActG,
    actLabel: { en: "Investor Pathway", fa: "مسیر سرمایه‌گذار" },
    imageUrl: imgG(11),
    en: {
      title: "Investor Pathway — The Complete Story in 40 Slides",
      narrative:
        "This curated 40-slide sequence tells the complete Ghost EPU story through the lens of market opportunity, competitive moat, and financial return. It begins with the foundational physics vision (EPU-1 through EPU-3), establishes the $2.1T market opportunity and competitive landscape (C-2, C-3, C-5), then builds the technical moat through the 10-Gate architecture and PICAPD ISA (EPU-34, C-24, C-29). The vertical integration story unfolds through HPSA's mine-to-chip pipeline (C-17, C-18) and the Quad-Plus Alliance (C-20, C-22). Financial architecture covers the business model, Series B ($120M), IPO strategy, and 23-patent IP portfolio (C-39 through C-42). Benchmarks against NVIDIA and Mobileye (C-48) establish performance superiority, while the Entity Scoring Matrix and Valuation Path (C-65, C-63) provide due diligence frameworks.",
      strategic:
        "The Investor Pathway is designed for Series B due diligence, board presentations, and LP meetings. It answers the five questions every institutional investor asks: Why now? ($469B autonomous vehicle market by 2035), Why this team? (petroleum engineering → chemical engineering → semiconductor → AI), Why defensible? (physics-grounded determinism vs. probabilistic ML), What's the exit? (NASDAQ IPO), and What are the risks? (C-44 risk matrix with mitigations). The 40-slide constraint forces maximum information density per slide.",
      keyPoints: [
        "40-slide curated sequence across all 8 decks — the complete investment story in one sitting",
        "Covers: vision → market ($2.1T) → architecture → vertical integration → financials → exit strategy",
        "Benchmarks: Ghost EPU vs. NVIDIA Drive Orin vs. Mobileye EyeQ6 — performance and safety metrics",
        "Financial arc: Series B ($120M) → IPO with 23-patent IP portfolio and Coq-verified proofs",
        "Reading order: EPU-1,2,3 → C-2,3,5 → EPU-30,34 → C-24,29,30,32 → EPU-53 → C-17,18,20,22 → C-39–44 → C-48,50,65,63,67 → D-118,119 → E-25,29 → EPU-55,56,60 → F-1,3,5 → G-1,10",
      ],
      tags: ["investor-pathway", "curated-sequence", "due-diligence", "valuation", "IPO", "Series-B"],
    },
    fa: {
      title: "مسیر سرمایه‌گذار — داستان کامل در ۴۰ اسلاید",
      narrative:
        "این توالی ۴۰ اسلایدی داستان کامل Ghost EPU را از منظر فرصت بازار، خندق رقابتی و بازده مالی روایت می‌کند. از چشم‌انداز فیزیک بنیادین آغاز می‌شود، فرصت بازار ۲.۱ تریلیون دلاری را تثبیت می‌کند، سپس خندق فنی را از طریق معماری ۱۰-دروازه و ISA PICAPD می‌سازد.",
      strategic:
        "مسیر سرمایه‌گذار برای بررسی دقیق سری B، ارائه‌های هیئت مدیره و جلسات LP طراحی شده است. پنج سؤال کلیدی هر سرمایه‌گذار نهادی را پاسخ می‌دهد.",
      keyPoints: [
        "توالی ۴۰ اسلایدی از هر ۸ Deck — داستان کامل سرمایه‌گذاری در یک نشست",
        "پوشش: چشم‌انداز → بازار (۲.۱T$) → معماری → یکپارچگی عمودی → مالی → استراتژی خروج",
        "معیارسنجی: Ghost EPU در برابر NVIDIA Drive Orin و Mobileye EyeQ6",
        "مسیر مالی: سری B (۱۲۰M$) → IPO با ۲۳ پتنت و اثبات‌های Coq",
        "ترتیب خواندن: EPU-1,2,3 → C-2,3,5 → EPU-30,34 → C-24,29,30,32 → EPU-53 → C-17,18,20,22 → C-39–44 → C-48,50,65,63,67 → D-118,119 → E-25,29 → EPU-55,56,60 → F-1,3,5 → G-1,10",
      ],
      tags: ["مسیر-سرمایه‌گذار", "توالی-منتخب", "بررسی-دقیق", "ارزش‌گذاری", "IPO"],
    },
  },
  // ─── G-12: ENGINEER PATHWAY ─────────────────────────────────────────
  {
    id: 12,
    act: "EngineerPath" as ActG,
    actLabel: { en: "Engineer Pathway", fa: "مسیر مهندس" },
    imageUrl: imgG(12),
    en: {
      title: "Engineer Pathway — From Equations to Silicon to Fleet in 40 Slides",
      narrative:
        "This curated 40-slide sequence traces the complete technical arc from mathematical foundations through silicon implementation to fleet-scale deployment. It opens with the event-driven architecture vision (EPU-1, EPU-4) and E/E architecture evolution (EPU-15, EPU-16), establishing deterministic timing as the safety pillar (EPU-17). The mathematical core builds through sensor requirements (EPU-20), functional redundancy (EPU-21), and the deterministic bounds formulation (EPU-31, EPU-32). The 10-Gate architecture unfolds gate by gate — multi-sensor fusion (EPU-36), Pythagorean closure (EPU-37), Fibonacci regularization (EPU-42), covariance enforcement (EPU-45), and WCET bounds (EPU-46). Deck A contributes the Universal Filtration Primitive and composition algebra (A-1, A-2, A-9, A-12), while Deck B provides differential geometry of temporal evolution and the constraint stress tensor (B-2, B-13). Silicon implementation covers bilinear form mapping (C-24), population balance compression (C-28), PICAPD ISA (C-29), 7nm process (C-32), WCET analysis (C-34), memory architecture (C-35), and formal verification (C-38).",
      strategic:
        "The Engineer Pathway is designed for technical due diligence, architecture review boards, and senior engineering recruitment. It answers: What is the mathematical foundation? (bilinear forms, conservation laws, topological vector spaces), How does it become hardware? (PICAPD ISA with 47 Coq-verified opcodes on 7nm), How does it scale? (EPU-MAS multi-agent system with Byzantine fault tolerance), and What makes it verifiable? (formal proofs, WCET bounds, deterministic timing). This is the path for anyone who needs to understand why the architecture is correct, not just that it works.",
      keyPoints: [
        "40-slide technical deep-dive across all 8 decks — from differential equations to fleet deployment",
        "Mathematical foundations: bilinear forms, conservation laws, topological vector spaces, 89.7:1 compression",
        "10-Gate architecture: each gate's mathematical basis, from multi-sensor fusion to AGM integration",
        "Silicon implementation: PICAPD ISA (47 opcodes), 7nm process, 512-register file, Coq formal proofs",
        "Reading order: EPU-1,4,15,16,17,20,21 → EPU-31,32,34,36,37,42,45,46,49,52 → A-1,2,9,12 → B-2,13 → C-24,28,29,32,34,35,38,66 → D-3,16,47,65,107,120 → E-16 → G-6,7",
      ],
      tags: ["engineer-pathway", "curated-sequence", "architecture", "formal-verification", "PICAPD", "10-gate"],
    },
    fa: {
      title: "مسیر مهندس — از معادلات تا سیلیکون تا ناوگان در ۴۰ اسلاید",
      narrative:
        "این توالی ۴۰ اسلایدی کمان فنی کامل را از مبانی ریاضی تا پیاده‌سازی سیلیکونی و استقرار ناوگانی دنبال می‌کند. با چشم‌انداز معماری رویدادمحور آغاز می‌شود و زمان‌بندی قطعی را به‌عنوان ستون ایمنی تثبیت می‌کند.",
      strategic:
        "مسیر مهندس برای بررسی دقیق فنی، هیئت‌های بازبینی معماری و جذب مهندسان ارشد طراحی شده است. پاسخ می‌دهد: مبنای ریاضی چیست؟ چگونه سخت‌افزار می‌شود؟ چگونه مقیاس‌پذیر می‌شود؟",
      keyPoints: [
        "۴۰ اسلاید عمیق فنی از هر ۸ Deck — از معادلات دیفرانسیل تا استقرار ناوگان",
        "مبانی ریاضی: فرم‌های دوخطی، قوانین بقا، فضاهای برداری توپولوژیک، فشرده‌سازی ۸۹.۷:۱",
        "معماری ۱۰-دروازه: مبنای ریاضی هر دروازه، از ادغام حسگر تا یکپارچگی AGM",
        "پیاده‌سازی سیلیکونی: ISA PICAPD (۴۷ آپکد)، فرآیند ۷nm، ۵۱۲ رجیستر، اثبات رسمی Coq",
        "ترتیب: EPU-1,4,15,16,17,20,21 → EPU-31,32,34,36,37,42,45,46,49,52 → A-1,2,9,12 → B-2,13 → C-24,28,29,32,34,35,38,66 → D-3,16,47,65,107,120 → E-16 → G-6,7",
      ],
      tags: ["مسیر-مهندس", "توالی-منتخب", "معماری", "اثبات-رسمی", "PICAPD", "۱۰-دروازه"],
    },
  },
  // ─── G-13: REGULATOR PATHWAY ────────────────────────────────────────
  {
    id: 13,
    act: "RegulatorPath" as ActG,
    actLabel: { en: "Regulator Pathway", fa: "مسیر ناظر" },
    imageUrl: imgG(13),
    en: {
      title: "Regulator Pathway — From Safety Case to Certification Evidence in 40 Slides",
      narrative:
        "This curated 40-slide sequence presents the complete safety and certification story for regulatory review, type approval, and standards body engagement. It opens with the physics-certified vision (EPU-1, EPU-2, EPU-3) and domain discipline (EPU-5), establishing that safety is constitutional, not bolted on. The degradation policy and MRC matrix (EPU-22) shows rule-governed failure behavior, while validation gates (EPU-23) and the certification evidence file (EPU-24) demonstrate audit readiness. The 10-Gate map (EPU-34, EPU-35) is traversed with emphasis on gates most relevant to certification: multi-sensor fusion (EPU-36), geometric validation (EPU-38), spatial governance (EPU-39), MRC types (EPU-40), hierarchical decision with audit trails (EPU-43), the memoryless property (EPU-44), and WCET bounds (EPU-46). ISO 26262 ASIL-D and IEC 61508 SIL-4 certification strategy (EPU-54) is followed by the sensor suite constitution (EPU-58) and validation courts (EPU-59). Deck C contributes risk management (C-7), ASIL-D certification path (C-31), formal verification (C-38), risk matrix (C-44), and global regulatory compliance (C-59).",
      strategic:
        "The Regulator Pathway is designed for UNECE WP.29 submissions, NHTSA engagement, EU AI Act compliance reviews, and ISO/IEC standards body presentations. It demonstrates that Ghost EPU's safety case is built on deterministic physics rather than statistical ML confidence intervals — a fundamentally different certification paradigm. Every claim is traceable to a formal proof (Coq), a timing bound (WCET), or a physical law (conservation). The 40-slide constraint ensures that a regulator can review the complete safety argument in a single session.",
      keyPoints: [
        "40-slide safety and certification sequence — the complete regulatory argument in one session",
        "Covers: safety philosophy → degradation policy → 10-Gate verification → formal proofs → certification evidence",
        "Standards alignment: ISO 26262 ASIL-D, IEC 61508 SIL-4, UNECE WP.29, EU AI Act",
        "Every claim traceable to: Coq formal proof, WCET timing bound, or conservation law — no statistical confidence intervals",
        "Reading order: EPU-1,2,3,5 → EPU-22,23,24 → EPU-31,33,34,35,36,38,39,40,43,44,46,49 → EPU-54,58,59 → C-7,31,38,44,59,64 → D-21,28,35,36,38,76,115 → E-21,22,23,28 → G-10",
      ],
      tags: ["regulator-pathway", "curated-sequence", "certification", "ISO-26262", "ASIL-D", "safety-case"],
    },
    fa: {
      title: "مسیر ناظر — از پرونده ایمنی تا شواهد گواهی‌نامه در ۴۰ اسلاید",
      narrative:
        "این توالی ۴۰ اسلایدی داستان کامل ایمنی و گواهی‌نامه را برای بررسی نظارتی، تأیید نوع و تعامل با نهادهای استاندارد ارائه می‌کند. نشان می‌دهد که پرونده ایمنی Ghost EPU بر فیزیک قطعی استوار است، نه فواصل اطمینان آماری ML.",
      strategic:
        "مسیر ناظر برای ارائه‌های UNECE WP.29، تعامل NHTSA، بررسی انطباق قانون هوش مصنوعی اتحادیه اروپا و ارائه‌های نهادهای استاندارد ISO/IEC طراحی شده است.",
      keyPoints: [
        "۴۰ اسلاید ایمنی و گواهی‌نامه — استدلال نظارتی کامل در یک نشست",
        "پوشش: فلسفه ایمنی → سیاست تخریب → تأیید ۱۰-دروازه → اثبات رسمی → شواهد گواهی‌نامه",
        "انطباق استاندارد: ISO 26262 ASIL-D، IEC 61508 SIL-4، UNECE WP.29، قانون هوش مصنوعی اتحادیه اروپا",
        "هر ادعا قابل ردیابی: اثبات رسمی Coq، کران زمانی WCET، یا قانون بقا — بدون فواصل اطمینان آماری",
        "ترتیب: EPU-1,2,3,5 → EPU-22,23,24 → EPU-31,33,34,35,36,38,39,40,43,44,46,49 → EPU-54,58,59 → C-7,31,38,44,59,64 → D-21,28,35,36,38,76,115 → E-21,22,23,28 → G-10",
      ],
      tags: ["مسیر-ناظر", "توالی-منتخب", "گواهی‌نامه", "ISO-26262", "ASIL-D", "پرونده-ایمنی"],
    },
  },
];
