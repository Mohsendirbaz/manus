import { useState, useMemo, useCallback } from "react";
import { slidesC, ACT_LABELS_C, type ActC, type SlideC } from "@/data/slidesC";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// ─── Act color palette (amber/gold theme) ─────────────────────────────────────
const actColorsC: Record<ActC, string> = {
  Executive:    "#F59E0B",
  PDC:          "#D97706",
  SAGP:         "#B45309",
  PhysicsFound: "#FBBF24",
  ArchDeep:     "#F97316",
  Financial:    "#EF4444",
  Validation:   "#10B981",
  Integration:  "#8B5CF6",
};

// ─── ActBadge ─────────────────────────────────────────────────────────────────
function ActBadgeC({ act, lang }: { act: ActC; lang: "en" | "fa" }) {
  const color = actColorsC[act];
  const label = ACT_LABELS_C[act][lang];
  const isFa = lang === "fa";
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
      style={{
        backgroundColor: color + "22",
        color,
        fontFamily: isFa ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
        letterSpacing: isFa ? "0" : "0.02em",
      }}
    >
      {label}
    </span>
  );
}

// ─── SlideCard ────────────────────────────────────────────────────────────────
function SlideCardC({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: SlideC;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColorsC[slide.act];

  function highlight(text: string) {
    if (!searchQuery.trim()) return text;
    const q = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${q})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark key={i} style={{ backgroundColor: accentColor + "33", color: accentColor, borderRadius: "2px" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  return (
    <article
      onClick={onClick}
      className="cursor-pointer border rounded-sm overflow-hidden group"
      style={{
        backgroundColor: "#FDFCFA",
        borderColor: "#E8E5DF",
        animationDelay: `${animationDelay}ms`,
      }}
    >
      {/* Image */}
      {slide.imageUrl && (
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            src={slide.imageUrl}
            alt={content.title}
            className="w-full h-full object-cover"
            style={{ transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div
            className="absolute top-2 left-2"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#9CA3AF" }}
          >
            {String(slide.id).padStart(2, "0")}
          </div>
        </div>
      )}
      {/* Body */}
      <div className="p-4" style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <div className="mb-2">
          <ActBadgeC act={slide.act} lang={lang} />
        </div>
        <h3
          className="text-sm font-semibold mb-2 leading-snug"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
            color: "#1A1A1A",
          }}
        >
          {highlight(content.title)}
        </h3>
        <p
          className="text-xs leading-relaxed mb-3 line-clamp-3"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
            color: "#6B7280",
          }}
        >
          {highlight(content.narrative)}
        </p>
        {/* Tags */}
        <div className={`flex flex-wrap gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
          {content.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 rounded-sm"
              style={{
                backgroundColor: "#F3F4F6",
                color: "#6B7280",
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

// ─── SlideModal ───────────────────────────────────────────────────────────────
function SlideModalC({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: SlideC;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColorsC[slide.act];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "#FDFCFA", direction: isRTL ? "rtl" : "ltr" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#F3F4F6", color: "#6B7280" }}
        >
          ×
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative" style={{ aspectRatio: "16/9", minHeight: "280px" }}>
            {slide.imageUrl ? (
              <img src={slide.imageUrl} alt={content.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#1A1A2E" }}>
                <span style={{ color: accentColor, fontFamily: "'Space Mono', monospace", fontSize: "24px" }}>
                  C-{String(slide.id).padStart(2, "0")}
                </span>
              </div>
            )}
            {/* Nav */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-3 py-1.5 rounded-sm text-xs disabled:opacity-30"
                style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#F8F7F4", fontFamily: "'Space Mono', monospace" }}
              >
                ← {isRTL ? "قبلی" : "Prev"}
              </button>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#9CA3AF", alignSelf: "center" }}>
                {slide.id} / 74
              </span>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="px-3 py-1.5 rounded-sm text-xs disabled:opacity-30"
                style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#F8F7F4", fontFamily: "'Space Mono', monospace" }}
              >
                {isRTL ? "بعدی" : "Next"} →
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto" style={{ maxHeight: "80vh" }}>
            <div className="mb-3">
              <ActBadgeC act={slide.act} lang={lang} />
            </div>
            <h2
              className="text-xl font-bold mb-3 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#1A1A1A",
              }}
            >
              {content.title}
            </h2>

            {/* Strategic */}
            <div className="mb-4 p-3 rounded-sm border-l-2" style={{ borderColor: accentColor, backgroundColor: accentColor + "08" }}>
              <p className="text-xs font-semibold mb-1" style={{ color: accentColor, fontFamily: "'Space Mono', monospace" }}>
                {isRTL ? "دیدگاه استراتژیک" : "Strategic Insight"}
              </p>
              <p className="text-sm leading-relaxed" style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif", color: "#374151" }}>
                {content.strategic}
              </p>
            </div>

            {/* Narrative */}
            <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif", color: "#4B5563" }}>
              {content.narrative}
            </p>

            {/* Key Points */}
            <div className="mb-4">
              <p className="text-xs font-semibold mb-2" style={{ color: accentColor, fontFamily: "'Space Mono', monospace" }}>
                {isRTL ? "نکات کلیدی" : "Key Points"}
              </p>
              <ul className="space-y-1.5">
                {content.keyPoints.map((kp, i) => (
                  <li key={i} className="flex gap-2 text-xs" style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif", color: "#374151" }}>
                    <span style={{ color: accentColor, flexShrink: 0 }}>▸</span>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className={`flex flex-wrap gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-sm"
                  style={{ backgroundColor: accentColor + "18", color: accentColor, fontFamily: "'Space Mono', monospace", fontSize: "10px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DeckC() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<ActC | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<SlideC | null>(null);

  const acts = Object.keys(ACT_LABELS_C) as ActC[];

  const filteredSlides = useMemo(() => {
    let result = slidesC;
    if (activeAct !== "All") {
      result = result.filter((s) => s.act === activeAct);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => {
        const en = s.en;
        const fa = s.fa;
        return (
          en.title.toLowerCase().includes(q) ||
          en.narrative.toLowerCase().includes(q) ||
          en.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          en.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          fa.title.toLowerCase().includes(q) ||
          fa.narrative.toLowerCase().includes(q) ||
          fa.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          fa.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      });
    }
    return result;
  }, [searchQuery, activeAct]);

  const selectedIdx = selectedSlide ? filteredSlides.findIndex((s) => s.id === selectedSlide.id) : -1;

  const handleActChange = useCallback((act: ActC | "All") => {
    setActiveAct(act);
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F7F4" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#FDFCFA", borderColor: "#E8E5DF" }}
      >
        <div
          className="container mx-auto px-4 lg:px-8 h-14 flex items-center justify-between"
          style={{ maxWidth: "1400px" }}
        >
          {/* Back link */}
          <Link
            href="/decks"
            className="text-xs flex items-center gap-1"
            style={{ fontFamily: "'Space Mono', monospace", color: "#6B7280" }}
          >
            ← {isRTL ? "همه Deck‌ها" : "All Decks"}
          </Link>

          {/* Title */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{ backgroundColor: "#F59E0B22", color: "#F59E0B", fontFamily: "'Space Mono', monospace" }}
            >
              DECK C
            </span>
            <span
              className="text-sm font-semibold hidden sm:block"
              style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif", color: "#1A1A1A" }}
            >
              {isRTL ? "پیاده‌سازی Ghost Autonomy" : "Ghost Autonomy Implementation"}
            </span>
          </div>

          {/* Search + Lang */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRTL ? "جستجو…" : "Search…"}
              className="text-xs border rounded-sm px-3 py-1.5 w-40 sm:w-56"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                borderColor: "#D0CCC5",
                backgroundColor: "#F8F7F4",
                color: "#1A1A1A",
                direction: isRTL ? "rtl" : "ltr",
              }}
            />
            <button
              onClick={() => {
                const e = new CustomEvent("toggle-language");
                window.dispatchEvent(e);
              }}
              className="text-xs px-2 py-1.5 border rounded-sm"
              style={{ fontFamily: "'Space Mono', monospace", borderColor: "#D0CCC5", color: "#5A5A5A" }}
            >
              {isRTL ? "EN" : "فا"}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, #1A0A00 0%, #2D1500 50%, #1A0A00 100%)" }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Mono', monospace", color: "#F59E0B" }}>
              {isRTL ? "سند فنی — GA_IMPL_2026_001" : "Technical Document — GA_IMPL_2026_001"}
            </p>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {isRTL
                ? "پیاده‌سازی Ghost Autonomy: معماری، ISA، و اعتبارسنجی"
                : "Ghost Autonomy Implementation: Architecture, ISA & Validation"}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#B0ADA8",
                maxWidth: "600px",
              }}
            >
              {isRTL
                ? "۷۴ اسلاید پوشش‌دهنده ISA PICAPD، معماری Queen Bee BFT، پایه فیزیکی، مدل مالی، و نتایج اعتبارسنجی تجربی."
                : "74 slides covering the PICAPD ISA, Queen Bee BFT architecture, physics foundation, financial model, and experimental validation results."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Act Filter ── */}
      <div className="border-b" style={{ backgroundColor: "#F8F7F4", borderColor: "#E8E5DF" }}>
        <div className="container mx-auto px-4 lg:px-8 py-3" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
            {(["All", ...acts] as (ActC | "All")[]).map((act) => {
              const isActive = activeAct === act;
              const color = act === "All" ? "#6B7280" : actColorsC[act];
              return (
                <button
                  key={act}
                  onClick={() => handleActChange(act)}
                  className="text-xs px-3 py-1.5 rounded-sm border transition-all"
                  style={{
                    backgroundColor: isActive ? color + "18" : "transparent",
                    borderColor: isActive ? color : "#D0CCC5",
                    color: isActive ? color : "#6B7280",
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  }}
                >
                  {act === "All"
                    ? isRTL ? "همه" : "All"
                    : ACT_LABELS_C[act][lang]}
                </button>
              );
            })}
            <span
              className="text-xs ml-auto"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
            >
              {filteredSlides.length} / 74
            </span>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <main className="container mx-auto px-4 lg:px-8 py-8 pb-24" style={{ maxWidth: "1400px" }}>
        {filteredSlides.length === 0 ? (
          <div className="text-center py-24" style={{ color: "#9CA3AF" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px" }}>
              {isRTL ? "نتیجه‌ای یافت نشد" : "No results found"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSlides.map((slide, idx) => (
              <SlideCardC
                key={slide.id}
                slide={slide}
                lang={lang}
                isRTL={isRTL}
                searchQuery={searchQuery}
                animationDelay={idx * 30}
                onClick={() => setSelectedSlide(slide)}
              />
            ))}
          </div>
        )}
      </main>

      {/* ── Modal ── */}
      {selectedSlide && (
        <SlideModalC
          slide={selectedSlide}
          lang={lang}
          isRTL={isRTL}
          onClose={() => setSelectedSlide(null)}
          onPrev={() => {
            if (selectedIdx > 0) setSelectedSlide(filteredSlides[selectedIdx - 1]);
          }}
          onNext={() => {
            if (selectedIdx < filteredSlides.length - 1) setSelectedSlide(filteredSlides[selectedIdx + 1]);
          }}
          hasPrev={selectedIdx > 0}
          hasNext={selectedIdx < filteredSlides.length - 1}
        />
      )}
    </div>
  );
}
