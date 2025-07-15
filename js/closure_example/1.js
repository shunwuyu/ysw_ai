function CreateCounter(num) {
  // 对外的接口
  // 对内的私有 
  this.num = num; //public  
  // 私有变量 private 
  let count = 0;
  return {
    num: num,
    increment: () => {
      count++
    },
    decrement: () => {
      count--
    },
    getCount: () => {
      console.log('count 被访问了')
      return count;
    }
  }
}

// let obj = new CreateCounter(1)
// console.log(obj.num);
const counter = CreateCounter(1);
console.log(counter.num);
// console.log(counter.count);
// 闭包延长了变量的生命周期
// 不直接操作它
counter.increment();
console.log(counter.getCount())