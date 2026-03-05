import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "wouter";
import { slides60, actColors as actColorsEPU, ACT_LABELS as ACT_LABELS_EPU, type Act, type Slide60 } from "@/data/slides60";
import { slidesA, ACT_LABELS_A, type SlideA, type ActA } from "@/data/slidesA";
import { slidesB, ACT_LABELS_B, type SlideB, type ActB } from "@/data/slidesB";
import { slidesC, ACT_LABELS_C, type SlideC, type ActC } from "@/data/slidesC";
import { slidesD, ACT_LABELS_D, type SlideD, type ActD } from "@/data/slidesD";
import { slidesE, ACT_LABELS_E, type SlideE, type ActE } from "@/data/slidesE";
import { slidesBio, ACT_LABELS_F, type SlideF, type ActF } from "@/data/slidesBio";
import { slidesG, ACT_LABELS_G, type SlideG, type ActG } from "@/data/slidesG";
import { slidesTOC, ACT_LABELS_TOC, type SlideTOC, type ActTOC } from "@/data/slidesTOC";
import { ui60 } from "@/data/translations60";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── Audience paths ──────────────────────────────────────────────────────────
type AudiencePath = "investor" | "engineer" | "regulator";
const AUDIENCE_META: Record<AudiencePath, { en: string; fa: string; icon: string }> = {
  investor:   { en: "Investor",   fa: "سرمایه‌گذار", icon: "📊" },
  engineer:   { en: "Engineer",   fa: "مهندس",       icon: "⚙️" },
  regulator:  { en: "Regulator",  fa: "ناظر",        icon: "📋" },
};

// Map (deck, act) → audience paths
const AUDIENCE_MAP: Record<string, AudiencePath[]> = {
  // EPU Strategy deck
  "EPU:I":   ["investor", "engineer", "regulator"],
  "EPU:II":  ["engineer", "regulator"],
  "EPU:III": ["engineer"],
  "EPU:IV":  ["investor", "regulator"],
  // Deck A — UFP (deep math)
  "A:Foundation": ["engineer"],
  "A:Taxonomy":   ["engineer"],
  "A:Composition": ["engineer"],
  "A:LDA":        ["engineer"],
  "A:Variants":   ["engineer"],
  "A:Decision":   ["engineer", "regulator"],
  "A:Performance": ["engineer"],
  "A:Synthesis":  ["engineer", "investor"],
  // Deck B — Temporal
  "B:Foundation": ["engineer"],
  "B:T0Manager":  ["engineer"],
  "B:Operators":  ["engineer"],
  "B:Landauer":   ["engineer"],
  "B:Constraints": ["engineer", "regulator"],
  "B:LLM":        ["engineer", "investor"],
  "B:Synthesis":  ["engineer", "investor"],
  // Deck C — Ghost (business + tech)
  "C:Executive":    ["investor"],
  "C:PDC":          ["engineer", "regulator"],
  "C:SAGP":         ["investor"],
  "C:PhysicsFound": ["engineer"],
  "C:ArchDeep":     ["engineer"],
  "C:Financial":    ["investor"],
  "C:Validation":   ["engineer", "regulator"],
  "C:Integration":  ["investor", "engineer"],
  // Deck D — Semiconductor
  "D:AgentFoundation": ["engineer"],
  "D:Communication":   ["engineer"],
  "D:Trust":            ["engineer", "regulator"],
  "D:Memory":           ["engineer"],
  "D:Signal":           ["engineer"],
  "D:Coordination":     ["engineer"],
  "D:Intelligence":     ["engineer", "investor"],
  "D:SystemSynthesis":  ["investor", "engineer", "regulator"],
  // Deck E — Thermal
  "E:Fundamentals":          ["engineer"],
  "E:CellStack":             ["engineer"],
  "E:VehicleIntegration":    ["engineer", "regulator"],
  "E:IntegratedElectronics": ["engineer"],
  "E:Synthesis":             ["engineer", "investor"],
  // Deck F — Founder
  "F:Founder":  ["investor"],
  // Deck G — Luxury Customization
  "G:CockpitDomain":    ["investor", "engineer"],
  "G:SensorCabin":      ["engineer", "regulator"],
  "G:AmbientArch":      ["investor"],
  "G:AcousticEng":      ["engineer"],
  "G:HapticSurface":    ["investor", "engineer"],
  "G:CentralCompute":   ["engineer"],
  "G:PerceptionArray":  ["engineer", "regulator"],
  "G:PowerElectronics": ["engineer", "investor"],
  "G:SWPowertrain":     ["engineer", "investor"],
  "G:DigitalTwin":      ["investor", "engineer", "regulator"],
  "G:InvestorPath":     ["investor"],
  "G:EngineerPath":     ["engineer"],
  "G:RegulatorPath":    ["regulator"],
};

