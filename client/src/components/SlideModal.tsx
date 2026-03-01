import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { type Slide } from "@/data/slides";
import { useLanguage } from "@/contexts/LanguageContext";
import { slideTranslations, ui } from "@/data/translations";

interface SlideModalProps {
  slide: Slide;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  searchQuery: string;
}

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark
        key={i}
        style={{
          backgroundColor: "rgba(45,125,111,0.18)",
          color: "inherit",
          borderRadius: "2px",
          padding: "0 2px",
        }}
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SlideModal({
  slide,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  searchQuery,
}: SlideModalProps) {
  const { language, isRTL } = useLanguage();
  const t = ui[language];
  const slideT = slideTranslations[language][slide.id - 1];
  const sectionLabel = t.sections[slide.section];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") isRTL ? (hasNext ? onNext() : undefined) : (hasPrev ? onPrev() : undefined);
      if (e.key === "ArrowRight") isRTL ? (hasPrev ? onPrev() : undefined) : (hasNext ? onNext() : undefined);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext, isRTL]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 animate-fade-in"
      style={{ backgroundColor: "rgba(15, 20, 18, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-6xl rounded-xl overflow-hidden animate-fade-in-up"
        style={{
          backgroundColor: "#F8F7F4",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{ borderColor: "#E8E5DF", backgroundColor: "white" }}
        >
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span
              className="section-badge text-white"
              style={{
                backgroundColor: slide.sectionColor,
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : undefined,
              }}
            >
              {sectionLabel}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
            >
              {t.slideOf} {String(slide.id).padStart(2, "0")} / 30
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EFEDE8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className={`flex overflow-auto flex-1 ${isRTL ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"}`}>
          {/* Image */}
          <div className="lg:w-[55%] shrink-0 bg-black" style={{ minHeight: "240px" }}>
            <img
              src={slide.image}
              alt={slideT.title}
              className="w-full h-full object-contain"
              style={{ maxHeight: "70vh" }}
            />
          </div>

          {/* Content */}
          <div className={`flex-1 overflow-y-auto p-6 lg:p-8 ${isRTL ? "text-right" : ""}`}>
            <h2
              className="text-xl lg:text-2xl font-bold mb-4 leading-snug"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#2C2C2C",
              }}
            >
              {highlight(slideT.title, searchQuery)}
            </h2>

            <p
              className="text-sm mb-6 leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#5A5A5A",
              }}
            >
              {highlight(slideT.summary, searchQuery)}
            </p>

            {/* Quote */}
            {slideT.quote && (
              <blockquote
                className={`mb-6 py-2 italic text-sm ${isRTL ? "pr-4 border-r-4" : "pl-4 border-l-4"}`}
                style={{
                  borderColor: slide.sectionColor,
                  color: slide.sectionColor,
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  backgroundColor: `${slide.sectionColor}08`,
                  borderRadius: isRTL ? "4px 0 0 4px" : "0 4px 4px 0",
                }}
              >
                {slideT.quote}
              </blockquote>
            )}

            {/* Key Points */}
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  color: "#9CA3AF",
                  letterSpacing: isRTL ? "0.02em" : "0.15em",
                }}
              >
                {t.keyPoints}
              </p>
              <ul className="space-y-2.5">
                {slideT.keyPoints.map((kp, i) => (
                  <li key={i} className={`flex items-start gap-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: slide.sectionColor }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                        color: "#2C2C2C",
                      }}
                    >
                      {highlight(kp, searchQuery)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className={`flex flex-wrap gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
              <p
                className="w-full text-xs font-semibold uppercase tracking-widest mb-1"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  color: "#9CA3AF",
                  letterSpacing: isRTL ? "0.02em" : "0.15em",
                }}
              >
                {t.tags}
              </p>
              {slideT.tags.map((tag) => (
                <span
                  key={tag}
                  className="tag-pill"
                  style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : undefined }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer — Navigation */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t shrink-0 ${isRTL ? "flex-row-reverse" : ""}`}
          style={{ borderColor: "#E8E5DF", backgroundColor: "white" }}
        >
          <button
            onClick={isRTL ? onNext : onPrev}
            disabled={isRTL ? !hasNext : !hasPrev}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              border: "1px solid #E0DDD7",
              color: "#5A5A5A",
            }}
          >
            <ChevronLeft className="w-4 h-4" />
            {isRTL ? t.nextSlide : t.prevSlide}
          </button>
          <span
            className="text-xs hidden sm:block"
            style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
          >
            {t.navigate} · {t.escClose}
          </span>
          <button
            onClick={isRTL ? onPrev : onNext}
            disabled={isRTL ? !hasPrev : !hasNext}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              backgroundColor: slide.sectionColor,
              color: "white",
              border: `1px solid ${slide.sectionColor}`,
            }}
          >
            {isRTL ? t.prevSlide : t.nextSlide}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
