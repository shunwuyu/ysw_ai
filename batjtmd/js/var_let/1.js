"use strict"; // 启用严格模式
var b = 10;
(function b() {
  b = 20;// 不生效的
  console.log(b);
})()