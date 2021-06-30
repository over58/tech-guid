import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve' // 依赖引用插件
import { babel } from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint' // eslint插件
import packageJSON from '../package.json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import esbuild from 'rollup-plugin-esbuild'
import vueJsx from 'rollup-plugin-vue-jsx-compat'
import vuePlugin from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import serve from 'rollup-plugin-serve'

const getPath = (_path) => path.resolve(__dirname, _path)
const extensions = ['.js', '.ts', '.tsx']
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

const commonConf = {
  input: getPath('../site/main.ts'),
  plugins: [
    commonjs(),
    nodeResolve(extensions),
    postcss({
      extract: true,
      plugins: [autoprefixer()],
      minimize: true, //压缩
      modules: false // scoped
    }),
    vueJsx(),
    esbuild({
      jsxFactory: 'vueJsxCompat',
    }),
    vuePlugin({
      target: 'browser',
      exclude: ['node_modules/**'],
      include: /\.vue$/
    }),
    esPlugin,
    babel({ babelHelpers: 'bundled', exclude: ['node_modules/**/*'] }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    serve({
      open: false,
      openPage: '/site/index.html',
      port: 3000,
      contentBase: '',
    }),
  ],
}

// 需要导出的模块类型
const outputMap = [
  {
    file: "lib/site/index.es.js", // es6模块
    format: 'es',
    sourcemap: true,
  },
]

const buildConf = (options) => Object.assign({}, commonConf, options)

export default outputMap.map((output) => {
  return buildConf({
    output: {
      name: packageJSON.name,
      ...output,
    },
  })
})
