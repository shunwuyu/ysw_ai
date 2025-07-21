# Array 的高级考点？

- 怎么认识数组？
    - 可遍历的对象
- new Array(5)
    类似于c++, 固定大小的分配 v8 引擎对arr 设计s
    - 灵活地扩展，不限类型，还有hash得特性
    - empty*5 key 没有释放 for key in 不可以迭代
    - new Array(5).fill(undefined) 统一 
- [] 数组字面量
    ['宗馥莉', '宗继昌', '宗继盛', '宗捷莉', ...arr];
- 静态方法
    Array.of(1,2,3) // 已经有了数据
    Array.from() // 转换，（类数组， 填充计算）

