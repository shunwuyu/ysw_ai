// thenable
function light(color, ms) {
    console.log(color);
    return new Promise(r => setTimeout(r, ms));
}

function loop() {
    light('red', 1000)
        // 控制流程 异步变同步
        .then(() => light('yellow', 3000))
        // 当返回值也是promise的时候，继续thenable
        .then(() => light('green', 2000))
        .then(loop) // 递归
}

loop();

