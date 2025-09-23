// 输入是没有树状关系的
// 组织成树状数组
const flatList = [
  { id: 1, parentId: null, name: 'A' },
  { id: 2, parentId: 1, name: 'B' },
  { id: 3, parentId: 1, name: 'C' },
  { id: 4, parentId: 2, name: 'D' },
  { id: 5, parentId: null, name: 'E' },
];
// 借助HashMap  id 查找O(1)  parentId 

function listToTree(list, rootId = null) {
  const tree = [];
  const map = new Map(); // hash 表  id 查找O(1)  parentId 
  list.forEach(item => {
    map.set(item.id, {
      ...item,
      children: []
    })
  })

  list.forEach(item => {
    const node = map.get(item.id);
    if (item.parentId === rootId) {
      // 顶
      tree.push(node);
    } else {
      const parentNode = map.get(item.parentId);
      if (parentNode) {
        parentNode.children.push(node);
      }
    }
  })

  // console.log(map);
  return tree;

}

console.log(listToTree(flatList));