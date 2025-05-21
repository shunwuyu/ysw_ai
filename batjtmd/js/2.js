// 数组对象
const arr = ['1', '2', '3'];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);
// 如何区分Object 的这些类型？
// [object Date]
// [object Array]
console.log(typeof Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

// 会在MDN 文档看一些资料
function getType(value) {   
    // string api 的选择 
    // split + substring 
    return Object.prototype.toString.call(arr).slice(8, -1);
}