const  path = require('path') 
const  commonjs = require('@rollup/plugin-commonjs') 
const  ts = require('@rollup/plugin-typescript') 
const  { nodeResolve } = require('@rollup/plugin-node-resolve')// 依赖引用插件 
const  { babel } = require('@rollup/plugin-babel') 
const  eslint = require('@rollup/plugin-eslint')// eslint插件 
// const  packageJSON = require('./package.json') 
const  postcss = require('rollup-plugin-postcss') 
const  autoprefixer = require('autoprefixer') 
const  vuePlugin = require('rollup-plugin-vue') 
const  { OUTPUT_DIR, COMPONENTS_DIR } = require('./config.js')


const getPath = (_path) => path.resolve(__dirname, _path)
const extensions = ['.js', '.ts', '.tsx', '.json', '.vue']
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

// ts
const tsPlugin = ts({
  tsconfig: getPath('../tsconfig.json'), // 导入本地ts配置
})

const getComponentRollupConfig =(componentName) => {
    const componentDir = path.resolve(__dirname, OUTPUT_DIR)
    const componentPath = `${COMPONENTS_DIR}/${componentName}/index.tsx`
    const inputConfig = {
      input: componentPath,
      plugins: [
        [
          nodeResolve({extensions}),
          commonjs(),
          vuePlugin({
            target: 'browser',
            exclude: ['node_modules/**'],
            // include: ['src/**/*.vue'],
          }),
          tsPlugin,
          esPlugin,
          babel({ babelHelpers: 'bundled' }),
          postcss({
            extract: true,
            plugins: [autoprefixer()],
            minimize: true, //压缩
            modules: true, // scoped
          }),
        ],
      ],
      external: ['vue'],
    }

    const outputConfig = {
      file: `${componentDir}/${componentName}/index.js`,
      format: 'umd',
      name: componentName,
    }

    return {
      inputConfig,
      outputConfig
    }
}

module.exports = {
  getComponentRollupConfig
} 