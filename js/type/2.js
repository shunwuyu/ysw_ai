console.log(0/0);
// 平方根 NaN
console.log(Math.sqrt(-1)); // js 内置的Math 对象
console.log(parseInt("123"), parseInt("a123"), parseInt("123a"))
console.log(Number(undefined)); // NaN
console.log(NaN === NaN);// false Not a Number 的方式有很多种
console.log(isNaN(NaN), isNaN(0/0)); // true
console.log(typeof NaN) 