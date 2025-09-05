// 用泛型去声明一个链表
// 数据结构，ADT 
// 支持泛型的节点， 可以接受value 类型的穿参
class NodeItem<T> {
    value: T;
    next: NodeItem<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: NodeItem<T> | null = null;
    append(value: T):void {
        const newNodeItem = new NodeItem(value);
        if (!this.head) {
            this.head = newNodeItem;
            return ;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNodeItem
    }
}

const numberList = new LinkedList<number>();

numberList.append(1);
numberList.append(2);
numberList.append(3);

interface User {
    id: number;
    name: string;
}

const userList = new LinkedList<User>();
userList.append({
    id: 1,
    name: "Alice"
})
userList.append({
    id: 2,
    name: "Bob"
})