# position 

教科书的表达

- 五种属性值 准确，简洁
    - static 默认值， 不定位，回到文档流。
        让之前定位的元素，回到文档流，取消定位
    - relative 相对自身原位置偏移，不脱离文档流。

    - absolute 相对最近的非static 祖先定位
        如果没有，那么相对body 定位
    - fixed 相对于视窗定位
    - sticky 粘性定位，是一种css定位方式，它让元素在
    滚动到特定阀值前表现得像相对定位，到达阀值后固定在视口
    中，实现类似吸顶或吸附的效果。

- 业务场景
    - 结合relative + absolute 消息提醒，在右上角。
    - absolute + transform 水平垂直居中 模态框
    - fixed 回到顶部 聊天客服图标
    - sticky 粘连导航 不管页面多长，导航在超出阀值后，一直都在。
        table 表头粘连，距离其最近的具有滚动机制的祖先容器的
        和IntersectionObserver 有点像

- 底层
    - 定位参照系
    absolute 最近position !== static 的祖先 ｜｜ body 
    fixed 视窗 ？ bug
    sticky 依赖滚动容器
    - 独立图层渲染
    absolute ?  + ? 

- 适当使用transform:translate3d(0,0,0);
    GPU硬件加速，有利于css 页面性能优化
    但也不能乱用，过多的图层会增加内存和管理开销。
    比如，登录弹窗，transform/opacity动画

    will-change: 可以触发独立图层

- position:fixed 如果在 transform: translateZ(0)下面，会失效
    transform会有一个新的包含块 fixed不再相对于视口定位，而是相对于这个transform容器。

- 打麻将 每道题都惊喜 刺激
    面试是当面展示自己，可以准备的

## position 回答技巧
先干净利落回答五种特性，再举出应用场景，提底层原理，图层和fixed 失效亮点。

- 页面的渲染过程 
- intersectionObserver 
- 重绘重排