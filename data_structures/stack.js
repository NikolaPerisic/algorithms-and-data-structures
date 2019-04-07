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
        this.min = [];
        this.index = this.min.length;
    }
    push(item) {
        const node = new Node(item);
        node.next = this._top;
        this._top = node;
        this.length++;
        if (this.min.length === 0) {
            this.min.push(this._top.data);
            this.index++;
        }
        if (this._top.data < this.min[this.index - 1]) {
            this.min.push(this._top.data);
            this.index++;
        }
        return this.length;
    }
    pop() {
        if (this.isEmpty()) throw new Error("Empty Stack");
        const node = this._top;
        if (node.data === this.min[this.index - 1]) {
            this.min.pop();
            this.index--;
        }
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
    minVal() {
        return this.min[this.index - 1];
    }
}

let stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(3);
stack.push(7);
console.log(stack.minVal());
console.log(stack.enumerate());
stack.pop();
stack.pop();
console.log(stack.minVal());
console.log(stack.enumerate());
