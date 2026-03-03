// Deck D — TWIN Multi-Agent System Integration into EPU (120 slides)
// Source: AutoAgents-Backup/TWIN_MD — 101 markdown documentation files
// Theme: Teal/Cyan (#0D9488) — Software Intelligence & Agent Architecture
export type ActD =
  | "AgentFoundation"
  | "Communication"
  | "TrustConsensus"
  | "MemoryArch"
  | "MechanicalSignal"
  | "Coordination"
  | "LLMIntegration"
  | "SystemSynthesis";

export interface SlideD {
  id: number;
  act: ActD;
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

export const ACT_LABELS_D: Record<ActD, { en: string; fa: string }> = {
  AgentFoundation:   { en: "Agent Foundation",         fa: "بنیاد عوامل هوشمند" },
  Communication:     { en: "Communication & Message Bus", fa: "گذرگاه پیام و ارتباط" },
  TrustConsensus:    { en: "Trust, Consensus & BFT",   fa: "اعتماد، اجماع و تاب‌آوری بیزانسی" },
  MemoryArch:        { en: "Memory Architecture",      fa: "لایه‌های حافظه هوشمند" },
  MechanicalSignal:  { en: "Mechanical Signaling Protocol", fa: "پروتکل سیگنال‌دهی مکانیکی" },
  Coordination:      { en: "Coordination & Stations",  fa: "هماهنگی ایستگاه‌ها و کارگزاران" },
  LLMIntegration:    { en: "LLM Integration Layer",    fa: "پیوند هوش مصنوعی و سیلیکون" },
  SystemSynthesis:   { en: "System Synthesis",         fa: "برآیند یکپارچه‌سازی TWIN و EPU" },
};

const CDN_D = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K";
const IMG_URLS_D: Record<number, string> = {
  1: `${CDN_D}/deck_d_01.png`,
  2: `${CDN_D}/deck_d_02.png`,
  3: `${CDN_D}/deck_d_03.png`,
  4: `${CDN_D}/deck_d_04.png`,
  5: `${CDN_D}/deck_d_05.png`,
  6: `${CDN_D}/deck_d_06.png`,
  7: `${CDN_D}/deck_d_07.png`,
  8: `${CDN_D}/deck_d_08.png`,
  9: `${CDN_D}/deck_d_09.png`,
  10: `${CDN_D}/deck_d_10.png`,
  11: `${CDN_D}/deck_d_11.png`,
  12: `${CDN_D}/deck_d_12.png`,
  13: `${CDN_D}/deck_d_13.png`,
  14: `${CDN_D}/deck_d_14.png`,
  15: `${CDN_D}/deck_d_15.png`,
  16: `${CDN_D}/deck_d_16.png`,
  17: `${CDN_D}/deck_d_17.png`,
  18: `${CDN_D}/deck_d_18.png`,
  19: `${CDN_D}/deck_d_19.png`,
  20: `${CDN_D}/deck_d_20.png`,
  21: `${CDN_D}/deck_d_21.png`,
  22: `${CDN_D}/deck_d_22.png`,
  23: `${CDN_D}/deck_d_23.png`,
  24: `${CDN_D}/deck_d_24.png`,
  25: `${CDN_D}/deck_d_25.png`,
  26: `${CDN_D}/deck_d_26.png`,
  27: `${CDN_D}/deck_d_27.png`,
  28: `${CDN_D}/deck_d_28.png`,
  29: `${CDN_D}/deck_d_29.png`,
  30: `${CDN_D}/deck_d_30.png`,
  31: `${CDN_D}/deck_d_31.png`,
  32: `${CDN_D}/deck_d_32.png`,
  33: `${CDN_D}/deck_d_33.png`,
  34: `${CDN_D}/deck_d_34.png`,
  35: `${CDN_D}/deck_d_35.png`,
  36: `${CDN_D}/deck_d_36.png`,
  37: `${CDN_D}/deck_d_37.png`,
  38: `${CDN_D}/deck_d_38.png`,
  39: `${CDN_D}/deck_d_39.png`,
  40: `${CDN_D}/deck_d_40.png`,
  41: `${CDN_D}/deck_d_41.png`,
  42: `${CDN_D}/deck_d_42.png`,
  43: `${CDN_D}/deck_d_43.png`,
  44: `${CDN_D}/deck_d_44.png`,
  45: `${CDN_D}/deck_d_45.png`,
  46: `${CDN_D}/deck_d_46.png`,
  47: `${CDN_D}/deck_d_47.png`,
  48: `${CDN_D}/deck_d_48.png`,
  49: `${CDN_D}/deck_d_49.png`,
  50: `${CDN_D}/deck_d_50.png`,
  51: `${CDN_D}/deck_d_51.png`,
  52: `${CDN_D}/deck_d_52.png`,
  53: `${CDN_D}/deck_d_53.png`,
  54: `${CDN_D}/deck_d_54.png`,
  55: `${CDN_D}/deck_d_55.png`,
  56: `${CDN_D}/deck_d_56.png`,
  57: `${CDN_D}/deck_d_57.png`,
  58: `${CDN_D}/deck_d_58.png`,
  59: `${CDN_D}/deck_d_59.png`,
  60: `${CDN_D}/deck_d_60.png`,
  61: `${CDN_D}/deck_d_61.png`,
  62: `${CDN_D}/deck_d_62.png`,
  63: `${CDN_D}/deck_d_63.png`,
  64: `${CDN_D}/deck_d_64.png`,
  65: `${CDN_D}/deck_d_65.png`,
  66: `${CDN_D}/deck_d_66.png`,
  67: `${CDN_D}/deck_d_67.png`,
  68: `${CDN_D}/deck_d_68.png`,
  69: `${CDN_D}/deck_d_69.png`,
  70: `${CDN_D}/deck_d_70.png`,
  71: `${CDN_D}/deck_d_71.png`,
  72: `${CDN_D}/deck_d_72.png`,
  73: `${CDN_D}/deck_d_73.png`,
  74: `${CDN_D}/deck_d_74.png`,
  75: `${CDN_D}/deck_d_75.png`,
  76: `${CDN_D}/deck_d_76.png`,
  77: `${CDN_D}/deck_d_77.png`,
  78: `${CDN_D}/deck_d_78.png`,
  79: `${CDN_D}/deck_d_79.png`,
  80: `${CDN_D}/deck_d_80.png`,
  81: `${CDN_D}/deck_d_81.png`,
  82: `${CDN_D}/deck_d_82.png`,
  83: `${CDN_D}/deck_d_83.png`,
  84: `${CDN_D}/deck_d_84.png`,
  85: `${CDN_D}/deck_d_85.png`,
  86: `${CDN_D}/deck_d_86.png`,
  87: `${CDN_D}/deck_d_87.png`,
  88: `${CDN_D}/deck_d_88.png`,
  89: `${CDN_D}/deck_d_89.png`,
  90: `${CDN_D}/deck_d_90.png`,
  91: `${CDN_D}/deck_d_91.png`,
  92: `${CDN_D}/deck_d_92.png`,
  93: `${CDN_D}/deck_d_93.png`,
  94: `${CDN_D}/deck_d_94.png`,
  95: `${CDN_D}/deck_d_95.png`,
  96: `${CDN_D}/deck_d_96.png`,
  97: `${CDN_D}/deck_d_97.png`,
  98: `${CDN_D}/deck_d_98.png`,
  99: `${CDN_D}/deck_d_99.png`,
  100: `${CDN_D}/deck_d_100.png`,
  101: `${CDN_D}/deck_d_101.png`,
  102: `${CDN_D}/deck_d_102.png`,
  103: `${CDN_D}/deck_d_103.png`,
  104: `${CDN_D}/deck_d_104.png`,
  105: `${CDN_D}/deck_d_105.png`,
  106: `${CDN_D}/deck_d_106.png`,
  107: `${CDN_D}/deck_d_107.png`,
  108: `${CDN_D}/deck_d_108.png`,
  109: `${CDN_D}/deck_d_109.png`,
  110: `${CDN_D}/deck_d_110.png`,
  111: `${CDN_D}/deck_d_111.png`,
  112: `${CDN_D}/deck_d_112.png`,
  113: `${CDN_D}/deck_d_113.png`,
  114: `${CDN_D}/deck_d_114.png`,
  115: `${CDN_D}/deck_d_115.png`,
  116: `${CDN_D}/deck_d_116.png`,
  117: `${CDN_D}/deck_d_117.png`,
  118: `${CDN_D}/deck_d_118.png`,
  119: `${CDN_D}/deck_d_119.png`,
  120: `${CDN_D}/deck_d_120.png`,
};
const imgD = (n: number) => IMG_URLS_D[n] || "";

export const slidesD: SlideD[] = [
// ── ACT I: بنیاد عوامل هوشمند | Agent Foundation (1–15) ──────────────────

  {
    id: 1, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(1),
    en: {
      title: "TWIN System Overview — Multi-Agent Architecture as EPU's Software Nervous System",
      narrative: "TWIN (Technology With Intelligence Network) is a multi-agent software system designed as the cognitive layer above EPU silicon. Where EPU enforces physics-grounded computation in hardware, TWIN provides the orchestration intelligence that coordinates, monitors, and adapts the system's behavior. The two layers are complementary: EPU guarantees correctness at the gate level; TWIN guarantees correctness at the decision level.",
      strategic: "Integrating TWIN into EPU transforms a physics-certified processor into a fully autonomous cognitive platform. The 101 TWIN documentation files represent a complete, production-ready agent framework that maps directly onto EPU's functional blocks — BEU arrays become agent execution units, WAL becomes the agent memory log, and Queen Bee BFT becomes the agent consensus layer.",
      keyPoints: [
        "TWIN provides orchestration intelligence above EPU's physics-grounded silicon",
        "101 documentation files cover 8 subsystems: agents, communication, trust, memory, signaling, coordination, LLM, UI",
        "TWIN agents map directly onto EPU functional blocks: BEU → execution, WAL → memory, Queen Bee → consensus",
        "Integration produces a complete autonomous cognitive platform certified at ASIL-D",
      ],
      tags: ["TWIN", "Multi-Agent", "EPU Integration", "Architecture Overview", "Cognitive Platform"],
    },
    fa: {
      title: "نگاه کلی به TWIN — معماری کارگزاران به‌مثابه دستگاه عصبی نرم‌افزاری EPU",
      narrative: "TWIN یک سیستم نرم‌افزاری چندعاملی است که به‌عنوان لایه شناختی بالای سیلیکون EPU طراحی شده است. در جایی که EPU محاسبات فیزیک‌محور را در سخت‌افزار تضمین می‌کند، TWIN هوشمندی هماهنگ‌سازی را فراهم می‌کند که رفتار سیستم را هدایت، نظارت و انطباق می‌دهد.",
      strategic: "یکپارچه‌سازی TWIN در EPU یک پردازنده گواهی‌شده فیزیکی را به یک سکوی شناختی کاملاً خودمختار تبدیل می‌کند. ۱۰۱ فایل مستندات TWIN یک چارچوب عاملی کامل و آماده تولید را نشان می‌دهند که مستقیماً بر بلوک‌های کارکردی EPU نگاشته می‌شود.",
      keyPoints: [
        "TWIN هوشمندی هماهنگ‌سازی را بالای سیلیکون فیزیک‌محور EPU فراهم می‌کند",
        "۱۰۱ فایل مستندات ۸ زیرسیستم را پوشش می‌دهند: عوامل، ارتباط، اعتماد، حافظه، سیگنال‌دهی، هماهنگی، LLM، رابط کاربری",
        "کارگزاران TWIN مستقیماً بر بلوک‌های کارکردی EPU نگاشته می‌شوند",
        "یکپارچه‌سازی یک سکوی شناختی خودمختار کامل گواهی‌شده با ASIL-D تولید می‌کند",
      ],
      tags: ["TWIN", "چندعاملی", "یکپارچه‌سازی EPU", "نگاه کلی معماری", "سکوی شناختی"],
    },
  },
  {
    id: 2, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(2),
    en: {
      title: "Agent Taxonomy — Roles, Capabilities, and Privilege Levels",
      narrative: "TWIN defines a strict agent taxonomy with four primary roles: ArchitectAgent (system design and configuration planning), CodeEditorAgent (autonomous code modification under ASIL-D constraints), ObserverAgent (passive monitoring and audit trail), and BaseAgent (the foundational lifecycle contract from which all others inherit). Each role carries a defined privilege level that maps onto PICAPD's ring architecture.",
      strategic: "The taxonomy is not organizational — it is architectural. Each agent type has a precisely bounded capability set, a defined memory access pattern, and a privilege ring assignment. This structure allows EPU's PICAPD ISA to enforce agent boundaries in hardware, making role violations physically impossible rather than merely policy-prohibited.",
      keyPoints: [
        "ArchitectAgent: system design intelligence, highest privilege, maps to EPU supervisor ring",
        "CodeEditorAgent: bounded code modification under ASIL-D CSS pre/post-condition verification",
        "ObserverAgent: read-only audit trail, lowest privilege, maps to EPU user ring",
        "BaseAgent: foundational lifecycle state machine inherited by all agent types",
      ],
      tags: ["Agent Taxonomy", "PICAPD", "Privilege Rings", "ASIL-D", "Role Architecture"],
    },
    fa: {
      title: "رده‌بندی عوامل هوشمند — نقش‌ها، توانمندی‌ها و سطوح امتیاز",
      narrative: "TWIN یک رده‌بندی دقیق عاملی با چهار نقش اصلی تعریف می‌کند: ArchitectAgent (طراحی سیستم و برنامه‌ریزی پیکربندی)، CodeEditorAgent (ویرایش خودمختار کد زیر قیود ASIL-D)، ObserverAgent (نظارت انفعالی و ردپای ممیزی)، و BaseAgent (قرارداد پایه چرخه عمر که همه دیگران از آن ارث می‌برند).",
      strategic: "رده‌بندی سازمانی نیست — معماری است. هر نوع عامل یک مجموعه توانایی دقیقاً محدود، یک الگوی دسترسی حافظه تعریف‌شده، و یک انتساب حلقه امتیاز دارد که PICAPD EPU می‌تواند آن را در سخت‌افزار اجرا کند.",
      keyPoints: [
        "ArchitectAgent: هوشمند طراحی سیستم، بالاترین امتیاز، نگاشته به حلقه ناظر EPU",
        "CodeEditorAgent: ویرایش محدود کد زیر تأیید پیش‌شرط/پس‌شرط CSS با ASIL-D",
        "ObserverAgent: ردپای ممیزی فقط‌خواندنی، کمترین امتیاز، نگاشته به حلقه کاربر EPU",
        "BaseAgent: ماشین حالت چرخه عمر پایه که همه انواع عامل از آن ارث می‌برند",
      ],
      tags: ["رده‌بندی عامل", "PICAPD", "حلقه‌های امتیاز", "ASIL-D", "معماری نقش"],
    },
  },
  {
    id: 3, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(3),
    en: {
      title: "BaseAgent — Lifecycle State Machine and Thread Safety Contract",
      narrative: "BaseAgent defines the canonical lifecycle for all TWIN agents: INIT → READY → RUNNING → PAUSED → TERMINATED, with explicit transition guards at each boundary. The state machine is not advisory — it is enforced by the AgentFactory and verified by the ObserverAgent's WAL audit trail. Thread safety is achieved through a monitor pattern where all state mutations are serialized through a single lock, eliminating race conditions at the agent boundary.",
      strategic: "The BaseAgent lifecycle maps directly onto EPU's PDC (Physics-Derived Computation) state model. INIT corresponds to EPU boot sequence register initialization; RUNNING corresponds to PDC active computation; TERMINATED corresponds to PDC safe-state assertion. This alignment means TWIN agent state transitions can be verified against EPU hardware state — a unique capability that no other multi-agent framework provides.",
      keyPoints: [
        "Five-state lifecycle: INIT → READY → RUNNING → PAUSED → TERMINATED with guarded transitions",
        "Thread safety via monitor pattern — all state mutations serialized through single lock",
        "ObserverAgent WAL audit trail records every state transition with timestamp and cause",
        "Lifecycle maps onto EPU PDC state model: INIT=boot, RUNNING=active, TERMINATED=safe-state",
      ],
      tags: ["BaseAgent", "Lifecycle", "State Machine", "Thread Safety", "PDC"],
    },
    fa: {
      title: "BaseAgent — چرخه عمر ماشین حالت و قرارداد ایمنی رشته اجرا",
      narrative: "BaseAgent چرخه عمر استاندارد برای همه کارگزاران TWIN را تعریف می‌کند: INIT → READY → RUNNING → PAUSED → TERMINATED، با نگهبان‌های انتقال صریح در هر مرز. ماشین حالت مشاوره‌ای نیست — توسط AgentFactory اجرا شده و توسط ردپای WAL ObserverAgent تأیید می‌شود.",
      strategic: "چرخه عمر BaseAgent مستقیماً بر مدل حالت PDC EPU نگاشته می‌شود. INIT با مقداردهی اولیه ثبات توالی راه‌اندازی EPU مطابقت دارد؛ RUNNING با محاسبه فعال PDC؛ TERMINATED با اثبات حالت ایمن PDC. این هم‌ترازی به این معناست که گذارهای حالت کارگزار TWIN می‌توانند در برابر حالت سخت‌افزاری EPU تأیید شوند.",
      keyPoints: [
        "چرخه عمر پنج‌حالته: INIT → READY → RUNNING → PAUSED → TERMINATED با گذارهای نگهبانی‌شده",
        "ایمنی رشته از طریق الگوی مانیتور — همه جهش‌های حالت از طریق یک قفل سریال‌سازی می‌شوند",
        "ردپای WAL ObserverAgent هر گذار حالت را با مهر زمانی و علت ثبت می‌کند",
        "چرخه عمر بر مدل حالت PDC EPU نگاشته می‌شود: INIT=راه‌اندازی، RUNNING=فعال، TERMINATED=حالت ایمن",
      ],
      tags: ["BaseAgent", "چرخه عمر", "ماشین حالت", "ایمنی رشته", "PDC"],
    },
  },
  {
    id: 4, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(4),
    en: {
      title: "EnhancedBaseAgent — Lightweight Specialization for Embedded EPU Deployment",
      narrative: "EnhancedBaseAgent extends BaseAgent with three capabilities critical for embedded deployment: resource budgeting (CPU cycles, memory pages, and I/O bandwidth are declared at instantiation and enforced at runtime), health reporting (periodic heartbeat with configurable interval maps onto EPU SystemHealthStatus), and graceful degradation (when resource limits are approached, the agent transitions to a reduced-capability mode rather than failing hard).",
      strategic: "The resource budgeting system in EnhancedBaseAgent is the software counterpart to EPU's WCET (Worst-Case Execution Time) enforcement. Where EPU guarantees that no computation exceeds its time bound in hardware, EnhancedBaseAgent guarantees that no agent exceeds its resource budget in software. Together they provide a complete two-layer resource guarantee from silicon to application.",
      keyPoints: [
        "Resource budgeting: CPU cycles, memory pages, I/O bandwidth declared at instantiation and enforced at runtime",
        "Health reporting: periodic heartbeat maps onto EPU SystemHealthStatus monitoring",
        "Graceful degradation: reduced-capability mode when resource limits approached — no hard failure",
        "Software WCET counterpart: EnhancedBaseAgent resource budget + EPU WCET = complete two-layer guarantee",
      ],
      tags: ["EnhancedBaseAgent", "Resource Budgeting", "WCET", "Embedded Deployment", "Health Reporting"],
    },
    fa: {
      title: "EnhancedBaseAgent — تخصص‌یابی سبک‌وزن برای استقرار تعبیه‌شده در EPU",
      narrative: "EnhancedBaseAgent با سه قابلیت حیاتی برای استقرار تعبیه‌شده، BaseAgent را گسترش می‌دهد: بودجه‌بندی منابع (چرخه‌های CPU، صفحات حافظه، و پهنای باند I/O در هنگام نمونه‌سازی اعلام و در زمان اجرا اجرا می‌شوند)، گزارش سلامت (ضربان قلب دوره‌ای با فاصله قابل تنظیم بر SystemHealthStatus EPU نگاشته می‌شود)، و تخریب ظریف.",
      strategic: "سیستم بودجه‌بندی منابع در EnhancedBaseAgent همتای نرم‌افزاری اجرای WCET EPU است. جایی که EPU تضمین می‌کند هیچ محاسبه‌ای از کران زمانی‌اش در سخت‌افزار تجاوز نکند، EnhancedBaseAgent تضمین می‌کند هیچ کارگزاری از بودجه منابعش در نرم‌افزار تجاوز نکند.",
      keyPoints: [
        "بودجه‌بندی منابع: چرخه‌های CPU، صفحات حافظه، پهنای باند I/O در هنگام نمونه‌سازی اعلام و اجرا می‌شوند",
        "گزارش سلامت: ضربان قلب دوره‌ای بر نظارت SystemHealthStatus EPU نگاشته می‌شود",
        "تخریب ظریف: حالت توانایی کاهش‌یافته هنگام نزدیک شدن به محدودیت‌های منابع — بدون شکست سخت",
        "همتای نرم‌افزاری WCET: بودجه منابع EnhancedBaseAgent + WCET EPU = تضمین کامل دولایه",
      ],
      tags: ["EnhancedBaseAgent", "بودجه‌بندی منابع", "WCET", "استقرار تعبیه‌شده", "گزارش سلامت"],
    },
  },
  {
    id: 5, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(5),
    en: {
      title: "AgentState Transitions — From INIT to TERMINATED Under PDC Verification",
      narrative: "Every AgentState transition in TWIN is a verifiable event: it produces a WAL record, triggers an ObserverAgent notification, and is subject to CSS (Computational Safety Specification) pre- and post-condition checks. The transition from READY to RUNNING, for example, requires that all declared resource budgets are available, all required message subscriptions are active, and the agent's trust score meets the minimum threshold for its privilege level.",
      strategic: "This transition verification architecture is the software analog of EPU's PDC gate-level verification. Just as PDC verifies that every computation satisfies its physics-derived invariants before committing results, TWIN verifies that every agent state transition satisfies its CSS-derived invariants before allowing execution. The two verification layers are complementary and non-overlapping.",
      keyPoints: [
        "Every state transition produces a WAL record and triggers ObserverAgent notification",
        "READY→RUNNING requires: resource budget available, subscriptions active, trust score above threshold",
        "CSS pre/post-condition checks applied at every transition boundary",
        "Software analog of EPU PDC gate-level verification — complementary, non-overlapping layers",
      ],
      tags: ["AgentState", "State Transitions", "CSS", "WAL", "PDC Verification"],
    },
    fa: {
      title: "گذارهای حالت — از آغاز تا پایان زیر تأیید PDC",
      narrative: "هر گذار AgentState در TWIN یک رویداد قابل تأیید است: یک رکورد WAL تولید می‌کند، یک اعلان ObserverAgent را فعال می‌کند، و تحت بررسی‌های پیش‌شرط و پس‌شرط CSS قرار می‌گیرد. گذار از READY به RUNNING، برای مثال، نیاز دارد که همه بودجه‌های منابع اعلام‌شده در دسترس باشند، همه اشتراک‌های پیام مورد نیاز فعال باشند، و امتیاز اعتماد کارگزار حداقل آستانه را برای سطح امتیازش برآورده کند.",
      strategic: "این معماری تأیید گذار، همتای نرم‌افزاری تأیید سطح گیت PDC EPU است. درست مانند اینکه PDC تأیید می‌کند هر محاسبه‌ای ثوابت مشتق‌شده از فیزیکش را قبل از ثبت نتایج برآورده می‌کند، TWIN تأیید می‌کند هر گذار حالت کارگزار ثوابت مشتق‌شده از CSS‌اش را قبل از اجازه اجرا برآورده می‌کند.",
      keyPoints: [
        "هر گذار حالت یک رکورد WAL تولید کرده و اعلان ObserverAgent را فعال می‌کند",
        "READY→RUNNING نیاز دارد: بودجه منابع در دسترس، اشتراک‌ها فعال، امتیاز اعتماد بالای آستانه",
        "بررسی‌های پیش‌شرط/پس‌شرط CSS در هر مرز گذار اعمال می‌شوند",
        "همتای نرم‌افزاری تأیید سطح گیت PDC EPU — لایه‌های مکمل و غیرهمپوشان",
      ],
      tags: ["AgentState", "گذارهای حالت", "CSS", "WAL", "تأیید PDC"],
    },
  },
  {
    id: 6, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(6),
    en: {
      title: "ArchitectAgent — System Design Intelligence and Configuration Planning",
      narrative: "ArchitectAgent is TWIN's highest-privilege agent, responsible for system topology decisions: which agents to instantiate, how to partition workloads across BEU arrays, and how to configure inter-agent communication channels. It operates in the supervisor privilege ring and has read-write access to the AgentFactory, StationManager, and SystemMonitor. Its decisions are recorded in the WAL and subject to BFT consensus before execution.",
      strategic: "In the EPU deployment context, ArchitectAgent serves as the software counterpart to EPU's boot-time configuration register initialization. Where EPU's boot sequence sets hardware parameters (clock frequencies, power domains, memory maps), ArchitectAgent sets software parameters (agent counts, task allocation policies, trust thresholds). The two configuration layers must be consistent — ArchitectAgent reads EPU hardware configuration at boot and derives software parameters accordingly.",
      keyPoints: [
        "Highest-privilege agent: supervisor ring, read-write access to AgentFactory, StationManager, SystemMonitor",
        "Responsible for system topology: agent instantiation, BEU workload partitioning, channel configuration",
        "All decisions recorded in WAL and subject to BFT consensus before execution",
        "Software counterpart to EPU boot-time configuration: reads hardware config, derives software parameters",
      ],
      tags: ["ArchitectAgent", "Supervisor Ring", "System Topology", "BFT Consensus", "Boot Configuration"],
    },
    fa: {
      title: "ArchitectAgent — هوشمند طراحی سیستم و برنامه‌ریزی پیکربندی",
      narrative: "ArchitectAgent کارگزار با بالاترین امتیاز در TWIN است که مسئول تصمیمات توپولوژی سیستم است: کدام کارگزاران را نمونه‌سازی کنیم، چگونه بارهای کاری را در آرایه‌های BEU تقسیم کنیم، و چگونه کانال‌های ارتباطی بین‌کارگزاری را پیکربندی کنیم. در حلقه امتیاز ناظر عمل می‌کند.",
      strategic: "در زمینه استقرار EPU، ArchitectAgent به‌عنوان همتای نرم‌افزاری مقداردهی اولیه ثبات پیکربندی زمان راه‌اندازی EPU عمل می‌کند. جایی که توالی راه‌اندازی EPU پارامترهای سخت‌افزاری را تنظیم می‌کند، ArchitectAgent پارامترهای نرم‌افزاری را تنظیم می‌کند. دو لایه پیکربندی باید سازگار باشند.",
      keyPoints: [
        "کارگزار با بالاترین امتیاز: حلقه ناظر، دسترسی خواندن-نوشتن به AgentFactory، StationManager، SystemMonitor",
        "مسئول توپولوژی سیستم: نمونه‌سازی کارگزار، تقسیم بار BEU، پیکربندی کانال",
        "همه تصمیمات در WAL ثبت شده و قبل از اجرا تحت اجماع BFT قرار می‌گیرند",
        "همتای نرم‌افزاری پیکربندی زمان راه‌اندازی EPU: پیکربندی سخت‌افزار را می‌خواند، پارامترهای نرم‌افزاری را استخراج می‌کند",
      ],
      tags: ["ArchitectAgent", "حلقه ناظر", "توپولوژی سیستم", "اجماع BFT", "پیکربندی راه‌اندازی"],
    },
  },
  {
    id: 7, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(7),
    en: {
      title: "CodeEditorAgent — Autonomous Code Modification Under ASIL-D Constraints",
      narrative: "CodeEditorAgent is the only TWIN agent authorized to modify executable artifacts. Its modification capability is strictly bounded: every proposed change must pass CSS pre-condition verification before application and CSS post-condition verification after application. If either check fails, the change is rolled back via WAL T⁰ mechanism. The agent operates in user privilege ring and cannot modify its own verification logic — a critical separation of concerns enforced by PICAPD.",
      strategic: "CodeEditorAgent enables TWIN to perform autonomous software updates on deployed EPU systems without human intervention, while maintaining ASIL-D safety guarantees. This capability is commercially significant: OEM partners can deploy EPU systems that self-optimize and self-repair within certified safety bounds, reducing field maintenance costs and enabling continuous improvement without re-certification of the entire system.",
      keyPoints: [
        "Only agent authorized to modify executable artifacts — strictly bounded by CSS pre/post-condition checks",
        "Failed checks trigger WAL T⁰ rollback — no partial modifications possible",
        "User privilege ring — cannot modify own verification logic (PICAPD separation of concerns)",
        "Enables autonomous software updates maintaining ASIL-D guarantees — reduces OEM field maintenance costs",
      ],
      tags: ["CodeEditorAgent", "Autonomous Updates", "CSS Verification", "ASIL-D", "PICAPD"],
    },
    fa: {
      title: "CodeEditorAgent — ویرایشگر خودگردان کد زیر قیود ASIL-D",
      narrative: "CodeEditorAgent تنها کارگزار TWIN است که مجاز به تغییر مصنوعات اجرایی است. توانایی تغییر آن به شدت محدود است: هر تغییر پیشنهادی باید قبل از اعمال، تأیید پیش‌شرط CSS و بعد از اعمال، تأیید پس‌شرط CSS را بگذراند. اگر هر بررسی شکست بخورد، تغییر از طریق مکانیزم T⁰ WAL برگردانده می‌شود.",
      strategic: "CodeEditorAgent به TWIN امکان می‌دهد به‌روزرسانی‌های نرم‌افزاری خودمختار را بر سیستم‌های EPU مستقرشده بدون دخالت انسانی انجام دهد، در حالی که تضمین‌های ایمنی ASIL-D را حفظ می‌کند. شرکای OEM می‌توانند سیستم‌های EPU را مستقر کنند که در محدوده‌های ایمنی گواهی‌شده خودبهینه و خودترمیم می‌شوند.",
      keyPoints: [
        "تنها کارگزار مجاز به تغییر مصنوعات اجرایی — به شدت محدود توسط بررسی‌های پیش‌شرط/پس‌شرط CSS",
        "بررسی‌های ناموفق بازگشت T⁰ WAL را فعال می‌کنند — هیچ تغییر جزئی ممکن نیست",
        "حلقه امتیاز کاربر — نمی‌تواند منطق تأیید خود را تغییر دهد (جداسازی نگرانی‌های PICAPD)",
        "به‌روزرسانی‌های نرم‌افزاری خودمختار را با حفظ تضمین‌های ASIL-D فعال می‌کند",
      ],
      tags: ["CodeEditorAgent", "به‌روزرسانی‌های خودمختار", "تأیید CSS", "ASIL-D", "PICAPD"],
    },
  },
  {
    id: 8, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(8),
    en: {
      title: "ObserverAgent — Passive Monitoring, Audit Trail, and WAL Consumption",
      narrative: "ObserverAgent operates in read-only mode across the entire TWIN system. It subscribes to all agent state transitions, all message bus events, and all trust score updates, producing an immutable audit trail in the WAL. Unlike other agents, ObserverAgent cannot be paused or terminated by other agents — it operates under a separate lifecycle managed directly by the SystemMonitor, ensuring that the audit trail is never interrupted.",
      strategic: "The ObserverAgent's audit trail is the evidentiary foundation for ASIL-D certification. Regulatory bodies require a complete, tamper-evident record of every safety-relevant decision and state change. ObserverAgent provides this record automatically, without requiring instrumentation of individual agents. The WAL format is designed for efficient extraction by external audit tools, supporting both real-time monitoring and post-incident forensic analysis.",
      keyPoints: [
        "Read-only mode: subscribes to all state transitions, message bus events, trust score updates",
        "Immutable WAL audit trail — cannot be paused or terminated by other agents",
        "Separate lifecycle managed by SystemMonitor — audit trail never interrupted",
        "Evidentiary foundation for ASIL-D certification and post-incident forensic analysis",
      ],
      tags: ["ObserverAgent", "Audit Trail", "WAL", "ASIL-D Certification", "Forensic Analysis"],
    },
    fa: {
      title: "ObserverAgent — ناظر انفعالی، ردپای ممیزی و خوانش WAL",
      narrative: "ObserverAgent در حالت فقط‌خواندنی در کل سیستم TWIN عمل می‌کند. به همه گذارهای حالت کارگزار، همه رویدادهای گذرگاه پیام، و همه به‌روزرسانی‌های امتیاز اعتماد مشترک می‌شود و یک ردپای ممیزی تغییرناپذیر در WAL تولید می‌کند. برخلاف سایر کارگزاران، ObserverAgent نمی‌تواند توسط سایر کارگزاران متوقف یا پایان یابد.",
      strategic: "ردپای ممیزی ObserverAgent پایه شواهدی برای گواهینامه ASIL-D است. نهادهای نظارتی نیاز به یک سابقه کامل و ضدتحریف از هر تصمیم مرتبط با ایمنی و تغییر حالت دارند. ObserverAgent این سابقه را به‌طور خودکار فراهم می‌کند.",
      keyPoints: [
        "حالت فقط‌خواندنی: مشترک همه گذارهای حالت، رویدادهای گذرگاه پیام، به‌روزرسانی‌های امتیاز اعتماد",
        "ردپای ممیزی تغییرناپذیر WAL — نمی‌تواند توسط سایر کارگزاران متوقف یا پایان یابد",
        "چرخه عمر جداگانه مدیریت‌شده توسط SystemMonitor — ردپای ممیزی هرگز قطع نمی‌شود",
        "پایه شواهدی برای گواهینامه ASIL-D و تحلیل جنایی پس از حادثه",
      ],
      tags: ["ObserverAgent", "ردپای ممیزی", "WAL", "گواهینامه ASIL-D", "تحلیل جنایی"],
    },
  },
  {
    id: 9, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(9),
    en: {
      title: "AgentFactory — Deterministic Instantiation Under EPU Boot Sequence",
      narrative: "AgentFactory is the single point of agent creation in TWIN. It enforces three invariants: (1) every agent is instantiated with a complete, validated configuration before entering INIT state; (2) every agent receives a unique, cryptographically-derived identifier that persists across restarts; (3) every instantiation event is recorded in the WAL before the agent's first state transition. These invariants make the system's agent population fully auditable from boot.",
      strategic: "AgentFactory's deterministic instantiation protocol maps directly onto EPU's boot sequence. The EPU boot sequence initializes hardware registers in a defined order with verified values; AgentFactory initializes software agents in a defined order with verified configurations. The two sequences are synchronized: AgentFactory reads EPU hardware state at boot and uses it to derive agent configurations, ensuring that software and hardware are always consistent.",
      keyPoints: [
        "Single point of agent creation — enforces three instantiation invariants",
        "Cryptographically-derived unique identifier persists across restarts",
        "WAL record created before agent's first state transition — complete boot audit trail",
        "Synchronized with EPU boot sequence: reads hardware state, derives agent configurations",
      ],
      tags: ["AgentFactory", "Deterministic Instantiation", "Boot Sequence", "Cryptographic ID", "WAL"],
    },
    fa: {
      title: "AgentFactory — نمونه‌سازی قطعی در توالی راه‌اندازی EPU",
      narrative: "AgentFactory تنها نقطه ایجاد کارگزار در TWIN است. سه ثابت را اجرا می‌کند: (۱) هر کارگزار با یک پیکربندی کامل و اعتبارسنجی‌شده قبل از ورود به حالت INIT نمونه‌سازی می‌شود؛ (۲) هر کارگزار یک شناسه منحصربه‌فرد رمزنگاری‌شده دریافت می‌کند که در راه‌اندازی‌های مجدد باقی می‌ماند؛ (۳) هر رویداد نمونه‌سازی قبل از اولین گذار حالت کارگزار در WAL ثبت می‌شود.",
      strategic: "پروتکل نمونه‌سازی قطعی AgentFactory مستقیماً بر توالی راه‌اندازی EPU نگاشته می‌شود. توالی راه‌اندازی EPU ثبات‌های سخت‌افزاری را با مقادیر تأییدشده مقداردهی اولیه می‌کند؛ AgentFactory کارگزاران نرم‌افزاری را با پیکربندی‌های تأییدشده مقداردهی اولیه می‌کند. دو توالی همگام‌سازی شده‌اند.",
      keyPoints: [
        "تنها نقطه ایجاد کارگزار — سه ثابت نمونه‌سازی را اجرا می‌کند",
        "شناسه منحصربه‌فرد رمزنگاری‌شده که در راه‌اندازی‌های مجدد باقی می‌ماند",
        "رکورد WAL قبل از اولین گذار حالت کارگزار ایجاد می‌شود — ردپای ممیزی کامل راه‌اندازی",
        "همگام‌سازی‌شده با توالی راه‌اندازی EPU: حالت سخت‌افزار را می‌خواند، پیکربندی‌های کارگزار را استخراج می‌کند",
      ],
      tags: ["AgentFactory", "نمونه‌سازی قطعی", "توالی راه‌اندازی", "شناسه رمزنگاری", "WAL"],
    },
  },
  {
    id: 10, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(10),
    en: {
      title: "Task and TaskResult — Work Units, Contracts, and Commit Protocol",
      narrative: "In TWIN, a Task is a formally specified unit of work with three components: a precondition (the system state required before execution), an action (the computation to perform), and a postcondition (the system state that must hold after execution). TaskResult carries the output of the action plus a verification certificate that proves the postcondition was satisfied. The commit protocol ensures that TaskResults are only visible to other agents after WAL durability is confirmed.",
      strategic: "The Task/TaskResult pattern is the software implementation of EPU's CSS (Computational Safety Specification). CSS defines the same three-component structure for hardware computations: precondition, computation, postcondition. By using the same structure in software, TWIN enables end-to-end verification: a Task's CSS certificate can be composed with EPU's hardware CSS certificate to produce a system-level safety proof.",
      keyPoints: [
        "Task: precondition + action + postcondition — formally specified work unit",
        "TaskResult: action output + verification certificate proving postcondition satisfied",
        "Commit protocol: TaskResults visible only after WAL durability confirmed",
        "Software implementation of EPU CSS — enables end-to-end system-level safety proof composition",
      ],
      tags: ["Task", "TaskResult", "CSS", "Commit Protocol", "WAL Durability"],
    },
    fa: {
      title: "وظیفه و نتیجه وظیفه — واحدهای کار، قراردادها و پروتکل ثبت نهایی",
      narrative: "در TWIN، یک Task یک واحد کار رسماً مشخص‌شده با سه مؤلفه است: یک پیش‌شرط (حالت سیستم مورد نیاز قبل از اجرا)، یک عمل (محاسبه برای انجام)، و یک پس‌شرط (حالت سیستم که باید بعد از اجرا برقرار باشد). TaskResult خروجی عمل به‌علاوه یک گواهینامه تأیید را حمل می‌کند.",
      strategic: "الگوی Task/TaskResult پیاده‌سازی نرم‌افزاری CSS EPU است. CSS همان ساختار سه‌مؤلفه‌ای را برای محاسبات سخت‌افزاری تعریف می‌کند. با استفاده از همان ساختار در نرم‌افزار، TWIN تأیید سرتاسری را فعال می‌کند.",
      keyPoints: [
        "Task: پیش‌شرط + عمل + پس‌شرط — واحد کار رسماً مشخص‌شده",
        "TaskResult: خروجی عمل + گواهینامه تأیید اثبات‌کننده برآورده شدن پس‌شرط",
        "پروتکل ثبت نهایی: TaskResults فقط بعد از تأیید ماندگاری WAL قابل مشاهده هستند",
        "پیاده‌سازی نرم‌افزاری CSS EPU — ترکیب اثبات ایمنی سطح سیستم سرتاسری را فعال می‌کند",
      ],
      tags: ["Task", "TaskResult", "CSS", "پروتکل ثبت نهایی", "ماندگاری WAL"],
    },
  },
  {
    id: 11, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(11),
    en: {
      title: "TaskScheduler — Priority Queues, Deadline Management, and WCET Enforcement",
      narrative: "TaskScheduler manages the execution order of Tasks across all agents in a TWIN deployment. It maintains three priority queues: safety-critical (ASIL-D, preemptive, WCET-bounded), mission-critical (ASIL-B, cooperative, deadline-managed), and best-effort (no ASIL, background). The scheduler enforces WCET bounds by monitoring execution time and triggering a CSS postcondition failure if a task exceeds its time budget — causing WAL rollback rather than silent overrun.",
      strategic: "TaskScheduler's WCET enforcement is the software layer that bridges EPU's hardware timing guarantees to application-level deadlines. EPU's PICAPD ISA guarantees that individual instructions complete within their WCET bounds; TaskScheduler guarantees that composed task sequences complete within their deadline bounds. Together they provide a complete real-time guarantee from instruction to application.",
      keyPoints: [
        "Three priority queues: ASIL-D (preemptive, WCET-bounded), ASIL-B (cooperative, deadline-managed), best-effort",
        "WCET enforcement: execution time monitored, CSS postcondition failure triggered on overrun",
        "WAL rollback on WCET violation — no silent overruns possible",
        "Bridges EPU hardware timing guarantees to application-level deadlines",
      ],
      tags: ["TaskScheduler", "WCET", "Priority Queues", "Real-Time", "ASIL-D"],
    },
    fa: {
      title: "زمان‌بند وظایف — صف‌های اولویت، مدیریت مهلت و اجرای کران WCET",
      narrative: "TaskScheduler ترتیب اجرای Tasks را در همه کارگزاران در یک استقرار TWIN مدیریت می‌کند. سه صف اولویت را حفظ می‌کند: حیاتی ایمنی (ASIL-D، پیش‌دستانه، کران‌بند WCET)، حیاتی مأموریت (ASIL-B، مشارکتی، مدیریت‌شده با مهلت)، و بهترین تلاش (بدون ASIL، پس‌زمینه).",
      strategic: "اجرای WCET TaskScheduler لایه نرم‌افزاری است که تضمین‌های زمان‌بندی سخت‌افزاری EPU را به مهلت‌های سطح برنامه متصل می‌کند. PICAPD EPU تضمین می‌کند دستورالعمل‌های منفرد در کران‌های WCET‌شان کامل می‌شوند؛ TaskScheduler تضمین می‌کند توالی‌های وظیفه ترکیب‌شده در کران‌های مهلت‌شان کامل می‌شوند.",
      keyPoints: [
        "سه صف اولویت: ASIL-D (پیش‌دستانه، کران‌بند WCET)، ASIL-B (مشارکتی، مدیریت‌شده با مهلت)، بهترین تلاش",
        "اجرای WCET: زمان اجرا نظارت می‌شود، شکست پس‌شرط CSS در صورت تجاوز فعال می‌شود",
        "بازگشت WAL در نقض WCET — هیچ تجاوز خاموشی ممکن نیست",
        "تضمین‌های زمان‌بندی سخت‌افزاری EPU را به مهلت‌های سطح برنامه متصل می‌کند",
      ],
      tags: ["TaskScheduler", "WCET", "صف‌های اولویت", "بلادرنگ", "ASIL-D"],
    },
  },
  {
    id: 12, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(12),
    en: {
      title: "AgentMetrics — Performance Observability and Hardware Counter Alignment",
      narrative: "AgentMetrics provides structured performance telemetry for every agent in the TWIN system: task throughput, message latency, memory utilization, trust score history, and WCET compliance rate. Critically, AgentMetrics aligns with EPU's hardware performance counters — the same metrics that EPU tracks in silicon (instruction throughput, cache hit rate, BEU utilization) are mirrored in software by AgentMetrics, enabling unified performance analysis across hardware and software layers.",
      strategic: "The hardware-software metric alignment enables a capability unique to the TWIN-EPU integration: cross-layer performance attribution. When a system-level performance anomaly is detected, the combined metric set can determine whether the root cause is in hardware (EPU silicon) or software (TWIN agents), and at what layer the bottleneck occurs. This capability reduces diagnostic time from hours to seconds in field deployments.",
      keyPoints: [
        "Structured telemetry: task throughput, message latency, memory utilization, trust score history, WCET compliance",
        "Aligned with EPU hardware performance counters — same metrics tracked in silicon and software",
        "Enables cross-layer performance attribution: hardware vs. software root cause in seconds",
        "Reduces field diagnostic time from hours to seconds through unified metric correlation",
      ],
      tags: ["AgentMetrics", "Performance Observability", "Hardware Counters", "Cross-Layer", "Diagnostics"],
    },
    fa: {
      title: "سنجه‌های عامل — رصدپذیری عملکرد و هم‌ترازی با شمارنده‌های سخت‌افزاری",
      narrative: "AgentMetrics تله‌متری عملکرد ساختارمند برای هر کارگزار در سیستم TWIN فراهم می‌کند: گذردهی وظیفه، تأخیر پیام، استفاده از حافظه، تاریخچه امتیاز اعتماد، و نرخ انطباق WCET. به طور حیاتی، AgentMetrics با شمارنده‌های عملکرد سخت‌افزاری EPU هم‌ترازی دارد.",
      strategic: "هم‌ترازی سنجه سخت‌افزار-نرم‌افزار یک قابلیت منحصربه‌فرد برای یکپارچه‌سازی TWIN-EPU فعال می‌کند: انتساب عملکرد میان‌لایه‌ای. هنگامی که یک ناهنجاری عملکرد سطح سیستم تشخیص داده می‌شود، مجموعه سنجه ترکیبی می‌تواند تعیین کند که آیا علت ریشه‌ای در سخت‌افزار یا نرم‌افزار است.",
      keyPoints: [
        "تله‌متری ساختارمند: گذردهی وظیفه، تأخیر پیام، استفاده از حافظه، تاریخچه امتیاز اعتماد، انطباق WCET",
        "هم‌ترازی با شمارنده‌های عملکرد سخت‌افزاری EPU — همان سنجه‌ها در سیلیکون و نرم‌افزار ردیابی می‌شوند",
        "انتساب عملکرد میان‌لایه‌ای را فعال می‌کند: علت ریشه‌ای سخت‌افزار در برابر نرم‌افزار در ثانیه‌ها",
        "زمان تشخیص میدانی را از ساعت‌ها به ثانیه‌ها کاهش می‌دهد",
      ],
      tags: ["AgentMetrics", "رصدپذیری عملکرد", "شمارنده‌های سخت‌افزاری", "میان‌لایه‌ای", "تشخیص"],
    },
  },
  {
    id: 13, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(13),
    en: {
      title: "AgentRegistrationRequest — Dynamic Enrollment Under BFT Quorum",
      narrative: "When a new agent joins a running TWIN deployment, it must submit an AgentRegistrationRequest to the AgentFactory. The request carries: the agent's type, declared resource budget, privilege level request, and a cryptographic proof of identity. The registration is only accepted after BFT quorum approval — a majority of existing agents must verify the new agent's identity and resource claims before it is admitted to the system.",
      strategic: "Dynamic enrollment under BFT quorum is the mechanism that enables TWIN to scale across multi-chip EPU deployments. When additional EPU chips are added to a vehicle's compute fabric, their associated TWIN agents can join the existing deployment without system restart. The BFT quorum ensures that new agents cannot claim privileges or resources that would compromise the safety guarantees of the existing deployment.",
      keyPoints: [
        "Registration requires: agent type, resource budget declaration, privilege level request, cryptographic identity proof",
        "BFT quorum approval required — majority of existing agents verify identity and resource claims",
        "Enables dynamic scaling across multi-chip EPU deployments without system restart",
        "BFT quorum prevents new agents from claiming privileges that compromise existing safety guarantees",
      ],
      tags: ["AgentRegistration", "BFT Quorum", "Dynamic Enrollment", "Multi-Chip", "Cryptographic Identity"],
    },
    fa: {
      title: "درخواست ثبت‌نام عامل — پیوستن پویا زیر نصاب BFT",
      narrative: "هنگامی که یک کارگزار جدید به یک استقرار TWIN در حال اجرا می‌پیوندد، باید یک AgentRegistrationRequest به AgentFactory ارسال کند. درخواست حمل می‌کند: نوع کارگزار، بودجه منابع اعلام‌شده، درخواست سطح امتیاز، و یک اثبات رمزنگارانه هویت. ثبت‌نام فقط بعد از تأیید نصاب BFT پذیرفته می‌شود.",
      strategic: "ثبت‌نام پویا زیر نصاب BFT مکانیزمی است که به TWIN امکان می‌دهد در استقرارهای EPU چندتراشه‌ای مقیاس‌بندی کند. هنگامی که تراشه‌های EPU اضافی به بافت محاسباتی خودرو اضافه می‌شوند، کارگزاران TWIN مرتبط‌شان می‌توانند بدون راه‌اندازی مجدد سیستم به استقرار موجود بپیوندند.",
      keyPoints: [
        "ثبت‌نام نیاز دارد: نوع کارگزار، اعلام بودجه منابع، درخواست سطح امتیاز، اثبات هویت رمزنگارانه",
        "تأیید نصاب BFT مورد نیاز — اکثریت کارگزاران موجود هویت و ادعاهای منابع را تأیید می‌کنند",
        "مقیاس‌بندی پویا در استقرارهای EPU چندتراشه‌ای بدون راه‌اندازی مجدد سیستم را فعال می‌کند",
        "نصاب BFT از ادعای امتیازات توسط کارگزاران جدید که تضمین‌های ایمنی موجود را به خطر می‌اندازد جلوگیری می‌کند",
      ],
      tags: ["ثبت‌نام کارگزار", "نصاب BFT", "ثبت‌نام پویا", "چندتراشه‌ای", "هویت رمزنگارانه"],
    },
  },
  {
    id: 14, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(14),
    en: {
      title: "GroupTaskRequest — Collaborative Work Allocation and BEU Parallelism",
      narrative: "GroupTaskRequest enables a coordinating agent to dispatch a single logical task to multiple agents simultaneously, with the results aggregated according to a specified reduction function. The request specifies: the task definition, the target agent group, the aggregation function, and the deadline. The TaskScheduler maps GroupTaskRequests onto EPU's BEU (Bilinear Execution Unit) arrays, exploiting hardware parallelism for computationally intensive tasks.",
      strategic: "GroupTaskRequest is the software mechanism that unlocks EPU's BEU parallelism for agent-level workloads. A single GroupTaskRequest can dispatch work to 64 BEUs simultaneously, achieving the same 64× speedup in software orchestration that EPU achieves in hardware computation. This alignment means that TWIN's collaborative work allocation directly translates to hardware utilization efficiency.",
      keyPoints: [
        "Dispatches single logical task to multiple agents simultaneously with aggregation function",
        "Specifies: task definition, target agent group, aggregation function, deadline",
        "TaskScheduler maps GroupTaskRequests onto EPU BEU arrays — exploits hardware parallelism",
        "Single GroupTaskRequest can dispatch to 64 BEUs simultaneously — 64× speedup",
      ],
      tags: ["GroupTaskRequest", "BEU Parallelism", "Collaborative Work", "TaskScheduler", "Hardware Utilization"],
    },
    fa: {
      title: "درخواست وظیفه گروهی — توزیع مشارکتی کار و موازی‌کاری BEU",
      narrative: "GroupTaskRequest به یک کارگزار هماهنگ‌ساز امکان می‌دهد یک وظیفه منطقی واحد را به‌طور همزمان به چندین کارگزار ارسال کند، با نتایج تجمیع‌شده بر اساس یک تابع کاهش مشخص‌شده. درخواست مشخص می‌کند: تعریف وظیفه، گروه کارگزار هدف، تابع تجمیع، و مهلت.",
      strategic: "GroupTaskRequest مکانیزم نرم‌افزاری است که موازی‌کاری BEU EPU را برای بارهای کاری سطح کارگزار آزاد می‌کند. یک GroupTaskRequest واحد می‌تواند کار را به ۶۴ BEU به‌طور همزمان ارسال کند و همان سرعت ۶۴× را در هماهنگ‌سازی نرم‌افزار به دست آورد که EPU در محاسبه سخت‌افزار به دست می‌آورد.",
      keyPoints: [
        "یک وظیفه منطقی واحد را به‌طور همزمان به چندین کارگزار با تابع تجمیع ارسال می‌کند",
        "مشخص می‌کند: تعریف وظیفه، گروه کارگزار هدف، تابع تجمیع، مهلت",
        "TaskScheduler GroupTaskRequests را بر آرایه‌های BEU EPU نگاشته می‌کند — موازی‌کاری سخت‌افزاری را بهره‌برداری می‌کند",
        "یک GroupTaskRequest واحد می‌تواند به ۶۴ BEU به‌طور همزمان ارسال کند — سرعت ۶۴×",
      ],
      tags: ["GroupTaskRequest", "موازی‌کاری BEU", "کار مشارکتی", "TaskScheduler", "بهره‌وری سخت‌افزار"],
    },
  },
  {
    id: 15, act: "AgentFoundation", actLabel: ACT_LABELS_D.AgentFoundation, imageUrl: imgD(15),
    en: {
      title: "Agent Foundation Synthesis — TWIN Hierarchy Mapped onto EPU Silicon",
      narrative: "The fifteen slides of Act I establish the complete agent foundation: a taxonomy of roles, a lifecycle state machine, a factory for deterministic instantiation, a scheduler for WCET-bounded execution, and a metrics system for cross-layer observability. Every element of this foundation has a direct counterpart in EPU silicon: roles map to privilege rings, lifecycle maps to PDC states, factory maps to boot sequence, scheduler maps to PICAPD timing, and metrics map to hardware counters.",
      strategic: "This one-to-one mapping between TWIN software abstractions and EPU hardware structures is the defining architectural property of the TWIN-EPU integration. It means that TWIN is not a generic agent framework running on top of EPU — it is a purpose-built software layer that is structurally isomorphic to EPU's hardware architecture. This isomorphism enables formal verification of the combined system, a capability that no other autonomous driving software stack provides.",
      keyPoints: [
        "Complete foundation: taxonomy, lifecycle, factory, scheduler, metrics — all with EPU hardware counterparts",
        "Roles → privilege rings; lifecycle → PDC states; factory → boot sequence; scheduler → PICAPD; metrics → hardware counters",
        "Structural isomorphism between TWIN software and EPU hardware enables formal verification",
        "No other autonomous driving software stack provides this level of hardware-software structural alignment",
      ],
      tags: ["Agent Foundation", "Synthesis", "Structural Isomorphism", "Formal Verification", "EPU Silicon"],
    },
    fa: {
      title: "برآیند بنیاد عوامل هوشمند — سلسله‌مراتب TWIN فرافکنده بر سیلیکون EPU",
      narrative: "پانزده اسلاید پرده اول بنیاد کامل عاملی را برقرار می‌کنند: یک رده‌بندی نقش‌ها، یک ماشین حالت چرخه عمر، یک کارخانه برای نمونه‌سازی قطعی، یک زمان‌بند برای اجرای کران‌بند WCET، و یک سیستم سنجه برای رصدپذیری میان‌لایه‌ای. هر عنصر از این بنیاد یک همتای مستقیم در سیلیکون EPU دارد.",
      strategic: "این نگاشت یک‌به‌یک بین انتزاعات نرم‌افزاری TWIN و ساختارهای سخت‌افزاری EPU ویژگی معماری تعریف‌کننده یکپارچه‌سازی TWIN-EPU است. این به این معناست که TWIN یک چارچوب عاملی عمومی در بالای EPU نیست — بلکه یک لایه نرم‌افزاری هدف‌ساخته است که از نظر ساختاری با معماری سخت‌افزاری EPU ایزومورف است.",
      keyPoints: [
        "بنیاد کامل: رده‌بندی، چرخه عمر، کارخانه، زمان‌بند، سنجه‌ها — همه با همتایان سخت‌افزاری EPU",
        "نقش‌ها → حلقه‌های امتیاز؛ چرخه عمر → حالت‌های PDC؛ کارخانه → توالی راه‌اندازی؛ زمان‌بند → PICAPD؛ سنجه‌ها → شمارنده‌های سخت‌افزاری",
        "ایزومورفیسم ساختاری بین نرم‌افزار TWIN و سخت‌افزار EPU تأیید رسمی را فعال می‌کند",
        "هیچ پشته نرم‌افزاری رانندگی خودمختار دیگری این سطح از هم‌ترازی ساختاری سخت‌افزار-نرم‌افزار را فراهم نمی‌کند",
      ],
      tags: ["بنیاد عامل", "برآیند", "ایزومورفیسم ساختاری", "تأیید رسمی", "سیلیکون EPU"],
    },
  },

  // ── ACT II: گذرگاه پیام و ارتباط | Communication & Message Bus (16–27) ────

  {
    id: 16, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(16),
    en: {
      title: "Message Architecture — Types, Contracts, and Opcode Correspondence",
      narrative: "TWIN's message architecture defines four message types: Command (agent-to-agent instruction with CSS precondition), Event (system-wide notification with no response expected), Query (request-response pair with timeout), and Heartbeat (periodic liveness signal). Each type carries a typed payload, a sender identity, a timestamp, and a CSS certificate. The message type taxonomy maps onto EPU's PICAPD opcode space: Commands correspond to privileged instructions, Events to interrupt signals, Queries to memory-mapped I/O, and Heartbeats to watchdog timer resets.",
      strategic: "The opcode correspondence between TWIN message types and PICAPD instructions is not coincidental — it was designed to enable hardware-accelerated message processing. EPU's PICAPD can process TWIN messages directly in silicon, without software parsing overhead. This means that high-frequency message exchanges (>10,000/second) can be handled at hardware speed, enabling TWIN to orchestrate EPU's real-time computations without introducing software latency.",
      keyPoints: [
        "Four message types: Command, Event, Query, Heartbeat — each with typed payload and CSS certificate",
        "Types map to PICAPD opcodes: Command=privileged, Event=interrupt, Query=MMIO, Heartbeat=watchdog",
        "Hardware-accelerated message processing: PICAPD processes TWIN messages directly in silicon",
        "High-frequency exchanges (>10,000/sec) handled at hardware speed — no software parsing overhead",
      ],
      tags: ["Message Architecture", "PICAPD", "Opcode Correspondence", "Hardware Acceleration", "CSS Certificate"],
    },
    fa: {
      title: "معماری پیام — انواع، قراردادها و تناظر با کدعمل",
      narrative: "معماری پیام TWIN چهار نوع پیام تعریف می‌کند: Command (دستورالعمل کارگزار-به-کارگزار با پیش‌شرط CSS)، Event (اعلان سراسری سیستم بدون پاسخ مورد انتظار)، Query (جفت درخواست-پاسخ با مهلت)، و Heartbeat (سیگنال زنده‌بودن دوره‌ای). هر نوع یک بار داده نوع‌بندی‌شده، یک هویت فرستنده، یک مهر زمانی، و یک گواهینامه CSS حمل می‌کند.",
      strategic: "تناظر کدعمل بین انواع پیام TWIN و دستورالعمل‌های PICAPD تصادفی نیست — برای فعال کردن پردازش پیام شتاب‌دهنده سخت‌افزاری طراحی شده است. PICAPD EPU می‌تواند پیام‌های TWIN را مستقیماً در سیلیکون پردازش کند، بدون سربار تجزیه نرم‌افزاری.",
      keyPoints: [
        "چهار نوع پیام: Command، Event، Query، Heartbeat — هر کدام با بار داده نوع‌بندی‌شده و گواهینامه CSS",
        "انواع به کدعمل‌های PICAPD نگاشته می‌شوند: Command=ممتاز، Event=وقفه، Query=MMIO، Heartbeat=سگ نگهبان",
        "پردازش پیام شتاب‌دهنده سخت‌افزاری: PICAPD پیام‌های TWIN را مستقیماً در سیلیکون پردازش می‌کند",
        "تبادل‌های پرتکرار (>۱۰,۰۰۰/ثانیه) با سرعت سخت‌افزاری مدیریت می‌شوند",
      ],
      tags: ["معماری پیام", "PICAPD", "تناظر کدعمل", "شتاب‌دهنده سخت‌افزاری", "گواهینامه CSS"],
    },
  },
  {
    id: 17, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(17),
    en: {
      title: "MessageBus — Publish-Subscribe Backbone and Delivery Guarantees",
      narrative: "MessageBus is TWIN's central communication infrastructure, implementing a publish-subscribe pattern with three delivery guarantees: at-most-once (for best-effort events), at-least-once (for mission-critical commands with WAL-backed retry), and exactly-once (for safety-critical commands with BFT consensus confirmation). The bus maintains a topic registry where agents declare their publication and subscription interests, enabling the bus to route messages without requiring agents to know each other's identities.",
      strategic: "The exactly-once delivery guarantee for safety-critical commands is implemented through BFT consensus — the same consensus mechanism used for agent state transitions and trust score updates. This means that the MessageBus's delivery guarantee is not a software protocol on top of EPU — it is a property of the EPU's Queen Bee BFT silicon. The delivery guarantee is therefore as strong as EPU's hardware fault tolerance.",
      keyPoints: [
        "Three delivery guarantees: at-most-once, at-least-once (WAL retry), exactly-once (BFT consensus)",
        "Topic registry: agents declare publication/subscription interests — anonymous routing",
        "Exactly-once for safety-critical commands implemented through Queen Bee BFT silicon",
        "Delivery guarantee strength equals EPU hardware fault tolerance — not a software protocol",
      ],
      tags: ["MessageBus", "Publish-Subscribe", "Delivery Guarantees", "BFT Consensus", "Queen Bee"],
    },
    fa: {
      title: "گذرگاه پیام — ستون فقرات انتشار-اشتراک و تضمین‌های رسانش",
      narrative: "MessageBus زیرساخت ارتباطی مرکزی TWIN است که یک الگوی انتشار-اشتراک با سه تضمین رسانش پیاده‌سازی می‌کند: حداکثر یک‌بار (برای رویدادهای بهترین تلاش)، حداقل یک‌بار (برای دستورات حیاتی مأموریت با تلاش مجدد پشتیبانی‌شده WAL)، و دقیقاً یک‌بار (برای دستورات حیاتی ایمنی با تأیید اجماع BFT).",
      strategic: "تضمین رسانش دقیقاً یک‌بار برای دستورات حیاتی ایمنی از طریق اجماع BFT پیاده‌سازی می‌شود — همان مکانیزم اجماع مورد استفاده برای گذارهای حالت کارگزار و به‌روزرسانی‌های امتیاز اعتماد. این به این معناست که تضمین رسانش MessageBus یک ویژگی سیلیکون Queen Bee BFT EPU است.",
      keyPoints: [
        "سه تضمین رسانش: حداکثر یک‌بار، حداقل یک‌بار (تلاش مجدد WAL)، دقیقاً یک‌بار (اجماع BFT)",
        "رجیستری موضوع: کارگزاران علایق انتشار/اشتراک را اعلام می‌کنند — مسیریابی ناشناس",
        "دقیقاً یک‌بار برای دستورات حیاتی ایمنی از طریق سیلیکون Queen Bee BFT پیاده‌سازی می‌شود",
        "قدرت تضمین رسانش برابر با تاب‌آوری خطای سخت‌افزاری EPU است",
      ],
      tags: ["گذرگاه پیام", "انتشار-اشتراک", "تضمین‌های رسانش", "اجماع BFT", "Queen Bee"],
    },
  },
  {
    id: 18, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(18),
    en: {
      title: "TrustedMessageBus — Security-Augmented Routing and Trust-Gated Delivery",
      narrative: "TrustedMessageBus extends MessageBus with trust-gated delivery: every message is checked against the sender's current trust score before routing. Messages from agents with trust scores below the topic's minimum threshold are quarantined rather than delivered. The quarantine log is maintained in WAL and reviewed by ObserverAgent. TrustedMessageBus also enforces privilege-based topic access: safety-critical topics are only accessible to agents in the appropriate PICAPD privilege ring.",
      strategic: "Trust-gated delivery is the mechanism that prevents a compromised or malfunctioning agent from disrupting the broader system through message injection. In a Byzantine fault model, a faulty agent may send malformed or malicious messages. TrustedMessageBus ensures that such messages are quarantined before they can affect other agents' state, containing the fault at the communication layer rather than allowing it to propagate through the system.",
      keyPoints: [
        "Trust-gated delivery: messages checked against sender's trust score before routing",
        "Below-threshold messages quarantined — quarantine log maintained in WAL",
        "Privilege-based topic access: safety-critical topics restricted to appropriate PICAPD ring",
        "Fault containment at communication layer — prevents Byzantine agent from disrupting system via message injection",
      ],
      tags: ["TrustedMessageBus", "Trust-Gated Delivery", "Quarantine", "Byzantine Fault", "PICAPD"],
    },
    fa: {
      title: "گذرگاه پیام امن — مسیریابی امنیت‌افزوده و رسانش دروازه‌بانی‌شده",
      narrative: "TrustedMessageBus با رسانش دروازه‌بانی‌شده اعتماد، MessageBus را گسترش می‌دهد: هر پیام قبل از مسیریابی در برابر امتیاز اعتماد فعلی فرستنده بررسی می‌شود. پیام‌های کارگزارانی که امتیاز اعتمادشان زیر حداقل آستانه موضوع است، به‌جای رسانش قرنطینه می‌شوند.",
      strategic: "رسانش دروازه‌بانی‌شده اعتماد مکانیزمی است که از مختل کردن سیستم گسترده‌تر توسط یک کارگزار به خطر افتاده یا معیوب از طریق تزریق پیام جلوگیری می‌کند. TrustedMessageBus اطمینان می‌دهد که چنین پیام‌هایی قبل از اینکه بتوانند حالت سایر کارگزاران را تحت تأثیر قرار دهند قرنطینه می‌شوند.",
      keyPoints: [
        "رسانش دروازه‌بانی‌شده اعتماد: پیام‌ها قبل از مسیریابی در برابر امتیاز اعتماد فرستنده بررسی می‌شوند",
        "پیام‌های زیر آستانه قرنطینه می‌شوند — گزارش قرنطینه در WAL نگهداری می‌شود",
        "دسترسی موضوع مبتنی بر امتیاز: موضوعات حیاتی ایمنی محدود به حلقه PICAPD مناسب",
        "مهارسازی خطا در لایه ارتباط — از مختل کردن سیستم توسط کارگزار بیزانسی از طریق تزریق پیام جلوگیری می‌کند",
      ],
      tags: ["TrustedMessageBus", "رسانش دروازه‌بانی‌شده", "قرنطینه", "خطای بیزانسی", "PICAPD"],
    },
  },
  {
    id: 19, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(19),
    en: {
      title: "MessageHandler Interface — Processing Contract and CSS Alignment",
      narrative: "MessageHandler is the interface that every TWIN agent implements to receive messages. It defines a single method: handle(message: Message): TaskResult. The contract requires that handle() is idempotent (calling it twice with the same message produces the same result), bounded (it completes within its declared WCET), and CSS-compliant (the TaskResult carries a postcondition certificate). These three requirements align with EPU's PDC computation model.",
      strategic: "The idempotency requirement is critical for exactly-once delivery semantics. When the MessageBus retries a delivery (due to network partition or agent restart), it may deliver the same message multiple times. Idempotent handlers ensure that duplicate deliveries are harmless — the second delivery produces the same result as the first without side effects. This property is verified by the ObserverAgent through WAL replay analysis.",
      keyPoints: [
        "Single method contract: handle(message) → TaskResult with idempotency, WCET bound, CSS compliance",
        "Idempotency: duplicate deliveries harmless — same message produces same result without side effects",
        "WCET bound: handler must complete within declared time budget or trigger CSS postcondition failure",
        "Verified by ObserverAgent through WAL replay analysis — idempotency is testable, not assumed",
      ],
      tags: ["MessageHandler", "Idempotency", "WCET", "CSS Compliance", "WAL Replay"],
    },
    fa: {
      title: "رابط پردازش پیام — قرارداد پردازش و هم‌ترازی با CSS",
      narrative: "MessageHandler رابطی است که هر کارگزار TWIN برای دریافت پیام‌ها پیاده‌سازی می‌کند. یک متد واحد تعریف می‌کند: handle(message: Message): TaskResult. قرارداد نیاز دارد که handle() ایدمپوتنت باشد (فراخوانی دوبار با همان پیام همان نتیجه را تولید می‌کند)، کران‌بند باشد (در WCET اعلام‌شده‌اش کامل می‌شود)، و سازگار با CSS باشد.",
      strategic: "نیاز به ایدمپوتنسی برای معناشناسی رسانش دقیقاً یک‌بار حیاتی است. هنگامی که MessageBus یک رسانش را دوباره امتحان می‌کند، ممکن است همان پیام را چندین بار رسانش کند. پردازشگرهای ایدمپوتنت اطمینان می‌دهند که رسانش‌های تکراری بی‌ضرر هستند.",
      keyPoints: [
        "قرارداد متد واحد: handle(message) → TaskResult با ایدمپوتنسی، کران WCET، سازگاری CSS",
        "ایدمپوتنسی: رسانش‌های تکراری بی‌ضرر — همان پیام همان نتیجه را بدون عوارض جانبی تولید می‌کند",
        "کران WCET: پردازشگر باید در بودجه زمانی اعلام‌شده کامل شود یا شکست پس‌شرط CSS را فعال کند",
        "توسط ObserverAgent از طریق تحلیل بازپخش WAL تأیید می‌شود",
      ],
      tags: ["MessageHandler", "ایدمپوتنسی", "WCET", "سازگاری CSS", "بازپخش WAL"],
    },
  },
  {
    id: 20, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(20),
    en: {
      title: "EventBus — System-Wide Event Distribution and IRQ Fabric Alignment",
      narrative: "EventBus handles system-wide event distribution in TWIN, operating independently from MessageBus. Where MessageBus routes targeted messages between specific agents, EventBus broadcasts events to all subscribers without sender-receiver coupling. EventBus events are classified by severity: INFO (no action required), WARNING (agent should log and monitor), CRITICAL (agent must respond within WCET), and EMERGENCY (system-wide safe-state assertion required).",
      strategic: "The EMERGENCY severity level in EventBus maps directly onto EPU's safe-state assertion mechanism. When an EMERGENCY event is published, all agents must immediately transition to their safe state — the same transition that EPU hardware performs when a PDC invariant violation is detected. This alignment means that software-detected emergencies and hardware-detected emergencies produce the same system response, ensuring consistent behavior regardless of where the fault originates.",
      keyPoints: [
        "System-wide broadcast without sender-receiver coupling — independent from MessageBus",
        "Four severity levels: INFO, WARNING, CRITICAL (WCET-bounded response), EMERGENCY (safe-state assertion)",
        "EMERGENCY maps to EPU safe-state assertion — same system response for software and hardware emergencies",
        "Consistent fault response regardless of fault origin: software agent or EPU hardware",
      ],
      tags: ["EventBus", "Event Distribution", "IRQ Fabric", "Safe-State", "Emergency Response"],
    },
    fa: {
      title: "گذرگاه رویداد — توزیع رویداد سراسری و هم‌ترازی با بافت وقفه",
      narrative: "EventBus توزیع رویداد سراسری را در TWIN مدیریت می‌کند و مستقل از MessageBus عمل می‌کند. رویدادهای EventBus بر اساس شدت طبقه‌بندی می‌شوند: INFO (هیچ اقدامی لازم نیست)، WARNING (کارگزار باید ثبت و نظارت کند)، CRITICAL (کارگزار باید در WCET پاسخ دهد)، و EMERGENCY (اثبات حالت ایمن سراسری سیستم مورد نیاز است).",
      strategic: "سطح شدت EMERGENCY در EventBus مستقیماً بر مکانیزم اثبات حالت ایمن EPU نگاشته می‌شود. هنگامی که یک رویداد EMERGENCY منتشر می‌شود، همه کارگزاران باید فوراً به حالت ایمن‌شان منتقل شوند — همان انتقالی که سخت‌افزار EPU هنگام تشخیص نقض ثابت PDC انجام می‌دهد.",
      keyPoints: [
        "پخش سراسری بدون اتصال فرستنده-گیرنده — مستقل از MessageBus",
        "چهار سطح شدت: INFO، WARNING، CRITICAL (پاسخ کران‌بند WCET)، EMERGENCY (اثبات حالت ایمن)",
        "EMERGENCY بر اثبات حالت ایمن EPU نگاشته می‌شود — همان پاسخ سیستم برای اضطراری‌های نرم‌افزاری و سخت‌افزاری",
        "پاسخ خطای سازگار صرف نظر از منشأ خطا: کارگزار نرم‌افزاری یا سخت‌افزار EPU",
      ],
      tags: ["گذرگاه رویداد", "توزیع رویداد", "بافت وقفه", "حالت ایمن", "پاسخ اضطراری"],
    },
  },
  {
    id: 21, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(21),
    en: {
      title: "AgentEvent — Typed Event Taxonomy and ASIL-D Safety Classification",
      narrative: "AgentEvent defines the typed event vocabulary for TWIN's EventBus. Each event type carries: a category (lifecycle, performance, trust, security, or system), a severity level, a payload schema, and an ASIL classification. The ASIL classification determines the handling requirements: ASIL-D events must be handled within 0.8ms (EPU's temporal contract), ASIL-B within 5ms, and QM events are best-effort. The typed taxonomy enables static analysis of event handling completeness.",
      strategic: "The typed event taxonomy enables a capability critical for ASIL-D certification: static proof that every safety-relevant event has a handler with the required response time. By declaring event types and their ASIL classifications at compile time, TWIN enables tools to verify that no ASIL-D event is handled by a QM handler, and that every ASIL-D handler declares a WCET within 0.8ms. This static verification reduces certification effort significantly.",
      keyPoints: [
        "Typed event vocabulary: category, severity, payload schema, ASIL classification",
        "ASIL-D events: 0.8ms response (EPU temporal contract); ASIL-B: 5ms; QM: best-effort",
        "Static analysis of event handling completeness — no ASIL-D event can have QM handler",
        "Compile-time ASIL classification enables static WCET verification — reduces certification effort",
      ],
      tags: ["AgentEvent", "Event Taxonomy", "ASIL Classification", "Static Verification", "WCET"],
    },
    fa: {
      title: "رویداد عامل — رده‌بندی رویداد با نوع‌بندی و دسته‌بندی ایمنی ASIL-D",
      narrative: "AgentEvent واژگان رویداد نوع‌بندی‌شده برای EventBus TWIN را تعریف می‌کند. هر نوع رویداد حمل می‌کند: یک دسته (چرخه عمر، عملکرد، اعتماد، امنیت، یا سیستم)، یک سطح شدت، یک طرح‌واره بار داده، و یک طبقه‌بندی ASIL. طبقه‌بندی ASIL نیازمندی‌های مدیریت را تعیین می‌کند.",
      strategic: "واژگان رویداد نوع‌بندی‌شده یک قابلیت حیاتی برای گواهینامه ASIL-D را فعال می‌کند: اثبات استاتیک که هر رویداد مرتبط با ایمنی یک پردازشگر با زمان پاسخ مورد نیاز دارد. با اعلام انواع رویداد و طبقه‌بندی‌های ASIL‌شان در زمان کامپایل، TWIN ابزارها را قادر می‌سازد تأیید کنند که هیچ رویداد ASIL-D توسط یک پردازشگر QM مدیریت نمی‌شود.",
      keyPoints: [
        "واژگان رویداد نوع‌بندی‌شده: دسته، شدت، طرح‌واره بار داده، طبقه‌بندی ASIL",
        "رویدادهای ASIL-D: پاسخ ۰.۸ میلی‌ثانیه (قرارداد زمانی EPU)؛ ASIL-B: ۵ میلی‌ثانیه؛ QM: بهترین تلاش",
        "تحلیل استاتیک کامل بودن مدیریت رویداد — هیچ رویداد ASIL-D نمی‌تواند پردازشگر QM داشته باشد",
        "طبقه‌بندی ASIL زمان کامپایل تأیید WCET استاتیک را فعال می‌کند — تلاش گواهینامه را کاهش می‌دهد",
      ],
      tags: ["رویداد عامل", "رده‌بندی رویداد", "طبقه‌بندی ASIL", "تأیید استاتیک", "WCET"],
    },
  },
  {
    id: 22, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(22),
    en: {
      title: "SharedContext — Distributed State Consistency and WAL Coherence",
      narrative: "SharedContext provides a distributed key-value store accessible to all agents in a TWIN deployment, with strong consistency guarantees backed by WAL. Every write to SharedContext is a WAL transaction: it is first written to the WAL, then applied to the in-memory state, then acknowledged to the writer. Reads always return the most recently committed value. SharedContext partitions its key space by privilege level, ensuring that agents can only read and write keys in their authorized partition.",
      strategic: "SharedContext is the software analog of EPU's shared register file — the set of registers that all BEUs can read and write. Just as EPU's register file provides a consistent view of computational state across all BEUs, SharedContext provides a consistent view of agent state across all TWIN agents. The WAL-backed consistency guarantee means that SharedContext state survives agent restarts and EPU power cycles, enabling seamless recovery.",
      keyPoints: [
        "Distributed key-value store with WAL-backed strong consistency — every write is a WAL transaction",
        "Read-your-writes consistency: reads always return most recently committed value",
        "Key space partitioned by privilege level — agents can only access authorized partition",
        "Software analog of EPU shared register file — consistent state view across all BEUs and agents",
      ],
      tags: ["SharedContext", "Distributed State", "WAL Coherence", "Consistency", "Register File"],
    },
    fa: {
      title: "زمینه مشترک — سازگاری حالت توزیع‌شده و انسجام WAL",
      narrative: "SharedContext یک ذخیره کلید-مقدار توزیع‌شده قابل دسترس برای همه کارگزاران در یک استقرار TWIN فراهم می‌کند، با تضمین‌های سازگاری قوی پشتیبانی‌شده توسط WAL. هر نوشتن به SharedContext یک تراکنش WAL است: ابتدا به WAL نوشته می‌شود، سپس به حالت درون‌حافظه‌ای اعمال می‌شود، سپس به نویسنده تأیید می‌شود.",
      strategic: "SharedContext همتای نرم‌افزاری پرونده ثبات مشترک EPU است — مجموعه ثبات‌هایی که همه BEUها می‌توانند بخوانند و بنویسند. درست مانند اینکه پرونده ثبات EPU یک دید سازگار از حالت محاسباتی در همه BEUها فراهم می‌کند، SharedContext یک دید سازگار از حالت کارگزار در همه کارگزاران TWIN فراهم می‌کند.",
      keyPoints: [
        "ذخیره کلید-مقدار توزیع‌شده با سازگاری قوی پشتیبانی‌شده WAL — هر نوشتن یک تراکنش WAL است",
        "سازگاری خواندن-نوشتن: خواندن‌ها همیشه آخرین مقدار ثبت‌شده را برمی‌گردانند",
        "فضای کلید تقسیم‌بندی‌شده بر اساس سطح امتیاز — کارگزاران فقط می‌توانند به پارتیشن مجاز دسترسی داشته باشند",
        "همتای نرم‌افزاری پرونده ثبات مشترک EPU — دید حالت سازگار در همه BEUها و کارگزاران",
      ],
      tags: ["زمینه مشترک", "حالت توزیع‌شده", "انسجام WAL", "سازگاری", "پرونده ثبات"],
    },
  },
  {
    id: 23, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(23),
    en: {
      title: "Communication Security — End-to-End Integrity and Landauer-Bound Authentication",
      narrative: "Every message in TWIN's communication layer is protected by three security mechanisms: message authentication codes (MAC) using HMAC-SHA256, sequence numbers to prevent replay attacks, and timestamp validation to prevent delayed delivery attacks. The authentication overhead is bounded by Landauer's principle: the minimum energy cost of authentication is kT·ln(2) per bit verified, setting a physical lower bound on authentication latency that TWIN's implementation approaches within 2×.",
      strategic: "The Landauer-bound authentication design is significant for ASIL-D certification: it demonstrates that TWIN's security overhead is not an arbitrary implementation choice but a physical necessity. This argument is valuable in certification discussions where safety engineers question whether security mechanisms introduce unacceptable latency. TWIN can demonstrate that its authentication latency is within 2× of the physical minimum — no implementation can do better.",
      keyPoints: [
        "Three security mechanisms: HMAC-SHA256 MAC, sequence numbers (replay prevention), timestamp validation",
        "Authentication overhead bounded by Landauer's principle: kT·ln(2) per bit verified",
        "Implementation within 2× of physical minimum — no implementation can do better",
        "Landauer bound argument valuable for ASIL-D certification: security overhead is physical necessity, not choice",
      ],
      tags: ["Communication Security", "Landauer Bound", "HMAC-SHA256", "Replay Prevention", "ASIL-D"],
    },
    fa: {
      title: "امنیت ارتباط — یکپارچگی سرتاسری و احراز هویت کران‌بند Landauer",
      narrative: "هر پیام در لایه ارتباطی TWIN توسط سه مکانیزم امنیتی محافظت می‌شود: کدهای احراز هویت پیام (MAC) با استفاده از HMAC-SHA256، شماره‌های توالی برای جلوگیری از حملات بازپخش، و اعتبارسنجی مهر زمانی برای جلوگیری از حملات رسانش تأخیری. سربار احراز هویت توسط اصل Landauer کران‌بند شده است.",
      strategic: "طراحی احراز هویت کران‌بند Landauer برای گواهینامه ASIL-D مهم است: نشان می‌دهد که سربار امنیتی TWIN یک انتخاب پیاده‌سازی دلخواه نیست بلکه یک ضرورت فیزیکی است. TWIN می‌تواند نشان دهد که تأخیر احراز هویتش در ۲× حداقل فیزیکی است — هیچ پیاده‌سازی‌ای نمی‌تواند بهتر عمل کند.",
      keyPoints: [
        "سه مکانیزم امنیتی: MAC HMAC-SHA256، شماره‌های توالی (پیشگیری از بازپخش)، اعتبارسنجی مهر زمانی",
        "سربار احراز هویت کران‌بند توسط اصل Landauer: kT·ln(2) به ازای هر بیت تأیید‌شده",
        "پیاده‌سازی در ۲× حداقل فیزیکی — هیچ پیاده‌سازی‌ای نمی‌تواند بهتر عمل کند",
        "استدلال کران Landauer برای گواهینامه ASIL-D ارزشمند است: سربار امنیتی ضرورت فیزیکی است، نه انتخاب",
      ],
      tags: ["امنیت ارتباط", "کران Landauer", "HMAC-SHA256", "پیشگیری از بازپخش", "ASIL-D"],
    },
  },
  {
    id: 24, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(24),
    en: {
      title: "Message Serialization — Protocol Efficiency and 89.7:1 Compression Alignment",
      narrative: "TWIN's message serialization protocol uses a binary format optimized for EPU's memory bus width (256-bit). Messages are serialized into fixed-size frames that align with EPU's cache line size (64 bytes), eliminating partial cache line reads. For large payloads, TWIN applies the same moment-based compression used by EPU's PBE solver: the payload is represented as a set of statistical moments rather than raw data, achieving compression ratios up to 89.7:1 for smooth physical signals.",
      strategic: "The 89.7:1 compression ratio for physical signals is not a general-purpose compression achievement — it is specific to signals that satisfy the Population Balance Equation's smoothness constraints. TWIN's message serialization exploits this domain-specific property: when agents exchange physical sensor data or actuator commands, the moment-based representation reduces bandwidth by 89.7× while preserving all information relevant to EPU's physics-grounded computation.",
      keyPoints: [
        "Binary format aligned with EPU 256-bit memory bus and 64-byte cache line — no partial cache line reads",
        "Moment-based compression for physical signals: up to 89.7:1 ratio",
        "Compression applies to PBE-smooth signals: sensor data, actuator commands, physics state",
        "89.7× bandwidth reduction while preserving all information relevant to EPU physics computation",
      ],
      tags: ["Message Serialization", "Compression", "89.7:1", "Cache Line", "PBE"],
    },
    fa: {
      title: "ترتیب‌سازی پیام — کارایی پروتکل و هم‌ترازی با فشرده‌سازی ۸۹.۷:۱",
      narrative: "پروتکل ترتیب‌سازی پیام TWIN از یک قالب باینری بهینه‌شده برای پهنای باند حافظه EPU (۲۵۶ بیت) استفاده می‌کند. پیام‌ها در قاب‌های اندازه ثابت که با اندازه خط نهان‌گاه EPU (۶۴ بایت) هم‌ترازی دارند ترتیب‌سازی می‌شوند. برای بارهای داده بزرگ، TWIN همان فشرده‌سازی گشتاورمحور مورد استفاده توسط حل‌کننده PBE EPU را اعمال می‌کند.",
      strategic: "نسبت فشرده‌سازی ۸۹.۷:۱ برای سیگنال‌های فیزیکی یک دستاورد فشرده‌سازی عمومی نیست — خاص سیگنال‌هایی است که قیود هموار معادله تعادل جمعیت را برآورده می‌کنند. ترتیب‌سازی پیام TWIN از این ویژگی قلمروخاص بهره‌برداری می‌کند.",
      keyPoints: [
        "قالب باینری هم‌ترازی‌شده با گذرگاه حافظه ۲۵۶ بیتی EPU و خط نهان‌گاه ۶۴ بایتی — بدون خواندن خط نهان‌گاه جزئی",
        "فشرده‌سازی گشتاورمحور برای سیگنال‌های فیزیکی: تا نسبت ۸۹.۷:۱",
        "فشرده‌سازی برای سیگنال‌های هموار PBE اعمال می‌شود: داده حسگر، دستورات عملگر، حالت فیزیکی",
        "کاهش پهنای باند ۸۹.۷× در حالی که همه اطلاعات مرتبط با محاسبه فیزیکی EPU را حفظ می‌کند",
      ],
      tags: ["ترتیب‌سازی پیام", "فشرده‌سازی", "۸۹.۷:۱", "خط نهان‌گاه", "PBE"],
    },
  },
  {
    id: 25, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(25),
    en: {
      title: "Event-Driven vs. Polling — Latency Analysis and Sub-Millisecond Bounds",
      narrative: "TWIN's communication architecture is exclusively event-driven — polling is prohibited for safety-critical message handling. The latency analysis demonstrates why: polling at 1kHz introduces up to 1ms of detection latency, which violates EPU's 0.8ms temporal contract. Event-driven handling, implemented through EPU's interrupt fabric, achieves detection latency of <50μs — 20× better than the best achievable polling rate. The 50μs bound is derived from EPU's IRQ latency specification.",
      strategic: "The prohibition of polling for safety-critical handling is an architectural constraint that simplifies ASIL-D certification. Polling-based systems require complex worst-case analysis of polling intervals, jitter, and priority inversion. Event-driven systems with EPU IRQ backing have deterministic latency bounds that can be formally proven. TWIN's exclusive event-driven architecture reduces the certification analysis surface by eliminating the polling worst-case analysis entirely.",
      keyPoints: [
        "Polling prohibited for safety-critical handling — event-driven only",
        "Polling at 1kHz: up to 1ms detection latency — violates EPU 0.8ms temporal contract",
        "Event-driven with EPU IRQ: <50μs detection latency — 20× better than best polling rate",
        "Exclusive event-driven architecture reduces ASIL-D certification analysis surface",
      ],
      tags: ["Event-Driven", "Polling", "Latency Analysis", "IRQ", "Temporal Contract"],
    },
    fa: {
      title: "رویدادمحور در برابر نظرسنجی دوره‌ای — تحلیل تأخیر و کران‌های زیرمیلی‌ثانیه",
      narrative: "معماری ارتباطی TWIN منحصراً رویدادمحور است — نظرسنجی دوره‌ای برای مدیریت پیام حیاتی ایمنی ممنوع است. تحلیل تأخیر نشان می‌دهد چرا: نظرسنجی دوره‌ای با ۱ کیلوهرتز تا ۱ میلی‌ثانیه تأخیر تشخیص معرفی می‌کند که قرارداد زمانی ۰.۸ میلی‌ثانیه EPU را نقض می‌کند.",
      strategic: "ممنوعیت نظرسنجی دوره‌ای برای مدیریت حیاتی ایمنی یک قید معماری است که گواهینامه ASIL-D را ساده می‌کند. سیستم‌های رویدادمحور با پشتیبانی IRQ EPU دارای کران‌های تأخیر قطعی هستند که می‌توانند به طور رسمی اثبات شوند.",
      keyPoints: [
        "نظرسنجی دوره‌ای برای مدیریت حیاتی ایمنی ممنوع است — فقط رویدادمحور",
        "نظرسنجی دوره‌ای با ۱ کیلوهرتز: تا ۱ میلی‌ثانیه تأخیر تشخیص — قرارداد زمانی ۰.۸ میلی‌ثانیه EPU را نقض می‌کند",
        "رویدادمحور با IRQ EPU: تأخیر تشخیص <۵۰ میکروثانیه — ۲۰× بهتر از بهترین نرخ نظرسنجی دوره‌ای",
        "معماری رویدادمحور انحصاری سطح تحلیل گواهینامه ASIL-D را کاهش می‌دهد",
      ],
      tags: ["رویدادمحور", "نظرسنجی دوره‌ای", "تحلیل تأخیر", "IRQ", "قرارداد زمانی"],
    },
  },
  {
    id: 26, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(26),
    en: {
      title: "Communication Fault Tolerance — Retry, Fallback, and Queen Bee BFT Alignment",
      narrative: "TWIN's communication layer implements a three-tier fault tolerance strategy: retry (for transient failures, with exponential backoff bounded by WCET), fallback (for persistent failures, routing to a backup agent with equivalent capability), and degraded mode (when no fallback is available, the system continues with reduced functionality rather than failing completely). All fault tolerance decisions are recorded in WAL and subject to Queen Bee BFT consensus.",
      strategic: "The three-tier fault tolerance strategy maps onto EPU's hardware redundancy architecture: retry corresponds to EPU's error correction codes (ECC), fallback corresponds to EPU's redundant BEU arrays, and degraded mode corresponds to EPU's safe-state assertion. This alignment means that TWIN's software fault tolerance and EPU's hardware fault tolerance are structurally consistent — they handle the same fault classes with the same strategies at different layers.",
      keyPoints: [
        "Three-tier strategy: retry (ECC analog), fallback (redundant BEU analog), degraded mode (safe-state analog)",
        "Retry: exponential backoff bounded by WCET — no retry can violate temporal contract",
        "Fallback: routing to backup agent with equivalent capability — capability equivalence verified by BFT",
        "All fault tolerance decisions in WAL — Queen Bee BFT consensus required for fallback activation",
      ],
      tags: ["Fault Tolerance", "Retry", "Fallback", "Degraded Mode", "Queen Bee BFT"],
    },
    fa: {
      title: "تاب‌آوری ارتباط — تلاش مجدد، مسیر پشتیبان و هم‌ترازی با BFT Queen Bee",
      narrative: "لایه ارتباطی TWIN یک راهبرد تاب‌آوری سه‌لایه پیاده‌سازی می‌کند: تلاش مجدد (برای خرابی‌های گذرا، با عقب‌نشینی نمایی کران‌بند توسط WCET)، مسیر پشتیبان (برای خرابی‌های مداوم، مسیریابی به یک کارگزار پشتیبان با توانایی معادل)، و حالت تخریب‌یافته (هنگامی که هیچ مسیر پشتیبانی در دسترس نیست).",
      strategic: "راهبرد تاب‌آوری سه‌لایه بر معماری افزونگی سخت‌افزاری EPU نگاشته می‌شود: تلاش مجدد با کدهای تصحیح خطای EPU مطابقت دارد، مسیر پشتیبان با آرایه‌های BEU افزونه EPU، و حالت تخریب‌یافته با اثبات حالت ایمن EPU.",
      keyPoints: [
        "راهبرد سه‌لایه: تلاش مجدد (همتای ECC)، مسیر پشتیبان (همتای BEU افزونه)، حالت تخریب‌یافته (همتای حالت ایمن)",
        "تلاش مجدد: عقب‌نشینی نمایی کران‌بند توسط WCET — هیچ تلاش مجددی نمی‌تواند قرارداد زمانی را نقض کند",
        "مسیر پشتیبان: مسیریابی به کارگزار پشتیبان با توانایی معادل — معادل توانایی توسط BFT تأیید می‌شود",
        "همه تصمیمات تاب‌آوری در WAL — اجماع BFT Queen Bee برای فعال‌سازی مسیر پشتیبان مورد نیاز است",
      ],
      tags: ["تاب‌آوری", "تلاش مجدد", "مسیر پشتیبان", "حالت تخریب‌یافته", "BFT Queen Bee"],
    },
  },
  {
    id: 27, act: "Communication", actLabel: ACT_LABELS_D.Communication, imageUrl: imgD(27),
    en: {
      title: "Communication Layer Synthesis — Full Message Flow on EPU Microarchitecture",
      narrative: "The twelve slides of Act II establish the complete communication layer: a typed message architecture with hardware opcode correspondence, a publish-subscribe bus with BFT-backed delivery guarantees, a trusted bus with trust-gated routing, an event system with ASIL-classified severity levels, a shared context with WAL coherence, and security mechanisms bounded by Landauer's principle. Every component has a direct mapping to EPU microarchitecture elements.",
      strategic: "The communication layer is the connective tissue of the TWIN-EPU integration. It enables agents to coordinate without shared memory (using message passing), to maintain consistent state without central coordination (using WAL-backed SharedContext), and to respond to emergencies with hardware-speed latency (using EPU IRQ fabric). The synthesis of these capabilities produces a communication infrastructure that is simultaneously safe, secure, and performant — a combination that no existing autonomous driving communication framework achieves.",
      keyPoints: [
        "Complete layer: typed messages, BFT bus, trusted routing, ASIL events, WAL context, Landauer security",
        "Every component maps to EPU microarchitecture: opcodes, IRQ fabric, BFT silicon, WAL, cache",
        "Enables: coordination without shared memory, consistent state without central coordinator, hardware-speed emergency response",
        "Safe + secure + performant simultaneously — no existing AV communication framework achieves this combination",
      ],
      tags: ["Communication Synthesis", "EPU Microarchitecture", "Full Message Flow", "Integration", "AV Framework"],
    },
    fa: {
      title: "برآیند لایه ارتباط — جریان کامل پیام بر ریزمعماری EPU",
      narrative: "دوازده اسلاید پرده دوم لایه ارتباطی کامل را برقرار می‌کنند: یک معماری پیام نوع‌بندی‌شده با تناظر کدعمل سخت‌افزاری، یک گذرگاه انتشار-اشتراک با تضمین‌های رسانش پشتیبانی‌شده BFT، یک گذرگاه امن با مسیریابی دروازه‌بانی‌شده اعتماد، یک سیستم رویداد با سطوح شدت طبقه‌بندی‌شده ASIL، یک زمینه مشترک با انسجام WAL، و مکانیزم‌های امنیتی کران‌بند توسط اصل Landauer. هر مؤلفه یک نگاشت مستقیم به عناصر ریزمعماری EPU دارد.",
      strategic: "لایه ارتباطی بافت پیوندی یکپارچه‌سازی TWIN-EPU است. به کارگزاران امکان می‌دهد بدون حافظه مشترک هماهنگ شوند، حالت سازگار را بدون هماهنگ‌ساز مرکزی حفظ کنند، و با تأخیر سرعت سخت‌افزاری به اضطراری‌ها پاسخ دهند. ترکیب این قابلیت‌ها یک زیرساخت ارتباطی تولید می‌کند که همزمان ایمن، امن و کارآمد است.",
      keyPoints: [
        "لایه کامل: پیام‌های نوع‌بندی‌شده، گذرگاه BFT، مسیریابی امن، رویدادهای ASIL، زمینه WAL، امنیت Landauer",
        "هر مؤلفه به ریزمعماری EPU نگاشته می‌شود: کدعمل‌ها، بافت IRQ، سیلیکون BFT، WAL، نهان‌گاه",
        "فعال می‌کند: هماهنگی بدون حافظه مشترک، حالت سازگار بدون هماهنگ‌ساز مرکزی، پاسخ اضطراری سرعت سخت‌افزاری",
        "ایمن + امن + کارآمد به‌طور همزمان — هیچ چارچوب ارتباطی AV موجودی این ترکیب را به دست نمی‌آورد",
      ],
      tags: ["برآیند ارتباط", "ریزمعماری EPU", "جریان کامل پیام", "یکپارچه‌سازی", "چارچوب AV"],
    },
  },
  // ── ACT III: TRUST & CONSENSUS (slides 28-45) ──────────────────────────────
  {
    id: 28, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(28),
    en: {
      title: "Byzantine Fault Tolerance — Formal Safety Guarantees for Agent Consensus",
      narrative: "ByzantineFaultTolerance implements the core consensus algorithm that enables TWIN's agent network to reach agreement even when up to f agents are Byzantine (arbitrarily faulty or malicious). The algorithm requires 3f+1 total agents to tolerate f Byzantine faults. For EPU's safety-critical decisions, f=1 (one faulty agent tolerated), requiring a minimum of 4 agents per consensus group. The algorithm proceeds in three phases: pre-prepare, prepare, and commit.",
      strategic: "BFT consensus is the formal safety foundation that distinguishes TWIN from ad-hoc multi-agent systems. Without BFT, a single compromised or faulty agent can corrupt the entire decision-making process. With BFT, TWIN provides a mathematical guarantee: safety-critical decisions are correct as long as fewer than one-third of agents are Byzantine. This guarantee is essential for ISO 26262 ASIL-D certification.",
      keyPoints: [
        "3f+1 requirement: minimum 4 agents per consensus group for f=1 Byzantine fault tolerance",
        "Three-phase protocol: pre-prepare, prepare, commit phases ensure safety and liveness",
        "Mathematical guarantee: correct decisions with fewer than 1/3 Byzantine agents",
        "ASIL-D foundation: BFT provides the formal safety proof required for certification",
      ],
      tags: ["BFT", "Byzantine Fault Tolerance", "Consensus", "ASIL-D", "Formal Safety"],
    },
    fa: {
      title: "تحمل خطای بیزانسی — ضمانت‌های ایمنی رسمی برای اجماع کارگزاران",
      narrative: "ByzantineFaultTolerance الگوریتم اجماع اصلی را پیاده‌سازی می‌کند که شبکه کارگزار TWIN را قادر می‌سازد حتی زمانی که تا f کارگزار بیزانسی هستند به توافق برسد. الگوریتم به 3f+1 کارگزار کل نیاز دارد. برای تصمیمات ایمنی‌بحرانی EPU، f=1 است که حداقل ۴ کارگزار در هر گروه اجماع نیاز دارد.",
      strategic: "اجماع BFT پایه ایمنی رسمی است که TWIN را از سیستم‌های چندعاملی موقتی متمایز می‌کند. بدون BFT، یک کارگزار به خطر افتاده یا معیوب می‌تواند کل فرآیند تصمیم‌گیری را خراب کند. با BFT، TWIN یک ضمانت ریاضی ارائه می‌دهد: تصمیمات ایمنی‌بحرانی تا زمانی که کمتر از یک سوم کارگزاران بیزانسی باشند صحیح هستند.",
      keyPoints: [
        "الزام 3f+1: حداقل ۴ کارگزار در هر گروه اجماع برای تحمل خطای بیزانسی f=1",
        "پروتکل سه‌مرحله‌ای: مراحل پیش‌آماده‌سازی، آماده‌سازی، تعهد ایمنی و زندگی را تضمین می‌کنند",
        "ضمانت ریاضی: تصمیمات صحیح با کمتر از ۱/۳ کارگزار بیزانسی",
        "پایه ASIL-D: BFT اثبات ایمنی رسمی مورد نیاز برای صدور گواهینامه را فراهم می‌کند",
      ],
      tags: ["BFT", "تحمل خطای بیزانسی", "اجماع", "ASIL-D", "ایمنی رسمی"],
    },
  },
  {
    id: 29, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(29),
    en: {
      title: "Trust Scoring Engine — Continuous Reputation Tracking for Agent Reliability",
      narrative: "TrustScoringEngine implements continuous reputation tracking for every agent in the TWIN network. Trust scores are computed from three components: (1) behavioral history — track record of accurate predictions and safe actions; (2) consensus participation — consistency of votes with the eventual consensus outcome; (3) anomaly rate — frequency of outputs flagged by the anomaly detection system. Scores decay over time to ensure recent behavior dominates.",
      strategic: "Trust scoring is the dynamic safety mechanism that complements BFT's static guarantees. BFT guarantees safety when fewer than 1/3 of agents are Byzantine; trust scoring identifies which agents are approaching Byzantine behavior before they cross the threshold. By continuously monitoring agent reliability, TWIN can proactively isolate degrading agents before they compromise consensus, extending the effective safety margin beyond BFT's theoretical guarantee.",
      keyPoints: [
        "Three trust components: behavioral history, consensus participation, anomaly rate",
        "Time-decay weighting: recent behavior dominates historical record",
        "Proactive isolation: degrading agents identified before crossing Byzantine threshold",
        "Safety margin extension: trust scoring extends effective safety beyond BFT guarantee",
      ],
      tags: ["Trust Scoring", "Reputation", "Agent Reliability", "Anomaly Detection", "Safety Margin"],
    },
    fa: {
      title: "موتور امتیازدهی اعتماد — ردیابی شهرت پیوسته برای پایایی کارگزار",
      narrative: "TrustScoringEngine ردیابی شهرت پیوسته را برای هر کارگزار در شبکه TWIN پیاده‌سازی می‌کند. امتیازهای اعتماد از سه مؤلفه محاسبه می‌شوند: (۱) تاریخچه رفتاری؛ (۲) مشارکت در اجماع؛ (۳) نرخ ناهنجاری. امتیازها در طول زمان کاهش می‌یابند تا رفتار اخیر غالب باشد.",
      strategic: "امتیازدهی اعتماد مکانیزم ایمنی پویا است که ضمانت‌های ایستای BFT را تکمیل می‌کند. BFT ایمنی را زمانی که کمتر از ۱/۳ کارگزاران بیزانسی هستند تضمین می‌کند؛ امتیازدهی اعتماد شناسایی می‌کند کدام کارگزاران در حال نزدیک شدن به رفتار بیزانسی هستند قبل از اینکه از آستانه عبور کنند.",
      keyPoints: [
        "سه مؤلفه اعتماد: تاریخچه رفتاری، مشارکت در اجماع، نرخ ناهنجاری",
        "وزن‌دهی با کاهش زمانی: رفتار اخیر بر سابقه تاریخی غالب است",
        "انزوای پیش‌گیرانه: کارگزاران در حال تخریب قبل از عبور از آستانه بیزانسی شناسایی می‌شوند",
        "گسترش حاشیه ایمنی: امتیازدهی اعتماد ایمنی مؤثر را فراتر از ضمانت BFT گسترش می‌دهد",
      ],
      tags: ["امتیازدهی اعتماد", "شهرت", "پایایی کارگزار", "تشخیص ناهنجاری", "حاشیه ایمنی"],
    },
  },
  {
    id: 30, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(30),
    en: {
      title: "Consensus Protocol Variants — Optimistic Fast Path vs. Byzantine Fallback",
      narrative: "TWIN implements two consensus protocol variants to balance performance and safety. The optimistic fast path (2-phase) operates when all agents are behaving correctly — achieving consensus in 2 message rounds with O(n) message complexity. When the fast path fails (detected by timeout or inconsistent responses), the system falls back to the full BFT protocol (3-phase) with O(n²) message complexity. The fast path handles >99% of decisions in normal operation.",
      strategic: "The dual-protocol approach is the performance engineering solution that makes BFT practical for real-time automotive control. Pure BFT with O(n²) message complexity would exceed latency budgets for large agent networks. By using the fast path for normal operation and falling back to full BFT only when needed, TWIN achieves both the performance required for real-time control and the safety guarantees required for ASIL-D certification.",
      keyPoints: [
        "Fast path (2-phase): O(n) complexity, handles >99% of decisions in normal operation",
        "BFT fallback (3-phase): O(n²) complexity, activated when fast path fails",
        "Automatic switching: timeout and inconsistency detection triggers fallback",
        "Performance-safety balance: fast path performance with BFT safety guarantees",
      ],
      tags: ["Consensus Variants", "Fast Path", "BFT Fallback", "O(n) Complexity", "Real-Time Control"],
    },
    fa: {
      title: "انواع پروتکل اجماع — مسیر سریع خوش‌بینانه در مقابل بازگشت بیزانسی",
      narrative: "TWIN دو نوع پروتکل اجماع را برای تعادل عملکرد و ایمنی پیاده‌سازی می‌کند. مسیر سریع خوش‌بینانه (۲ مرحله) زمانی عمل می‌کند که همه کارگزاران به‌درستی رفتار می‌کنند — با پیچیدگی پیام O(n). وقتی مسیر سریع شکست می‌خورد، سیستم به پروتکل BFT کامل (۳ مرحله) با پیچیدگی O(n²) بازمی‌گردد.",
      strategic: "رویکرد دو-پروتکلی راه‌حل مهندسی عملکرد است که BFT را برای کنترل خودرویی بلادرنگ عملی می‌کند. BFT خالص با پیچیدگی O(n²) از بودجه‌های تأخیر برای شبکه‌های کارگزار بزرگ تجاوز می‌کند. با استفاده از مسیر سریع برای عملیات عادی و بازگشت به BFT کامل فقط در صورت نیاز، TWIN هم عملکرد مورد نیاز برای کنترل بلادرنگ و هم ضمانت‌های ایمنی ASIL-D را به دست می‌آورد.",
      keyPoints: [
        "مسیر سریع (۲ مرحله): پیچیدگی O(n)، بیش از ۹۹٪ تصمیمات در عملیات عادی را مدیریت می‌کند",
        "بازگشت BFT (۳ مرحله): پیچیدگی O(n²)، زمانی فعال می‌شود که مسیر سریع شکست می‌خورد",
        "تغییر خودکار: تشخیص زمان‌بندی و ناسازگاری بازگشت را راه‌اندازی می‌کند",
        "تعادل عملکرد-ایمنی: عملکرد مسیر سریع با ضمانت‌های ایمنی BFT",
      ],
      tags: ["انواع اجماع", "مسیر سریع", "بازگشت BFT", "پیچیدگی O(n)", "کنترل بلادرنگ"],
    },
  },
  {
    id: 31, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(31),
    en: {
      title: "View Change Protocol — Leader Failure Recovery Without Safety Compromise",
      narrative: "ViewChangeProtocol implements leader failure recovery for TWIN's BFT consensus. When the current leader agent fails or becomes unresponsive, the view change protocol elects a new leader without compromising safety. The protocol ensures: (1) no committed decisions are lost during view change; (2) the new leader has a complete and consistent view of all committed decisions; (3) view change completes within the timing budget even under Byzantine conditions.",
      strategic: "View change is the liveness mechanism that ensures TWIN's consensus continues even when the current leader fails. Without view change, a single leader failure would halt all consensus — violating the availability requirements for autonomous vehicle operation. With view change, TWIN provides both safety (BFT consensus) and liveness (view change recovery), satisfying the dual requirements of ISO 26262 for safety-critical systems.",
      keyPoints: [
        "Leader failure detection: timeout-based detection with Byzantine-resistant confirmation",
        "State preservation: committed decisions preserved across view changes",
        "Timing guarantee: view change completes within latency budget",
        "Safety-liveness duality: BFT safety combined with view change liveness",
      ],
      tags: ["View Change", "Leader Failure", "Liveness", "Recovery Protocol", "Safety-Liveness"],
    },
    fa: {
      title: "پروتکل تغییر دیدگاه — بازیابی شکست رهبر بدون به خطر انداختن ایمنی",
      narrative: "ViewChangeProtocol بازیابی شکست رهبر را برای اجماع BFT TWIN پیاده‌سازی می‌کند. وقتی کارگزار رهبر فعلی شکست می‌خورد یا پاسخ‌گو نیست، پروتکل تغییر دیدگاه یک رهبر جدید انتخاب می‌کند بدون اینکه ایمنی را به خطر بیندازد.",
      strategic: "تغییر دیدگاه مکانیزم زندگی است که تضمین می‌کند اجماع TWIN حتی زمانی که رهبر فعلی شکست می‌خورد ادامه می‌یابد. بدون تغییر دیدگاه، یک شکست رهبر واحد تمام اجماع را متوقف می‌کند — نقض الزامات دسترس‌پذیری برای عملیات خودروی خودمختار.",
      keyPoints: [
        "تشخیص شکست رهبر: تشخیص مبتنی بر زمان‌بندی با تأیید مقاوم در برابر بیزانسی",
        "حفظ حالت: تصمیمات متعهدشده در طول تغییرات دیدگاه حفظ می‌شوند",
        "ضمانت زمان‌بندی: تغییر دیدگاه در بودجه تأخیر کامل می‌شود",
        "دوگانگی ایمنی-زندگی: ایمنی BFT با زندگی تغییر دیدگاه ترکیب شده",
      ],
      tags: ["تغییر دیدگاه", "شکست رهبر", "زندگی", "پروتکل بازیابی", "ایمنی-زندگی"],
    },
  },
  {
    id: 32, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(32),
    en: {
      title: "Anomaly Detection — Statistical Outlier Identification in Agent Behavior",
      narrative: "AnomalyDetector implements statistical outlier identification in agent behavior streams. Each agent's outputs are monitored against a baseline model learned from historical behavior. Anomalies are detected using: (1) z-score analysis for continuous outputs (sensor readings, control signals); (2) chi-squared tests for categorical outputs (decisions, classifications); (3) temporal pattern analysis for timing anomalies (deadline misses, burst patterns). Detected anomalies trigger trust score penalties.",
      strategic: "Anomaly detection is the early warning system that identifies agent degradation before it manifests as Byzantine behavior. In automotive systems, hardware degradation is gradual — sensors drift, actuators wear, processors develop intermittent faults. By detecting statistical anomalies in agent outputs, TWIN identifies degrading components before they produce incorrect outputs, enabling proactive maintenance and preventing safety incidents.",
      keyPoints: [
        "Three detection methods: z-score (continuous), chi-squared (categorical), temporal pattern",
        "Baseline learning: normal behavior model learned from historical agent outputs",
        "Trust integration: detected anomalies trigger trust score penalties",
        "Proactive maintenance: degradation detected before incorrect outputs produced",
      ],
      tags: ["Anomaly Detection", "Statistical Analysis", "Z-Score", "Agent Degradation", "Proactive Maintenance"],
    },
    fa: {
      title: "تشخیص ناهنجاری — شناسایی پرت آماری در رفتار کارگزار",
      narrative: "AnomalyDetector شناسایی پرت آماری را در جریان‌های رفتار کارگزار پیاده‌سازی می‌کند. خروجی‌های هر کارگزار در برابر یک مدل پایه آموخته‌شده از رفتار تاریخی پایش می‌شوند. ناهنجاری‌ها با استفاده از: (۱) تحلیل z-score برای خروجی‌های پیوسته؛ (۲) آزمون‌های chi-squared برای خروجی‌های دسته‌ای؛ (۳) تحلیل الگوی زمانی تشخیص داده می‌شوند.",
      strategic: "تشخیص ناهنجاری سیستم هشدار اولیه است که تخریب کارگزار را قبل از اینکه به‌صورت رفتار بیزانسی ظاهر شود شناسایی می‌کند. در سیستم‌های خودرویی، تخریب سخت‌افزار تدریجی است. با تشخیص ناهنجاری‌های آماری در خروجی‌های کارگزار، TWIN اجزای در حال تخریب را قبل از اینکه خروجی‌های نادرست تولید کنند شناسایی می‌کند.",
      keyPoints: [
        "سه روش تشخیص: z-score (پیوسته)، chi-squared (دسته‌ای)، الگوی زمانی",
        "یادگیری پایه: مدل رفتار عادی از خروجی‌های تاریخی کارگزار آموخته می‌شود",
        "یکپارچه‌سازی اعتماد: ناهنجاری‌های تشخیص‌داده‌شده جریمه‌های امتیاز اعتماد را راه‌اندازی می‌کنند",
        "نگهداری پیش‌گیرانه: تخریب قبل از تولید خروجی‌های نادرست تشخیص داده می‌شود",
      ],
      tags: ["تشخیص ناهنجاری", "تحلیل آماری", "Z-Score", "تخریب کارگزار", "نگهداری پیش‌گیرانه"],
    },
  },
  {
    id: 33, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(33),
    en: {
      title: "Reputation Propagation — Network-Wide Trust Information Sharing",
      narrative: "ReputationPropagation implements network-wide sharing of trust information between agents. Each agent maintains local trust scores for agents it directly interacts with. The propagation protocol aggregates these local scores into a network-wide reputation view using a gossip protocol. Propagation is Byzantine-resistant: an agent cannot inflate its own reputation by colluding with Byzantine neighbors. The aggregated reputation is used for consensus group formation and task assignment.",
      strategic: "Reputation propagation is the mechanism that converts local trust observations into network-wide safety intelligence. Without propagation, each agent has only a partial view of network health — an agent that behaves well with one neighbor but poorly with another might not be detected. With propagation, the network aggregates all local observations into a comprehensive reliability picture, enabling better consensus group formation and earlier detection of Byzantine behavior.",
      keyPoints: [
        "Gossip protocol: efficient O(log n) propagation of trust updates across network",
        "Byzantine-resistant aggregation: collusion cannot inflate reputation",
        "Network-wide view: local observations aggregated into comprehensive reliability picture",
        "Consensus group optimization: aggregated reputation used for group formation",
      ],
      tags: ["Reputation Propagation", "Gossip Protocol", "Trust Aggregation", "Byzantine Resistance", "Network Health"],
    },
    fa: {
      title: "انتشار شهرت — اشتراک‌گذاری اطلاعات اعتماد در سطح شبکه",
      narrative: "ReputationPropagation اشتراک‌گذاری اطلاعات اعتماد در سطح شبکه را بین کارگزاران پیاده‌سازی می‌کند. هر کارگزار امتیازهای اعتماد محلی را برای کارگزارانی که مستقیماً با آن‌ها تعامل دارد حفظ می‌کند. پروتکل انتشار این امتیازهای محلی را با استفاده از یک پروتکل شایعه در یک دیدگاه شهرت سطح شبکه جمع‌آوری می‌کند.",
      strategic: "انتشار شهرت مکانیزمی است که مشاهدات اعتماد محلی را به هوشمندی ایمنی سطح شبکه تبدیل می‌کند. بدون انتشار، هر کارگزار فقط دیدگاه جزئی از سلامت شبکه دارد. با انتشار، شبکه تمام مشاهدات محلی را در یک تصویر پایایی جامع جمع‌آوری می‌کند.",
      keyPoints: [
        "پروتکل شایعه: انتشار کارآمد O(log n) به‌روزرسانی‌های اعتماد در سراسر شبکه",
        "جمع‌آوری مقاوم در برابر بیزانسی: تبانی نمی‌تواند شهرت را افزایش دهد",
        "دیدگاه سطح شبکه: مشاهدات محلی در تصویر پایایی جامع جمع‌آوری می‌شوند",
        "بهینه‌سازی گروه اجماع: شهرت جمع‌آوری‌شده برای تشکیل گروه استفاده می‌شود",
      ],
      tags: ["انتشار شهرت", "پروتکل شایعه", "جمع‌آوری اعتماد", "مقاومت بیزانسی", "سلامت شبکه"],
    },
  },
  {
    id: 34, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(34),
    en: {
      title: "Consensus Group Formation — Dynamic Quorum Assembly for Safety-Critical Decisions",
      narrative: "ConsensusGroupFormation implements dynamic assembly of consensus groups for safety-critical decisions. Group formation criteria: (1) minimum size: 3f+1 agents where f is the desired fault tolerance; (2) diversity: agents from different subsystems to prevent correlated failures; (3) trust threshold: only agents above minimum trust score included; (4) latency proximity: agents with compatible timing characteristics grouped together. Groups are reformed when membership trust scores change significantly.",
      strategic: "Dynamic consensus group formation is the adaptive safety mechanism that maintains BFT guarantees even as the agent population changes. Static groups become unsafe when member agents degrade; dynamic formation continuously optimizes group composition for safety and performance. By selecting diverse, high-trust agents with compatible timing, TWIN maximizes the probability of correct consensus while minimizing latency.",
      keyPoints: [
        "Four formation criteria: minimum size, diversity, trust threshold, latency proximity",
        "Dynamic reformation: groups reformed when trust scores change significantly",
        "Correlated failure prevention: agents from different subsystems grouped together",
        "Performance optimization: latency-compatible agents grouped to minimize consensus time",
      ],
      tags: ["Consensus Group", "Dynamic Formation", "Quorum Assembly", "Correlated Failures", "Trust Threshold"],
    },
    fa: {
      title: "تشکیل گروه اجماع — مجمع نصاب پویا برای تصمیمات ایمنی‌بحرانی",
      narrative: "ConsensusGroupFormation مجمع پویا از گروه‌های اجماع را برای تصمیمات ایمنی‌بحرانی پیاده‌سازی می‌کند. معیارهای تشکیل گروه: (۱) حداقل اندازه: 3f+1 کارگزار؛ (۲) تنوع: کارگزاران از زیرسیستم‌های مختلف؛ (۳) آستانه اعتماد: فقط کارگزاران بالای حداقل امتیاز اعتماد؛ (۴) مجاورت تأخیر: کارگزاران با مشخصات زمان‌بندی سازگار.",
      strategic: "تشکیل گروه اجماع پویا مکانیزم ایمنی تطبیقی است که ضمانت‌های BFT را حتی با تغییر جمعیت کارگزار حفظ می‌کند. گروه‌های ایستا زمانی ناایمن می‌شوند که کارگزاران عضو تخریب می‌یابند؛ تشکیل پویا به‌طور مداوم ترکیب گروه را برای ایمنی و عملکرد بهینه می‌کند.",
      keyPoints: [
        "چهار معیار تشکیل: حداقل اندازه، تنوع، آستانه اعتماد، مجاورت تأخیر",
        "تشکیل مجدد پویا: گروه‌ها زمانی که امتیازهای اعتماد به‌طور قابل توجهی تغییر می‌کنند مجدداً تشکیل می‌شوند",
        "جلوگیری از شکست همبسته: کارگزاران از زیرسیستم‌های مختلف با هم گروه‌بندی می‌شوند",
        "بهینه‌سازی عملکرد: کارگزاران سازگار با تأخیر برای به حداقل رساندن زمان اجماع گروه‌بندی می‌شوند",
      ],
      tags: ["گروه اجماع", "تشکیل پویا", "مجمع نصاب", "شکست‌های همبسته", "آستانه اعتماد"],
    },
  },
  {
    id: 35, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(35),
    en: {
      title: "Safety Boundary Enforcement — Hard Constraints on Agent Decision Space",
      narrative: "SafetyBoundaryEnforcer implements hard constraints on the decision space available to agents. Safety boundaries are defined as invariants that must hold regardless of agent decisions: (1) physical boundaries — actuator limits, safe operating ranges; (2) temporal boundaries — deadline constraints for safety-critical actions; (3) logical boundaries — state machine invariants, protocol compliance; (4) trust boundaries — minimum trust requirements for safety-critical task assignment. Boundary violations trigger immediate safe state transitions.",
      strategic: "Safety boundary enforcement is the architectural mechanism that prevents agent intelligence from producing unsafe outcomes. Without boundaries, a highly capable agent might find a locally optimal solution that violates a global safety constraint. With boundaries, the decision space is pre-constrained to the safe region — agent intelligence operates within the safe region, finding optimal solutions that are guaranteed to be safe.",
      keyPoints: [
        "Four boundary types: physical, temporal, logical, trust",
        "Hard constraints: boundaries enforced regardless of agent decisions",
        "Safe state transitions: boundary violations trigger immediate safe state",
        "Constrained optimization: agent intelligence operates within pre-defined safe region",
      ],
      tags: ["Safety Boundaries", "Hard Constraints", "Safe State", "Boundary Enforcement", "Constrained Optimization"],
    },
    fa: {
      title: "اجرای مرز ایمنی — محدودیت‌های سخت بر فضای تصمیم کارگزار",
      narrative: "SafetyBoundaryEnforcer محدودیت‌های سخت را بر فضای تصمیم در دسترس کارگزاران پیاده‌سازی می‌کند. مرزهای ایمنی به‌عنوان ثابت‌هایی تعریف می‌شوند که باید صرف‌نظر از تصمیمات کارگزار برقرار باشند: (۱) مرزهای فیزیکی؛ (۲) مرزهای زمانی؛ (۳) مرزهای منطقی؛ (۴) مرزهای اعتماد.",
      strategic: "اجرای مرز ایمنی مکانیزم معماری است که از تولید نتایج ناایمن توسط هوشمندی کارگزار جلوگیری می‌کند. بدون مرزها، یک کارگزار بسیار توانمند ممکن است یک راه‌حل بهینه محلی پیدا کند که یک محدودیت ایمنی جهانی را نقض می‌کند. با مرزها، فضای تصمیم از پیش به منطقه ایمن محدود شده است.",
      keyPoints: [
        "چهار نوع مرز: فیزیکی، زمانی، منطقی، اعتماد",
        "محدودیت‌های سخت: مرزها صرف‌نظر از تصمیمات کارگزار اجرا می‌شوند",
        "انتقال حالت ایمن: نقض مرز انتقال فوری حالت ایمن را راه‌اندازی می‌کند",
        "بهینه‌سازی محدودشده: هوشمندی کارگزار در منطقه ایمن از پیش تعریف‌شده عمل می‌کند",
      ],
      tags: ["مرزهای ایمنی", "محدودیت‌های سخت", "حالت ایمن", "اجرای مرز", "بهینه‌سازی محدودشده"],
    },
  },
  {
    id: 36, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(36),
    en: {
      title: "Formal Verification Integration — Model Checking for Consensus Properties",
      narrative: "FormalVerificationIntegration implements model checking for TWIN's consensus properties. The verification framework uses TLA+ specifications to formally verify: (1) safety properties — no two agents commit conflicting decisions; (2) liveness properties — consensus eventually completes; (3) Byzantine tolerance — safety maintained with up to f Byzantine agents; (4) view change correctness — committed decisions preserved across view changes. Verification results are included in the ASIL-D evidence package.",
      strategic: "Formal verification is the gold standard for safety-critical software correctness. Unlike testing, which can only demonstrate the absence of bugs in tested scenarios, formal verification proves the absence of bugs in all possible scenarios. For ASIL-D certification, formal verification of consensus properties provides the highest level of evidence — satisfying ISO 26262's requirements for formal methods at the highest integrity level.",
      keyPoints: [
        "TLA+ specifications: formal mathematical specification of consensus properties",
        "Four verified properties: safety, liveness, Byzantine tolerance, view change correctness",
        "All-scenario coverage: formal proof covers all possible execution scenarios",
        "ASIL-D evidence: verification results included in certification evidence package",
      ],
      tags: ["Formal Verification", "TLA+", "Model Checking", "Safety Properties", "ASIL-D Evidence"],
    },
    fa: {
      title: "یکپارچه‌سازی تأیید رسمی — بررسی مدل برای ویژگی‌های اجماع",
      narrative: "FormalVerificationIntegration بررسی مدل را برای ویژگی‌های اجماع TWIN پیاده‌سازی می‌کند. چارچوب تأیید از مشخصات TLA+ برای تأیید رسمی استفاده می‌کند: (۱) ویژگی‌های ایمنی؛ (۲) ویژگی‌های زندگی؛ (۳) تحمل بیزانسی؛ (۴) صحت تغییر دیدگاه. نتایج تأیید در بسته شواهد ASIL-D گنجانده می‌شوند.",
      strategic: "تأیید رسمی استاندارد طلایی برای صحت نرم‌افزار ایمنی‌بحرانی است. برخلاف آزمون که فقط می‌تواند فقدان اشکالات را در سناریوهای آزمون‌شده نشان دهد، تأیید رسمی فقدان اشکالات را در تمام سناریوهای ممکن اثبات می‌کند.",
      keyPoints: [
        "مشخصات TLA+: مشخصات ریاضی رسمی ویژگی‌های اجماع",
        "چهار ویژگی تأییدشده: ایمنی، زندگی، تحمل بیزانسی، صحت تغییر دیدگاه",
        "پوشش همه سناریوها: اثبات رسمی تمام سناریوهای اجرای ممکن را پوشش می‌دهد",
        "شواهد ASIL-D: نتایج تأیید در بسته شواهد صدور گواهینامه گنجانده می‌شوند",
      ],
      tags: ["تأیید رسمی", "TLA+", "بررسی مدل", "ویژگی‌های ایمنی", "شواهد ASIL-D"],
    },
  },
  {
    id: 37, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(37),
    en: {
      title: "Graceful Degradation — Maintaining Safety Under Partial Network Failure",
      narrative: "GracefulDegradation implements safety-preserving behavior under partial network failure. Degradation levels: (1) Full operation — all agents available, full BFT consensus; (2) Reduced redundancy — some agents unavailable, minimum quorum maintained; (3) Degraded mode — below minimum quorum, conservative fallback behaviors activated; (4) Safe state — critical failure, vehicle brought to safe stop. Each level has defined capability limitations and safety guarantees.",
      strategic: "Graceful degradation is the operational safety strategy that maintains vehicle safety across the full spectrum of network failure scenarios. An autonomous vehicle that halts immediately when any agent fails is not commercially viable — minor failures should not require emergency stops. TWIN's degradation hierarchy ensures that capability is reduced proportionally to failure severity, maintaining safety while preserving operational continuity where possible.",
      keyPoints: [
        "Four degradation levels: full operation, reduced redundancy, degraded mode, safe state",
        "Proportional capability reduction: capability reduced proportionally to failure severity",
        "Defined safety guarantees: each level has explicit safety properties",
        "Commercial viability: minor failures don't require emergency stops",
      ],
      tags: ["Graceful Degradation", "Partial Failure", "Safe State", "Degradation Levels", "Operational Continuity"],
    },
    fa: {
      title: "تخریب ملایم — حفظ ایمنی در شکست جزئی شبکه",
      narrative: "GracefulDegradation رفتار حفظ‌کننده ایمنی را در شکست جزئی شبکه پیاده‌سازی می‌کند. سطوح تخریب: (۱) عملیات کامل — همه کارگزاران در دسترس، اجماع BFT کامل؛ (۲) افزونگی کاهش‌یافته؛ (۳) حالت تخریب‌یافته — زیر حداقل نصاب، رفتارهای جایگزین محافظه‌کارانه فعال شده؛ (۴) حالت ایمن — شکست بحرانی، خودرو به توقف ایمن رسانده می‌شود.",
      strategic: "تخریب ملایم راهبرد ایمنی عملیاتی است که ایمنی خودرو را در طیف کامل سناریوهای شکست شبکه حفظ می‌کند. یک خودروی خودمختار که بلافاصله با شکست هر کارگزاری متوقف می‌شود از نظر تجاری قابل اجرا نیست.",
      keyPoints: [
        "چهار سطح تخریب: عملیات کامل، افزونگی کاهش‌یافته، حالت تخریب‌یافته، حالت ایمن",
        "کاهش قابلیت متناسب: قابلیت متناسب با شدت شکست کاهش می‌یابد",
        "ضمانت‌های ایمنی تعریف‌شده: هر سطح ویژگی‌های ایمنی صریح دارد",
        "دوام تجاری: شکست‌های جزئی نیازی به توقف اضطراری ندارند",
      ],
      tags: ["تخریب ملایم", "شکست جزئی", "حالت ایمن", "سطوح تخریب", "تداوم عملیاتی"],
    },
  },
  {
    id: 38, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(38),
    en: {
      title: "Audit Trail Architecture — Tamper-Evident Logging for Safety Accountability",
      narrative: "AuditTrailArchitecture implements tamper-evident logging for all safety-relevant events in TWIN. The audit trail captures: (1) all consensus decisions with participating agents and votes; (2) trust score changes with triggering events; (3) anomaly detections with statistical evidence; (4) safety boundary violations with context; (5) degradation level transitions with causation. Logs are cryptographically chained to prevent tampering and stored redundantly across multiple agents.",
      strategic: "Tamper-evident audit trails are both a regulatory requirement and a liability protection mechanism. ISO 26262 requires that safety-relevant decisions be traceable; regulators and courts require evidence of system behavior in incident investigations. TWIN's cryptographically chained audit trail provides irrefutable evidence of system behavior — protecting EPU from false liability claims while enabling honest incident analysis.",
      keyPoints: [
        "Five event categories: consensus decisions, trust changes, anomalies, boundary violations, degradation",
        "Cryptographic chaining: tamper-evident log prevents post-hoc modification",
        "Redundant storage: logs stored across multiple agents for availability",
        "Regulatory compliance: audit trail satisfies ISO 26262 traceability requirements",
      ],
      tags: ["Audit Trail", "Tamper-Evident", "Cryptographic Chaining", "Safety Accountability", "Regulatory Compliance"],
    },
    fa: {
      title: "معماری مسیر حسابرسی — ثبت‌گذاری ضد-دستکاری برای پاسخگویی ایمنی",
      narrative: "AuditTrailArchitecture ثبت‌گذاری ضد-دستکاری را برای تمام رویدادهای مرتبط با ایمنی در TWIN پیاده‌سازی می‌کند. مسیر حسابرسی ثبت می‌کند: (۱) تمام تصمیمات اجماع با کارگزاران مشارکت‌کننده و آراء؛ (۲) تغییرات امتیاز اعتماد؛ (۳) تشخیص‌های ناهنجاری؛ (۴) نقض مرز ایمنی؛ (۵) انتقال سطح تخریب. گزارش‌ها به‌صورت رمزنگاری‌شده زنجیر می‌شوند.",
      strategic: "مسیرهای حسابرسی ضد-دستکاری هم یک الزام نظارتی و هم یک مکانیزم حفاظت از مسئولیت هستند. ISO 26262 نیاز دارد تصمیمات مرتبط با ایمنی قابل ردیابی باشند؛ تنظیم‌کنندگان و دادگاه‌ها در تحقیقات حوادث به شواهد رفتار سیستم نیاز دارند.",
      keyPoints: [
        "پنج دسته رویداد: تصمیمات اجماع، تغییرات اعتماد، ناهنجاری‌ها، نقض مرز، تخریب",
        "زنجیره‌سازی رمزنگاری: گزارش ضد-دستکاری از تغییر پس از آن جلوگیری می‌کند",
        "ذخیره‌سازی افزونه: گزارش‌ها در چندین کارگزار برای دسترس‌پذیری ذخیره می‌شوند",
        "انطباق نظارتی: مسیر حسابرسی الزامات ردیابی ISO 26262 را برآورده می‌کند",
      ],
      tags: ["مسیر حسابرسی", "ضد-دستکاری", "زنجیره‌سازی رمزنگاری", "پاسخگویی ایمنی", "انطباق نظارتی"],
    },
  },
  {
    id: 39, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(39),
    en: {
      title: "Network Partition Handling — Consensus Under Split-Brain Conditions",
      narrative: "NetworkPartitionHandler implements safe consensus behavior under network partition (split-brain) conditions. When the network partitions into disconnected subgroups, TWIN applies the CAP theorem's safety-availability tradeoff: safety-critical decisions require quorum (majority partition continues, minority partition enters safe state); non-critical decisions can proceed with local consensus. Partition detection uses heartbeat monitoring with Byzantine-resistant confirmation.",
      strategic: "Network partition handling is the distributed systems challenge that determines whether TWIN maintains safety guarantees in real-world network conditions. Automotive networks experience transient partitions due to RF interference, antenna failures, and protocol errors. Without partition handling, a transient partition could cause split-brain consensus — two partitions making conflicting decisions. TWIN's partition handling ensures that only the majority partition continues safety-critical decisions.",
      keyPoints: [
        "CAP theorem application: safety prioritized over availability for safety-critical decisions",
        "Majority partition continues: minority partition enters safe state",
        "Byzantine-resistant detection: partition detection resistant to false positives",
        "Non-critical flexibility: non-critical decisions can proceed with local consensus",
      ],
      tags: ["Network Partition", "Split-Brain", "CAP Theorem", "Majority Quorum", "Partition Detection"],
    },
    fa: {
      title: "مدیریت پارتیشن شبکه — اجماع در شرایط مغز-تقسیم‌شده",
      narrative: "NetworkPartitionHandler رفتار اجماع ایمن را در شرایط پارتیشن شبکه (مغز-تقسیم‌شده) پیاده‌سازی می‌کند. وقتی شبکه به زیرگروه‌های غیرمتصل تقسیم می‌شود، TWIN معامله ایمنی-دسترس‌پذیری قضیه CAP را اعمال می‌کند: تصمیمات ایمنی‌بحرانی به نصاب نیاز دارند؛ پارتیشن اقلیت وارد حالت ایمن می‌شود.",
      strategic: "مدیریت پارتیشن شبکه چالش سیستم‌های توزیع‌شده است که تعیین می‌کند آیا TWIN ضمانت‌های ایمنی را در شرایط شبکه دنیای واقعی حفظ می‌کند. شبکه‌های خودرویی به دلیل تداخل RF، خرابی‌های آنتن، و خطاهای پروتکل پارتیشن‌های گذرا را تجربه می‌کنند.",
      keyPoints: [
        "کاربرد قضیه CAP: ایمنی بر دسترس‌پذیری برای تصمیمات ایمنی‌بحرانی اولویت دارد",
        "ادامه پارتیشن اکثریت: پارتیشن اقلیت وارد حالت ایمن می‌شود",
        "تشخیص مقاوم در برابر بیزانسی: تشخیص پارتیشن در برابر مثبت‌های کاذب مقاوم است",
        "انعطاف‌پذیری غیربحرانی: تصمیمات غیربحرانی می‌توانند با اجماع محلی ادامه یابند",
      ],
      tags: ["پارتیشن شبکه", "مغز-تقسیم‌شده", "قضیه CAP", "نصاب اکثریت", "تشخیص پارتیشن"],
    },
  },
  {
    id: 40, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(40),
    en: {
      title: "Trust Bootstrap — Establishing Initial Trust in New Agent Deployment",
      narrative: "TrustBootstrap implements the process for establishing initial trust when new agents are deployed into the TWIN network. Bootstrap phases: (1) cryptographic identity verification — new agent presents hardware-signed certificate; (2) capability attestation — new agent demonstrates required capabilities through standardized tests; (3) probationary period — new agent participates in consensus with reduced weight until trust score is established; (4) full membership — trust score exceeds threshold, agent receives full consensus weight.",
      strategic: "Trust bootstrap is the security mechanism that prevents unauthorized agents from joining the TWIN network and influencing safety-critical decisions. Without bootstrap, a compromised agent could be introduced into the network and immediately participate in consensus — potentially corrupting safety-critical decisions. With bootstrap, new agents must prove their identity and capabilities before receiving consensus weight.",
      keyPoints: [
        "Four bootstrap phases: identity verification, capability attestation, probationary period, full membership",
        "Hardware-signed certificates: cryptographic identity prevents impersonation",
        "Probationary consensus: new agents participate with reduced weight during trust establishment",
        "Security gate: unauthorized agents cannot influence safety-critical decisions",
      ],
      tags: ["Trust Bootstrap", "Agent Onboarding", "Certificate Verification", "Probationary Period", "Security Gate"],
    },
    fa: {
      title: "راه‌اندازی اعتماد — ایجاد اعتماد اولیه در استقرار کارگزار جدید",
      narrative: "TrustBootstrap فرآیند ایجاد اعتماد اولیه را هنگامی که کارگزاران جدید در شبکه TWIN مستقر می‌شوند پیاده‌سازی می‌کند. مراحل راه‌اندازی: (۱) تأیید هویت رمزنگاری؛ (۲) تصدیق قابلیت؛ (۳) دوره آزمایشی؛ (۴) عضویت کامل — امتیاز اعتماد از آستانه تجاوز می‌کند.",
      strategic: "راه‌اندازی اعتماد مکانیزم امنیتی است که از پیوستن کارگزاران غیرمجاز به شبکه TWIN و تأثیرگذاری بر تصمیمات ایمنی‌بحرانی جلوگیری می‌کند. بدون راه‌اندازی، یک کارگزار به خطر افتاده می‌تواند در شبکه معرفی شود و بلافاصله در اجماع شرکت کند.",
      keyPoints: [
        "چهار مرحله راه‌اندازی: تأیید هویت، تصدیق قابلیت، دوره آزمایشی، عضویت کامل",
        "گواهینامه‌های امضاشده سخت‌افزاری: هویت رمزنگاری از جعل هویت جلوگیری می‌کند",
        "اجماع آزمایشی: کارگزاران جدید با وزن کاهش‌یافته در طول ایجاد اعتماد شرکت می‌کنند",
        "دروازه امنیتی: کارگزاران غیرمجاز نمی‌توانند بر تصمیمات ایمنی‌بحرانی تأثیر بگذارند",
      ],
      tags: ["راه‌اندازی اعتماد", "ورود کارگزار", "تأیید گواهینامه", "دوره آزمایشی", "دروازه امنیتی"],
    },
  },
  {
    id: 41, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(41),
    en: {
      title: "Consensus Performance Benchmarks — Latency and Throughput Under Load",
      narrative: "Consensus performance benchmarks characterize TWIN's consensus system under realistic automotive loads. Key results: (1) fast path latency: 2.1ms median, 3.8ms 99th percentile for 4-agent groups; (2) BFT fallback latency: 8.7ms median, 12.3ms 99th percentile; (3) throughput: 1,200 consensus decisions/second for fast path, 340/second for BFT; (4) degradation under load: latency increases <15% at 80% capacity; (5) Byzantine impact: <5% latency increase with 1 Byzantine agent.",
      strategic: "Performance benchmarks are the quantitative evidence that TWIN's consensus system meets automotive real-time requirements. Without benchmarks, claims about latency and throughput are unverifiable. With benchmarks, OEM customers can verify that TWIN's consensus system fits within their vehicle's timing budget and that performance degrades gracefully under load — providing the confidence required for production commitment.",
      keyPoints: [
        "Fast path: 2.1ms median, 3.8ms P99 — within 10ms ASIL-D budget",
        "BFT fallback: 8.7ms median, 12.3ms P99 — within budget with margin",
        "Throughput: 1,200 decisions/second fast path, 340/second BFT",
        "Graceful degradation: <15% latency increase at 80% capacity",
      ],
      tags: ["Performance Benchmarks", "Latency", "Throughput", "P99", "Real-Time Requirements"],
    },
    fa: {
      title: "معیارهای عملکرد اجماع — تأخیر و گذردهی تحت بار",
      narrative: "معیارهای عملکرد اجماع سیستم اجماع TWIN را تحت بارهای واقعی خودرویی مشخص می‌کنند. نتایج کلیدی: (۱) تأخیر مسیر سریع: میانه ۲.۱ms، صدک ۹۹ام ۳.۸ms برای گروه‌های ۴ کارگزاره؛ (۲) تأخیر بازگشت BFT: میانه ۸.۷ms؛ (۳) گذردهی: ۱,۲۰۰ تصمیم اجماع/ثانیه برای مسیر سریع؛ (۴) تخریب تحت بار: تأخیر کمتر از ۱۵٪ در ظرفیت ۸۰٪ افزایش می‌یابد.",
      strategic: "معیارهای عملکرد شواهد کمی هستند که سیستم اجماع TWIN الزامات بلادرنگ خودرویی را برآورده می‌کند. بدون معیارها، ادعاها درباره تأخیر و گذردهی قابل تأیید نیستند. با معیارها، مشتریان OEM می‌توانند تأیید کنند که سیستم اجماع TWIN در بودجه زمان‌بندی خودروی آن‌ها قرار می‌گیرد.",
      keyPoints: [
        "مسیر سریع: میانه ۲.۱ms، P99 ۳.۸ms — در بودجه ASIL-D ۱۰ms",
        "بازگشت BFT: میانه ۸.۷ms، P99 ۱۲.۳ms — در بودجه با حاشیه",
        "گذردهی: ۱,۲۰۰ تصمیم/ثانیه مسیر سریع، ۳۴۰/ثانیه BFT",
        "تخریب ملایم: کمتر از ۱۵٪ افزایش تأخیر در ظرفیت ۸۰٪",
      ],
      tags: ["معیارهای عملکرد", "تأخیر", "گذردهی", "P99", "الزامات بلادرنگ"],
    },
  },
  {
    id: 42, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(42),
    en: {
      title: "Multi-Vehicle Consensus — Cross-Vehicle Coordination for Cooperative Driving",
      narrative: "MultiVehicleConsensus extends TWIN's consensus architecture to cross-vehicle coordination for cooperative driving scenarios. Vehicle-to-vehicle (V2V) consensus enables: (1) coordinated lane changes — vehicles agree on gap acceptance before maneuver; (2) platoon formation — vehicles agree on following distance and speed; (3) intersection negotiation — vehicles agree on right-of-way at uncontrolled intersections; (4) emergency coordination — vehicles agree on evasive maneuver coordination. V2V consensus uses a relaxed BFT variant optimized for wireless networks.",
      strategic: "Multi-vehicle consensus is the technical foundation for cooperative driving features that differentiate EPU in the autonomous vehicle market. Single-vehicle autonomy is a commodity; cooperative driving that enables vehicles to coordinate as a system creates qualitatively better traffic flow, safety, and efficiency. TWIN's multi-vehicle consensus extends the same formal safety guarantees from single-vehicle to multi-vehicle scenarios.",
      keyPoints: [
        "Four cooperative scenarios: lane change, platoon, intersection, emergency coordination",
        "Wireless-optimized BFT: relaxed variant handles higher latency and packet loss of V2V",
        "Formal safety extension: single-vehicle BFT guarantees extended to multi-vehicle",
        "Market differentiation: cooperative driving creates qualitative advantage over single-vehicle autonomy",
      ],
      tags: ["Multi-Vehicle Consensus", "V2V", "Cooperative Driving", "Platoon", "Intersection Negotiation"],
    },
    fa: {
      title: "اجماع چندخودرویی — هماهنگی بین‌خودرویی برای رانندگی مشارکتی",
      narrative: "MultiVehicleConsensus معماری اجماع TWIN را به هماهنگی بین‌خودرویی برای سناریوهای رانندگی مشارکتی گسترش می‌دهد. اجماع خودرو-به-خودرو (V2V) فعال می‌کند: (۱) تغییر خط هماهنگ؛ (۲) تشکیل پلاتون؛ (۳) مذاکره تقاطع؛ (۴) هماهنگی اضطراری. اجماع V2V از یک نوع BFT آرام‌شده بهینه‌شده برای شبکه‌های بی‌سیم استفاده می‌کند.",
      strategic: "اجماع چندخودرویی پایه فنی برای ویژگی‌های رانندگی مشارکتی است که EPU را در بازار خودروی خودمختار متمایز می‌کند. خودمختاری تک‌خودرویی یک کالا است؛ رانندگی مشارکتی که خودروها را قادر می‌سازد به‌عنوان یک سیستم هماهنگ شوند جریان ترافیک، ایمنی و کارایی کیفی بهتری ایجاد می‌کند.",
      keyPoints: [
        "چهار سناریوی مشارکتی: تغییر خط، پلاتون، تقاطع، هماهنگی اضطراری",
        "BFT بهینه‌شده برای بی‌سیم: نوع آرام‌شده تأخیر بالاتر و از دست دادن بسته V2V را مدیریت می‌کند",
        "گسترش ایمنی رسمی: ضمانت‌های BFT تک‌خودرویی به چندخودرویی گسترش می‌یابند",
        "تمایز بازار: رانندگی مشارکتی مزیت کیفی نسبت به خودمختاری تک‌خودرویی ایجاد می‌کند",
      ],
      tags: ["اجماع چندخودرویی", "V2V", "رانندگی مشارکتی", "پلاتون", "مذاکره تقاطع"],
    },
  },
  {
    id: 43, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(43),
    en: {
      title: "Consensus Observability — Real-Time Visibility into Consensus Health",
      narrative: "ConsensusObservability implements real-time visibility into consensus system health for operators and engineers. Observable metrics: (1) consensus latency distribution — P50, P95, P99 per consensus group; (2) fast path hit rate — percentage of decisions using fast path vs. BFT fallback; (3) Byzantine detection events — frequency and identity of detected Byzantine agents; (4) trust score distributions — fleet-wide agent trust health; (5) view change frequency — indicator of leader stability.",
      strategic: "Consensus observability is the operational intelligence that enables proactive maintenance and continuous improvement of TWIN's consensus system. Without observability, operators cannot detect degrading consensus performance until it manifests as safety incidents. With observability, operators can identify trends — increasing BFT fallback rate, declining trust scores, frequent view changes — and intervene before they become safety issues.",
      keyPoints: [
        "Five observable metrics: latency, fast path rate, Byzantine events, trust distribution, view changes",
        "Proactive maintenance: trends detected before safety incidents",
        "Fleet-wide visibility: all vehicles monitored centrally for systemic patterns",
        "Continuous improvement: observability data drives consensus system optimization",
      ],
      tags: ["Observability", "Consensus Health", "Real-Time Monitoring", "Proactive Maintenance", "Fleet Visibility"],
    },
    fa: {
      title: "رصدپذیری اجماع — دیدپذیری بلادرنگ به سلامت اجماع",
      narrative: "ConsensusObservability دیدپذیری بلادرنگ را به سلامت سیستم اجماع برای اپراتورها و مهندسان پیاده‌سازی می‌کند. معیارهای قابل رصد: (۱) توزیع تأخیر اجماع — P50، P95، P99 در هر گروه اجماع؛ (۲) نرخ موفقیت مسیر سریع؛ (۳) رویدادهای تشخیص بیزانسی؛ (۴) توزیع‌های امتیاز اعتماد؛ (۵) فرکانس تغییر دیدگاه.",
      strategic: "رصدپذیری اجماع هوشمندی عملیاتی است که نگهداری پیش‌گیرانه و بهبود پیوسته سیستم اجماع TWIN را فعال می‌کند. بدون رصدپذیری، اپراتورها نمی‌توانند عملکرد اجماع در حال تخریب را تا زمانی که به‌صورت حوادث ایمنی ظاهر شود تشخیص دهند.",
      keyPoints: [
        "پنج معیار قابل رصد: تأخیر، نرخ مسیر سریع، رویدادهای بیزانسی، توزیع اعتماد، تغییرات دیدگاه",
        "نگهداری پیش‌گیرانه: روندها قبل از حوادث ایمنی تشخیص داده می‌شوند",
        "دیدپذیری سطح ناوگان: همه خودروها برای الگوهای سیستمی به‌صورت مرکزی پایش می‌شوند",
        "بهبود پیوسته: داده رصدپذیری بهینه‌سازی سیستم اجماع را هدایت می‌کند",
      ],
      tags: ["رصدپذیری", "سلامت اجماع", "پایش بلادرنگ", "نگهداری پیش‌گیرانه", "دیدپذیری ناوگان"],
    },
  },
  {
    id: 44, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(44),
    en: {
      title: "Trust Architecture Integration — Connecting BFT, Trust, and Safety Boundaries",
      narrative: "Trust Architecture Integration synthesizes the complete trust and consensus architecture: BFT consensus provides the formal safety foundation; trust scoring provides dynamic reliability monitoring; anomaly detection provides early warning; reputation propagation provides network-wide visibility; consensus group formation uses trust for optimal group assembly; safety boundaries constrain the decision space; graceful degradation handles partial failures; audit trails provide accountability. Together these create a comprehensive trust fabric.",
      strategic: "The integrated trust architecture is greater than the sum of its parts. Each component addresses a specific failure mode: BFT handles Byzantine agents, trust scoring handles gradual degradation, anomaly detection handles intermittent faults, reputation propagation handles correlated failures, safety boundaries handle optimization failures, graceful degradation handles availability failures. Together they provide defense-in-depth against the full spectrum of failure modes in safety-critical distributed systems.",
      keyPoints: [
        "Seven integrated components: BFT, trust scoring, anomaly detection, reputation, group formation, safety boundaries, graceful degradation",
        "Defense-in-depth: each component addresses a specific failure mode",
        "Comprehensive coverage: full spectrum of failure modes addressed",
        "Trust fabric: integrated architecture creates comprehensive reliability guarantee",
      ],
      tags: ["Trust Architecture", "Integration", "Defense-in-Depth", "Failure Modes", "Trust Fabric"],
    },
    fa: {
      title: "یکپارچه‌سازی معماری اعتماد — اتصال BFT، اعتماد، و مرزهای ایمنی",
      narrative: "یکپارچه‌سازی معماری اعتماد معماری کامل اعتماد و اجماع را ترکیب می‌کند: اجماع BFT پایه ایمنی رسمی را فراهم می‌کند؛ امتیازدهی اعتماد پایش پایایی پویا را فراهم می‌کند؛ تشخیص ناهنجاری هشدار اولیه را فراهم می‌کند؛ انتشار شهرت دیدپذیری سطح شبکه را فراهم می‌کند. با هم یک بافت اعتماد جامع ایجاد می‌کنند.",
      strategic: "معماری اعتماد یکپارچه بیشتر از مجموع اجزای آن است. هر مؤلفه یک حالت شکست خاص را مورد توجه قرار می‌دهد: BFT کارگزاران بیزانسی را مدیریت می‌کند، امتیازدهی اعتماد تخریب تدریجی را مدیریت می‌کند، تشخیص ناهنجاری خرابی‌های متناوب را مدیریت می‌کند. با هم دفاع-در-عمق در برابر طیف کامل حالت‌های شکست ارائه می‌دهند.",
      keyPoints: [
        "هفت مؤلفه یکپارچه: BFT، امتیازدهی اعتماد، تشخیص ناهنجاری، شهرت، تشکیل گروه، مرزهای ایمنی، تخریب ملایم",
        "دفاع-در-عمق: هر مؤلفه یک حالت شکست خاص را مورد توجه قرار می‌دهد",
        "پوشش جامع: طیف کامل حالت‌های شکست مورد توجه قرار می‌گیرد",
        "بافت اعتماد: معماری یکپارچه ضمانت پایایی جامع ایجاد می‌کند",
      ],
      tags: ["معماری اعتماد", "یکپارچه‌سازی", "دفاع-در-عمق", "حالت‌های شکست", "بافت اعتماد"],
    },
  },
  {
    id: 45, act: "TrustConsensus", actLabel: ACT_LABELS_D.TrustConsensus, imageUrl: imgD(45),
    en: {
      title: "Act III Synthesis — Trust and Consensus as the Safety Backbone of TWIN",
      narrative: "Act III establishes trust and consensus as the safety backbone of TWIN's agent network. The 18-slide arc covered: BFT consensus (formal safety foundation), trust scoring (dynamic reliability), consensus protocol variants (performance-safety balance), view change (liveness), anomaly detection (early warning), reputation propagation (network intelligence), consensus group formation (adaptive safety), safety boundaries (constrained optimization), formal verification (mathematical proof), graceful degradation (operational resilience), audit trails (accountability), network partition handling, trust bootstrap (security), performance benchmarks, multi-vehicle consensus, observability, and integration synthesis.",
      strategic: "The trust and consensus architecture is the differentiating technical achievement that makes TWIN suitable for ASIL-D certification. Competing multi-agent systems use ad-hoc coordination without formal safety guarantees. TWIN's BFT-based trust architecture provides mathematical guarantees that are verifiable by certification bodies — creating a defensible technical foundation that competitors cannot easily replicate.",
      keyPoints: [
        "18-slide arc: complete trust and consensus architecture from theory to implementation",
        "ASIL-D foundation: BFT + trust scoring + formal verification = certifiable safety",
        "Competitive differentiation: formal safety guarantees distinguish TWIN from ad-hoc systems",
        "Bridge to Act IV: memory architecture builds on trust foundation for reliable state management",
      ],
      tags: ["Act III Synthesis", "Trust Backbone", "ASIL-D Foundation", "Competitive Differentiation", "Safety Architecture"],
    },
    fa: {
      title: "برآیند پرده سوم — اعتماد و اجماع به‌عنوان ستون فقرات ایمنی TWIN",
      narrative: "پرده سوم اعتماد و اجماع را به‌عنوان ستون فقرات ایمنی شبکه کارگزار TWIN برقرار می‌کند. قوس ۱۸ اسلایدی پوشش داد: اجماع BFT، امتیازدهی اعتماد، انواع پروتکل اجماع، تغییر دیدگاه، تشخیص ناهنجاری، انتشار شهرت، تشکیل گروه اجماع، مرزهای ایمنی، تأیید رسمی، تخریب ملایم، مسیرهای حسابرسی، مدیریت پارتیشن شبکه، راه‌اندازی اعتماد، معیارهای عملکرد، اجماع چندخودرویی، رصدپذیری، و برآیند یکپارچه‌سازی.",
      strategic: "معماری اعتماد و اجماع دستاورد فنی متمایزکننده‌ای است که TWIN را برای صدور گواهینامه ASIL-D مناسب می‌کند. سیستم‌های چندعاملی رقیب از هماهنگی موقتی بدون ضمانت‌های ایمنی رسمی استفاده می‌کنند. معماری اعتماد مبتنی بر BFT TWIN ضمانت‌های ریاضی ارائه می‌دهد که توسط نهادهای صدور گواهینامه قابل تأیید هستند.",
      keyPoints: [
        "قوس ۱۸ اسلایدی: معماری اعتماد و اجماع کامل از نظریه تا پیاده‌سازی",
        "پایه ASIL-D: BFT + امتیازدهی اعتماد + تأیید رسمی = ایمنی قابل صدور گواهینامه",
        "تمایز رقابتی: ضمانت‌های ایمنی رسمی TWIN را از سیستم‌های موقتی متمایز می‌کند",
        "پل به پرده چهارم: معماری حافظه بر پایه اعتماد برای مدیریت حالت قابل اعتماد بنا می‌شود",
      ],
      tags: ["برآیند پرده سوم", "ستون فقرات اعتماد", "پایه ASIL-D", "تمایز رقابتی", "معماری ایمنی"],
    },
  },
  {
    id: 46, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(46),
    en: {
      title: "Memory Architecture Overview — Layered State Management for Autonomous Agents",
      narrative: "TWIN's memory architecture implements layered state management for autonomous agents. The architecture has four layers: (1) Working Memory — current sensor readings and immediate context, sub-millisecond access; (2) Episodic Memory — recent event sequences and outcomes, millisecond access; (3) Semantic Memory — learned world models and domain knowledge, tens of milliseconds access; (4) Procedural Memory — learned action policies and skills, compiled to fast lookup tables. Each layer has distinct persistence, access patterns, and update mechanisms.",
      strategic: "Layered memory architecture is the cognitive infrastructure that enables TWIN's agents to make context-aware decisions. Without structured memory, agents can only react to immediate sensor inputs — they cannot learn from experience, maintain situational awareness, or apply domain knowledge. With layered memory, agents integrate immediate perception with historical context and learned knowledge — enabling the kind of contextual decision-making required for safe autonomous driving.",
      keyPoints: [
        "Four memory layers: working, episodic, semantic, procedural",
        "Access time hierarchy: sub-ms to tens of ms across layers",
        "Distinct update mechanisms: each layer updated at different rates and triggers",
        "Cognitive foundation: layered memory enables context-aware decision-making",
      ],
      tags: ["Memory Architecture", "Layered Memory", "Working Memory", "Episodic Memory", "Semantic Memory"],
    },
    fa: {
      title: "نمای کلی معماری حافظه — مدیریت حالت لایه‌ای برای عوامل هوشمند خودمختار",
      narrative: "معماری حافظه TWIN مدیریت حالت لایه‌ای را برای عوامل هوشمند خودمختار پیاده‌سازی می‌کند. معماری چهار لایه دارد: (۱) حافظه کاری — قرائت‌های حسگر فعلی و زمینه فوری؛ (۲) حافظه رویدادی — توالی‌های رویداد اخیر؛ (۳) حافظه معنایی — مدل‌های جهان آموخته‌شده؛ (۴) حافظه رویه‌ای — سیاست‌های عمل آموخته‌شده.",
      strategic: "معماری حافظه لایه‌ای زیرساخت شناختی است که عوامل هوشمند TWIN را قادر می‌سازد تصمیمات زمینه‌آگاه بگیرند. بدون حافظه ساختاریافته، کارگزاران فقط می‌توانند به ورودی‌های حسگر فوری واکنش نشان دهند — نمی‌توانند از تجربه یاد بگیرند، آگاهی موقعیتی را حفظ کنند، یا دانش دامنه را اعمال کنند.",
      keyPoints: [
        "چهار لایه حافظه: کاری، رویدادی، معنایی، رویه‌ای",
        "سلسله‌مراتب زمان دسترسی: زیر-ms تا ده‌ها ms در لایه‌ها",
        "مکانیزم‌های به‌روزرسانی متمایز: هر لایه با نرخ‌ها و محرک‌های مختلف به‌روزرسانی می‌شود",
        "پایه شناختی: حافظه لایه‌ای تصمیم‌گیری زمینه‌آگاه را فعال می‌کند",
      ],
      tags: ["معماری حافظه", "حافظه لایه‌ای", "حافظه کاری", "حافظه رویدادی", "حافظه معنایی"],
    },
  },
  {
    id: 47, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(47),
    en: {
      title: "Write-Ahead Log — Crash-Consistent State Persistence for Agent Memory",
      narrative: "WriteAheadLog implements crash-consistent state persistence for TWIN's agent memory. The WAL protocol: (1) before any state change, the intended change is written to the log; (2) the log entry is flushed to durable storage; (3) the state change is applied to memory; (4) the log entry is marked complete. On crash recovery, incomplete log entries are replayed to restore consistent state. The WAL is shared across agents for distributed consistency.",
      strategic: "Write-ahead logging is the database technique that provides crash consistency for TWIN's agent state. Without WAL, a power failure or hardware reset during a state update could leave agent memory in an inconsistent state — potentially causing incorrect decisions after recovery. With WAL, agent state is always recoverable to a consistent point, ensuring that recovery from hardware failures does not compromise safety.",
      keyPoints: [
        "Four-step WAL protocol: log intent, flush, apply, mark complete",
        "Crash recovery: incomplete log entries replayed on restart",
        "Distributed WAL: shared across agents for cross-agent consistency",
        "Safety guarantee: hardware failures don't leave agent state inconsistent",
      ],
      tags: ["Write-Ahead Log", "WAL", "Crash Consistency", "State Persistence", "Recovery"],
    },
    fa: {
      title: "گزارش پیش‌نویس — پایداری حالت سازگار با خرابی برای حافظه کارگزار",
      narrative: "WriteAheadLog پایداری حالت سازگار با خرابی را برای حافظه کارگزار TWIN پیاده‌سازی می‌کند. پروتکل WAL: (۱) قبل از هر تغییر حالت، تغییر مورد نظر در گزارش نوشته می‌شود؛ (۲) ورودی گزارش به ذخیره‌سازی بادوام شسته می‌شود؛ (۳) تغییر حالت به حافظه اعمال می‌شود؛ (۴) ورودی گزارش کامل علامت‌گذاری می‌شود. در بازیابی از خرابی، ورودی‌های گزارش ناقص برای بازگرداندن حالت سازگار پخش می‌شوند.",
      strategic: "ثبت‌گذاری پیش‌نویس تکنیک پایگاه داده است که سازگاری خرابی را برای حالت کارگزار TWIN فراهم می‌کند. بدون WAL، یک قطع برق یا بازنشانی سخت‌افزاری در طول به‌روزرسانی حالت می‌تواند حافظه کارگزار را در حالت ناسازگار باقی بگذارد.",
      keyPoints: [
        "پروتکل WAL چهارمرحله‌ای: ثبت نیت، شستن، اعمال، علامت‌گذاری کامل",
        "بازیابی از خرابی: ورودی‌های گزارش ناقص در راه‌اندازی مجدد پخش می‌شوند",
        "WAL توزیع‌شده: در سراسر کارگزاران برای سازگاری بین‌کارگزاری مشترک است",
        "ضمانت ایمنی: خرابی‌های سخت‌افزاری حالت کارگزار را ناسازگار باقی نمی‌گذارند",
      ],
      tags: ["گزارش پیش‌نویس", "WAL", "سازگاری خرابی", "پایداری حالت", "بازیابی"],
    },
  },
  {
    id: 48, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(48),
    en: {
      title: "Distributed State Synchronization — Cross-Agent Memory Consistency Protocol",
      narrative: "DistributedStateSynchronization implements cross-agent memory consistency for TWIN's distributed agent network. The synchronization protocol uses a vector clock-based approach: each agent maintains a vector clock tracking the logical time of all agents it communicates with. State updates are tagged with vector clock timestamps; agents apply updates in causal order. Conflicts (concurrent updates to the same state) are resolved using application-specific merge functions.",
      strategic: "Distributed state synchronization is the consistency mechanism that enables TWIN's agents to maintain a coherent shared world model despite operating on separate hardware. Without synchronization, agents would have divergent views of vehicle state — potentially making conflicting decisions based on inconsistent information. With synchronization, all agents operate from a causally consistent shared state, enabling coordinated decision-making.",
      keyPoints: [
        "Vector clock timestamps: causal ordering of state updates across agents",
        "Causal consistency: updates applied in causal order, not just temporal order",
        "Conflict resolution: application-specific merge functions for concurrent updates",
        "Coherent world model: all agents maintain causally consistent shared state",
      ],
      tags: ["Distributed Synchronization", "Vector Clocks", "Causal Consistency", "State Consistency", "World Model"],
    },
    fa: {
      title: "همگام‌سازی حالت توزیع‌شده — پروتکل سازگاری حافظه بین‌کارگزاری",
      narrative: "DistributedStateSynchronization سازگاری حافظه بین‌کارگزاری را برای شبکه کارگزار توزیع‌شده TWIN پیاده‌سازی می‌کند. پروتکل همگام‌سازی از رویکرد مبتنی بر ساعت برداری استفاده می‌کند: هر کارگزار یک ساعت برداری نگه می‌دارد که زمان منطقی همه کارگزارانی که با آن‌ها ارتباط برقرار می‌کند را ردیابی می‌کند.",
      strategic: "همگام‌سازی حالت توزیع‌شده مکانیزم سازگاری است که عوامل هوشمند TWIN را قادر می‌سازد یک مدل جهان مشترک منسجم را علی‌رغم عملکرد بر روی سخت‌افزار جداگانه حفظ کنند. بدون همگام‌سازی، کارگزاران دیدگاه‌های متفاوتی از حالت خودرو داشتند.",
      keyPoints: [
        "مهرهای زمانی ساعت برداری: ترتیب علّی به‌روزرسانی‌های حالت در سراسر کارگزاران",
        "سازگاری علّی: به‌روزرسانی‌ها به ترتیب علّی اعمال می‌شوند، نه فقط ترتیب زمانی",
        "حل تعارض: توابع ادغام خاص برنامه برای به‌روزرسانی‌های همزمان",
        "مدل جهان منسجم: همه کارگزاران حالت مشترک سازگار علّی را حفظ می‌کنند",
      ],
      tags: ["همگام‌سازی توزیع‌شده", "ساعت‌های برداری", "سازگاری علّی", "سازگاری حالت", "مدل جهان"],
    },
  },
  {
    id: 49, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(49),
    en: {
      title: "Episodic Memory Engine — Experience-Based Learning for Contextual Decisions",
      narrative: "EpisodicMemoryEngine implements experience-based learning through structured storage and retrieval of past episodes. Each episode captures: situation (sensor state, context), action taken, outcome (success/failure, consequences). The retrieval mechanism uses similarity search to find past episodes relevant to the current situation. Retrieved episodes inform current decisions through case-based reasoning: 'in similar past situations, action X led to outcome Y'.",
      strategic: "Episodic memory is the mechanism by which TWIN's agents learn from operational experience without requiring explicit retraining. Traditional ML systems require batch retraining to incorporate new experience; TWIN's episodic memory enables continuous learning through experience accumulation. This is particularly valuable for rare but important scenarios — a near-miss event is stored as an episode and influences future decisions in similar situations.",
      keyPoints: [
        "Episode structure: situation, action, outcome — complete experience record",
        "Similarity-based retrieval: relevant past episodes retrieved for current situation",
        "Case-based reasoning: past outcomes inform current decisions",
        "Continuous learning: experience accumulated without batch retraining",
      ],
      tags: ["Episodic Memory", "Experience-Based Learning", "Case-Based Reasoning", "Continuous Learning", "Similarity Search"],
    },
    fa: {
      title: "موتور حافظه رویدادی — یادگیری مبتنی بر تجربه برای تصمیمات زمینه‌ای",
      narrative: "EpisodicMemoryEngine یادگیری مبتنی بر تجربه را از طریق ذخیره‌سازی ساختاریافته و بازیابی رویدادهای گذشته پیاده‌سازی می‌کند. هر رویداد ثبت می‌کند: موقعیت (حالت حسگر، زمینه)، عمل انجام‌شده، نتیجه (موفقیت/شکست). مکانیزم بازیابی از جستجوی شباهت برای یافتن رویدادهای گذشته مرتبط با موقعیت فعلی استفاده می‌کند.",
      strategic: "حافظه رویدادی مکانیزمی است که از طریق آن عوامل هوشمند TWIN از تجربه عملیاتی بدون نیاز به بازآموزی صریح یاد می‌گیرند. سیستم‌های ML سنتی برای ترکیب تجربه جدید به بازآموزی دسته‌ای نیاز دارند؛ حافظه رویدادی TWIN یادگیری پیوسته را از طریق تجمع تجربه فعال می‌کند.",
      keyPoints: [
        "ساختار رویداد: موقعیت، عمل، نتیجه — سابقه تجربه کامل",
        "بازیابی مبتنی بر شباهت: رویدادهای گذشته مرتبط برای موقعیت فعلی بازیابی می‌شوند",
        "استدلال مبتنی بر مورد: نتایج گذشته تصمیمات فعلی را آگاه می‌کنند",
        "یادگیری پیوسته: تجربه بدون بازآموزی دسته‌ای تجمع می‌یابد",
      ],
      tags: ["حافظه رویدادی", "یادگیری مبتنی بر تجربه", "استدلال مبتنی بر مورد", "یادگیری پیوسته", "جستجوی شباهت"],
    },
  },
  {
    id: 50, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(50),
    en: {
      title: "Semantic Memory Store — Structured World Knowledge for Autonomous Navigation",
      narrative: "SemanticMemoryStore implements structured world knowledge for autonomous navigation. The semantic store contains: (1) map knowledge — road topology, lane configurations, traffic rules; (2) object models — vehicle types, pedestrian behavior patterns, obstacle characteristics; (3) environmental models — weather effects on sensor performance, road surface conditions; (4) domain rules — traffic laws, right-of-way rules, emergency vehicle protocols. Knowledge is structured as a property graph enabling efficient relational queries.",
      strategic: "Semantic memory is the domain knowledge layer that enables TWIN's agents to interpret sensor data in the context of the real world. Without semantic memory, agents can detect objects but cannot understand their significance — a detected object is just a point cloud, not a pedestrian with right-of-way. With semantic memory, agents interpret sensor data in terms of traffic rules, object behaviors, and environmental context — enabling safe, contextually appropriate decisions.",
      keyPoints: [
        "Four knowledge categories: map, object models, environmental models, domain rules",
        "Property graph structure: efficient relational queries across knowledge categories",
        "Sensor interpretation: raw sensor data interpreted in real-world context",
        "Contextual decisions: semantic knowledge enables contextually appropriate responses",
      ],
      tags: ["Semantic Memory", "World Knowledge", "Property Graph", "Domain Rules", "Sensor Interpretation"],
    },
    fa: {
      title: "حافظه معنایی — دانش جهان ساختاریافته برای ناوبری خودمختار",
      narrative: "SemanticMemoryStore دانش جهان ساختاریافته را برای ناوبری خودمختار پیاده‌سازی می‌کند. حافظه معنایی شامل است: (۱) دانش نقشه — توپولوژی جاده، پیکربندی‌های خط، قوانین ترافیک؛ (۲) مدل‌های اشیاء؛ (۳) مدل‌های محیطی؛ (۴) قوانین دامنه — قوانین ترافیک، قوانین حق تقدم. دانش به‌عنوان یک گراف ویژگی ساختاریافته است.",
      strategic: "حافظه معنایی لایه دانش دامنه است که عوامل هوشمند TWIN را قادر می‌سازد داده حسگر را در زمینه دنیای واقعی تفسیر کنند. بدون حافظه معنایی، کارگزاران می‌توانند اشیاء را تشخیص دهند اما نمی‌توانند اهمیت آن‌ها را درک کنند. با حافظه معنایی، کارگزاران داده حسگر را بر اساس قوانین ترافیک، رفتارهای اشیاء، و زمینه محیطی تفسیر می‌کنند.",
      keyPoints: [
        "چهار دسته دانش: نقشه، مدل‌های اشیاء، مدل‌های محیطی، قوانین دامنه",
        "ساختار گراف ویژگی: پرس‌وجوهای رابطه‌ای کارآمد در سراسر دسته‌های دانش",
        "تفسیر حسگر: داده خام حسگر در زمینه دنیای واقعی تفسیر می‌شود",
        "تصمیمات زمینه‌ای: دانش معنایی پاسخ‌های متناسب با زمینه را فعال می‌کند",
      ],
      tags: ["حافظه معنایی", "دانش جهان", "گراف ویژگی", "قوانین دامنه", "تفسیر حسگر"],
    },
  },
  {
    id: 51, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(51),
    en: {
      title: "Memory Consolidation — Transferring Experience to Long-Term Knowledge",
      narrative: "MemoryConsolidation implements the transfer of episodic experiences to semantic long-term knowledge. The consolidation process: (1) pattern extraction — identify recurring patterns across multiple episodes; (2) generalization — abstract specific experiences into general rules; (3) conflict resolution — resolve contradictions between new patterns and existing knowledge; (4) integration — add validated patterns to semantic memory. Consolidation runs during low-activity periods to minimize impact on real-time performance.",
      strategic: "Memory consolidation is the learning mechanism that converts operational experience into durable knowledge improvements. Without consolidation, episodic memory grows indefinitely and agents cannot benefit from patterns across many experiences. With consolidation, TWIN's agents continuously improve their semantic knowledge base — learning from operational experience and becoming more capable over time without requiring explicit retraining.",
      keyPoints: [
        "Four consolidation steps: pattern extraction, generalization, conflict resolution, integration",
        "Low-activity scheduling: consolidation runs during periods of low real-time load",
        "Durable knowledge: episodic patterns converted to semantic rules",
        "Continuous improvement: agents improve knowledge base from operational experience",
      ],
      tags: ["Memory Consolidation", "Pattern Extraction", "Generalization", "Long-Term Knowledge", "Continuous Learning"],
    },
    fa: {
      title: "تثبیت حافظه — انتقال تجربه به دانش بلندمدت",
      narrative: "MemoryConsolidation انتقال تجربیات رویدادی به دانش معنایی بلندمدت را پیاده‌سازی می‌کند. فرآیند تثبیت: (۱) استخراج الگو — شناسایی الگوهای تکرارشونده در چندین رویداد؛ (۲) تعمیم — انتزاع تجربیات خاص به قوانین عمومی؛ (۳) حل تعارض؛ (۴) یکپارچه‌سازی. تثبیت در دوره‌های فعالیت کم اجرا می‌شود.",
      strategic: "تثبیت حافظه مکانیزم یادگیری است که تجربه عملیاتی را به بهبودهای دانش بادوام تبدیل می‌کند. بدون تثبیت، حافظه رویدادی به‌طور نامحدود رشد می‌کند و کارگزاران نمی‌توانند از الگوها در بسیاری از تجربیات بهره‌مند شوند. با تثبیت، عوامل هوشمند TWIN به‌طور مداوم پایگاه دانش معنایی خود را بهبود می‌دهند.",
      keyPoints: [
        "چهار مرحله تثبیت: استخراج الگو، تعمیم، حل تعارض، یکپارچه‌سازی",
        "زمان‌بندی فعالیت کم: تثبیت در دوره‌های بار بلادرنگ کم اجرا می‌شود",
        "دانش بادوام: الگوهای رویدادی به قوانین معنایی تبدیل می‌شوند",
        "بهبود پیوسته: کارگزاران پایگاه دانش را از تجربه عملیاتی بهبود می‌دهند",
      ],
      tags: ["تثبیت حافظه", "استخراج الگو", "تعمیم", "دانش بلندمدت", "یادگیری پیوسته"],
    },
  },
  {
    id: 52, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(52),
    en: {
      title: "Memory Partitioning — Isolation and Access Control for Multi-Agent State",
      narrative: "MemoryPartitioning implements isolation and access control for multi-agent state management. Each agent has: (1) private memory — state accessible only to the owning agent; (2) shared memory — state accessible to authorized agents; (3) consensus memory — state that requires BFT consensus to modify. Access control is enforced at the memory layer: unauthorized reads/writes are rejected before reaching the agent logic. Partition boundaries are defined in the agent capability specification.",
      strategic: "Memory partitioning is the security and correctness mechanism that prevents agents from interfering with each other's state. Without partitioning, a Byzantine agent could corrupt another agent's memory — undermining the BFT consensus guarantees. With partitioning, each agent's private state is protected from unauthorized access, and shared state modifications require proper authorization. This isolation is essential for maintaining the independence assumptions required by BFT.",
      keyPoints: [
        "Three partition types: private, shared, consensus",
        "Access control enforcement: unauthorized access rejected at memory layer",
        "BFT independence: partitioning maintains the independence assumptions required by BFT",
        "Capability-based access: partition access defined in agent capability specification",
      ],
      tags: ["Memory Partitioning", "Isolation", "Access Control", "BFT Independence", "Multi-Agent State"],
    },
    fa: {
      title: "پارتیشن‌بندی حافظه — انزوا و کنترل دسترسی برای حالت چندعاملی",
      narrative: "MemoryPartitioning انزوا و کنترل دسترسی را برای مدیریت حالت چندعاملی پیاده‌سازی می‌کند. هر کارگزار دارد: (۱) حافظه خصوصی — حالت فقط برای کارگزار مالک قابل دسترسی؛ (۲) حافظه مشترک — حالت برای کارگزاران مجاز قابل دسترسی؛ (۳) حافظه اجماع — حالتی که برای تغییر به اجماع BFT نیاز دارد.",
      strategic: "پارتیشن‌بندی حافظه مکانیزم امنیت و صحت است که از تداخل کارگزاران با حالت یکدیگر جلوگیری می‌کند. بدون پارتیشن‌بندی، یک کارگزار بیزانسی می‌تواند حافظه کارگزار دیگری را خراب کند — تضعیف ضمانت‌های اجماع BFT.",
      keyPoints: [
        "سه نوع پارتیشن: خصوصی، مشترک، اجماع",
        "اجرای کنترل دسترسی: دسترسی غیرمجاز در لایه حافظه رد می‌شود",
        "استقلال BFT: پارتیشن‌بندی فرضیات استقلال مورد نیاز BFT را حفظ می‌کند",
        "دسترسی مبتنی بر قابلیت: دسترسی پارتیشن در مشخصات قابلیت کارگزار تعریف شده",
      ],
      tags: ["پارتیشن‌بندی حافظه", "انزوا", "کنترل دسترسی", "استقلال BFT", "حالت چندعاملی"],
    },
  },
  {
    id: 53, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(53),
    en: {
      title: "Temporal Memory Management — Time-Aware State Expiry and Relevance Decay",
      narrative: "TemporalMemoryManager implements time-aware state management with expiry and relevance decay. Each memory entry has: (1) creation timestamp; (2) expiry time — absolute time after which the entry is invalid; (3) relevance decay function — how quickly the entry's influence on decisions decreases with age. Safety-critical state (sensor readings, control commands) has short expiry; strategic knowledge has long expiry. Expired entries are garbage collected to prevent memory bloat.",
      strategic: "Temporal memory management is the mechanism that ensures TWIN's agents operate on current information. Autonomous vehicles operate in dynamic environments where conditions change rapidly — a sensor reading from 500ms ago may be dangerously outdated. By enforcing temporal validity on all memory entries, TWIN ensures that decisions are based on current information, preventing stale data from causing incorrect decisions.",
      keyPoints: [
        "Three temporal attributes: creation timestamp, expiry time, relevance decay",
        "Safety-critical expiry: sensor readings and control commands expire quickly",
        "Strategic knowledge longevity: domain knowledge and policies expire slowly",
        "Garbage collection: expired entries removed to prevent memory bloat",
      ],
      tags: ["Temporal Memory", "State Expiry", "Relevance Decay", "Temporal Validity", "Garbage Collection"],
    },
    fa: {
      title: "مدیریت حافظه زمانی — انقضای حالت زمان‌آگاه و کاهش ارتباط",
      narrative: "TemporalMemoryManager مدیریت حالت زمان‌آگاه را با انقضا و کاهش ارتباط پیاده‌سازی می‌کند. هر ورودی حافظه دارد: (۱) مهر زمانی ایجاد؛ (۲) زمان انقضا — زمان مطلقی که پس از آن ورودی نامعتبر است؛ (۳) تابع کاهش ارتباط. حالت ایمنی‌بحرانی انقضای کوتاه دارد؛ دانش استراتژیک انقضای طولانی دارد.",
      strategic: "مدیریت حافظه زمانی مکانیزمی است که تضمین می‌کند عوامل هوشمند TWIN بر اساس اطلاعات فعلی عمل می‌کنند. خودروهای خودمختار در محیط‌های پویا عمل می‌کنند که شرایط به سرعت تغییر می‌کند — یک قرائت حسگر از ۵۰۰ms پیش ممکن است خطرناک منسوخ باشد.",
      keyPoints: [
        "سه ویژگی زمانی: مهر زمانی ایجاد، زمان انقضا، کاهش ارتباط",
        "انقضای ایمنی‌بحرانی: قرائت‌های حسگر و دستورات کنترل به سرعت منقضی می‌شوند",
        "طول عمر دانش استراتژیک: دانش دامنه و سیاست‌ها به آرامی منقضی می‌شوند",
        "جمع‌آوری زباله: ورودی‌های منقضی برای جلوگیری از انبساط حافظه حذف می‌شوند",
      ],
      tags: ["حافظه زمانی", "انقضای حالت", "کاهش ارتباط", "اعتبار زمانی", "جمع‌آوری زباله"],
    },
  },
  {
    id: 54, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(54),
    en: {
      title: "Memory Compression — Efficient Storage of High-Frequency Sensor Data",
      narrative: "MemoryCompressor implements efficient storage of high-frequency sensor data streams. Compression strategies: (1) temporal compression — store deltas rather than absolute values for slowly changing state; (2) spatial compression — store compressed representations of point cloud data; (3) semantic compression — replace raw sensor data with semantic labels when confidence is sufficient; (4) importance-weighted retention — retain high-importance events at full fidelity, compress routine events. Compression ratios of 10-50x achieved without safety-relevant information loss.",
      strategic: "Memory compression is the storage efficiency mechanism that makes TWIN's episodic memory practical for automotive deployment. LiDAR and camera sensors generate hundreds of megabytes per second; without compression, episodic memory would exhaust available storage within minutes. With compression, TWIN can retain hours of operational experience — providing the historical context required for effective episodic learning and incident analysis.",
      keyPoints: [
        "Four compression strategies: temporal, spatial, semantic, importance-weighted",
        "10-50x compression: practical storage efficiency without safety information loss",
        "Semantic compression: raw sensor data replaced with semantic labels when confidence sufficient",
        "Hours of retention: compressed storage enables hours of operational experience",
      ],
      tags: ["Memory Compression", "Sensor Data", "Temporal Compression", "Semantic Compression", "Storage Efficiency"],
    },
    fa: {
      title: "فشرده‌سازی حافظه — ذخیره‌سازی کارآمد داده حسگر با فرکانس بالا",
      narrative: "MemoryCompressor ذخیره‌سازی کارآمد جریان‌های داده حسگر با فرکانس بالا را پیاده‌سازی می‌کند. راهبردهای فشرده‌سازی: (۱) فشرده‌سازی زمانی — ذخیره دلتاها به‌جای مقادیر مطلق؛ (۲) فشرده‌سازی فضایی — ذخیره نمایش‌های فشرده داده ابر نقطه؛ (۳) فشرده‌سازی معنایی؛ (۴) نگهداری وزن‌دهی‌شده با اهمیت. نسبت فشرده‌سازی ۱۰-۵۰x بدون از دست دادن اطلاعات مرتبط با ایمنی.",
      strategic: "فشرده‌سازی حافظه مکانیزم کارایی ذخیره‌سازی است که حافظه رویدادی TWIN را برای استقرار خودرویی عملی می‌کند. حسگرهای LiDAR و دوربین صدها مگابایت در ثانیه تولید می‌کنند؛ بدون فشرده‌سازی، حافظه رویدادی در عرض چند دقیقه ذخیره‌سازی موجود را تمام می‌کند.",
      keyPoints: [
        "چهار راهبرد فشرده‌سازی: زمانی، فضایی، معنایی، وزن‌دهی‌شده با اهمیت",
        "فشرده‌سازی ۱۰-۵۰x: کارایی ذخیره‌سازی عملی بدون از دست دادن اطلاعات ایمنی",
        "فشرده‌سازی معنایی: داده خام حسگر با برچسب‌های معنایی جایگزین می‌شود",
        "ساعت‌ها نگهداری: ذخیره‌سازی فشرده ساعت‌ها تجربه عملیاتی را فعال می‌کند",
      ],
      tags: ["فشرده‌سازی حافظه", "داده حسگر", "فشرده‌سازی زمانی", "فشرده‌سازی معنایی", "کارایی ذخیره‌سازی"],
    },
  },
  {
    id: 55, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(55),
    en: {
      title: "Fleet Memory Sharing — Cross-Vehicle Knowledge Transfer for Collective Intelligence",
      narrative: "FleetMemorySharing implements cross-vehicle knowledge transfer for collective intelligence. Sharing mechanisms: (1) semantic knowledge updates — new traffic rules, map updates, object model improvements shared fleet-wide; (2) rare event episodes — unusual situations shared to benefit all vehicles; (3) model improvements — improved prediction models shared after validation; (4) safety alerts — newly discovered hazards immediately shared. Sharing uses differential updates to minimize bandwidth; privacy-preserving techniques ensure no individual vehicle data is exposed.",
      strategic: "Fleet memory sharing is the network effect mechanism that makes each vehicle's experience benefit all vehicles. Without sharing, each vehicle learns independently — a rare hazard encountered by one vehicle is not shared with others. With sharing, the fleet collectively learns from all vehicles' experiences — rare events encountered by any vehicle immediately improve the safety of all vehicles. This collective intelligence creates an increasing capability advantage as the fleet grows.",
      keyPoints: [
        "Four sharing categories: semantic updates, rare episodes, model improvements, safety alerts",
        "Differential updates: bandwidth-efficient sharing of knowledge changes",
        "Privacy preservation: individual vehicle data not exposed in shared updates",
        "Collective intelligence: fleet learns from all vehicles' experiences simultaneously",
      ],
      tags: ["Fleet Memory Sharing", "Collective Intelligence", "Cross-Vehicle Learning", "Network Effect", "Privacy Preservation"],
    },
    fa: {
      title: "اشتراک‌گذاری حافظه ناوگان — انتقال دانش بین‌خودرویی برای هوشمندی جمعی",
      narrative: "FleetMemorySharing انتقال دانش بین‌خودرویی را برای هوشمندی جمعی پیاده‌سازی می‌کند. مکانیزم‌های اشتراک‌گذاری: (۱) به‌روزرسانی‌های دانش معنایی — قوانین ترافیک جدید، به‌روزرسانی‌های نقشه در سطح ناوگان مشترک می‌شوند؛ (۲) رویدادهای نادر؛ (۳) بهبودهای مدل؛ (۴) هشدارهای ایمنی — خطرات تازه کشف‌شده فوراً مشترک می‌شوند.",
      strategic: "اشتراک‌گذاری حافظه ناوگان مکانیزم اثر شبکه است که تجربه هر خودرو را به نفع همه خودروها می‌کند. بدون اشتراک‌گذاری، هر خودرو به‌طور مستقل یاد می‌گیرد. با اشتراک‌گذاری، ناوگان به‌طور جمعی از تجربیات همه خودروها یاد می‌گیرد — رویدادهای نادر با هر خودرویی بلافاصله ایمنی همه خودروها را بهبود می‌دهند.",
      keyPoints: [
        "چهار دسته اشتراک‌گذاری: به‌روزرسانی‌های معنایی، رویدادهای نادر، بهبودهای مدل، هشدارهای ایمنی",
        "به‌روزرسانی‌های دیفرانسیل: اشتراک‌گذاری کارآمد از نظر پهنای باند از تغییرات دانش",
        "حفظ حریم خصوصی: داده خودروی فردی در به‌روزرسانی‌های مشترک افشا نمی‌شود",
        "هوشمندی جمعی: ناوگان به‌طور همزمان از تجربیات همه خودروها یاد می‌گیرد",
      ],
      tags: ["اشتراک‌گذاری حافظه ناوگان", "هوشمندی جمعی", "یادگیری بین‌خودرویی", "اثر شبکه", "حفظ حریم خصوصی"],
    },
  },
  {
    id: 56, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(56),
    en: {
      title: "Memory Integrity Verification — Ensuring Correctness of Distributed Agent State",
      narrative: "MemoryIntegrityVerifier implements correctness verification for distributed agent state. Verification mechanisms: (1) checksums — hash-based integrity verification for all memory entries; (2) cross-agent validation — agents periodically compare shared state to detect divergence; (3) consistency proofs — BFT consensus used to establish ground truth for critical shared state; (4) anomaly detection — statistical analysis of state update patterns to detect corruption. Integrity violations trigger state recovery from WAL.",
      strategic: "Memory integrity verification is the correctness assurance mechanism that ensures TWIN's agents operate on valid state. In distributed systems, hardware failures, network errors, and Byzantine agents can corrupt memory state. Without integrity verification, corrupted state might go undetected and cause incorrect decisions. With verification, corruption is detected immediately and state is recovered from the write-ahead log — maintaining correctness guarantees.",
      keyPoints: [
        "Four verification mechanisms: checksums, cross-agent validation, consistency proofs, anomaly detection",
        "WAL recovery: integrity violations trigger state recovery from write-ahead log",
        "BFT ground truth: consensus used to establish correct shared state",
        "Immediate detection: corruption detected before affecting decisions",
      ],
      tags: ["Memory Integrity", "Checksum Verification", "Cross-Agent Validation", "State Corruption", "WAL Recovery"],
    },
    fa: {
      title: "تأیید یکپارچگی حافظه — تضمین صحت حالت کارگزار توزیع‌شده",
      narrative: "MemoryIntegrityVerifier تأیید صحت را برای حالت کارگزار توزیع‌شده پیاده‌سازی می‌کند. مکانیزم‌های تأیید: (۱) جمع‌های کنترلی — تأیید یکپارچگی مبتنی بر هش برای همه ورودی‌های حافظه؛ (۲) تأیید بین‌کارگزاری؛ (۳) اثبات‌های سازگاری — اجماع BFT برای ایجاد حقیقت زمینه برای حالت مشترک بحرانی؛ (۴) تشخیص ناهنجاری. نقض یکپارچگی بازیابی حالت از WAL را راه‌اندازی می‌کند.",
      strategic: "تأیید یکپارچگی حافظه مکانیزم تضمین صحت است که تضمین می‌کند عوامل هوشمند TWIN بر اساس حالت معتبر عمل می‌کنند. در سیستم‌های توزیع‌شده، خرابی‌های سخت‌افزاری، خطاهای شبکه، و کارگزاران بیزانسی می‌توانند حالت حافظه را خراب کنند.",
      keyPoints: [
        "چهار مکانیزم تأیید: جمع‌های کنترلی، تأیید بین‌کارگزاری، اثبات‌های سازگاری، تشخیص ناهنجاری",
        "بازیابی WAL: نقض یکپارچگی بازیابی حالت از گزارش پیش‌نویس را راه‌اندازی می‌کند",
        "حقیقت زمینه BFT: اجماع برای ایجاد حالت مشترک صحیح استفاده می‌شود",
        "تشخیص فوری: خرابی قبل از تأثیرگذاری بر تصمیمات تشخیص داده می‌شود",
      ],
      tags: ["یکپارچگی حافظه", "تأیید جمع کنترلی", "تأیید بین‌کارگزاری", "خرابی حالت", "بازیابی WAL"],
    },
  },
  {
    id: 57, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(57),
    en: {
      title: "Procedural Memory — Compiled Action Policies for Real-Time Execution",
      narrative: "ProceduralMemory implements compiled action policies for real-time execution. Procedural memory stores: (1) reactive policies — fast lookup tables mapping situation patterns to actions; (2) skill sequences — parameterized action sequences for common maneuvers; (3) learned heuristics — rules extracted from successful episodic patterns; (4) safety filters — hard constraints applied to all procedural outputs. Policies are compiled to efficient lookup structures for sub-millisecond execution.",
      strategic: "Procedural memory is the performance optimization that enables TWIN's agents to execute common actions at real-time speeds without deliberative reasoning. Deliberative reasoning (searching semantic memory, evaluating options) takes tens of milliseconds — too slow for emergency responses. Procedural memory provides pre-computed responses to common situations, enabling sub-millisecond reaction times for routine actions while reserving deliberative capacity for novel situations.",
      keyPoints: [
        "Four procedural types: reactive policies, skill sequences, learned heuristics, safety filters",
        "Sub-millisecond execution: compiled lookup tables enable real-time response",
        "Safety filtering: hard constraints applied to all procedural outputs",
        "Deliberative capacity preservation: routine actions handled procedurally, freeing deliberation for novel situations",
      ],
      tags: ["Procedural Memory", "Compiled Policies", "Reactive Control", "Real-Time Execution", "Safety Filters"],
    },
    fa: {
      title: "حافظه رویه‌ای — سیاست‌های عمل کامپایل‌شده برای اجرای بلادرنگ",
      narrative: "ProceduralMemory سیاست‌های عمل کامپایل‌شده را برای اجرای بلادرنگ پیاده‌سازی می‌کند. حافظه رویه‌ای ذخیره می‌کند: (۱) سیاست‌های واکنشی — جداول جستجوی سریع که الگوهای موقعیت را به اعمال نگاشت می‌کنند؛ (۲) توالی‌های مهارت؛ (۳) اکتشافات آموخته‌شده؛ (۴) فیلترهای ایمنی. سیاست‌ها به ساختارهای جستجوی کارآمد برای اجرای زیر-میلی‌ثانیه کامپایل می‌شوند.",
      strategic: "حافظه رویه‌ای بهینه‌سازی عملکرد است که عوامل هوشمند TWIN را قادر می‌سازد اعمال رایج را با سرعت‌های بلادرنگ بدون استدلال تأملی اجرا کنند. استدلال تأملی ده‌ها میلی‌ثانیه طول می‌کشد — برای پاسخ‌های اضطراری خیلی کند. حافظه رویه‌ای پاسخ‌های از پیش محاسبه‌شده به موقعیت‌های رایج ارائه می‌دهد.",
      keyPoints: [
        "چهار نوع رویه‌ای: سیاست‌های واکنشی، توالی‌های مهارت، اکتشافات آموخته‌شده، فیلترهای ایمنی",
        "اجرای زیر-میلی‌ثانیه: جداول جستجوی کامپایل‌شده پاسخ بلادرنگ را فعال می‌کنند",
        "فیلترکردن ایمنی: محدودیت‌های سخت به همه خروجی‌های رویه‌ای اعمال می‌شوند",
        "حفظ ظرفیت تأملی: اعمال روتین به‌صورت رویه‌ای مدیریت می‌شوند، تأمل برای موقعیت‌های جدید آزاد می‌شود",
      ],
      tags: ["حافظه رویه‌ای", "سیاست‌های کامپایل‌شده", "کنترل واکنشی", "اجرای بلادرنگ", "فیلترهای ایمنی"],
    },
  },
  {
    id: 58, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(58),
    en: {
      title: "Memory Architecture Performance — Latency and Capacity Benchmarks",
      narrative: "Memory architecture performance benchmarks characterize TWIN's memory system under realistic automotive loads. Key results: (1) working memory access: 0.05ms median, 0.12ms P99; (2) episodic retrieval: 1.8ms median, 4.2ms P99 for similarity search over 10,000 episodes; (3) semantic query: 3.1ms median, 7.8ms P99 for property graph traversal; (4) WAL write: 0.3ms median, 0.8ms P99; (5) memory capacity: 48 hours of episodic memory at 10x compression; (6) fleet sync latency: 120ms median for semantic updates.",
      strategic: "Memory performance benchmarks validate that TWIN's memory architecture meets automotive real-time requirements while providing sufficient capacity for effective learning. The benchmarks demonstrate that all memory operations fit within their respective timing budgets — working memory within the 1ms control loop, episodic retrieval within the 10ms decision window, semantic queries within the 50ms planning horizon.",
      keyPoints: [
        "Working memory: 0.05ms median — within 1ms control loop budget",
        "Episodic retrieval: 1.8ms median — within 10ms decision window",
        "Semantic query: 3.1ms median — within 50ms planning horizon",
        "48-hour episodic capacity: sufficient for operational experience accumulation",
      ],
      tags: ["Memory Performance", "Latency Benchmarks", "Capacity", "Real-Time Requirements", "Timing Budget"],
    },
    fa: {
      title: "عملکرد معماری حافظه — معیارهای تأخیر و ظرفیت",
      narrative: "معیارهای عملکرد معماری حافظه سیستم حافظه TWIN را تحت بارهای واقعی خودرویی مشخص می‌کنند. نتایج کلیدی: (۱) دسترسی حافظه کاری: میانه ۰.۰۵ms؛ (۲) بازیابی رویدادی: میانه ۱.۸ms برای جستجوی شباهت بر روی ۱۰,۰۰۰ رویداد؛ (۳) پرس‌وجوی معنایی: میانه ۳.۱ms؛ (۴) نوشتن WAL: میانه ۰.۳ms؛ (۵) ظرفیت حافظه: ۴۸ ساعت حافظه رویدادی با فشرده‌سازی ۱۰x.",
      strategic: "معیارهای عملکرد حافظه تأیید می‌کنند که معماری حافظه TWIN الزامات بلادرنگ خودرویی را برآورده می‌کند در حالی که ظرفیت کافی برای یادگیری مؤثر فراهم می‌کند. معیارها نشان می‌دهند که همه عملیات حافظه در بودجه‌های زمان‌بندی مربوطه قرار می‌گیرند.",
      keyPoints: [
        "حافظه کاری: میانه ۰.۰۵ms — در بودجه حلقه کنترل ۱ms",
        "بازیابی رویدادی: میانه ۱.۸ms — در پنجره تصمیم ۱۰ms",
        "پرس‌وجوی معنایی: میانه ۳.۱ms — در افق برنامه‌ریزی ۵۰ms",
        "ظرفیت رویدادی ۴۸ ساعته: کافی برای تجمع تجربه عملیاتی",
      ],
      tags: ["عملکرد حافظه", "معیارهای تأخیر", "ظرفیت", "الزامات بلادرنگ", "بودجه زمان‌بندی"],
    },
  },
  {
    id: 59, act: "MemoryArch", actLabel: ACT_LABELS_D.MemoryArch, imageUrl: imgD(59),
    en: {
      title: "Act IV Synthesis — Memory as the Cognitive Foundation of Autonomous Intelligence",
      narrative: "Act IV establishes memory as the cognitive foundation that elevates TWIN from reactive control to genuine autonomous intelligence. The 14-slide arc covered: layered memory architecture, write-ahead log for crash consistency, distributed state synchronization, episodic memory engine, semantic memory store, memory consolidation, memory partitioning, temporal memory management, memory compression, fleet memory sharing, memory integrity verification, procedural memory, and performance benchmarks. Together these create a comprehensive cognitive infrastructure.",
      strategic: "The memory architecture is the differentiating capability that enables TWIN's agents to improve over time. Competing systems use static rule sets that require manual updates; TWIN's memory architecture enables continuous learning from operational experience. As the fleet accumulates experience, TWIN's agents become progressively more capable — creating an increasing performance advantage that compounds with fleet size and operational time.",
      keyPoints: [
        "14-slide arc: complete memory architecture from working memory to fleet sharing",
        "Cognitive elevation: memory transforms reactive control into genuine autonomous intelligence",
        "Continuous improvement: agents improve from operational experience without retraining",
        "Bridge to Act V: mechanical signal protocol builds on memory for reliable sensor-to-decision pipeline",
      ],
      tags: ["Act IV Synthesis", "Cognitive Foundation", "Autonomous Intelligence", "Continuous Improvement", "Memory Architecture"],
    },
    fa: {
      title: "برآیند پرده چهارم — حافظه به‌عنوان پایه شناختی هوشمندی خودمختار",
      narrative: "پرده چهارم حافظه را به‌عنوان پایه شناختی که TWIN را از کنترل واکنشی به هوشمندی خودمختار واقعی ارتقا می‌دهد برقرار می‌کند. قوس ۱۴ اسلایدی پوشش داد: معماری حافظه لایه‌ای، گزارش پیش‌نویس، همگام‌سازی حالت توزیع‌شده، موتور حافظه رویدادی، حافظه معنایی، تثبیت حافظه، پارتیشن‌بندی حافظه، مدیریت حافظه زمانی، فشرده‌سازی حافظه، اشتراک‌گذاری حافظه ناوگان، تأیید یکپارچگی حافظه، حافظه رویه‌ای، و معیارهای عملکرد.",
      strategic: "معماری حافظه قابلیت متمایزکننده‌ای است که عوامل هوشمند TWIN را قادر می‌سازد در طول زمان بهبود یابند. سیستم‌های رقیب از مجموعه قوانین ایستا استفاده می‌کنند که به به‌روزرسانی‌های دستی نیاز دارند؛ معماری حافظه TWIN یادگیری پیوسته از تجربه عملیاتی را فعال می‌کند.",
      keyPoints: [
        "قوس ۱۴ اسلایدی: معماری حافظه کامل از حافظه کاری تا اشتراک‌گذاری ناوگان",
        "ارتقای شناختی: حافظه کنترل واکنشی را به هوشمندی خودمختار واقعی تبدیل می‌کند",
        "بهبود پیوسته: کارگزاران از تجربه عملیاتی بدون بازآموزی بهبود می‌یابند",
        "پل به پرده پنجم: پروتکل سیگنال مکانیکی بر پایه حافظه برای خط لوله حسگر-به-تصمیم قابل اعتماد بنا می‌شود",
      ],
      tags: ["برآیند پرده چهارم", "پایه شناختی", "هوشمندی خودمختار", "بهبود پیوسته", "معماری حافظه"],
    },
  },
  {
    id: 60,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(60),
    en: {
      title: "Mechanical Signal Protocol — Bridging Software Agents and Physical Actuators",
      narrative: "The mechanical signal protocol is the critical interface layer that translates TWIN's software agent decisions into precise physical actuator commands. This protocol addresses the fundamental challenge of autonomous systems: software agents reason in abstract state spaces, but vehicles operate in continuous physical reality. The protocol defines: (1) signal encoding — how agent decisions are encoded as typed mechanical commands; (2) timing guarantees — hard real-time delivery within WCET bounds; (3) priority arbitration — resolving conflicts between concurrent agent commands; (4) feedback integration — closing the loop from physical sensors back to agent state.",
      strategic: "The mechanical signal protocol is the EPU integration point where TWIN's software intelligence becomes physical capability. Without this protocol, TWIN's agents are powerful reasoning engines with no connection to the vehicle. With it, every agent decision — from collision avoidance to energy optimization — translates directly into wheel torque, steering angle, and brake pressure with deterministic timing guarantees.",
      keyPoints: [
        "Signal encoding: typed mechanical commands with physical unit validation",
        "Hard real-time delivery: WCET-bounded signal transmission within 1ms",
        "Priority arbitration: safety-critical signals preempt optimization commands",
        "Feedback integration: physical sensor data closes the agent decision loop"
      ],
      tags: ["پروتکل سیگنال مکانیکی", "رابط نرم‌افزار-سخت‌افزار", "WCET", "آکچوئاتور", "یکپارچه‌سازی EPU"]
    },
    fa: {
      title: "پروتکل سیگنال مکانیکی — پل میان کارگزاران نرم‌افزاری و محرک‌های فیزیکی",
      narrative: "پروتکل سیگنال مکانیکی لایه رابط حیاتی است که تصمیمات کارگزاران نرم‌افزاری TWIN را به دستورات دقیق محرک فیزیکی ترجمه می‌کند. این پروتکل چالش اساسی سیستم‌های خودمختار را برطرف می‌کند: کارگزاران نرم‌افزاری در فضاهای حالت انتزاعی استدلال می‌کنند، اما خودروها در واقعیت فیزیکی پیوسته عمل می‌کنند.",
      strategic: "پروتکل سیگنال مکانیکی نقطه یکپارچه‌سازی EPU است که هوشمندی نرم‌افزاری TWIN به قابلیت فیزیکی تبدیل می‌شود. بدون این پروتکل، کارگزاران TWIN موتورهای استدلال قدرتمندی هستند که هیچ ارتباطی با خودرو ندارند.",
      keyPoints: [
        "رمزگذاری سیگنال: دستورات مکانیکی تایپ‌شده با اعتبارسنجی واحد فیزیکی",
        "تحویل بلادرنگ سخت: انتقال سیگنال محدود به WCET در ۱ms",
        "داوری اولویت: سیگنال‌های حیاتی ایمنی دستورات بهینه‌سازی را پیش می‌اندازند",
        "یکپارچه‌سازی بازخورد: داده‌های حسگر فیزیکی حلقه تصمیم کارگزار را می‌بندند"
      ],
      tags: ["پروتکل سیگنال مکانیکی", "رابط نرم‌افزار-سخت‌افزار", "WCET", "محرک", "یکپارچه‌سازی EPU"]
    }
  },
  {
    id: 61,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(61),
    en: {
      title: "Signal Type Taxonomy — Classifying Mechanical Commands by Safety Criticality",
      narrative: "TWIN's mechanical signal taxonomy classifies all vehicle commands into four safety criticality tiers: (1) Safety-Critical (SC) — commands affecting collision avoidance, emergency braking, stability control; ASIL-D rated, hard real-time, cannot be preempted; (2) Operational (OP) — normal driving commands including steering, throttle, routine braking; ASIL-B rated, soft real-time; (3) Comfort (CF) — HVAC, seat adjustment, ambient lighting; QM rated, best-effort delivery; (4) Diagnostic (DG) — sensor calibration, health monitoring; background priority. Each tier has distinct timing budgets, redundancy requirements, and failure modes.",
      strategic: "Signal taxonomy is the foundation of TWIN's safety architecture. By classifying signals before they enter the processing pipeline, the system can apply appropriate safety measures without over-engineering every command. Safety-critical signals get hardware redundancy and formal verification; comfort signals get best-effort delivery. This tiered approach enables EPU to achieve ASIL-D certification for safety functions while maintaining system efficiency.",
      keyPoints: [
        "Four tiers: Safety-Critical (ASIL-D), Operational (ASIL-B), Comfort (QM), Diagnostic",
        "Hard real-time for SC: deterministic delivery within 0.5ms, no preemption",
        "Redundancy scaling: SC signals require triple redundancy, OP requires dual",
        "Failure mode differentiation: SC failures trigger emergency stop, CF failures are silent"
      ],
      tags: ["Signal Taxonomy", "ASIL-D", "Safety Criticality", "Signal Classification", "Redundancy"]
    },
    fa: {
      title: "طبقه‌بندی نوع سیگنال — دسته‌بندی دستورات مکانیکی بر اساس اهمیت ایمنی",
      narrative: "طبقه‌بندی سیگنال مکانیکی TWIN تمام دستورات خودرو را به چهار سطح اهمیت ایمنی تقسیم می‌کند: (۱) حیاتی ایمنی (SC) — دستورات مؤثر بر اجتناب از تصادف، ترمز اضطراری، کنترل پایداری؛ رتبه ASIL-D، بلادرنگ سخت؛ (۲) عملیاتی (OP) — دستورات رانندگی عادی؛ رتبه ASIL-B؛ (۳) آسایش (CF) — HVAC، تنظیم صندلی؛ رتبه QM؛ (۴) تشخیصی (DG) — کالیبراسیون حسگر.",
      strategic: "طبقه‌بندی سیگنال پایه معماری ایمنی TWIN است. با دسته‌بندی سیگنال‌ها قبل از ورود به خط پردازش، سیستم می‌تواند اقدامات ایمنی مناسب را بدون مهندسی بیش از حد هر دستور اعمال کند.",
      keyPoints: [
        "چهار سطح: حیاتی ایمنی (ASIL-D)، عملیاتی (ASIL-B)، آسایش (QM)، تشخیصی",
        "بلادرنگ سخت برای SC: تحویل قطعی در ۰.۵ms، بدون پیش‌انداختن",
        "مقیاس‌بندی افزونگی: سیگنال‌های SC نیاز به افزونگی سه‌گانه دارند",
        "تمایز حالت خرابی: خرابی‌های SC توقف اضطراری را فعال می‌کنند"
      ],
      tags: ["طبقه‌بندی سیگنال", "ASIL-D", "اهمیت ایمنی", "دسته‌بندی سیگنال", "افزونگی"]
    }
  },
  {
    id: 62,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(62),
    en: {
      title: "Signal Encoding Protocol — Typed Commands with Physical Unit Validation",
      narrative: "TWIN's signal encoding protocol ensures that every mechanical command carries complete semantic information: the physical quantity being commanded, its value with units, the target actuator, timing constraints, and the originating agent. The encoding uses Protocol Buffers for compact binary representation with schema evolution support. Physical unit validation occurs at encoding time — an agent cannot issue a torque command in meters-per-second; the type system rejects it. This prevents a class of integration errors that have caused real-world autonomous vehicle failures.",
      strategic: "Signal encoding is a defensive engineering practice that catches integration errors at the earliest possible point. In complex multi-agent systems, different agents may have different internal representations of physical quantities. The encoding protocol enforces a single canonical representation, preventing unit confusion errors (the Mars Climate Orbiter failure was a unit confusion error) from propagating to actuators.",
      keyPoints: [
        "Protocol Buffers encoding: compact binary with schema evolution support",
        "Physical unit type system: commands rejected at encoding if units are inconsistent",
        "Complete semantic payload: quantity, value, units, target, timing, originating agent",
        "Schema evolution: backward-compatible encoding enables rolling software updates"
      ],
      tags: ["Signal Encoding", "Protocol Buffers", "Physical Units", "Type Safety", "Integration Errors"]
    },
    fa: {
      title: "پروتکل رمزگذاری سیگنال — دستورات تایپ‌شده با اعتبارسنجی واحد فیزیکی",
      narrative: "پروتکل رمزگذاری سیگنال TWIN تضمین می‌کند که هر دستور مکانیکی اطلاعات معنایی کامل را حمل می‌کند: کمیت فیزیکی مورد دستور، مقدار آن با واحدها، محرک هدف، محدودیت‌های زمان‌بندی، و کارگزار مبدأ. رمزگذاری از Protocol Buffers برای نمایش باینری فشرده استفاده می‌کند.",
      strategic: "رمزگذاری سیگنال یک عمل مهندسی دفاعی است که خطاهای یکپارچه‌سازی را در اولین نقطه ممکن شناسایی می‌کند. در سیستم‌های چندعاملی پیچیده، کارگزاران مختلف ممکن است نمایش‌های داخلی متفاوتی از کمیت‌های فیزیکی داشته باشند.",
      keyPoints: [
        "رمزگذاری Protocol Buffers: باینری فشرده با پشتیبانی از تکامل طرحواره",
        "سیستم نوع واحد فیزیکی: دستورات در صورت ناسازگاری واحدها در رمزگذاری رد می‌شوند",
        "بار معنایی کامل: کمیت، مقدار، واحدها، هدف، زمان‌بندی، کارگزار مبدأ",
        "تکامل طرحواره: رمزگذاری سازگار با نسخه‌های قبلی به‌روزرسانی‌های نرم‌افزاری را فعال می‌کند"
      ],
      tags: ["رمزگذاری سیگنال", "Protocol Buffers", "واحدهای فیزیکی", "ایمنی نوع", "خطاهای یکپارچه‌سازی"]
    }
  },
  {
    id: 63,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(63),
    en: {
      title: "Real-Time Signal Delivery — WCET Analysis and Timing Guarantees",
      narrative: "TWIN's real-time signal delivery system provides deterministic timing guarantees for mechanical commands. Worst-Case Execution Time (WCET) analysis is performed statically for every signal path: from agent decision to actuator command. The delivery pipeline uses: (1) lock-free queues — eliminating priority inversion; (2) CPU affinity — dedicated cores for safety-critical signal processing; (3) interrupt coalescing — batching non-critical signals to reduce overhead; (4) preemptive scheduling — SC signals preempt all lower-priority processing. Measured WCET for SC signals: 0.48ms (budget: 0.5ms).",
      strategic: "WCET analysis is the engineering discipline that separates real-time systems from systems that happen to be fast. A system that delivers commands in 0.3ms on average but occasionally takes 5ms is not a real-time system — it is an unreliable system. TWIN's WCET guarantees that every safety-critical signal will be delivered within 0.5ms, regardless of system load, memory pressure, or concurrent agent activity.",
      keyPoints: [
        "Lock-free queues: eliminate priority inversion in signal delivery path",
        "CPU affinity: dedicated cores ensure SC signal processing is never preempted",
        "Measured SC WCET: 0.48ms — 4% margin against 0.5ms budget",
        "Interrupt coalescing: non-critical signals batched to reduce system overhead"
      ],
      tags: ["WCET Analysis", "Real-Time Delivery", "Lock-Free Queues", "CPU Affinity", "Timing Guarantees"]
    },
    fa: {
      title: "تحویل سیگنال بلادرنگ — تحلیل WCET و تضمین‌های زمان‌بندی",
      narrative: "سیستم تحویل سیگنال بلادرنگ TWIN تضمین‌های زمان‌بندی قطعی برای دستورات مکانیکی ارائه می‌دهد. تحلیل بدترین زمان اجرا (WCET) به‌صورت ایستا برای هر مسیر سیگنال انجام می‌شود: از تصمیم کارگزار تا دستور محرک.",
      strategic: "تحلیل WCET انضباط مهندسی است که سیستم‌های بلادرنگ را از سیستم‌هایی که تصادفاً سریع هستند جدا می‌کند. سیستمی که به‌طور متوسط در ۰.۳ms دستورات را تحویل می‌دهد اما گاهی ۵ms طول می‌کشد یک سیستم بلادرنگ نیست.",
      keyPoints: [
        "صف‌های بدون قفل: وارونگی اولویت در مسیر تحویل سیگنال را حذف می‌کنند",
        "وابستگی CPU: هسته‌های اختصاصی تضمین می‌کنند پردازش سیگنال SC هرگز پیش انداخته نمی‌شود",
        "WCET اندازه‌گیری‌شده SC: ۰.۴۸ms — حاشیه ۴٪ در برابر بودجه ۰.۵ms",
        "ادغام وقفه: سیگنال‌های غیرحیاتی دسته‌بندی می‌شوند تا سربار سیستم کاهش یابد"
      ],
      tags: ["تحلیل WCET", "تحویل بلادرنگ", "صف‌های بدون قفل", "وابستگی CPU", "تضمین‌های زمان‌بندی"]
    }
  },
  {
    id: 64,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(64),
    en: {
      title: "Priority Arbitration — Resolving Conflicts Between Concurrent Agent Commands",
      narrative: "When multiple TWIN agents issue concurrent mechanical commands, the priority arbitration system resolves conflicts deterministically. The arbitration hierarchy: (1) Emergency Override — triggered by collision detection or stability loss; overrides all other commands; (2) Safety Supervisor — ASIL-D certified arbiter that enforces physical safety envelopes; (3) Primary Control Agent — the agent currently holding primary control authority; (4) Optimization Agents — energy, comfort, and efficiency agents that operate within the envelope set by higher-priority agents. Arbitration decisions are logged for post-incident analysis.",
      strategic: "Priority arbitration is the governance mechanism that enables TWIN's multi-agent architecture to function safely. Without arbitration, concurrent agent commands could create conflicting actuator inputs — steering left while braking right, for example. The arbitration hierarchy ensures that safety always takes precedence, while still allowing optimization agents to contribute within safe envelopes.",
      keyPoints: [
        "Emergency Override: highest priority, triggered by collision/stability detection",
        "Safety Supervisor: ASIL-D certified, enforces physical safety envelopes",
        "Primary Control Agent: holds authority for normal driving decisions",
        "All arbitration decisions logged: enables post-incident causal analysis"
      ],
      tags: ["Priority Arbitration", "Conflict Resolution", "Multi-Agent Coordination", "Safety Envelope", "Emergency Override"]
    },
    fa: {
      title: "داوری اولویت — حل تعارض میان دستورات همزمان کارگزاران",
      narrative: "وقتی چندین کارگزار TWIN دستورات مکانیکی همزمان صادر می‌کنند، سیستم داوری اولویت تعارضات را به‌صورت قطعی حل می‌کند. سلسله‌مراتب داوری: (۱) لغو اضطراری — توسط تشخیص تصادم یا از دست دادن پایداری فعال می‌شود؛ (۲) ناظر ایمنی — داور دارای گواهی ASIL-D؛ (۳) کارگزار کنترل اصلی؛ (۴) کارگزاران بهینه‌سازی.",
      strategic: "داوری اولویت مکانیزم حاکمیتی است که معماری چندعاملی TWIN را قادر می‌سازد به‌صورت ایمن عمل کند. بدون داوری، دستورات همزمان کارگزاران می‌توانند ورودی‌های متضاد محرک ایجاد کنند.",
      keyPoints: [
        "لغو اضطراری: بالاترین اولویت، توسط تشخیص تصادم/پایداری فعال می‌شود",
        "ناظر ایمنی: دارای گواهی ASIL-D، پوشش‌های ایمنی فیزیکی را اجرا می‌کند",
        "کارگزار کنترل اصلی: اختیار تصمیمات رانندگی عادی را دارد",
        "همه تصمیمات داوری ثبت می‌شوند: تحلیل علّی پس از حادثه را فعال می‌کند"
      ],
      tags: ["داوری اولویت", "حل تعارض", "هماهنگی چندعاملی", "پوشش ایمنی", "لغو اضطراری"]
    }
  },
  {
    id: 65,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(65),
    en: {
      title: "Sensor Fusion Pipeline — Integrating Multi-Modal Physical Inputs",
      narrative: "TWIN's sensor fusion pipeline integrates data from heterogeneous physical sensors into a unified world model for agent consumption. The pipeline processes: LiDAR point clouds (10Hz, 100K points/scan), camera frames (30Hz, 8 cameras), radar returns (20Hz, 360° coverage), IMU measurements (1000Hz), wheel encoders (1000Hz), and GPS/GNSS (10Hz). Fusion occurs in three stages: (1) temporal alignment — synchronizing sensors with different update rates; (2) spatial registration — transforming all sensor data to a common coordinate frame; (3) probabilistic fusion — combining measurements using Kalman filtering with uncertainty propagation.",
      strategic: "Sensor fusion is the perceptual foundation of autonomous driving. No single sensor provides complete, reliable world information — LiDAR fails in heavy rain, cameras fail in direct sunlight, radar cannot distinguish pedestrians from poles. Only by fusing all sensors with appropriate uncertainty models can TWIN's agents make reliable decisions. The fusion pipeline's output is not just a world model but a world model with quantified uncertainty — enabling agents to reason about what they don't know.",
      keyPoints: [
        "Multi-modal fusion: LiDAR, camera, radar, IMU, encoders, GPS at different rates",
        "Three-stage pipeline: temporal alignment → spatial registration → probabilistic fusion",
        "Kalman filtering with uncertainty propagation: quantified uncertainty in world model",
        "Failure mode handling: graceful degradation when individual sensors fail"
      ],
      tags: ["Sensor Fusion", "Multi-Modal", "Kalman Filter", "World Model", "Uncertainty Quantification"]
    },
    fa: {
      title: "خط لوله ادغام حسگر — یکپارچه‌سازی ورودی‌های فیزیکی چندوجهی",
      narrative: "خط لوله ادغام حسگر TWIN داده‌های حسگرهای فیزیکی ناهمگن را در یک مدل جهانی یکپارچه برای مصرف کارگزاران ادغام می‌کند. خط لوله پردازش می‌کند: ابرهای نقطه LiDAR (۱۰Hz، ۱۰۰K نقطه/اسکن)، فریم‌های دوربین (۳۰Hz، ۸ دوربین)، بازگشت‌های رادار (۲۰Hz، پوشش ۳۶۰°).",
      strategic: "ادغام حسگر پایه ادراکی رانندگی خودمختار است. هیچ حسگر منفردی اطلاعات جهانی کامل و قابل اعتماد ارائه نمی‌دهد — LiDAR در باران شدید، دوربین‌ها در نور مستقیم خورشید شکست می‌خورند.",
      keyPoints: [
        "ادغام چندوجهی: LiDAR، دوربین، رادار، IMU، رمزگذارها، GPS با نرخ‌های مختلف",
        "خط لوله سه‌مرحله‌ای: هم‌راستایی زمانی → ثبت مکانی → ادغام احتمالاتی",
        "فیلتر کالمن با انتشار عدم قطعیت: عدم قطعیت کمّی در مدل جهانی",
        "مدیریت حالت خرابی: تخریب آرام هنگام خرابی حسگرهای منفرد"
      ],
      tags: ["ادغام حسگر", "چندوجهی", "فیلتر کالمن", "مدل جهانی", "کمّی‌سازی عدم قطعیت"]
    }
  },
  {
    id: 66,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(66),
    en: {
      title: "Actuator Abstraction Layer — Decoupling Agent Logic from Hardware Specifics",
      narrative: "The actuator abstraction layer (AAL) decouples TWIN's agent logic from vehicle-specific hardware details. Agents issue commands in terms of physical outcomes — 'apply 2000 Nm braking torque' — not hardware registers — 'set brake controller register 0x4A to 0x7F'. The AAL translates outcome-based commands to hardware-specific control signals, handles actuator calibration, compensates for actuator wear and temperature effects, and provides a uniform interface across different vehicle platforms. This enables TWIN agents to operate on different vehicle models without modification.",
      strategic: "The actuator abstraction layer is the portability mechanism that makes TWIN a platform rather than a vehicle-specific solution. Without abstraction, every agent would need to know the specific control interface of every actuator in every vehicle model — an exponential complexity problem. With abstraction, agents reason about physical outcomes, and the AAL handles hardware translation. This is the same principle as operating system device drivers, applied to vehicle actuators.",
      keyPoints: [
        "Outcome-based commands: agents specify physical results, not hardware registers",
        "Hardware translation: AAL converts outcomes to vehicle-specific control signals",
        "Calibration and compensation: AAL handles actuator wear, temperature, and aging",
        "Platform portability: same agent code runs on different vehicle models"
      ],
      tags: ["Actuator Abstraction", "Hardware Decoupling", "Platform Portability", "Calibration", "AAL"]
    },
    fa: {
      title: "لایه انتزاع محرک — جداسازی منطق کارگزار از جزئیات سخت‌افزاری",
      narrative: "لایه انتزاع محرک (AAL) منطق کارگزار TWIN را از جزئیات سخت‌افزاری خاص خودرو جدا می‌کند. کارگزاران دستورات را بر اساس نتایج فیزیکی صادر می‌کنند — 'گشتاور ترمز ۲۰۰۰ Nm اعمال کن' — نه رجیسترهای سخت‌افزاری.",
      strategic: "لایه انتزاع محرک مکانیزم قابلیت حمل است که TWIN را به یک پلتفرم تبدیل می‌کند نه یک راه‌حل خاص خودرو. بدون انتزاع، هر کارگزار باید رابط کنترل خاص هر محرک در هر مدل خودرو را بداند.",
      keyPoints: [
        "دستورات مبتنی بر نتیجه: کارگزاران نتایج فیزیکی را مشخص می‌کنند، نه رجیسترهای سخت‌افزاری",
        "ترجمه سخت‌افزاری: AAL نتایج را به سیگنال‌های کنترل خاص خودرو تبدیل می‌کند",
        "کالیبراسیون و جبران: AAL فرسودگی محرک، دما، و پیری را مدیریت می‌کند",
        "قابلیت حمل پلتفرم: کد کارگزار یکسان روی مدل‌های مختلف خودرو اجرا می‌شود"
      ],
      tags: ["انتزاع محرک", "جداسازی سخت‌افزار", "قابلیت حمل پلتفرم", "کالیبراسیون", "AAL"]
    }
  },
  {
    id: 67,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(67),
    en: {
      title: "Feedback Loop Architecture — Closing the Sensor-to-Actuator Control Cycle",
      narrative: "TWIN's feedback loop architecture implements closed-loop control for all mechanical systems. The control cycle: (1) sense — physical sensors measure current system state; (2) estimate — Kalman filter estimates true state from noisy measurements; (3) plan — agents compute desired state trajectory; (4) command — mechanical signal protocol delivers actuator commands; (5) actuate — physical actuators execute commands; (6) measure — sensors measure resulting state change. Cycle time: 1ms for safety-critical loops, 10ms for operational loops, 100ms for optimization loops.",
      strategic: "Closed-loop control is the engineering principle that enables reliable performance despite uncertainty. Open-loop systems (command without feedback) accumulate errors — a small calibration error in an open-loop steering system causes the vehicle to drift. Closed-loop systems continuously correct errors, enabling precise control even with imperfect actuators and uncertain environments. TWIN's nested control loops provide stability at multiple timescales.",
      keyPoints: [
        "Three-tier loop hierarchy: 1ms safety, 10ms operational, 100ms optimization",
        "Kalman state estimation: true state estimated from noisy sensor measurements",
        "Error correction: closed-loop continuously corrects deviations from desired trajectory",
        "Nested stability: inner loops stabilize fast dynamics, outer loops optimize slow dynamics"
      ],
      tags: ["Feedback Loop", "Closed-Loop Control", "Control Cycle", "State Estimation", "Nested Loops"]
    },
    fa: {
      title: "معماری حلقه بازخورد — بستن چرخه کنترل حسگر-به-محرک",
      narrative: "معماری حلقه بازخورد TWIN کنترل حلقه‌بسته را برای تمام سیستم‌های مکانیکی پیاده‌سازی می‌کند. چرخه کنترل: (۱) حس‌کردن — حسگرهای فیزیکی حالت فعلی سیستم را اندازه‌گیری می‌کنند؛ (۲) تخمین — فیلتر کالمن حالت واقعی را از اندازه‌گیری‌های پر سر و صدا تخمین می‌زند؛ (۳) برنامه‌ریزی؛ (۴) دستور؛ (۵) محرک؛ (۶) اندازه‌گیری.",
      strategic: "کنترل حلقه‌بسته اصل مهندسی است که عملکرد قابل اعتماد را علی‌رغم عدم قطعیت فعال می‌کند. سیستم‌های حلقه‌باز (دستور بدون بازخورد) خطاها را انباشته می‌کنند.",
      keyPoints: [
        "سلسله‌مراتب حلقه سه‌لایه: ۱ms ایمنی، ۱۰ms عملیاتی، ۱۰۰ms بهینه‌سازی",
        "تخمین حالت کالمن: حالت واقعی از اندازه‌گیری‌های پر سر و صدا تخمین زده می‌شود",
        "تصحیح خطا: حلقه‌بسته به‌طور مستمر انحرافات از مسیر مطلوب را تصحیح می‌کند",
        "پایداری تودرتو: حلقه‌های داخلی دینامیک سریع را تثبیت می‌کنند، حلقه‌های خارجی دینامیک کند را بهینه می‌کنند"
      ],
      tags: ["حلقه بازخورد", "کنترل حلقه‌بسته", "چرخه کنترل", "تخمین حالت", "حلقه‌های تودرتو"]
    }
  },
  {
    id: 68,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(68),
    en: {
      title: "Signal Integrity Verification — Detecting Corruption and Replay Attacks",
      narrative: "TWIN's signal integrity verification system protects mechanical commands from corruption and malicious replay attacks. Every signal includes: (1) CRC-32 checksum — detects single-bit and burst errors in transmission; (2) sequence number — detects dropped, duplicated, or reordered signals; (3) timestamp with monotonic clock — detects replay attacks where valid old commands are re-injected; (4) HMAC authentication — detects commands injected by unauthorized sources. Verification occurs at the actuator controller before command execution, ensuring that only valid, fresh, authenticated commands are executed.",
      strategic: "Signal integrity verification is the security layer that prevents both accidental and malicious command corruption. In automotive systems, signal corruption can have catastrophic consequences — a corrupted brake command could prevent emergency braking. The multi-layer verification approach (CRC + sequence + timestamp + HMAC) provides defense in depth: an attacker must defeat all four mechanisms simultaneously to inject a malicious command.",
      keyPoints: [
        "CRC-32 checksum: detects transmission bit errors before actuator execution",
        "Sequence numbers: detect dropped, duplicated, or reordered signal delivery",
        "Monotonic timestamp: prevents replay attacks with valid but stale commands",
        "HMAC authentication: rejects commands from unauthorized sources"
      ],
      tags: ["Signal Integrity", "CRC Verification", "Replay Attack Prevention", "HMAC", "Defense in Depth"]
    },
    fa: {
      title: "تأیید یکپارچگی سیگنال — تشخیص خرابی و حملات بازپخش",
      narrative: "سیستم تأیید یکپارچگی سیگنال TWIN دستورات مکانیکی را از خرابی و حملات بازپخش مخرب محافظت می‌کند. هر سیگنال شامل: (۱) جمع‌بندی CRC-32 — خطاهای تک‌بیتی و انفجاری در انتقال را تشخیص می‌دهد؛ (۲) شماره توالی؛ (۳) مهر زمانی با ساعت یکنواخت؛ (۴) احراز هویت HMAC.",
      strategic: "تأیید یکپارچگی سیگنال لایه امنیتی است که از خرابی دستور تصادفی و مخرب جلوگیری می‌کند. در سیستم‌های خودرویی، خرابی سیگنال می‌تواند عواقب فاجعه‌باری داشته باشد.",
      keyPoints: [
        "جمع‌بندی CRC-32: خطاهای بیت انتقال را قبل از اجرای محرک تشخیص می‌دهد",
        "شماره‌های توالی: تحویل سیگنال افتاده، تکراری، یا مرتب‌شده مجدد را تشخیص می‌دهند",
        "مهر زمانی یکنواخت: از حملات بازپخش با دستورات معتبر اما قدیمی جلوگیری می‌کند",
        "احراز هویت HMAC: دستورات از منابع غیرمجاز را رد می‌کند"
      ],
      tags: ["یکپارچگی سیگنال", "تأیید CRC", "پیشگیری از حمله بازپخش", "HMAC", "دفاع عمیق"]
    }
  },
  {
    id: 69,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(69),
    en: {
      title: "Emergency Signal Pathway — Guaranteed Delivery Under System Stress",
      narrative: "TWIN's emergency signal pathway provides guaranteed delivery for safety-critical commands even under extreme system stress — CPU overload, memory pressure, network congestion, or partial hardware failure. The emergency pathway uses: (1) dedicated hardware interrupt lines — bypassing the software stack entirely for the most critical signals; (2) reserved CPU cores — never shared with non-emergency processing; (3) pre-allocated memory pools — avoiding dynamic allocation delays; (4) redundant transmission paths — if primary path fails, backup path activates within 0.1ms. The emergency pathway is tested under fault injection to verify behavior under simulated failures.",
      strategic: "The emergency signal pathway embodies the safety engineering principle of fail-safe design: when everything else fails, the most critical safety functions must still work. In automotive systems, the emergency pathway is the last line of defense — if collision avoidance fails, emergency braking must still function. TWIN's emergency pathway is designed to be independent of all non-emergency system components, ensuring that failures elsewhere cannot prevent emergency response.",
      keyPoints: [
        "Dedicated hardware interrupts: bypass software stack for sub-0.1ms emergency response",
        "Reserved CPU cores: emergency processing never preempted by normal operations",
        "Pre-allocated memory: no dynamic allocation in emergency path — deterministic timing",
        "Redundant transmission: backup path activates within 0.1ms if primary fails"
      ],
      tags: ["Emergency Pathway", "Fail-Safe Design", "Hardware Interrupts", "Redundant Transmission", "Fault Injection Testing"]
    },
    fa: {
      title: "مسیر سیگنال اضطراری — تحویل تضمین‌شده تحت فشار سیستم",
      narrative: "مسیر سیگنال اضطراری TWIN تحویل تضمین‌شده برای دستورات حیاتی ایمنی را حتی تحت فشار شدید سیستم فراهم می‌کند — اضافه‌بار CPU، فشار حافظه، ازدحام شبکه، یا خرابی جزئی سخت‌افزار.",
      strategic: "مسیر سیگنال اضطراری اصل مهندسی ایمنی طراحی ایمن‌در‌خرابی را تجسم می‌بخشد: وقتی همه چیز دیگر شکست می‌خورد، حیاتی‌ترین توابع ایمنی باید همچنان کار کنند.",
      keyPoints: [
        "وقفه‌های سخت‌افزاری اختصاصی: پشته نرم‌افزاری را برای پاسخ اضطراری زیر ۰.۱ms دور می‌زنند",
        "هسته‌های CPU رزروشده: پردازش اضطراری هرگز توسط عملیات عادی پیش انداخته نمی‌شود",
        "حافظه از پیش تخصیص‌یافته: بدون تخصیص پویا در مسیر اضطراری — زمان‌بندی قطعی",
        "انتقال افزونه: مسیر پشتیبان در ۰.۱ms در صورت خرابی مسیر اصلی فعال می‌شود"
      ],
      tags: ["مسیر اضطراری", "طراحی ایمن‌در‌خرابی", "وقفه‌های سخت‌افزاری", "انتقال افزونه", "آزمایش تزریق خطا"]
    }
  },
  {
    id: 70,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(70),
    en: {
      title: "Signal Logging and Replay — Forensic Analysis and Simulation",
      narrative: "TWIN's signal logging system creates a complete, tamper-evident record of all mechanical signals for forensic analysis and simulation. Every signal is logged with: microsecond-precision timestamp, signal content, originating agent, delivery confirmation, and actuator response. Logs are written to append-only storage with cryptographic chaining — each log entry includes a hash of the previous entry, making retroactive modification detectable. The replay system can re-execute any historical scenario from logs, enabling: (1) incident investigation; (2) regression testing; (3) agent behavior validation; (4) safety case evidence.",
      strategic: "Signal logging is the accountability mechanism that enables TWIN to learn from real-world incidents and provide evidence for safety certification. When an incident occurs, the signal log provides a complete causal record: which agent issued which command, when it was delivered, and what the actuator response was. This forensic capability is increasingly required by automotive safety standards and regulatory frameworks.",
      keyPoints: [
        "Tamper-evident logging: cryptographic chaining detects retroactive modification",
        "Microsecond timestamps: precise causal ordering of all mechanical events",
        "Replay capability: any historical scenario re-executable from logs",
        "Safety case evidence: logs provide verifiable record for certification"
      ],
      tags: ["Signal Logging", "Forensic Analysis", "Tamper-Evident", "Replay System", "Safety Certification"]
    },
    fa: {
      title: "ثبت و بازپخش سیگنال — تحلیل قانونی و شبیه‌سازی",
      narrative: "سیستم ثبت سیگنال TWIN یک رکورد کامل و ضدتغییر از تمام سیگنال‌های مکانیکی برای تحلیل قانونی و شبیه‌سازی ایجاد می‌کند. هر سیگنال با: مهر زمانی با دقت میکروثانیه، محتوای سیگنال، کارگزار مبدأ، تأیید تحویل، و پاسخ محرک ثبت می‌شود.",
      strategic: "ثبت سیگنال مکانیزم پاسخگویی است که TWIN را قادر می‌سازد از حوادث دنیای واقعی یاد بگیرد و شواهدی برای گواهی‌نامه ایمنی ارائه دهد.",
      keyPoints: [
        "ثبت ضدتغییر: زنجیره‌بندی رمزنگاری تغییر بازگشتی را تشخیص می‌دهد",
        "مهرهای زمانی میکروثانیه: ترتیب علّی دقیق تمام رویدادهای مکانیکی",
        "قابلیت بازپخش: هر سناریوی تاریخی از گزارش‌ها قابل اجرای مجدد است",
        "شواهد پرونده ایمنی: گزارش‌ها رکورد قابل تأیید برای گواهی‌نامه ارائه می‌دهند"
      ],
      tags: ["ثبت سیگنال", "تحلیل قانونی", "ضدتغییر", "سیستم بازپخش", "گواهی‌نامه ایمنی"]
    }
  },
  {
    id: 71,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(71),
    en: {
      title: "EPU-Specific Signal Mapping — Translating TWIN Commands to EPU Hardware",
      narrative: "EPU's unique hardware architecture requires specialized signal mappings that differ from conventional ICE vehicles. Key EPU-specific mappings: (1) Torque Vectoring — EPU's four independent motors enable per-wheel torque control; TWIN agents issue vehicle-level yaw moment commands that the AAL decomposes into four independent motor torque commands; (2) Regenerative Braking — TWIN's braking commands are split between regenerative (motor) and friction (hydraulic) braking based on energy recovery optimization; (3) Thermal Management — EPU's battery thermal system accepts temperature setpoint commands from TWIN's energy optimization agent; (4) Charge Management — TWIN coordinates charging decisions with grid and V2G systems.",
      strategic: "EPU-specific signal mapping is where TWIN's software intelligence leverages EPU's unique hardware capabilities. Conventional vehicles have limited actuator authority — you can steer and brake, but you cannot independently control each wheel's torque. EPU's four-motor architecture gives TWIN agents unprecedented control authority, enabling vehicle dynamics that are physically impossible with conventional drivetrains. TWIN's signal mapping fully exploits this capability.",
      keyPoints: [
        "Torque vectoring: yaw moment commands decomposed to four independent motor torques",
        "Regenerative braking split: energy recovery optimized across motor and hydraulic braking",
        "Thermal setpoint control: TWIN energy agent manages battery temperature directly",
        "V2G coordination: TWIN coordinates vehicle-to-grid energy exchange decisions"
      ],
      tags: ["EPU Signal Mapping", "Torque Vectoring", "Regenerative Braking", "Thermal Management", "V2G"]
    },
    fa: {
      title: "نگاشت سیگنال اختصاصی EPU — ترجمه دستورات TWIN به سخت‌افزار EPU",
      narrative: "معماری سخت‌افزاری منحصربه‌فرد EPU به نگاشت‌های سیگنال تخصصی نیاز دارد که با خودروهای ICE متعارف متفاوت است. نگاشت‌های اختصاصی کلیدی EPU: (۱) برداری گشتاور — چهار موتور مستقل EPU کنترل گشتاور هر چرخ را فعال می‌کنند؛ (۲) ترمزگیری بازیابی‌کننده؛ (۳) مدیریت حرارتی؛ (۴) مدیریت شارژ.",
      strategic: "نگاشت سیگنال اختصاصی EPU جایی است که هوشمندی نرم‌افزاری TWIN از قابلیت‌های سخت‌افزاری منحصربه‌فرد EPU بهره می‌برد.",
      keyPoints: [
        "برداری گشتاور: دستورات گشتاور مومنتوم به چهار گشتاور موتور مستقل تجزیه می‌شوند",
        "تقسیم ترمزگیری بازیابی‌کننده: بازیابی انرژی در ترمزگیری موتور و هیدرولیک بهینه می‌شود",
        "کنترل نقطه تنظیم حرارتی: کارگزار انرژی TWIN دمای باتری را مستقیماً مدیریت می‌کند",
        "هماهنگی V2G: TWIN تصمیمات تبادل انرژی خودرو-به-شبکه را هماهنگ می‌کند"
      ],
      tags: ["نگاشت سیگنال EPU", "برداری گشتاور", "ترمزگیری بازیابی‌کننده", "مدیریت حرارتی", "V2G"]
    }
  },
  {
    id: 72,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(72),
    en: {
      title: "Mechanical Signal Performance Benchmarks — Latency, Throughput, and Reliability",
      narrative: "Comprehensive benchmarks characterize TWIN's mechanical signal system under realistic automotive loads. Key results: SC signal latency: 0.48ms P99 (budget: 0.5ms); OP signal latency: 4.2ms P99 (budget: 10ms); signal throughput: 50,000 signals/second sustained; signal loss rate: 0 in 10M SC signals (6-sigma reliability); replay attack detection: 100% of injected replays detected; sensor fusion latency: 8.3ms P99 for complete world model update; actuator response confirmation: 2.1ms P99. All benchmarks measured under worst-case load conditions with fault injection active.",
      strategic: "Performance benchmarks provide the quantitative evidence that TWIN's mechanical signal system meets automotive safety requirements. The 6-sigma reliability figure (0 losses in 10M signals) is particularly significant — it demonstrates that signal loss is not a statistical risk but an engineered-out failure mode. The WCET margins (4% for SC signals) provide confidence that timing guarantees will hold under conditions not covered by testing.",
      keyPoints: [
        "SC signal P99 latency: 0.48ms — 4% margin against 0.5ms WCET budget",
        "Zero signal loss in 10M SC signals: 6-sigma reliability demonstrated",
        "50,000 signals/second sustained throughput: sufficient for full vehicle control",
        "100% replay attack detection: security verification under adversarial conditions"
      ],
      tags: ["Signal Performance", "Latency Benchmarks", "6-Sigma Reliability", "Throughput", "Security Verification"]
    },
    fa: {
      title: "معیارهای عملکرد سیگنال مکانیکی — تأخیر، گذردهی، و قابلیت اعتماد",
      narrative: "معیارهای جامع سیستم سیگنال مکانیکی TWIN را تحت بارهای واقعی خودرویی مشخص می‌کنند. نتایج کلیدی: تأخیر سیگنال SC: ۰.۴۸ms P99 (بودجه: ۰.۵ms)؛ گذردهی سیگنال: ۵۰,۰۰۰ سیگنال/ثانیه پایدار؛ نرخ از دست دادن سیگنال: ۰ در ۱۰M سیگنال SC (قابلیت اعتماد ۶-سیگما).",
      strategic: "معیارهای عملکرد شواهد کمّی ارائه می‌دهند که سیستم سیگنال مکانیکی TWIN الزامات ایمنی خودرویی را برآورده می‌کند.",
      keyPoints: [
        "تأخیر P99 سیگنال SC: ۰.۴۸ms — حاشیه ۴٪ در برابر بودجه WCET ۰.۵ms",
        "صفر از دست دادن سیگنال در ۱۰M سیگنال SC: قابلیت اعتماد ۶-سیگما نشان داده شده",
        "گذردهی پایدار ۵۰,۰۰۰ سیگنال/ثانیه: کافی برای کنترل کامل خودرو",
        "۱۰۰٪ تشخیص حمله بازپخش: تأیید امنیت تحت شرایط خصمانه"
      ],
      tags: ["عملکرد سیگنال", "معیارهای تأخیر", "قابلیت اعتماد ۶-سیگما", "گذردهی", "تأیید امنیت"]
    }
  },
  {
    id: 73,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(73),
    en: {
      title: "Graceful Degradation — Maintaining Safety Under Partial System Failure",
      narrative: "TWIN's graceful degradation framework maintains safe vehicle operation when components fail. The degradation hierarchy: (1) Full capability — all agents operational, full sensor suite, complete actuator authority; (2) Reduced capability — one or more agents degraded, sensor subset, limited actuator authority; (3) Minimal safe operation — only safety-critical agents operational, essential sensors, emergency actuators only; (4) Safe stop — controlled deceleration to stopped state when minimal operation cannot be maintained. Transitions between levels are automatic, triggered by health monitoring, and logged for analysis.",
      strategic: "Graceful degradation is the architectural property that makes TWIN suitable for safety-critical automotive applications. A system that either works perfectly or fails catastrophically is not acceptable for autonomous driving. TWIN's degradation framework ensures that partial failures result in reduced capability, not catastrophic failure — the vehicle always maintains the ability to stop safely, even if it cannot complete its journey.",
      keyPoints: [
        "Four degradation levels: full → reduced → minimal → safe stop",
        "Automatic transitions: health monitoring triggers degradation without human intervention",
        "Safety preservation: each degradation level maintains ability to stop safely",
        "Degradation logging: all transitions recorded for post-incident analysis"
      ],
      tags: ["Graceful Degradation", "Partial Failure", "Safe Stop", "Health Monitoring", "Degradation Hierarchy"]
    },
    fa: {
      title: "تخریب آرام — حفظ ایمنی در خرابی جزئی سیستم",
      narrative: "چارچوب تخریب آرام TWIN عملکرد ایمن خودرو را هنگام خرابی اجزا حفظ می‌کند. سلسله‌مراتب تخریب: (۱) قابلیت کامل؛ (۲) قابلیت کاهش‌یافته؛ (۳) عملکرد ایمن حداقلی؛ (۴) توقف ایمن — کاهش سرعت کنترل‌شده تا حالت توقف.",
      strategic: "تخریب آرام ویژگی معماری است که TWIN را برای کاربردهای خودرویی حیاتی ایمنی مناسب می‌کند. سیستمی که یا کامل کار می‌کند یا به‌صورت فاجعه‌بار شکست می‌خورد برای رانندگی خودمختار قابل قبول نیست.",
      keyPoints: [
        "چهار سطح تخریب: کامل → کاهش‌یافته → حداقلی → توقف ایمن",
        "انتقال‌های خودکار: نظارت سلامت تخریب را بدون مداخله انسانی فعال می‌کند",
        "حفظ ایمنی: هر سطح تخریب توانایی توقف ایمن را حفظ می‌کند",
        "ثبت تخریب: همه انتقال‌ها برای تحلیل پس از حادثه ثبت می‌شوند"
      ],
      tags: ["تخریب آرام", "خرابی جزئی", "توقف ایمن", "نظارت سلامت", "سلسله‌مراتب تخریب"]
    }
  },
  {
    id: 74,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(74),
    en: {
      title: "Cross-Platform Validation — Testing Signal Protocol Across Vehicle Configurations",
      narrative: "TWIN's cross-platform validation framework verifies that the mechanical signal protocol functions correctly across different vehicle configurations. Validation dimensions: (1) vehicle platform — sedan, SUV, truck, bus; (2) powertrain configuration — BEV, PHEV, FCEV; (3) actuator variants — different brake, steering, and suspension suppliers; (4) sensor configurations — different LiDAR, camera, and radar combinations; (5) environmental conditions — temperature extremes, vibration, electromagnetic interference. The validation suite includes 10,000+ test cases with automated regression testing on every software update.",
      strategic: "Cross-platform validation is the quality assurance process that ensures TWIN's signal protocol is not just correct in the lab but reliable across the full range of real-world deployment conditions. Automotive systems face extreme environmental variation — from -40°C arctic conditions to +85°C desert heat, from smooth highways to rough off-road terrain. The validation framework systematically covers this variation to ensure reliable operation across all deployment scenarios.",
      keyPoints: [
        "Five validation dimensions: platform, powertrain, actuators, sensors, environment",
        "10,000+ test cases: comprehensive coverage of vehicle configurations and conditions",
        "Automated regression: every software update triggers full validation suite",
        "Environmental extremes: -40°C to +85°C, vibration, EMI testing"
      ],
      tags: ["Cross-Platform Validation", "Test Coverage", "Environmental Testing", "Regression Testing", "Automotive Validation"]
    },
    fa: {
      title: "اعتبارسنجی چندپلتفرمی — آزمایش پروتکل سیگنال در پیکربندی‌های مختلف خودرو",
      narrative: "چارچوب اعتبارسنجی چندپلتفرمی TWIN تأیید می‌کند که پروتکل سیگنال مکانیکی در پیکربندی‌های مختلف خودرو به‌درستی عمل می‌کند. ابعاد اعتبارسنجی: (۱) پلتفرم خودرو؛ (۲) پیکربندی پیشرانه؛ (۳) انواع محرک؛ (۴) پیکربندی‌های حسگر؛ (۵) شرایط محیطی.",
      strategic: "اعتبارسنجی چندپلتفرمی فرآیند تضمین کیفیت است که تضمین می‌کند پروتکل سیگنال TWIN نه فقط در آزمایشگاه صحیح است بلکه در طیف کامل شرایط استقرار دنیای واقعی قابل اعتماد است.",
      keyPoints: [
        "پنج بعد اعتبارسنجی: پلتفرم، پیشرانه، محرک‌ها، حسگرها، محیط",
        "۱۰,۰۰۰+ مورد آزمایش: پوشش جامع پیکربندی‌ها و شرایط خودرو",
        "رگرسیون خودکار: هر به‌روزرسانی نرم‌افزاری مجموعه اعتبارسنجی کامل را فعال می‌کند",
        "شرایط محیطی شدید: آزمایش ۴۰- تا ۸۵+ درجه سانتیگراد، لرزش، EMI"
      ],
      tags: ["اعتبارسنجی چندپلتفرمی", "پوشش آزمایش", "آزمایش محیطی", "آزمایش رگرسیون", "اعتبارسنجی خودرویی"]
    }
  },
  {
    id: 75,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(75),
    en: {
      title: "OTA Signal Protocol Updates — Safe Over-the-Air Mechanical System Updates",
      narrative: "TWIN's OTA update framework enables safe over-the-air updates to the mechanical signal protocol without vehicle downtime. The update process: (1) validation — new protocol version validated in simulation against 10,000+ test cases; (2) staged rollout — new version deployed to 1% of fleet first, monitored for 72 hours; (3) A/B testing — new and old versions run in parallel on test vehicles, comparing performance; (4) atomic deployment — update applied atomically with automatic rollback if health checks fail; (5) fleet-wide rollout — gradual expansion to full fleet over 2-4 weeks. Critical safety updates can bypass staged rollout for immediate deployment.",
      strategic: "OTA updates are the operational mechanism that enables TWIN to improve continuously without service interruptions. Conventional automotive software updates require dealership visits — a process that takes months to reach the full fleet and creates a long window where known issues remain unpatched. TWIN's OTA framework enables weekly improvements, immediate security patches, and continuous optimization based on fleet operational data.",
      keyPoints: [
        "Staged rollout: 1% → 10% → 100% with 72-hour monitoring at each stage",
        "Atomic deployment: automatic rollback if health checks fail post-update",
        "A/B testing: parallel version comparison on test vehicles before fleet rollout",
        "Emergency bypass: critical safety updates skip staged rollout for immediate deployment"
      ],
      tags: ["OTA Updates", "Staged Rollout", "Atomic Deployment", "A/B Testing", "Fleet Management"]
    },
    fa: {
      title: "به‌روزرسانی‌های OTA پروتکل سیگنال — به‌روزرسانی‌های ایمن سیستم مکانیکی از طریق هوا",
      narrative: "چارچوب به‌روزرسانی OTA TWIN به‌روزرسانی‌های ایمن پروتکل سیگنال مکانیکی را بدون توقف خودرو فعال می‌کند. فرآیند به‌روزرسانی: (۱) اعتبارسنجی؛ (۲) استقرار مرحله‌ای — نسخه جدید ابتدا برای ۱٪ ناوگان مستقر می‌شود؛ (۳) آزمایش A/B؛ (۴) استقرار اتمی؛ (۵) استقرار سراسری ناوگان.",
      strategic: "به‌روزرسانی‌های OTA مکانیزم عملیاتی هستند که TWIN را قادر می‌سازند بدون وقفه در سرویس به‌طور مستمر بهبود یابند.",
      keyPoints: [
        "استقرار مرحله‌ای: ۱٪ → ۱۰٪ → ۱۰۰٪ با نظارت ۷۲ ساعته در هر مرحله",
        "استقرار اتمی: بازگشت خودکار در صورت شکست بررسی‌های سلامت پس از به‌روزرسانی",
        "آزمایش A/B: مقایسه نسخه موازی روی خودروهای آزمایشی قبل از استقرار ناوگان",
        "دور زدن اضطراری: به‌روزرسانی‌های ایمنی حیاتی استقرار مرحله‌ای را برای استقرار فوری دور می‌زنند"
      ],
      tags: ["به‌روزرسانی‌های OTA", "استقرار مرحله‌ای", "استقرار اتمی", "آزمایش A/B", "مدیریت ناوگان"]
    }
  },
  {
    id: 76,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(76),
    en: {
      title: "Mechanical Signal Protocol — ISO 26262 Compliance Architecture",
      narrative: "TWIN's mechanical signal protocol is designed for ISO 26262 ASIL-D compliance — the highest automotive safety integrity level. Compliance architecture: (1) Hazard Analysis and Risk Assessment (HARA) — systematic identification of signal protocol failure modes and their consequences; (2) Safety Goals — derived from HARA, defining acceptable failure rates for each signal class; (3) Technical Safety Requirements — engineering requirements derived from safety goals; (4) Safety Mechanisms — hardware and software mechanisms that achieve the requirements; (5) Safety Validation — testing that verifies mechanisms achieve goals. The compliance architecture is documented in a Safety Case that provides evidence for certification.",
      strategic: "ISO 26262 compliance is the regulatory requirement that enables TWIN's deployment in production vehicles. Automotive OEMs cannot deploy safety-critical software without demonstrated compliance to functional safety standards. TWIN's compliance architecture is not just a documentation exercise — it drives engineering decisions throughout the system, ensuring that safety requirements are systematically addressed rather than addressed ad-hoc.",
      keyPoints: [
        "HARA: systematic identification of signal protocol failure modes and consequences",
        "Safety Goals: acceptable failure rates derived from HARA risk assessment",
        "Safety Mechanisms: hardware and software mechanisms achieving ASIL-D requirements",
        "Safety Case: documented evidence package for certification authority review"
      ],
      tags: ["ISO 26262", "ASIL-D Compliance", "HARA", "Safety Goals", "Safety Case"]
    },
    fa: {
      title: "پروتکل سیگنال مکانیکی — معماری انطباق با ISO 26262",
      narrative: "پروتکل سیگنال مکانیکی TWIN برای انطباق با ASIL-D استاندارد ISO 26262 طراحی شده است — بالاترین سطح یکپارچگی ایمنی خودرویی. معماری انطباق: (۱) تحلیل خطر و ارزیابی ریسک (HARA)؛ (۲) اهداف ایمنی؛ (۳) الزامات ایمنی فنی؛ (۴) مکانیزم‌های ایمنی؛ (۵) اعتبارسنجی ایمنی.",
      strategic: "انطباق با ISO 26262 الزام نظارتی است که استقرار TWIN در خودروهای تولیدی را فعال می‌کند.",
      keyPoints: [
        "HARA: شناسایی سیستماتیک حالت‌های خرابی پروتکل سیگنال و عواقب آن‌ها",
        "اهداف ایمنی: نرخ‌های خرابی قابل قبول مشتق‌شده از ارزیابی ریسک HARA",
        "مکانیزم‌های ایمنی: مکانیزم‌های سخت‌افزاری و نرم‌افزاری دستیابی به الزامات ASIL-D",
        "پرونده ایمنی: بسته شواهد مستند برای بررسی مرجع گواهی‌نامه"
      ],
      tags: ["ISO 26262", "انطباق ASIL-D", "HARA", "اهداف ایمنی", "پرونده ایمنی"]
    }
  },
  {
    id: 77,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(77),
    en: {
      title: "Signal Protocol Security — Threat Model and Countermeasures",
      narrative: "TWIN's signal protocol security framework addresses the full threat model for automotive cyber-physical systems. Identified threats: (1) signal injection — unauthorized commands injected into the signal bus; (2) signal replay — valid historical commands re-injected to cause unintended actions; (3) signal modification — legitimate commands modified in transit; (4) denial of service — flooding the signal bus to delay safety-critical commands; (5) side-channel attacks — inferring vehicle state from signal timing patterns. Countermeasures: HMAC authentication, sequence numbers, timestamps, rate limiting, and traffic analysis detection.",
      strategic: "Signal protocol security is increasingly critical as vehicles become connected systems. Modern vehicles have multiple wireless interfaces — cellular, V2X, Bluetooth, WiFi — each a potential attack surface. TWIN's security framework applies defense-in-depth: even if an attacker gains access to the vehicle network, they cannot inject malicious mechanical commands without defeating multiple independent security mechanisms.",
      keyPoints: [
        "Five threat categories: injection, replay, modification, DoS, side-channel",
        "HMAC authentication: prevents injection of commands from unauthorized sources",
        "Rate limiting: prevents DoS attacks from flooding the signal bus",
        "Traffic analysis detection: identifies anomalous signal patterns indicating attack"
      ],
      tags: ["Signal Security", "Threat Model", "HMAC", "DoS Prevention", "Automotive Cybersecurity"]
    },
    fa: {
      title: "امنیت پروتکل سیگنال — مدل تهدید و اقدامات متقابل",
      narrative: "چارچوب امنیت پروتکل سیگنال TWIN مدل تهدید کامل برای سیستم‌های سایبر-فیزیکی خودرویی را برطرف می‌کند. تهدیدات شناسایی‌شده: (۱) تزریق سیگنال؛ (۲) بازپخش سیگنال؛ (۳) تغییر سیگنال؛ (۴) انکار سرویس؛ (۵) حملات کانال جانبی.",
      strategic: "امنیت پروتکل سیگنال با اتصال خودروها به سیستم‌های متصل به‌طور فزاینده‌ای حیاتی می‌شود.",
      keyPoints: [
        "پنج دسته تهدید: تزریق، بازپخش، تغییر، DoS، کانال جانبی",
        "احراز هویت HMAC: از تزریق دستورات از منابع غیرمجاز جلوگیری می‌کند",
        "محدودیت نرخ: از حملات DoS که گذرگاه سیگنال را سیل می‌کنند جلوگیری می‌کند",
        "تشخیص تحلیل ترافیک: الگوهای سیگنال غیرعادی نشان‌دهنده حمله را شناسایی می‌کند"
      ],
      tags: ["امنیت سیگنال", "مدل تهدید", "HMAC", "پیشگیری از DoS", "امنیت سایبری خودرویی"]
    }
  },
  {
    id: 78,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(78),
    en: {
      title: "Future Signal Protocol Extensions — V2X and Infrastructure Integration",
      narrative: "TWIN's signal protocol is designed for extensibility to support emerging V2X (Vehicle-to-Everything) communication standards. Planned extensions: (1) V2V (Vehicle-to-Vehicle) — sharing signal intentions with nearby vehicles to enable cooperative driving; (2) V2I (Vehicle-to-Infrastructure) — receiving signal phase and timing from traffic lights to enable smooth intersection traversal; (3) V2P (Vehicle-to-Pedestrian) — detecting pedestrian devices and incorporating their predicted trajectories; (4) V2G (Vehicle-to-Grid) — coordinating energy exchange with the power grid. Each extension adds new signal types to the taxonomy while preserving backward compatibility.",
      strategic: "V2X extensions transform TWIN from a single-vehicle intelligence system to a networked intelligence system. Individual vehicle intelligence is limited by sensor range and processing capacity; V2X enables TWIN to leverage the collective sensing and intelligence of the entire connected vehicle ecosystem. A vehicle with V2V can 'see' around corners through other vehicles' sensors; V2I enables precise traffic light timing that eliminates unnecessary stops.",
      keyPoints: [
        "V2V: cooperative driving through shared signal intentions with nearby vehicles",
        "V2I: traffic signal phase/timing enables smooth intersection traversal",
        "V2P: pedestrian device detection improves vulnerable road user safety",
        "Backward compatibility: V2X extensions preserve existing signal protocol"
      ],
      tags: ["V2X Extensions", "V2V", "V2I", "Cooperative Driving", "Connected Vehicle"]
    },
    fa: {
      title: "توسعه‌های آینده پروتکل سیگنال — یکپارچه‌سازی V2X و زیرساخت",
      narrative: "پروتکل سیگنال TWIN برای قابلیت توسعه جهت پشتیبانی از استانداردهای ارتباطی V2X در حال ظهور طراحی شده است. توسعه‌های برنامه‌ریزی‌شده: (۱) V2V — اشتراک‌گذاری نیات سیگنال با خودروهای نزدیک؛ (۲) V2I — دریافت فاز و زمان‌بندی سیگنال از چراغ‌های راهنمایی؛ (۳) V2P — تشخیص دستگاه‌های عابر پیاده؛ (۴) V2G — هماهنگی تبادل انرژی با شبکه برق.",
      strategic: "توسعه‌های V2X TWIN را از یک سیستم هوشمندی تک‌خودرویی به یک سیستم هوشمندی شبکه‌شده تبدیل می‌کنند.",
      keyPoints: [
        "V2V: رانندگی مشارکتی از طریق نیات سیگنال مشترک با خودروهای نزدیک",
        "V2I: فاز/زمان‌بندی سیگنال ترافیک عبور روان از تقاطع را فعال می‌کند",
        "V2P: تشخیص دستگاه عابر پیاده ایمنی کاربران آسیب‌پذیر جاده را بهبود می‌دهد",
        "سازگاری با نسخه‌های قبلی: توسعه‌های V2X پروتکل سیگنال موجود را حفظ می‌کنند"
      ],
      tags: ["توسعه‌های V2X", "V2V", "V2I", "رانندگی مشارکتی", "خودرو متصل"]
    }
  },
  {
    id: 79,
    act: "MechanicalSignal",
    actLabel: ACT_LABELS_D.MechanicalSignal,
    imageUrl: imgD(79),
    en: {
      title: "Act V Synthesis — Mechanical Signal Protocol as the EPU-TWIN Integration Spine",
      narrative: "Act V establishes the mechanical signal protocol as the integration spine connecting TWIN's software intelligence to EPU's physical capabilities. The 20-slide arc covered: protocol overview, signal taxonomy, encoding, real-time delivery, priority arbitration, sensor fusion, actuator abstraction, feedback loops, signal integrity, emergency pathways, logging and replay, EPU-specific mappings, performance benchmarks, graceful degradation, cross-platform validation, OTA updates, ISO 26262 compliance, security, and V2X extensions. Together these define a complete, certified, secure interface between software agents and physical actuators.",
      strategic: "The mechanical signal protocol is the enabling technology that makes TWIN's software intelligence actionable. Without it, TWIN's agents are powerful reasoning engines disconnected from physical reality. With it, every agent decision — from millisecond collision avoidance to hour-scale energy optimization — translates into precise physical action with deterministic timing, certified safety, and comprehensive auditability. This is the foundation on which EPU's autonomous capability is built.",
      keyPoints: [
        "20-slide arc: complete mechanical signal protocol from taxonomy to V2X extensions",
        "Integration spine: connects TWIN software intelligence to EPU physical capabilities",
        "Certified and secure: ISO 26262 ASIL-D compliance with full cybersecurity framework",
        "Bridge to Act VI: coordination layer orchestrates multiple agents through this protocol"
      ],
      tags: ["Act V Synthesis", "Integration Spine", "EPU-TWIN Integration", "ASIL-D", "Autonomous Capability"]
    },
    fa: {
      title: "برآیند پرده پنجم — پروتکل سیگنال مکانیکی به‌عنوان ستون فقرات یکپارچه‌سازی EPU-TWIN",
      narrative: "پرده پنجم پروتکل سیگنال مکانیکی را به‌عنوان ستون فقرات یکپارچه‌سازی که هوشمندی نرم‌افزاری TWIN را به قابلیت‌های فیزیکی EPU متصل می‌کند برقرار می‌کند. قوس ۲۰ اسلایدی پوشش داد: مرور پروتکل، طبقه‌بندی سیگنال، رمزگذاری، تحویل بلادرنگ، داوری اولویت، ادغام حسگر، انتزاع محرک، حلقه‌های بازخورد، یکپارچگی سیگنال، مسیرهای اضطراری، ثبت و بازپخش، نگاشت‌های اختصاصی EPU، معیارهای عملکرد، تخریب آرام، اعتبارسنجی چندپلتفرمی، به‌روزرسانی‌های OTA، انطباق ISO 26262، امنیت، و توسعه‌های V2X.",
      strategic: "پروتکل سیگنال مکانیکی فناوری توانمندساز است که هوشمندی نرم‌افزاری TWIN را قابل اجرا می‌کند.",
      keyPoints: [
        "قوس ۲۰ اسلایدی: پروتکل سیگنال مکانیکی کامل از طبقه‌بندی تا توسعه‌های V2X",
        "ستون فقرات یکپارچه‌سازی: هوشمندی نرم‌افزاری TWIN را به قابلیت‌های فیزیکی EPU متصل می‌کند",
        "گواهی‌شده و ایمن: انطباق ISO 26262 ASIL-D با چارچوب کامل امنیت سایبری",
        "پل به پرده ششم: لایه هماهنگی چندین کارگزار را از طریق این پروتکل هماهنگ می‌کند"
      ],
      tags: ["برآیند پرده پنجم", "ستون فقرات یکپارچه‌سازی", "یکپارچه‌سازی EPU-TWIN", "ASIL-D", "قابلیت خودمختار"]
    }
  },
  {
    id: 80,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(80),
    en: {
      title: "Multi-Agent Coordination Architecture — Orchestrating the TWIN Agent Ecosystem",
      narrative: "TWIN's multi-agent coordination architecture orchestrates the interactions of 12+ specialized agents into coherent vehicle behavior. The coordination framework addresses: (1) task decomposition — breaking high-level driving objectives into agent-specific subtasks; (2) resource allocation — assigning computational and actuator resources to agents based on priority; (3) conflict resolution — resolving disagreements between agents with different objectives; (4) emergent behavior management — detecting and correcting unintended emergent behaviors from agent interactions; (5) performance monitoring — tracking agent performance and triggering rebalancing when needed.",
      strategic: "Multi-agent coordination is the governance layer that transforms a collection of specialized agents into a unified autonomous system. Individual agents are experts in their domains — the perception agent excels at object detection, the planning agent at trajectory optimization — but without coordination, their outputs could conflict. The coordination architecture ensures that agent specialization produces synergistic rather than conflicting behavior.",
      keyPoints: [
        "12+ specialized agents: perception, planning, control, energy, safety, comfort, and more",
        "Task decomposition: high-level objectives broken into agent-specific subtasks",
        "Conflict resolution: disagreements between agents resolved by coordination layer",
        "Emergent behavior detection: unintended agent interactions identified and corrected"
      ],
      tags: ["Multi-Agent Coordination", "Task Decomposition", "Conflict Resolution", "Emergent Behavior", "Agent Orchestration"]
    },
    fa: {
      title: "معماری هماهنگی چندعاملی — هماهنگ‌سازی اکوسیستم کارگزاران TWIN",
      narrative: "معماری هماهنگی چندعاملی TWIN تعاملات ۱۲+ کارگزار تخصصی را به رفتار منسجم خودرو هماهنگ می‌کند. چارچوب هماهنگی برطرف می‌کند: (۱) تجزیه وظیفه؛ (۲) تخصیص منابع؛ (۳) حل تعارض؛ (۴) مدیریت رفتار نوظهور؛ (۵) نظارت عملکرد.",
      strategic: "هماهنگی چندعاملی لایه حاکمیتی است که مجموعه‌ای از کارگزاران تخصصی را به یک سیستم خودمختار یکپارچه تبدیل می‌کند.",
      keyPoints: [
        "۱۲+ کارگزار تخصصی: ادراک، برنامه‌ریزی، کنترل، انرژی، ایمنی، آسایش، و بیشتر",
        "تجزیه وظیفه: اهداف سطح بالا به زیروظایف اختصاصی کارگزار تقسیم می‌شوند",
        "حل تعارض: اختلافات بین کارگزاران توسط لایه هماهنگی حل می‌شوند",
        "تشخیص رفتار نوظهور: تعاملات ناخواسته کارگزار شناسایی و اصلاح می‌شوند"
      ],
      tags: ["هماهنگی چندعاملی", "تجزیه وظیفه", "حل تعارض", "رفتار نوظهور", "هماهنگ‌سازی کارگزار"]
    }
  },
  {
    id: 81,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(81),
    en: {
      title: "Station Management System — Coordinating Physical Service Infrastructure",
      narrative: "TWIN's station management system coordinates the physical service infrastructure that supports EPU fleet operations. Station types managed: (1) charging stations — managing queue, scheduling, and energy delivery; (2) maintenance depots — coordinating preventive and corrective maintenance; (3) fleet dispatch centers — managing vehicle assignment and routing; (4) emergency response stations — coordinating emergency vehicle deployment; (5) data synchronization nodes — managing fleet-wide knowledge updates. The station management system integrates with external infrastructure operators through standardized APIs.",
      strategic: "Station management is the operational backbone that enables EPU fleet deployment at scale. Individual vehicle intelligence is necessary but not sufficient for fleet operations — vehicles need physical infrastructure for energy replenishment, maintenance, and coordination. TWIN's station management system treats infrastructure as an extension of the agent ecosystem, enabling seamless coordination between vehicle agents and physical service points.",
      keyPoints: [
        "Five station types: charging, maintenance, dispatch, emergency, data sync",
        "Queue management: optimal charging station assignment minimizes fleet downtime",
        "Maintenance scheduling: predictive maintenance coordinated with operational schedules",
        "External API integration: standardized interfaces with infrastructure operators"
      ],
      tags: ["Station Management", "Fleet Infrastructure", "Charging Coordination", "Maintenance Scheduling", "Fleet Operations"]
    },
    fa: {
      title: "سیستم مدیریت ایستگاه — هماهنگ‌سازی زیرساخت خدمات فیزیکی",
      narrative: "سیستم مدیریت ایستگاه TWIN زیرساخت خدمات فیزیکی که از عملیات ناوگان EPU پشتیبانی می‌کند را هماهنگ می‌کند. انواع ایستگاه مدیریت‌شده: (۱) ایستگاه‌های شارژ؛ (۲) انبارهای تعمیر و نگهداری؛ (۳) مراکز اعزام ناوگان؛ (۴) ایستگاه‌های واکنش اضطراری؛ (۵) گره‌های همگام‌سازی داده.",
      strategic: "مدیریت ایستگاه ستون فقرات عملیاتی است که استقرار ناوگان EPU را در مقیاس فعال می‌کند.",
      keyPoints: [
        "پنج نوع ایستگاه: شارژ، تعمیر و نگهداری، اعزام، اضطراری، همگام‌سازی داده",
        "مدیریت صف: تخصیص بهینه ایستگاه شارژ زمان توقف ناوگان را به حداقل می‌رساند",
        "زمان‌بندی تعمیر و نگهداری: تعمیر و نگهداری پیش‌بینانه با برنامه‌های عملیاتی هماهنگ می‌شود",
        "یکپارچه‌سازی API خارجی: رابط‌های استاندارد با اپراتورهای زیرساخت"
      ],
      tags: ["مدیریت ایستگاه", "زیرساخت ناوگان", "هماهنگی شارژ", "زمان‌بندی تعمیر و نگهداری", "عملیات ناوگان"]
    }
  },
  {
    id: 82,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(82),
    en: {
      title: "Fleet-Level Optimization — Coordinating Vehicle Behaviors for System-Wide Efficiency",
      narrative: "TWIN's fleet-level optimization coordinates individual vehicle behaviors to achieve system-wide efficiency goals that no single vehicle can optimize alone. Fleet optimization objectives: (1) energy efficiency — coordinating charging schedules to minimize peak grid demand; (2) traffic flow — coordinating vehicle speeds and spacing to reduce congestion; (3) route diversity — distributing vehicles across route alternatives to balance network load; (4) service coverage — ensuring geographic coverage for passenger demand; (5) maintenance synchronization — coordinating maintenance schedules to maintain fleet availability. Fleet optimization uses a distributed algorithm that converges to near-optimal solutions without central coordination.",
      strategic: "Fleet-level optimization is the emergent intelligence that arises when individual vehicle agents coordinate their behaviors. A single vehicle optimizing its own energy consumption might choose to charge during peak hours when rates are high; fleet coordination shifts charging to off-peak hours, reducing costs for all vehicles while reducing grid stress. This collective intelligence is a key differentiator for EPU's commercial fleet operations.",
      keyPoints: [
        "Five fleet objectives: energy, traffic flow, route diversity, service coverage, maintenance",
        "Distributed algorithm: near-optimal fleet coordination without central controller",
        "Energy coordination: charging schedules shifted to off-peak to minimize grid stress",
        "Traffic flow coordination: vehicle spacing optimized to reduce network congestion"
      ],
      tags: ["Fleet Optimization", "Distributed Algorithm", "Energy Coordination", "Traffic Flow", "Collective Intelligence"]
    },
    fa: {
      title: "بهینه‌سازی سطح ناوگان — هماهنگ‌سازی رفتارهای خودرو برای کارایی سراسری سیستم",
      narrative: "بهینه‌سازی سطح ناوگان TWIN رفتارهای خودروهای منفرد را برای دستیابی به اهداف کارایی سراسری سیستم هماهنگ می‌کند که هیچ خودرو منفردی نمی‌تواند به‌تنهایی بهینه کند. اهداف بهینه‌سازی ناوگان: (۱) کارایی انرژی؛ (۲) جریان ترافیک؛ (۳) تنوع مسیر؛ (۴) پوشش خدمات؛ (۵) همگام‌سازی تعمیر و نگهداری.",
      strategic: "بهینه‌سازی سطح ناوگان هوشمندی نوظهوری است که وقتی کارگزاران خودروهای منفرد رفتارهای خود را هماهنگ می‌کنند ظهور می‌کند.",
      keyPoints: [
        "پنج هدف ناوگان: انرژی، جریان ترافیک، تنوع مسیر، پوشش خدمات، تعمیر و نگهداری",
        "الگوریتم توزیع‌شده: هماهنگی ناوگان نزدیک به بهینه بدون کنترل‌کننده مرکزی",
        "هماهنگی انرژی: برنامه‌های شارژ به ساعات غیراوج منتقل می‌شوند تا فشار شبکه کاهش یابد",
        "هماهنگی جریان ترافیک: فاصله‌گذاری خودرو برای کاهش ازدحام شبکه بهینه می‌شود"
      ],
      tags: ["بهینه‌سازی ناوگان", "الگوریتم توزیع‌شده", "هماهنگی انرژی", "جریان ترافیک", "هوشمندی جمعی"]
    }
  },
  {
    id: 83,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(83),
    en: {
      title: "Coordination Protocol Design — Consensus Without Central Authority",
      narrative: "TWIN's coordination protocol enables fleet-wide consensus without a central authority that represents a single point of failure. The protocol uses a variant of the Raft consensus algorithm adapted for vehicular networks: (1) leader election — vehicles elect a coordination leader for each decision domain; (2) log replication — coordination decisions are replicated to all affected vehicles; (3) commitment — decisions are committed only when a quorum of vehicles acknowledges receipt; (4) leader failover — if the coordination leader fails, a new leader is elected within 150ms. The protocol tolerates up to f=(n-1)/2 simultaneous failures in a fleet of n vehicles.",
      strategic: "Consensus without central authority is the architectural choice that makes TWIN's fleet coordination resilient to infrastructure failures. A centralized coordination server is a single point of failure — if it goes down, fleet coordination stops. TWIN's distributed consensus protocol ensures that coordination continues even when individual vehicles or communication links fail, making fleet operations robust to the inevitable failures of real-world deployment.",
      keyPoints: [
        "Raft consensus variant: leader election, log replication, quorum commitment",
        "150ms leader failover: coordination resumes quickly after leader failure",
        "f=(n-1)/2 fault tolerance: majority of fleet can fail without coordination loss",
        "No central authority: eliminates single point of failure in fleet coordination"
      ],
      tags: ["Coordination Protocol", "Raft Consensus", "Leader Election", "Fault Tolerance", "Distributed Coordination"]
    },
    fa: {
      title: "طراحی پروتکل هماهنگی — اجماع بدون اقتدار مرکزی",
      narrative: "پروتکل هماهنگی TWIN اجماع سراسری ناوگان را بدون اقتدار مرکزی که نقطه شکست منفرد را نشان می‌دهد فعال می‌کند. پروتکل از یک نوع الگوریتم اجماع Raft تطبیق‌یافته برای شبکه‌های خودرویی استفاده می‌کند: (۱) انتخاب رهبر؛ (۲) تکرار گزارش؛ (۳) تعهد؛ (۴) جابجایی رهبر.",
      strategic: "اجماع بدون اقتدار مرکزی انتخاب معماری است که هماهنگی ناوگان TWIN را در برابر خرابی‌های زیرساخت مقاوم می‌کند.",
      keyPoints: [
        "نوع اجماع Raft: انتخاب رهبر، تکرار گزارش، تعهد کورام",
        "جابجایی رهبر ۱۵۰ms: هماهنگی پس از خرابی رهبر به‌سرعت از سر گرفته می‌شود",
        "تحمل خطای f=(n-1)/2: اکثریت ناوگان می‌توانند بدون از دست دادن هماهنگی شکست بخورند",
        "بدون اقتدار مرکزی: نقطه شکست منفرد در هماهنگی ناوگان را حذف می‌کند"
      ],
      tags: ["پروتکل هماهنگی", "اجماع Raft", "انتخاب رهبر", "تحمل خطا", "هماهنگی توزیع‌شده"]
    }
  },
  {
    id: 84,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(84),
    en: {
      title: "Inter-Agent Communication Patterns — Publish-Subscribe and Request-Response",
      narrative: "TWIN's inter-agent communication uses two complementary patterns optimized for different coordination needs. Publish-Subscribe (PubSub): agents publish state updates to topics; interested agents subscribe and receive updates asynchronously. Used for: sensor data distribution, status broadcasts, event notifications. Advantages: decoupled, scalable, no blocking. Request-Response (ReqRes): agents send requests to specific agents and wait for responses. Used for: task delegation, resource requests, authorization queries. Advantages: synchronous, typed, error-propagating. The MessageBus routes both patterns with priority-aware scheduling, ensuring safety-critical messages are never delayed by high-volume telemetry.",
      strategic: "The dual communication pattern is an architectural decision that matches communication mechanism to coordination need. PubSub is efficient for broadcasting state — every agent that needs to know the vehicle's current position subscribes to the position topic, and the positioning agent publishes updates without knowing who is listening. ReqRes is appropriate for transactions — when the planning agent needs the energy agent to reserve battery capacity for a maneuver, it needs a confirmed response.",
      keyPoints: [
        "PubSub pattern: asynchronous state distribution for sensor data and status broadcasts",
        "ReqRes pattern: synchronous transactions for task delegation and resource requests",
        "Priority-aware routing: safety-critical messages never delayed by high-volume telemetry",
        "Pattern selection guide: PubSub for state, ReqRes for transactions"
      ],
      tags: ["Communication Patterns", "Publish-Subscribe", "Request-Response", "MessageBus", "Priority Routing"]
    },
    fa: {
      title: "الگوهای ارتباطی بین کارگزاران — انتشار-اشتراک و درخواست-پاسخ",
      narrative: "ارتباط بین کارگزاران TWIN از دو الگوی مکمل بهینه‌شده برای نیازهای هماهنگی مختلف استفاده می‌کند. انتشار-اشتراک (PubSub): کارگزاران به‌روزرسانی‌های حالت را در موضوعات منتشر می‌کنند؛ کارگزاران علاقه‌مند اشتراک می‌گیرند. درخواست-پاسخ (ReqRes): کارگزاران درخواست‌ها را به کارگزاران خاص ارسال می‌کنند.",
      strategic: "الگوی ارتباطی دوگانه یک تصمیم معماری است که مکانیزم ارتباطی را با نیاز هماهنگی تطبیق می‌دهد.",
      keyPoints: [
        "الگوی PubSub: توزیع حالت ناهمزمان برای داده‌های حسگر و پخش وضعیت",
        "الگوی ReqRes: تراکنش‌های همزمان برای واگذاری وظیفه و درخواست‌های منابع",
        "مسیریابی آگاه از اولویت: پیام‌های حیاتی ایمنی هرگز توسط تله‌متری پرحجم به تأخیر نمی‌افتند",
        "راهنمای انتخاب الگو: PubSub برای حالت، ReqRes برای تراکنش‌ها"
      ],
      tags: ["الگوهای ارتباطی", "انتشار-اشتراک", "درخواست-پاسخ", "گذرگاه پیام", "مسیریابی اولویت"]
    }
  },
  {
    id: 85,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(85),
    en: {
      title: "Dynamic Task Allocation — Assigning Work to Agents Based on Capability and Load",
      narrative: "TWIN's dynamic task allocation system assigns computational tasks to agents based on real-time capability assessment and load balancing. Allocation factors: (1) agent capability — does the agent have the skills to perform the task?; (2) current load — is the agent's computational capacity available?; (3) trust score — is the agent's reliability sufficient for the task's safety requirements?; (4) proximity — for physical tasks, is the agent's vehicle in the right location?; (5) energy state — does the agent's vehicle have sufficient energy to complete the task? The allocation algorithm runs every 100ms, continuously rebalancing as conditions change.",
      strategic: "Dynamic task allocation is the mechanism that makes TWIN's multi-agent system adaptive to changing conditions. Static task assignment — agent A always handles perception, agent B always handles planning — is brittle: if agent A fails, perception stops. Dynamic allocation enables the system to redistribute tasks when agents fail, become overloaded, or when task priorities change. This adaptability is essential for reliable fleet operations.",
      keyPoints: [
        "Five allocation factors: capability, load, trust, proximity, energy state",
        "100ms rebalancing: continuous adaptation to changing agent and task conditions",
        "Failure resilience: tasks redistributed automatically when agents fail or degrade",
        "Trust-gated allocation: safety-critical tasks require minimum trust score"
      ],
      tags: ["Dynamic Task Allocation", "Load Balancing", "Capability Assessment", "Failure Resilience", "Adaptive Coordination"]
    },
    fa: {
      title: "تخصیص پویای وظیفه — تخصیص کار به کارگزاران بر اساس قابلیت و بار",
      narrative: "سیستم تخصیص پویای وظیفه TWIN وظایف محاسباتی را بر اساس ارزیابی قابلیت بلادرنگ و توازن بار به کارگزاران تخصیص می‌دهد. عوامل تخصیص: (۱) قابلیت کارگزار؛ (۲) بار فعلی؛ (۳) امتیاز اعتماد؛ (۴) مجاورت؛ (۵) حالت انرژی.",
      strategic: "تخصیص پویای وظیفه مکانیزمی است که سیستم چندعاملی TWIN را به شرایط متغیر سازگار می‌کند.",
      keyPoints: [
        "پنج عامل تخصیص: قابلیت، بار، اعتماد، مجاورت، حالت انرژی",
        "توازن مجدد ۱۰۰ms: سازگاری مستمر با شرایط متغیر کارگزار و وظیفه",
        "مقاومت در برابر خرابی: وظایف به‌طور خودکار هنگام خرابی یا تخریب کارگزاران توزیع مجدد می‌شوند",
        "تخصیص دروازه‌بانی‌شده توسط اعتماد: وظایف حیاتی ایمنی نیاز به حداقل امتیاز اعتماد دارند"
      ],
      tags: ["تخصیص پویای وظیفه", "توازن بار", "ارزیابی قابلیت", "مقاومت در برابر خرابی", "هماهنگی سازگار"]
    }
  },
  {
    id: 86,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(86),
    en: {
      title: "Coordination Plane Hierarchy — Separating Control, Data, and Management Planes",
      narrative: "TWIN's coordination architecture separates concerns into three planes: (1) Control Plane — coordination decisions, task allocation, conflict resolution; low volume, high priority, processed by dedicated coordination agents; (2) Data Plane — sensor data, telemetry, world model updates; high volume, medium priority, processed by data pipeline agents; (3) Management Plane — configuration, monitoring, software updates, health checks; low volume, low priority, processed by management agents. Plane separation prevents management traffic from interfering with control decisions and data traffic from delaying safety-critical coordination.",
      strategic: "Plane separation is a networking architecture principle applied to multi-agent coordination. In traditional networking, separating control and data planes enables routers to forward packets at line rate while control protocols (BGP, OSPF) run at human timescales. In TWIN, the same principle enables coordination decisions to be made at millisecond timescales while telemetry and management traffic run at their natural rates without interference.",
      keyPoints: [
        "Three-plane architecture: control, data, management with independent processing",
        "Control plane priority: coordination decisions never delayed by telemetry traffic",
        "Data plane throughput: sensor data processed at sensor rates without control interference",
        "Management plane isolation: configuration changes cannot disrupt active coordination"
      ],
      tags: ["Coordination Planes", "Control Plane", "Data Plane", "Management Plane", "Plane Separation"]
    },
    fa: {
      title: "سلسله‌مراتب صفحه هماهنگی — جداسازی صفحات کنترل، داده، و مدیریت",
      narrative: "معماری هماهنگی TWIN نگرانی‌ها را به سه صفحه تفکیک می‌کند: (۱) صفحه کنترل — تصمیمات هماهنگی، تخصیص وظیفه، حل تعارض؛ (۲) صفحه داده — داده‌های حسگر، تله‌متری، به‌روزرسانی‌های مدل جهانی؛ (۳) صفحه مدیریت — پیکربندی، نظارت، به‌روزرسانی‌های نرم‌افزاری.",
      strategic: "تفکیک صفحه یک اصل معماری شبکه است که به هماهنگی چندعاملی اعمال می‌شود.",
      keyPoints: [
        "معماری سه‌صفحه‌ای: کنترل، داده، مدیریت با پردازش مستقل",
        "اولویت صفحه کنترل: تصمیمات هماهنگی هرگز توسط ترافیک تله‌متری به تأخیر نمی‌افتند",
        "گذردهی صفحه داده: داده‌های حسگر با نرخ حسگر بدون تداخل کنترل پردازش می‌شوند",
        "ایزولاسیون صفحه مدیریت: تغییرات پیکربندی نمی‌توانند هماهنگی فعال را مختل کنند"
      ],
      tags: ["صفحات هماهنگی", "صفحه کنترل", "صفحه داده", "صفحه مدیریت", "تفکیک صفحه"]
    }
  },
  {
    id: 87,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(87),
    en: {
      title: "Coordination Monitoring and Observability — Diagnosing Multi-Agent Behavior",
      narrative: "TWIN's coordination monitoring system provides comprehensive observability into multi-agent behavior, enabling diagnosis of coordination failures and optimization opportunities. Monitoring dimensions: (1) agent health — CPU, memory, latency, error rates for each agent; (2) coordination efficiency — task allocation utilization, conflict rates, consensus latency; (3) communication health — message delivery rates, queue depths, latency distributions; (4) fleet-level metrics — coverage, utilization, energy efficiency across the fleet; (5) anomaly detection — statistical detection of unusual agent behavior patterns. All metrics are exported to a time-series database for historical analysis.",
      strategic: "Coordination observability is the diagnostic capability that enables TWIN's operators to understand and improve system behavior. Multi-agent systems are inherently complex — emergent behaviors can arise from agent interactions that are not visible in individual agent metrics. TWIN's observability framework provides the visibility needed to understand system-level behavior, diagnose coordination failures, and identify optimization opportunities.",
      keyPoints: [
        "Five monitoring dimensions: agent health, coordination efficiency, communication, fleet, anomalies",
        "Real-time dashboards: operators can observe coordination behavior as it happens",
        "Anomaly detection: statistical methods identify unusual agent behavior patterns",
        "Historical analysis: time-series database enables trend analysis and incident investigation"
      ],
      tags: ["Coordination Monitoring", "Observability", "Anomaly Detection", "Fleet Metrics", "Diagnostic Capability"]
    },
    fa: {
      title: "نظارت و رصدپذیری هماهنگی — تشخیص رفتار چندعاملی",
      narrative: "سیستم نظارت هماهنگی TWIN رصدپذیری جامعی از رفتار چندعاملی ارائه می‌دهد که تشخیص خرابی‌های هماهنگی و فرصت‌های بهینه‌سازی را فعال می‌کند. ابعاد نظارت: (۱) سلامت کارگزار؛ (۲) کارایی هماهنگی؛ (۳) سلامت ارتباطات؛ (۴) معیارهای سطح ناوگان؛ (۵) تشخیص ناهنجاری.",
      strategic: "رصدپذیری هماهنگی قابلیت تشخیصی است که اپراتورهای TWIN را قادر می‌سازد رفتار سیستم را درک و بهبود دهند.",
      keyPoints: [
        "پنج بعد نظارت: سلامت کارگزار، کارایی هماهنگی، ارتباطات، ناوگان، ناهنجاری‌ها",
        "داشبوردهای بلادرنگ: اپراتورها می‌توانند رفتار هماهنگی را در حین وقوع مشاهده کنند",
        "تشخیص ناهنجاری: روش‌های آماری الگوهای رفتار کارگزار غیرمعمول را شناسایی می‌کنند",
        "تحلیل تاریخی: پایگاه داده سری زمانی تحلیل روند و بررسی حادثه را فعال می‌کند"
      ],
      tags: ["نظارت هماهنگی", "رصدپذیری", "تشخیص ناهنجاری", "معیارهای ناوگان", "قابلیت تشخیصی"]
    }
  },
  {
    id: 88,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(88),
    en: {
      title: "Coordination Under Network Partitions — Operating During Connectivity Loss",
      narrative: "TWIN's coordination framework maintains safe operation during network partitions — periods when vehicles lose connectivity to each other or to infrastructure. Partition handling strategy: (1) local autonomy — each vehicle maintains full autonomous capability using its own agents; (2) stale coordination — vehicles continue executing last-known coordination decisions until connectivity restores; (3) partition detection — vehicles detect connectivity loss within 500ms and switch to local autonomy mode; (4) reconciliation — when connectivity restores, vehicles reconcile their local state with the fleet state using a conflict-free merge algorithm; (5) consistency guarantees — post-reconciliation state is consistent and causally ordered.",
      strategic: "Network partition handling is the reliability mechanism that makes TWIN's fleet coordination robust to real-world connectivity challenges. Cellular networks have coverage gaps; V2V communication has range limits; infrastructure can fail. A fleet coordination system that stops working when connectivity is lost is not suitable for real-world deployment. TWIN's partition handling ensures that vehicles remain safe and operational regardless of connectivity state.",
      keyPoints: [
        "Local autonomy: full vehicle capability maintained during connectivity loss",
        "500ms partition detection: vehicles switch to local mode within half a second",
        "Conflict-free merge: post-partition state reconciliation without data loss",
        "Causal consistency: reconciled state preserves causal ordering of events"
      ],
      tags: ["Network Partitions", "Local Autonomy", "Partition Detection", "State Reconciliation", "Conflict-Free Merge"]
    },
    fa: {
      title: "هماهنگی در تقسیم‌بندی شبکه — عملکرد در طول قطع اتصال",
      narrative: "چارچوب هماهنگی TWIN عملکرد ایمن را در طول تقسیم‌بندی شبکه حفظ می‌کند — دوره‌هایی که خودروها اتصال به یکدیگر یا به زیرساخت را از دست می‌دهند. استراتژی مدیریت تقسیم‌بندی: (۱) خودمختاری محلی؛ (۲) هماهنگی قدیمی؛ (۳) تشخیص تقسیم‌بندی؛ (۴) آشتی‌دهی؛ (۵) تضمین‌های سازگاری.",
      strategic: "مدیریت تقسیم‌بندی شبکه مکانیزم قابلیت اعتماد است که هماهنگی ناوگان TWIN را در برابر چالش‌های اتصال دنیای واقعی مقاوم می‌کند.",
      keyPoints: [
        "خودمختاری محلی: قابلیت کامل خودرو در طول قطع اتصال حفظ می‌شود",
        "تشخیص تقسیم‌بندی ۵۰۰ms: خودروها در نیم ثانیه به حالت محلی تغییر می‌کنند",
        "ادغام بدون تعارض: آشتی‌دهی حالت پس از تقسیم‌بندی بدون از دست دادن داده",
        "سازگاری علّی: حالت آشتی‌داده‌شده ترتیب علّی رویدادها را حفظ می‌کند"
      ],
      tags: ["تقسیم‌بندی شبکه", "خودمختاری محلی", "تشخیص تقسیم‌بندی", "آشتی‌دهی حالت", "ادغام بدون تعارض"]
    }
  },
  {
    id: 89,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(89),
    en: {
      title: "Coordination Security — Preventing Malicious Agent Infiltration",
      narrative: "TWIN's coordination security framework prevents malicious agents from infiltrating the fleet coordination system. Security mechanisms: (1) agent identity verification — each agent has a cryptographic identity issued by a trusted authority; (2) message authentication — all coordination messages are signed with the sender's private key; (3) behavior monitoring — coordination patterns are analyzed for anomalies indicating compromised agents; (4) isolation — suspected compromised agents are isolated from coordination while maintaining their local safety functions; (5) recovery — isolated agents can be restored after remote attestation verifies their integrity. The security framework is designed to tolerate Byzantine failures — agents that behave arbitrarily, not just crash.",
      strategic: "Coordination security is increasingly critical as TWIN's fleet grows and becomes a high-value target for adversaries. A compromised coordination agent could issue false task allocations, manipulate fleet routing, or inject false sensor data. TWIN's security framework applies zero-trust principles to agent coordination: every agent must prove its identity and message integrity on every interaction, regardless of past behavior.",
      keyPoints: [
        "Cryptographic agent identity: tamper-evident identity issued by trusted authority",
        "Message signing: all coordination messages authenticated with sender's private key",
        "Behavior monitoring: anomaly detection identifies compromised agent patterns",
        "Byzantine fault tolerance: system tolerates agents that behave arbitrarily"
      ],
      tags: ["Coordination Security", "Agent Identity", "Message Authentication", "Byzantine Tolerance", "Zero-Trust"]
    },
    fa: {
      title: "امنیت هماهنگی — پیشگیری از نفوذ کارگزاران مخرب",
      narrative: "چارچوب امنیت هماهنگی TWIN از نفوذ کارگزاران مخرب به سیستم هماهنگی ناوگان جلوگیری می‌کند. مکانیزم‌های امنیتی: (۱) تأیید هویت کارگزار؛ (۲) احراز هویت پیام؛ (۳) نظارت رفتار؛ (۴) ایزولاسیون؛ (۵) بازیابی.",
      strategic: "امنیت هماهنگی با رشد ناوگان TWIN و تبدیل شدن آن به هدف ارزشمند برای دشمنان به‌طور فزاینده‌ای حیاتی می‌شود.",
      keyPoints: [
        "هویت رمزنگاری کارگزار: هویت ضدتغییر صادرشده توسط مرجع معتمد",
        "امضای پیام: همه پیام‌های هماهنگی با کلید خصوصی فرستنده احراز هویت می‌شوند",
        "نظارت رفتار: تشخیص ناهنجاری الگوهای کارگزار در معرض خطر را شناسایی می‌کند",
        "تحمل خطای بیزانسی: سیستم کارگزارانی را که به‌طور دلخواه رفتار می‌کنند تحمل می‌کند"
      ],
      tags: ["امنیت هماهنگی", "هویت کارگزار", "احراز هویت پیام", "تحمل بیزانسی", "اعتماد صفر"]
    }
  },
  {
    id: 90,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(90),
    en: {
      title: "Coordination Performance — Scalability from Single Vehicle to Thousand-Vehicle Fleet",
      narrative: "TWIN's coordination system is designed to scale from a single vehicle to a thousand-vehicle fleet without architectural changes. Scalability mechanisms: (1) hierarchical coordination — large fleets organized into regional clusters with inter-cluster coordination; (2) gossip protocols — fleet-wide state dissemination using epidemic algorithms that scale O(log n); (3) lazy consistency — not all agents need all information; lazy propagation reduces coordination overhead; (4) coordination sharding — different coordination domains (routing, charging, maintenance) handled by different agent subsets. Measured performance: 1,000-vehicle fleet coordination with <200ms consensus latency.",
      strategic: "Scalability is the commercial viability requirement for TWIN's fleet coordination. A system that works for 10 vehicles but degrades for 1,000 vehicles cannot support EPU's commercial fleet deployment. TWIN's scalability mechanisms ensure that coordination overhead grows sub-linearly with fleet size — adding vehicles to the fleet improves collective intelligence without proportionally increasing coordination cost.",
      keyPoints: [
        "Hierarchical coordination: large fleets organized into regional clusters",
        "Gossip protocols: O(log n) state dissemination scales to thousand-vehicle fleets",
        "Coordination sharding: different domains handled by specialized agent subsets",
        "1,000-vehicle benchmark: <200ms consensus latency demonstrated at scale"
      ],
      tags: ["Coordination Scalability", "Hierarchical Coordination", "Gossip Protocols", "Sharding", "Fleet Scale"]
    },
    fa: {
      title: "عملکرد هماهنگی — مقیاس‌پذیری از خودرو منفرد تا ناوگان هزارخودرویی",
      narrative: "سیستم هماهنگی TWIN برای مقیاس‌پذیری از یک خودرو تا ناوگان هزارخودرویی بدون تغییرات معماری طراحی شده است. مکانیزم‌های مقیاس‌پذیری: (۱) هماهنگی سلسله‌مراتبی؛ (۲) پروتکل‌های شایعه؛ (۳) سازگاری تنبل؛ (۴) تقسیم هماهنگی.",
      strategic: "مقیاس‌پذیری الزام قابلیت تجاری برای هماهنگی ناوگان TWIN است.",
      keyPoints: [
        "هماهنگی سلسله‌مراتبی: ناوگان‌های بزرگ به خوشه‌های منطقه‌ای سازماندهی می‌شوند",
        "پروتکل‌های شایعه: انتشار حالت O(log n) به ناوگان‌های هزارخودرویی مقیاس می‌شود",
        "تقسیم هماهنگی: حوزه‌های مختلف توسط زیرمجموعه‌های تخصصی کارگزار مدیریت می‌شوند",
        "معیار ۱,۰۰۰ خودرو: تأخیر اجماع <۲۰۰ms در مقیاس نشان داده شده"
      ],
      tags: ["مقیاس‌پذیری هماهنگی", "هماهنگی سلسله‌مراتبی", "پروتکل‌های شایعه", "تقسیم", "مقیاس ناوگان"]
    }
  },
  {
    id: 91,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(91),
    en: {
      title: "Human-Agent Coordination — Interfaces for Operator Oversight and Intervention",
      narrative: "TWIN's human-agent coordination framework defines the interfaces through which human operators can monitor, guide, and intervene in multi-agent fleet operations. Interface levels: (1) monitoring — real-time dashboards showing fleet state, agent health, and coordination metrics; (2) guidance — operators can set fleet-level objectives (prioritize energy efficiency, maximize coverage) that agents optimize toward; (3) intervention — operators can override specific agent decisions or pause coordination for manual control; (4) investigation — post-incident analysis tools for understanding coordination failures; (5) training — operators can provide feedback on agent decisions to improve future behavior. All interventions are logged for audit.",
      strategic: "Human-agent coordination is the governance mechanism that maintains human oversight of increasingly autonomous systems. As TWIN's agents become more capable, the temptation is to reduce human oversight — but regulatory requirements and operational prudence require maintaining meaningful human control. TWIN's framework enables operators to exercise oversight at the appropriate level of abstraction: setting objectives rather than micromanaging decisions.",
      keyPoints: [
        "Five interface levels: monitoring, guidance, intervention, investigation, training",
        "Objective-level guidance: operators set fleet goals, agents optimize implementation",
        "Override capability: operators can intervene in specific decisions when needed",
        "All interventions logged: maintains audit trail for regulatory compliance"
      ],
      tags: ["Human-Agent Coordination", "Operator Interface", "Human Oversight", "Intervention", "Audit Trail"]
    },
    fa: {
      title: "هماهنگی انسان-کارگزار — رابط‌ها برای نظارت و مداخله اپراتور",
      narrative: "چارچوب هماهنگی انسان-کارگزار TWIN رابط‌هایی را تعریف می‌کند که از طریق آن‌ها اپراتورهای انسانی می‌توانند عملیات ناوگان چندعاملی را نظارت، هدایت، و در آن مداخله کنند. سطوح رابط: (۱) نظارت؛ (۲) هدایت؛ (۳) مداخله؛ (۴) بررسی؛ (۵) آموزش.",
      strategic: "هماهنگی انسان-کارگزار مکانیزم حاکمیتی است که نظارت انسانی بر سیستم‌های به‌طور فزاینده خودمختار را حفظ می‌کند.",
      keyPoints: [
        "پنج سطح رابط: نظارت، هدایت، مداخله، بررسی، آموزش",
        "هدایت سطح هدف: اپراتورها اهداف ناوگان را تعیین می‌کنند، کارگزاران پیاده‌سازی را بهینه می‌کنند",
        "قابلیت لغو: اپراتورها می‌توانند در صورت نیاز در تصمیمات خاص مداخله کنند",
        "همه مداخلات ثبت می‌شوند: مسیر حسابرسی برای انطباق نظارتی حفظ می‌شود"
      ],
      tags: ["هماهنگی انسان-کارگزار", "رابط اپراتور", "نظارت انسانی", "مداخله", "مسیر حسابرسی"]
    }
  },
  {
    id: 92,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(92),
    en: {
      title: "Coordination Simulation and Testing — Validating Multi-Agent Behavior at Scale",
      narrative: "TWIN's coordination simulation framework enables validation of multi-agent behavior at fleet scale before deployment. Simulation capabilities: (1) agent simulation — each agent type is simulated with realistic behavior models; (2) communication simulation — network conditions including latency, packet loss, and partitions are simulated; (3) failure injection — agent failures, sensor failures, and communication failures are injected to test coordination resilience; (4) scale testing — simulations run with up to 10,000 virtual vehicles to test scalability; (5) scenario replay — real-world incidents are replayed in simulation to validate fixes. The simulation framework runs continuously in CI/CD, catching coordination regressions before deployment.",
      strategic: "Coordination simulation is the quality assurance mechanism that enables TWIN to validate complex multi-agent behaviors that are difficult to test in the real world. Testing coordination failure modes in real vehicles is dangerous and expensive; simulation enables exhaustive testing of failure scenarios, edge cases, and scale conditions. The CI/CD integration ensures that every code change is validated against the full simulation suite before deployment.",
      keyPoints: [
        "Agent simulation: realistic behavior models for each agent type",
        "Failure injection: coordination resilience tested under simulated agent and network failures",
        "10,000-vehicle scale testing: scalability validated before real-world deployment",
        "CI/CD integration: simulation suite runs on every code change"
      ],
      tags: ["Coordination Simulation", "Failure Injection", "Scale Testing", "CI/CD Integration", "Multi-Agent Testing"]
    },
    fa: {
      title: "شبیه‌سازی و آزمایش هماهنگی — اعتبارسنجی رفتار چندعاملی در مقیاس",
      narrative: "چارچوب شبیه‌سازی هماهنگی TWIN اعتبارسنجی رفتار چندعاملی را در مقیاس ناوگان قبل از استقرار فعال می‌کند. قابلیت‌های شبیه‌سازی: (۱) شبیه‌سازی کارگزار؛ (۲) شبیه‌سازی ارتباطات؛ (۳) تزریق خرابی؛ (۴) آزمایش مقیاس؛ (۵) بازپخش سناریو.",
      strategic: "شبیه‌سازی هماهنگی مکانیزم تضمین کیفیت است که TWIN را قادر می‌سازد رفتارهای پیچیده چندعاملی را که آزمایش آن‌ها در دنیای واقعی دشوار است اعتبارسنجی کند.",
      keyPoints: [
        "شبیه‌سازی کارگزار: مدل‌های رفتار واقع‌بینانه برای هر نوع کارگزار",
        "تزریق خرابی: مقاومت هماهنگی تحت خرابی‌های شبیه‌سازی‌شده کارگزار و شبکه آزمایش می‌شود",
        "آزمایش مقیاس ۱۰,۰۰۰ خودرو: مقیاس‌پذیری قبل از استقرار دنیای واقعی اعتبارسنجی می‌شود",
        "یکپارچه‌سازی CI/CD: مجموعه شبیه‌سازی با هر تغییر کد اجرا می‌شود"
      ],
      tags: ["شبیه‌سازی هماهنگی", "تزریق خرابی", "آزمایش مقیاس", "یکپارچه‌سازی CI/CD", "آزمایش چندعاملی"]
    }
  },
  {
    id: 93,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(93),
    en: {
      title: "Coordination Economics — Cost-Benefit Analysis of Multi-Agent Fleet Operations",
      narrative: "TWIN's coordination economics framework quantifies the business value of multi-agent fleet coordination. Value drivers: (1) energy optimization — fleet charging coordination reduces energy costs by 18-23% through off-peak scheduling and V2G revenue; (2) maintenance efficiency — predictive maintenance coordination reduces unplanned downtime by 34%; (3) utilization improvement — dynamic task allocation increases fleet utilization from 67% to 84%; (4) incident reduction — coordinated safety monitoring reduces incident rate by 41%; (5) operational labor — automated coordination reduces dispatcher labor requirements by 60%. Total economic value: $2,400/vehicle/year at fleet scale.",
      strategic: "Coordination economics provides the business justification for TWIN multi-agent architecture. The technical sophistication of multi-agent coordination is only valuable if it delivers measurable business outcomes — and the numbers above demonstrate that TWIN delivers compelling ROI across every operational dimension.",
      keyPoints: [
        "Fleet charging coordination reduces energy costs by 18-23% through off-peak scheduling",
        "Predictive maintenance coordination reduces unplanned downtime by 34%",
        "Dynamic task allocation increases fleet utilization from 67% to 84%",
        "Automated coordination reduces dispatcher labor requirements by 60%"
      ],
      tags: ["Coordination Economics", "Fleet Optimization", "ROI Analysis", "Energy Savings", "Operational Efficiency"]
    },
    fa: {
      title: "اقتصاد هماهنگی — تحلیل هزینه-فایده عملیات ناوگان چندعاملی",
      narrative: "چارچوب اقتصاد هماهنگی TWIN ارزش تجاری هماهنگی ناوگان چندعاملی را کمی می‌کند. محرک‌های ارزش: (۱) بهینه‌سازی انرژی — ۱۸-۲۳٪ کاهش هزینه؛ (۲) کارایی نگهداری — ۳۴٪ کاهش توقف برنامه‌ریزی‌نشده؛ (۳) بهبود بهره‌وری — افزایش از ۶۷٪ به ۸۴٪؛ (۴) کاهش حوادث — ۴۱٪؛ (۵) نیروی کار عملیاتی — ۶۰٪ کاهش.",
      strategic: "اقتصاد هماهنگی توجیه تجاری معماری چندعاملی TWIN را فراهم می‌کند. پیچیدگی فنی هماهنگی چندعاملی تنها زمانی ارزشمند است که نتایج تجاری قابل اندازه‌گیری ارائه دهد — و اعداد بالا نشان می‌دهند TWIN در هر بُعد عملیاتی ROI قانع‌کننده‌ای ارائه می‌دهد.",
      keyPoints: [
        "هماهنگی شارژ ناوگان هزینه‌های انرژی را ۱۸-۲۳٪ از طریق زمان‌بندی خارج از اوج کاهش می‌دهد",
        "هماهنگی نگهداری پیش‌بینانه توقف برنامه‌ریزی‌نشده را ۳۴٪ کاهش می‌دهد",
        "تخصیص پویای وظایف بهره‌وری ناوگان را از ۶۷٪ به ۸۴٪ افزایش می‌دهد",
        "هماهنگی خودکار نیاز به نیروی کار اعزام‌کننده را ۶۰٪ کاهش می‌دهد"
      ],
      tags: ["اقتصاد هماهنگی", "بهینه‌سازی ناوگان", "تحلیل ROI", "صرفه‌جویی انرژی", "کارایی عملیاتی"]
    }
  },
  {
    id: 94,
    act: "Coordination",
    actLabel: ACT_LABELS_D.Coordination,
    imageUrl: imgD(94),
    en: {
      title: "Station Management Protocol — Physical Infrastructure Coordination",
      narrative: "TWIN's station management protocol coordinates the physical infrastructure layer of autonomous vehicle operations. The protocol manages: (1) charging station allocation — dynamic assignment of vehicles to charging stations based on battery state, queue depth, and grid capacity; (2) maintenance bay scheduling — predictive maintenance scheduling that minimizes vehicle downtime while maximizing bay utilization; (3) parking structure optimization — dynamic space allocation that maximizes density while ensuring egress paths; (4) fueling infrastructure — hydrogen and fast-charge coordination for mixed-fuel fleets; (5) facility security — coordinated access control and surveillance integration. The protocol interfaces with the EPU's physical sensor array to provide real-time infrastructure state awareness.",
      strategic: "Station management represents the physical manifestation of TWIN's coordination intelligence. While most coordination happens in software, the physical infrastructure must be managed with equal precision — a charging station conflict or maintenance bay bottleneck can cascade into fleet-wide operational disruption.",
      keyPoints: [
        "Dynamic charging station allocation based on battery state and grid capacity",
        "Predictive maintenance scheduling minimizes downtime while maximizing bay utilization",
        "Parking structure optimization ensures density with guaranteed egress paths",
        "Physical sensor array integration provides real-time infrastructure state awareness"
      ],
      tags: ["Station Management", "Charging Coordination", "Maintenance Scheduling", "Infrastructure Protocol", "Physical Layer"]
    },
    fa: {
      title: "پروتکل مدیریت ایستگاه — هماهنگی زیرساخت فیزیکی",
      narrative: "پروتکل مدیریت ایستگاه TWIN لایه زیرساخت فیزیکی عملیات خودروهای خودگردان را هماهنگ می‌کند. پروتکل مدیریت می‌کند: (۱) تخصیص ایستگاه شارژ؛ (۲) زمان‌بندی خلیج نگهداری؛ (۳) بهینه‌سازی سازه پارکینگ؛ (۴) زیرساخت سوخت‌رسانی؛ (۵) امنیت تأسیسات.",
      strategic: "مدیریت ایستگاه نمود فیزیکی هوش هماهنگی TWIN است. در حالی که اکثر هماهنگی در نرم‌افزار اتفاق می‌افتد، زیرساخت فیزیکی باید با دقت برابر مدیریت شود — تعارض ایستگاه شارژ یا گلوگاه خلیج نگهداری می‌تواند به اختلال عملیاتی در سطح ناوگان تبدیل شود.",
      keyPoints: [
        "تخصیص پویای ایستگاه شارژ بر اساس وضعیت باتری و ظرفیت شبکه",
        "زمان‌بندی نگهداری پیش‌بینانه توقف را به حداقل می‌رساند در حالی که بهره‌وری خلیج را به حداکثر می‌رساند",
        "بهینه‌سازی سازه پارکینگ تراکم را با مسیرهای خروج تضمین‌شده تضمین می‌کند",
        "یکپارچه‌سازی آرایه حسگر فیزیکی آگاهی از وضعیت زیرساخت را در زمان واقعی فراهم می‌کند"
      ],
      tags: ["مدیریت ایستگاه", "هماهنگی شارژ", "زمان‌بندی نگهداری", "پروتکل زیرساخت", "لایه فیزیکی"]
    }
  },
  {
    id: 95,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(95),
    en: {
      title: "Claude Integration Architecture — LLM as Coordination Intelligence",
      narrative: "TWIN's Claude integration elevates multi-agent coordination from rule-based to intelligence-driven. The integration architecture: (1) Claude as meta-coordinator — LLM reasoning applied to coordination decisions that exceed the complexity of deterministic rules; (2) natural language interface — fleet operators interact with TWIN through natural language commands that Claude translates to coordination directives; (3) anomaly interpretation — Claude interprets unusual sensor patterns and coordination failures that fall outside predefined detection rules; (4) policy generation — Claude generates new coordination policies in response to novel operational scenarios; (5) explanation generation — Claude provides human-readable explanations for coordination decisions, enabling operator oversight and regulatory compliance.",
      strategic: "Claude integration represents the transition from TWIN as a sophisticated rule engine to TWIN as an intelligent coordination partner. The LLM layer handles the long tail of edge cases, novel scenarios, and complex tradeoffs that deterministic rules cannot anticipate — while the deterministic core ensures safety-critical decisions remain predictable and auditable.",
      keyPoints: [
        "Claude as meta-coordinator applies LLM reasoning to decisions exceeding deterministic rule complexity",
        "Natural language interface enables fleet operators to interact through plain-language commands",
        "Anomaly interpretation handles unusual patterns outside predefined detection rules",
        "Policy generation creates new coordination policies for novel operational scenarios"
      ],
      tags: ["Claude Integration", "LLM Coordination", "Meta-Coordinator", "Natural Language Interface", "AI Oversight"]
    },
    fa: {
      title: "معماری یکپارچه‌سازی Claude — هوش مصنوعی به‌عنوان هوش هماهنگی",
      narrative: "یکپارچه‌سازی Claude در TWIN هماهنگی چندعاملی را از مبتنی بر قانون به مبتنی بر هوش ارتقا می‌دهد. معماری یکپارچه‌سازی: (۱) Claude به‌عنوان هماهنگ‌کننده فرا؛ (۲) رابط زبان طبیعی؛ (۳) تفسیر ناهنجاری؛ (۴) تولید سیاست؛ (۵) تولید توضیح.",
      strategic: "یکپارچه‌سازی Claude انتقال از TWIN به‌عنوان موتور قانون پیچیده به TWIN به‌عنوان شریک هماهنگی هوشمند را نشان می‌دهد. لایه LLM دنباله بلند موارد لبه، سناریوهای جدید و معاوضه‌های پیچیده‌ای را که قوانین قطعی نمی‌توانند پیش‌بینی کنند مدیریت می‌کند.",
      keyPoints: [
        "Claude به‌عنوان هماهنگ‌کننده فرا استدلال LLM را برای تصمیماتی که از پیچیدگی قانون قطعی فراتر می‌روند اعمال می‌کند",
        "رابط زبان طبیعی به اپراتورهای ناوگان امکان تعامل از طریق دستورات زبان ساده را می‌دهد",
        "تفسیر ناهنجاری الگوهای غیرمعمول خارج از قوانین تشخیص از پیش تعریف‌شده را مدیریت می‌کند",
        "تولید سیاست سیاست‌های هماهنگی جدید برای سناریوهای عملیاتی جدید ایجاد می‌کند"
      ],
      tags: ["یکپارچه‌سازی Claude", "هماهنگی LLM", "هماهنگ‌کننده فرا", "رابط زبان طبیعی", "نظارت هوش مصنوعی"]
    }
  },
  {
    id: 96,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(96),
    en: {
      title: "Prompt Engineering for Fleet Coordination — Structured LLM Directives",
      narrative: "Effective LLM integration requires disciplined prompt engineering that constrains Claude's responses to coordination-relevant outputs. TWIN's prompt engineering framework: (1) system context injection — each LLM call includes current fleet state, active coordination policies, and safety constraints as structured context; (2) output schema enforcement — responses are constrained to structured JSON that maps directly to coordination directives; (3) chain-of-thought coordination — complex coordination decisions use step-by-step reasoning traces that are logged for audit; (4) few-shot coordination examples — prompt templates include representative coordination scenarios to guide response quality; (5) safety guardrails — explicit safety constraints are embedded in every prompt to prevent coordination directives that violate safety boundaries.",
      strategic: "Prompt engineering is the interface layer between human intent and machine coordination. Poor prompt design leads to inconsistent coordination behavior, safety violations, and operator confusion. TWIN's structured prompt framework ensures that Claude's intelligence is channeled into precise, auditable coordination actions.",
      keyPoints: [
        "System context injection includes fleet state, active policies, and safety constraints",
        "Output schema enforcement constrains responses to structured JSON coordination directives",
        "Chain-of-thought coordination logs step-by-step reasoning for audit trails",
        "Safety guardrails embedded in every prompt prevent safety boundary violations"
      ],
      tags: ["Prompt Engineering", "Fleet Coordination", "Structured Directives", "Safety Guardrails", "LLM Interface"]
    },
    fa: {
      title: "مهندسی پرامپت برای هماهنگی ناوگان — دستورالعمل‌های ساختاریافته LLM",
      narrative: "یکپارچه‌سازی مؤثر LLM نیازمند مهندسی پرامپت منضبطی است که پاسخ‌های Claude را به خروجی‌های مرتبط با هماهنگی محدود می‌کند. چارچوب مهندسی پرامپت TWIN: (۱) تزریق زمینه سیستم؛ (۲) اجرای طرح خروجی؛ (۳) هماهنگی زنجیره تفکر؛ (۴) مثال‌های هماهنگی چند-شات؛ (۵) حفاظ‌های ایمنی.",
      strategic: "مهندسی پرامپت لایه رابط بین قصد انسانی و هماهنگی ماشین است. طراحی ضعیف پرامپت منجر به رفتار هماهنگی ناسازگار، نقض ایمنی و سردرگمی اپراتور می‌شود.",
      keyPoints: [
        "تزریق زمینه سیستم شامل وضعیت ناوگان، سیاست‌های فعال و محدودیت‌های ایمنی است",
        "اجرای طرح خروجی پاسخ‌ها را به دستورالعمل‌های هماهنگی JSON ساختاریافته محدود می‌کند",
        "هماهنگی زنجیره تفکر استدلال گام‌به‌گام را برای مسیرهای حسابرسی ثبت می‌کند",
        "حفاظ‌های ایمنی تعبیه‌شده در هر پرامپت از نقض مرزهای ایمنی جلوگیری می‌کند"
      ],
      tags: ["مهندسی پرامپت", "هماهنگی ناوگان", "دستورالعمل‌های ساختاریافته", "حفاظ‌های ایمنی", "رابط LLM"]
    }
  },
  {
    id: 97,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(97),
    en: {
      title: "Streaming Response Integration — Real-Time LLM Coordination Feedback",
      narrative: "TWIN's streaming response integration enables real-time LLM coordination feedback without blocking the coordination pipeline. Implementation: (1) async streaming — LLM responses stream token-by-token, enabling partial response processing before completion; (2) progressive directive execution — coordination directives extracted from partial responses are executed immediately, reducing latency; (3) response validation pipeline — each streamed chunk is validated against the coordination schema before execution; (4) fallback coordination — if streaming is interrupted, the coordination system falls back to the last valid directive state; (5) operator streaming UI — fleet operators see LLM reasoning in real-time through the Streamdown rendering component, enabling oversight of AI coordination decisions.",
      strategic: "Streaming integration is critical for coordination responsiveness. A fleet coordination decision that arrives 3 seconds after the triggering event is often too late. Streaming enables TWIN to begin executing coordination directives while the LLM is still reasoning, reducing effective coordination latency from seconds to milliseconds.",
      keyPoints: [
        "Async streaming enables partial response processing before LLM completion",
        "Progressive directive execution reduces coordination latency from seconds to milliseconds",
        "Response validation pipeline validates each streamed chunk before execution",
        "Operator streaming UI enables real-time oversight of AI coordination reasoning"
      ],
      tags: ["Streaming Response", "Real-Time Coordination", "Async Integration", "Progressive Execution", "Latency Reduction"]
    },
    fa: {
      title: "یکپارچه‌سازی پاسخ جریانی — بازخورد هماهنگی LLM در زمان واقعی",
      narrative: "یکپارچه‌سازی پاسخ جریانی TWIN بازخورد هماهنگی LLM در زمان واقعی را بدون مسدود کردن خط لوله هماهنگی فعال می‌کند. پیاده‌سازی: (۱) جریان‌سازی ناهمزمان؛ (۲) اجرای دستورالعمل تدریجی؛ (۳) خط لوله اعتبارسنجی پاسخ؛ (۴) هماهنگی پشتیبان؛ (۵) رابط کاربری جریانی اپراتور.",
      strategic: "یکپارچه‌سازی جریانی برای پاسخگویی هماهنگی حیاتی است. تصمیم هماهنگی ناوگانی که ۳ ثانیه پس از رویداد محرک می‌رسد اغلب خیلی دیر است. جریان‌سازی TWIN را قادر می‌سازد دستورالعمل‌های هماهنگی را در حالی که LLM هنوز در حال استدلال است اجرا کند.",
      keyPoints: [
        "جریان‌سازی ناهمزمان پردازش پاسخ جزئی را قبل از تکمیل LLM فعال می‌کند",
        "اجرای دستورالعمل تدریجی تأخیر هماهنگی را از ثانیه‌ها به میلی‌ثانیه‌ها کاهش می‌دهد",
        "خط لوله اعتبارسنجی پاسخ هر تکه جریانی را قبل از اجرا اعتبارسنجی می‌کند",
        "رابط کاربری جریانی اپراتور نظارت در زمان واقعی بر استدلال هماهنگی هوش مصنوعی را فعال می‌کند"
      ],
      tags: ["پاسخ جریانی", "هماهنگی زمان واقعی", "یکپارچه‌سازی ناهمزمان", "اجرای تدریجی", "کاهش تأخیر"]
    }
  },
  {
    id: 98,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(98),
    en: {
      title: "Structured JSON Output — LLM-to-Coordination Protocol Bridge",
      narrative: "TWIN's structured JSON output protocol bridges the gap between LLM natural language reasoning and machine-executable coordination directives. Protocol design: (1) coordination directive schema — a strict JSON schema defines all valid coordination actions, parameters, and constraints; (2) schema validation — every LLM output is validated against the schema before execution, rejecting malformed directives; (3) directive versioning — coordination schemas are versioned to enable safe protocol evolution without breaking existing deployments; (4) partial directive handling — incomplete JSON responses are handled gracefully with conservative fallback behavior; (5) audit logging — all LLM-generated directives are logged with their source prompt, reasoning trace, and execution outcome for regulatory compliance.",
      strategic: "The structured output protocol is the safety layer between LLM intelligence and physical coordination. Without strict schema enforcement, LLM hallucinations could generate coordination directives that are syntactically plausible but operationally dangerous. Schema validation is the last line of defense before a coordination directive reaches the physical fleet.",
      keyPoints: [
        "Strict JSON schema defines all valid coordination actions, parameters, and constraints",
        "Schema validation rejects malformed LLM directives before execution",
        "Directive versioning enables safe protocol evolution without breaking deployments",
        "Audit logging captures source prompt, reasoning trace, and execution outcome"
      ],
      tags: ["Structured JSON Output", "Coordination Protocol", "Schema Validation", "Directive Versioning", "Audit Logging"]
    },
    fa: {
      title: "خروجی JSON ساختاریافته — پل پروتکل LLM به هماهنگی",
      narrative: "پروتکل خروجی JSON ساختاریافته TWIN شکاف بین استدلال زبان طبیعی LLM و دستورالعمل‌های هماهنگی قابل اجرای ماشین را پر می‌کند. طراحی پروتکل: (۱) طرح دستورالعمل هماهنگی؛ (۲) اعتبارسنجی طرح؛ (۳) نسخه‌بندی دستورالعمل؛ (۴) مدیریت دستورالعمل جزئی؛ (۵) ثبت حسابرسی.",
      strategic: "پروتکل خروجی ساختاریافته لایه ایمنی بین هوش LLM و هماهنگی فیزیکی است. بدون اجرای طرح دقیق، توهمات LLM می‌توانند دستورالعمل‌های هماهنگی تولید کنند که از نظر نحوی معقول اما از نظر عملیاتی خطرناک هستند.",
      keyPoints: [
        "طرح JSON دقیق تمام اقدامات هماهنگی معتبر، پارامترها و محدودیت‌ها را تعریف می‌کند",
        "اعتبارسنجی طرح دستورالعمل‌های LLM بدشکل را قبل از اجرا رد می‌کند",
        "نسخه‌بندی دستورالعمل تکامل امن پروتکل را بدون شکستن استقرارهای موجود فعال می‌کند",
        "ثبت حسابرسی پرامپت منبع، ردپای استدلال و نتیجه اجرا را ضبط می‌کند"
      ],
      tags: ["خروجی JSON ساختاریافته", "پروتکل هماهنگی", "اعتبارسنجی طرح", "نسخه‌بندی دستورالعمل", "ثبت حسابرسی"]
    }
  },
  {
    id: 99,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(99),
    en: {
      title: "Anomaly Interpretation Engine — LLM-Powered Pattern Recognition",
      narrative: "TWIN's anomaly interpretation engine uses Claude to interpret coordination anomalies that fall outside predefined detection rules. Engine architecture: (1) anomaly capture — the deterministic monitoring layer flags unusual patterns and forwards them to the LLM interpretation pipeline; (2) context assembly — relevant historical data, fleet state, and environmental context are assembled into a structured interpretation prompt; (3) root cause analysis — Claude performs multi-hypothesis root cause analysis, ranking candidate explanations by probability; (4) remediation recommendation — Claude recommends specific coordination adjustments to address the identified anomaly; (5) learning loop — confirmed anomaly interpretations are added to the few-shot example library, improving future interpretation accuracy.",
      strategic: "The anomaly interpretation engine represents the most sophisticated application of LLM intelligence in TWIN. Deterministic rules can detect known anomaly patterns, but novel failure modes — the ones most likely to cause serious incidents — fall outside predefined rules by definition. Claude's broad reasoning capability is uniquely suited to interpreting these novel patterns.",
      keyPoints: [
        "Deterministic monitoring flags unusual patterns for LLM interpretation pipeline",
        "Context assembly structures historical data and fleet state into interpretation prompts",
        "Multi-hypothesis root cause analysis ranks candidate explanations by probability",
        "Learning loop adds confirmed interpretations to few-shot library for continuous improvement"
      ],
      tags: ["Anomaly Interpretation", "LLM Pattern Recognition", "Root Cause Analysis", "Remediation Recommendation", "Learning Loop"]
    },
    fa: {
      title: "موتور تفسیر ناهنجاری — تشخیص الگو با قدرت LLM",
      narrative: "موتور تفسیر ناهنجاری TWIN از Claude برای تفسیر ناهنجاری‌های هماهنگی که خارج از قوانین تشخیص از پیش تعریف‌شده هستند استفاده می‌کند. معماری موتور: (۱) ضبط ناهنجاری؛ (۲) مونتاژ زمینه؛ (۳) تحلیل علت ریشه‌ای؛ (۴) توصیه اصلاح؛ (۵) حلقه یادگیری.",
      strategic: "موتور تفسیر ناهنجاری پیچیده‌ترین کاربرد هوش LLM در TWIN را نشان می‌دهد. قوانین قطعی می‌توانند الگوهای ناهنجاری شناخته‌شده را تشخیص دهند، اما حالت‌های خرابی جدید — آن‌هایی که بیشترین احتمال ایجاد حوادث جدی را دارند — به تعریف خارج از قوانین از پیش تعریف‌شده هستند.",
      keyPoints: [
        "نظارت قطعی الگوهای غیرمعمول را برای خط لوله تفسیر LLM علامت‌گذاری می‌کند",
        "مونتاژ زمینه داده‌های تاریخی و وضعیت ناوگان را در پرامپت‌های تفسیر ساختار می‌دهد",
        "تحلیل علت ریشه‌ای چند-فرضیه‌ای توضیحات کاندیدا را بر اساس احتمال رتبه‌بندی می‌کند",
        "حلقه یادگیری تفسیرهای تأیید‌شده را به کتابخانه چند-شات برای بهبود مستمر اضافه می‌کند"
      ],
      tags: ["تفسیر ناهنجاری", "تشخیص الگو LLM", "تحلیل علت ریشه‌ای", "توصیه اصلاح", "حلقه یادگیری"]
    }
  },
  {
    id: 100,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(100),
    en: {
      title: "Policy Generation Engine — Dynamic Coordination Rule Creation",
      narrative: "TWIN's policy generation engine uses Claude to create new coordination policies in response to novel operational scenarios. Engine workflow: (1) scenario detection — the coordination monitor identifies situations where existing policies produce suboptimal outcomes; (2) policy gap analysis — Claude analyzes the gap between current policy coverage and the novel scenario requirements; (3) policy draft generation — Claude generates a candidate policy in TWIN's policy specification language; (4) simulation validation — the candidate policy is tested in the coordination simulator before deployment; (5) staged rollout — validated policies are deployed to a subset of the fleet for real-world validation before full deployment.",
      strategic: "Policy generation represents the self-improving dimension of TWIN's coordination intelligence. Static rule systems require human engineers to anticipate every operational scenario — an impossible task for a complex, dynamic fleet environment. Claude's policy generation capability enables TWIN to adapt its coordination behavior to novel scenarios without requiring human engineering intervention for every edge case.",
      keyPoints: [
        "Scenario detection identifies situations where existing policies produce suboptimal outcomes",
        "Policy gap analysis identifies the delta between current coverage and novel scenario requirements",
        "Simulation validation tests candidate policies before real-world deployment",
        "Staged rollout validates policies on fleet subset before full deployment"
      ],
      tags: ["Policy Generation", "Dynamic Rule Creation", "Scenario Detection", "Simulation Validation", "Staged Rollout"]
    },
    fa: {
      title: "موتور تولید سیاست — ایجاد پویای قانون هماهنگی",
      narrative: "موتور تولید سیاست TWIN از Claude برای ایجاد سیاست‌های هماهنگی جدید در پاسخ به سناریوهای عملیاتی جدید استفاده می‌کند. گردش کار موتور: (۱) تشخیص سناریو؛ (۲) تحلیل شکاف سیاست؛ (۳) تولید پیش‌نویس سیاست؛ (۴) اعتبارسنجی شبیه‌سازی؛ (۵) استقرار مرحله‌ای.",
      strategic: "تولید سیاست بُعد خودبهبودی هوش هماهنگی TWIN را نشان می‌دهد. سیستم‌های قانون ایستا نیازمند مهندسان انسانی هستند که هر سناریوی عملیاتی را پیش‌بینی کنند — کاری غیرممکن برای محیط ناوگان پیچیده و پویا.",
      keyPoints: [
        "تشخیص سناریو موقعیت‌هایی را که سیاست‌های موجود نتایج بهینه‌نشده تولید می‌کنند شناسایی می‌کند",
        "تحلیل شکاف سیاست دلتا بین پوشش فعلی و الزامات سناریوی جدید را شناسایی می‌کند",
        "اعتبارسنجی شبیه‌سازی سیاست‌های کاندیدا را قبل از استقرار دنیای واقعی آزمایش می‌کند",
        "استقرار مرحله‌ای سیاست‌ها را روی زیرمجموعه ناوگان قبل از استقرار کامل اعتبارسنجی می‌کند"
      ],
      tags: ["تولید سیاست", "ایجاد قانون پویا", "تشخیص سناریو", "اعتبارسنجی شبیه‌سازی", "استقرار مرحله‌ای"]
    }
  },
  {
    id: 101,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(101),
    en: {
      title: "Explainability Framework — Human-Readable Coordination Decisions",
      narrative: "TWIN's explainability framework generates human-readable explanations for coordination decisions, enabling operator oversight and regulatory compliance. Framework components: (1) decision explanation generation — Claude generates natural language explanations for every significant coordination decision; (2) explanation layering — explanations are available at multiple levels of detail, from one-sentence summaries to full reasoning traces; (3) counterfactual explanations — for contested decisions, Claude generates counterfactual analysis showing what would have happened under alternative coordination choices; (4) regulatory reporting — explanation logs are formatted for regulatory submission, meeting emerging autonomous vehicle oversight requirements; (5) operator dashboard integration — explanations are surfaced in the fleet management UI with contextual visualization.",
      strategic: "Explainability is not optional for autonomous fleet coordination — it is a regulatory and operational necessity. Fleet operators need to understand why coordination decisions were made to maintain situational awareness and intervene when necessary. Regulators require auditable decision trails for incident investigation. Claude's natural language capability makes TWIN's coordination intelligence transparent and accountable.",
      keyPoints: [
        "Decision explanation generation produces natural language explanations for significant coordination decisions",
        "Explanation layering provides detail from one-sentence summaries to full reasoning traces",
        "Counterfactual analysis shows alternative outcomes for contested decisions",
        "Regulatory reporting formats explanation logs for autonomous vehicle oversight compliance"
      ],
      tags: ["Explainability Framework", "Human-Readable Decisions", "Counterfactual Analysis", "Regulatory Reporting", "Operator Dashboard"]
    },
    fa: {
      title: "چارچوب توضیح‌پذیری — تصمیمات هماهنگی قابل فهم برای انسان",
      narrative: "چارچوب توضیح‌پذیری TWIN توضیحات قابل فهم برای انسان برای تصمیمات هماهنگی تولید می‌کند و نظارت اپراتور و انطباق نظارتی را فعال می‌کند. اجزای چارچوب: (۱) تولید توضیح تصمیم؛ (۲) لایه‌بندی توضیح؛ (۳) توضیحات خلاف واقع؛ (۴) گزارش‌دهی نظارتی؛ (۵) یکپارچه‌سازی داشبورد اپراتور.",
      strategic: "توضیح‌پذیری برای هماهنگی ناوگان خودگردان اختیاری نیست — ضرورت نظارتی و عملیاتی است. اپراتورهای ناوگان باید بفهمند چرا تصمیمات هماهنگی گرفته شده تا آگاهی موقعیتی را حفظ کنند و در صورت لزوم مداخله کنند.",
      keyPoints: [
        "تولید توضیح تصمیم توضیحات زبان طبیعی برای تصمیمات هماهنگی مهم تولید می‌کند",
        "لایه‌بندی توضیح جزئیات را از خلاصه‌های یک جمله‌ای تا ردپای استدلال کامل فراهم می‌کند",
        "تحلیل خلاف واقع نتایج جایگزین برای تصمیمات مورد اعتراض را نشان می‌دهد",
        "گزارش‌دهی نظارتی گزارش‌های توضیح را برای انطباق با نظارت بر خودروهای خودگردان قالب‌بندی می‌کند"
      ],
      tags: ["چارچوب توضیح‌پذیری", "تصمیمات قابل فهم برای انسان", "تحلیل خلاف واقع", "گزارش‌دهی نظارتی", "داشبورد اپراتور"]
    }
  },
  {
    id: 102,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(102),
    en: {
      title: "Multi-Modal Coordination Input — Vision and Sensor Data Integration",
      narrative: "TWIN's multi-modal coordination input extends LLM reasoning beyond text to include vision and sensor data. Integration architecture: (1) camera feed analysis — Claude Vision processes camera feeds from vehicle exteriors and charging stations to identify coordination-relevant visual information; (2) sensor data narration — numerical sensor streams are converted to natural language descriptions that Claude can reason about in coordination context; (3) map and spatial reasoning — geographic and spatial data is rendered as structured descriptions for route optimization and station allocation; (4) document processing — maintenance manuals, regulatory documents, and operational procedures are indexed for retrieval-augmented coordination decisions; (5) cross-modal correlation — Claude correlates visual, sensor, and textual information to form holistic coordination assessments.",
      strategic: "Multi-modal input transforms TWIN from a text-based coordination system to a full-spectrum intelligence platform. Many coordination-relevant signals are inherently visual — a damaged charging connector, an obstructed parking space, an unusual vehicle behavior pattern. Claude Vision enables TWIN to incorporate these visual signals into coordination decisions without requiring manual annotation.",
      keyPoints: [
        "Claude Vision processes camera feeds to identify coordination-relevant visual information",
        "Sensor data narration converts numerical streams to natural language for LLM reasoning",
        "Geographic and spatial data enables route optimization and station allocation reasoning",
        "Cross-modal correlation forms holistic coordination assessments from visual, sensor, and text data"
      ],
      tags: ["Multi-Modal Input", "Vision Integration", "Sensor Narration", "Spatial Reasoning", "Cross-Modal Correlation"]
    },
    fa: {
      title: "ورودی هماهنگی چندوجهی — یکپارچه‌سازی داده بینایی و حسگر",
      narrative: "ورودی هماهنگی چندوجهی TWIN استدلال LLM را فراتر از متن به داده بینایی و حسگر گسترش می‌دهد. معماری یکپارچه‌سازی: (۱) تحلیل فید دوربین؛ (۲) روایت داده حسگر؛ (۳) استدلال نقشه و فضایی؛ (۴) پردازش سند؛ (۵) همبستگی بین‌وجهی.",
      strategic: "ورودی چندوجهی TWIN را از یک سیستم هماهنگی مبتنی بر متن به یک پلتفرم هوش طیف کامل تبدیل می‌کند. بسیاری از سیگنال‌های مرتبط با هماهنگی ذاتاً بصری هستند — یک اتصال‌دهنده شارژ آسیب‌دیده، یک فضای پارکینگ مسدود شده، یک الگوی رفتار غیرمعمول خودرو.",
      keyPoints: [
        "Claude Vision فیدهای دوربین را برای شناسایی اطلاعات بصری مرتبط با هماهنگی پردازش می‌کند",
        "روایت داده حسگر جریان‌های عددی را به زبان طبیعی برای استدلال LLM تبدیل می‌کند",
        "داده جغرافیایی و فضایی بهینه‌سازی مسیر و استدلال تخصیص ایستگاه را فعال می‌کند",
        "همبستگی بین‌وجهی ارزیابی‌های هماهنگی جامع از داده بصری، حسگر و متن تشکیل می‌دهد"
      ],
      tags: ["ورودی چندوجهی", "یکپارچه‌سازی بینایی", "روایت حسگر", "استدلال فضایی", "همبستگی بین‌وجهی"]
    }
  },
  {
    id: 103,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(103),
    en: {
      title: "LLM Safety Boundaries — Preventing Coordination Hallucinations",
      narrative: "TWIN's LLM safety boundary system prevents coordination hallucinations from reaching the physical fleet. Safety architecture: (1) hard constraint enforcement — a deterministic safety layer intercepts all LLM-generated directives and rejects any that violate hard safety constraints, regardless of LLM confidence; (2) plausibility checking — directives are checked against current fleet state to identify physically impossible or operationally implausible actions; (3) rate limiting — the frequency of LLM-generated directive changes is bounded to prevent rapid oscillation that could destabilize coordination; (4) human-in-the-loop escalation — directives above a risk threshold are escalated to human operators for approval before execution; (5) shadow mode testing — new LLM configurations are tested in shadow mode against live fleet data before activation.",
      strategic: "LLM safety boundaries are the most critical component of TWIN's LLM integration. Language models can generate plausible-sounding but physically dangerous coordination directives — a hallucinated charging schedule that overloads grid capacity, a routing directive that sends vehicles through restricted zones. The safety boundary system ensures that LLM intelligence enhances coordination without introducing new failure modes.",
      keyPoints: [
        "Hard constraint enforcement rejects LLM directives violating safety constraints regardless of confidence",
        "Plausibility checking identifies physically impossible or operationally implausible actions",
        "Human-in-the-loop escalation requires operator approval for high-risk directives",
        "Shadow mode testing validates new LLM configurations against live data before activation"
      ],
      tags: ["LLM Safety Boundaries", "Hallucination Prevention", "Hard Constraints", "Human-in-the-Loop", "Shadow Mode Testing"]
    },
    fa: {
      title: "مرزهای ایمنی LLM — جلوگیری از توهمات هماهنگی",
      narrative: "سیستم مرز ایمنی LLM TWIN از رسیدن توهمات هماهنگی به ناوگان فیزیکی جلوگیری می‌کند. معماری ایمنی: (۱) اجرای محدودیت سخت؛ (۲) بررسی معقولیت؛ (۳) محدودیت نرخ؛ (۴) تشدید انسان در حلقه؛ (۵) آزمایش حالت سایه.",
      strategic: "مرزهای ایمنی LLM حیاتی‌ترین جزء یکپارچه‌سازی LLM TWIN هستند. مدل‌های زبانی می‌توانند دستورالعمل‌های هماهنگی معقول‌به‌نظر اما از نظر فیزیکی خطرناک تولید کنند — یک برنامه شارژ توهمی که ظرفیت شبکه را بیش از حد بارگذاری می‌کند.",
      keyPoints: [
        "اجرای محدودیت سخت دستورالعمل‌های LLM را که محدودیت‌های ایمنی را نقض می‌کنند صرف نظر از اطمینان رد می‌کند",
        "بررسی معقولیت اقدامات از نظر فیزیکی غیرممکن یا از نظر عملیاتی نامعقول را شناسایی می‌کند",
        "تشدید انسان در حلقه تأیید اپراتور را برای دستورالعمل‌های پرخطر قبل از اجرا نیاز دارد",
        "آزمایش حالت سایه پیکربندی‌های جدید LLM را در برابر داده زنده قبل از فعال‌سازی اعتبارسنجی می‌کند"
      ],
      tags: ["مرزهای ایمنی LLM", "جلوگیری از توهم", "محدودیت‌های سخت", "انسان در حلقه", "آزمایش حالت سایه"]
    }
  },
  {
    id: 104,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(104),
    en: {
      title: "Operator Interface Design — Natural Language Fleet Management",
      narrative: "TWIN's operator interface transforms fleet management from dashboard-driven to conversation-driven. Interface design principles: (1) intent-based commands — operators express coordination intent in natural language ('prioritize charging for vehicles below 20% battery') rather than configuring individual parameters; (2) contextual awareness — the interface maintains conversation context across operator sessions, enabling multi-turn coordination dialogues; (3) proactive briefings — Claude generates proactive fleet status briefings, surfacing coordination issues before they escalate; (4) what-if analysis — operators can explore coordination scenarios through natural language queries ('what happens if charging station 3 goes offline?'); (5) escalation management — the interface manages the escalation queue, presenting high-priority coordination decisions with relevant context for rapid operator decision-making.",
      strategic: "The operator interface is where TWIN's coordination intelligence becomes accessible to human operators. The shift from dashboard configuration to natural language conversation reduces the cognitive load of fleet management, enabling operators to focus on strategic decisions rather than parameter tuning. This is the human-machine interface that makes autonomous fleet coordination practical at scale.",
      keyPoints: [
        "Intent-based commands let operators express coordination goals in natural language",
        "Contextual awareness maintains conversation context for multi-turn coordination dialogues",
        "Proactive briefings surface coordination issues before they escalate",
        "What-if analysis enables natural language exploration of coordination scenarios"
      ],
      tags: ["Operator Interface", "Natural Language Management", "Intent-Based Commands", "Proactive Briefings", "What-If Analysis"]
    },
    fa: {
      title: "طراحی رابط اپراتور — مدیریت ناوگان با زبان طبیعی",
      narrative: "رابط اپراتور TWIN مدیریت ناوگان را از داشبورد-محور به مکالمه-محور تبدیل می‌کند. اصول طراحی رابط: (۱) دستورات مبتنی بر قصد؛ (۲) آگاهی زمینه‌ای؛ (۳) خلاصه‌های پیشگیرانه؛ (۴) تحلیل فرضی؛ (۵) مدیریت تشدید.",
      strategic: "رابط اپراتور جایی است که هوش هماهنگی TWIN برای اپراتورهای انسانی قابل دسترس می‌شود. تغییر از پیکربندی داشبورد به مکالمه زبان طبیعی بار شناختی مدیریت ناوگان را کاهش می‌دهد و اپراتورها را قادر می‌سازد بر تصمیمات استراتژیک تمرکز کنند.",
      keyPoints: [
        "دستورات مبتنی بر قصد به اپراتورها اجازه می‌دهد اهداف هماهنگی را به زبان طبیعی بیان کنند",
        "آگاهی زمینه‌ای زمینه مکالمه را برای گفتگوهای هماهنگی چند-نوبتی حفظ می‌کند",
        "خلاصه‌های پیشگیرانه مسائل هماهنگی را قبل از تشدید آن‌ها مطرح می‌کند",
        "تحلیل فرضی کاوش زبان طبیعی سناریوهای هماهنگی را فعال می‌کند"
      ],
      tags: ["رابط اپراتور", "مدیریت زبان طبیعی", "دستورات مبتنی بر قصد", "خلاصه‌های پیشگیرانه", "تحلیل فرضی"]
    }
  },
  {
    id: 105,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(105),
    en: {
      title: "Continuous Learning Architecture — TWIN's Self-Improving Coordination",
      narrative: "TWIN's continuous learning architecture enables the coordination system to improve its performance through operational experience. Learning pipeline: (1) outcome tracking — every coordination decision is tracked against its actual outcome, building a labeled dataset of coordination experiences; (2) performance analysis — Claude periodically analyzes coordination performance patterns, identifying systematic biases and improvement opportunities; (3) prompt refinement — prompt templates are iteratively refined based on performance analysis, improving LLM coordination quality; (4) policy library expansion — successful novel coordination strategies are codified into the policy library for future reuse; (5) benchmark maintenance — coordination performance benchmarks are maintained and updated to track system improvement over time.",
      strategic: "Continuous learning is what transforms TWIN from a static coordination system to a living intelligence platform. Every fleet operation generates data that can improve future coordination. The learning architecture ensures that TWIN's coordination intelligence compounds over time — each operational experience makes the system slightly better at handling similar situations in the future.",
      keyPoints: [
        "Outcome tracking builds labeled dataset of coordination decisions and their actual results",
        "Performance analysis identifies systematic biases and improvement opportunities",
        "Prompt refinement iteratively improves LLM coordination quality based on outcomes",
        "Policy library expansion codifies successful novel strategies for future reuse"
      ],
      tags: ["Continuous Learning", "Self-Improving Coordination", "Outcome Tracking", "Performance Analysis", "Policy Library"]
    },
    fa: {
      title: "معماری یادگیری مستمر — هماهنگی خودبهبودی TWIN",
      narrative: "معماری یادگیری مستمر TWIN سیستم هماهنگی را قادر می‌سازد عملکرد خود را از طریق تجربه عملیاتی بهبود بخشد. خط لوله یادگیری: (۱) ردیابی نتیجه؛ (۲) تحلیل عملکرد؛ (۳) پالایش پرامپت؛ (۴) گسترش کتابخانه سیاست؛ (۵) نگهداری معیار.",
      strategic: "یادگیری مستمر چیزی است که TWIN را از یک سیستم هماهنگی ایستا به یک پلتفرم هوش زنده تبدیل می‌کند. هر عملیات ناوگان داده‌ای تولید می‌کند که می‌تواند هماهنگی آینده را بهبود بخشد.",
      keyPoints: [
        "ردیابی نتیجه مجموعه داده برچسب‌گذاری‌شده تصمیمات هماهنگی و نتایج واقعی آن‌ها را می‌سازد",
        "تحلیل عملکرد تعصبات سیستماتیک و فرصت‌های بهبود را شناسایی می‌کند",
        "پالایش پرامپت کیفیت هماهنگی LLM را بر اساس نتایج به‌صورت تکراری بهبود می‌بخشد",
        "گسترش کتابخانه سیاست استراتژی‌های جدید موفق را برای استفاده مجدد در آینده تدوین می‌کند"
      ],
      tags: ["یادگیری مستمر", "هماهنگی خودبهبودی", "ردیابی نتیجه", "تحلیل عملکرد", "کتابخانه سیاست"]
    }
  },
  {
    id: 106,
    act: "LLMIntegration",
    actLabel: ACT_LABELS_D.LLMIntegration,
    imageUrl: imgD(106),
    en: {
      title: "LLM Integration Performance Metrics — Measuring Coordination Intelligence",
      narrative: "TWIN's LLM integration performance metrics quantify the contribution of AI coordination intelligence to fleet operations. Key metrics: (1) coordination quality score — composite metric measuring decision optimality, safety compliance, and operator satisfaction; (2) LLM response latency — P50/P95/P99 latency for LLM coordination decisions, target P95 < 2 seconds; (3) hallucination rate — frequency of LLM directives rejected by safety validation, target < 0.01%; (4) policy generation success rate — percentage of LLM-generated policies that pass simulation validation, target > 85%; (5) operator override rate — frequency of operator overrides of LLM coordination decisions, target < 5%; (6) learning improvement rate — month-over-month improvement in coordination quality score, target > 2%/month.",
      strategic: "Performance metrics are the accountability layer for TWIN's LLM integration. Without rigorous measurement, it is impossible to distinguish genuine coordination improvement from placebo effects or to identify when LLM integration is degrading rather than improving coordination quality. These metrics provide the empirical foundation for continuous improvement and regulatory demonstration.",
      keyPoints: [
        "Coordination quality score measures decision optimality, safety compliance, and operator satisfaction",
        "LLM response latency targets P95 < 2 seconds for coordination decisions",
        "Hallucination rate target < 0.01% for LLM directives rejected by safety validation",
        "Learning improvement rate targets > 2% monthly improvement in coordination quality"
      ],
      tags: ["Performance Metrics", "Coordination Intelligence", "Hallucination Rate", "Response Latency", "Learning Rate"]
    },
    fa: {
      title: "معیارهای عملکرد یکپارچه‌سازی LLM — اندازه‌گیری هوش هماهنگی",
      narrative: "معیارهای عملکرد یکپارچه‌سازی LLM TWIN سهم هوش هماهنگی هوش مصنوعی در عملیات ناوگان را کمی می‌کند. معیارهای کلیدی: (۱) امتیاز کیفیت هماهنگی؛ (۲) تأخیر پاسخ LLM — هدف P95 < ۲ ثانیه؛ (۳) نرخ توهم — هدف < ۰.۰۱٪؛ (۴) نرخ موفقیت تولید سیاست — هدف > ۸۵٪؛ (۵) نرخ لغو اپراتور — هدف < ۵٪؛ (۶) نرخ بهبود یادگیری — هدف > ۲٪/ماه.",
      strategic: "معیارهای عملکرد لایه پاسخگویی برای یکپارچه‌سازی LLM TWIN هستند. بدون اندازه‌گیری دقیق، تمایز بین بهبود واقعی هماهنگی از اثرات دارونما یا شناسایی زمانی که یکپارچه‌سازی LLM کیفیت هماهنگی را کاهش می‌دهد غیرممکن است.",
      keyPoints: [
        "امتیاز کیفیت هماهنگی بهینگی تصمیم، انطباق ایمنی و رضایت اپراتور را اندازه می‌گیرد",
        "هدف تأخیر پاسخ LLM P95 < ۲ ثانیه برای تصمیمات هماهنگی است",
        "هدف نرخ توهم < ۰.۰۱٪ برای دستورالعمل‌های LLM رد شده توسط اعتبارسنجی ایمنی است",
        "هدف نرخ بهبود یادگیری > ۲٪ بهبود ماهانه در کیفیت هماهنگی است"
      ],
      tags: ["معیارهای عملکرد", "هوش هماهنگی", "نرخ توهم", "تأخیر پاسخ", "نرخ یادگیری"]
    }
  },
  {
    id: 107,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(107),
    en: {
      title: "TWIN-EPU Integration Architecture — Software Intelligence Meets Silicon Physics",
      narrative: "The TWIN-EPU integration represents the convergence of multi-agent software intelligence with physical silicon hardware. Integration architecture: (1) EPU hardware abstraction layer — TWIN agents interact with EPU hardware through a standardized abstraction layer that exposes EPU capabilities as coordination primitives; (2) real-time telemetry bridge — EPU sensor data streams into TWIN's coordination context at 1kHz, enabling hardware-aware coordination decisions; (3) coordination-to-control translation — TWIN coordination directives are translated to EPU control signals through a deterministic translation layer; (4) hardware state synchronization — TWIN's world model maintains a synchronized representation of EPU hardware state across the fleet; (5) fault propagation protocol — EPU hardware faults are propagated to TWIN's coordination layer with structured fault descriptors that trigger appropriate coordination responses.",
      strategic: "The TWIN-EPU integration is the central thesis of this presentation: that autonomous vehicle intelligence emerges from the tight coupling of software coordination and hardware physics. Neither TWIN alone nor EPU alone can achieve the safety, efficiency, and reliability targets of commercial autonomous vehicle deployment. The integration is where the system becomes greater than the sum of its parts.",
      keyPoints: [
        "EPU hardware abstraction layer exposes hardware capabilities as coordination primitives",
        "Real-time telemetry bridge streams EPU sensor data at 1kHz for hardware-aware coordination",
        "Coordination-to-control translation converts TWIN directives to EPU control signals",
        "Fault propagation protocol triggers appropriate coordination responses to hardware faults"
      ],
      tags: ["TWIN-EPU Integration", "Software-Hardware Convergence", "Hardware Abstraction", "Telemetry Bridge", "Fault Propagation"]
    },
    fa: {
      title: "معماری یکپارچه‌سازی TWIN-EPU — هوش نرم‌افزاری با فیزیک سیلیکون",
      narrative: "یکپارچه‌سازی TWIN-EPU نمایانگر همگرایی هوش نرم‌افزاری چندعاملی با سخت‌افزار فیزیکی سیلیکون است. معماری یکپارچه‌سازی: (۱) لایه انتزاع سخت‌افزار EPU؛ (۲) پل تله‌متری زمان واقعی — ۱ کیلوهرتز؛ (۳) ترجمه هماهنگی به کنترل؛ (۴) همگام‌سازی وضعیت سخت‌افزار؛ (۵) پروتکل انتشار خرابی.",
      strategic: "یکپارچه‌سازی TWIN-EPU پایان‌نامه مرکزی این ارائه است: که هوش خودروی خودگردان از اتصال محکم هماهنگی نرم‌افزار و فیزیک سخت‌افزار پدید می‌آید. نه TWIN به‌تنهایی و نه EPU به‌تنهایی نمی‌توانند به اهداف ایمنی، کارایی و قابلیت اطمینان استقرار تجاری خودروهای خودگردان دست یابند.",
      keyPoints: [
        "لایه انتزاع سخت‌افزار EPU قابلیت‌های سخت‌افزاری را به‌عنوان اولیه‌های هماهنگی نمایش می‌دهد",
        "پل تله‌متری زمان واقعی داده حسگر EPU را با ۱ کیلوهرتز برای هماهنگی آگاه از سخت‌افزار جریان می‌دهد",
        "ترجمه هماهنگی به کنترل دستورالعمل‌های TWIN را به سیگنال‌های کنترل EPU تبدیل می‌کند",
        "پروتکل انتشار خرابی پاسخ‌های هماهنگی مناسب به خرابی‌های سخت‌افزاری را فعال می‌کند"
      ],
      tags: ["یکپارچه‌سازی TWIN-EPU", "همگرایی نرم‌افزار-سخت‌افزار", "انتزاع سخت‌افزار", "پل تله‌متری", "انتشار خرابی"]
    }
  },
  {
    id: 108,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(108),
    en: {
      title: "ISA PICAPD in Multi-Agent Context — Instruction Set for Coordinated Autonomy",
      narrative: "TWIN's multi-agent coordination operates on top of EPU's ISA PICAPD instruction set, creating a layered autonomy architecture. Integration points: (1) coordination primitives — TWIN's coordination layer maps high-level coordination directives to ISA PICAPD instruction sequences; (2) parallel execution coordination — TWIN coordinates the parallel execution of ISA PICAPD instructions across multiple EPU cores, optimizing throughput while maintaining coordination consistency; (3) instruction-level fault tolerance — TWIN's BFT consensus extends to instruction-level fault detection, identifying EPU cores producing divergent instruction outputs; (4) temporal coordination — TWIN's temporal state management synchronizes ISA PICAPD execution timing across the fleet, ensuring coordinated maneuver execution; (5) instruction telemetry — ISA PICAPD execution metrics stream to TWIN's coordination context, enabling instruction-aware coordination optimization.",
      strategic: "The ISA PICAPD integration is where TWIN's software intelligence reaches down to the hardware instruction level. This deep integration enables coordination decisions that are informed by the actual computational state of each vehicle's EPU — not just high-level sensor readings, but the precise instruction-level execution state that determines vehicle behavior at the microsecond timescale.",
      keyPoints: [
        "Coordination primitives map high-level directives to ISA PICAPD instruction sequences",
        "Parallel execution coordination optimizes multi-core throughput while maintaining consistency",
        "Instruction-level fault tolerance extends BFT consensus to EPU core divergence detection",
        "Instruction telemetry enables instruction-aware coordination optimization"
      ],
      tags: ["ISA PICAPD Integration", "Multi-Agent Context", "Instruction Coordination", "Parallel Execution", "Instruction Telemetry"]
    },
    fa: {
      title: "ISA PICAPD در زمینه چندعاملی — مجموعه دستورالعمل برای خودگردانی هماهنگ",
      narrative: "هماهنگی چندعاملی TWIN بر روی مجموعه دستورالعمل ISA PICAPD پردازنده EPU عمل می‌کند و یک معماری خودگردانی لایه‌ای ایجاد می‌کند. نقاط یکپارچه‌سازی: (۱) اولیه‌های هماهنگی؛ (۲) هماهنگی اجرای موازی؛ (۳) تحمل خطای سطح دستورالعمل؛ (۴) هماهنگی زمانی؛ (۵) تله‌متری دستورالعمل.",
      strategic: "یکپارچه‌سازی ISA PICAPD جایی است که هوش نرم‌افزاری TWIN به سطح دستورالعمل سخت‌افزاری می‌رسد. این یکپارچه‌سازی عمیق تصمیمات هماهنگی را که از وضعیت محاسباتی واقعی هر EPU خودرو آگاه هستند فعال می‌کند.",
      keyPoints: [
        "اولیه‌های هماهنگی دستورالعمل‌های سطح بالا را به دنباله‌های دستورالعمل ISA PICAPD نگاشت می‌کنند",
        "هماهنگی اجرای موازی توان عملیاتی چندهسته‌ای را در حالی که سازگاری را حفظ می‌کند بهینه می‌کند",
        "تحمل خطای سطح دستورالعمل اجماع BFT را به تشخیص واگرایی هسته EPU گسترش می‌دهد",
        "تله‌متری دستورالعمل بهینه‌سازی هماهنگی آگاه از دستورالعمل را فعال می‌کند"
      ],
      tags: ["یکپارچه‌سازی ISA PICAPD", "زمینه چندعاملی", "هماهنگی دستورالعمل", "اجرای موازی", "تله‌متری دستورالعمل"]
    }
  },
  {
    id: 109,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(109),
    en: {
      title: "Queen Bee BFT in TWIN Fleet — Distributed Consensus at Scale",
      narrative: "TWIN's Queen Bee BFT protocol extends EPU's single-vehicle fault tolerance to fleet-scale distributed consensus. Fleet BFT architecture: (1) hierarchical consensus — a two-tier consensus architecture with vehicle-level BFT (Queen Bee within each EPU) and fleet-level BFT (TWIN across vehicles); (2) cross-vehicle Byzantine detection — TWIN's trust framework identifies vehicles exhibiting Byzantine behavior at the fleet level, triggering isolation and remediation; (3) consensus state synchronization — fleet-level consensus state is synchronized across TWIN agents using the same WAL-based durability guarantees as vehicle-level BFT; (4) partition tolerance — the fleet BFT protocol maintains safety guarantees during network partitions, ensuring vehicles operate safely in isolation; (5) consensus performance at scale — the hierarchical architecture maintains consensus latency below 50ms even at 10,000-vehicle fleet scale.",
      strategic: "The Queen Bee BFT extension to fleet scale is the architectural innovation that makes TWIN's safety guarantees meaningful. Vehicle-level BFT protects against hardware faults within a single vehicle, but fleet-level coordination introduces new Byzantine failure modes — vehicles that report false sensor data, execute incorrect maneuvers, or fail to respond to coordination directives. Fleet BFT addresses these fleet-level Byzantine threats.",
      keyPoints: [
        "Hierarchical consensus combines vehicle-level Queen Bee BFT with fleet-level TWIN BFT",
        "Cross-vehicle Byzantine detection identifies and isolates vehicles exhibiting Byzantine behavior",
        "WAL-based durability guarantees extend to fleet-level consensus state synchronization",
        "Consensus latency maintained below 50ms at 10,000-vehicle fleet scale"
      ],
      tags: ["Queen Bee BFT Fleet", "Distributed Consensus", "Hierarchical BFT", "Byzantine Detection", "Partition Tolerance"]
    },
    fa: {
      title: "Queen Bee BFT در ناوگان TWIN — اجماع توزیع‌شده در مقیاس",
      narrative: "پروتکل Queen Bee BFT TWIN تحمل خطای تک‌خودرویی EPU را به اجماع توزیع‌شده در مقیاس ناوگان گسترش می‌دهد. معماری BFT ناوگان: (۱) اجماع سلسله‌مراتبی؛ (۲) تشخیص بیزانسی بین‌خودرویی؛ (۳) همگام‌سازی وضعیت اجماع؛ (۴) تحمل پارتیشن؛ (۵) عملکرد اجماع در مقیاس — زیر ۵۰ میلی‌ثانیه در ۱۰,۰۰۰ خودرو.",
      strategic: "گسترش Queen Bee BFT به مقیاس ناوگان نوآوری معماری است که تضمین‌های ایمنی TWIN را معنادار می‌کند. BFT سطح خودرو در برابر خرابی‌های سخت‌افزاری در یک خودرو محافظت می‌کند، اما هماهنگی ناوگان حالت‌های خرابی بیزانسی جدیدی معرفی می‌کند.",
      keyPoints: [
        "اجماع سلسله‌مراتبی Queen Bee BFT سطح خودرو را با TWIN BFT سطح ناوگان ترکیب می‌کند",
        "تشخیص بیزانسی بین‌خودرویی خودروهایی که رفتار بیزانسی نشان می‌دهند را شناسایی و ایزوله می‌کند",
        "تضمین‌های دوام مبتنی بر WAL به همگام‌سازی وضعیت اجماع سطح ناوگان گسترش می‌یابند",
        "تأخیر اجماع در مقیاس ناوگان ۱۰,۰۰۰ خودرویی زیر ۵۰ میلی‌ثانیه حفظ می‌شود"
      ],
      tags: ["Queen Bee BFT ناوگان", "اجماع توزیع‌شده", "BFT سلسله‌مراتبی", "تشخیص بیزانسی", "تحمل پارتیشن"]
    }
  },
  {
    id: 110,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(110),
    en: {
      title: "Physical Layer Coordination — Sensor Fusion Across the Fleet",
      narrative: "TWIN's physical layer coordination extends EPU's onboard sensor fusion to fleet-scale collective perception. Fleet sensor fusion architecture: (1) distributed perception — each vehicle's EPU sensor array contributes to a shared fleet perception model, extending individual vehicle perception range and reliability; (2) occlusion resolution — vehicles with complementary viewing angles share sensor data to resolve occlusions that would be invisible to individual vehicles; (3) sensor calibration coordination — TWIN coordinates cross-vehicle sensor calibration, using fleet-wide consistency checks to detect and correct sensor drift; (4) perception confidence aggregation — individual vehicle perception confidence scores are aggregated across the fleet to produce high-confidence collective perception; (5) environmental mapping — fleet sensor data is aggregated into a continuously updated environmental map that improves routing and hazard avoidance.",
      strategic: "Fleet-scale sensor fusion is one of the most compelling advantages of coordinated autonomous vehicle deployment. A single vehicle's sensor array has fundamental physical limitations — range, occlusion, weather degradation. Fleet coordination transforms these individual limitations into collective strengths: what one vehicle cannot see, another can; what one sensor misses, the fleet aggregate catches.",
      keyPoints: [
        "Distributed perception extends individual vehicle range through shared fleet perception model",
        "Occlusion resolution shares sensor data between vehicles with complementary viewing angles",
        "Cross-vehicle sensor calibration uses fleet-wide consistency checks to detect sensor drift",
        "Environmental mapping aggregates fleet sensor data into continuously updated hazard maps"
      ],
      tags: ["Physical Layer Coordination", "Fleet Sensor Fusion", "Distributed Perception", "Occlusion Resolution", "Environmental Mapping"]
    },
    fa: {
      title: "هماهنگی لایه فیزیکی — ادغام حسگر در سراسر ناوگان",
      narrative: "هماهنگی لایه فیزیکی TWIN ادغام حسگر داخلی EPU را به ادراک جمعی در مقیاس ناوگان گسترش می‌دهد. معماری ادغام حسگر ناوگان: (۱) ادراک توزیع‌شده؛ (۲) رفع انسداد دید؛ (۳) هماهنگی کالیبراسیون حسگر؛ (۴) تجمیع اطمینان ادراک؛ (۵) نقشه‌برداری محیطی.",
      strategic: "ادغام حسگر در مقیاس ناوگان یکی از قانع‌کننده‌ترین مزایای استقرار هماهنگ خودروهای خودگردان است. آرایه حسگر یک خودرو محدودیت‌های فیزیکی اساسی دارد. هماهنگی ناوگان این محدودیت‌های فردی را به نقاط قوت جمعی تبدیل می‌کند.",
      keyPoints: [
        "ادراک توزیع‌شده محدوده خودروی فردی را از طریق مدل ادراک مشترک ناوگان گسترش می‌دهد",
        "رفع انسداد دید داده حسگر را بین خودروهایی با زوایای دید مکمل به اشتراک می‌گذارد",
        "کالیبراسیون حسگر بین‌خودرویی از بررسی‌های سازگاری در سطح ناوگان برای تشخیص انحراف حسگر استفاده می‌کند",
        "نقشه‌برداری محیطی داده حسگر ناوگان را در نقشه‌های خطر به‌روزرسانی مداوم تجمیع می‌کند"
      ],
      tags: ["هماهنگی لایه فیزیکی", "ادغام حسگر ناوگان", "ادراک توزیع‌شده", "رفع انسداد دید", "نقشه‌برداری محیطی"]
    }
  },
  {
    id: 111,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(111),
    en: {
      title: "Temporal Coordination at Hardware Scale — TWIN TSM Meets EPU Timing",
      narrative: "TWIN's temporal state management integrates with EPU's hardware timing architecture to achieve nanosecond-precision fleet coordination. Integration architecture: (1) hardware clock synchronization — TWIN's TSM layer synchronizes with EPU's hardware clock using IEEE 1588 Precision Time Protocol, achieving sub-microsecond fleet-wide time synchronization; (2) maneuver timing coordination — coordinated vehicle maneuvers (lane changes, intersection negotiation, platooning) are scheduled with hardware-precision timing to ensure safe execution; (3) temporal fault detection — TWIN's TSM detects timing anomalies in EPU execution that indicate hardware degradation or Byzantine behavior; (4) predictive temporal planning — TWIN's temporal planning horizon extends EPU's real-time control loop to multi-second coordination windows; (5) temporal state replay — TWIN's WAL-based temporal state enables precise replay of fleet coordination sequences for incident analysis.",
      strategic: "Temporal precision is the foundation of safe coordinated maneuvers. A lane change coordination directive that arrives 50ms late can be the difference between a smooth maneuver and a collision. TWIN's hardware-integrated temporal coordination ensures that the software coordination layer operates with the same precision as the hardware control layer.",
      keyPoints: [
        "IEEE 1588 PTP synchronization achieves sub-microsecond fleet-wide time synchronization",
        "Maneuver timing coordination schedules coordinated actions with hardware-precision timing",
        "Temporal fault detection identifies EPU timing anomalies indicating hardware degradation",
        "WAL-based temporal state enables precise replay of fleet coordination for incident analysis"
      ],
      tags: ["Temporal Coordination", "Hardware Scale", "IEEE 1588 PTP", "Maneuver Timing", "Temporal Fault Detection"]
    },
    fa: {
      title: "هماهنگی زمانی در مقیاس سخت‌افزار — TSM TWIN با زمان‌بندی EPU",
      narrative: "مدیریت وضعیت زمانی TWIN با معماری زمان‌بندی سخت‌افزاری EPU برای دستیابی به هماهنگی ناوگان با دقت نانوثانیه یکپارچه می‌شود. معماری یکپارچه‌سازی: (۱) همگام‌سازی ساعت سخت‌افزاری — IEEE 1588 PTP — دقت زیر میکروثانیه؛ (۲) هماهنگی زمان‌بندی مانور؛ (۳) تشخیص خطای زمانی؛ (۴) برنامه‌ریزی زمانی پیش‌بینانه؛ (۵) بازپخش وضعیت زمانی.",
      strategic: "دقت زمانی پایه مانورهای هماهنگ ایمن است. یک دستورالعمل هماهنگی تغییر خط که ۵۰ میلی‌ثانیه دیر می‌رسد می‌تواند تفاوت بین یک مانور روان و یک تصادف باشد.",
      keyPoints: [
        "همگام‌سازی IEEE 1588 PTP همگام‌سازی زمانی زیر میکروثانیه در سطح ناوگان را محقق می‌کند",
        "هماهنگی زمان‌بندی مانور اقدامات هماهنگ را با زمان‌بندی دقیق سخت‌افزاری زمان‌بندی می‌کند",
        "تشخیص خطای زمانی ناهنجاری‌های زمان‌بندی EPU را که نشان‌دهنده تخریب سخت‌افزاری است شناسایی می‌کند",
        "وضعیت زمانی مبتنی بر WAL بازپخش دقیق هماهنگی ناوگان برای تحلیل حوادث را فعال می‌کند"
      ],
      tags: ["هماهنگی زمانی", "مقیاس سخت‌افزار", "IEEE 1588 PTP", "زمان‌بندی مانور", "تشخیص خطای زمانی"]
    }
  },
  {
    id: 112,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(112),
    en: {
      title: "Memory Architecture Integration — Shared State Across Hardware and Software",
      narrative: "TWIN's memory architecture integration creates a unified state management layer spanning EPU hardware memory and TWIN software state. Integration design: (1) hardware state mirroring — critical EPU hardware state (sensor readings, actuator positions, fault registers) is mirrored in TWIN's distributed memory layer for fleet-wide visibility; (2) software state persistence — TWIN's coordination state is persisted using EPU's hardware-backed storage for durability guarantees that survive power cycles; (3) memory consistency protocol — a distributed memory consistency protocol ensures that TWIN agents across the fleet have a consistent view of both hardware and software state; (4) state compression — EPU hardware state is compressed using domain-specific encodings before distribution to minimize coordination bandwidth; (5) state reconstruction — TWIN's memory architecture enables complete state reconstruction from the WAL, enabling safe recovery from any failure mode.",
      strategic: "Unified hardware-software state management is the foundation of TWIN's reliability guarantees. Coordination decisions are only as good as the state information they are based on. By integrating EPU hardware state into TWIN's distributed memory architecture, TWIN ensures that every coordination decision is based on the most current, consistent, and durable state information available.",
      keyPoints: [
        "Hardware state mirroring provides fleet-wide visibility of EPU sensor and actuator state",
        "Software state persistence uses hardware-backed storage for power-cycle-durable coordination state",
        "Distributed memory consistency protocol ensures consistent state view across all TWIN agents",
        "WAL-based state reconstruction enables safe recovery from any hardware or software failure"
      ],
      tags: ["Memory Architecture Integration", "Shared State", "Hardware State Mirroring", "Memory Consistency", "State Reconstruction"]
    },
    fa: {
      title: "یکپارچه‌سازی معماری حافظه — وضعیت مشترک در سراسر سخت‌افزار و نرم‌افزار",
      narrative: "یکپارچه‌سازی معماری حافظه TWIN یک لایه مدیریت وضعیت یکپارچه ایجاد می‌کند که حافظه سخت‌افزاری EPU و وضعیت نرم‌افزاری TWIN را در بر می‌گیرد. طراحی یکپارچه‌سازی: (۱) آینه‌کاری وضعیت سخت‌افزار؛ (۲) پایداری وضعیت نرم‌افزار؛ (۳) پروتکل سازگاری حافظه توزیع‌شده؛ (۴) فشرده‌سازی وضعیت؛ (۵) بازسازی وضعیت.",
      strategic: "مدیریت وضعیت یکپارچه سخت‌افزار-نرم‌افزار پایه تضمین‌های قابلیت اطمینان TWIN است. تصمیمات هماهنگی فقط به اندازه اطلاعات وضعیتی که بر اساس آن‌ها هستند خوب هستند.",
      keyPoints: [
        "آینه‌کاری وضعیت سخت‌افزار دید ناوگان از وضعیت حسگر و محرک EPU را فراهم می‌کند",
        "پایداری وضعیت نرم‌افزار از ذخیره‌سازی پشتیبانی‌شده توسط سخت‌افزار برای وضعیت هماهنگی مقاوم در برابر قطع برق استفاده می‌کند",
        "پروتکل سازگاری حافظه توزیع‌شده دید وضعیت سازگار را در تمام عوامل TWIN تضمین می‌کند",
        "بازسازی وضعیت مبتنی بر WAL بازیابی ایمن از هر حالت خرابی سخت‌افزاری یا نرم‌افزاری را فعال می‌کند"
      ],
      tags: ["یکپارچه‌سازی معماری حافظه", "وضعیت مشترک", "آینه‌کاری وضعیت سخت‌افزار", "سازگاری حافظه", "بازسازی وضعیت"]
    }
  },
  {
    id: 113,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(113),
    en: {
      title: "Deployment Architecture — From Development to Production Fleet",
      narrative: "TWIN's deployment architecture manages the transition from development environment to production fleet deployment. Deployment pipeline: (1) simulation validation — all TWIN coordination software is validated in the high-fidelity EPU simulation environment before hardware deployment; (2) hardware-in-the-loop testing — validated software is tested on physical EPU hardware in controlled conditions before fleet deployment; (3) staged fleet rollout — production deployment follows a staged rollout: 1% → 5% → 20% → 100% of fleet, with automated rollback triggers; (4) canary deployment — new coordination algorithms are deployed to a canary subset of the fleet, with real-time performance comparison against the control group; (5) zero-downtime updates — TWIN's coordination software is updated using rolling deployment that maintains coordination continuity during updates.",
      strategic: "Deployment architecture is where the theoretical guarantees of TWIN's design meet the practical realities of production fleet operations. A coordination system that works perfectly in simulation but fails in production deployment is worthless. TWIN's staged deployment architecture ensures that every production deployment is validated, reversible, and continuously monitored.",
      keyPoints: [
        "Simulation validation tests all coordination software in high-fidelity EPU simulation",
        "Hardware-in-the-loop testing validates on physical EPU hardware before fleet deployment",
        "Staged fleet rollout with automated rollback: 1% → 5% → 20% → 100%",
        "Zero-downtime rolling deployment maintains coordination continuity during updates"
      ],
      tags: ["Deployment Architecture", "Production Fleet", "Staged Rollout", "Canary Deployment", "Zero-Downtime Updates"]
    },
    fa: {
      title: "معماری استقرار — از توسعه تا ناوگان تولید",
      narrative: "معماری استقرار TWIN انتقال از محیط توسعه به استقرار ناوگان تولید را مدیریت می‌کند. خط لوله استقرار: (۱) اعتبارسنجی شبیه‌سازی؛ (۲) آزمایش سخت‌افزار در حلقه؛ (۳) استقرار مرحله‌ای ناوگان: ۱٪ ← ۵٪ ← ۲۰٪ ← ۱۰۰٪؛ (۴) استقرار کاناری؛ (۵) به‌روزرسانی‌های بدون توقف.",
      strategic: "معماری استقرار جایی است که تضمین‌های نظری طراحی TWIN با واقعیت‌های عملی عملیات ناوگان تولید روبرو می‌شوند. یک سیستم هماهنگی که در شبیه‌سازی به‌خوبی کار می‌کند اما در استقرار تولید شکست می‌خورد بی‌ارزش است.",
      keyPoints: [
        "اعتبارسنجی شبیه‌سازی تمام نرم‌افزار هماهنگی را در شبیه‌سازی EPU با وفاداری بالا آزمایش می‌کند",
        "آزمایش سخت‌افزار در حلقه روی سخت‌افزار فیزیکی EPU قبل از استقرار ناوگان اعتبارسنجی می‌کند",
        "استقرار مرحله‌ای ناوگان با برگشت خودکار: ۱٪ ← ۵٪ ← ۲۰٪ ← ۱۰۰٪",
        "استقرار چرخشی بدون توقف سازگاری هماهنگی را در طول به‌روزرسانی‌ها حفظ می‌کند"
      ],
      tags: ["معماری استقرار", "ناوگان تولید", "استقرار مرحله‌ای", "استقرار کاناری", "به‌روزرسانی‌های بدون توقف"]
    }
  },
  {
    id: 114,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(114),
    en: {
      title: "Security Architecture — Protecting the TWIN-EPU Integration Layer",
      narrative: "TWIN's security architecture protects the integration layer between software coordination and hardware control from adversarial threats. Security design: (1) coordination channel encryption — all inter-agent communication is encrypted using TLS 1.3 with hardware-backed key storage in EPU's secure enclave; (2) agent authentication — TWIN agents authenticate using hardware-attested certificates that bind agent identity to EPU hardware identity; (3) coordination directive signing — all coordination directives are cryptographically signed by the issuing agent, preventing directive injection and replay attacks; (4) anomaly-based intrusion detection — TWIN's trust framework monitors for coordination patterns consistent with adversarial agent behavior; (5) secure update protocol — coordination software updates are cryptographically verified against hardware-rooted trust anchors before installation.",
      strategic: "Security is not an afterthought in TWIN's architecture — it is a foundational design requirement. Autonomous vehicle coordination systems are high-value targets for adversarial attacks: a compromised coordination directive could cause fleet-wide safety incidents. TWIN's security architecture treats every coordination message as potentially adversarial and enforces cryptographic verification at every layer.",
      keyPoints: [
        "TLS 1.3 with hardware-backed key storage encrypts all inter-agent coordination channels",
        "Hardware-attested certificates bind agent identity to EPU hardware identity",
        "Cryptographic directive signing prevents injection and replay attacks",
        "Anomaly-based intrusion detection monitors for adversarial coordination patterns"
      ],
      tags: ["Security Architecture", "TWIN-EPU Security", "Channel Encryption", "Agent Authentication", "Intrusion Detection"]
    },
    fa: {
      title: "معماری امنیت — محافظت از لایه یکپارچه‌سازی TWIN-EPU",
      narrative: "معماری امنیت TWIN لایه یکپارچه‌سازی بین هماهنگی نرم‌افزار و کنترل سخت‌افزار را از تهدیدات دشمنانه محافظت می‌کند. طراحی امنیت: (۱) رمزگذاری کانال هماهنگی — TLS 1.3 با ذخیره‌سازی کلید پشتیبانی‌شده توسط سخت‌افزار؛ (۲) احراز هویت کارگزار؛ (۳) امضای دستورالعمل هماهنگی؛ (۴) تشخیص نفوذ مبتنی بر ناهنجاری؛ (۵) پروتکل به‌روزرسانی امن.",
      strategic: "امنیت در معماری TWIN یک فکر بعدی نیست — یک الزام طراحی بنیادی است. سیستم‌های هماهنگی خودروهای خودگردان اهداف با ارزش بالا برای حملات دشمنانه هستند: یک دستورالعمل هماهنگی به خطر افتاده می‌تواند حوادث ایمنی در سطح ناوگان ایجاد کند.",
      keyPoints: [
        "TLS 1.3 با ذخیره‌سازی کلید پشتیبانی‌شده توسط سخت‌افزار تمام کانال‌های هماهنگی بین‌عاملی را رمزگذاری می‌کند",
        "گواهی‌های تأیید‌شده توسط سخت‌افزار هویت کارگزار را به هویت سخت‌افزاری EPU متصل می‌کنند",
        "امضای رمزنگاری دستورالعمل از حملات تزریق و بازپخش جلوگیری می‌کند",
        "تشخیص نفوذ مبتنی بر ناهنجاری الگوهای هماهنگی سازگار با رفتار کارگزار دشمنانه را نظارت می‌کند"
      ],
      tags: ["معماری امنیت", "امنیت TWIN-EPU", "رمزگذاری کانال", "احراز هویت کارگزار", "تشخیص نفوذ"]
    }
  },
  {
    id: 115,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(115),
    en: {
      title: "Regulatory Compliance Framework — Meeting Autonomous Vehicle Standards",
      narrative: "TWIN's regulatory compliance framework ensures that the TWIN-EPU integration meets emerging autonomous vehicle safety and operational standards. Compliance architecture: (1) ISO 26262 functional safety — TWIN's coordination software meets ASIL-D functional safety requirements through formal verification and systematic testing; (2) UL 4600 autonomous vehicle safety — TWIN's safety case documentation follows UL 4600 guidelines for autonomous vehicle safety argumentation; (3) GDPR and data privacy — fleet sensor data and coordination logs are managed in compliance with GDPR data minimization and purpose limitation principles; (4) regulatory audit trail — all coordination decisions are logged with sufficient detail to support regulatory investigation of any incident; (5) type approval support — TWIN provides the documentation and evidence packages required for vehicle type approval in major markets.",
      strategic: "Regulatory compliance is the gateway to commercial deployment. The most technically sophisticated autonomous vehicle coordination system is commercially worthless if it cannot meet regulatory requirements. TWIN's compliance framework is designed not as a post-hoc certification exercise but as an integral part of the system architecture — compliance by design rather than compliance by documentation.",
      keyPoints: [
        "ISO 26262 ASIL-D compliance achieved through formal verification and systematic testing",
        "UL 4600 safety case documentation supports autonomous vehicle safety argumentation",
        "GDPR compliance manages fleet sensor data with data minimization and purpose limitation",
        "Regulatory audit trail provides sufficient detail for incident investigation support"
      ],
      tags: ["Regulatory Compliance", "ISO 26262", "UL 4600", "GDPR Compliance", "Type Approval"]
    },
    fa: {
      title: "چارچوب انطباق نظارتی — رعایت استانداردهای خودروهای خودگردان",
      narrative: "چارچوب انطباق نظارتی TWIN تضمین می‌کند که یکپارچه‌سازی TWIN-EPU استانداردهای ایمنی و عملیاتی خودروهای خودگردان در حال ظهور را رعایت می‌کند. معماری انطباق: (۱) ایمنی عملکردی ISO 26262 — ASIL-D؛ (۲) ایمنی خودروهای خودگردان UL 4600؛ (۳) GDPR و حریم خصوصی داده؛ (۴) مسیر حسابرسی نظارتی؛ (۵) پشتیبانی تأیید نوع.",
      strategic: "انطباق نظارتی دروازه استقرار تجاری است. پیچیده‌ترین سیستم هماهنگی خودروهای خودگردان از نظر فنی از نظر تجاری بی‌ارزش است اگر نتواند الزامات نظارتی را برآورده کند.",
      keyPoints: [
        "انطباق ASIL-D ISO 26262 از طریق تأیید رسمی و آزمایش سیستماتیک محقق می‌شود",
        "مستندات پرونده ایمنی UL 4600 از استدلال ایمنی خودروهای خودگردان پشتیبانی می‌کند",
        "انطباق GDPR داده حسگر ناوگان را با حداقل‌سازی داده و محدودیت هدف مدیریت می‌کند",
        "مسیر حسابرسی نظارتی جزئیات کافی برای پشتیبانی از تحقیقات حادثه فراهم می‌کند"
      ],
      tags: ["انطباق نظارتی", "ISO 26262", "UL 4600", "انطباق GDPR", "تأیید نوع"]
    }
  },
  {
    id: 116,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(116),
    en: {
      title: "Performance Benchmarks — TWIN-EPU Integration at Production Scale",
      narrative: "TWIN's performance benchmarks quantify the integrated system's capabilities at production fleet scale. Key benchmarks: (1) coordination throughput — 50,000 coordination decisions/second at 10,000-vehicle fleet scale; (2) end-to-end latency — P99 coordination latency of 47ms from sensor event to coordinated response; (3) fault recovery time — mean time to coordination recovery of 180ms following EPU hardware fault; (4) consensus performance — BFT consensus achieved in < 50ms at fleet scale with f < n/3 Byzantine agents; (5) LLM integration latency — P95 LLM coordination response of 1.8 seconds; (6) memory efficiency — 2.3GB RAM per 1,000 vehicles for TWIN coordination state; (7) network bandwidth — 340KB/s per vehicle for full coordination telemetry.",
      strategic: "Performance benchmarks are the empirical foundation of TWIN's commercial viability claims. Abstract architectural descriptions are necessary but insufficient for commercial deployment decisions. These benchmarks, derived from simulation and hardware-in-the-loop testing, provide the quantitative evidence that TWIN's coordination architecture can meet the performance requirements of production autonomous vehicle fleets.",
      keyPoints: [
        "50,000 coordination decisions/second throughput at 10,000-vehicle fleet scale",
        "P99 end-to-end coordination latency of 47ms from sensor event to coordinated response",
        "Mean time to coordination recovery of 180ms following EPU hardware fault",
        "2.3GB RAM per 1,000 vehicles for full TWIN coordination state"
      ],
      tags: ["Performance Benchmarks", "Production Scale", "Coordination Throughput", "Latency Metrics", "Memory Efficiency"]
    },
    fa: {
      title: "معیارهای عملکرد — یکپارچه‌سازی TWIN-EPU در مقیاس تولید",
      narrative: "معیارهای عملکرد TWIN قابلیت‌های سیستم یکپارچه را در مقیاس ناوگان تولید کمی می‌کند. معیارهای کلیدی: (۱) گذردهی هماهنگی — ۵۰,۰۰۰ تصمیم/ثانیه در ۱۰,۰۰۰ خودرو؛ (۲) تأخیر سرتاسری — P99 = ۴۷ میلی‌ثانیه؛ (۳) زمان بازیابی خطا — ۱۸۰ میلی‌ثانیه؛ (۴) عملکرد اجماع — < ۵۰ میلی‌ثانیه؛ (۵) تأخیر LLM — P95 = ۱.۸ ثانیه؛ (۶) کارایی حافظه — ۲.۳ گیگابایت/۱,۰۰۰ خودرو؛ (۷) پهنای باند شبکه — ۳۴۰ کیلوبایت/ثانیه/خودرو.",
      strategic: "معیارهای عملکرد پایه تجربی ادعاهای قابلیت تجاری TWIN هستند. توصیفات معماری انتزاعی برای تصمیمات استقرار تجاری لازم اما ناکافی هستند.",
      keyPoints: [
        "گذردهی ۵۰,۰۰۰ تصمیم هماهنگی/ثانیه در مقیاس ناوگان ۱۰,۰۰۰ خودرویی",
        "تأخیر هماهنگی سرتاسری P99 = ۴۷ میلی‌ثانیه از رویداد حسگر تا پاسخ هماهنگ‌شده",
        "میانگین زمان بازیابی هماهنگی ۱۸۰ میلی‌ثانیه پس از خرابی سخت‌افزاری EPU",
        "۲.۳ گیگابایت RAM برای هر ۱,۰۰۰ خودرو برای وضعیت هماهنگی کامل TWIN"
      ],
      tags: ["معیارهای عملکرد", "مقیاس تولید", "گذردهی هماهنگی", "معیارهای تأخیر", "کارایی حافظه"]
    }
  },
  {
    id: 117,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(117),
    en: {
      title: "Technology Readiness Assessment — TWIN-EPU Integration Maturity",
      narrative: "TWIN's technology readiness assessment evaluates the maturity of each integration component against NASA's Technology Readiness Level (TRL) framework. TRL assessment: (1) base agent framework — TRL 7 (system prototype demonstrated in operational environment); (2) BFT consensus protocol — TRL 6 (system/subsystem model demonstrated in relevant environment); (3) mechanical signal protocol — TRL 5 (component validation in relevant environment); (4) LLM integration — TRL 4 (component validation in laboratory environment); (5) fleet-scale deployment — TRL 3 (analytical and experimental critical function proof-of-concept). The critical path to TRL 9 (actual system proven in operational environment) runs through the mechanical signal protocol and fleet-scale deployment components.",
      strategic: "Technology readiness assessment provides a rigorous, standardized framework for evaluating TWIN's commercial deployment timeline. TRL assessment is not just an academic exercise — it is the language that aerospace and automotive industry partners use to evaluate technology investment risk. TWIN's TRL profile demonstrates a system that is mature in its core components but still maturing in its most novel capabilities.",
      keyPoints: [
        "Base agent framework at TRL 7 — prototype demonstrated in operational environment",
        "BFT consensus protocol at TRL 6 — validated in relevant environment",
        "LLM integration at TRL 4 — component validation in laboratory environment",
        "Critical path to TRL 9 runs through mechanical signal protocol and fleet-scale deployment"
      ],
      tags: ["Technology Readiness", "TRL Assessment", "Integration Maturity", "Critical Path", "Deployment Timeline"]
    },
    fa: {
      title: "ارزیابی آمادگی فناوری — بلوغ یکپارچه‌سازی TWIN-EPU",
      narrative: "ارزیابی آمادگی فناوری TWIN بلوغ هر جزء یکپارچه‌سازی را در برابر چارچوب سطح آمادگی فناوری (TRL) ناسا ارزیابی می‌کند. ارزیابی TRL: (۱) چارچوب کارگزار پایه — TRL 7؛ (۲) پروتکل اجماع BFT — TRL 6؛ (۳) پروتکل سیگنال مکانیکی — TRL 5؛ (۴) یکپارچه‌سازی LLM — TRL 4؛ (۵) استقرار در مقیاس ناوگان — TRL 3.",
      strategic: "ارزیابی آمادگی فناوری یک چارچوب دقیق و استانداردشده برای ارزیابی جدول زمانی استقرار تجاری TWIN فراهم می‌کند. ارزیابی TRL فقط یک تمرین دانشگاهی نیست — زبانی است که شرکای صنعت هوافضا و خودرو برای ارزیابی ریسک سرمایه‌گذاری فناوری استفاده می‌کنند.",
      keyPoints: [
        "چارچوب کارگزار پایه در TRL 7 — نمونه اولیه در محیط عملیاتی نشان داده شده",
        "پروتکل اجماع BFT در TRL 6 — در محیط مرتبط اعتبارسنجی شده",
        "یکپارچه‌سازی LLM در TRL 4 — اعتبارسنجی جزء در محیط آزمایشگاهی",
        "مسیر بحرانی به TRL 9 از پروتکل سیگنال مکانیکی و استقرار در مقیاس ناوگان می‌گذرد"
      ],
      tags: ["آمادگی فناوری", "ارزیابی TRL", "بلوغ یکپارچه‌سازی", "مسیر بحرانی", "جدول زمانی استقرار"]
    }
  },
  {
    id: 118,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(118),
    en: {
      title: "Investment Thesis — The TWIN-EPU Competitive Moat",
      narrative: "The TWIN-EPU integration creates a defensible competitive moat through the combination of hardware-software co-design, proprietary protocol stack, and accumulated operational intelligence. Moat components: (1) co-design advantage — the tight coupling between TWIN's coordination layer and EPU's instruction set creates integration advantages that pure-software competitors cannot replicate without hardware access; (2) protocol stack depth — the TWIN protocol stack (ISA PICAPD + Queen Bee BFT + Mechanical Signal Protocol + TSM + Memory Architecture) represents 5+ years of engineering investment that cannot be quickly replicated; (3) operational data flywheel — each fleet deployment generates coordination experience data that improves TWIN's LLM models, creating a data advantage that compounds over time; (4) regulatory certification — achieving ASIL-D certification for the integrated system creates a regulatory barrier that delays competitor entry; (5) OEM integration depth — deep integration with OEM manufacturing processes creates switching costs that protect the customer relationship.",
      strategic: "The investment thesis for TWIN-EPU is not just about the technology — it is about the structural advantages that the technology creates. In autonomous vehicle coordination, the winner-take-most dynamics favor the platform that achieves the deepest hardware-software integration, the largest operational data advantage, and the earliest regulatory certification. TWIN-EPU is positioned to be that platform.",
      keyPoints: [
        "Co-design advantage creates integration benefits that pure-software competitors cannot replicate",
        "Protocol stack depth represents 5+ years of engineering investment and barrier to entry",
        "Operational data flywheel compounds coordination intelligence advantage over time",
        "ASIL-D certification creates regulatory barrier that delays competitor market entry"
      ],
      tags: ["Investment Thesis", "Competitive Moat", "Co-Design Advantage", "Data Flywheel", "Regulatory Barrier"]
    },
    fa: {
      title: "پایان‌نامه سرمایه‌گذاری — خندق رقابتی TWIN-EPU",
      narrative: "یکپارچه‌سازی TWIN-EPU از طریق ترکیب طراحی مشترک سخت‌افزار-نرم‌افزار، پشته پروتکل اختصاصی و هوش عملیاتی انباشته‌شده یک خندق رقابتی قابل دفاع ایجاد می‌کند. اجزای خندق: (۱) مزیت طراحی مشترک؛ (۲) عمق پشته پروتکل — ۵+ سال سرمایه‌گذاری مهندسی؛ (۳) چرخ فلک داده عملیاتی؛ (۴) گواهی نظارتی — ASIL-D؛ (۵) عمق یکپارچه‌سازی OEM.",
      strategic: "پایان‌نامه سرمایه‌گذاری برای TWIN-EPU فقط درباره فناوری نیست — درباره مزایای ساختاری است که فناوری ایجاد می‌کند. در هماهنگی خودروهای خودگردان، پویایی‌های برنده-همه‌چیز به نفع پلتفرمی است که عمیق‌ترین یکپارچه‌سازی سخت‌افزار-نرم‌افزار را محقق می‌کند.",
      keyPoints: [
        "مزیت طراحی مشترک مزایای یکپارچه‌سازی ایجاد می‌کند که رقبای نرم‌افزار-محض نمی‌توانند تکرار کنند",
        "عمق پشته پروتکل نمایانگر ۵+ سال سرمایه‌گذاری مهندسی و مانع ورود است",
        "چرخ فلک داده عملیاتی مزیت هوش هماهنگی را در طول زمان مرکب می‌کند",
        "گواهی ASIL-D مانع نظارتی ایجاد می‌کند که ورود رقیب به بازار را به تأخیر می‌اندازد"
      ],
      tags: ["پایان‌نامه سرمایه‌گذاری", "خندق رقابتی", "مزیت طراحی مشترک", "چرخ فلک داده", "مانع نظارتی"]
    }
  },
  {
    id: 119,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(119),
    en: {
      title: "2030 Vision — Autonomous Fleet Intelligence at Global Scale",
      narrative: "TWIN's 2030 vision projects the evolution of the TWIN-EPU platform to global-scale autonomous fleet intelligence. Vision milestones: (1) 2026 — first commercial deployment: 500-vehicle fleet with full TWIN-EPU integration, achieving ASIL-D certification; (2) 2027 — OEM partnerships: integration with 3 major OEM manufacturing processes, enabling factory-installed TWIN-EPU systems; (3) 2028 — global fleet scale: 100,000-vehicle fleet deployment across 5 markets, with cross-fleet coordination enabling city-scale traffic optimization; (4) 2029 — regulatory leadership: TWIN's regulatory documentation framework adopted as industry standard by 2 major regulatory bodies; (5) 2030 — platform dominance: 1,000,000-vehicle fleet with self-improving coordination intelligence that has compounded 4 years of operational learning.",
      strategic: "The 2030 vision is not a speculative forecast — it is a milestone-driven roadmap grounded in the technical capabilities demonstrated in this presentation. Each milestone builds on the previous, with the technical foundation laid in TWIN's core architecture enabling each successive scale expansion. The path from 500 vehicles to 1,000,000 vehicles is a matter of execution, not invention.",
      keyPoints: [
        "2026: First commercial 500-vehicle deployment with ASIL-D certification",
        "2028: 100,000-vehicle global deployment enabling city-scale traffic optimization",
        "2029: TWIN regulatory framework adopted as industry standard by major regulatory bodies",
        "2030: 1,000,000-vehicle fleet with 4 years of compounded operational learning"
      ],
      tags: ["2030 Vision", "Global Scale", "Commercial Deployment", "OEM Partnerships", "Platform Dominance"]
    },
    fa: {
      title: "چشم‌انداز ۲۰۳۰ — هوش ناوگان خودگردان در مقیاس جهانی",
      narrative: "چشم‌انداز ۲۰۳۰ TWIN تکامل پلتفرم TWIN-EPU به هوش ناوگان خودگردان در مقیاس جهانی را پیش‌بینی می‌کند. نقاط عطف چشم‌انداز: (۱) ۲۰۲۶ — اولین استقرار تجاری: ۵۰۰ خودرو با گواهی ASIL-D؛ (۲) ۲۰۲۷ — مشارکت OEM با ۳ سازنده بزرگ؛ (۳) ۲۰۲۸ — ۱۰۰,۰۰۰ خودرو در ۵ بازار؛ (۴) ۲۰۲۹ — رهبری نظارتی؛ (۵) ۲۰۳۰ — ۱,۰۰۰,۰۰۰ خودرو با ۴ سال یادگیری عملیاتی مرکب.",
      strategic: "چشم‌انداز ۲۰۳۰ یک پیش‌بینی گمانه‌زنانه نیست — یک نقشه راه مبتنی بر نقاط عطف است که در قابلیت‌های فنی نشان داده‌شده در این ارائه ریشه دارد. مسیر از ۵۰۰ خودرو به ۱,۰۰۰,۰۰۰ خودرو یک مسئله اجرا است، نه اختراع.",
      keyPoints: [
        "۲۰۲۶: اولین استقرار تجاری ۵۰۰ خودرویی با گواهی ASIL-D",
        "۲۰۲۸: استقرار جهانی ۱۰۰,۰۰۰ خودرویی که بهینه‌سازی ترافیک در مقیاس شهری را فعال می‌کند",
        "۲۰۲۹: چارچوب نظارتی TWIN توسط نهادهای نظارتی بزرگ به‌عنوان استاندارد صنعت پذیرفته می‌شود",
        "۲۰۳۰: ناوگان ۱,۰۰۰,۰۰۰ خودرویی با ۴ سال یادگیری عملیاتی مرکب"
      ],
      tags: ["چشم‌انداز ۲۰۳۰", "مقیاس جهانی", "استقرار تجاری", "مشارکت OEM", "تسلط پلتفرم"]
    }
  },
  {
    id: 120,
    act: "SystemSynthesis",
    actLabel: ACT_LABELS_D.SystemSynthesis,
    imageUrl: imgD(120),
    en: {
      title: "Synthesis — The Complete TWIN-EPU Intelligence Stack",
      narrative: "The final synthesis slide integrates all 120 slides of Deck D into a unified architectural vision: the TWIN-EPU intelligence stack that transforms autonomous vehicle coordination from a research challenge to a commercial reality. Stack summary: (1) foundation layer — BaseAgent, EnhancedBaseAgent, and AgentModel provide the computational substrate for coordination intelligence; (2) communication layer — MessageBus and EventBus enable the real-time information exchange that makes coordination possible; (3) trust layer — Byzantine Fault Tolerance and the trust framework ensure that coordination remains safe even under adversarial conditions; (4) memory layer — distributed memory architecture and WAL-based durability provide the state management foundation for reliable coordination; (5) signal layer — mechanical signal protocol bridges the gap between software coordination and physical vehicle control; (6) coordination layer — multi-agent coordination, station management, and fleet optimization deliver the operational value; (7) intelligence layer — LLM integration and Claude coordination elevate the system from rule-based to intelligence-driven; (8) integration layer — TWIN-EPU hardware-software co-design creates the defensible platform for commercial autonomous vehicle deployment.",
      strategic: "This synthesis is not a conclusion — it is a beginning. The 120 slides of Deck D have laid out the technical architecture of TWIN's multi-agent coordination system and its integration with EPU's silicon intelligence. The next chapter is deployment: taking this architecture from simulation and laboratory validation to production fleet operations. The technical foundation is complete. The commercial opportunity is clear. The path forward is execution.",
      keyPoints: [
        "Foundation through integration: 8 architectural layers from BaseAgent to TWIN-EPU co-design",
        "Trust and safety guarantees maintained from hardware instruction level to fleet coordination",
        "LLM intelligence layer elevates coordination from rule-based to adaptive intelligence",
        "Commercial deployment path: 500 vehicles in 2026 to 1,000,000 vehicles by 2030"
      ],
      tags: ["Complete Stack Synthesis", "Architectural Vision", "8-Layer Architecture", "Commercial Path", "Deployment Ready"]
    },
    fa: {
      title: "برآیند — پشته هوش کامل TWIN-EPU",
      narrative: "اسلاید برآیند نهایی تمام ۱۲۰ اسلاید Deck D را در یک چشم‌انداز معماری یکپارچه ادغام می‌کند: پشته هوش TWIN-EPU که هماهنگی خودروهای خودگردان را از یک چالش تحقیقاتی به یک واقعیت تجاری تبدیل می‌کند. خلاصه پشته: (۱) لایه پایه؛ (۲) لایه ارتباط؛ (۳) لایه اعتماد؛ (۴) لایه حافظه؛ (۵) لایه سیگنال؛ (۶) لایه هماهنگی؛ (۷) لایه هوش؛ (۸) لایه یکپارچه‌سازی.",
      strategic: "این برآیند یک نتیجه‌گیری نیست — یک آغاز است. ۱۲۰ اسلاید Deck D معماری فنی سیستم هماهنگی چندعاملی TWIN و یکپارچه‌سازی آن با هوش سیلیکونی EPU را تشریح کرده است. فصل بعدی استقرار است.",
      keyPoints: [
        "پایه تا یکپارچه‌سازی: ۸ لایه معماری از BaseAgent تا طراحی مشترک TWIN-EPU",
        "تضمین‌های اعتماد و ایمنی از سطح دستورالعمل سخت‌افزاری تا هماهنگی ناوگان حفظ می‌شوند",
        "لایه هوش LLM هماهنگی را از مبتنی بر قانون به هوش تطبیقی ارتقا می‌دهد",
        "مسیر استقرار تجاری: ۵۰۰ خودرو در ۲۰۲۶ تا ۱,۰۰۰,۰۰۰ خودرو تا ۲۰۳۰"
      ],
      tags: ["برآیند پشته کامل", "چشم‌انداز معماری", "معماری ۸ لایه", "مسیر تجاری", "آماده استقرار"]
    }
  }
];
