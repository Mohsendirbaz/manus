import { useState, useMemo, useCallback } from "react";
import { slidesA, ACT_LABELS_A, type ActA, type SlideA } from "@/data/slidesA";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// ─── Act color palette (signal blue theme) ───────────────────────────────────
const actColorsA: Record<ActA, string> = {
  Foundation:  "#4FC3F7",
  Taxonomy:    "#29B6F6",
  Composition: "#0288D1",
  LDA:         "#0277BD",
  Variants:    "#81D4FA",
  Decision:    "#B3E5FC",
  Performance: "#E1F5FE",
  Synthesis:   "#4DD0E1",
};

// ─── ActBadge ─────────────────────────────────────────────────────────────────
function ActBadgeA({ act, lang }: { act: ActA; lang: "en" | "fa" }) {
  const color = actColorsA[act];
  const label = ACT_LABELS_A[act][lang];
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
function SlideCardA({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: SlideA;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColorsA[slide.act];

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
          <ActBadgeA act={slide.act} lang={lang} />
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
function SlideModalA({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: SlideA;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColorsA[slide.act];

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
          ×
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
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                color: "#9CA3AF",
              }}
            >
              {String(slide.id).padStart(2, "0")} / 30
            </span>
            <ActBadgeA act={slide.act} lang={lang} />
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
                  <span style={{ color: accentColor, marginTop: "4px", flexShrink: 0 }}>▸</span>
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

// ─── Main DeckA Page ──────────────────────────────────────────────────────────
export default function DeckA() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<ActA | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<SlideA | null>(null);

  const acts = useMemo(() => {
    const seen = new Set<ActA>();
    slidesA.forEach((s) => seen.add(s.act));
    return Array.from(seen);
  }, []);

  const filteredSlides = useMemo(() => {
    let result = slidesA;
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

  const handleActChange = useCallback((act: ActA | "All") => {
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
                {isRTL ? "Deck A — پریمیتیو فیلتراسیون جهانی" : "Deck A — Universal Filtration Primitive"}
              </p>
              <p className="text-xs mt-0.5" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                {isRTL ? "۳۰ اسلاید · ۸ پرده" : "30 Slides · 8 Acts"}
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
                  ×
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
        style={{ background: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)" }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Mono', monospace", color: "#4FC3F7" }}>
              {isRTL ? "سند فنی — FilterDesignInventory" : "Technical Document — FilterDesignInventory"}
            </p>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {isRTL
                ? "پریمیتیو فیلتراسیون جهانی: یک چارچوب یکپارچه"
                : "Universal Filtration Primitive: A Unifying Framework"}
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
                ? "هر مکانیزم جداسازی — از استنسیل فضایی تا LDA آماری — نمونه‌سازی یک primitive پنج‌مؤلفه‌ای واحد است."
                : "Every separation mechanism — from spatial stencil to statistical LDA — is an instantiation of a single five-component primitive."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Act Filter ── */}
      <div className="border-b" style={{ backgroundColor: "#F8F7F4", borderColor: "#E8E5DF" }}>
        <div className="container mx-auto px-4 lg:px-8 py-3" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
            {(["All", ...acts] as (ActA | "All")[]).map((act) => {
              const isActive = activeAct === act;
              const color = act === "All" ? "#6B7280" : actColorsA[act];
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
                    : ACT_LABELS_A[act][lang]}
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
              <SlideCardA
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
        <SlideModalA
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
