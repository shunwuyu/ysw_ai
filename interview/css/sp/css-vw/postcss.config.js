export default {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 6,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore'],
      minPixelValue: 1, // 1px 不转换
      mediaQuery: false
    }
  }
}