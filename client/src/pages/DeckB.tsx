import { useState, useMemo, useCallback } from "react";
import { slidesB, ACT_LABELS_B, type ActB, type SlideB } from "@/data/slidesB";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// ─── Act color palette (temporal green theme) ─────────────────────────────────
const actColorsB: Record<ActB, string> = {
  Foundation:   "#00C853",
  T0Manager:    "#00BFA5",
  Operators:    "#1DE9B6",
  Landauer:     "#64FFDA",
  Constraints:  "#00E676",
  LLM:          "#69F0AE",
  Synthesis:    "#B9F6CA",
};

// ─── ActBadge ─────────────────────────────────────────────────────────────────
function ActBadgeB({ act, lang }: { act: ActB; lang: "en" | "fa" }) {
  const color = actColorsB[act];
  const label = ACT_LABELS_B[act][lang];
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
function SlideCardB({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: SlideB;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColorsB[slide.act];

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
      <div className={`p-4 ${isRTL ? "text-right" : ""}`}>
        <div className={`flex items-center gap-2 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
          <ActBadgeB act={slide.act} lang={lang} />
        </div>
        <h3
          className="text-sm font-semibold mb-1 leading-snug"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
            color: "#1A1A1A",
          }}
        >
          {highlight(content.title)}
        </h3>
        <p
          className="text-xs leading-relaxed line-clamp-3"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
            color: "#6B7280",
          }}
        >
          {highlight(content.narrative)}
        </p>
        {/* Tags */}
        {content.tags && content.tags.length > 0 && (
          <div className={`flex flex-wrap gap-1 mt-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-1.5 py-0.5 rounded"
                style={{
                  backgroundColor: accentColor + "11",
                  color: accentColor,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ─── SlideModal ───────────────────────────────────────────────────────────────
function SlideModalB({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: SlideB;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColorsB[slide.act];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "#FDFCFA" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-700 text-xl font-light"
        >
          x
        </button>
        {/* Image */}
        {slide.imageUrl && (
          <img
            src={slide.imageUrl}
            alt={content.title}
            className="w-full object-cover rounded-t-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        )}
        {/* Content */}
        <div className={`p-6 ${isRTL ? "text-right" : ""}`}>
          <div className={`flex items-center gap-2 mb-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
              {String(slide.id).padStart(2, "0")} / 30
            </span>
            <ActBadgeB act={slide.act} lang={lang} />
          </div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
              color: "#1A1A1A",
            }}
          >
            {content.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              color: "#4B5563",
            }}
          >
            {content.narrative}
          </p>
          {content.strategic && (
            <blockquote
              className="border-l-2 pl-4 mb-4 italic text-sm"
              style={{ borderColor: accentColor, color: "#6B7280" }}
            >
              {content.strategic}
            </blockquote>
          )}
          {content.keyPoints && content.keyPoints.length > 0 && (
            <ul className={`space-y-1 mb-4 ${isRTL ? "pr-4" : "pl-4"}`}>
              {content.keyPoints.map((pt, i) => (
                <li
                  key={i}
                  className="text-sm flex items-start gap-2"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    color: "#374151",
                  }}
                >
                  <span style={{ color: accentColor, marginTop: "4px", flexShrink: 0 }}>&#9658;</span>
                  {pt}
                </li>
              ))}
            </ul>
          )}
          {/* Tags */}
          {content.tags && content.tags.length > 0 && (
            <div className={`flex flex-wrap gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: accentColor + "15",
                    color: accentColor,
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Navigation */}
        <div className="flex items-center justify-between px-6 pb-6">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="text-sm px-4 py-2 border rounded-sm disabled:opacity-30"
            style={{ borderColor: "#D0CCC5", color: "#5A5A5A" }}
          >
            {isRTL ? "بعدی ›" : "‹ Prev"}
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="text-sm px-4 py-2 border rounded-sm disabled:opacity-30"
            style={{ borderColor: "#D0CCC5", color: "#5A5A5A" }}
          >
            {isRTL ? "‹ قبلی" : "Next ›"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main DeckB Page ──────────────────────────────────────────────────────────
export default function DeckB() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<ActB | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<SlideB | null>(null);

  const acts = useMemo(() => {
    const seen = new Set<ActB>();
    slidesB.forEach((s) => seen.add(s.act));
    return Array.from(seen);
  }, []);

  const filteredSlides = useMemo(() => {
    let result = slidesB;
    if (activeAct !== "All") result = result.filter((s) => s.act === activeAct);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => {
        const en = s.en;
        const fa = s.fa;
        return (
          en.title.toLowerCase().includes(q) ||
          en.narrative.toLowerCase().includes(q) ||
          en.keyPoints.some((k) => k.toLowerCase().includes(q)) ||
          en.tags.some((t) => t.toLowerCase().includes(q)) ||
          fa.title.toLowerCase().includes(q) ||
          fa.narrative.toLowerCase().includes(q)
        );
      });
    }
    return result;
  }, [searchQuery, activeAct]);

  const handleActChange = useCallback((act: ActB | "All") => {
    setActiveAct(act);
    setSearchQuery("");
  }, []);

  const selectedIdx = selectedSlide ? filteredSlides.findIndex((s) => s.id === selectedSlide.id) : -1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F7F4", direction: isRTL ? "rtl" : "ltr" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "rgba(248,247,244,0.95)", backdropFilter: "blur(8px)", borderColor: "#E8E5DF" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-4 py-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Back link */}
            <Link href="/">
              <span
                className="text-xs px-3 py-1.5 border rounded-sm cursor-pointer"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  borderColor: "#D0CCC5",
                  color: "#5A5A5A",
                }}
              >
                {isRTL ? "← EPU" : "← EPU"}
              </span>
            </Link>
            {/* Title */}
            <div className={isRTL ? "text-right" : ""}>
              <p
                className="text-sm font-bold leading-none"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  color: "#1A1A1A",
                }}
              >
                {isRTL ? "Deck B — دستور زمانی به عنوان مدیریت حالت" : "Deck B — Tense Grammar as State Management"}
              </p>
              <p className="text-xs mt-0.5" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                {isRTL ? "۳۰ اسلاید · ۷ پرده" : "30 Slides · 7 Acts"}
              </p>
            </div>
            {/* Search */}
            <div className="flex-1 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? "جستجو در اسلایدها..." : "Search slides..."}
                className="w-full px-4 py-2 text-sm border rounded-sm outline-none"
                style={{
                  backgroundColor: "#FDFCFA",
                  borderColor: "#D0CCC5",
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  color: "#1A1A1A",
                  direction: isRTL ? "rtl" : "ltr",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${isRTL ? "left-3" : "right-3"}`}
                >
                  x
                </button>
              )}
            </div>
            {/* Language toggle */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-language"))}
              className="text-xs px-3 py-1.5 border rounded-sm"
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
        style={{ background: "linear-gradient(135deg, #0A1F0A 0%, #0D2B1A 50%, #0A2820 100%)" }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Mono', monospace", color: "#00C853" }}>
              {isRTL ? "سند فنی — TemporalStateManagement" : "Technical Document — TemporalStateManagement"}
            </p>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {isRTL
                ? "دستور زمانی به عنوان مدیریت حالت: T0 به عنوان مدیر حالت زمانی"
                : "Tense Grammar as State Management: T0 as the Temporal State Manager"}
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
                ? "T0 یک زمان نیست — یک ماشین حالت برای استدلال زمانی است. هر سیستم زمانی — از ODEها تا LLMها — یک عملگر T0 دارد."
                : "T0 is not a tense — it is a state machine for temporal reasoning. Every temporal system — from ODEs to LLMs — has a T0 operator."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Act Filter ── */}
      <div className="border-b" style={{ backgroundColor: "#F8F7F4", borderColor: "#E8E5DF" }}>
        <div className="container mx-auto px-4 lg:px-8 py-3" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
            {(["All", ...acts] as (ActB | "All")[]).map((act) => {
              const isActive = activeAct === act;
              const color = act === "All" ? "#6B7280" : actColorsB[act];
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
                    : ACT_LABELS_B[act][lang]}
                </button>
              );
            })}
            <span
              className="text-xs ml-auto"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
            >
              {filteredSlides.length} / 30
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
              <SlideCardB
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
        <SlideModalB
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
