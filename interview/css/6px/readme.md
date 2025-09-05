# 6px 字体大小

- 之前浏览器支持的最小字体12px,现在可以支持更小字体了
- 12px + transform:scale(0.5);

- 1px 像素
    - 来自于移动端
    - 1px 边框看过去有点粗， 手机比较好，像素密度比大 
    - 浏览器不支持小数像素的绘制， 硬件
    - 伪元素
        方便，content 必须
        定位 专职去做下边框 
        transform: scaleY(0.5)
        transform-origin center bottom
