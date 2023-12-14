import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];

i18n
  .use(HttpApi) // used to load data from othe directory
  .use(LanguageDetector) // detects the current language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng, // default language
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;