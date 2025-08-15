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
Object.assign(target, source);
target.b.name = "小红";
target.b.hobbies.push("画画");
target.c = 2;

console.log(source.b.name, source.b.hobbies, source.c);