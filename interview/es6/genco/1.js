// 生成器函数 
// async 更好理解
// 函数内部有异步任务，可以控制执行流程
function* idGenerator() {
    let id = 1;
    while(id < 4) {
        yield id++;
    }
}
// es8 async/await es6 * + yield  暂停

const gen = idGenerator();
// 迭代器
console.log(gen.next().value);
console.log(gen.next().value, gen.next().done);
console.log(gen.next().value, gen.next().done);
console.log(gen.next().done);