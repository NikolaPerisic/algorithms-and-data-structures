/*
Doubly Linked List
*/

const head = Symbol("head");
const tail = Symbol("tail");

// Node Constructor
class DLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Linked List
class DoublyLinkedList {
    constructor() {
        this[head] = null;
        this[tail] = null;
    }
    // Add new Node
    add(data) {
        const newNode = new DLLNode(data);
        if (this[head] === null) {
            this[head] = newNode;
        } else {
            this[tail].next = newNode;
            newNode.prev = this[tail];
        }
        this[tail] = newNode;
    }
    // Insert Node before index
    insertBefore(data, index) {
        const newNode = new DLLNode(data);
        if (this[head] === null) {
            throw new RangeError(`Index ${index} does not exist`);
        }
        if (index === 0) {
            newNode.next = this[head];
            this[head].prev = newNode;
        } else {
            let currentNode = this[head];
            let i = 0;
            while (currentNode.next !== null && i < index) {
                currentNode = currentNode.next;
                i++;
            }
            if (i < index) {
                throw new RangeError(`Index ${index} does not exist`);
            }
            currentNode.prev.next = newNode;
            newNode.prev = currentNode.prev;

            newNode.next = currentNode;
            currentNode.prev = newNode;
        }
    }
    // Insert Node after index
    insertAfter(data, index) {
        const newNode = new DLLNode(data);
        if (this[head] === null) {
            throw new RangeError(`Index ${index} does not exist`);
        }
        let currentNode = this[head];
        let i = 0;
        while (currentNode !== null && i < index) {
            currentNode = currentNode.next;
            i++;
        }
        if (this[tail] === currentNode) {
            this[tail] = newNode;
        } else {
            currentNode.next.prev = newNode;
            newNode.next = currentNode.next;
        }
        newNode.prev = currentNode;
        currentNode.next = newNode;
    }
    // get value at given index
    get(index) {
        if (index < 0) {
            throw new RangeError(`Invalid index ${index}`);
        }
        let currentNode = this[head];
        let i = 0;
        while (currentNode !== null && i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode !== null ? currentNode.data : undefined;
    }
    // Get the index of value in the list
    indexOf(data) {
        let currentNode = this[head];
        let index = 0;
        while (currentNode !== null) {
            if (currentNode.data === data) return index;
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }
    // Delete the node
    deleteNode(index) {
        if (this[head] === null || index < 0) {
            throw new RangeError(`Invalid index ${index}`);
        }
        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;

            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].prev = null;
            }
            return data;
        }
        let currentNode = this[head];
        let i = 0;
        while (currentNode !== null && i < index) {
            currentNode = currentNode.next;
            i++;
        }
        if (currentNode !== null) {
            currentNode.prev.next = currentNode.next;

            if (this[tail] === currentNode) {
                this[tail] = currentNode.prev;
            } else {
                currentNode.next.prev = currentNode.prev;
            }
            return currentNode.data;
        }
        throw new RangeError(`Invalid index ${index}`);
    }
    // clear all items
    clearAll() {
        this[head] = null;
        this[tail] = null;
    }
    // get the size of the list
    size() {
        if (this[head] === null) return 0;
        let currentNode = this[head];
        let counter = 0;
        while (currentNode !== null) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }

    [Symbol.iterator]() {
        return this.values();
    }
    // generator function for step by step forwards traversal
    *values() {
        let currentNode = this[head];
        while (currentNode !== null) {
            yield currentNode.data;
            currentNode = currentNode.next;
        }
    }
    // generator function for step by step backwards traversal
    *reverse() {
        let currentNode = this[tail];
        while (currentNode !== null) {
            yield currentNode.data;
            currentNode = currentNode.prev;
        }
    }
    // Print List elements
    toString() {
        return [...this].toString();
    }
}

const list = new DoublyLinkedList();
list.add("Bob");
list.add("Tom");
list.add("23");
list.add("89");
console.log(list.toString());
list.insertBefore("pie", 1);
console.log(list.toString());
list.insertAfter("Mira", 3);
console.log(list.toString());
console.log(list.get(2));
console.log(list.indexOf("Mira"));
list.deleteNode(0);
console.log(list.toString());
console.log(list.size());
console.log(list.toString());
