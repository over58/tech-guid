const routerGenerator = require('./plop-template/router/prompt.js')
const fs = require('fs')
const path = require('path')

module.exports = function (plop) {
  plop.setGenerator('router', routerGenerator)

  // 单纯创建空文件夹
  plop.setActionType('mkdir', function (answers, config, plop) {
    const p = path.join(__dirname, config.path)
    return new Promise((resolve, reject) => {
      fs.mkdir(p, {}, function (err) {
        if (err) {
          reject(new Error(config.path + ' fail !'))
        } else {
          resolve(config.path + ' success~')
        }
      })
    })
  })
}
