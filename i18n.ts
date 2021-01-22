const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

export default new NextI18Next({
  otherLanguages: ['pt-BR', 'en', 'es'],
  defaultLanguage: 'pt-BR',
  localeSubpaths,
  browserLanguageDetection: true,
  localePath: path.resolve('./public/static/locales')
})
