// MVD: 2.00 | Source: DECK_A_UFP_2026_001 | Slides: 30 | Lang: EN+FA
// ─── Deck A: Universal Filtration Primitive ↔ Discriminant Analysis ──────────
// 30-Slide Bilingual Presentation
// Source: FilterDesignInventory.pdf (Feb 28, 2026)
// Accent: #4FC3F7 (signal blue)

export type ActA = "Foundation" | "Taxonomy" | "Composition" | "LDA" | "Variants" | "Decision" | "Performance" | "Synthesis";

export interface SlideContentA {
  title: string;
  narrative: string;
  strategic: string;
  keyPoints: string[];
  tags: string[];
}

export interface SlideA {
  id: number;
  act: ActA;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: SlideContentA;
  fa: SlideContentA;
}

// Placeholder CDN — will be replaced after image generation
const imgA = (n: number) => IMG_URLS[n] || "";

export const ACT_LABELS_A: Record<ActA, { en: string; fa: string }> = {
  Foundation:  { en: "Foundation",    fa: "پایه‌های نظری" },
  Taxonomy:    { en: "10-Path Taxonomy", fa: "طبقه‌بندی ۱۰ مسیره" },
  Composition: { en: "Composition Algebra", fa: "جبر ترکیب" },
  LDA:         { en: "LDA Core",      fa: "هسته LDA" },
  Variants:    { en: "LDA Variants",  fa: "انواع LDA" },
  Decision:    { en: "Decision Framework", fa: "چارچوب تصمیم" },
  Performance: { en: "Performance",   fa: "عملکرد و اعتبارسنجی" },
  Synthesis:   { en: "Synthesis",     fa: "ترکیب و چشم‌انداز" },
};

const IMG_URLS: Record<number, string> = {
  1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_1_708d29c1.png",
  2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_2_1f1dba72.png",
  3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_3_47dc7a9d.png",
  4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_4_526f15d0.png",
  5: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_5_7462bb1b.png",
  6: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_6_adfbfa91.png",
  7: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_7_98e50ebe.png",
  8: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_8_4b5b35ba.png",
  9: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_9_bddd7ef8.png",
  10: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_10_54a6e77f.png",
  11: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_11_4c2bb53b.png",
  12: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_12_da1e9569.png",
  13: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_13_11783426.png",
  14: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_14_4d37e9cf.png",
  15: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_15_3ab96b44.png",
  16: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_16_39e46bbd.png",
  17: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_17_201e126a.png",
  18: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_18_5199839a.png",
  19: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_19_1c1086f2.png",
  20: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_20_60b4452a.png",
  21: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_21_d7339832.png",
  22: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_22_0125b7bb.png",
  23: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_23_dc09753b.png",
  24: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_24_a8ba2491.png",
  25: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_25_8a5ac581.png",
  26: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_26_f22d1b1c.png",
  27: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_27_3816bd8a.png",
  28: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_28_76b657ed.png",
  29: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_29_6324240e.png",
  30: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_30_47d2a196.png",
  31: "https://d2xsxph8kpxj0f.cloudfront.net/310519663375391636/BEAks43mdXqakzGwnJU26K/slideA_30_47d2a196.png",  // placeholder
};

