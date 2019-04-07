class SetOfStacks {
    constructor(threshold = 3) {
        this.arrSet = [];
        this.threshold = threshold;
        this.current = 0;
    }
    push(item) {
        if (this.arrSet.length === 0) {
            this.arrSet.push([item]);
        } else if (this.arrSet[this.current].length === this.threshold) {
            this.current++;
            this.arrSet.push([item]);
        } else {
            this.arrSet[this.current].push(item);
            return this.arrSet;
        }
    }
    pop() {
        if (this.arrSet.length === 0) {
            throw new Error("Empty Stack");
        }
        if (this.arrSet[this.current].length === 1) {
            this.arrSet.pop();
            this.current--;
        } else {
            this.arrSet[this.current].pop();
        }
        return this.arrSet[this.current].length;
    }
    peek() {
        return this.arrSet[this.current][this.arrSet[this.current].length - 1];
    }
    isEmpty() {
        return this.arrSet.length === 0;
    }
    show() {
        return this.arrSet;
    }
}

let mystack = new SetOfStacks(4);
mystack.push(1);
mystack.push(3);
mystack.push(4);
mystack.push(7);
mystack.push(8);
mystack.push(9);
mystack.push(11);
console.log(mystack.show());
mystack.pop();
console.log(mystack.show());
mystack.pop();
console.log(mystack.show());
mystack.pop();
console.log(mystack.show());
mystack.pop();
console.log(mystack.show());
console.log(mystack.peek());
