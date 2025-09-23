const oldTree = {
  type: 'div',
  props: { id: 'root' },
  children: [
    {
      type: 'h1',
      props: { key: 'title' }, children: ['Hello']
    },
    {
      type: 'p',
      props: { key: 'desc' }, children: ['Old Text']
    }
  ]
}

const newTree = {
  type: 'div',
  props: { id: 'root' },
  children: [
    {
      type: 'h1',
      props: { key: 'title' }, children: ['Hello World']
    },
    {
      type: 'span',
      props: { key: 'extra' }, children: ['New Node']
    }
  ]
}

// const patches = [
//   { "type": "text", oldTree, "content": "Hello World" },
//   {type: "remove", oldTree.children[1]},
//   {type: "add", newTree.children[1]}
// ]

function diff(oldNode, newNode, patches = []) {
  // 1. 类型不同 → 替换整个节点
  if (!newNode) {
    patches.push({ type: 'REMOVE', oldNode });
  } else if (!oldNode || oldNode.type !== newNode.type) {
    patches.push({ type: 'REPLACE', oldNode, newNode });
  } else if (typeof oldNode === 'string' && typeof newNode === 'string') {
    // 2. 文本节点
    if (oldNode !== newNode) {
      patches.push({ type: 'TEXT', oldText: oldNode, newText: newNode });
    }
  } else {
    // 3. 属性更新
    const propPatches = [];
    const allProps = { ...oldNode.props, ...newNode.props };
    for (const key in allProps) {
      if (oldNode.props[key] !== newNode.props[key]) {
        propPatches.push({ key, value: newNode.props[key] });
      }
    }
    if (propPatches.length) {
      patches.push({ type: 'PROPS', node: oldNode, props: propPatches });
    }

    // 4. children diff (keyed)
    const oldChildren = oldNode.children || [];
    const newChildren = newNode.children || [];
    const max = Math.max(oldChildren.length, newChildren.length);

    // 建一个 key -> index 映射方便查找
    const oldKeyMap = {};
    oldChildren.forEach((child, i) => {
      if (child.props && child.props.key) {
        oldKeyMap[child.props.key] = i;
      }
    });

    for (let i = 0; i < newChildren.length; i++) {
      const newChild = newChildren[i];
      let oldChild = oldChildren[i];

      // 如果有 key，尝试复用
      const key = newChild.props && newChild.props.key;
      if (key != null && oldKeyMap[key] != null) {
        oldChild = oldChildren[oldKeyMap[key]];
      }
      diff(oldChild, newChild, patches);
    }

    // 删除多余的旧节点
    if (oldChildren.length > newChildren.length) {
      for (let i = newChildren.length; i < oldChildren.length; i++) {
        patches.push({ type: 'REMOVE', oldNode: oldChildren[i] });
      }
    }
  }
  return patches;
} 

console.log(diff(oldTree, newTree));