export const slidesA: SlideA[] = [
  {
    id: 1, act: "Foundation", actLabel: ACT_LABELS_A.Foundation, imageUrl: imgA(1),
    en: {
      title: "The Separation Problem",
      narrative: "Every intelligent system — from a hardware stencil to a neural classifier — must separate signal from noise, relevant from irrelevant, class from class. Despite the apparent diversity of these operations, they share a common five-component structure. This deck establishes that structure as the Universal Filtration Primitive (UFP) and shows how all known separation mechanisms are its instantiations.",
      strategic: "The UFP is defined by five components: (1) Domain — the structured object space, (2) Discrimination Criterion Φ — typed function mapping elements to separation signals, (3) Partition Rule Γ — decision boundary geometry, (4) Substrate — physical or algorithmic realization, (5) Separation Mode — Direct Selection vs. Decomposition-Based. Every filter must declare all five.",
      keyPoints: [
        "All separation mechanisms share a five-component structure",
        "Domain: structured object space (elements, batches, streams, graphs, fields)",
        "Criterion Φ: typed function mapping elements to separation signals",
        "Partition Γ: decision boundary geometry (linear, quadratic, nonlinear)",
        "Substrate: physical/algorithmic realization; Mode: Direct vs. Decomposition",
      ],
      tags: ["UFP", "Separation", "Foundation", "Five Components"],
    },
    fa: {
      title: "مسئله جداسازی",
      narrative: "هر سیستم هوشمند — از یک stencil سخت‌افزاری تا یک طبقه‌بند عصبی — باید سیگنال را از نویز، مرتبط را از نامرتبط، و کلاس را از کلاس جدا کند. با وجود تنوع ظاهری این عملیات، همه آن‌ها یک ساختار پنج‌مؤلفه‌ای مشترک دارند. این deck آن ساختار را به عنوان Universal Filtration Primitive (UFP) تعریف می‌کند.",
      strategic: "UFP با پنج مؤلفه تعریف می‌شود: (۱) دامنه — فضای اشیاء ساختاریافته، (۲) معیار تمایز Φ — تابع نوع‌دار نگاشت عناصر به سیگنال‌های جداسازی، (۳) قانون افراز Γ — هندسه مرز تصمیم، (۴) بستر — پیاده‌سازی فیزیکی یا الگوریتمی، (۵) حالت جداسازی — انتخاب مستقیم در مقابل مبتنی بر تجزیه.",
      keyPoints: [
        "همه مکانیزم‌های جداسازی یک ساختار پنج‌مؤلفه‌ای مشترک دارند",
        "دامنه: فضای اشیاء ساختاریافته",
        "معیار Φ: تابع نوع‌دار نگاشت عناصر به سیگنال‌های جداسازی",
        "افراز Γ: هندسه مرز تصمیم (خطی، درجه دوم، غیرخطی)",
        "بستر: پیاده‌سازی فیزیکی/الگوریتمی؛ حالت: مستقیم در مقابل تجزیه",
      ],
      tags: ["UFP", "جداسازی", "پایه", "پنج مؤلفه"],
    },
  },
  {
    id: 2, act: "Foundation", actLabel: ACT_LABELS_A.Foundation, imageUrl: imgA(2),
    en: {
      title: "The Universal Filtration Primitive",
      narrative: "The UFP is formally defined as a five-tuple (Domain, Φ, Γ, Substrate, Mode). Two separation modes exist: DirectSelection, where Φ operates natively on the domain without explicit representation transformation, and DecompositionBased, where an explicit representation stage R(·) precedes discrimination. The canonical form for DirectSelection is x→Φ→s→Γ→y. For DecompositionBased: x→R→z→Φ→s→Γ→y→C→x̂.",
      strategic: "DirectSelection characteristics: selection-first, no invertibility concept, low overhead. Examples: Stencil, Sieve, Grid Mask, Temporal Gate, Probabilistic Sampler, Field Gradient Selector. DecompositionBased characteristics: decompose→select→(optional) reconstruct; R may or may not be invertible; higher computational cost. Examples: Spectral Filter (FFT/wavelet), Phase Space Classifier (LDA), Hierarchical Aggregator, Topological Sorter.",
      keyPoints: [
        "UFP = (Domain, Φ, Γ, Substrate, Mode) — a five-tuple",
        "DirectSelection: Φ operates natively, no representation stage, low overhead",
        "DecompositionBased: explicit R(·) stage, decompose→select→reconstruct",
        "Every filter must declare its mode and name R (Identity is valid for direct selection)",
        "6 direct-selection paths; 4 decomposition-based paths in the 10-path taxonomy",
      ],
      tags: ["UFP", "DirectSelection", "DecompositionBased", "Formal Definition"],
    },
    fa: {
      title: "Primitive جهانی فیلتراسیون",
      narrative: "UFP به صورت رسمی به عنوان یک پنج‌تایی (دامنه، Φ، Γ، بستر، حالت) تعریف می‌شود. دو حالت جداسازی وجود دارد: انتخاب مستقیم، که Φ به صورت بومی روی دامنه عمل می‌کند بدون تبدیل بازنمایی صریح، و مبتنی بر تجزیه، که یک مرحله بازنمایی صریح R(·) قبل از تمایز قرار می‌گیرد.",
      strategic: "ویژگی‌های انتخاب مستقیم: اول انتخاب، بدون مفهوم برگشت‌پذیری، سربار کم. مثال‌ها: Stencil، Sieve، Grid Mask. ویژگی‌های مبتنی بر تجزیه: تجزیه→انتخاب→(اختیاری) بازسازی؛ R ممکن است برگشت‌پذیر باشد یا نباشد؛ هزینه محاسباتی بالاتر.",
      keyPoints: [
        "UFP = (دامنه، Φ، Γ، بستر، حالت) — یک پنج‌تایی",
        "انتخاب مستقیم: Φ به صورت بومی عمل می‌کند، بدون مرحله بازنمایی",
        "مبتنی بر تجزیه: مرحله صریح R(·)، تجزیه→انتخاب→بازسازی",
        "هر فیلتر باید حالت خود و نام R را اعلام کند",
        "۶ مسیر انتخاب مستقیم؛ ۴ مسیر مبتنی بر تجزیه در taxonomy ۱۰ مسیره",
      ],
      tags: ["UFP", "انتخاب مستقیم", "مبتنی بر تجزیه", "تعریف رسمی"],
    },
  },
  {
    id: 3, act: "Foundation", actLabel: ACT_LABELS_A.Foundation, imageUrl: imgA(3),
    en: {
      title: "The Universal Staged Interface",
      narrative: "All filters conform to a four-stage pipeline, though some stages may be identity operations. Stage 0 (Represent): z = R(x) — transform input to representation space. Stage 1 (Discriminate): s = Φ(z) — apply discrimination criterion. Stage 2 (Select/Partition): y = Γ(s) — apply partition rule. Stage 3 (Compose/Reconstruct): x̂ = C(y,z) — optional reconstruction. Every filter must specify its mode and name R explicitly.",
      strategic: "The staged interface enforces a contractual structure between filter components. For DirectSelection, R = Identity and Stage 3 is omitted. For DecompositionBased filters, R must be specified (FFT, wavelet, pyramid, eigenspace, embedding, whitening), along with invertibility status and reconstruction operator C. This mandatory declaration enables agent traceability and compositional verification.",
      keyPoints: [
        "Stage 0 Represent: z = R(x) — transform to representation space",
        "Stage 1 Discriminate: s = Φ(z) — apply criterion",
        "Stage 2 Select/Partition: y = Γ(s) — apply partition rule",
        "Stage 3 Compose/Reconstruct: x̂ = C(y,z) — optional",
        "Mandatory declaration: mode + R operator (Identity valid for direct selection)",
      ],
      tags: ["Staged Interface", "Four Stages", "Pipeline", "Contractual Structure"],
    },
    fa: {
      title: "رابط مرحله‌ای جهانی",
      narrative: "همه فیلترها با یک pipeline چهار مرحله‌ای مطابقت دارند، هرچند برخی مراحل ممکن است عملیات هویت باشند. مرحله ۰ (بازنمایی): z = R(x). مرحله ۱ (تمایز): s = Φ(z). مرحله ۲ (انتخاب/افراز): y = Γ(s). مرحله ۳ (ترکیب/بازسازی): x̂ = C(y,z) — اختیاری.",
      strategic: "رابط مرحله‌ای یک ساختار قراردادی بین اجزای فیلتر اعمال می‌کند. برای انتخاب مستقیم، R = هویت و مرحله ۳ حذف می‌شود. برای فیلترهای مبتنی بر تجزیه، R باید مشخص شود (FFT، موجک، هرم، فضای ویژه، embedding، سفیدسازی) به همراه وضعیت برگشت‌پذیری و عملگر بازسازی C.",
      keyPoints: [
        "مرحله ۰ بازنمایی: z = R(x)",
        "مرحله ۱ تمایز: s = Φ(z)",
        "مرحله ۲ انتخاب/افراز: y = Γ(s)",
        "مرحله ۳ ترکیب/بازسازی: x̂ = C(y,z) — اختیاری",
        "اعلام اجباری: حالت + عملگر R",
      ],
      tags: ["رابط مرحله‌ای", "چهار مرحله", "pipeline", "ساختار قراردادی"],
    },
  },
  {
    id: 4, act: "Foundation", actLabel: ACT_LABELS_A.Foundation, imageUrl: imgA(4),
    en: {
      title: "Atom-Resolved Separation for Agent Workflows",
      narrative: "In compositional state systems (e.g., Jotai), an agent rarely acts on an undifferentiated monolith. The decomposition stage produces an address space of ultimate objects called atoms. An atom is the terminal unit of action: R(X) = {(aᵢ, zᵢ)}ᵢ₌₁ᵐ where aᵢ is an atom identifier and zᵢ is the extracted value. The primary deliverable for decomposition-based separation is the Atom Patch Set ∆ = {(aᵢ, δᵢ) : yᵢ = accept}.",
      strategic: "Atom-Scoped Precision Invariant: A filter output ∆ is completely precise iff applying ∆ modifies only the addressed atoms referenced in ∆, and leaves all other atoms unchanged. DirectSelection may operate on a composite view and emit a coarse decision, but must still resolve to an atom patch set ∆ to preserve traceability. DecompositionBased explicitly constructs R(X) and emits ∆ with fine-grained atom scope.",
      keyPoints: [
        "Atom: terminal unit of action with identifier aᵢ and value zᵢ",
        "R(X) = {(aᵢ, zᵢ)} — atom-addressed decomposition output",
        "Atom Patch Set ∆ = {(aᵢ, δᵢ) : yᵢ = accept} — primary deliverable",
        "Precision Invariant: ∆ modifies only addressed atoms, leaves others unchanged",
        "Enables partial updates, selective masking, staged multi-tier pipelines",
      ],
      tags: ["Atom", "Jotai", "Patch Set", "Precision Invariant", "Agent Workflow"],
    },
    fa: {
      title: "جداسازی اتم‌محور برای گردش‌کار agent",
      narrative: "در سیستم‌های حالت ترکیبی (مانند Jotai)، یک agent به ندرت روی یک monolith یکپارچه عمل می‌کند. مرحله تجزیه یک فضای آدرس از اشیاء نهایی به نام اتم‌ها تولید می‌کند. اتم واحد نهایی عمل است: R(X) = {(aᵢ, zᵢ)}. تحویل اصلی برای جداسازی مبتنی بر تجزیه مجموعه وصله اتم است: ∆ = {(aᵢ, δᵢ) : yᵢ = accept}.",
      strategic: "اصل دقت اتم‌محور: خروجی فیلتر ∆ کاملاً دقیق است اگر و تنها اگر اعمال ∆ فقط اتم‌های آدرس‌داده‌شده را تغییر دهد و همه اتم‌های دیگر را بدون تغییر بگذارد. این اصل به‌روزرسانی‌های جزئی، پوشش‌دهی انتخابی، و pipeline‌های چندلایه مرحله‌ای را بدون تجسم یا بازنویسی کل شیء ترکیبی ممکن می‌سازد.",
      keyPoints: [
        "اتم: واحد نهایی عمل با شناسه aᵢ و مقدار zᵢ",
        "R(X) = {(aᵢ, zᵢ)} — خروجی تجزیه اتم‌محور",
        "مجموعه وصله اتم ∆ = {(aᵢ, δᵢ) : yᵢ = accept} — تحویل اصلی",
        "اصل دقت: ∆ فقط اتم‌های آدرس‌داده‌شده را تغییر می‌دهد",
        "به‌روزرسانی‌های جزئی، پوشش‌دهی انتخابی، pipeline‌های چندلایه",
      ],
      tags: ["اتم", "Jotai", "مجموعه وصله", "اصل دقت", "گردش‌کار agent"],
    },
  },
  {
    id: 5, act: "Taxonomy", actLabel: ACT_LABELS_A.Taxonomy, imageUrl: imgA(5),
    en: {
      title: "10-Path Taxonomy: Direct Selection Paths (1, 2, 3, 5, 7, 10)",
      narrative: "Six of the ten paths use DirectSelection mode. Path 1 (Stencil): Φ(x) = 1[x ∈ P], spatial pattern, output mask, primary failure: pattern misalignment. Path 2 (Sieve): Φ(e) = g(p(e)), property threshold, output subset, primary failure: clogging/blinding. Path 3 (Grid Mask): Φ(i) = 1[r(i)=1], cell rule, output labels, primary failure: aliasing. Path 5 (Temporal Gate): Φ(t) = 1[t ∈ W], time aperture, primary failure: timing jitter. Path 7 (Probabilistic Sampler): Φ(e) = π(e), inclusion probability, primary failure: sampling bias. Path 10 (Field Gradient Selector): Φ(x) = ‖∇f(x)‖, derivative feature, primary failure: noise sensitivity.",
      strategic: "Selection guidance: Stencil for fixed spatial patterns; Sieve for single-property threshold flows; Grid Mask for discretized domains with cell rules; Temporal Gate when timing defines selection; Probabilistic Sampler when representativeness is required; Field Gradient Selector when edges/ridges matter. Avoid Sieve when multi-property coupling exists; avoid Field Gradient Selector when noise is high without smoothing.",
      keyPoints: [
        "Path 1 Stencil: spatial pattern matching, output mask",
        "Path 2 Sieve: property threshold, output subset/fractions",
        "Path 3 Grid Mask: cell rule on discretized domain, output labels",
        "Path 5 Temporal Gate: time aperture, output selected events",
        "Path 7 Probabilistic Sampler: inclusion probability, output sampled set",
        "Path 10 Field Gradient Selector: derivative feature, output features/mask",
      ],
      tags: ["10-Path", "DirectSelection", "Stencil", "Sieve", "Grid Mask", "Temporal Gate"],
    },
    fa: {
      title: "طبقه‌بندی ۱۰ مسیره: مسیرهای انتخاب مستقیم (۱، ۲، ۳، ۵، ۷، ۱۰)",
      narrative: "شش مسیر از ده مسیر از حالت انتخاب مستقیم استفاده می‌کنند. مسیر ۱ (Stencil): Φ(x) = 1[x ∈ P]، الگوی فضایی، خروجی ماسک. مسیر ۲ (Sieve): Φ(e) = g(p(e))، آستانه ویژگی، خروجی زیرمجموعه. مسیر ۳ (Grid Mask): Φ(i) = 1[r(i)=1]، قانون سلول. مسیر ۵ (Temporal Gate): Φ(t) = 1[t ∈ W]، دریچه زمانی. مسیر ۷ (Probabilistic Sampler): Φ(e) = π(e)، احتمال گنجاندن. مسیر ۱۰ (Field Gradient Selector): Φ(x) = ‖∇f(x)‖، ویژگی مشتق.",
      strategic: "راهنمای انتخاب: Stencil برای الگوهای فضایی ثابت؛ Sieve برای جریان‌های آستانه تک‌ویژگی؛ Grid Mask برای دامنه‌های گسسته با قوانین سلولی؛ Temporal Gate وقتی زمان‌بندی انتخاب را تعریف می‌کند؛ Probabilistic Sampler وقتی نمایندگی لازم است؛ Field Gradient Selector وقتی لبه‌ها/ستیغ‌ها مهم هستند.",
      keyPoints: [
        "مسیر ۱ Stencil: تطابق الگوی فضایی، خروجی ماسک",
        "مسیر ۲ Sieve: آستانه ویژگی، خروجی زیرمجموعه",
        "مسیر ۳ Grid Mask: قانون سلول در دامنه گسسته",
        "مسیر ۵ Temporal Gate: دریچه زمانی، خروجی رویدادهای انتخاب‌شده",
        "مسیر ۷ Probabilistic Sampler: احتمال گنجاندن",
        "مسیر ۱۰ Field Gradient Selector: ویژگی مشتق",
      ],
      tags: ["۱۰ مسیر", "انتخاب مستقیم", "Stencil", "Sieve", "Grid Mask"],
    },
  },
  {
    id: 6, act: "Taxonomy", actLabel: ACT_LABELS_A.Taxonomy, imageUrl: imgA(6),
    en: {
      title: "10-Path Taxonomy: Decomposition-Based Paths (4, 6, 8, 9)",
      narrative: "Four paths use DecompositionBased mode with explicit representation stages. Path 4 (Spectral Filter): R = FFT/wavelet, Φ(ω) = H(ω) frequency response, output filtered signal, primary failure: leakage/ringing. Path 6 (Phase Space Classifier): R = embed/whiten, Φ(x) = s(x;θ) multivariate score, output scores/labels, primary failure: overfit/curse-of-dimensionality. Path 8 (Hierarchical Aggregator): R = pyramid/wavelet, Φ(x,ℓ) scale significance, output pyramid/LOD, primary failure: over/under-smooth. Path 9 (Topological Sorter): R = Laplacian eigenspace, Φ(G) = c(v) community membership, output partitions, primary failure: unstable clusters.",
      strategic: "Spectral Filter for stationary signals where spectral separation is key. Phase Space Classifier (LDA) for supervised separation of labeled multivariate data — the primary focus of this deck. Hierarchical Aggregator for scalable multi-resolution detail control. Topological Sorter when graph structure drives selection. All four require explicit specification of R, invertibility, and reconstruction operator C.",
      keyPoints: [
        "Path 4 Spectral Filter: FFT/wavelet R, frequency response Φ, filtered signal output",
        "Path 6 Phase Space Classifier: embed/whiten R, multivariate score Φ — LDA",
        "Path 8 Hierarchical Aggregator: pyramid R, scale significance Φ",
        "Path 9 Topological Sorter: Laplacian eigenspace R, community membership Φ",
        "All four: decompose→select→(optional) reconstruct pipeline",
      ],
      tags: ["10-Path", "DecompositionBased", "Spectral Filter", "LDA", "Path 6"],
    },
    fa: {
      title: "طبقه‌بندی ۱۰ مسیره: مسیرهای مبتنی بر تجزیه (۴، ۶، ۸، ۹)",
      narrative: "چهار مسیر از حالت مبتنی بر تجزیه با مراحل بازنمایی صریح استفاده می‌کنند. مسیر ۴ (فیلتر طیفی): R = FFT/موجک، Φ(ω) = H(ω) پاسخ فرکانسی. مسیر ۶ (طبقه‌بند فضای فاز): R = embedding/سفیدسازی، Φ(x) = s(x;θ) امتیاز چندمتغیره — LDA. مسیر ۸ (تجمیع‌کننده سلسله‌مراتبی): R = هرم/موجک. مسیر ۹ (مرتب‌کننده توپولوژیکی): R = فضای ویژه Laplacian.",
      strategic: "فیلتر طیفی برای سیگنال‌های ساکن که جداسازی طیفی کلیدی است. طبقه‌بند فضای فاز (LDA) برای جداسازی نظارت‌شده داده‌های چندمتغیره برچسب‌دار — تمرکز اصلی این deck. تجمیع‌کننده سلسله‌مراتبی برای کنترل جزئیات چندوضوحیتی مقیاس‌پذیر.",
      keyPoints: [
        "مسیر ۴ فیلتر طیفی: R = FFT/موجک، Φ = پاسخ فرکانسی",
        "مسیر ۶ طبقه‌بند فضای فاز: R = embedding/سفیدسازی — LDA",
        "مسیر ۸ تجمیع‌کننده سلسله‌مراتبی: R = هرم، Φ = اهمیت مقیاس",
        "مسیر ۹ مرتب‌کننده توپولوژیکی: R = فضای ویژه Laplacian",
        "همه چهار: pipeline تجزیه→انتخاب→(اختیاری) بازسازی",
      ],
      tags: ["۱۰ مسیر", "مبتنی بر تجزیه", "فیلتر طیفی", "LDA", "مسیر ۶"],
    },
  },
  {
    id: 7, act: "Taxonomy", actLabel: ACT_LABELS_A.Taxonomy, imageUrl: imgA(7),
    en: {
      title: "Separation Mechanisms Table",
      narrative: "Each path has a characteristic separation geometry, selectivity signal proxy, fidelity proxy, computational footprint, and stage form. Path 1: geometric mask, edge transition width, defect rate, low footprint. Path 4: bandpass/stop, transition width + stopband attenuation, ripple/phase error, high footprint (FFT). Path 6: linear/quadratic/kernel regions, margin/entropy/Mahalanobis distance, calibration/misclass cost, medium-high footprint. Path 9: graph cut/cluster, modularity/conductance/N-cut, stability under perturbation, high footprint.",
      strategic: "The selectivity signal proxy is the key diagnostic: for Path 6 (LDA), the Mahalanobis distance between classes measures sharpness of separation. Fisher criterion value J(w) = wᵀS_B w / wᵀS_W w quantifies this. Eigenvalues λᵢ of S_W⁻¹S_B measure discriminative power of each direction. High λ₁ indicates strong class separation in the first discriminant direction.",
      keyPoints: [
        "Path 6 geometry: linear/quadratic/kernel decision regions",
        "Path 6 selectivity: margin, entropy, Mahalanobis distance d²_kj",
        "Path 6 fidelity: calibration error, misclassification cost",
        "Path 6 footprint: medium-high O(np² + p³) training, O(Kp) prediction",
        "Stage form: decompose→select (with optional reconstruct for dim reduction)",
      ],
      tags: ["Separation Mechanisms", "Table B", "Mahalanobis", "Fisher Criterion"],
    },
    fa: {
      title: "جدول مکانیزم‌های جداسازی",
      narrative: "هر مسیر دارای هندسه جداسازی مشخص، پروکسی سیگنال انتخابی، پروکسی وفاداری، ردپای محاسباتی، و شکل مرحله است. مسیر ۱: ماسک هندسی، عرض انتقال لبه. مسیر ۴: باند‌گذر/توقف، عرض انتقال + تضعیف باند توقف. مسیر ۶: نواحی خطی/درجه دوم/kernel، حاشیه/آنتروپی/فاصله Mahalanobis. مسیر ۹: برش گراف/خوشه، modularity/conductance.",
      strategic: "پروکسی سیگنال انتخابی تشخیص کلیدی است: برای مسیر ۶ (LDA)، فاصله Mahalanobis بین کلاس‌ها تیزی جداسازی را اندازه می‌گیرد. معیار Fisher J(w) = wᵀS_B w / wᵀS_W w این را کمی می‌کند. مقادیر ویژه λᵢ از S_W⁻¹S_B قدرت تمایزدهی هر جهت را اندازه می‌گیرند.",
      keyPoints: [
        "هندسه مسیر ۶: نواحی تصمیم خطی/درجه دوم/kernel",
        "انتخابی مسیر ۶: حاشیه، آنتروپی، فاصله Mahalanobis d²_kj",
        "وفاداری مسیر ۶: خطای کالیبراسیون، هزینه طبقه‌بندی اشتباه",
        "ردپای مسیر ۶: متوسط-بالا O(np² + p³) آموزش",
        "شکل مرحله: تجزیه→انتخاب",
      ],
      tags: ["مکانیزم‌های جداسازی", "جدول B", "Mahalanobis", "معیار Fisher"],
    },
  },
  {
    id: 8, act: "Taxonomy", actLabel: ACT_LABELS_A.Taxonomy, imageUrl: imgA(8),
    en: {
      title: "Agent Selection Defaults",
      narrative: "Table C provides practical guidance for agents choosing among the 10 paths. Best-fit regime, prefer-when conditions, avoid-when conditions, and minimal verification test for each path. Path 6 (Phase Space Classifier): best for supervised separation of labeled multivariate data. Prefer when labeled data is available and drift is manageable. Avoid when data drift is unmanaged or labels are unavailable. Minimal verification: holdout + calibration test.",
      strategic: "Key avoid-when conditions: Path 2 (Sieve) — avoid when multi-property coupling exists. Path 4 (Spectral Filter) — avoid for nonstationary signals without windowing. Path 6 (LDA) — avoid when data drift is unmanaged. Path 8 (Hierarchical Aggregator) — avoid when boundary artifacts are intolerable. Path 9 (Topological Sorter) — avoid for dense/noisy graphs. These conditions guide agent path selection under constraints.",
      keyPoints: [
        "Path 6: best for supervised labeled multivariate data",
        "Path 6 prefer: labeled data available, drift manageable",
        "Path 6 avoid: unmanaged drift, no labels",
        "Path 6 minimal verification: holdout + calibration test",
        "Table C: complete selection guidance for all 10 paths",
      ],
      tags: ["Agent Selection", "Table C", "Path Selection", "Verification"],
    },
    fa: {
      title: "پیش‌فرض‌های انتخاب agent",
      narrative: "جدول C راهنمایی عملی برای agent‌هایی که از بین ۱۰ مسیر انتخاب می‌کنند ارائه می‌دهد. رژیم بهترین تطابق، شرایط ترجیح، شرایط اجتناب، و آزمون تأیید حداقلی برای هر مسیر. مسیر ۶ (طبقه‌بند فضای فاز): بهترین برای جداسازی نظارت‌شده داده‌های چندمتغیره برچسب‌دار. ترجیح وقتی داده‌های برچسب‌دار موجود است و drift قابل مدیریت است.",
      strategic: "شرایط اجتناب کلیدی: مسیر ۲ — از چندین ویژگی جفت‌شده اجتناب کنید. مسیر ۴ — برای سیگنال‌های غیرساکن بدون windowing اجتناب کنید. مسیر ۶ — وقتی drift داده مدیریت نشده است اجتناب کنید. مسیر ۸ — وقتی آرتیفکت‌های مرزی غیرقابل تحمل هستند اجتناب کنید.",
      keyPoints: [
        "مسیر ۶: بهترین برای داده‌های چندمتغیره برچسب‌دار نظارت‌شده",
        "مسیر ۶ ترجیح: داده‌های برچسب‌دار موجود، drift قابل مدیریت",
        "مسیر ۶ اجتناب: drift مدیریت‌نشده، بدون برچسب",
        "مسیر ۶ تأیید حداقلی: holdout + آزمون کالیبراسیون",
        "جدول C: راهنمای کامل انتخاب برای همه ۱۰ مسیر",
      ],
      tags: ["انتخاب agent", "جدول C", "انتخاب مسیر", "تأیید"],
    },
  },
  {
    id: 9, act: "Composition", actLabel: ACT_LABELS_A.Composition, imageUrl: imgA(9),
    en: {
      title: "Composition Algebra: Serial Pipelines",
      narrative: "Filters can be combined into more complex systems. Serial composition F₂ ∘ F₁: x →F₁→ y₁ →F₂→ y₂. Requirements: (1) Declare order sensitivity — is F₂∘F₁ ≠ F₁∘F₂? (2) Interface types must match — output of F₁ must be acceptable input to F₂. (3) Track accumulated loss: loss_total = loss_F1 + loss_F2 (if additive). (4) Verify constraint propagation: if F₁ has latency τ₁ and F₂ has τ₂, pipeline latency ≤ τ₁ + τ₂.",
      strategic: "Atom-resolved composition rule (MANDATORY for multi-stage pipelines): Every multi-stage pipeline must define the atom scope boundary between stages — whether stages share the same atom address space, or whether a stage changes the address space (and how the mapping is defined). Each stage must report its input object type, whether it emits an intermediate representation or an atom patch set ∆, and how its output is consumed by the next stage.",
      keyPoints: [
        "Serial: F₂ ∘ F₁, x→F₁→y₁→F₂→y₂",
        "Declare order sensitivity: F₂∘F₁ ≠ F₁∘F₂?",
        "Interface types must match between stages",
        "Accumulated loss: loss_total = loss_F1 + loss_F2",
        "Atom scope boundary between stages is MANDATORY",
      ],
      tags: ["Composition", "Serial Pipeline", "Atom Scope", "Latency"],
    },
    fa: {
      title: "جبر ترکیب: pipeline‌های سری",
      narrative: "فیلترها می‌توانند در سیستم‌های پیچیده‌تر ترکیب شوند. ترکیب سری F₂ ∘ F₁: x →F₁→ y₁ →F₂→ y₂. الزامات: (۱) اعلام حساسیت به ترتیب. (۲) انواع رابط باید مطابقت داشته باشند. (۳) ردیابی اتلاف انباشته: loss_total = loss_F1 + loss_F2. (۴) تأیید انتشار قید: تأخیر pipeline ≤ τ₁ + τ₂.",
      strategic: "قانون ترکیب اتم‌محور (اجباری برای pipeline‌های چندمرحله‌ای): هر pipeline چندمرحله‌ای باید مرز محدوده اتم بین مراحل را تعریف کند. هر مرحله باید نوع شیء ورودی خود، اینکه آیا یک بازنمایی میانی یا مجموعه وصله اتم ∆ تولید می‌کند، و اینکه خروجی آن توسط مرحله بعدی چگونه مصرف می‌شود را گزارش دهد.",
      keyPoints: [
        "سری: F₂ ∘ F₁، x→F₁→y₁→F₂→y₂",
        "اعلام حساسیت به ترتیب: F₂∘F₁ ≠ F₁∘F₂؟",
        "انواع رابط باید بین مراحل مطابقت داشته باشند",
        "اتلاف انباشته: loss_total = loss_F1 + loss_F2",
        "مرز محدوده اتم بین مراحل اجباری است",
      ],
      tags: ["ترکیب", "pipeline سری", "محدوده اتم", "تأخیر"],
    },
  },
  {
    id: 10, act: "Composition", actLabel: ACT_LABELS_A.Composition, imageUrl: imgA(10),
    en: {
      title: "Composition Algebra: Parallel Ensembles and Gating",
      narrative: "Parallel composition Combine(F₁,F₂,...,Fₘ): x → {y₁,...,yₘ} → rule → y. Requirements: declare combination rule (union, intersection, weighted voting, stacking), specify weights and how they are obtained, verify diversity of base filters. Gating (conditional composition): route to F₁ if condition C holds, else F₂. Requirements: declare routing condition, fallback path, gating overhead. All compositions must file a traceability report.",
      strategic: "Standard agent deliverables from filter compositions: Gate decision (yes/no) for branching/routing. Mask over representation for binary/weighted masking in representation space. Scores/labels for per-element rankings. Atom Patch Set ∆ as the primary deliverable for decomposition-based separation with precision guarantees. Audit report for reproducibility and review. These deliverables form the contractual interface between filter compositions and downstream agents.",
      keyPoints: [
        "Parallel: Combine(F₁,...,Fₘ), declare combination rule",
        "Combination rules: union, intersection, weighted voting, stacking",
        "Verify diversity of base filters (different paths or knob settings)",
        "Gating: conditional routing, declare routing condition and fallback",
        "Standard deliverables: gate decision, mask, scores/labels, ∆, audit report",
      ],
      tags: ["Composition", "Parallel Ensemble", "Gating", "Deliverables"],
    },
    fa: {
      title: "جبر ترکیب: ensemble‌های موازی و gating",
      narrative: "ترکیب موازی Combine(F₁,F₂,...,Fₘ): x → {y₁,...,yₘ} → قانون → y. الزامات: اعلام قانون ترکیب (اتحاد، تقاطع، رأی‌گیری وزن‌دار، stacking)، مشخص کردن وزن‌ها، تأیید تنوع فیلترهای پایه. Gating (ترکیب شرطی): مسیریابی به F₁ اگر شرط C برقرار باشد، در غیر این صورت F₂.",
      strategic: "تحویل‌های استاندارد agent از ترکیب فیلترها: تصمیم gate (بله/خیر) برای انشعاب/مسیریابی. ماسک روی بازنمایی. امتیازات/برچسب‌ها برای رتبه‌بندی‌های عنصر به عنصر. مجموعه وصله اتم ∆ به عنوان تحویل اصلی برای جداسازی مبتنی بر تجزیه. گزارش حسابرسی برای تکرارپذیری.",
      keyPoints: [
        "موازی: Combine(F₁,...,Fₘ)، اعلام قانون ترکیب",
        "قوانین ترکیب: اتحاد، تقاطع، رأی‌گیری وزن‌دار، stacking",
        "تأیید تنوع فیلترهای پایه",
        "Gating: مسیریابی شرطی، اعلام شرط مسیریابی و fallback",
        "تحویل‌های استاندارد: تصمیم gate، ماسک، امتیازات، ∆، گزارش حسابرسی",
      ],
      tags: ["ترکیب", "ensemble موازی", "gating", "تحویل‌ها"],
    },
  },
  {
    id: 11, act: "Composition", actLabel: ACT_LABELS_A.Composition, imageUrl: imgA(11),
    en: {
      title: "Agent Traceability Framework",
      narrative: "Every deployed filter must provide a mandatory traceability report with eight sections. A: Context (objective, input type, constraints, known hazards). B: Candidate Set (paths considered, hybrid compositions). C: Separation Mode Declaration — MANDATORY (mode, R operator, invertibility, reconstruction C). D: Decision Path (discrimination basis, representation stage, selection geometry, fabrication, regularization, operating regime, optimization form). E: Selected Filter Specification (path IDs, knob settings, outputs, composition operator). F: Verification & Diagnostics. G: Reproducibility. H: Atom Scope — MANDATORY.",
      strategic: "Section H (Atom Scope) is mandatory for compositional state systems: define atom identifier address space, decomposition operator R used to produce atom-resolved parts, patch semantics (replace/merge/annotate/mask), and explicitly confirm the Atom-Scoped Precision Invariant holds (or list exceptions). The Decision Log Table records each step with evidence, rule invoked, choice, risk note, affected atom set, patch type, and rollback strategy.",
      keyPoints: [
        "Eight mandatory sections: Context, Candidates, Mode Declaration, Decision Path",
        "Selected Spec, Verification, Reproducibility, Atom Scope",
        "Section C: Separation Mode Declaration is MANDATORY",
        "Section H: Atom Scope is MANDATORY for compositional state",
        "Decision Log Table: evidence, rule, choice, risk, atom set, patch type, rollback",
      ],
      tags: ["Traceability", "Audit", "Atom Scope", "Decision Log"],
    },
    fa: {
      title: "چارچوب ردیابی agent",
      narrative: "هر فیلتر مستقر‌شده باید یک گزارش ردیابی اجباری با هشت بخش ارائه دهد. الف: زمینه (هدف، نوع ورودی، قیود، خطرات شناخته‌شده). ب: مجموعه کاندیدا. ج: اعلام حالت جداسازی — اجباری. د: مسیر تصمیم. ه: مشخصات فیلتر انتخاب‌شده. و: تأیید و تشخیص. ز: تکرارپذیری. ح: محدوده اتم — اجباری.",
      strategic: "بخش ح (محدوده اتم) برای سیستم‌های حالت ترکیبی اجباری است: تعریف فضای آدرس شناسه اتم، عملگر تجزیه R، معناشناسی وصله (جایگزینی/ادغام/حاشیه‌نویسی/ماسک)، و تأیید صریح اصل دقت اتم‌محور.",
      keyPoints: [
        "هشت بخش اجباری: زمینه، کاندیداها، اعلام حالت، مسیر تصمیم",
        "مشخصات انتخاب‌شده، تأیید، تکرارپذیری، محدوده اتم",
        "بخش ج: اعلام حالت جداسازی اجباری است",
        "بخش ح: محدوده اتم برای حالت ترکیبی اجباری است",
        "جدول گزارش تصمیم: شواهد، قانون، انتخاب، ریسک، مجموعه اتم، نوع وصله",
      ],
      tags: ["ردیابی", "حسابرسی", "محدوده اتم", "گزارش تصمیم"],
    },
  },
  {
    id: 12, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(12),
    en: {
      title: "LDA as Path 6: The Canonical Instantiation",
      narrative: "Linear Discriminant Analysis is a perfect instantiation of Path 6 (Phase Space Classifier). Mapping 5.1: Domain = ℝᵖ with labeled observations {(xᵢ,yᵢ)}ⁿᵢ₌₁, yᵢ ∈ {1,...,K}. Separation Mode = DecompositionBased (because of the explicit whitening step). Representation R: Mahalanobis whitening z = Σ⁻¹/²x. Criterion Φ: Fisher ratio (geometric) or log-posterior δₖ(x) (probabilistic). Partition Γ: ŷ = argmax_k δₖ(x). Substrate: MLE parameters {µₖ, Σ, πₖ}.",
      strategic: "Primary knobs: model type (LDA/QDA/RDA), regularization λ, dimension reduction d ≤ K−1, priors, robust estimation. Outputs: scores δₖ(x), labels ŷ, posterior probabilities p(y=k|x), confidence (margin/entropy). Selectivity: Mahalanobis distance between classes, Fisher ratio λ₁. Fidelity: classification accuracy, calibration error. Failure modes: overfitting (p ≈ n), curse of dimensionality (p ≫ n), assumption violations (non-Gaussian, heteroscedastic), outliers.",
      keyPoints: [
        "LDA = Path 6 (Phase Space Classifier) instantiation",
        "Domain: ℝᵖ with labeled observations, K classes",
        "Mode: DecompositionBased — explicit Mahalanobis whitening R",
        "Criterion: Fisher ratio OR log-posterior δₖ(x) (dual views)",
        "Partition: ŷ = argmax_k δₖ(x); decision boundaries are hyperplanes",
      ],
      tags: ["LDA", "Path 6", "Phase Space Classifier", "Mahalanobis", "Whitening"],
    },
    fa: {
      title: "LDA به عنوان مسیر ۶: نمونه‌سازی متعارف",
      narrative: "تحلیل تمایز خطی یک نمونه‌سازی کامل از مسیر ۶ (طبقه‌بند فضای فاز) است. نگاشت ۵.۱: دامنه = ℝᵖ با مشاهدات برچسب‌دار {(xᵢ,yᵢ)}. حالت جداسازی = مبتنی بر تجزیه (به دلیل مرحله سفیدسازی صریح). بازنمایی R: سفیدسازی Mahalanobis z = Σ⁻¹/²x. معیار Φ: نسبت Fisher یا log-posterior δₖ(x). افراز Γ: ŷ = argmax_k δₖ(x).",
      strategic: "کنترل‌های اصلی: نوع مدل (LDA/QDA/RDA)، منظم‌سازی λ، کاهش بعد d ≤ K−1، پیش‌فرض‌ها، تخمین مقاوم. خروجی‌ها: امتیازات δₖ(x)، برچسب‌ها ŷ، احتمالات پسین p(y=k|x)، اطمینان (حاشیه/آنتروپی). حالت‌های شکست: overfitting (p ≈ n)، لعنت ابعاد (p ≫ n).",
      keyPoints: [
        "LDA = نمونه‌سازی مسیر ۶ (طبقه‌بند فضای فاز)",
        "دامنه: ℝᵖ با مشاهدات برچسب‌دار، K کلاس",
        "حالت: مبتنی بر تجزیه — سفیدسازی Mahalanobis صریح R",
        "معیار: نسبت Fisher یا log-posterior δₖ(x)",
        "افراز: ŷ = argmax_k δₖ(x)؛ مرزهای تصمیم هایپرپلان هستند",
      ],
      tags: ["LDA", "مسیر ۶", "طبقه‌بند فضای فاز", "Mahalanobis", "سفیدسازی"],
    },
  },
  {
    id: 13, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(13),
    en: {
      title: "Four-Stage Decomposition of LDA",
      narrative: "LDA maps exactly onto the four-stage universal interface. Stage 0 (Represent): z = Σ⁻¹/²x — Mahalanobis whitening transforms the feature space so that within-class scatter becomes identity. Stage 1 (Discriminate): δₖ(x) = zᵀΣ⁻¹/²µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ — log-posterior discriminant function, linear in x. Stage 2 (Select): ŷ = argmax_k δₖ(x) — assign to class with highest discriminant. Stage 3 (optional): reduce to d dimensions z_red = WᵀX, W = [w₁···w_d].",
      strategic: "Training cost: O(np² + p³). Covariance computation: O(np²). Matrix inversion: O(p³). Prediction per sample: O(Kp). Discriminant evaluation: O(p) per class. Memory: O(Kp + p²). Parameters: Kp (means) + p(p+1)/2 (covariance) + K (priors). The whitening step is what makes LDA a DecompositionBased filter — without it, the nearest-centroid classifier would be DirectSelection.",
      keyPoints: [
        "Stage 0: z = Σ⁻¹/²x — Mahalanobis whitening",
        "Stage 1: δₖ(x) = zᵀΣ⁻¹/²µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ",
        "Stage 2: ŷ = argmax_k δₖ(x)",
        "Stage 3 (optional): z_red = WᵀX for dimensionality reduction",
        "Training O(np² + p³), prediction O(Kp)",
      ],
      tags: ["LDA", "Four Stages", "Whitening", "Discriminant Function", "Complexity"],
    },
    fa: {
      title: "تجزیه چهار مرحله‌ای LDA",
      narrative: "LDA دقیقاً روی رابط چهار مرحله‌ای جهانی نگاشت می‌شود. مرحله ۰ (بازنمایی): z = Σ⁻¹/²x — سفیدسازی Mahalanobis فضای ویژگی را تبدیل می‌کند. مرحله ۱ (تمایز): δₖ(x) = zᵀΣ⁻¹/²µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ. مرحله ۲ (انتخاب): ŷ = argmax_k δₖ(x). مرحله ۳ (اختیاری): کاهش به d بعد z_red = WᵀX.",
      strategic: "هزینه آموزش: O(np² + p³). محاسبه کوواریانس: O(np²). معکوس ماتریس: O(p³). پیش‌بینی هر نمونه: O(Kp). حافظه: O(Kp + p²). پارامترها: Kp (میانگین‌ها) + p(p+1)/2 (کوواریانس) + K (پیش‌فرض‌ها).",
      keyPoints: [
        "مرحله ۰: z = Σ⁻¹/²x — سفیدسازی Mahalanobis",
        "مرحله ۱: δₖ(x) = zᵀΣ⁻¹/²µₖ − ½µₖᵀΣ⁻¹µₖ + log πₖ",
        "مرحله ۲: ŷ = argmax_k δₖ(x)",
        "مرحله ۳ (اختیاری): z_red = WᵀX برای کاهش بعد",
        "آموزش O(np² + p³)، پیش‌بینی O(Kp)",
      ],
      tags: ["LDA", "چهار مرحله", "سفیدسازی", "تابع تمایز", "پیچیدگی"],
    },
  },
  {
    id: 14, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(14),
    en: {
      title: "Fisher's Criterion and Scatter Matrices",
      narrative: "Fisher's discriminant criterion seeks projection directions that maximize the ratio of between-class to within-class variance. Between-class scatter: S_B = Σₖ nₖ(µₖ−µ)(µₖ−µ)ᵀ. Within-class scatter: S_W = Σₖ Σᵢ:yᵢ=k (xᵢ−µₖ)(xᵢ−µₖ)ᵀ. Optimization: w* = argmax_w wᵀS_B w / wᵀS_W w. Solution: generalized eigenvalue problem S_W⁻¹S_B w = λw. Maximum discriminant directions: d_max = min(K−1, p).",
      strategic: "Connection to t-test (binary case): Fisher's LDA projection maximizes the squared t-statistic t² = (wᵀµ₁ − wᵀµ₂)² / wᵀS_W w. This reveals LDA as the optimal univariate projection for binary classification under Gaussian assumptions. For K ≥ 2 classes, eigenvalues λ₁ ≥ λ₂ ≥ ... ≥ λ_{K-1} measure discriminative power of each direction. The projection matrix W = [w₁ w₂ ... w_d] provides supervised dimensionality reduction.",
      keyPoints: [
        "S_B = Σₖ nₖ(µₖ−µ)(µₖ−µ)ᵀ — between-class scatter",
        "S_W = Σₖ Σᵢ:yᵢ=k (xᵢ−µₖ)(xᵢ−µₖ)ᵀ — within-class scatter",
        "Objective: maximize J(w) = wᵀS_B w / wᵀS_W w",
        "Solution: S_W⁻¹S_B w = λw (generalized eigenvalue problem)",
        "d_max = min(K−1, p) meaningful discriminant directions",
      ],
      tags: ["Fisher Criterion", "Scatter Matrices", "Eigenvalue Problem", "Dimensionality Reduction"],
    },
    fa: {
      title: "معیار Fisher و ماتریس‌های پراکندگی",
      narrative: "معیار تمایز Fisher جهت‌های تصویر را می‌جوید که نسبت واریانس بین کلاسی به درون کلاسی را بیشینه می‌کند. پراکندگی بین کلاسی: S_B = Σₖ nₖ(µₖ−µ)(µₖ−µ)ᵀ. پراکندگی درون کلاسی: S_W = Σₖ Σᵢ:yᵢ=k (xᵢ−µₖ)(xᵢ−µₖ)ᵀ. بهینه‌سازی: w* = argmax_w wᵀS_B w / wᵀS_W w. حل: مسئله مقدار ویژه تعمیم‌یافته S_W⁻¹S_B w = λw.",
      strategic: "ارتباط با آزمون t (حالت دوتایی): تصویر LDA Fisher آماره t مربع را بیشینه می‌کند: t² = (wᵀµ₁ − wᵀµ₂)² / wᵀS_W w. این LDA را به عنوان بهینه‌ترین تصویر تک‌متغیره برای طبقه‌بندی دوتایی تحت فرضیات گاوسی نشان می‌دهد.",
      keyPoints: [
        "S_B = Σₖ nₖ(µₖ−µ)(µₖ−µ)ᵀ — پراکندگی بین کلاسی",
        "S_W = Σₖ Σᵢ:yᵢ=k (xᵢ−µₖ)(xᵢ−µₖ)ᵀ — پراکندگی درون کلاسی",
        "هدف: بیشینه کردن J(w) = wᵀS_B w / wᵀS_W w",
        "حل: S_W⁻¹S_B w = λw (مسئله مقدار ویژه تعمیم‌یافته)",
        "d_max = min(K−1, p) جهت تمایز معنادار",
      ],
      tags: ["معیار Fisher", "ماتریس‌های پراکندگی", "مسئله مقدار ویژه", "کاهش بعد"],
    },
  },
  {
    id: 15, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(15),
    en: {
      title: "Generative View and Criterion Equivalence",
      narrative: "Under the generative view, LDA assumes class-conditional Gaussianity: x|y=k ~ N(µₖ, Σ) with shared covariance. Log-posterior discriminant: δₖ(x) = xᵀΣ⁻¹µₖ − ½µₖᵀΣ⁻¹µₖ + log(πₖ). This is linear in x, hence 'Linear' Discriminant Analysis. Criterion Equivalence Theorem: for Gaussian class-conditional distributions with shared covariance Σ, Fisher's geometric approach (maximize separation) ≡ Bayesian probabilistic approach (maximize posterior). Both yield identical decision boundaries.",
      strategic: "This equivalence reveals a profound duality analogous to Lagrangian mechanics (extremal principles, geometric) vs. Hamiltonian mechanics (phase space, probabilistic interpretation). Both describe the same physics through different mathematical languages. In LDA: Fisher view emphasizes geometric separation and dimensionality reduction; Generative view emphasizes probabilistic interpretation and uncertainty quantification. The choice between formulations is primarily one of interpretive convenience.",
      keyPoints: [
        "Generative model: x|y=k ~ N(µₖ, Σ) — shared covariance",
        "Log-posterior: δₖ(x) = xᵀΣ⁻¹µₖ − ½µₖᵀΣ⁻¹µₖ + log(πₖ)",
        "Linear in x → Linear Discriminant Analysis",
        "Equivalence Theorem: Fisher geometric ≡ Bayesian probabilistic (under Gaussian)",
        "Analogy: Lagrangian (geometric) ↔ Hamiltonian (probabilistic) mechanics",
      ],
      tags: ["Generative View", "Criterion Equivalence", "Bayesian", "Gaussian", "Duality"],
    },
    fa: {
      title: "دیدگاه مولد و هم‌ارزی معیار",
      narrative: "در دیدگاه مولد، LDA گاوسی بودن شرطی کلاس را فرض می‌کند: x|y=k ~ N(µₖ, Σ) با کوواریانس مشترک. log-posterior تمایز: δₖ(x) = xᵀΣ⁻¹µₖ − ½µₖᵀΣ⁻¹µₖ + log(πₖ). این در x خطی است. قضیه هم‌ارزی معیار: برای توزیع‌های گاوسی شرطی کلاس با کوواریانس مشترک Σ، رویکرد هندسی Fisher ≡ رویکرد احتمالاتی بیزی.",
      strategic: "این هم‌ارزی یک دوگانگی عمیق مشابه مکانیک Lagrangian (اصول تعادلی، هندسی) در مقابل مکانیک Hamiltonian (فضای فاز، تفسیر احتمالاتی) را نشان می‌دهد. هر دو همان فیزیک را از طریق زبان‌های ریاضی مختلف توصیف می‌کنند.",
      keyPoints: [
        "مدل مولد: x|y=k ~ N(µₖ, Σ) — کوواریانس مشترک",
        "log-posterior: δₖ(x) = xᵀΣ⁻¹µₖ − ½µₖᵀΣ⁻¹µₖ + log(πₖ)",
        "خطی در x → تحلیل تمایز خطی",
        "قضیه هم‌ارزی: هندسی Fisher ≡ احتمالاتی بیزی (تحت گاوسی)",
        "قیاس: Lagrangian (هندسی) ↔ Hamiltonian (احتمالاتی)",
      ],
      tags: ["دیدگاه مولد", "هم‌ارزی معیار", "بیزی", "گاوسی", "دوگانگی"],
    },
  },
  {
    id: 16, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(16),
    en: {
      title: "Partition Geometry and Decision Boundaries",
      narrative: "The discrimination criterion induces a partition of feature space into class regions. Decision rule: ŷ = argmax_k δₖ(x). Boundary between classes k and j: {x : (µₖ−µⱼ)ᵀΣ⁻¹x = ½(µₖᵀΣ⁻¹µₖ − µⱼᵀΣ⁻¹µⱼ) − log(πₖ/πⱼ)}. This is a hyperplane in ℝᵖ perpendicular to Σ⁻¹(µₖ−µⱼ). Located at the geometric midpoint ½(µₖ+µⱼ) in Mahalanobis space, shifted by prior adjustment toward the less likely class. Total boundaries: K(K−1)/2, but only K−1 are linearly independent.",
      strategic: "Geometric interpretation: the decision boundary is codimension 1 — a (p−1)-dimensional affine subspace embedded in ℝᵖ. The prior adjustment log(πₖ/πⱼ) shifts the boundary: if class k is more likely (πₖ > πⱼ), the boundary shifts toward class j (expanding the region assigned to k). This prior-adjusted geometry is the key difference between LDA and nearest-centroid classification in the original space.",
      keyPoints: [
        "Boundary k vs j: hyperplane perpendicular to Σ⁻¹(µₖ−µⱼ)",
        "Located at geometric midpoint ½(µₖ+µⱼ) in Mahalanobis space",
        "Prior adjustment: shifts toward less likely class",
        "Codimension 1: (p−1)-dimensional affine subspace in ℝᵖ",
        "Total boundaries: K(K−1)/2; only K−1 linearly independent",
      ],
      tags: ["Decision Boundaries", "Hyperplane", "Prior Adjustment", "Mahalanobis Geometry"],
    },
    fa: {
      title: "هندسه افراز و مرزهای تصمیم",
      narrative: "معیار تمایز یک افراز از فضای ویژگی به نواحی کلاس ایجاد می‌کند. مرز بین کلاس‌های k و j: {x : (µₖ−µⱼ)ᵀΣ⁻¹x = ½(µₖᵀΣ⁻¹µₖ − µⱼᵀΣ⁻¹µⱼ) − log(πₖ/πⱼ)}. این یک هایپرپلان در ℝᵖ عمود بر Σ⁻¹(µₖ−µⱼ) است. در نقطه میانی هندسی ½(µₖ+µⱼ) در فضای Mahalanobis قرار دارد، با تنظیم پیش‌فرض به سمت کلاس کمتر محتمل جابجا می‌شود.",
      strategic: "تفسیر هندسی: مرز تصمیم codimension 1 است — یک زیرفضای affine (p−1) بعدی جاسازی‌شده در ℝᵖ. تنظیم پیش‌فرض log(πₖ/πⱼ) مرز را جابجا می‌کند: اگر کلاس k محتمل‌تر باشد (πₖ > πⱼ)، مرز به سمت کلاس j جابجا می‌شود.",
      keyPoints: [
        "مرز k در مقابل j: هایپرپلان عمود بر Σ⁻¹(µₖ−µⱼ)",
        "در نقطه میانی هندسی ½(µₖ+µⱼ) در فضای Mahalanobis",
        "تنظیم پیش‌فرض: به سمت کلاس کمتر محتمل جابجا می‌شود",
        "Codimension 1: زیرفضای affine (p−1) بعدی در ℝᵖ",
        "مجموع مرزها: K(K−1)/2؛ فقط K−1 مستقل خطی",
      ],
      tags: ["مرزهای تصمیم", "هایپرپلان", "تنظیم پیش‌فرض", "هندسه Mahalanobis"],
    },
  },
  {
    id: 17, act: "LDA", actLabel: ACT_LABELS_A.LDA, imageUrl: imgA(17),
    en: {
      title: "Substrate Specification and Computational Cost",
      narrative: "LDA substrate is a state-space classifier with parameter set θ = {µ₁,...,µₖ, Σ, π₁,...,πₖ}. MLE estimation: µ̂ₖ = (1/nₖ)Σᵢ:yᵢ=k xᵢ. Σ̂ = (1/(n−K)) Σₖ Σᵢ:yᵢ=k (xᵢ−µ̂ₖ)(xᵢ−µ̂ₖ)ᵀ. π̂ₖ = nₖ/n. Discriminant coefficients: wₖ = Σ̂⁻¹µ̂ₖ, bₖ = −½µ̂ₖᵀΣ̂⁻¹µ̂ₖ + log(π̂ₖ). All estimates are closed-form — no iterative optimization required.",
      strategic: "Complexity table: Training (full) O(np² + p³). Covariance computation O(np²). Matrix inversion O(p³). Prediction per sample O(Kp). Discriminant evaluation O(p) per class. Memory O(Kp + p²). Parameters: Kp (means) + p(p+1)/2 (covariance) + K (priors). The closed-form solution is a major practical advantage over iterative methods — training is deterministic and reproducible.",
      keyPoints: [
        "Parameter set: θ = {µₖ, Σ, πₖ} — means, shared covariance, priors",
        "MLE: µ̂ₖ, Σ̂, π̂ₖ all closed-form",
        "Discriminant coefficients: wₖ = Σ̂⁻¹µ̂ₖ",
        "Training O(np² + p³), prediction O(Kp), memory O(Kp + p²)",
        "Closed-form: deterministic, reproducible, no iterative optimization",
      ],
      tags: ["Substrate", "MLE", "Closed-Form", "Complexity", "Parameters"],
    },
    fa: {
      title: "مشخصات بستر و هزینه محاسباتی",
      narrative: "بستر LDA یک طبقه‌بند فضای حالت با مجموعه پارامتر θ = {µ₁,...,µₖ, Σ, π₁,...,πₖ} است. تخمین MLE: µ̂ₖ = (1/nₖ)Σᵢ:yᵢ=k xᵢ. Σ̂ = (1/(n−K)) Σₖ Σᵢ:yᵢ=k (xᵢ−µ̂ₖ)(xᵢ−µ̂ₖ)ᵀ. π̂ₖ = nₖ/n. ضرایب تمایز: wₖ = Σ̂⁻¹µ̂ₖ، bₖ = −½µ̂ₖᵀΣ̂⁻¹µ̂ₖ + log(π̂ₖ). همه تخمین‌ها به شکل بسته هستند.",
      strategic: "جدول پیچیدگی: آموزش (کامل) O(np² + p³). محاسبه کوواریانس O(np²). معکوس ماتریس O(p³). پیش‌بینی هر نمونه O(Kp). حافظه O(Kp + p²). راه‌حل به شکل بسته یک مزیت عملی بزرگ نسبت به روش‌های تکراری است — آموزش قطعی و تکرارپذیر است.",
      keyPoints: [
        "مجموعه پارامتر: θ = {µₖ, Σ, πₖ} — میانگین‌ها، کوواریانس مشترک، پیش‌فرض‌ها",
        "MLE: µ̂ₖ، Σ̂، π̂ₖ همه به شکل بسته",
        "ضرایب تمایز: wₖ = Σ̂⁻¹µ̂ₖ",
        "آموزش O(np² + p³)، پیش‌بینی O(Kp)، حافظه O(Kp + p²)",
        "شکل بسته: قطعی، تکرارپذیر، بدون بهینه‌سازی تکراری",
      ],
      tags: ["بستر", "MLE", "شکل بسته", "پیچیدگی", "پارامترها"],
    },
  },
  {
    id: 18, act: "Variants", actLabel: ACT_LABELS_A.Variants, imageUrl: imgA(18),
    en: {
      title: "LDA Variants as Path 6 Configurations",
      narrative: "All LDA variants are different knob settings within the Path 6 framework. Classical LDA: pooled Σ, no regularization, linear boundaries, n ≫ p. QDA: class-specific Σₖ, quadratic boundaries, n ≫ p + heteroscedastic. Ridge LDA: pooled Σ, ridge Σ_λ = Σ + λI, linear, p ≈ n. Shrinkage LDA: Ledoit-Wolf (1−α)Σ + αT, linear, p ≈ n. Diagonal LDA: Σ_diag = diag(σ̂₁²,...), linear, p ≫ n. Sparse LDA: ℓ₁ penalty on w, linear (sparse), p ≫ n + interpretability. Robust LDA: M-estimator or MCD, linear, outliers present. Kernel LDA: implicit feature map ϕ, nonlinear, n moderate. RDA: interpolated (1−λ)Σ + λΣₖ, continuous LDA–QDA.",
      strategic: "Key insight: all variants share the same Domain/Criterion/Partition/Substrate/Optimization structure. They differ only in instantiation choices — specifically in how the covariance matrix Σ is estimated and regularized. This unifying view enables systematic variant selection based on the dimensionality regime (n vs p), distributional properties, and computational constraints.",
      keyPoints: [
        "Classical LDA: pooled Σ, linear, n ≫ p",
        "QDA: class-specific Σₖ, quadratic, heteroscedastic",
        "Ridge/Shrinkage: regularized Σ for p ≈ n",
        "Diagonal/Sparse: for p ≫ n",
        "Robust/Kernel: for outliers/nonlinear boundaries",
      ],
      tags: ["LDA Variants", "QDA", "Ridge", "Shrinkage", "Sparse", "Kernel LDA"],
    },
    fa: {
      title: "انواع LDA به عنوان پیکربندی‌های مسیر ۶",
      narrative: "همه انواع LDA تنظیمات مختلف کنترل در چارچوب مسیر ۶ هستند. LDA کلاسیک: Σ تجمیع‌شده، بدون منظم‌سازی، مرزهای خطی، n ≫ p. QDA: Σₖ خاص کلاس، مرزهای درجه دوم. Ridge LDA: Σ_λ = Σ + λI. Shrinkage LDA: Ledoit-Wolf (1−α)Σ + αT. Diagonal LDA: Σ_diag = diag(σ̂₁²,...). Sparse LDA: جریمه ℓ₁ روی w. Robust LDA: M-estimator یا MCD. Kernel LDA: نگاشت ویژگی ضمنی ϕ.",
      strategic: "بینش کلیدی: همه انواع ساختار Domain/Criterion/Partition/Substrate/Optimization یکسانی دارند. آن‌ها فقط در انتخاب‌های نمونه‌سازی تفاوت دارند — به‌ویژه در نحوه تخمین و منظم‌سازی ماتریس کوواریانس Σ.",
      keyPoints: [
        "LDA کلاسیک: Σ تجمیع‌شده، خطی، n ≫ p",
        "QDA: Σₖ خاص کلاس، درجه دوم، ناهمگن",
        "Ridge/Shrinkage: Σ منظم‌شده برای p ≈ n",
        "Diagonal/Sparse: برای p ≫ n",
        "Robust/Kernel: برای outlier‌ها/مرزهای غیرخطی",
      ],
      tags: ["انواع LDA", "QDA", "Ridge", "Shrinkage", "Sparse", "Kernel LDA"],
    },
  },
  {
    id: 19, act: "Variants", actLabel: ACT_LABELS_A.Variants, imageUrl: imgA(19),
    en: {
      title: "Regularized Variants: Ridge, Shrinkage, Diagonal LDA",
      narrative: "For high-dimensional settings where p ≈ n or p > n, the sample covariance matrix Σ̂ becomes ill-conditioned or singular. Ridge LDA: Σ_λ = Σ + λI, adding a scaled identity to the covariance. Shrinkage LDA (Ledoit-Wolf): Σ_α = (1−α)Σ + αT where T is a shrinkage target (e.g., diagonal or scaled identity). α is determined analytically — no cross-validation needed. Diagonal LDA (DLDA): Σ_diag = diag(σ̂₁²,...,σ̂ₚ²), equivalent to Naive Bayes with Gaussian features.",
      strategic: "Regime guidance: Ridge/Shrinkage for 0.5 < n/p < 5 (high-dimensional). Diagonal LDA for n/p < 0.5 (ultra-high-dimensional). Ledoit-Wolf is the default choice for p ≈ n because it requires no hyperparameter search and is deterministic. Ridge requires cross-validation for λ but can achieve better performance. DLDA is fastest and always applicable for p ≫ n, effective for text classification (Naive Bayes connection).",
      keyPoints: [
        "Ridge LDA: Σ_λ = Σ + λI, linear, p ≈ n",
        "Shrinkage (Ledoit-Wolf): (1−α)Σ + αT, automatic α, no CV needed",
        "Diagonal LDA: Σ_diag = diag(σ̂₁²,...), equivalent to Naive Bayes",
        "Regime: Ridge/Shrinkage for 0.5 < n/p < 5; DLDA for n/p < 0.5",
        "Ledoit-Wolf: default for p ≈ n — deterministic, no hyperparameter search",
      ],
      tags: ["Ridge LDA", "Shrinkage LDA", "Ledoit-Wolf", "Diagonal LDA", "Regularization"],
    },
    fa: {
      title: "انواع منظم‌شده: Ridge، Shrinkage، Diagonal LDA",
      narrative: "برای تنظیمات با ابعاد بالا که p ≈ n یا p > n، ماتریس کوواریانس نمونه Σ̂ بد-شرط یا منفرد می‌شود. Ridge LDA: Σ_λ = Σ + λI. Shrinkage LDA (Ledoit-Wolf): Σ_α = (1−α)Σ + αT که T هدف shrinkage است. α به صورت تحلیلی تعیین می‌شود — نیازی به cross-validation نیست. Diagonal LDA: Σ_diag = diag(σ̂₁²,...,σ̂ₚ²)، معادل Naive Bayes با ویژگی‌های گاوسی.",
      strategic: "راهنمای رژیم: Ridge/Shrinkage برای 0.5 < n/p < 5. Diagonal LDA برای n/p < 0.5. Ledoit-Wolf انتخاب پیش‌فرض برای p ≈ n است زیرا نیازی به جستجوی hyperparameter ندارد و قطعی است.",
      keyPoints: [
        "Ridge LDA: Σ_λ = Σ + λI، خطی، p ≈ n",
        "Shrinkage (Ledoit-Wolf): (1−α)Σ + αT، α خودکار، بدون CV",
        "Diagonal LDA: Σ_diag = diag(σ̂₁²,...)، معادل Naive Bayes",
        "رژیم: Ridge/Shrinkage برای 0.5 < n/p < 5؛ DLDA برای n/p < 0.5",
        "Ledoit-Wolf: پیش‌فرض برای p ≈ n — قطعی، بدون جستجوی hyperparameter",
      ],
      tags: ["Ridge LDA", "Shrinkage LDA", "Ledoit-Wolf", "Diagonal LDA", "منظم‌سازی"],
    },
  },
  {
    id: 20, act: "Variants", actLabel: ACT_LABELS_A.Variants, imageUrl: imgA(20),
    en: {
      title: "Robust and Nonlinear Extensions: Robust LDA, KLDA, QDA",
      narrative: "Robust LDA replaces MLE with robust estimators. M-estimator: µ̂ₖ solves Σᵢ ψ((xᵢ−µₖ)/σ) = 0 where ψ is Huber or Tukey's bisquare. MCD (Minimum Covariance Determinant): find subset H of size ≈ n/2 with minimal scatter. Kernel LDA (KLDA): feature map ϕ: ℝᵖ → H (RKHS). Kernel eigenvalue problem: K_B α = λ(K_W + εI)α. Common kernels: polynomial k(x,x') = (xᵀx' + c)^d, RBF k(x,x') = exp(−γ‖x−x'‖²), sigmoid k(x,x') = tanh(γxᵀx' + c). QDA: class-specific Σₖ, quadratic boundaries.",
      strategic: "LDA vs. QDA trade-offs: LDA has Kp + p(p+1)/2 + K parameters; QDA has Kp + K·p(p+1)/2 + K parameters. LDA: linear boundaries, lower flexibility, lower variance. QDA: quadratic boundaries, higher flexibility, higher variance. Decision criterion: use Box's M-test for H₀: Σ₁ = ... = Σₖ. If rejected and nₖ large enough, prefer QDA. RDA interpolates: (1−λ)Σ + λΣₖ — adapts automatically.",
      keyPoints: [
        "Robust LDA: M-estimator or MCD for outlier resistance",
        "KLDA: feature map ϕ, kernel eigenvalue problem K_B α = λ(K_W + εI)α",
        "Common kernels: polynomial, RBF (Gaussian), sigmoid",
        "QDA: class-specific Σₖ, quadratic boundaries",
        "Box's M-test: if H₀: Σ₁=...=Σₖ rejected → prefer QDA",
      ],
      tags: ["Robust LDA", "Kernel LDA", "QDA", "Box's M-test", "Nonlinear"],
    },
    fa: {
      title: "توسعه‌های مقاوم و غیرخطی: Robust LDA، KLDA، QDA",
      narrative: "Robust LDA جایگزین MLE با تخمین‌گرهای مقاوم می‌شود. M-estimator: µ̂ₖ حل Σᵢ ψ((xᵢ−µₖ)/σ) = 0 که ψ تابع Huber یا Tukey است. MCD: زیرمجموعه H با پراکندگی حداقل. Kernel LDA: نگاشت ویژگی ϕ: ℝᵖ → H. مسئله مقدار ویژه kernel: K_B α = λ(K_W + εI)α. QDA: Σₖ خاص کلاس، مرزهای درجه دوم.",
      strategic: "مقایسه LDA و QDA: LDA پارامترهای Kp + p(p+1)/2 + K دارد؛ QDA پارامترهای Kp + K·p(p+1)/2 + K دارد. LDA: مرزهای خطی، انعطاف‌پذیری کمتر، واریانس کمتر. QDA: مرزهای درجه دوم، انعطاف‌پذیری بیشتر. معیار تصمیم: از آزمون M Box برای H₀: Σ₁ = ... = Σₖ استفاده کنید.",
      keyPoints: [
        "Robust LDA: M-estimator یا MCD برای مقاومت در برابر outlier",
        "KLDA: نگاشت ویژگی ϕ، مسئله مقدار ویژه kernel",
        "kernel‌های رایج: چندجمله‌ای، RBF (گاوسی)، sigmoid",
        "QDA: Σₖ خاص کلاس، مرزهای درجه دوم",
        "آزمون M Box: اگر H₀: Σ₁=...=Σₖ رد شد → QDA را ترجیح دهید",
      ],
      tags: ["Robust LDA", "Kernel LDA", "QDA", "آزمون M Box", "غیرخطی"],
    },
  },
  {
    id: 21, act: "Variants", actLabel: ACT_LABELS_A.Variants, imageUrl: imgA(21),
    en: {
      title: "Mathematical Connections: Fisher ↔ Generative ↔ CCA ↔ Regression",
      narrative: "LDA connects to multiple other methods. Fisher ↔ Generative: identical decision boundaries under Gaussian assumptions (proved via Bayes classifier derivation). LDA ↔ CCA: the first K−1 canonical variates of (X,Y) are exactly the LDA discriminant directions; canonical correlations ρᵢ² = λᵢ/(1+λᵢ). LDA ↔ Linear Regression: indicator matrix regression min‖Y − XB‖²_F gives same predictions for balanced classes; B̂ = (XᵀX)⁻¹XᵀY.",
      strategic: "The CCA connection reveals LDA as finding projections maximally correlated with class labels — LDA is the supervised analog of PCA. PCA maximizes variance (unsupervised); LDA maximizes correlation with class labels (supervised); CCA maximizes correlation between two sets of variables. The regression connection shows LDA extends naturally to ridge regression (equivalent to regularized LDA), providing a computationally simpler alternative in some cases.",
      keyPoints: [
        "Fisher ↔ Generative: identical boundaries under Gaussian assumptions",
        "LDA ↔ CCA: first K−1 canonical variates = LDA discriminants",
        "Canonical correlations: ρᵢ² = λᵢ/(1+λᵢ)",
        "LDA ↔ Regression: indicator matrix min‖Y − XB‖²_F",
        "LDA = supervised PCA (maximizes correlation with labels)",
      ],
      tags: ["Mathematical Connections", "CCA", "Regression", "PCA", "Supervised"],
    },
    fa: {
      title: "ارتباطات ریاضی: Fisher ↔ مولد ↔ CCA ↔ رگرسیون",
      narrative: "LDA به چندین روش دیگر متصل می‌شود. Fisher ↔ مولد: مرزهای تصمیم یکسان تحت فرضیات گاوسی. LDA ↔ CCA: اولین K−1 متغیر متعارف (X,Y) دقیقاً جهت‌های تمایز LDA هستند؛ همبستگی‌های متعارف ρᵢ² = λᵢ/(1+λᵢ). LDA ↔ رگرسیون خطی: رگرسیون ماتریس نشانگر min‖Y − XB‖²_F برای کلاس‌های متوازن همان پیش‌بینی‌ها را می‌دهد.",
      strategic: "ارتباط CCA نشان می‌دهد LDA تصویرهایی را می‌یابد که بیشترین همبستگی را با برچسب‌های کلاس دارند — LDA آنالوگ نظارت‌شده PCA است. PCA واریانس را بیشینه می‌کند (بدون نظارت)؛ LDA همبستگی با برچسب‌های کلاس را بیشینه می‌کند (با نظارت).",
      keyPoints: [
        "Fisher ↔ مولد: مرزهای یکسان تحت فرضیات گاوسی",
        "LDA ↔ CCA: اولین K−1 متغیر متعارف = تمایزدهنده‌های LDA",
        "همبستگی‌های متعارف: ρᵢ² = λᵢ/(1+λᵢ)",
        "LDA ↔ رگرسیون: ماتریس نشانگر min‖Y − XB‖²_F",
        "LDA = PCA نظارت‌شده (بیشینه کردن همبستگی با برچسب‌ها)",
      ],
      tags: ["ارتباطات ریاضی", "CCA", "رگرسیون", "PCA", "نظارت‌شده"],
    },
  },
  {
    id: 22, act: "Decision", actLabel: ACT_LABELS_A.Decision, imageUrl: imgA(22),
    en: {
      title: "Variant Selection: Dimensionality and Distributional Assessment",
      narrative: "Level 1 (Dimensionality Assessment): Classical regime n/p > 5 → candidates: Classical LDA, QDA, Robust LDA. High-dimensional 0.5 < n/p < 5 → candidates: Regularized LDA, Shrinkage LDA, RDA. Ultra-high-dimensional n/p < 0.5 → candidates: Diagonal LDA, Sparse LDA. Level 2 (Distributional Assessment): Gaussianity tests (Mardia, Henze-Zirkler, Royston, Shapiro-Wilk). Homoscedasticity: Box's M-test H₀: Σ₁=...=Σₖ. Outlier detection: Mahalanobis distance dᵢ = √((xᵢ−µ̂)ᵀΣ̂⁻¹(xᵢ−µ̂)), flag if dᵢ > √χ²_{p,0.975}.",
      strategic: "If reasonable Gaussianity → proceed to covariance structure. If heavy tails/outliers → Robust LDA. If highly non-Gaussian → Kernel LDA or feature transformation + LDA. Covariance structure: if homoscedastic (Box's M fails to reject) → LDA (shared covariance valid). If heteroscedastic (Box's M rejects): nₖ ≫ p → QDA; moderate sample → RDA; small sample → LDA (accept bias to reduce variance).",
      keyPoints: [
        "Level 1: n/p > 5 → Classical; 0.5–5 → Regularized; < 0.5 → Diagonal/Sparse",
        "Level 2: Gaussianity (Mardia, Henze-Zirkler), homoscedasticity (Box's M-test)",
        "Outlier detection: Mahalanobis distance vs. χ²_{p,0.975} threshold",
        "Heavy tails → Robust LDA; non-Gaussian → Kernel LDA",
        "Heteroscedastic: QDA (large nₖ), RDA (moderate), LDA (small)",
      ],
      tags: ["Variant Selection", "Dimensionality", "Box's M-test", "Gaussianity", "Outliers"],
    },
    fa: {
      title: "انتخاب نوع: ارزیابی ابعاد و توزیع",
      narrative: "سطح ۱ (ارزیابی ابعاد): رژیم کلاسیک n/p > 5 → کاندیداها: LDA کلاسیک، QDA، Robust LDA. ابعاد بالا 0.5 < n/p < 5 → کاندیداها: LDA منظم‌شده، Shrinkage LDA، RDA. ابعاد فوق‌العاده بالا n/p < 0.5 → کاندیداها: Diagonal LDA، Sparse LDA. سطح ۲ (ارزیابی توزیع): آزمون‌های گاوسی بودن (Mardia، Henze-Zirkler، Royston). همگنی: آزمون M Box.",
      strategic: "اگر گاوسی بودن معقول → به ساختار کوواریانس بروید. اگر دنباله‌های سنگین/outlier → Robust LDA. اگر کاملاً غیرگاوسی → Kernel LDA. ساختار کوواریانس: اگر همگن (آزمون M Box رد نشد) → LDA. اگر ناهمگن: nₖ ≫ p → QDA؛ نمونه متوسط → RDA؛ نمونه کوچک → LDA.",
      keyPoints: [
        "سطح ۱: n/p > 5 → کلاسیک؛ 0.5–5 → منظم‌شده؛ < 0.5 → Diagonal/Sparse",
        "سطح ۲: گاوسی بودن (Mardia، Henze-Zirkler)، همگنی (آزمون M Box)",
        "تشخیص outlier: فاصله Mahalanobis در مقابل آستانه χ²_{p,0.975}",
        "دنباله‌های سنگین → Robust LDA؛ غیرگاوسی → Kernel LDA",
        "ناهمگن: QDA (nₖ بزرگ)، RDA (متوسط)، LDA (کوچک)",
      ],
      tags: ["انتخاب نوع", "ابعاد", "آزمون M Box", "گاوسی بودن", "outlier‌ها"],
    },
  },
  {
    id: 23, act: "Decision", actLabel: ACT_LABELS_A.Decision, imageUrl: imgA(23),
    en: {
      title: "Variant Selection: Regularization, Sparsity, and Practical Decision Table",
      narrative: "Level 3 (Regularization): automatic tuning desired → Shrinkage LDA (Ledoit-Wolf), no CV, deterministic. Willing to cross-validate → Ridge LDA or RDA. Limited budget → Ridge LDA with single λ. Level 4 (Sparsity): interpretability critical → Sparse LDA (identifies discriminatively important features). p extremely large (> 10,000) → Diagonal LDA baseline, Sparse LDA if time permits. Feature groups known → Group Sparse LDA. Practical Decision Table (Table 9) covers 11 scenarios from standard classification to genomics.",
      strategic: "Key scenarios from Table 9: Standard classification (n ≫ p, homoscedastic) → Classical LDA. Unequal spreads (n ≫ p, heteroscedastic) → QDA. Moderate dimensions (n ≈ p, homoscedastic) → Shrinkage LDA. Ultra-high dimensions (p ≫ n) → DLDA or Sparse LDA. Outliers → Robust LDA. Nonlinear boundaries → Kernel LDA. Text classification (p huge, independent) → DLDA (Naive Bayes). Genomics (p ≫ n, sparse) → Sparse LDA.",
      keyPoints: [
        "Level 3: Ledoit-Wolf (automatic), Ridge/RDA (CV-based), Ridge (budget-limited)",
        "Level 4: Sparse LDA (interpretability), DLDA (p > 10,000)",
        "Table 9: 11 practical scenarios with recommendations",
        "Genomics: p ≫ n, sparse → Sparse LDA for gene selection",
        "Text: p huge, independent → DLDA (fast, effective Naive Bayes)",
      ],
      tags: ["Regularization", "Sparse LDA", "Decision Table", "Genomics", "Text Classification"],
    },
    fa: {
      title: "انتخاب نوع: منظم‌سازی، پراکندگی، و جدول تصمیم عملی",
      narrative: "سطح ۳ (منظم‌سازی): تنظیم خودکار مطلوب → Shrinkage LDA (Ledoit-Wolf)، بدون CV، قطعی. آماده cross-validation → Ridge LDA یا RDA. بودجه محدود → Ridge LDA با λ تکی. سطح ۴ (پراکندگی): تفسیرپذیری حیاتی → Sparse LDA. p بسیار بزرگ (> ۱۰،۰۰۰) → Diagonal LDA پایه. گروه‌های ویژگی شناخته‌شده → Group Sparse LDA.",
      strategic: "سناریوهای کلیدی از جدول ۹: طبقه‌بندی استاندارد (n ≫ p، همگن) → LDA کلاسیک. پراکندگی‌های نابرابر → QDA. ابعاد متوسط → Shrinkage LDA. ابعاد فوق‌العاده بالا → DLDA یا Sparse LDA. outlier‌ها → Robust LDA. مرزهای غیرخطی → Kernel LDA. طبقه‌بندی متن → DLDA. ژنومیک → Sparse LDA.",
      keyPoints: [
        "سطح ۳: Ledoit-Wolf (خودکار)، Ridge/RDA (مبتنی بر CV)، Ridge (بودجه محدود)",
        "سطح ۴: Sparse LDA (تفسیرپذیری)، DLDA (p > ۱۰،۰۰۰)",
        "جدول ۹: ۱۱ سناریوی عملی با توصیه‌ها",
        "ژنومیک: p ≫ n، پراکنده → Sparse LDA برای انتخاب ژن",
        "متن: p بزرگ، مستقل → DLDA (Naive Bayes سریع و مؤثر)",
      ],
      tags: ["منظم‌سازی", "Sparse LDA", "جدول تصمیم", "ژنومیک", "طبقه‌بندی متن"],
    },
  },
  {
    id: 24, act: "Performance", actLabel: ACT_LABELS_A.Performance, imageUrl: imgA(24),
    en: {
      title: "Universal Performance Vector P = (F, S, T, E)",
      narrative: "For any filter, performance is tracked by a universal vector P = (F, S, T, E). Fidelity (F): accuracy of separation — classification accuracy, reconstruction error, defect rate. Selectivity (S): sharpness of boundary — transition width, margin, entropy, modularity. For LDA: Fisher criterion J(w) = wᵀS_B w / wᵀS_W w, Mahalanobis distances d²_kj = (µₖ−µⱼ)ᵀΣ⁻¹(µₖ−µⱼ), discriminant eigenvalues λᵢ. Throughput (T): elements per unit time. Efficiency (E): FLOPs, memory, energy per element.",
      strategic: "LDA-specific metrics: Training accuracy Acc_train = (1/n)Σ I(ŷᵢ=yᵢ). Test accuracy (generalization): Acc_test = E_{(x,y)~p}[I(ŷ=y)]. Class-specific: sensitivity TPₖ/(TPₖ+FNₖ), specificity TNₖ/(TNₖ+FPₖ), precision TPₖ/(TPₖ+FPₖ). Confusion matrix Cₖⱼ = count of true class k predicted as j. Dimensionality reduction quality: variance explained ratio, separability preservation (Fisher ratio in reduced vs. original space).",
      keyPoints: [
        "P = (F, S, T, E): Fidelity, Selectivity, Throughput, Efficiency",
        "LDA Fidelity: classification accuracy, calibration error",
        "LDA Selectivity: J(w), Mahalanobis d²_kj, eigenvalues λᵢ",
        "Class-specific: sensitivity, specificity, precision, confusion matrix",
        "Dimensionality reduction: variance explained, separability preservation",
      ],
      tags: ["Performance Vector", "Fidelity", "Selectivity", "Throughput", "Efficiency"],
    },
    fa: {
      title: "بردار عملکرد جهانی P = (F, S, T, E)",
      narrative: "برای هر فیلتر، عملکرد با یک بردار جهانی P = (F, S, T, E) ردیابی می‌شود. وفاداری (F): دقت جداسازی — دقت طبقه‌بندی، خطای بازسازی. انتخابی (S): تیزی مرز — عرض انتقال، حاشیه، آنتروپی. برای LDA: معیار Fisher J(w)، فاصله Mahalanobis d²_kj، مقادیر ویژه تمایز λᵢ. توان عملیاتی (T): عناصر در واحد زمان. کارایی (E): FLOPs، حافظه، انرژی.",
      strategic: "معیارهای خاص LDA: دقت آموزش Acc_train = (1/n)Σ I(ŷᵢ=yᵢ). دقت آزمون (تعمیم). خاص کلاس: حساسیت TPₖ/(TPₖ+FNₖ)، ویژگی TNₖ/(TNₖ+FPₖ)، دقت TPₖ/(TPₖ+FPₖ). ماتریس درهم‌ریختگی Cₖⱼ. کیفیت کاهش بعد: نسبت واریانس توضیح داده‌شده.",
      keyPoints: [
        "P = (F, S, T, E): وفاداری، انتخابی، توان عملیاتی، کارایی",
        "وفاداری LDA: دقت طبقه‌بندی، خطای کالیبراسیون",
        "انتخابی LDA: J(w)، Mahalanobis d²_kj، مقادیر ویژه λᵢ",
        "خاص کلاس: حساسیت، ویژگی، دقت، ماتریس درهم‌ریختگی",
        "کاهش بعد: واریانس توضیح داده‌شده، حفظ جداپذیری",
      ],
      tags: ["بردار عملکرد", "وفاداری", "انتخابی", "توان عملیاتی", "کارایی"],
    },
  },
  {
    id: 25, act: "Performance", actLabel: ACT_LABELS_A.Performance, imageUrl: imgA(25),
    en: {
      title: "Validation Framework: Five Verification Tests",
      narrative: "Every filter should undergo five verification tests. (1) Selectivity monotonicity test: as a knob (e.g., threshold) varies, selectivity should change monotonically. (2) Fidelity/reconstruction check: for decomposition-based filters, verify C ∘ R ≈ Id (if invertible). (3) Stability/robustness test: inject small perturbations; outputs should not change drastically. (4) Regime adequacy check: confirm assumptions (Gaussianity, homoscedasticity) hold sufficiently. (5) Calibration test: reliability diagram and expected calibration error (ECE) for probabilistic outputs.",
      strategic: "LDA-specific additions to the traceability report: Variant (classical, ridge, shrinkage, diagonal, sparse, robust, kernel, RDA). Covariance estimation details (pooled, class-specific, shrinkage target, regularization parameter). Dimension reduction (number of discriminants d, variance explained). Priors (empirical, user-supplied, balanced). Assumption validation (Box's M-test, multivariate normality tests, outlier detection). Separation quality metrics (eigenvalues λᵢ, Mahalanobis distances d_kj, Fisher ratio, cross-validated accuracy, calibration curve).",
      keyPoints: [
        "(1) Selectivity monotonicity test",
        "(2) Fidelity/reconstruction check: C ∘ R ≈ Id",
        "(3) Stability/robustness test under perturbation",
        "(4) Regime adequacy: Gaussianity, homoscedasticity",
        "(5) Calibration test: reliability diagram, ECE",
      ],
      tags: ["Validation", "Five Tests", "Calibration", "Stability", "Gaussianity"],
    },
    fa: {
      title: "چارچوب اعتبارسنجی: پنج آزمون تأیید",
      narrative: "هر فیلتر باید پنج آزمون تأیید را طی کند. (۱) آزمون یکنواختی انتخابی: با تغییر یک کنترل، انتخابی باید یکنواخت تغییر کند. (۲) بررسی وفاداری/بازسازی: برای فیلترهای مبتنی بر تجزیه، C ∘ R ≈ Id را تأیید کنید. (۳) آزمون پایداری/استحکام: اغتشاشات کوچک تزریق کنید. (۴) بررسی کفایت رژیم: فرضیات (گاوسی بودن، همگنی) را تأیید کنید. (۵) آزمون کالیبراسیون: نمودار قابلیت اطمینان و ECE.",
      strategic: "افزودنی‌های خاص LDA به گزارش ردیابی: نوع (کلاسیک، ridge، shrinkage، diagonal، sparse، robust، kernel، RDA). جزئیات تخمین کوواریانس. کاهش بعد (تعداد تمایزدهنده‌ها d). پیش‌فرض‌ها. اعتبارسنجی فرضیات. معیارهای کیفیت جداسازی.",
      keyPoints: [
        "(۱) آزمون یکنواختی انتخابی",
        "(۲) بررسی وفاداری/بازسازی: C ∘ R ≈ Id",
        "(۳) آزمون پایداری/استحکام تحت اغتشاش",
        "(۴) کفایت رژیم: گاوسی بودن، همگنی",
        "(۵) آزمون کالیبراسیون: نمودار قابلیت اطمینان، ECE",
      ],
      tags: ["اعتبارسنجی", "پنج آزمون", "کالیبراسیون", "پایداری", "گاوسی بودن"],
    },
  },
  {
    id: 26, act: "Performance", actLabel: ACT_LABELS_A.Performance, imageUrl: imgA(26),
    en: {
      title: "Uncertainty Quantification",
      narrative: "Posterior probabilities: p(y=k|x) = exp(δₖ(x)) / Σⱼ exp(δⱼ(x)). These quantify confidence in the classification. Prediction entropy: H(y|x) = −Σₖ p(y=k|x) log p(y=k|x). High entropy indicates uncertain classification. Maximum posterior probability: max_k p(y=k|x) — confidence in the most likely class. Parametric bootstrap for parameter uncertainty: (1) estimate µ̂ₖ, Σ̂, π̂ₖ from data; (2) generate bootstrap samples from N(µ̂ₖ, Σ̂); (3) re-fit LDA; (4) quantify variability of discriminant coefficients.",
      strategic: "Uncertainty quantification is critical for agent gating decisions. A filter with high prediction entropy on a given input should trigger a fallback path or request additional information rather than committing to a classification. The Atom Patch Set ∆ should include confidence signals alongside the classification decision, enabling downstream agents to weight the patch according to its reliability. This connects UQ directly to the traceability framework.",
      keyPoints: [
        "Posterior: p(y=k|x) = exp(δₖ(x)) / Σⱼ exp(δⱼ(x))",
        "Entropy: H(y|x) = −Σₖ p(y=k|x) log p(y=k|x)",
        "High entropy → uncertain classification → trigger fallback",
        "Max posterior: confidence in most likely class",
        "Parametric bootstrap: quantify variability of discriminant coefficients",
      ],
      tags: ["Uncertainty Quantification", "Posterior", "Entropy", "Bootstrap", "Confidence"],
    },
    fa: {
      title: "کمی‌سازی عدم قطعیت",
      narrative: "احتمالات پسین: p(y=k|x) = exp(δₖ(x)) / Σⱼ exp(δⱼ(x)). اینها اطمینان به طبقه‌بندی را کمی می‌کنند. آنتروپی پیش‌بینی: H(y|x) = −Σₖ p(y=k|x) log p(y=k|x). آنتروپی بالا نشان‌دهنده طبقه‌بندی نامطمئن است. حداکثر احتمال پسین: max_k p(y=k|x). Bootstrap پارامتری برای عدم قطعیت پارامتر.",
      strategic: "کمی‌سازی عدم قطعیت برای تصمیمات gating agent حیاتی است. یک فیلتر با آنتروپی پیش‌بینی بالا باید یک مسیر fallback را فعال کند یا اطلاعات اضافی درخواست کند. مجموعه وصله اتم ∆ باید سیگنال‌های اطمینان را در کنار تصمیم طبقه‌بندی شامل شود.",
      keyPoints: [
        "پسین: p(y=k|x) = exp(δₖ(x)) / Σⱼ exp(δⱼ(x))",
        "آنتروپی: H(y|x) = −Σₖ p(y=k|x) log p(y=k|x)",
        "آنتروپی بالا → طبقه‌بندی نامطمئن → فعال‌سازی fallback",
        "حداکثر پسین: اطمینان به محتمل‌ترین کلاس",
        "Bootstrap پارامتری: کمی‌سازی تغییرپذیری ضرایب تمایز",
      ],
      tags: ["کمی‌سازی عدم قطعیت", "پسین", "آنتروپی", "Bootstrap", "اطمینان"],
    },
  },
  {
    id: 27, act: "Synthesis", actLabel: ACT_LABELS_A.Synthesis, imageUrl: imgA(27),
    en: {
      title: "Separation Mechanism Inventory: One-Page Design Axes",
      narrative: "Table 10 presents the UFP as five adjustable design axes. (1) Partition geometry: Linear (LDA), quadratic (QDA), nonlinear via kernel (KLDA) — varies with nonlinearity, heteroscedasticity, complex boundaries. (2) Metric/induced geometry: Euclidean vs. Mahalanobis; whitening via Σ⁻¹/²; class-conditional metrics (QDA) — for correlated features, scale mismatch, anisotropic clusters. (3) Covariance substrate: empirical pooled, ridge/shrinkage, diagonal, robust, class-specific — for p ≈ n, outliers, stability. (4) Constraint family: none, ridge, sparsity (ℓ₁), robust losses, kernel regularization — for interpretability, high-dimensional, adversarial data. (5) Decision/outputs: hard argmax, calibrated posteriors, reject/cascade signals.",
      strategic: "All LDA variants share common structure: Domain (ℝᵖ with labeled observations, Mahalanobis metric), Criterion (Fisher or posterior), Partition (linear/quadratic/kernel boundaries, argmax rule), Substrate (MLE or regularized parameters), Optimization (eigenvalue problem or MLE). Variants differ only in instantiation choices — specifically in axes 1–4. This one-page inventory enables rapid variant selection by matching problem characteristics to design axis settings.",
      keyPoints: [
        "Axis 1: Partition geometry — linear/quadratic/kernel",
        "Axis 2: Metric — Euclidean/Mahalanobis/class-conditional",
        "Axis 3: Covariance substrate — pooled/ridge/shrinkage/diagonal/robust",
        "Axis 4: Constraint family — none/ridge/ℓ₁/robust/kernel",
        "Axis 5: Outputs — argmax/calibrated posteriors/reject signals",
      ],
      tags: ["Design Axes", "Table 10", "One-Page Inventory", "Variant Selection"],
    },
    fa: {
      title: "موجودی مکانیزم جداسازی: محورهای طراحی یک‌صفحه‌ای",
      narrative: "جدول ۱۰ UFP را به عنوان پنج محور طراحی قابل تنظیم ارائه می‌دهد. (۱) هندسه افراز: خطی (LDA)، درجه دوم (QDA)، غیرخطی از طریق kernel (KLDA). (۲) متریک/هندسه القایی: اقلیدسی در مقابل Mahalanobis؛ سفیدسازی از طریق Σ⁻¹/². (۳) بستر کوواریانس: تجمیع‌شده تجربی، ridge/shrinkage، قطری، مقاوم، خاص کلاس. (۴) خانواده قید: هیچ، ridge، پراکندگی (ℓ₁)، اتلاف‌های مقاوم. (۵) خروجی‌ها: argmax سخت، احتمالات پسین کالیبره‌شده، سیگنال‌های رد/آبشار."
,
      strategic: "همه انواع LDA ساختار مشترکی دارند: دامنه (ℝᵖ با مشاهدات برچسب‌دار، متریک Mahalanobis)، معیار (Fisher یا پسین)، افراز (مرزهای خطی/درجه دوم/kernel، قانون argmax)، بستر (پارامترهای MLE یا منظم‌شده)، بهینه‌سازی (مسئله مقدار ویژه یا MLE). انواع فقط در انتخاب‌های نمونه‌سازی — به‌ویژه در محورهای ۱–۴ — تفاوت دارند.",
      keyPoints: [
        "محور ۱: هندسه افراز — خطی/درجه دوم/kernel",
        "محور ۲: متریک — اقلیدسی/Mahalanobis/شرطی کلاس",
        "محور ۳: بستر کوواریانس — تجمیع‌شده/ridge/shrinkage/قطری/مقاوم",
        "محور ۴: خانواده قید — هیچ/ridge/ℓ₁/مقاوم/kernel",
        "محور ۵: خروجی‌ها — argmax/احتمالات پسین کالیبره‌شده/سیگنال‌های رد",
      ],
      tags: ["محورهای طراحی", "جدول ۱۰", "موجودی یک‌صفحه‌ای", "انتخاب نوع"],
    },
  },
  {
    id: 28, act: "Synthesis", actLabel: ACT_LABELS_A.Synthesis, imageUrl: imgA(28),
    en: {
      title: "Overlap with EPU Deck: Shared Mathematical Foundations",
      narrative: "The UFP framework and the EPU 60-slide deck share deep mathematical foundations. The Mahalanobis whitening in LDA (Stage 0: z = Σ⁻¹/²x) is structurally identical to the Kalman filter covariance update in EPU Slide 22 (P⁻¹ = P_pred⁻¹ + HᵀR⁻¹H). Both perform optimal linear transformation under Gaussian assumptions. The Fisher criterion J(w) = wᵀS_B w / wᵀS_W w is a generalized Rayleigh quotient — the same structure appears in EPU Slide 14 (eigenvalue decomposition for optimal control).",
      strategic: "Complementary roles: UFP/LDA provides the separation primitive for classifying states and transitions in EPU's 10-gate architecture. EPU Gate 10 (AGM Integration) produces transfer functions H(s) whose pole/zero structure can be analyzed using LDA-style phase space classification — poles in LHP vs. RHP correspond to class-conditional distributions in the LDA framework. The UFP taxonomy provides the formal language for describing EPU's filter operations.",
      keyPoints: [
        "Mahalanobis whitening ≡ Kalman covariance update (both optimal Gaussian transforms)",
        "Fisher criterion = generalized Rayleigh quotient (appears in EPU optimal control)",
        "LDA phase space ↔ EPU Gate 10 pole/zero analysis",
        "UFP taxonomy: formal language for EPU filter operations",
        "Complementary: UFP provides separation primitives; EPU provides hardware realization",
      ],
      tags: ["Overlap", "EPU Deck", "Kalman Filter", "Rayleigh Quotient", "Complementary"],
    },
    fa: {
      title: "همپوشانی با deck EPU: پایه‌های ریاضی مشترک",
      narrative: "چارچوب UFP و deck 60 اسلایدی EPU پایه‌های ریاضی عمیق مشترکی دارند. سفیدسازی Mahalanobis در LDA (مرحله ۰: z = Σ⁻¹/²x) از نظر ساختاری با به‌روزرسانی کوواریانس فیلتر Kalman در اسلاید ۲۲ EPU یکسان است. معیار Fisher J(w) یک Rayleigh quotient تعمیم‌یافته است — همان ساختار در اسلاید ۱۴ EPU ظاهر می‌شود.",
      strategic: "نقش‌های مکمل: UFP/LDA primitive جداسازی را برای طبقه‌بندی حالت‌ها و انتقال‌ها در معماری ۱۰ دروازه EPU فراهم می‌کند. دروازه ۱۰ EPU (انتگرال AGM) توابع انتقال H(s) تولید می‌کند که ساختار قطب/صفر آن‌ها می‌تواند با استفاده از طبقه‌بندی فضای فاز به سبک LDA تحلیل شود.",
      keyPoints: [
        "سفیدسازی Mahalanobis ≡ به‌روزرسانی کوواریانس Kalman",
        "معیار Fisher = Rayleigh quotient تعمیم‌یافته",
        "فضای فاز LDA ↔ تحلیل قطب/صفر دروازه ۱۰ EPU",
        "طبقه‌بندی UFP: زبان رسمی برای عملیات فیلتر EPU",
        "مکمل: UFP primitive‌های جداسازی؛ EPU پیاده‌سازی سخت‌افزاری",
      ],
      tags: ["همپوشانی", "deck EPU", "فیلتر Kalman", "Rayleigh Quotient", "مکمل"],
    },
  },
  {
    id: 29, act: "Synthesis", actLabel: ACT_LABELS_A.Synthesis, imageUrl: imgA(29),
    en: {
      title: "Standalone Applications: From Genomics to Agent State Management",
      narrative: "The UFP framework stands independently as a comprehensive separation theory. Genomics: Sparse LDA for gene selection with p ≫ n (thousands of genes, hundreds of samples). Text classification: Diagonal LDA (Naive Bayes) for document categorization. Medical imaging: Kernel LDA for nonlinear class boundaries in high-dimensional feature spaces. Autonomous systems: Path 5 (Temporal Gate) for event-triggered control; Path 4 (Spectral Filter) for sensor fusion. Agent state management (Jotai): atom-resolved separation with precision invariant guarantees.",
      strategic: "The standalone value of this deck is the unified theoretical framework that connects seemingly disparate separation methods. A practitioner who understands the UFP can: (1) rapidly identify which of the 10 paths applies to a new problem; (2) select the appropriate variant using the 4-level decision procedure; (3) compose multiple filters using the algebra; (4) file a complete traceability report; (5) verify performance using the universal P = (F,S,T,E) vector. This is a complete design methodology.",
      keyPoints: [
        "Genomics: Sparse LDA for gene selection (p ≫ n)",
        "Text: Diagonal LDA / Naive Bayes for document categorization",
        "Medical imaging: Kernel LDA for nonlinear boundaries",
        "Autonomous systems: Temporal Gate + Spectral Filter for sensor fusion",
        "Agent state: atom-resolved separation with precision invariant",
      ],
      tags: ["Applications", "Genomics", "Text Classification", "Medical Imaging", "Standalone"],
    },
    fa: {
      title: "کاربردهای مستقل: از ژنومیک تا مدیریت حالت agent",
      narrative: "چارچوب UFP به صورت مستقل به عنوان یک نظریه جداسازی جامع ایستاده است. ژنومیک: Sparse LDA برای انتخاب ژن با p ≫ n. طبقه‌بندی متن: Diagonal LDA (Naive Bayes) برای دسته‌بندی اسناد. تصویربرداری پزشکی: Kernel LDA برای مرزهای کلاس غیرخطی. سیستم‌های خودمختار: مسیر ۵ (Temporal Gate) برای کنترل رویداد-محرک؛ مسیر ۴ (فیلتر طیفی) برای ادغام حسگر. مدیریت حالت agent (Jotai): جداسازی اتم‌محور با تضمین‌های اصل دقت.",
      strategic: "ارزش مستقل این deck چارچوب نظری یکپارچه‌ای است که روش‌های جداسازی ظاهراً متفاوت را به هم متصل می‌کند. یک متخصص که UFP را درک می‌کند می‌تواند: (۱) سریعاً تشخیص دهد کدام مسیر برای یک مسئله جدید اعمال می‌شود؛ (۲) نوع مناسب را با استفاده از روش تصمیم ۴ سطحی انتخاب کند؛ (۳) چندین فیلتر را با استفاده از جبر ترکیب کند.",
      keyPoints: [
        "ژنومیک: Sparse LDA برای انتخاب ژن (p ≫ n)",
        "متن: Diagonal LDA / Naive Bayes برای دسته‌بندی اسناد",
        "تصویربرداری پزشکی: Kernel LDA برای مرزهای غیرخطی",
        "سیستم‌های خودمختار: Temporal Gate + فیلتر طیفی برای ادغام حسگر",
        "حالت agent: جداسازی اتم‌محور با اصل دقت",
      ],
      tags: ["کاربردها", "ژنومیک", "طبقه‌بندی متن", "تصویربرداری پزشکی", "مستقل"],
    },
  },
  {
    id: 30, act: "Synthesis", actLabel: ACT_LABELS_A.Synthesis, imageUrl: imgA(30),
    en: {
      title: "Future Directions and Open Problems",
      narrative: "The UFP framework opens several research directions. (1) Online/streaming LDA: recursive updates to µ̂ₖ and Σ̂ as new data arrives — O(p²) per update. (2) Federated LDA: distributed estimation of scatter matrices without sharing raw data. (3) Differential privacy: Gaussian mechanism for µ̂ₖ and Σ̂ with (ε,δ)-DP guarantees. (4) Causal LDA: incorporating causal structure into the discrimination criterion. (5) Neural LDA: deep feature extraction + LDA head for end-to-end discriminative learning. (6) Quantum LDA: quantum algorithms for eigenvalue decomposition with potential speedup.",
      strategic: "Open problems: (1) Optimal regularization selection without cross-validation for general Σ structures beyond Ledoit-Wolf. (2) Formal guarantees for Kernel LDA generalization in the RKHS setting. (3) Atom-resolved LDA for compositional state systems — extending the precision invariant to streaming updates. (4) Theoretical connection between UFP composition algebra and category theory (filters as morphisms, composition as functor). (5) Unified treatment of all 10 paths under a single variational principle.",
      keyPoints: [
        "Online LDA: recursive updates O(p²) per sample",
        "Federated LDA: distributed scatter matrix estimation",
        "Differential privacy: (ε,δ)-DP for µ̂ₖ and Σ̂",
        "Neural LDA: deep features + LDA head",
        "Open: optimal regularization, RKHS guarantees, atom-resolved streaming, category theory",
      ],
      tags: ["Future Directions", "Online LDA", "Federated", "Privacy", "Open Problems"],
    },
    fa: {
      title: "جهت‌های آینده و مسائل باز",
      narrative: "چارچوب UFP چندین جهت تحقیقاتی را باز می‌کند. (۱) LDA آنلاین/جریانی: به‌روزرسانی‌های بازگشتی به µ̂ₖ و Σ̂ — O(p²) در هر به‌روزرسانی. (۲) LDA فدرال: تخمین توزیع‌شده ماتریس‌های پراکندگی بدون اشتراک‌گذاری داده‌های خام. (۳) حریم خصوصی دیفرانسیل: مکانیزم گاوسی برای µ̂ₖ و Σ̂ با تضمین‌های (ε,δ)-DP. (۴) LDA علّی: گنجاندن ساختار علّی در معیار تمایز. (۵) LDA عصبی: استخراج ویژگی عمیق + سر LDA.",
      strategic: "مسائل باز: (۱) انتخاب بهینه منظم‌سازی بدون cross-validation. (۲) تضمین‌های رسمی برای تعمیم Kernel LDA. (۳) LDA اتم‌محور برای سیستم‌های حالت ترکیبی. (۴) ارتباط نظری بین جبر ترکیب UFP و نظریه دسته‌بندی. (۵) درمان یکپارچه همه ۱۰ مسیر تحت یک اصل تغییراتی واحد.",
      keyPoints: [
        "LDA آنلاین: به‌روزرسانی‌های بازگشتی O(p²) در هر نمونه",
        "LDA فدرال: تخمین توزیع‌شده ماتریس پراکندگی",
        "حریم خصوصی دیفرانسیل: (ε,δ)-DP برای µ̂ₖ و Σ̂",
        "LDA عصبی: ویژگی‌های عمیق + سر LDA",
        "باز: منظم‌سازی بهینه، تضمین‌های RKHS، جریان اتم‌محور",
      ],
      tags: ["جهت‌های آینده", "LDA آنلاین", "فدرال", "حریم خصوصی", "مسائل باز"],
    },
  },
  {
    id: 31, act: "Synthesis", actLabel: ACT_LABELS_A.Synthesis, imageUrl: imgA(31),
    en: {
      title: "UFP Composition Algebra as Monoidal Category — Category Theory Foundations",
      narrative: "The Universal Filtration Primitive composition algebra (F1 composed with F2 = F3) has a precise categorical interpretation: it is a strict monoidal category (Filt, composed, Id) where objects are filter types, morphisms are filter compositions, and the monoidal product is sequential composition. The identity morphism is the identity filter Id(x) = x. This categorical structure has three important consequences: (1) it enables formal verification of filter pipeline correctness using categorical proof techniques; (2) it provides a compositional semantics for the 10-path taxonomy; (3) it connects the UFP framework to the broader literature on categorical signal processing. This is §19.3 of the source documentation — previously Absent from the portal.",
      strategic: "This slide elevates §19.3 (UFP Composition Algebra) from Absent to Full coverage. The monoidal category structure is not merely a theoretical curiosity — it is the mathematical foundation that makes the UFP framework formally verifiable. The same categorical machinery used to verify filter pipelines is used to verify the EPU's 10-Gate Architecture.",
      keyPoints: [
        "Monoidal category (Filt, composed, Id): objects = filter types, morphisms = compositions, tensor = sequential composition — strict monoidal (no coherence conditions needed)",
        "Functorial property: F(f composed g) = F(f) composed F(g) — filter application is a functor from the category of data transformations to the category of filters",
        "10-path taxonomy as objects: each of the 10 UFP paths (Gaussian, Kalman, Particle, etc.) is an object in Filt — the taxonomy is the object list",
        "Categorical proof technique: filter pipeline correctness = diagram commutativity — verified by the same Coq proof infrastructure as the PICAPD ISA",
        "Connection to EPU: the 10-Gate Architecture is a monoidal functor from Filt to the category of hardware gates — the mathematical bridge between software and silicon"
      ],
      tags: ["monoidal-category", "composition-algebra", "category-theory", "filter-pipeline", "formal-verification"],
    },
    fa: {
      title: "جبر ترکیب UFP به‌عنوان دسته‌بندی مونوئیدال — پایه‌های نظریه دسته‌بندی",
      narrative: "جبر ترکیب Universal Filtration Primitive یک تفسیر دسته‌ای دقیق دارد: یک دسته‌بندی مونوئیدال سخت (Filt, ∘, Id) است که در آن اشیاء انواع فیلتر، مورفیسم‌ها ترکیب‌های فیلتر و حاصل‌ضرب مونوئیدال ترکیب متوالی است. این §۱۹.۳ مستندات منبع است — قبلاً از پورتال غایب بود.",
      strategic: "این اسلاید §۱۹.۳ (جبر ترکیب UFP) را از غایب به پوشش کامل ارتقا می‌دهد. ساختار دسته‌بندی مونوئیدال صرفاً یک کنجکاوی نظری نیست — پایه ریاضی است که چارچوب UFP را رسماً قابل تأیید می‌کند.",
      keyPoints: [
        "دسته‌بندی مونوئیدال (Filt, ∘, Id): اشیاء = انواع فیلتر، مورفیسم‌ها = ترکیب‌ها، تانسور = ترکیب متوالی — مونوئیدال سخت (بدون شرایط انسجام)",
        "ویژگی فانکتوری: F(f ∘ g) = F(f) ∘ F(g) — اعمال فیلتر یک فانکتور از دسته‌بندی تبدیل‌های داده به دسته‌بندی فیلترها است",
        "طبقه‌بندی ۱۰ مسیره به‌عنوان اشیاء: هر یک از ۱۰ مسیر UFP (گاوسی، کالمن، ذره‌ای و غیره) یک شیء در Filt است",
        "تکنیک اثبات دسته‌ای: صحت خط لوله فیلتر = جابجایی نمودار — با همان زیرساخت اثبات Coq مانند PICAPD ISA تأیید شده",
        "ارتباط با EPU: معماری ۱۰ دروازه یک فانکتور مونوئیدال از Filt به دسته‌بندی دروازه‌های سخت‌افزاری است — پل ریاضی بین نرم‌افزار و سیلیکون"
      ],
      tags: ["دسته‌بندی-مونوئیدال", "جبر-ترکیب", "نظریه-دسته‌بندی", "خط-لوله-فیلتر", "تأیید-رسمی"],
    },
  },
];

export default slidesA;