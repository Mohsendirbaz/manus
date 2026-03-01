import { sections, sectionColors, type Section } from "@/data/slides";

interface SectionNavProps {
  activeSection: Section | "All";
  onSectionChange: (section: Section | "All") => void;
  slideCounts: Record<Section, number>;
}

export default function SectionNav({ activeSection, onSectionChange, slideCounts }: SectionNavProps) {
  const allSections: (Section | "All")[] = ["All", ...sections];

  return (
    <div className="sticky top-16 z-30 py-4 -mx-4 px-4 lg:-mx-8 lg:px-8 mb-6"
      style={{
        backgroundColor: "rgba(248, 247, 244, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E8E5DF",
      }}
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {allSections.map((sec) => {
          const isActive = activeSection === sec;
          const color = sec === "All" ? "#2D7D6F" : sectionColors[sec as Section];
          const count = sec === "All" ? 30 : slideCounts[sec as Section];

          return (
            <button
              key={sec}
              onClick={() => onSectionChange(sec)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all shrink-0 border"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: isActive ? 600 : 400,
                backgroundColor: isActive ? color : "white",
                color: isActive ? "white" : "#5A5A5A",
                borderColor: isActive ? color : "#E0DDD7",
                boxShadow: isActive ? `0 2px 8px ${color}30` : "none",
              }}
            >
              {sec !== "All" && (
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: isActive ? "rgba(255,255,255,0.7)" : color }}
                />
              )}
              {sec}
              <span
                className="text-xs rounded-full px-1.5 py-0.5 leading-none"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "#EFEDE8",
                  color: isActive ? "white" : "#9CA3AF",
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
