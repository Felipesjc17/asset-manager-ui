module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Note: These options are applied to `sass-loader` v8.
        // For sass-loader v9, the configuration might differ.
        additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  }
}
