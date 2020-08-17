module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "./src/style.scss";
        `
      }
    }
  }
};
