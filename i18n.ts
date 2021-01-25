const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

const NextI18n = new NextI18Next({
  otherLanguages: ["pt-BR", "en", "es"],
  defaultLanguage: "pt-BR",
  localeSubpaths,
  browserLanguageDetection: true,
  localePath: path.resolve("./public/static/locales"),
});

export const withTranslation = NextI18n.withTranslation;

export const i18n = NextI18n.i18n;

export default NextI18n;
