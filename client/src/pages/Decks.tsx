import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const decks = [
  {
    id: "epu",
    href: "/",
    accentColor: "#C8A96E",
    bgGradient: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)",
    slideCount: 60,
    actCount: 8,
    en: {
      label: "EPU Strategy",
      title: "Physics-Certified, Carbon-Auditable Autonomy",
      description:
        "The complete 60-slide strategic document for the Event Processing Unit — a safety compute core governed by physics constraints, fuel-agnostic and application-agnostic.",
      tag: "Core Deck",
    },
    fa: {
      label: "استراتژی EPU",
      title: "خودمختاری گواهی‌شده با فیزیک، قابل ممیزی کربن",
      description:
        "سند استراتژیک کامل ۶۰ اسلایدی برای واحد پردازش رویداد — یک هسته محاسباتی ایمنی تحت قیود فیزیکی، مستقل از سوخت و کاربرد.",
      tag: "Deck اصلی",
    },
  },
  {
    id: "deck-a",
    href: "/deck-a",
    accentColor: "#4FC3F7",
    bgGradient: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)",
    slideCount: 30,
    actCount: 8,
    en: {
      label: "Deck A",
      title: "Universal Filtration Primitive",
      description:
        "Every separation mechanism — from spatial stencil to statistical LDA — is an instantiation of a single five-component primitive. A unifying framework across 10 filtration paths.",
      tag: "FilterDesignInventory",
    },
    fa: {
      label: "Deck A",
      title: "پریمیتیو فیلتراسیون جهانی",
      description:
        "هر مکانیزم جداسازی — از استنسیل فضایی تا LDA آماری — نمونه‌سازی یک primitive پنج‌مؤلفه‌ای واحد است. چارچوبی یکپارچه در ۱۰ مسیر فیلتراسیون.",
      tag: "FilterDesignInventory",
    },
  },
  {
    id: "deck-b",
    href: "/deck-b",
    accentColor: "#4CAF82",
    bgGradient: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)",
    slideCount: 30,
    actCount: 7,
    en: {
      label: "Deck B",
      title: "Tense Grammar as State Management",
      description:
        "Tense grammar is a complete state-management protocol for differential evolution — from T⁰ as temporal state manager, to Landauer's principle, stress tensors, and constitutional truth governance for LLM systems.",
      tag: "TemporalStateManagement",
    },
    fa: {
      label: "Deck B",
      title: "دستور زمانی به‌عنوان مدیریت حالت",
      description:
        "دستور زمانی یک پروتکل کامل مدیریت حالت برای تکامل دیفرانسیلی است — از T⁰ به‌عنوان مدیر حالت زمانی، تا اصل Landauer، تانسور تنش، و حاکمیت قانون اساسی حقیقت برای سیستم‌های LLM.",
      tag: "TemporalStateManagement",
    },
  },
  {
    id: "deck-c",
    href: "/deck-c",
    accentColor: "#F59E0B",
    bgGradient: "linear-gradient(135deg, #1A0A00 0%, #2D1500 50%, #1A0A00 100%)",
    slideCount: 60,
    actCount: 8,
    en: {
      label: "Deck C",
      title: "Ghost Autonomy Implementation",
      description:
        "60 slides covering the PICAPD ISA, Queen Bee BFT architecture, physics foundation (bilinear forms, PBE, conservation laws), financial model, OEM qualification results, and the 2030 vision for Ghost EPU as the safety compute standard.",
      tag: "GA_IMPL_2026_001",
    },
    fa: {
      label: "Deck C",
      title: "پیاده‌سازی Ghost Autonomy",
      description:
        "۶۰ اسلاید پوشش‌دهنده ISA PICAPD، معماری Queen Bee BFT، پایه فیزیکی (فرم‌های دوخطی، PBE، قوانین بقا)، مدل مالی، نتایج صلاحیت‌سنجی OEM، و چشم‌انداز ۲۰۳۰ برای Ghost EPU به‌عنوان استاندارد محاسبات ایمنی.",
      tag: "GA_IMPL_2026_001",
    },
  },
  {
    id: "deck-d",
    href: "/deck-d",
    accentColor: "#0D9488",
    bgGradient: "linear-gradient(135deg, #001A1A 0%, #003333 50%, #001A1A 100%)",
    slideCount: 120,
    actCount: 8,
    en: {
      label: "Deck D",
      title: "TWIN Multi-Agent Integration",
      description:
        "120 slides covering the full TWIN multi-agent codebase integration into EPU: agent foundation, message bus, BFT trust consensus, memory architecture, mechanical signal protocol, station coordination, LLM integration, and TWIN-EPU synthesis.",
      tag: "TWIN_INT_2026_001",
    },
    fa: {
      label: "Deck D",
      title: "یکپارچه‌سازی چندعاملی TWIN",
      description:
        "۱۲۰ اسلاید پوشش‌دهنده یکپارچه‌سازی کامل کدبیس چندعاملی TWIN در EPU: بنیاد عوامل هوشمند، گذرگاه پیام، اجماع اعتماد BFT، معماری حافظه، پروتکل سیگنال مکانیکی، هماهنگی ایستگاه‌ها، یکپارچه‌سازی LLM، و برآیند TWIN-EPU.",
      tag: "TWIN_INT_2026_001",
    },
  },
];

