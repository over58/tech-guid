// 写一个异步loader
const loaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    const callback = this.async()

    setTimeout(() => {
        source+= options.message
        callback(null, source)
    }, 100);

}
