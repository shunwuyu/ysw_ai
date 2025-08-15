const target = {
    a: 1
}
const source = {
    // 对象的嵌套
    b: {
        name: 'hxt',
        hobbies: ["篮球", "打瓦"]
    },
    c: 1
}
// 浅拷贝
// Object.assign(target, source);
// 常用的深拷贝
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj);
newObj.b.name = '哈哈';
newObj.c = 2;
console.log(newObj);
console.log(source);