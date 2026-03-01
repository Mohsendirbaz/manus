import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { type Slide } from "@/data/slides";

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
  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8 animate-fade-in"
      style={{ backgroundColor: "rgba(15, 20, 18, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-6xl rounded-xl overflow-hidden animate-fade-in-up"
        style={{ backgroundColor: "#F8F7F4", maxHeight: "90vh", display: "flex", flexDirection: "column" }}
      >
        {/* Modal Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{ borderColor: "#E8E5DF", backgroundColor: "white" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="section-badge text-white"
              style={{ backgroundColor: slide.sectionColor }}
            >
              {slide.section}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
            >
              Slide {String(slide.id).padStart(2, "0")} / 30
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "#9CA3AF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EFEDE8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col lg:flex-row overflow-auto flex-1">
          {/* Image */}
          <div
            className="lg:w-[55%] shrink-0 bg-black"
            style={{ minHeight: "240px" }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
              style={{ maxHeight: "70vh" }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <h2
              className="text-xl lg:text-2xl font-bold mb-4 leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            >
              {highlight(slide.title, searchQuery)}
            </h2>

            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A5A5A" }}
            >
              {highlight(slide.summary, searchQuery)}
            </p>

            {/* Quote */}
            {slide.quote && (
              <blockquote
                className="mb-6 pl-4 py-2 border-l-4 italic text-sm"
                style={{
                  borderColor: slide.sectionColor,
                  color: slide.sectionColor,
                  fontFamily: "'Playfair Display', serif",
                  backgroundColor: `${slide.sectionColor}08`,
                  borderRadius: "0 4px 4px 0",
                }}
              >
                {slide.quote}
              </blockquote>
            )}

            {/* Key Points */}
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#9CA3AF",
                  letterSpacing: "0.15em",
                }}
              >
                Key Points
              </p>
              <ul className="space-y-2.5">
                {slide.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: slide.sectionColor }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C2C2C" }}
                    >
                      {highlight(kp, searchQuery)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {slide.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer — Navigation */}
        <div
          className="flex items-center justify-between px-6 py-4 border-t shrink-0"
          style={{ borderColor: "#E8E5DF", backgroundColor: "white" }}
        >
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              border: "1px solid #E0DDD7",
              color: "#5A5A5A",
            }}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
          >
            ← → to navigate · Esc to close
          </span>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundColor: slide.sectionColor,
              color: "white",
              border: `1px solid ${slide.sectionColor}`,
            }}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
