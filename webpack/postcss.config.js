module.exports = {
  plugins: [
    require('autoprefixer'), // 增加浏览器前缀
    require('postcss-custom-selectors'), // 自定义 css 选择器
    require('postcss-preset-env'), // css 的 polyfill
    require('postcss-pxtorem')({ propList: ['*'] }), // 将 px 转换为 rem，默认只对字体属性进行转换
  ]
}