import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import ts from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve' // 依赖引用插件
import { babel } from '@rollup/plugin-babel'
import eslint from '@rollup/plugin-eslint' // eslint插件
import packageJSON from '../package.json'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import vuePlugin from 'rollup-plugin-vue'

const getPath = (_path) => path.resolve(__dirname, _path)
const extensions = ['.js', '.ts', '.tsx']
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

// ts
const tsPlugin = ts({
  tsconfig: getPath('../tsconfig.json'), // 导入本地ts配置
})

const commonConf = {
  input: getPath('./src/components/index.ts'),
  plugins: [
    nodeResolve(extensions),
    commonjs(),
    vuePlugin({
      target: 'browser',
      exclude: ["node_modules/**"],
      include: ["src/**"]
    }),
    esPlugin,
    tsPlugin,
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: true,
      plugins: [autoprefixer()],
      minimize: true, //压缩
      modules: true, // scoped
    }),
  ],
}

// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
    sourcemap: true,
  },
  {
    file: packageJSON.module, // es6模块
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