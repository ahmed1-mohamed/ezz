import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import arTranslation from "./locales/ar/translation.json";

const storedLang = localStorage.getItem("appLanguage") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: storedLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export function setLanguage(language) {
  i18n.changeLanguage(language);
  localStorage.setItem("appLanguage", language);
  document.documentElement.dir = i18n.dir(language);
}

setLanguage(storedLang);

export default i18n;
