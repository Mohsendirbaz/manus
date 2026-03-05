import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fa",
  setLanguage: () => {},
  isRTL: true,
});

/**
 * Return the data-uid of the first slide card whose top edge is at or
 * below the sticky header (i.e. the topmost fully-visible card).
 *
 * Slide cards are the shared coordinate: they have identical fixed
 * dimensions in both EN and FA, so scrolling to the same uid after a
 * language switch lands on exactly the same logical position.
 */
function getTopmostVisibleUid(): string | null {
  // Sticky header is ~57 px; add a small buffer so we don't grab a card
  // that is only 1 px visible.
  const TOP_OFFSET = 64;
  const cards = Array.from(document.querySelectorAll<HTMLElement>("article[data-uid]"));
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    if (rect.bottom > TOP_OFFSET) {
      return card.dataset.uid ?? null;
    }
  }
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("epu-language");
    return saved === "fa" || saved === "en" ? saved : "fa";
  });

  const isRTL = language === "fa";

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    // ── 1. Capture the shared coordinate BEFORE the re-render ──────────────
    const anchorUid = getTopmostVisibleUid();

    // ── 2. Commit the language change ──────────────────────────────────────
    setLanguageState(lang);
    localStorage.setItem("epu-language", lang);

    // ── 3. After React has flushed the new render, scroll to the same card ─
    // Two rAFs: first lets React commit, second lets the browser layout.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!anchorUid) return;
        const target = document.querySelector<HTMLElement>(
          `article[data-uid="${anchorUid}"]`
        );
        if (target) {
          // block:'start' aligns the card's top edge with the scroll container top.
          // The sticky header sits above it, so we nudge up by its height.
          target.scrollIntoView({ block: "start", behavior: "instant" });
          // Compensate for the sticky header so the card isn't hidden behind it.
          window.scrollBy({ top: -64, behavior: "instant" });
        }
      });
    });
  };

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isRTL ? "rtl" : "ltr");
    html.setAttribute("lang", language);
  }, [language, isRTL]);

  useEffect(() => {
    const handler = () => {
      setLanguage(language === "fa" ? "en" : "fa");
    };
    window.addEventListener("toggle-language", handler);
    return () => window.removeEventListener("toggle-language", handler);
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
