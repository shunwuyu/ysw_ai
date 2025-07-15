# useLayoutEffect

- useEffect
  副作用 
  - 当渲染完成之后
  - 更新
  - 移除

- useLayoutEffect
  副作用
  dom更新之后
  阻塞页面的渲染
  在页面渲染之前

- 能解决什么问题
  防“闪烁” 用户体验 bug 
  类似“同步”拿到响应式之后元素的样式