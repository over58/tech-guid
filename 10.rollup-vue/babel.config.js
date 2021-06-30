module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 55%, not dead',
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
