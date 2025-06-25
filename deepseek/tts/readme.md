# tts 智能语音

## 智能前端  AI用户体验 
- webllm 
  AIGC api remote call 
- tts 语音 
  网易音乐 
- 用户体验 
  音乐不要自动播放，社死
  用户决定要不要播放 

## 如果 不能做DOM 编程， react 里面怎么播放音乐？
- 原生的js DOM API 低效  document.querySelector 不用 
- audio 播放？ 

## 路径
- 相对路径 
  ./ 同一级别
  ../ 上一级
  ./demo/ 走
- 绝对路径
  物理路径 C:/
  网站根路径 /   index.html
- http://localhost:5173/sounds/snare.wav
  - npm run dev 
  - 本地服务器 http://127.0.0.1:5173
  端口背后对应的是不同服务
  - index.html 首页
  - public 静态资源的 
    约定所有的资源可以直接访问
  
## react 事件机制
  - 不可以用addEventListener DOM Event 事件
  - onClick react事件， 和html 原生支持的事件有点像

## 小红书的event 事件机制  JavaScript 高级程序设计 1000+
- 多种事件机制
  - DOM0 事件
    onclick  html 属性 缺点是耦合了。 不推荐
  - DOM2 事件
    addEventListener  html 和JS 事件上分离
  - react 
    采用了DOM 0 的方式，有利于组件html的表达  好读
    @click  react 优于vue  
    API层面上看过去是这样的，其实底层还有天地 

## useRef
- 可以帮助我们在react 中拿到DOM对象
  - useRef(null) 空对象
  - current 属性 null 
  - jsx ref={ref}  DOM 绑定
  - ref.current 引用的DOM对象 