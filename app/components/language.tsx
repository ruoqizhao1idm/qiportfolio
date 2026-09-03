"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "zh";
export type Localized = { en: string; zh: string };

const LanguageContext = createContext({
  language: "en" as Language,
  setLanguage: (_language: Language) => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => { if (window.localStorage.getItem("ruoqi-language") === "zh") setLanguage("zh"); }, []);
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("ruoqi-language", language);
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, toggleLanguage: () => setLanguage((v) => v === "en" ? "zh" : "en") }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
export function pick(value: Localized | string, language: Language) { return typeof value === "string" ? value : value[language]; }

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return <button className="language-toggle" onClick={toggleLanguage} aria-label={language === "en" ? "Switch to Chinese" : "Switch to English"}>
    <span className={language === "en" ? "active" : ""}>EN</span><i aria-hidden="true"/><span className={language === "zh" ? "active" : ""}>中文</span>
  </button>;
}
