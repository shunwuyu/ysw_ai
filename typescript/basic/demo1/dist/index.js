"use strict";
const message = "Hello TypeScript";
console.log(message);
const count = 10;
const title = "Hello TS";
const isDone = false;
// const list: number[] = [1, "2", 3];
// 元组 Tuple
const tuple = ["age", 25];
// 枚举 Enum
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Fail"] = 2] = "Fail";
})(Status || (Status = {}));
const s = Status.Success;
console.log(s);
const user = { name: "Tom", age: 22 };
