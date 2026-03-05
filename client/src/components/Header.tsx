import { Search, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/translations";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = ui[language];

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        backgroundColor: "rgba(248, 247, 244, 0.95)",
        backdropFilter: "blur(12px)",
        borderColor: "#E8E5DF",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        className="mx-auto px-4 lg:px-8 flex items-center justify-between h-16 gap-4"
        style={{ maxWidth: "1400px" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="w-8 h-8 rounded flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#2D7D6F" }}
          >
            <span
              className="text-white text-xs font-bold"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              EPU
            </span>
          </div>
          <div className={`hidden sm:block ${isRTL ? "text-right" : ""}`}>
            <p
              className="text-sm font-semibold leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Playfair Display', serif",
                color: "#2C2C2C",
              }}
            >
              {t.siteTitle}
            </p>
            <p
              className="text-xs leading-tight"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#9CA3AF",
                fontSize: "0.6rem",
              }}
            >
              {t.siteSubtitle}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl relative">
          <Search
            className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${isRTL ? "right-3" : "left-3"}`}
            style={{ color: "#9CA3AF" }}
          />
          <input
            type="text"
            dir={isRTL ? "rtl" : "ltr"}
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full py-2 text-sm rounded-lg border outline-none transition-all"
            style={{
              fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'DM Sans', sans-serif",
              backgroundColor: "white",
              borderColor: "#E0DDD7",
              color: "#2C2C2C",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              paddingLeft: isRTL ? "2.25rem" : "2.25rem",
              paddingRight: isRTL ? "2.25rem" : "2.25rem",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#2D7D6F";
              e.target.style.boxShadow = "0 0 0 3px rgba(45,125,111,0.12)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#E0DDD7";
              e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? "left-3" : "right-3"}`}
            >
              <X className="w-3.5 h-3.5" style={{ color: "#9CA3AF" }} />
            </button>
          )}
        </div>

        {/* Right side: stats + language toggle */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <div className={isRTL ? "text-left" : "text-right"}>
            <p
              className="text-xs font-semibold"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#2C2C2C",
              }}
            >
              {t.heroStats.slides} {t.slidesCount}
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: isRTL ? "'Vazirmatn', sans-serif" : "'Space Mono', monospace",
                color: "#9CA3AF",
                fontSize: "0.6rem",
              }}
            >
              {t.heroStats.sections} {t.heroStats.sectionsLabel}
            </p>
          </div>

          {/* Language Toggle */}
          <div
            className="flex items-center rounded-full border overflow-hidden shrink-0"
            style={{ borderColor: "#E8E5DF" }}
          >
            <button
              onClick={() => setLanguage("en")}
              className="text-xs font-medium transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                backgroundColor: language === "en" ? "#2D7D6F" : "transparent",
                color: language === "en" ? "#FFFFFF" : "#9CA3AF",
                width: "36px",
                height: "28px",
                lineHeight: "28px",
                textAlign: "center",
                display: "block",
                flexShrink: 0,
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fa")}
              className="text-xs font-medium transition-all"
              style={{
                fontFamily: "'Vazirmatn', sans-serif",
                backgroundColor: language === "fa" ? "#2D7D6F" : "transparent",
                color: language === "fa" ? "#FFFFFF" : "#9CA3AF",
                width: "36px",
                height: "28px",
                lineHeight: "28px",
                textAlign: "center",
                display: "block",
                flexShrink: 0,
              }}
            >
              فا
            </button>
          </div>
        </div>

        {/* Mobile language toggle */}
        <div className="flex lg:hidden items-center shrink-0">
          <div
            className="flex items-center rounded-full border overflow-hidden"
            style={{ borderColor: "#E8E5DF" }}
          >
            <button
              onClick={() => setLanguage("en")}
              className="text-xs font-medium transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                backgroundColor: language === "en" ? "#2D7D6F" : "transparent",
                color: language === "en" ? "#FFFFFF" : "#9CA3AF",
                width: "32px",
                height: "26px",
                lineHeight: "26px",
                textAlign: "center",
                display: "block",
                flexShrink: 0,
              }}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("fa")}
              className="text-xs font-medium transition-all"
              style={{
                fontFamily: "'Vazirmatn', sans-serif",
                backgroundColor: language === "fa" ? "#2D7D6F" : "transparent",
                color: language === "fa" ? "#FFFFFF" : "#9CA3AF",
                width: "32px",
                height: "26px",
                lineHeight: "26px",
                textAlign: "center",
                display: "block",
                flexShrink: 0,
              }}
            >
              فا
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
