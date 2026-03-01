import { slides, sections, sectionColors } from "@/data/slides";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #1C2520 0%, #1A2B28 50%, #0F1E1A 100%)",
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

      <div
        className="relative mx-auto px-4 lg:px-8"
        style={{ maxWidth: "1400px" }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-0.5 rounded-full"
              style={{ backgroundColor: "#2D7D6F" }}
            />
            <span
              className="text-xs tracking-widest uppercase"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#4DB6AC",
                letterSpacing: "0.2em",
              }}
            >
              Strategy Concept · Concept Document
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F8F7F4",
              lineHeight: "1.15",
            }}
          >
            Physics-Certified,
            <br />
            <span style={{ color: "#4DB6AC" }}>Carbon-Auditable</span>
            <br />
            Autonomy Platform
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base lg:text-lg mb-10 max-w-2xl leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(248,247,244,0.65)",
            }}
          >
            EPU Strategy combines a physics-certified safety compute core, hydrogen driverless
            platform architecture, sensor suite constitutionalism, and TEA/LCA governance into a
            single, defensible methodology.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: "30", label: "Concept Slides" },
              { value: "6", label: "Strategy Sections" },
              { value: "4", label: "Validation Courts" },
              { value: "2,000mi", label: "Range Concept Target" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#F8F7F4" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "rgba(248,247,244,0.4)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Section pills */}
          <div className="flex flex-wrap gap-2">
            {sections.map((sec) => (
              <span
                key={sec}
                className="text-xs px-3 py-1 rounded-full border"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "rgba(248,247,244,0.55)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                }}
              >
                {sec}
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
                background:
                  "linear-gradient(135deg, rgba(28,37,32,0.6) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
