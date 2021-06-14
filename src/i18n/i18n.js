import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nkeysFR from "./i18nkeysFR.json";

console.log("i18nkeysFR", i18nkeysFR)

const resources = {
  fr: {
    translation: i18nkeysFR
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;