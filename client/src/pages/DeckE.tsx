import { useState, useMemo, useCallback } from "react";
import { slidesE, ACT_LABELS_E, type ActE, type SlideE } from "@/data/slidesE";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

// ─── Act color palette (teal/cyan theme) ──────────────────────────────────────
const actColorsE: Record<ActE, string> = {
  ExecutiveFraming:      "#7C3AED",
  CabinController:       "#8B5CF6",
  HydrogenPlatform:      "#6D28D9",
  IntegratedElectronics: "#5B21B6",
  SensorGovernance:      "#4C1D95",
  TEALCAMoat:            "#A78BFA",
  
  
};

// ─── ActBadge ─────────────────────────────────────────────────────────────────
function ActBadgeE({ act, lang }: { act: ActE; lang: "en" | "fa" }) {
  const color = actColorsE[act];
  const label = ACT_LABELS_E[act][lang];
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
function SlideCardE({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: SlideE;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColorsE[slide.act];

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
        backgroundColor: "#F5F3FF",
        borderColor: "#C4B5FD",
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
          <ActBadgeE act={slide.act} lang={lang} />
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
function SlideModalE({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: SlideE;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColorsE[slide.act];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "#F5F3FF", border: `1px solid ${accentColor}44` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-6 py-3 border-b"
          style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}
        >
          <div className="flex items-center gap-3">
            <ActBadgeE act={slide.act} lang={lang} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#9CA3AF" }}>
              {String(slide.id).padStart(3, "0")} / 30
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-xs px-3 py-1 border rounded-sm"
            style={{ fontFamily: "'Space Mono', monospace", borderColor: "#C4B5FD", color: "#4B6B6B" }}
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
          style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}
        >
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="text-xs px-4 py-1.5 border rounded-sm disabled:opacity-30"
            style={{
              fontFamily: "'Space Mono', monospace",
              borderColor: "#C4B5FD",
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
              borderColor: "#C4B5FD",
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

// ─── Main DeckE Page ──────────────────────────────────────────────────────────
const acts: ActE[] = [
  "ExecutiveFraming",
  "CabinController",
  "HydrogenPlatform",
  "IntegratedElectronics",
  "SensorGovernance",
  "TEALCAMoat",
];

export default function DeckE() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<ActE | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<SlideE | null>(null);

  const filteredSlides = useMemo(() => {
    let result = slidesE;
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

  const handleActChange = useCallback((act: ActE | "All") => {
    setActiveAct(act);
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3FF" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}
      >
        <div
          className="container mx-auto px-4 lg:px-8 h-14 flex items-center justify-between"
          style={{ maxWidth: "1400px" }}
        >
          <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link href="/">
              <span
                className="text-xs cursor-pointer"
                style={{ fontFamily: "'Space Mono', monospace", color: "#7C3AED" }}
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
                borderColor: "#C4B5FD",
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
        style={{ background: "linear-gradient(135deg, #0D0A1A 0%, #1A0D33 50%, #0D0A1A 100%)" }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Space Mono', monospace", color: "#7C3AED" }}>
              {isRTL ? "سند فنی — EPU_CAB_2026_001" : "Technical Document — EPU_CAB_2026_001"}
            </p>
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F0FAFA",
              }}
            >
              {isRTL
                ? "نمای داخلی و کابین: معماری پلتفرم EPU"
                : "Interior & Cabin View: EPU Platform Architecture"}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#A78BFA",
                maxWidth: "600px",
              }}
            >
              {isRTL
                ? "۳۰ اسلاید پوشش‌دهنده چارچوب اجرایی، کنترلر کابین بدون راننده، پلتفرم هیدروژن، الکترونیک یکپارچه، منشور حسگرها، و مزیت رقابتی TEA/LCA."
                : "30 slides covering executive framing, driverless cabin controller, hydrogen platform, integrated electronics, sensor governance, and TEA/LCA strategic moat."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Act Filter ── */}
      <div className="border-b" style={{ backgroundColor: "#F5F3FF", borderColor: "#C4B5FD" }}>
        <div className="container mx-auto px-4 lg:px-8 py-3" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
            {(["All", ...acts] as (ActE | "All")[]).map((act) => {
              const isActive = activeAct === act;
              const color = act === "All" ? "#6B7280" : actColorsE[act];
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
                    : ACT_LABELS_E[act][lang]}
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
              <SlideCardE
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
        <SlideModalE
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
