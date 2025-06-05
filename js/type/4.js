// 枚举类型
const STATUS = {
    // 常量
    READY: Symbol('ready'),
    RUNNING: Symbol('running'),
    DONE: Symbol('done'),
}

let state = STATUS.READY;
if (state === STATUS.READY) {
    console.log('ready');
}