function getAudiencePaths(slide: { deck: string; act: string }): AudiencePath[] {
  return AUDIENCE_MAP[`${slide.deck}:${slide.act}`] ?? ["engineer"];
}

// ─── Unified slide type ───────────────────────────────────────────────────────
type DeckId = "EPU" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "TOC";

interface UnifiedSlide {
  uid: string;          // unique across all 300: "EPU-1", "A-1", "B-1", "C-1", "D-1"
  deck: DeckId;
  id: number;
  act: string;
  actLabel: { en: string; fa: string };
  imageUrl: string;
  en: { title: string; narrative: string; strategic: string; keyPoints: string[]; tags: string[] };
  fa: { title: string; narrative: string; strategic: string; keyPoints: string[]; tags: string[] };
}

const DECK_META: Record<DeckId, { en: string; fa: string; accent: string }> = {
  EPU: { en: "EPU Strategy", fa: "استراتژی EPU", accent: "#C8A96E" },
  A:   { en: "Deck A · UFP", fa: "Deck A · UFP", accent: "#4FC3F7" },
  B:   { en: "Deck B · Temporal", fa: "Deck B · زمانی", accent: "#4CAF82" },
  C:   { en: "Deck C · Ghost", fa: "Deck C · Ghost", accent: "#F59E0B" },
  D:   { en: "Deck D · Semiconductor", fa: "Deck D · نیمه‌هادی", accent: "#E879F9" },
  E:   { en: "Deck E · Thermal", fa: "Deck E · حرارتی", accent: "#F87171" },
  F:   { en: "Deck F · Founder", fa: "Deck F · بنیان‌گذار", accent: "#A78BFA" },
  G:   { en: "Deck G · Customization", fa: "Deck G · سفارشی‌سازی", accent: "#14B8A6" },
  TOC: { en: "Deck TOC · فهرست", fa: "Deck TOC · فهرست", accent: "#94A3B8" },
};

// Act color lookup — EPU uses its own map; A and B get deck accent
const ACT_COLORS_A: Record<ActA, string> = {
  Foundation: "#4FC3F7", Taxonomy: "#29B6F6", Composition: "#0288D1",
  LDA: "#0277BD", Variants: "#01579B", Decision: "#4DD0E1",
  Performance: "#26C6DA", Synthesis: "#00ACC1",
};
const ACT_COLORS_B: Record<ActB, string> = {
  Foundation: "#4CAF82", T0Manager: "#26A69A", Operators: "#00897B",
  Landauer: "#00796B", Constraints: "#00695C", LLM: "#43A047",
  Synthesis: "#388E3C",
};
const ACT_COLORS_C: Record<ActC, string> = {
  Executive:    "#F59E0B", // amber — deck identity
  PDC:          "#FB923C", // orange — differentiated from Executive
  SAGP:         "#EA580C", // deep orange — differentiated from PDC
  PhysicsFound: "#FBBF24", // yellow-amber
  ArchDeep:     "#F97316", // orange
  Financial:    "#EF4444", // red
  Validation:   "#10B981", // emerald
  Integration:  "#8B5CF6", // violet
};
const ACT_COLORS_D: Record<ActD, string> = {
  AgentFoundation: "#0D9488", // teal — deck identity
  Communication:   "#0891B2", // cyan
  TrustConsensus:  "#1D4ED8", // blue
  MemoryArch:      "#7C3AED", // violet
  MechanicalSignal: "#059669", // emerald
  Coordination:    "#D97706", // amber
  LLMIntegration:  "#9333EA", // purple
  SystemSynthesis: "#DC2626", // red
};
const ACT_COLORS_E: Record<ActE, string> = {
  ExecutiveFraming:      "#DC2626", // red — urgency
  CabinController:       "#EA580C", // orange
  HydrogenPlatform:      "#0891B2", // cyan — cryogenic/H₂
  IntegratedElectronics: "#7C3AED", // violet — deck identity
  SensorGovernance:      "#059669", // emerald
  TEALCAMoat:            "#9D174D", // crimson
};
const ACT_COLORS_TOC: Record<ActTOC, string> = {
  PartI_Executive:      "#94A3B8", // slate — neutral index
  PartII_Philosophy:    "#7DD3FC", // sky — philosophical
  PartIII_Strategic:    "#86EFAC", // green — strategic assets
  PartIV_Technical:     "#FCA5A5", // red — technical foundation
  PartV_Architecture:   "#C4B5FD", // violet — architecture
  PartVI_Financial:     "#FCD34D", // amber — financial
  PartVII_Validation:   "#6EE7B7", // emerald — validation
  PartVIII_Appendices:  "#CBD5E1", // slate-light — appendices
};

