import { useState, useMemo, useCallback } from "react";
import { slidesD, ACT_LABELS_D, type ActD, type SlideD } from "@/data/slidesD";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// ─── Act color palette (teal/cyan theme) ──────────────────────────────────────
const actColorsD: Record<ActD, string> = {
  AgentFoundation:  "#0D9488",
  Communication:    "#0891B2",
  TrustConsensus:   "#0E7490",
  MemoryArch:       "#0369A1",
  MechanicalSignal: "#047857",
  Coordination:     "#065F46",
  LLMIntegration:   "#1D4ED8",
  SystemSynthesis:  "#4F46E5",
};

// ─── ActBadge ─────────────────────────────────────────────────────────────────
function ActBadgeD({ act, lang }: { act: ActD; lang: "en" | "fa" }) {
  const color = actColorsD[act];
  const label = ACT_LABELS_D[act][lang];
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
function SlideCardD({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: SlideD;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColorsD[slide.act];

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
        backgroundColor: "#F0FAFA",
        borderColor: "#B2E0E0",
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
            {String(slide.id).padStart(3, "0")}
          </div>
        </div>
      )}
      {/* Body */}
      <div className="p-4" style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <div className="mb-2">
          <ActBadgeD act={slide.act} lang={lang} />
        </div>
        <h3
          className="text-sm font-semibold mb-2 leading-snug"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
            color: "#0F2A2A",
          }}
        >
          {highlight(content.title)}
        </h3>
        <p
          className="text-xs leading-relaxed mb-3 line-clamp-3"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
            color: "#4B6B6B",
          }}
        >
          {highlight(content.narrative)}
        </p>
        {/* Key Points */}
        <ul className="space-y-1 mb-3">
          {content.keyPoints.slice(0, 2).map((kp, i) => (
            <li
              key={i}
              className="text-xs flex items-start gap-1.5"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#4B6B6B",
              }}
            >
              <span style={{ color: accentColor, marginTop: "2px", flexShrink: 0 }}>▸</span>
              <span>{highlight(kp)}</span>
            </li>
          ))}
        </ul>
        {/* Tags */}
        <div className={`flex flex-wrap gap-1 ${isRTL ? "flex-row-reverse" : ""}`}>
          {content.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-1.5 py-0.5 rounded-sm"
              style={{
                backgroundColor: accentColor + "15",
                color: accentColor,
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
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
function SlideModalD({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: SlideD;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColorsD[slide.act];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "#F0FAFA", border: `1px solid ${accentColor}44` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-6 py-3 border-b"
          style={{ backgroundColor: "#F0FAFA", borderColor: "#B2E0E0" }}
        >
          <div className="flex items-center gap-3">
            <ActBadgeD act={slide.act} lang={lang} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
              {String(slide.id).padStart(3, "0")} / 120
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs px-3 py-1 border rounded-sm"
            style={{ fontFamily: "'Space Mono', monospace", borderColor: "#B2E0E0", color: "#4B6B6B" }}
          >
            ✕
          </button>
        </div>
        {/* Image */}
        {slide.imageUrl && (
          <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
            <img src={slide.imageUrl} alt={content.title} className="w-full h-full object-cover" />
          </div>
        )}
        {/* Content */}
        <div className="p-6" style={{ direction: isRTL ? "rtl" : "ltr" }}>
          <h2
            className="text-xl font-bold mb-4 leading-snug"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
              color: "#0F2A2A",
            }}
          >
            {content.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-5"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              color: "#2D4A4A",
            }}
          >
            {content.narrative}
          </p>
          {/* Strategic */}
          <div
            className="p-4 mb-5 rounded-sm border-l-2"
            style={{ backgroundColor: accentColor + "10", borderColor: accentColor }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: "'Space Mono', monospace", color: accentColor }}
            >
              {isRTL ? "اهمیت استراتژیک" : "Strategic Significance"}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#2D4A4A",
              }}
            >
              {content.strategic}
            </p>
          </div>
          {/* Key Points */}
          <div className="mb-5">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Space Mono', monospace", color: accentColor }}
            >
              {isRTL ? "نکات کلیدی" : "Key Points"}
            </p>
            <ul className="space-y-2">
              {content.keyPoints.map((kp, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    color: "#2D4A4A",
                  }}
                >
                  <span style={{ color: accentColor, flexShrink: 0 }}>▸</span>
                  {kp}
                </li>
              ))}
            </ul>
          </div>
          {/* Tags */}
          <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-sm"
                style={{
                  backgroundColor: accentColor + "18",
                  color: accentColor,
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Navigation */}
        <div
          className="sticky bottom-0 flex items-center justify-between px-6 py-3 border-t"
          style={{ backgroundColor: "#F0FAFA", borderColor: "#B2E0E0" }}
        >
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="text-xs px-4 py-1.5 border rounded-sm disabled:opacity-30"
            style={{
              fontFamily: "'Space Mono', monospace",
              borderColor: "#B2E0E0",
              color: "#4B6B6B",
            }}
          >
            {isRTL ? "بعدی ›" : "‹ Prev"}
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="text-xs px-4 py-1.5 border rounded-sm disabled:opacity-30"
            style={{
              fontFamily: "'Space Mono', monospace",
              borderColor: "#B2E0E0",
              color: "#4B6B6B",
            }}
          >
            {isRTL ? "‹ قبلی" : "Next ›"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main DeckD Page ──────────────────────────────────────────────────────────
const acts: ActD[] = [
  "AgentFoundation",
  "Communication",
  "TrustConsensus",
  "MemoryArch",
  "MechanicalSignal",
  "Coordination",
  "LLMIntegration",
  "SystemSynthesis",
];

export default function DeckD() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<ActD | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<SlideD | null>(null);

  const filteredSlides = useMemo(() => {
    let result = slidesD;
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
          en.strategic.toLowerCase().includes(q) ||
          en.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          en.tags.some((t) => t.toLowerCase().includes(q)) ||
          fa.title.toLowerCase().includes(q) ||
          fa.narrative.toLowerCase().includes(q) ||
          fa.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          fa.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }
    return result;
  }, [searchQuery, activeAct]);

  const selectedIdx = selectedSlide ? filteredSlides.indexOf(selectedSlide) : -1;

  const handleActChange = useCallback((act: ActD | "All") => {
    setActiveAct(act);
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F0FAFA" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#F0FAFA", borderColor: "#B2E0E0" }}
      >
        <div
          className="container mx-auto px-4 lg:px-8 h-14 flex items-center justify-between"
          style={{ maxWidth: "1400px" }}
        >
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link href="/">
              <span
                className="text-xs cursor-pointer"
                style={{ fontFamily: "'Space Mono', monospace", color: "#0D9488" }}
              >
                ← EPU
              </span>
            </Link>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
              /
            </span>
            <span
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                fontSize: "12px",
                color: "#0F2A2A",
              }}
            >
              {isRTL ? "Deck D — یکپارچه‌سازی TWIN" : "Deck D — TWIN Integration"}
            </span>
          </div>
          {/* Search */}
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isRTL ? "جستجو..." : "Search..."}
              className="text-xs px-3 py-1.5 border rounded-sm outline-none w-40 lg:w-56"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                backgroundColor: "#E0F5F5",
                borderColor: "#B2E0E0",
                color: "#0F2A2A",
                direction: isRTL ? "rtl" : "ltr",
              }}
            />
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="py-12 px-4"
        style={{ background: "linear-gradient(135deg, #001A1A 0%, #003333 50%, #001A1A 100%)" }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Mono', monospace", color: "#0D9488" }}>
              {isRTL ? "سند فنی — TWIN_INT_2026_001" : "Technical Document — TWIN_INT_2026_001"}
            </p>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F0FAFA",
              }}
            >
              {isRTL
                ? "یکپارچه‌سازی TWIN با EPU: معماری کارگزاران هوشمند"
                : "TWIN Integration with EPU: Multi-Agent Architecture"}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#7ABFBF",
                maxWidth: "600px",
              }}
            >
              {isRTL
                ? "۱۲۰ اسلاید پوشش‌دهنده بنیاد عوامل هوشمند، گذرگاه پیام، اعتماد BFT، معماری حافظه، پروتکل سیگنال مکانیکی، هماهنگی ایستگاه‌ها، یکپارچه‌سازی LLM، و برآیند TWIN-EPU."
                : "120 slides covering agent foundation, message bus, BFT trust, memory architecture, mechanical signal protocol, station coordination, LLM integration, and TWIN-EPU synthesis."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Act Filter ── */}
      <div className="border-b" style={{ backgroundColor: "#F0FAFA", borderColor: "#B2E0E0" }}>
        <div className="container mx-auto px-4 lg:px-8 py-3" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
            {(["All", ...acts] as (ActD | "All")[]).map((act) => {
              const isActive = activeAct === act;
              const color = act === "All" ? "#6B7280" : actColorsD[act];
              return (
                <button
                  key={act}
                  onClick={() => handleActChange(act)}
                  className="text-xs px-3 py-1.5 rounded-sm border transition-all"
                  style={{
                    backgroundColor: isActive ? color + "18" : "transparent",
                    borderColor: isActive ? color : "#B2E0E0",
                    color: isActive ? color : "#6B7280",
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  }}
                >
                  {act === "All"
                    ? isRTL ? "همه" : "All"
                    : ACT_LABELS_D[act][lang]}
                </button>
              );
            })}
            <span
              className="text-xs ml-auto"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
            >
              {filteredSlides.length} / 120
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
              <SlideCardD
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
        <SlideModalD
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
