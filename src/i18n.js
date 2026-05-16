import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";

const storedLang = localStorage.getItem("appLanguage") || "ar";
const initialLanguage = storedLang;

function setDocumentDirection(language) {
  if (typeof document !== "undefined") {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }
}

setDocumentDirection(initialLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: initialLanguage,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export function setLanguage(language) {
  i18n.changeLanguage(language);
  localStorage.setItem("appLanguage", language);
  setDocumentDirection(language);
}

export default i18n;
