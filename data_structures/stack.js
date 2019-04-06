class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this._top = null;
        this.length = 0;
    }
    push(item) {
        const node = new Node(item);
        node.next = this._top;
        this._top = node;
        this.length++;
        return this.length;
    }
    pop() {
        if (this.isEmpty()) return undefined;
        const node = this._top;
        this._top = this._top.next;
        node.next = null;
        this.length--;
        return node.data;
    }
    peek() {
        if (this.isEmpty()) return undefined;
        return this._top.data;
    }
    isEmpty() {
        return this.length === 0;
    }
    enumerate() {
        let output = [];
        let runner = this._top;
        while (runner !== null) {
            output.push(runner.data);
            runner = runner.next;
        }
        return output;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
console.log(stack.enumerate());
console.log(stack.pop());
console.log(stack.enumerate());
console.log(stack.isEmpty());
console.log(stack.peek());
