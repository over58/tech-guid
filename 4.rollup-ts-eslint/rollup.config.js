import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve' // 依赖引用插件
import eslint from '@rollup/plugin-eslint' // eslint插件
import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换ES6插件
const getPath = (_path) => path.resolve(__dirname, _path)
import packageJSON from './package.json'
import ts from '@rollup/plugin-typescript'

const extensions = ['.js', '.ts', '.tsx']

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
})

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

// 基础配置
const commonConf = {
  input: getPath('./src/main.ts'),
  plugins: [nodeResolve(extensions), commonjs(), esPlugin, tsPlugin],
}
// 需要导出的模块类型
const outputMap = [
  {
    file: packageJSON.main, // 通用模块
    format: 'umd',
  },
  {
    file: packageJSON.module, // es6模块
    format: 'es',
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
