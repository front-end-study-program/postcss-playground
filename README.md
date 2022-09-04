# postcss-playground

> PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。

## webpack

1. install

   ```bash
   pnpm i postcss postcss-loader -D
   ```

   - postcss 转换插件

   ```bash
   pnpm i autoprefixer postcss-preset-env postcss-custom-selectors postcss-pxtorem -D
   ```

2. used

   ```js
   // postcss.config.js
   module.exports = {
     plugins: [
      require("autoprefixer"), // 增加浏览器前缀
      require('postcss-custom-selectors'), // 自定义 css 选择器
      require('postcss-preset-env') // CSS 的 polyfill
     ],
   };
   // .browserslistrc 配置需要兼容的浏览器和版本
   # Browsers that we support
   last 1 version
   > 1%
   IE 10
   ```

## rollup

## vite
