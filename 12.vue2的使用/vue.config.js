const path =  require('path')
module.exports = {
  configureWebpack(config) {
      config.resolve.alias = {
          vue$: path.resolve(__dirname, './vue.js')
      }
  }
}