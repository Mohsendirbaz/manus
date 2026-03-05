/**
 * LanguageContext — bilingual EN/FA with built-in scroll preservation.
 *
 * DESIGN RATIONALE
 * ─────────────────
 * The page layout has one variable-height zone that differs between languages:
 *   • Hero section  (EN ≈ 556 px, FA ≈ 450 px)
 *
 * Slide cards have *identical* fixed dimensions in both languages, so the
 * grid is a stable coordinate system.  The shared coordinate is:
 *
 *   anchorOffset = anchorCard.offsetTop − grid.offsetTop
 *
 * This value is invariant across language switches because it measures the
 * card's position *inside* the grid, not in the document.
 *
 * Restoration formula (after re-render):
 *   window.scrollTo(grid.offsetTop_new + anchorOffset − stickyH)
 *
 * The scroll logic lives here — not in any individual page — so every caller
 * of setLanguage (Header, Home, future pages) gets correct behaviour for free.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Language = "en" | "fa";

interface LanguageContextType {
  language: Language;
  /** Switch language. Scroll position is preserved automatically. */
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fa",
  setLanguage: () => {},
  isRTL: true,
});

// ─── helpers ────────────────────────────────────────────────────────────────

/** Height of all sticky elements above the card grid. */
function getStickyHeight(): number {
  const header = document.querySelector<HTMLElement>("header");
  const nav = document.querySelector<HTMLElement>("nav");
  return (header?.offsetHeight ?? 63) + (nav?.offsetHeight ?? 0);
}

/**
 * Returns the grid-relative offset of the first card whose bottom edge
 * is below the sticky header, or -1 if no card is found / no grid.
 */
function captureAnchor(): number {
  const grid = document.querySelector<HTMLElement>(".grid");
  if (!grid) return -1;

  const stickyH = getStickyHeight();
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>("article[data-uid]")
  );

  for (const card of cards) {
    if (card.getBoundingClientRect().bottom > stickyH) {
      return card.offsetTop - grid.offsetTop;
    }
  }
  return -1;
}

/**
 * Scrolls so that the card at `anchorOffset` (relative to grid) aligns
 * with the top of the sticky header.
 */
function restoreAnchor(anchorOffset: number): void {
  if (anchorOffset < 0) return;
  const grid = document.querySelector<HTMLElement>(".grid");
  if (!grid) return;
  const stickyH = getStickyHeight();
  window.scrollTo({ top: grid.offsetTop + anchorOffset - stickyH, behavior: "instant" });
}

// ─── provider ───────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("epu-language");
    return saved === "fa" || saved === "en" ? saved : "fa";
  });

  const isRTL = language === "fa";

  // Holds the grid-relative anchor captured just before a language switch.
  // -1 means "no pending restoration".
  const pendingAnchor = useRef<number>(-1);

  /**
   * Public API: switch language and schedule scroll restoration.
   * Captures the anchor *synchronously* (before React re-renders),
   * then triggers the state update.
   */
  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return; // no-op if already the same language

      // Capture anchor before the re-render changes the DOM.
      pendingAnchor.current = captureAnchor();

      setLanguageState(lang);
      localStorage.setItem("epu-language", lang);
    },
    [language]
  );

  // Sync <html> dir/lang attributes whenever language changes.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isRTL ? "rtl" : "ltr");
    html.setAttribute("lang", language);
  }, [language, isRTL]);

  // After every language change: restore scroll if an anchor was captured.
  // rAF ensures the browser has painted the new layout before we measure.
  useEffect(() => {
    const anchor = pendingAnchor.current;
    if (anchor < 0) return;
    pendingAnchor.current = -1; // consume — prevents double-firing

    requestAnimationFrame(() => {
      restoreAnchor(anchor);
    });
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
