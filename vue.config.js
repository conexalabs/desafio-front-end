module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/_variables.scss"'
      }
    },
    sourceMap: false
  }
}
