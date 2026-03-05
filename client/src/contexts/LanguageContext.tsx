import React, { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "@/data/translations";

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
    setLanguageState(lang);
    localStorage.setItem("epu-language", lang);
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
