// 一堆任务 
// 顺序 results []
// deps ? 
async function runTasks(tasks) {
  // 便于查找task id 找到task  deps, HashMap?
  // 数组作为实例化， 第一项key, 第二项value
  // O(1)
  const taskMap = new Map(tasks.map(t => [t.id, t]));
  // console.log(taskMap);
  const indegress = new Map(tasks.map(t => [t.id, t.deps.length]));
  const result  = {};
  let ready = tasks.filter(t => t.deps.length === 0).map(t => t.id);
  // console.log(ready, '////');

  // 某个id任务 的执行和执行完后 依赖它的人物的deps.length -1 
  async function run(id) {
    const task = taskMap.get(id); // 获取任务
    const output = await task.run();
    result[id] = output;

    for (const [tid, t] of taskMap) {
      if (t.deps.includes(id)) {
        indegress.set(tid, indegress.get(tid) - 1);
        if (indegress.get(tid) === 0) {
          ready.push(tid);
        }
      }
    }
  }

  while(ready.length > 0) {
    // 取出当前可以执行的任务 
    // 浅拷贝 
    const currentBatch = [...ready];//ready ? 动态？引用式拷贝 
    ready = [];
    await Promise.all(currentBatch.map(run));
  }
  return result;
}

const tasks = [
  {
    id: 'A',
    run: () => new Promise(
      res => setTimeout(() => res('A done'), 5000))
    , 
    deps: []
  },
  {
    id: 'B',
    run: () => Promise.resolve('B done'), 
    deps: ['A']
  },
  {
    id: 'C',
    run: () => Promise.resolve('B done'), 
    deps: ['A']
  },
  {
    id: 'D',
    run: () => Promise.resolve('D done'), 
    deps: ['B', 'C']
  },
]
runTasks(tasks).then(res => console.log(res));