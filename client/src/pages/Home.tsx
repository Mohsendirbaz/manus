import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "wouter";
import { slides60, acts, actColors, ACT_LABELS, type Act, type Slide60 } from "@/data/slides60";
import { ui60 } from "@/data/translations60";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Sub-components ──────────────────────────────────────────────────────────

function ActBadge({ act, lang }: { act: Act; lang: "en" | "fa" }) {
  const color = actColors[act];
  const label = ACT_LABELS[act][lang];
  const isFa = lang === "fa";
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
      style={{
        backgroundColor: color + "18",
        color,
        fontFamily: isFa ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
        letterSpacing: isFa ? "0" : "0.02em",
      }}
    >
      {label}
    </span>
  );
}

function SlideCard60({
  slide,
  lang,
  isRTL,
  searchQuery,
  animationDelay,
  onClick,
}: {
  slide: Slide60;
  lang: "en" | "fa";
  isRTL: boolean;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = actColors[slide.act];

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
      className="group cursor-pointer rounded-none border transition-all duration-200 hover:shadow-md"
      style={{
        backgroundColor: "#FDFCFA",
        borderColor: "#E8E5DF",
        animationDelay: `${animationDelay}s`,
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={slide.imageUrl}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${accentColor}44 0%, transparent 60%)` }}
        />
        <div className={`absolute bottom-3 ${isRTL ? "right-3" : "left-3"}`}>
          <ActBadge act={slide.act} lang={lang} />
        </div>
        <div
          className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} text-xs font-bold px-2 py-0.5 rounded`}
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {String(slide.id).padStart(2, "0")}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-semibold mb-2 leading-snug"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
            color: "#1A1A1A",
          }}
        >
          {highlight(content.title)}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
            color: "#5A5A5A",
          }}
        >
          {highlight(content.narrative)}
        </p>

        {/* Key points preview */}
        <ul className={`space-y-1 mb-4 ${isRTL ? "pr-3" : "pl-3"}`} style={{ borderLeft: isRTL ? "none" : `2px solid ${accentColor}33`, borderRight: isRTL ? `2px solid ${accentColor}33` : "none" }}>
          {content.keyPoints.slice(0, 2).map((kp, i) => (
            <li
              key={i}
              className="text-xs leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#7A7A7A",
              }}
            >
              {highlight(kp)}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className={`flex flex-wrap gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
          {content.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: accentColor + "12",
                color: accentColor,
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
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

function SlideModal60({
  slide,
  lang,
  isRTL,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  slide: Slide60;
  lang: "en" | "fa";
  isRTL: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = actColors[slide.act];
  const t = ui60[lang];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") isRTL ? onNext() : onPrev();
      if (e.key === "ArrowRight") isRTL ? onPrev() : onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, isRTL]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm"
        style={{ backgroundColor: "#FDFCFA", direction: isRTL ? "rtl" : "ltr" }}
      >
        {/* Header bar */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b"
          style={{ backgroundColor: "#FDFCFA", borderColor: "#E8E5DF" }}
        >
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span
              className="text-xs font-bold"
              style={{ fontFamily: "'Space Mono', monospace", color: accentColor }}
            >
              {String(slide.id).padStart(2, "0")} / 60
            </span>
            <ActBadge act={slide.act} lang={lang} />
          </div>
          <button
            onClick={onClose}
            className="text-xl leading-none px-2 py-1 rounded transition-colors hover:bg-gray-100"
            style={{ color: "#5A5A5A" }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative" style={{ minHeight: "300px" }}>
            <img
              src={slide.imageUrl}
              alt={content.title}
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${accentColor}22 0%, transparent 70%)` }}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2
              className="text-2xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#1A1A1A",
              }}
            >
              {content.title}
            </h2>

            <div className="mb-5">
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: accentColor,
                }}
              >
                {isRTL ? "روایت فنی" : "Technical Narrative"}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  color: "#3A3A3A",
                }}
              >
                {content.narrative}
              </p>
            </div>

            <div className="mb-5">
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: accentColor,
                }}
              >
                {isRTL ? "انتخاب‌های راهبردی" : "Strategic Choices"}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  color: "#5A5A5A",
                }}
              >
                {content.strategic}
              </p>
            </div>

            <div className="mb-5">
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: accentColor,
                }}
              >
                {isRTL ? "نکات کلیدی" : "Key Points"}
              </p>
              <ul className="space-y-2">
                {content.keyPoints.map((kp, i) => (
                  <li
                    key={i}
                    className={`flex gap-2 text-sm ${isRTL ? "flex-row-reverse text-right" : ""}`}
                    style={{
                      fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                      color: "#3A3A3A",
                    }}
                  >
                    <span style={{ color: accentColor, flexShrink: 0 }}>▸</span>
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: accentColor + "44",
                    color: accentColor,
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation footer */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${isRTL ? "flex-row-reverse" : ""}`}
          style={{ borderColor: "#E8E5DF" }}
        >
          <button
            onClick={isRTL ? onNext : onPrev}
            disabled={isRTL ? !hasNext : !hasPrev}
            className="text-sm px-4 py-2 border rounded transition-all disabled:opacity-30"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              borderColor: "#D0CCC5",
              color: "#3A3A3A",
            }}
          >
            {isRTL ? t.next : t.prev}
          </button>
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
          >
            {slide.id} / 60
          </span>
          <button
            onClick={isRTL ? onPrev : onNext}
            disabled={isRTL ? !hasPrev : !hasNext}
            className="text-sm px-4 py-2 border rounded transition-all disabled:opacity-30"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              borderColor: "#D0CCC5",
              color: "#3A3A3A",
            }}
          >
            {isRTL ? t.prev : t.next}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Home() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";
  const t = ui60[lang];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeAct, setActiveAct] = useState<Act | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<Slide60 | null>(null);

  const filteredSlides = useMemo(() => {
    let result = slides60;
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
          fa.narrative.toLowerCase().includes(q) ||
          fa.keyPoints.some((k) => k.toLowerCase().includes(q)) ||
          fa.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }
    return result;
  }, [searchQuery, activeAct]);

  const handleActChange = useCallback((act: Act | "All") => {
    setActiveAct(act);
    setSearchQuery("");
  }, []);

  const selectedIdx = selectedSlide ? filteredSlides.findIndex((s) => s.id === selectedSlide.id) : -1;

  const actCounts = useMemo(() => {
    const counts: Record<Act, number> = { I: 0, II: 0, III: 0, IV: 0 };
    slides60.forEach((s) => counts[s.act]++);
    return counts;
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F7F4", direction: isRTL ? "rtl" : "ltr" }}>
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: "rgba(248,247,244,0.95)", backdropFilter: "blur(8px)", borderColor: "#E8E5DF" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-4 py-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* Logo */}
            <div className={isRTL ? "text-right" : ""}>
              <p
                className="text-sm font-bold leading-none"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  color: "#1A1A1A",
                }}
              >
                {t.siteTitle}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
              >
                {isRTL ? "۶۰ اسلاید · ۴ پرده" : "60 Slides · 4 Acts"}
              </p>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full px-4 py-2 text-sm border rounded-sm outline-none transition-all focus:border-gray-400"
                style={{
                  backgroundColor: "#FDFCFA",
                  borderColor: "#D0CCC5",
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  color: "#1A1A1A",
                  direction: isRTL ? "rtl" : "ltr",
                  textAlign: isRTL ? "right" : "left",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 ${isRTL ? "left-3" : "right-3"}`}
                >
                  ×
                </button>
              )}
            </div>

            {/* Language toggle */}
            <button
              onClick={() => {
                const event = new CustomEvent("toggle-language");
                window.dispatchEvent(event);
              }}
              className="text-xs px-3 py-1.5 border rounded-sm transition-all hover:bg-gray-50"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                borderColor: "#D0CCC5",
                color: "#5A5A5A",
              }}
            >
              {isRTL ? "EN" : "فا"}
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A2D2A 100%)",
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'Space Mono', monospace", color: "#2D7D6F" }}
            >
              {isRTL ? "سند راهبردی — نسخه ۲.۰" : "Strategy Document — v2.0"}
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {t.heroTitle}
            </h1>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#B0ADA8",
                maxWidth: "600px",
              }}
            >
              {t.heroDescription}
            </p>

            {/* Deck links */}
            <div className={`flex flex-wrap gap-3 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
              <Link href="/deck-a">
                <span
                  className="text-xs px-4 py-2 rounded-sm border cursor-pointer inline-block"
                  style={{
                    borderColor: "#4FC3F7",
                    color: "#4FC3F7",
                    backgroundColor: "#4FC3F711",
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  }}
                >
                  {isRTL ? "Deck A ← فیلتراسیون جهانی" : "Deck A → Universal Filtration"}
                </span>
              </Link>
              <Link href="/deck-b">
                <span
                  className="text-xs px-4 py-2 rounded-sm border cursor-pointer inline-block"
                  style={{
                    borderColor: "#00C853",
                    color: "#00C853",
                    backgroundColor: "#00C85311",
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  }}
                >
                  {isRTL ? "Deck B ← دستور زمانی" : "Deck B → Tense Grammar"}
                </span>
              </Link>
            </div>
            {/* Act pills */}
            <div className={`flex flex-wrap gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              {acts.map((act) => (
                <button
                  key={act}
                  onClick={() => handleActChange(act)}
                  className="text-xs px-4 py-2 rounded-sm border transition-all"
                  style={{
                    borderColor: actColors[act] + "66",
                    color: actColors[act],
                    backgroundColor: actColors[act] + "11",
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  }}
                >
                  {ACT_LABELS[act][lang]} ({actCounts[act]})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Act Navigation ── */}
      <nav
        className="border-b sticky top-[57px] z-30"
        style={{ backgroundColor: "rgba(248,247,244,0.97)", borderColor: "#E8E5DF" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-0 overflow-x-auto ${isRTL ? "flex-row-reverse" : ""}`}>
            <button
              onClick={() => handleActChange("All")}
              className="px-5 py-3 text-sm border-b-2 transition-all whitespace-nowrap"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                borderBottomColor: activeAct === "All" ? "#1A1A1A" : "transparent",
                color: activeAct === "All" ? "#1A1A1A" : "#7A7A7A",
                fontWeight: activeAct === "All" ? "600" : "400",
              }}
            >
              {isRTL ? `همه (${slides60.length})` : `All (${slides60.length})`}
            </button>
            {acts.map((act) => (
              <button
                key={act}
                onClick={() => handleActChange(act)}
                className="px-5 py-3 text-sm border-b-2 transition-all whitespace-nowrap"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  borderBottomColor: activeAct === act ? actColors[act] : "transparent",
                  color: activeAct === act ? actColors[act] : "#7A7A7A",
                  fontWeight: activeAct === act ? "600" : "400",
                }}
              >
                {ACT_LABELS[act][lang]} ({actCounts[act]})
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="container mx-auto px-4 lg:px-8 py-10" style={{ maxWidth: "1400px" }}>
        {/* Results header */}
        <div className={`flex items-center justify-between mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          <p
            className="text-sm"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#9CA3AF",
            }}
          >
            {searchQuery
              ? `${filteredSlides.length} ${isRTL ? "نتیجه" : "result" + (filteredSlides.length !== 1 ? "s" : "")} — "${searchQuery}"`
              : `${filteredSlides.length} ${isRTL ? "اسلاید" : "slide" + (filteredSlides.length !== 1 ? "s" : "")}`}
          </p>
          {(searchQuery || activeAct !== "All") && (
            <button
              onClick={() => { setSearchQuery(""); setActiveAct("All"); }}
              className="text-xs px-3 py-1 border rounded-sm transition-all hover:bg-gray-50"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                borderColor: "#D0CCC5",
                color: "#5A5A5A",
              }}
            >
              {isRTL ? "پاک کردن فیلترها" : "Clear filters"}
            </button>
          )}
        </div>

        {/* Grid */}
        {filteredSlides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSlides.map((slide, idx) => (
              <SlideCard60
                key={slide.id}
                slide={slide}
                lang={lang}
                isRTL={isRTL}
                searchQuery={searchQuery}
                animationDelay={idx * 0.03}
                onClick={() => setSelectedSlide(slide)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p
              className="text-2xl mb-3"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#2C2C2C",
              }}
            >
              {t.noResults}
            </p>
            <p className="text-sm" style={{ color: "#9CA3AF", fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif" }}>
              {t.noResultsHint}
            </p>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t py-10" style={{ borderColor: "#E8E5DF", backgroundColor: "#F0EDE8" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className={isRTL ? "text-right" : ""}>
              <p
                className="text-base font-semibold mb-1"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  color: "#2C2C2C",
                }}
              >
                {t.siteTitle}
              </p>
              <p className="text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                {isRTL ? "مبتنی بر فیزیک · قابل ممیزی کربن · خنثی از کاربرد" : "Physics-Certified · Carbon-Auditable · Application-Neutral"}
              </p>
            </div>
            <div className={`flex gap-4 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
              {acts.map((act) => (
                <button
                  key={act}
                  onClick={() => handleActChange(act)}
                  className="text-xs transition-colors hover:opacity-80"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    color: actColors[act],
                  }}
                >
                  {ACT_LABELS[act][lang]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Modal ── */}
      {selectedSlide && (
        <SlideModal60
          slide={selectedSlide}
          lang={lang}
          isRTL={isRTL}
          onClose={() => setSelectedSlide(null)}
          onPrev={() => selectedIdx > 0 && setSelectedSlide(filteredSlides[selectedIdx - 1])}
          onNext={() => selectedIdx < filteredSlides.length - 1 && setSelectedSlide(filteredSlides[selectedIdx + 1])}
          hasPrev={selectedIdx > 0}
          hasNext={selectedIdx < filteredSlides.length - 1}
        />
      )}
    </div>
  );
}
