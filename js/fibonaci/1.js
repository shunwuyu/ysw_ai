// 递归
// 相似的问题
// 自顶向下的思考 问题的终点
// 退出条件
// 重复计算 
// 数状结构 
  //            f(10)
  //     f(9)        f(8)
  //  f(8)  f(7)   f(7)  f(6)
  //          ...
  //       f(0) f(1)
           

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(1000))