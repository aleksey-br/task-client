const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_variables.scss"; 
                         @import "@/styles/_media-mixins.scss";`,
      },
    },
  },
});
