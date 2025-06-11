// 没有class 的js 如何在苦苦追求 OOP
// 首字母大写 约定 1. 类的概念
// 2. 构造函数 
function Person(name, age) {
  // this 指向当前实例化的对象
  this.name = name;
  this.age = age;
}
// 函数对象  原型对象 
// 类的方法
Person.prototype = {
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
// new 一下 实例化对象 
// new  运行构造函数
let hu = new Person('吉他胡', 18)
hu.sayHello()
// 原型对象 
console.log(hu.__proto__.__proto__) 
let o = {a: 1};
console.log(o.__proto__);
console.log(o.toString());
// console.log(new Person('小公主', 18))