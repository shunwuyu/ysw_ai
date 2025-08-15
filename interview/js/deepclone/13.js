const target = {
    field1: 1,
    field2: undefined,
    field3: 'hxt',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}
// 递归 + 拷贝
// 对数组支持不好
// console.log(JSON.parse(JSON.stringify(target)));
function clone(source) {
    if (typeof source === 'object') {
        let cloneTarget = {}; // 分配新空间
        for (const key in source) { // 遍历
            cloneTarget[key] = clone(source[key]);
        }
        return cloneTarget;

    } else {
        return source;
    }
}
let obj = clone(target);
obj.field4.child= 'objchild';
console.log(obj, target);