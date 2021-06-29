import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [commonjs(), babel({ babelHelpers: 'bundled' })],
}
