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
            this[head] = newNode;
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
list.add(4);
list.add(56);
list.add(34);
list.add(7);
list.add(34);
console.log(list.toString());
list.insertBefore(29, 1);
console.log(list.toString());
list.insertAfter(91, 3);
console.log(list.toString());
console.log(list.get(2));
console.log(list.indexOf(29));
list.deleteNode(0);
console.log(list.toString());
console.log(list.size());
console.log(list.toString());

// function to remove duplicates from the list
function removeDups(list) {
    console.log("===== function to remove duplicates=====");
    let mySet = new Set();
    let runner = list[head];
    while (runner !== null) {
        if (!mySet.has(runner.data)) {
            mySet.add(runner.data);
        } else {
            let index = list.indexOf(runner.data);
            list.deleteNode(index);
        }
        runner = runner.next;
    }
    return list;
}
removeDups(list);
console.log(list.toString());

//function to return Kth to last element

function kthToLast(list, k) {
    console.log("===== function to return kth to last=====");
    let kth = list.size() - k;
    return list.get(kth);
}
console.log(kthToLast(list, 3));

// Partition function, all nodes less than x come before nodes greater or equal to x

function partition(list, x) {
    console.log("===== partition function=====");
    let newList = new DoublyLinkedList();
    newList.add(x);
    let runner = list[head];
    while (runner !== null) {
        if (runner.data < x) {
            let ind = newList.indexOf(x);
            newList.insertBefore(runner.data, ind);
        } else {
            let ind = newList.indexOf(x);
            newList.insertAfter(runner.data, ind);
        }
        runner = runner.next;
    }
    newList.deleteNode(newList.indexOf(x));
    list[head] = newList[head];
    return list;
}

// partition list func call
console.log(list.toString());
partition(list, 34);
console.log(list.toString());

/*
Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2) .That is,617 + 295. Output:2 -> 1 -> 9.That is,912.
*/
console.log("===== Sum lists=====");
const list1 = new DoublyLinkedList();
const list2 = new DoublyLinkedList();
list1.add(1);
list1.add(2);
list1.add(3);
list1.add(4);

list2.add(5);
list2.add(6);
list2.add(7);

console.log(list1.toString());
console.log(list2.toString());

function sumLists(list1, list2) {
    const listSum = new DoublyLinkedList();
    let runner1 = list1[head],
        runner2 = list2[head];
    let rem = 0,
        n = 1,
        total = 0,
        sum = 0;
    while (runner1 !== null || runner2 !== null) {
        let num1, num2;
        runner1 !== null ? (num1 = runner1.data) : (num1 = 0);
        runner2 !== null ? (num2 = runner2.data) : (num2 = 0);
        total += (num1 + num2) * n;
        if (num1 + num2 + rem > 9) {
            sum = (num1 + num2 + rem) % 10;
            listSum.add(sum);
            rem = 1;
        } else {
            sum = num1 + num2 + rem;
            listSum.add(sum);
            rem = 0;
        }
        n *= 10;
        runner1 !== null ? (runner1 = runner1.next) : runner1;
        runner2 !== null ? (runner2 = runner2.next) : runner2;
    }
    console.log(`Total sum: ${total}`);
    return listSum.toString();
}
console.log(sumLists(list1, list2));

// Palindrome: Implement a function to check if a linked list is a palindrome.

console.log("===== Check if list is palindrome=====");
const palindromeList = new DoublyLinkedList();
palindromeList.add("n");
palindromeList.add("e");
palindromeList.add("v");
palindromeList.add("e");
palindromeList.add("r");
palindromeList.add("o");
palindromeList.add("d");
palindromeList.add("d");
palindromeList.add("o");
palindromeList.add("r");
palindromeList.add("e");
palindromeList.add("v");
palindromeList.add("e");
palindromeList.add("n");
console.log(palindromeList.toString());

function palindromeListCheck(list) {
    if (list.size() === 0 || list.size() === 1) return true;
    let len = Math.floor(list.size() / 2);
    let start = list[head];
    let end = list[tail];
    for (let i = 0; i < len; i++) {
        if (start.data !== end.data) return false;
        start = start.next;
        end = end.prev;
    }
    return true;
}
console.log(palindromeListCheck(palindromeList));
