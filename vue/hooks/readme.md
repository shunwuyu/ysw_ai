# vue 中的hooks  
- 你用的react 是什么的版本的？
    react 19
    react 16.8 划时代的更新 函数式组件， hooks 2019年
    之前 类组件 Component 基类  
    函数组件 子组件+父组件通过props传递数据 无状态组件
    UI 展示 Stateless 简单，性能好 
    函数组件 + useState + useEffect.. hooks 类组件就没有
    必要了

- 类组件 
    和函数组件都有， 各司其职
    - 类组件比较固守于类的格式，繁琐 
    - this 丢失问题 事件处理
    - 生命周期钩子函数 由useEffect 副作用代替
    - 开销大些 函数组件结合memo, useMemo 更好的性能优化

    - Vue 抄袭了React 
        hooks 函数式编程思想


- vue 和 react 相同点和区别
- ahooks 


- hooks 表达总线
    - 什么是hooks
    能够在不编写 class 的情况下，使用 React 的状态（state）和生命周期等特性。
    Hooks 提供了一种更直观、更灵活的方式来组织和复用组件中的逻辑和响应式业务。
    react 内置的hooks useState, useEffect 副作用等，挺好用的。

    - 内置的hooks
        useState, useEffect(副作用)、useMemo,useCallback
        useContext, useReducer useRef 用于创建一个可变的引用对象
        useLayoutEffect 
        useLayoutEffect 是 React Hooks 中的一个函数，它在 DOM 更新后、浏览器绘制前同步执行，适合用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁。
        useImperativeHandle

    - 自定义的hooks
        useTitle,useTodos,useMouse, useRepos 
        响应式业务、响应式场景封装到hooks/目录下， 复用
        UI组件干净
    - ahooks 第三方hooks/vueuse 库 
        useToggle、useRequest（所有的请求 data,loading,error） 我在业务中就经常用