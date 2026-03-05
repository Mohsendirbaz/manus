/**
 * LanguageContext — bilingual EN/FA with built-in scroll preservation.
 *
 * DESIGN RATIONALE
 * ─────────────────
 * Layout layers (measured, px):
 *
 *   EN mode:  header(63) + hero(556) + nav(62) + audience+label(143) = grid.offsetTop = 824
 *   FA mode:  header(63) + hero(450) + nav(62) + audience+label(143) = grid.offsetTop = 718
 *   Delta:    hero shrinks by 106 px in FA → grid shifts up by 106 px
 *
 * Sticky header height is identical in both modes: header(63) + nav(62) = 125 px.
 *
 * SHARED COORDINATE
 * ─────────────────
 * Slide cards have *identical* fixed dimensions in both languages.
 * The shared coordinate is the card's position inside the grid:
 *
 *   anchorOffset = anchorCard.offsetTop − grid.offsetTop
 *
 * This is invariant across language switches.
 *
 * INITIAL CONDITION CHECK (critical)
 * ────────────────────────────────────
 * If the user is scrolled ABOVE the grid (scrollY < grid.offsetTop − stickyH),
 * no restoration is needed — just let the browser stay where it is.
 * Only restore when the user is actually scrolled into the card grid.
 *
 * RESTORATION FORMULA
 * ────────────────────
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
 * Captures the grid-relative offset of the topmost visible card.
 *
 * Returns -1 (no restoration needed) in two cases:
 *   1. No grid / no cards found.
 *   2. The user is scrolled ABOVE the grid — restoring would incorrectly
 *      jump them into the grid when they should stay at/near the top.
 */
function captureAnchor(): number {
  const grid = document.querySelector<HTMLElement>(".grid");
  if (!grid) return -1;

  const stickyH = getStickyHeight();

  // INITIAL CONDITION CHECK:
  // If the grid's top edge is still below the sticky header, the user has not
  // scrolled into the card area yet.  No restoration needed.
  const gridTopInViewport = grid.getBoundingClientRect().top;
  if (gridTopInViewport >= stickyH) {
    // Grid hasn't scrolled under the sticky bar — user is above the grid.
    return -1;
  }

  // User is inside the grid. Find the first card whose bottom clears stickyH.
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
  // -1 means "no pending restoration" (user was above the grid).
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
      // Returns -1 if user is above the grid (no restoration needed).
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
  // rAF ensures the browser has painted the new layout before we scroll.
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
