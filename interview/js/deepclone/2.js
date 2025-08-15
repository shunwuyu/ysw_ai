const target = {
    a: 1,
    b: 2
}
const source = {
    b: 3,
    c: 4
}
// 后来居上
Object.assign(target, source);
console.log(target);