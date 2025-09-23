// 闭包
// 传统的面向对象 static 
// IIFE 创建闭包的手段
const Singleton = (function() {
  let instance;
  function createInstance() {
    return {
      name: 'MySingleton',
      timestamp: new Date(),
      sayHello() {
        console.log(`Hello from ${this.name}`)
      }
    }
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})()

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1 === obj2); // true