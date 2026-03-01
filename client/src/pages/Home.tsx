import { useState, useMemo, useCallback } from "react";
import { slides, sections, sectionColors, type Section } from "@/data/slides";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SlideCard from "@/components/SlideCard";
import SectionNav from "@/components/SectionNav";
import SlideModal from "@/components/SlideModal";
import type { Slide } from "@/data/slides";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<Section | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const filteredSlides = useMemo(() => {
    let result = slides;

    if (activeSection !== "All") {
      result = result.filter((s) => s.section === activeSection);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.summary.toLowerCase().includes(q) ||
          s.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          s.tags.some((t) => t.toLowerCase().includes(q)) ||
          s.section.toLowerCase().includes(q)
      );
    }

    return result;
  }, [searchQuery, activeSection]);

  const handleSectionChange = useCallback((section: Section | "All") => {
    setActiveSection(section);
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F7F4" }}>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <HeroSection />

      <main className="container mx-auto px-4 lg:px-8 pb-24" style={{ maxWidth: "1400px" }}>
        {/* Section Navigation */}
        <SectionNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          slideCounts={sections.reduce(
            (acc, sec) => {
              acc[sec] = slides.filter((s) => s.section === sec).length;
              return acc;
            },
            {} as Record<Section, number>
          )}
        />

        {/* Results header */}
        <div className="flex items-center justify-between mb-8 pt-2">
          <div>
            {searchQuery ? (
              <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                {filteredSlides.length} result{filteredSlides.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
              </p>
            ) : (
              <p className="text-sm" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                {activeSection === "All"
                  ? `All ${slides.length} slides`
                  : `${filteredSlides.length} slides · ${activeSection}`}
              </p>
            )}
          </div>
          {(searchQuery || activeSection !== "All") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveSection("All");
              }}
              className="text-xs px-3 py-1 rounded-full border transition-all"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderColor: "#D0CCC5",
                color: "#5A5A5A",
              }}
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Slide Grid */}
        {filteredSlides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSlides.map((slide, idx) => (
              <SlideCard
                key={slide.id}
                slide={slide}
                searchQuery={searchQuery}
                animationDelay={idx * 0.04}
                onClick={() => setSelectedSlide(slide)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p
              className="text-2xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
            >
              No slides found
            </p>
            <p className="text-sm" style={{ color: "#9CA3AF", fontFamily: "'DM Sans', sans-serif" }}>
              Try a different search term or clear the section filter
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: "#E8E5DF", backgroundColor: "#F0EDE8" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p
                className="text-lg font-semibold mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2C2C2C" }}
              >
                EPU Strategy
              </p>
              <p className="text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}>
                Physics-Certified · Carbon-Auditable · Application-Neutral
              </p>
            </div>
            <div className="flex gap-6">
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleSectionChange(sec)}
                  className="text-xs transition-colors"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#9CA3AF",
                  }}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E8E5DF" }}>
            <p className="text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#C4BFB8" }}>
              EPU Strategy + Driverless H2 Application Concept + TEA/LCA Governance · Concept Document · Not a Production Claim
            </p>
          </div>
        </div>
      </footer>

      {/* Slide Modal */}
      {selectedSlide && (
        <SlideModal
          slide={selectedSlide}
          onClose={() => setSelectedSlide(null)}
          onPrev={() => {
            const idx = filteredSlides.findIndex((s) => s.id === selectedSlide.id);
            if (idx > 0) setSelectedSlide(filteredSlides[idx - 1]);
          }}
          onNext={() => {
            const idx = filteredSlides.findIndex((s) => s.id === selectedSlide.id);
            if (idx < filteredSlides.length - 1) setSelectedSlide(filteredSlides[idx + 1]);
          }}
          hasPrev={filteredSlides.findIndex((s) => s.id === selectedSlide.id) > 0}
          hasNext={
            filteredSlides.findIndex((s) => s.id === selectedSlide.id) < filteredSlides.length - 1
          }
          searchQuery={searchQuery}
        />
      )}
    </div>
  );
}
