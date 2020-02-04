// globaly register dependencies
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
     @import "./node_modules/bootstrap/scss/_functions.scss";
     @import "@/assets/styles/_variables.scss";
     @import "./node_modules/bootstrap/scss/_mixins.scss";
    `
      }
    }
  }
}
