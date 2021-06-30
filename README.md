# rollup一步步学习
## 基础版
- 支持js打包

### 安装依赖
```
yarn add rollup -D
```
### rollup.config.js
```js
module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
}
```

## 压缩
### 安装依赖
```shell
yarn add rollup-plugin-terser --dev
```

### rollup.config.js
```js
import { terser } from 'rollup-plugin-terser'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [terser()],
}

```

## 支持eslint
### 添加依赖
```
yarn add @rollup/plugin-commonjs  @rollup/plugin-eslint @rollup/plugin-node-resolve -D
```
### 说明
- @rollup/plugin-commonjs 
    > A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
- @rollup/plugin-eslint
  > A Rollup plugin to lint entry points and all imported files with ESLint.
- @rollup/plugin-node-resolve 
  > A Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules

  > The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules. Install it…


### rollup.config.js
```js
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve' // 依赖引用插件
import commonjs from '@rollup/plugin-commonjs' // commonjs模块转换ES6插件
import eslint from '@rollup/plugin-eslint' // eslint插件
const getPath = (_path) => path.resolve(__dirname, _path)
import packageJSON from './package.json'

const extensions = ['.js', '.ts', '.tsx']

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
})

// 基础配置
const commonConf = {
  input: getPath('./src/main.js'),
  plugins: [nodeResolve(extensions), commonjs(), esPlugin],
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

```

## 支持ts
### 添加依赖
```shell
yarn add @rollup/plugin-typescript typescript tslib -D
```

rollup.config.js
```js
import ts from '@rollup/plugin-typescript'

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
})

plugins: [
    tsPlugin
]
```

## 添加babel支持
### 安装依赖
```
yarn add @rollup/plugin-babel @babel/preset-env @rollup/plugin-commonjs  -D
```

选择性的安装core-js版本
```  
npm install --save core-js@2    npm install --save core-js@3
yarn add core-js@2              yarn add core-js@3
```
### babel.config.js
```js
module.exports = {
  presets: [['@babel/preset-env', {
    "targets": "> 85%, not dead",
    "useBuiltIns": "usage"
  }]],
}
```
### rollup.config.js
```js
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

```

## 样式处理
### 支持CSS
```shell
yarn add  rollup-plugin-css-only -D
```

### rollup.config.js
```js

import css from 'rollup-plugin-css-only' // 提取css

plugins: [
    css({
      output(style) {
        // 压缩 css 写入 lib/base-ui.css
        if (!existsSync('lib')) {
          mkdirSync('lib')
        }
        writeFileSync('lib/yc-ui.css', style)
      },
    }),
  ],
```
### 压缩CSS
```
yarn add clean-css -D
```

### rollup.config.js
```js
import css from 'rollup-plugin-css-only' // 提取css
import CleanCSS from 'clean-css'   // 压缩css

plugins: [
    css({
      output(style) {
        // 压缩 css 写入 lib/base-ui.css
        if (!existsSync('lib')) {
          mkdirSync('lib')
        }
        writeFileSync('lib/base-ui.css', new CleanCSS().minify(style).styles)
      }
    })
]
```
### 支持postcss（推荐，可以支持预处理器和各种插件）
```
yarn add postcss rollup-plugin-postcss -D

```

### rollup.config.json
```js
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

module.exports = {
  input: './src/main.js',
  output: {
    file: 'lib/demo.js',
    format: 'es',
  },
  plugins: [
    postcss({
      extract: true,
      plugins: [autoprefixer()],
      minimize: true, //压缩
      modules: true, // scoped
    }),
  ],
}
```
### 支持less(在postcss基础上)
```shell
yarn add less -D
```
### 支持.scss and .sass(在postcss基础上)
```shell
yarn add node-sass -D
```
### 支持stylus
```shell
yarn add stylus -D
```

## 基于rollup + vue3 + ts打包一个UI库

### 处理.vue文件
```js
import vuePlugin from 'rollup-plugin-vue'
vuePlugin({
  target: 'browser',
  exclude: ['node_modules/**'],
  include: /\.vue$/,
}),
```

### 处理jsx、tsx
```js
import esbuild from 'rollup-plugin-esbuild' // ts ==> ks
import vueJsx from 'rollup-plugin-vue-jsx-compat' // jsxFactory

plugins: [
  vueJsx(),
  esbuild({
    jsxFactory: 'vueJsxCompat',
  })
]
```

### 处理process等没有的变量
```js
import replace from 'rollup-plugin-replace'

plugins: [
  replace({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
]
```

### devServer
```
import serve from 'rollup-plugin-serve'

plugins: [
  serve({
    open: false,
    openPage: '/site/index.html',
    port: 3000,
    contentBase: '',
  }),
]
```
### 遇到的问题
- rollup-plugin-jsx 有问题，无法正确处理jsx, Fragment无法处理，一些写法也不支持
- 