export default function Decks() {
  const { language, isRTL } = useLanguage();
  const lang = language as "en" | "fa";

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F8F7F4", direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* Header */}
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
            <div className={isRTL ? "text-right" : ""}>
              <p
                className="text-sm font-bold leading-none"
                style={{
                  fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                  color: "#1A1A1A",
                }}
              >
                {isRTL ? "کتابخانه Deck" : "Deck Library"}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ fontFamily: "'Space Mono', monospace", color: "#9CA3AF" }}
              >
                {isRTL ? "۳۰۰ اسلاید · ۵ Deck" : "300 Slides · 5 Decks"}
              </p>
            </div>
            <div className="flex-1" />
            {/* Language toggle */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("toggle-language"))}
              className="text-xs px-3 py-1.5 border rounded-sm"
              style={{
                fontFamily: "'Space Mono', monospace",
                borderColor: "#D0CCC5",
                color: "#5A5A5A",
              }}
            >
              {isRTL ? "EN" : "فا"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0D2137 50%, #0A2840 100%)",
        }}
      >
        <div className="container mx-auto" style={{ maxWidth: "1400px" }}>
          <div className={`max-w-3xl ${isRTL ? "mr-auto text-right" : "ml-0"}`}>
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C8A96E" }}
            >
              {isRTL ? "مجموعه کامل سند فنی" : "Complete Technical Document Collection"}
            </p>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#F8F7F4",
              }}
            >
              {isRTL
                ? "۳۰۰ اسلاید · پنج چارچوب"
                : "300 Slides · Five Frameworks"}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                color: "#B0ADA8",
                maxWidth: "600px",
              }}
            >
              {isRTL
                ? "EPU استراتژی، فیلتراسیون جهانی، و مدیریت حالت زمانی — سه چارچوب مستقل که در نقاط کلیدی همپوشانی دارند."
                : "EPU Strategy, Universal Filtration, and Temporal State Management — three independent frameworks that converge at key architectural junctions."}
            </p>
          </div>
        </div>
      </section>

      {/* Deck Cards */}
      <main
        className="container mx-auto px-4 lg:px-8 py-12 pb-24"
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {decks.map((deck) => {
            const content = deck[lang];
            return (
              <Link key={deck.id} href={deck.href}>
                <div
                  className="group cursor-pointer rounded-sm border overflow-hidden"
                  style={{ borderColor: "#E8E5DF", backgroundColor: "#FDFCFA" }}
                >
                  {/* Card header */}
                  <div
                    className="px-6 py-8"
                    style={{ background: deck.bgGradient }}
                  >
                    <div
                      className={`flex items-center justify-between mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{
                          borderColor: deck.accentColor + "44",
                          color: deck.accentColor,
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        {content.tag}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "#6B7280",
                        }}
                      >
                        {deck.slideCount} {isRTL ? "اسلاید" : "slides"}
                      </span>
                    </div>
                    <p
                      className="text-xs uppercase tracking-widest mb-2"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: deck.accentColor,
                      }}
                    >
                      {content.label}
                    </p>
                    <h2
                      className="text-xl font-bold leading-snug"
                      style={{
                        fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                        color: "#F8F7F4",
                      }}
                    >
                      {content.title}
                    </h2>
                  </div>

                  {/* Card body */}
                  <div className={`px-6 py-5 ${isRTL ? "text-right" : ""}`}>
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{
                        fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                        color: "#4B5563",
                      }}
                    >
                      {content.description}
                    </p>
                    <div
                      className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "#9CA3AF",
                        }}
                      >
                        {deck.actCount} {isRTL ? "پرده" : "acts"}
                      </span>
                      <span
                        className="text-xs font-medium ml-auto"
                        style={{
                          fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
                          color: deck.accentColor,
                        }}
                      >
                        {isRTL ? "مشاهده ←" : "View →"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cross-deck note */}
        <div
          className={`mt-12 p-6 border rounded-sm ${isRTL ? "text-right" : ""}`}
          style={{ borderColor: "#E8E5DF", backgroundColor: "#FDFCFA" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C8A96E" }}
          >
            {isRTL ? "همپوشانی بین Deck‌ها" : "Cross-Deck Convergence"}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              color: "#4B5563",
              maxWidth: "800px",
            }}
          >
            {isRTL
              ? "هر سه Deck می‌توانند به‌صورت مستقل ارائه شوند. همپوشانی تنها در جایی رخ می‌دهد که زمینه‌سازی ضروری است — مثلاً Deck A پایه نظری فیلتراسیون را توسعه می‌دهد در حالی که EPU پیاده‌سازی سخت‌افزاری را ارائه می‌دهد."
              : "Each deck stands alone as an independent presentation. Overlap occurs only where context is essential — for example, Deck A develops the theoretical basis of filtration while EPU presents the hardware implementation. See FUTURE_WORK_SLIDES.md for the full convergence map."}
          </p>
        </div>
      </main>
    </div>
  );
}
