import React, { createContext, useContext, useState, useEffect } from "react";

// Language type is defined inline to avoid importing from legacy translations.ts
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
 * Find the nearest slide card element whose top edge is closest to the
 * vertical centre of the viewport.  Returns the element and its offset
 * from the viewport centre so we can restore that exact visual position
 * after a language switch re-renders the layout.
 *
 * "Shared coordinate" strategy: instead of saving raw window.scrollY
 * (which changes when the hero/header height differs between languages),
 * we anchor to a DOM element that exists in both language renders.
 */
function findAnchorElement(): { el: Element; offsetFromCenter: number } | null {
  // Slide cards are <article> elements in the grid
  const cards = Array.from(document.querySelectorAll("article[data-uid]"));
  if (cards.length === 0) {
    // Fallback: any article on the page
    const fallback = Array.from(document.querySelectorAll("article"));
    if (fallback.length === 0) return null;
    cards.push(...fallback);
  }

  const viewportCenter = window.innerHeight / 2;
  let best: Element | null = null;
  let bestDist = Infinity;

  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const dist = Math.abs(cardCenter - viewportCenter);
    if (dist < bestDist) {
      bestDist = dist;
      best = card;
    }
  }

  if (!best) return null;
  const rect = best.getBoundingClientRect();
  const cardCenter = rect.top + rect.height / 2;
  return { el: best, offsetFromCenter: cardCenter - viewportCenter };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("epu-language");
    return (saved === "fa" || saved === "en") ? saved : "fa";
  });

  const isRTL = language === "fa";

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    // ── Step 1: capture the shared anchor BEFORE the re-render ──────────────
    const anchor = findAnchorElement();

    // ── Step 2: commit the language change (triggers re-render) ─────────────
    setLanguageState(lang);
    localStorage.setItem("epu-language", lang);

    if (!anchor) {
      // No cards visible (e.g. hero-only viewport) — just keep scrollY as-is
      return;
    }

    // ── Step 3: after the DOM has settled, restore the anchor's position ────
    // Two rAFs: first lets React flush the new render, second lets the browser
    // paint and recalculate layout so getBoundingClientRect is accurate.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const newRect = anchor.el.getBoundingClientRect();
        const newCardCenter = newRect.top + newRect.height / 2;
        // How far is the card from where it should be?
        const delta = newCardCenter - (window.innerHeight / 2 + anchor.offsetFromCenter);
        if (Math.abs(delta) > 1) {
          window.scrollBy({ top: delta, behavior: "instant" });
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
