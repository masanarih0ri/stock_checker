export default {
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  loaders: {
    ts: {
      silent: true
    },
    tsx: {
      silent: true
    }
  }
}
