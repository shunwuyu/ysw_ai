# var_let_const 
## JS代码的执行机制
- 有一段代码 
  硬盘读入内存 
- V8引擎
  chrome 心脏， 负责解析和执行代码
- 编译阶段
  代码执行环境 
  currentVariable{
    showName:''
    myName
  }
  - 作用域  变量查找的规则
    全局 
    函数 
    块级
    - 作用域链
      变量查找的路径 当前作用域-> 父作用域 。。。。-> 全局作用域
    嵌套关系
    冒泡查找
- 变量提升 hoisting 
  - 有作用域
  - var 提升变量的申明  undefined 
    赋值是在执行阶段做
    函数提升的是函数的定义  

  - let 就不可以 ？