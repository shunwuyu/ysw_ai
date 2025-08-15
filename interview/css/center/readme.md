# 居中
研究对手
- 听清什么居中
    - 水平垂直
- 方式不是关键，区别和优劣
    - 水平居中 text-align
    - 单行文本垂直居中 line-height = height padding, 
    - 固定宽高块级盒子水平垂直居中 absolute + margin 负值
        缺点需要知道盒子宽高
        absolute + margin auto (重要)
        absolute + calc （css calc 计算函数） 缺点是性能差，很少用


    - 不固定宽高块级盒子水平垂直居中
        absolute + transform 
        line-height + vertical-align 
        方法三：writing-mode