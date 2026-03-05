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

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("epu-language");
    return (saved === "fa" || saved === "en") ? saved : "fa";
  });

  const isRTL = language === "fa";

  const setLanguage = (lang: Language) => {
    // Save current scroll position before React re-renders the layout
    const scrollY = window.scrollY;
    setLanguageState(lang);
    localStorage.setItem("epu-language", lang);
    // Restore scroll position after the DOM has updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" });
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
