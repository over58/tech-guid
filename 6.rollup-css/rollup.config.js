import css from 'rollup-plugin-css-only' // 提取css
import CleanCSS from 'clean-css'   // 压缩css
import { existsSync, mkdirSync , writeFileSync} from 'fs'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [
    css({
      output(style) {
        // 压缩 css 写入 lib/base-ui.css
        if (!existsSync('lib')) {
          mkdirSync('lib')
        }
        writeFileSync('lib/yc-ui.css', new CleanCSS().minify(style).styles)
      },
    })
  ],
}
