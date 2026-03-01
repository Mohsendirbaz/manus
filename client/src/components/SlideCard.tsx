import { type Slide } from "@/data/slides";

interface SlideCardProps {
  slide: Slide;
  searchQuery: string;
  animationDelay: number;
  onClick: () => void;
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

export default function SlideCard({ slide, searchQuery, animationDelay, onClick }: SlideCardProps) {
  return (
    <article
      className="slide-card cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s`, opacity: 0 }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: "scale(1)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
          loading="lazy"
        />
        {/* Section badge overlay */}
        <div className="absolute top-3 left-3">
          <span
            className="section-badge text-white"
            style={{ backgroundColor: slide.sectionColor }}
          >
            {slide.section}
          </span>
        </div>
        {/* Slide number overlay */}
        <div className="absolute top-3 right-3">
          <span
            className="text-white text-xs px-2 py-0.5 rounded"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              backgroundColor: "rgba(0,0,0,0.45)",
            }}
          >
            {String(slide.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-base font-semibold mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
        >
          {highlight(slide.title, searchQuery)}
        </h3>

        <p
          className="text-xs mb-4 leading-relaxed line-clamp-3"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#5A5A5A" }}
        >
          {highlight(slide.summary, searchQuery)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {slide.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag-pill"
              style={{
                backgroundColor:
                  searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                    ? "rgba(45,125,111,0.12)"
                    : undefined,
                borderColor:
                  searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                    ? "#2D7D6F"
                    : undefined,
                color:
                  searchQuery && tag.toLowerCase().includes(searchQuery.toLowerCase())
                    ? "#2D7D6F"
                    : undefined,
              }}
            >
              {tag}
            </span>
          ))}
          {slide.tags.length > 4 && (
            <span
              className="tag-pill"
              style={{ color: "#9CA3AF" }}
            >
              +{slide.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
