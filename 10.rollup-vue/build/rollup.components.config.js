const path =  require('path')
const commonjs =  require('@rollup/plugin-commonjs')
const { nodeResolve } =  require('@rollup/plugin-node-resolve')// 依赖引用插件
const { babel } =  require('@rollup/plugin-babel')
const postcss =  require('rollup-plugin-postcss')
const autoprefixer =  require('autoprefixer')
const vuePlugin =  require('rollup-plugin-vue')
const esbuild =  require('rollup-plugin-esbuild')
const vueJsx =  require('rollup-plugin-vue-jsx-compat')
const replace =  require('rollup-plugin-replace')
const { OUTPUT_DIR, COMPONENTS_DIR } = require('./config')
const eslint = require('@rollup/plugin-eslint')

const extensions = ['.js', '.ts', '.tsx']
// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})
const getComponentRollupConfig = (componentName) => {
  const componentDir = path.resolve(__dirname, OUTPUT_DIR)
  const componentPath = `${COMPONENTS_DIR}/${componentName}/index.tsx`
  const inputConfig = {
    input: componentPath,
    plugins: [
      commonjs(),
      nodeResolve(extensions),
      vueJsx(),
      esbuild({
        jsxFactory: 'vueJsxCompat',
      }),
      vuePlugin({
        target: 'browser',
        exclude: ['node_modules/**'],
        include: /\.vue$/,
      }),
      postcss({
        extract: true,
        plugins: [autoprefixer()],
        minimize: true, //压缩
        modules: false, // scoped
      }),
      esPlugin,
      babel({ babelHelpers: 'bundled', exclude: ['node_modules/**/*'] }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
    external: ['vue'],
  }

  const outputConfig = {
    file: `${componentDir}/${componentName}/index.js`,
    format: 'umd',
    name: componentName,
    sourcemap: true,
  }

  return {
    inputConfig,
    outputConfig,
  }
}

module.exports = {
  getComponentRollupConfig,
}
