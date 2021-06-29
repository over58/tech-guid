import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [terser()],
}
