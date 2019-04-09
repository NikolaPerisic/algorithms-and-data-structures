/*
Sorted Stack data structure (list)
Description: The main difference between stack and sorted stack is that the items are
sorted as they are being pushed. Push operation results in O(N) time complexity and as
a result the smallest value item is always on top of the stack.
*/

class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class SortedStack {
    constructor() {
        this._top = null;
        this.len = 0;
    }
    push(item) {
        const node = new Node(item);
        if (this._top === null) {
            this._top = node;
            this.len++;
            return this.len;
        } else if (this._top.next === null) {
            if (node.data <= this._top.data) {
                node.next = this._top;
                this._top = node;
                this.len++;
                return this.len;
            } else {
                this._top.next = node;
                this.len++;
                return this.len;
            }
        } else {
            if (node.data <= this._top.data) {
                node.next = this._top;
                this._top = node;
                this.len++;
                return this.len;
            }
            let current = this._top;
            let runner = this._top.next;
            while (node.data > runner.data && runner.next !== null) {
                current = current.next;
                runner = runner.next;
            }
            if (node.data > runner.data) {
                runner.next = node;
            } else {
                current.next = node;
                node.next = runner;
            }
        }
        this.len++;
        return this.len;
    }
    pop() {
        if (this.isEmpty()) throw new Error("Empty Stack");
        const node = this._top;
        this._top = this._top.next;
        node.next = null;
        this.len--;
        return node.data;
    }
    peek() {
        if (this.isEmpty()) return undefined;
        return this._top.data;
    }
    isEmpty() {
        return this.len === 0;
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

let stack = new SortedStack();
stack.push(98);
stack.push(22);
stack.push(32);
stack.push(45);
stack.push(18);
stack.push(71);
stack.push(66);
console.log(stack.enumerate());
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack.enumerate());
