# reducer and context 
- useReducer 的核心 
    - 响应式状态管理
    - reducer 纯函数 状态生产 状态改变定规矩
    - initValue
    - dispatch 派发一个action
        {type: '', payload: }
- useContext
    createContext 
    Context.Provider 
    useContext 
- useContext(通信) + useReducer （响应式状态管理）
    跨层级全局-》应用（theme/login/todos/..）状态管理

- 自定义hook
    组件（渲染） + hook(状态)

- hook + useContext 
    全局应用级别响应式状态
- hook + useContext + useReducer
     全局应用级别响应式状态管理