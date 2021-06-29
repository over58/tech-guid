import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [
    // css和postcss不能共存
    // css({
    //   output(style) {
    //     // 压缩 css 写入 lib/base-ui.css
    //     if (!existsSync('lib')) {
    //       mkdirSync('lib')
    //     }
    //     // writeFileSync('lib/yc-ui.css', new CleanCSS().minify(style).styles)
    //     writeFileSync('lib/yc-ui.css', style)
    //   },
    // }),
    postcss({
      extract: true,
      plugins: [autoprefixer()],
      minimize: true,
    }),
  ],
}
