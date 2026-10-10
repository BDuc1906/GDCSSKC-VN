"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { dict, type Lang, type TranslationKey } from "./dictionary";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "hoi-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "vi";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "vi" || saved === "en") return saved;
  return "vi";
}

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback(
    (key: TranslationKey) => dict[lang][key] ?? key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}