function getActColor(slide: UnifiedSlide): string {
  if (slide.deck === "EPU") return actColorsEPU[slide.act as Act] ?? "#C8A96E";
  if (slide.deck === "A")   return ACT_COLORS_A[slide.act as ActA] ?? "#4FC3F7";
  if (slide.deck === "C")   return ACT_COLORS_C[slide.act as ActC] ?? "#F59E0B";
  if (slide.deck === "D")   return ACT_COLORS_D[slide.act as ActD] ?? "#0D9488";
  if (slide.deck === "E")   return ACT_COLORS_E[slide.act as ActE] ?? "#7C3AED";
  if (slide.deck === "F")   return "#A78BFA";
  if (slide.deck === "G")   return "#14B8A6";
  if (slide.deck === "TOC") return ACT_COLORS_TOC[slide.act as ActTOC] ?? "#94A3B8";
  return ACT_COLORS_B[slide.act as ActB] ?? "#4CAF82";
}

// Build unified array once
const allSlides: UnifiedSlide[] = [
  ...slides60.map((s: Slide60): UnifiedSlide => ({
    uid: `EPU-${s.id}`, deck: "EPU", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesA.map((s: SlideA): UnifiedSlide => ({
    uid: `A-${s.id}`, deck: "A", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesB.map((s: SlideB): UnifiedSlide => ({
    uid: `B-${s.id}`, deck: "B", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesC.map((s: SlideC): UnifiedSlide => ({
    uid: `C-${s.id}`, deck: "C", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesD.map((s: SlideD): UnifiedSlide => ({
    uid: `D-${s.id}`, deck: "D", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesE.map((s: SlideE): UnifiedSlide => ({
    uid: `E-${s.id}`, deck: "E", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesBio.map((s: SlideF): UnifiedSlide => ({
    uid: `F-${s.id}`, deck: "F", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesG.map((s: SlideG): UnifiedSlide => ({
    uid: `G-${s.id}`, deck: "G", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
  ...slidesTOC.map((s: SlideTOC): UnifiedSlide => ({
    uid: `TOC-${s.partId}`, deck: "TOC", id: s.id,
    act: s.act, actLabel: s.actLabel, imageUrl: s.imageUrl,
    en: s.en, fa: s.fa,
  })),
];
// ─── Sub-componentss ──────────────────────────────────────────────────────────
function DeckBadge({ deck, lang }: { deck: DeckId; lang: "en" | "fa" }) {
  const meta = DECK_META[deck];
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold"
      style={{
        backgroundColor: meta.accent + "22",
        color: meta.accent,
        fontFamily: "'Space Mono', monospace",
        letterSpacing: "0.03em",
      }}
    >
      {lang === "fa" ? meta.fa : meta.en}
    </span>
  );
}

function ActBadge({ slide, lang }: { slide: UnifiedSlide; lang: "en" | "fa" }) {
  const color = getActColor(slide);
  const label = slide.actLabel[lang];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium"
      style={{
        backgroundColor: color + "18",
        color,
        fontFamily: lang === "fa" ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
        letterSpacing: lang === "fa" ? "0" : "0.02em",
      }}
    >
      {label}
    </span>
  );
}

function highlight(text: string, query: string): string | React.ReactNode {
  if (!query.trim()) return text;
  const q = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${q})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} style={{ backgroundColor: "#C8A96E33", color: "#8B6914" }}>{part}</mark>
        ) : part
      )}
    </>
  );
}

function SlideCard({
  slide, lang, isRTL, searchQuery, animationDelay, onClick,
}: {
  slide: UnifiedSlide; lang: "en" | "fa"; isRTL: boolean;
  searchQuery: string; animationDelay: number; onClick: () => void;
}) {
  const content = slide[lang];
  const accentColor = getActColor(slide);
  const deckMeta = DECK_META[slide.deck];
  return (
    <article
      data-uid={slide.uid}
      className="group cursor-pointer border rounded-sm overflow-hidden"
      style={{
        borderColor: "#E8E5DF",
        backgroundColor: "#FDFCFA",
        animationDelay: `${animationDelay}s`,
        minHeight: "383px",
      }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "160px" }}>
        <img
          src={slide.imageUrl}
          alt={content.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.92)" }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${accentColor}44 0%, transparent 60%)` }}
        />
        <div className={`absolute top-2 ${isRTL ? "right-2" : "left-2"} flex gap-1.5`}>
          <span
            className="text-xs px-1.5 py-0.5 rounded font-bold"
            style={{
              backgroundColor: deckMeta.accent + "dd",
              color: "#fff",
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
            }}
          >
            {slide.deck === "EPU" ? "EPU" : `Deck ${slide.deck}`}
          </span>
        </div>
        <div className={`absolute bottom-2 ${isRTL ? "right-2" : "left-2"}`}>
          <span
            className="text-xs px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: "rgba(0,0,0,0.65)",
              color: "#F8F7F4",
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
            }}
          >
            #{slide.id}
          </span>
        </div>
      </div>
      {/* Body */}
      <div className={`p-4 ${isRTL ? "text-right" : ""}`}>
        <div className={`flex items-center gap-2 mb-2 flex-wrap ${isRTL ? "flex-row-reverse" : ""}`}>
          <ActBadge slide={slide} lang={lang} />
        </div>
        <h3
          className="text-sm font-semibold leading-snug mb-2 line-clamp-2"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
            color: "#1A1A1A",
          }}
        >
          {highlight(content.title, searchQuery)}
        </h3>
        <p
          className="text-xs leading-relaxed line-clamp-3"
          style={{
            fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
            color: "#6B7280",
          }}
        >
          {highlight(content.narrative, searchQuery)}
        </p>
        {content.tags.length > 0 && (
          <div className={`flex flex-wrap gap-1 mt-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            {content.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-1.5 py-0.5 border rounded-sm"
                style={{
                  borderColor: "#E8E5DF",
                  color: "#9CA3AF",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "10px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function SlideModal({
  slide, lang, isRTL, onClose, onPrev, onNext, hasPrev, hasNext,
}: {
  slide: UnifiedSlide; lang: "en" | "fa"; isRTL: boolean;
  onClose: () => void; onPrev: () => void; onNext: () => void;
  hasPrev: boolean; hasNext: boolean;
}) {
  const content = slide[lang];
  const accentColor = getActColor(slide);
  const deckMeta = DECK_META[slide.deck];

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
      style={{ backgroundColor: "rgba(10,22,40,0.85)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm border"
        style={{ backgroundColor: "#FDFCFA", borderColor: "#E8E5DF" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${isRTL ? "flex-row-reverse" : ""}`}
          style={{ borderColor: "#E8E5DF" }}
        >
          <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span
              className="text-xs px-2 py-1 rounded font-bold"
              style={{ backgroundColor: deckMeta.accent + "22", color: deckMeta.accent, fontFamily: "'Space Mono', monospace" }}
            >
              {slide.deck === "EPU" ? "EPU" : `Deck ${slide.deck}`} #{slide.id}
            </span>
            <ActBadge slide={slide} lang={lang} />
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>
        {/* Modal body — two-column */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isRTL ? "direction-rtl" : ""}`}>
          {/* Left: image */}
          <div className="relative" style={{ minHeight: "280px" }}>
            <img
              src={slide.imageUrl}
              alt={content.title}
              className="w-full h-full object-cover"
              style={{ minHeight: "280px" }}
            />
          </div>
          {/* Right: content */}
          <div className={`p-6 overflow-y-auto ${isRTL ? "text-right" : ""}`} style={{ maxHeight: "70vh" }}>
            <h2
              className="text-xl font-bold mb-3 leading-snug"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#1A1A1A",
              }}
            >
              {content.title}
            </h2>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#4B5563",
              }}
            >
              {content.narrative}
            </p>
            {content.strategic && (
              <div
                className="mb-4 p-3 border-l-2 rounded-sm"
                style={{ borderColor: accentColor, backgroundColor: accentColor + "0A" }}
              >
                <p
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: accentColor, fontFamily: "'Space Mono', monospace" }}
                >
                  {isRTL ? "انتخاب راهبردی" : "Strategic Choice"}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    color: "#374151",
                  }}
                >
                  {content.strategic}
                </p>
              </div>
            )}
            {content.keyPoints.length > 0 && (
              <div className="mb-4">
                <p
                  className="text-xs font-semibold mb-2 uppercase tracking-wide"
                  style={{ color: "#9CA3AF", fontFamily: "'Space Mono', monospace" }}
                >
                  {isRTL ? "نکات کلیدی" : "Key Points"}
                </p>
                <ul className={`space-y-1.5 ${isRTL ? "pr-3" : "pl-3"}`}>
                  {content.keyPoints.map((kp, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                        color: "#374151",
                        listStyleType: "disc",
                        display: "list-item",
                      }}
                    >
                      {kp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {content.tags.length > 0 && (
              <div className={`flex flex-wrap gap-1.5 ${isRTL ? "flex-row-reverse" : ""}`}>
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border rounded-sm"
                    style={{
                      borderColor: "#E8E5DF",
                      color: "#9CA3AF",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Navigation footer */}
        <div
          className={`flex items-center justify-between px-6 py-3 border-t ${isRTL ? "flex-row-reverse" : ""}`}
          style={{ borderColor: "#E8E5DF", backgroundColor: "#F8F7F4" }}
        >
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="text-xs px-4 py-2 border rounded-sm disabled:opacity-30 transition-all"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
              borderColor: "#D0CCC5",
              color: "#5A5A5A",
            }}
          >
            {isRTL ? "بعدی →" : "← Prev"}
          </button>
          <span
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
          >
            {slide.deck === "EPU" ? "EPU" : `Deck ${slide.deck}`} #{slide.id}
          </span>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="text-xs px-4 py-2 border rounded-sm disabled:opacity-30 transition-all"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
              borderColor: "#D0CCC5",
              color: "#5A5A5A",
            }}
          >
            {isRTL ? "← قبلی" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const { language, setLanguage, isRTL } = useLanguage();
  const lang = language as "en" | "fa";
  const t = ui60[lang];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeDeck, setActiveDeck] = useState<DeckId | "All">("All");
  const [activeAudience, setActiveAudience] = useState<AudiencePath | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<UnifiedSlide | null>(null);

  const filteredSlides = useMemo(() => {
    let result = allSlides;
    if (activeDeck !== "All") result = result.filter((s) => s.deck === activeDeck);
    if (activeAudience) {
      result = result.filter((s) => getAudiencePaths(s).includes(activeAudience));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => {
        const en = s.en; const fa = s.fa;
        return (
          en.title.toLowerCase().includes(q) ||
          en.narrative.toLowerCase().includes(q) ||
          en.keyPoints.some((k) => k.toLowerCase().includes(q)) ||
          en.tags.some((tg) => tg.toLowerCase().includes(q)) ||
          fa.title.toLowerCase().includes(q) ||
          fa.narrative.toLowerCase().includes(q) ||
          fa.keyPoints.some((k) => k.toLowerCase().includes(q)) ||
          fa.tags.some((tg) => tg.toLowerCase().includes(q))
        );
      });
    }
    return result;
  }, [searchQuery, activeDeck, activeAudience]);

  const handleDeckChange = useCallback((deck: DeckId | "All") => {
    setActiveDeck(deck);
    setSearchQuery("");
  }, []);

  const handleAudienceToggle = useCallback((audience: AudiencePath) => {
    setActiveAudience((prev) => (prev === audience ? null : audience));
  }, []);

  const selectedIdx = selectedSlide
    ? filteredSlides.findIndex((s) => s.uid === selectedSlide.uid)
    : -1;

  const deckCounts = useMemo(() => {
    const c: Record<DeckId, number> = { EPU: 0, A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, TOC: 0 };
    allSlides.forEach((s) => c[s.deck]++);
    return c;
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8F7F4", direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* ── Header ── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: "rgba(248,247,244,0.95)",
          backdropFilter: "blur(8px)",
          borderColor: "#E8E5DF",
        }}
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
                {isRTL ? "راهبرد EPU" : "EPU Strategy"}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace", color: "#9CA3AF" }}
              >
                {isRTL ? `${allSlides.length} اسلاید · ۹ Deck` : `${allSlides.length} Slides · 9 Decks`}
              </p>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRTL ? `جستجو در ${allSlides.length} اسلاید...` : `Search ${allSlides.length} slides...`}
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
              onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
              aria-pressed={!isRTL}
              className="text-xs px-3 py-1.5 border rounded-sm transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                borderColor: isRTL ? "#D0CCC5" : "#1A1A1A",
                color: isRTL ? "#5A5A5A" : "#1A1A1A",
                backgroundColor: isRTL ? "transparent" : "#1A1A1A18",
                fontWeight: isRTL ? "400" : "600",
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
          background: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)",
          minHeight: "556px",
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C8A96E" }}
            >
              {isRTL ? "سند راهبردی — نسخه ۲.۰۰" : "Strategy Document — Version 2.00"}
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {isRTL
                ? "درگاه اطلاع‌رسانی خودروی هیدروژنی شبح با راهبرد EPU"
                : "Ghost Hydrogen Powered Autonomous Vehicle with Event Processing Unit microchip"}
            </h1>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#B0ADA8",
                maxWidth: "600px",
              }}
            >
              {isRTL
                ? "معماری ایمنی مبتنی بر فیزیک و قابل ممیزی کربن برای نسل بعدی خودروهای هیدروژنی — طراحی‌شده بدون فرمان، اداره‌شده با قانون اساسی قطعی."
                : "Physics-certified, carbon-auditable safety architecture for next-generation hydrogen vehicles — designed commandless, governed by deterministic constitutional law."}
            </p>
            {/* Deck pills */}
            <div className={`flex flex-wrap gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
              {(["EPU", "A", "B", "C", "D", "E", "F", "G", "TOC"] as DeckId[]).map((deck) => {
                const meta = DECK_META[deck];
                return (
                  <button
                    key={deck}
                    onClick={() => handleDeckChange(deck)}
                    className="text-xs px-4 py-2 rounded-sm border transition-all"
                    style={{
                      borderColor: meta.accent + "66",
                      color: meta.accent,
                      backgroundColor: meta.accent + "11",
                      fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                    }}
                  >
                    {lang === "fa" ? meta.fa : meta.en} ({deckCounts[deck]})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Deck Navigation ── */}
      <nav
        className="border-b sticky top-[57px] z-30"
        style={{ backgroundColor: "rgba(248,247,244,0.97)", borderColor: "#E8E5DF" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-0 overflow-x-auto ${isRTL ? "flex-row-reverse" : ""}`}>
            {/* All */}
            <button
              onClick={() => handleDeckChange("All")}
              className="px-5 py-3 text-sm border-b-2 transition-all whitespace-nowrap"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                borderBottomColor: activeDeck === "All" ? "#1A1A1A" : "transparent",
                color: activeDeck === "All" ? "#1A1A1A" : "#7A7A7A",
                fontWeight: activeDeck === "All" ? "600" : "400",
              }}
            >
              {isRTL ? `همه (${allSlides.length})` : `All (${allSlides.length})`}
            </button>
            {/* EPU */}
            {(["EPU", "A", "B", "C", "D", "E", "F", "G", "TOC"] as DeckId[]).map((deck) => {
              const meta = DECK_META[deck];
              return (
                <button
                  key={deck}
                  onClick={() => handleDeckChange(deck)}
                  className="px-5 py-3 text-sm border-b-2 transition-all whitespace-nowrap"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                    borderBottomColor: activeDeck === deck ? meta.accent : "transparent",
                    color: activeDeck === deck ? meta.accent : "#7A7A7A",
                    fontWeight: activeDeck === deck ? "600" : "400",
                  }}
                >
                  {lang === "fa" ? meta.fa : meta.en} ({deckCounts[deck]})
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Audience Path Filter ── */}
      <div
        className="border-b"
        style={{ backgroundColor: "rgba(248,247,244,0.97)", borderColor: "#E8E5DF" }}
      >
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "1400px" }}>
          <div className={`flex items-center gap-3 py-2.5 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span
              className="text-xs"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#9CA3AF",
              }}
            >
              {isRTL ? "مسیر مخاطب:" : "Audience:"}
            </span>
            {(["investor", "engineer", "regulator"] as AudiencePath[]).map((aud) => {
              const meta = AUDIENCE_META[aud];
              const isActive = activeAudience === aud;
              return (
                <button
                  key={aud}
                  onClick={() => handleAudienceToggle(aud)}
                  className="text-xs px-3 py-1.5 rounded-sm border transition-all"
                  style={{
                    fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                    borderColor: isActive ? "#C8A96E" : "#D0CCC5",
                    backgroundColor: isActive ? "#C8A96E18" : "transparent",
                    color: isActive ? "#8B6914" : "#7A7A7A",
                    fontWeight: isActive ? "600" : "400",
                  }}
                >
                  {meta.icon} {isRTL ? meta.fa : meta.en}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="container mx-auto px-4 lg:px-8 py-10" style={{ maxWidth: "1400px" }}>
        {/* Results header */}
        <div className={`flex items-center justify-between mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          <p
            className="text-sm"
            style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
          >
            {searchQuery
              ? `${filteredSlides.length} ${isRTL ? "نتیجه" : "result" + (filteredSlides.length !== 1 ? "s" : "")} — "${searchQuery}"`
              : `${filteredSlides.length} ${isRTL ? "اسلاید" : "slide" + (filteredSlides.length !== 1 ? "s" : "")}`}
          </p>
          {(searchQuery || activeDeck !== "All" || activeAudience) && (
            <button
              onClick={() => { setSearchQuery(""); setActiveDeck("All"); setActiveAudience(null); }}
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

        {filteredSlides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            {filteredSlides.map((slide, idx) => (
              <SlideCard
                key={slide.uid}
                slide={slide}
                lang={lang}
                isRTL={isRTL}
                searchQuery={searchQuery}
                animationDelay={idx * 0.02}
                onClick={() => setSelectedSlide(slide)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p
              className="text-sm"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#9CA3AF",
              }}
            >
              {isRTL ? "اسلایدی یافت نشد." : "No slides found."}
            </p>
          </div>
        )}
      </main>

      {/* ── Modal ── */}
      {selectedSlide && (
        <SlideModal
          slide={selectedSlide}
          lang={lang}
          isRTL={isRTL}
          onClose={() => setSelectedSlide(null)}
          onPrev={() => {
            if (selectedIdx > 0) setSelectedSlide(filteredSlides[selectedIdx - 1]);
          }}
          onNext={() => {
            if (selectedIdx < filteredSlides.length - 1)
              setSelectedSlide(filteredSlides[selectedIdx + 1]);
          }}
          hasPrev={selectedIdx > 0}
          hasNext={selectedIdx < filteredSlides.length - 1}
        />
      )}
    </div>
  );
}
