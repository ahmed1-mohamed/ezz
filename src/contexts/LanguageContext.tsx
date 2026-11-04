"use client";

import React, { createContext, useContext, useEffect, useCallback, useTransition } from "react";
import { useLocale, useMessages } from "next-intl";
import { setUserLocale } from "@/i18n/locale";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: unknown, path: string): string | undefined {
  let curr: unknown = obj;
  for (const part of path.split(".")) {
    if (curr && typeof curr === "object" && part in curr) {
      curr = (curr as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof curr === "string" ? curr : undefined;
}

function interpolate(text: string, values?: Record<string, string | number>): string {
  if (!values) return text;
  return Object.entries(values).reduce(
    (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)),
    text
  );
}

function applyDocumentLanguage(lang: Language) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("app_lang", lang);
  } catch {}
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = (useLocale() as Language) || "en";
  // Messages already include the English fallback for missing keys (see src/i18n/request.ts).
  const messages = useMessages();
  const [, startTransition] = useTransition();

  useEffect(() => {
    applyDocumentLanguage(language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const nextLang: Language = language === "en" ? "ar" : "en";
    applyDocumentLanguage(nextLang);

    startTransition(() => {
      setUserLocale(nextLang);
    });
  }, [language]);

  const t = useCallback(
    (key: string, values?: Record<string, string | number>): string => {
      if (!key) return "";
      const value = getNestedValue(messages, key);
      return value === undefined ? key : interpolate(value, values);
    },
    [messages]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
