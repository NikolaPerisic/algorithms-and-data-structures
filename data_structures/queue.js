class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    add(item) {
        const node = new Node(item);
        if (this._tail !== null) {
            this._tail.next = node;
        }
        this._tail = node;
        if (this._head === null) {
            this._head = this._tail;
        }
        this.length++;
        return node.data;
    }
    remove() {
        if (this.isEmpty()) throw new Error("Empty Queue");
        const item = this._head.data;
        this._head = this._head.next;
        if (this._head === null) {
            this._tail = null;
        }
        this.length--;
        return item;
    }
    peek() {
        if (this._head === null) return undefined;
        return this._head.data;
    }
    isEmpty() {
        return this.length === 0;
    }
    enumerate() {
        let node = this._head;
        let arr = [];
        while (node !== null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.add(45);
queue.add(68);
queue.add(42);
queue.add(98);
queue.add(34);
queue.add(55);
console.log(queue.enumerate());
queue.remove();
console.log(queue.enumerate());
console.log(queue.peek());
console.log(queue);
