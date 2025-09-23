# 移动端采用了什么适配方案？
- 不能是px 绝对单位 相对单位
  - rem 兼容性好一些
  - vw 企业中用的最多的方案
- 设计稿是px 750 我们需要把px转换为vw
  插件：postcss-px-to-viewport

- finally 了解多少？
  Promise.prototype.finally 是es2018 引入的API 用于在Promise成功或失败后都执行一次回调，他不会改变原有的状态和值,只做收尾工作。他的返回值往往被忽略，但如果回调抛错误会覆盖原状态。
  - loading 状态处理 相比then, catch 更简洁，语义化
  ```js
  showLoading();
  fetchData()
    .then(render)
    .catch(showError)
    .finally(hideLoading)
  ```

- 什么是polyfill
  Polyfill 就是“兼容补丁”；当老浏览器不支持新特性（Promise, fetch, Array.includes）, 用一段代码去模拟这些功能， 让旧环境也能跑起来，提高兼容性和用户体验。