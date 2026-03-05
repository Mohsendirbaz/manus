import { slides, sections } from "@/data/slides";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/translations";

export default function HeroSection() {
  const { language, isRTL } = useLanguage();
  const t = ui[language];

  const stats = [
    { value: t.heroStats.slides, label: t.heroStats.slidesLabel },
    { value: t.heroStats.sections, label: t.heroStats.sectionsLabel },
    { value: t.heroStats.courts, label: t.heroStats.courtsLabel },
    { value: t.heroStats.range, label: t.heroStats.rangeLabel },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #1C2520 0%, #1A2B28 50%, #0F1E1A 100%)",
        direction: isRTL ? "rtl" : "ltr",
        minHeight: "556px",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Teal accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #2D7D6F, transparent)" }}
      />

      <div className="relative mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className={`flex items-center gap-3 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <div className="w-8 h-0.5 rounded-full" style={{ backgroundColor: "#2D7D6F" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#4DB6AC",
                letterSpacing: isRTL ? "0.05em" : "0.2em",
              }}
            >
              {t.heroEyebrow}
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
              color: "#F8F7F4",
              lineHeight: isRTL ? "1.6" : "1.15",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {isRTL ? (
              <>
                بستر خودروی خودران
                <br />
                <span style={{ color: "#4DB6AC" }}>مبتنی بر فیزیک</span>
                <br />
                و قابل ممیزی کربن
              </>
            ) : (
              <>
                Physics-Certified,
                <br />
                <span style={{ color: "#4DB6AC" }}>Carbon-Auditable</span>
                <br />
                Autonomy Platform
              </>
            )}
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base lg:text-lg mb-10 max-w-2xl leading-relaxed"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              color: "rgba(248,247,244,0.65)",
              textAlign: isRTL ? "right" : "left",
            }}
          >
            {t.heroDescription}
          </p>

          {/* Stats row */}
          <div className={`flex flex-wrap gap-8 mb-10 ${isRTL ? "flex-row-reverse" : ""}`}>
            {stats.map((stat) => (
              <div key={stat.label} className={isRTL ? "text-right" : ""}>
                <p
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                    color: "#F8F7F4",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                    color: "rgba(248,247,244,0.4)",
                    fontSize: "0.65rem",
                    letterSpacing: isRTL ? "0.02em" : "0.08em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Section pills */}
          <div className={`flex flex-wrap gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
            {sections.map((sec) => (
              <span
                key={sec}
                className="text-xs px-3 py-1 rounded-full border"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(248,247,244,0.55)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                {isRTL ? ui.fa.sections[sec] : sec}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: featured image preview */}
        <div className="absolute right-0 top-0 bottom-0 hidden xl:flex items-center pr-8 w-[420px]">
          <div
            className="w-full aspect-video rounded-lg overflow-hidden border"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <img
              src={slides[0].image}
              alt="EPU Vision Board"
              className="w-full h-full object-cover opacity-70"
            />
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: "linear-gradient(135deg, rgba(28,37,32,0.6) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
