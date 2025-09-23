用 useRef 保存回调，避免闭包捕获旧值。 callback 闭包了
闭包陷阱使用useRef 可以搞定
useEffect 单独监听 callback，只更新引用，不重启定时器。
另一个 useEffect 管理定时器，依赖 delay。 暂停定时器 delay = null
delay 变化时或组件卸载时自动清除旧定时器，防止内存泄漏。
支持传 null 暂停定时器，实现灵活控制。
分离依赖，逻辑清晰，避免重复创建。
封装良好，可复用，是处理副作用的优秀实践。