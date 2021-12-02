// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { i18n } = require("./next-i18next.config");

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer({...defaultConfig, i18n})
}