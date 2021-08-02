class DemoWebpackPlugin {
    constructor () {
        console.log('plugin init')
    }
    apply (compiler) {
        // 一个新的编译(compilation)创建之后（同步）
        // compilation代表每一次执行打包，独立的编译
        compiler.hooks.compile.tap('DemoWebpackPlugin', compilation => {
            console.log(compilation)
        })

        compiler.hooks.emit.tapAsync('DemoWebpackPlugin', (compilation, callback) => {
            console.log(compilation.assets)
            compilation.assets['index.md'] = {
              source: function () {
                return 'this is a demo for plugin'
              },
              // 文件尺寸
              size: function () {
                return 25
              },
            }


            callback()
        })
    }
}

module.exports = DemoWebpackPlugin
