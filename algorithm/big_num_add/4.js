 const bigNum = 123456789012345678901234567890123456789n
 // BigInt 申明方式 函数申明
 // bigint 简单数据类型， 不是对象， 不是构造函数
 const theNum = BigInt("123456789012345678901234567890123456789")
 console.log(bigNum, theNum, typeof bigNum, typeof 1);
 console.log(bigNum + 1n);