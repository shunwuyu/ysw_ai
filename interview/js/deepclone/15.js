let obj = {a:1,b:2};
// 太常用，大型语言都内置的，[] {}
// HashMap 字典 O（1）  key:value
const target = new Map();// 实例化es6 新的数据结构 强
target.set('c', 3);
console.log(target.get('c'));
target.set(obj, 4);// 和JSON 不一样的地方 对象做key
console.log(target.get(obj));
obj = null
console.log(target.get(obj));


let obj2 = {name: '释永信'}
const target2  = new WeakMap(); // Weak 弱的，
target2.set(obj2, 'code 秘密花园');
obj2 = null; // 内存垃圾的回收
console.log(target2.get(obj2));