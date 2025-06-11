# 原型
- OOP 机制 Object Oriented Programming
- 封装、**继承**、多态 接口

## JS OOP
- 对象字面量 一堆一样的对象创建麻烦
- 类的概念， 没有class 关键字
- 构造函数不能省的
- 赋予函数新的使命， 身兼两职
  类 + 构造函数 

## JS 面向对象更强大， 它是原型式的
- 任何对象 默认指向Object  
- __prototo__ 
  任何对象都有这个私有属性， 对象和构造函数和类之间没什么血缘关系（代孕） 

- JS 本没有类
  只不过用function 大写 来表示类， 
- JS 对象和类，构造函数 没有血缘关系 
  __proto__ 指向构造函数的prototype 对象 
- __proto__ 指向任何对象
- 不指默认是Object 
- 原型对象、 原型链
- 类是大写的函数 
- 实例 new 出来的对象
- 任何函数都有prototype 属性，值就是构造函数的原型对象 
## new的 过程
new -> {}  -> constructor 运行 -> this -> {} -> 完成了构造
-> __proto__ -> constructor.prototype -> Object   原型链
-》 null 终点