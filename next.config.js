// const { nextI18NextRewrites } = require('next-i18next/rewrites')
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
}

// const localeSubpaths = {}

// module.exports = {
//   rewrites: async () => nextI18NextRewrites(localeSubpaths),
//   publicRuntimeConfig: {
//     localeSubpaths,
//   },
// }