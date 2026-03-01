import { useState, useMemo, useCallback } from "react";
import { slides, sections, sectionColors, type Section } from "@/data/slides";
import { slideTranslations, ui } from "@/data/translations";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SlideCard from "@/components/SlideCard";
import SectionNav from "@/components/SectionNav";
import SlideModal from "@/components/SlideModal";
import type { Slide } from "@/data/slides";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState<Section | "All">("All");
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);
  const { language, isRTL } = useLanguage();
  const t = ui[language];

  const filteredSlides = useMemo(() => {
    let result = slides;

    if (activeSection !== "All") {
      result = result.filter((s) => s.section === activeSection);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s, idx) => {
        // Search in both English and current language translations
        const enT = slideTranslations.en[idx];
        const faT = slideTranslations.fa[idx];
        return (
          enT.title.toLowerCase().includes(q) ||
          enT.summary.toLowerCase().includes(q) ||
          enT.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          enT.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          faT.title.toLowerCase().includes(q) ||
          faT.summary.toLowerCase().includes(q) ||
          faT.keyPoints.some((kp) => kp.toLowerCase().includes(q)) ||
          faT.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          s.section.toLowerCase().includes(q)
        );
      });
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

      <main
        className="container mx-auto px-4 lg:px-8 pb-24"
        style={{ maxWidth: "1400px", direction: isRTL ? "rtl" : "ltr" }}
      >
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
        <div className={`flex items-center justify-between mb-8 pt-2 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={isRTL ? "text-right" : ""}>
            {searchQuery ? (
              <p
                className="text-sm"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  color: "#9CA3AF",
                }}
              >
                {filteredSlides.length} {isRTL ? "نتیجه برای" : "result" + (filteredSlides.length !== 1 ? "s" : "") + " for"} &ldquo;{searchQuery}&rdquo;
              </p>
            ) : (
              <p
                className="text-sm"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  color: "#9CA3AF",
                }}
              >
                {activeSection === "All"
                  ? `${isRTL ? "همه" : "All"} ${slides.length} ${t.slidesCount}`
                  : `${filteredSlides.length} ${t.slidesCount} · ${t.sections[activeSection as Section]}`}
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
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                borderColor: "#D0CCC5",
                color: "#5A5A5A",
              }}
            >
              {isRTL ? "پاک کردن فیلترها" : "Clear filters"}
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
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#2C2C2C",
              }}
            >
              {t.noResults}
            </p>
            <p
              className="text-sm"
              style={{
                color: "#9CA3AF",
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              }}
            >
              {t.noResultsHint}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{
          borderColor: "#E8E5DF",
          backgroundColor: "#F0EDE8",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
            <div className={isRTL ? "text-right" : ""}>
              <p
                className="text-lg font-semibold mb-1"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  color: "#2C2C2C",
                }}
              >
                {t.siteTitle}
              </p>
              <p
                className="text-xs"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                  color: "#9CA3AF",
                }}
              >
                {isRTL
                  ? "مبتنی بر فیزیک · قابل ممیزی کربن · خنثی از کاربرد"
                  : "Physics-Certified · Carbon-Auditable · Application-Neutral"}
              </p>
            </div>
            <div className={`flex gap-4 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleSectionChange(sec)}
                  className="text-xs transition-colors"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    color: "#9CA3AF",
                  }}
                >
                  {t.sections[sec]}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E8E5DF" }}>
            <p
              className={`text-xs ${isRTL ? "text-right" : ""}`}
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#C4BFB8",
              }}
            >
              {isRTL
                ? "استراتژی EPU + مفهوم کاربرد H2 بدون راننده + حاکمیت TEA/LCA · سند مفهومی · نه یک ادعای تولیدی"
                : "EPU Strategy + Driverless H2 Application Concept + TEA/LCA Governance · Concept Document · Not a Production Claim"}
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
