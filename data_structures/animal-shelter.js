class Node {
    constructor(item) {
        this.data = item;
        this.next = null;
    }
}

class DoubleQueue {
    constructor() {
        this.dogHead = null;
        this.dogTail = null;
        this.dogsLength = 0;
        this.catHead = null;
        this.catTail = null;
        this.catsLength = 0;
    }
    enqueue(atype, item) {
        const node = new Node(item);
        if (atype !== "dog" && atype !== "cat")
            throw new Error("Only cats or dogs shelter");
        let animalQueueHead, animalQueueTail, animalQueueLength;
        if (atype === "dog") {
            animalQueueHead = this.dogHead;
            animalQueueTail = this.dogTail;
            animalQueueLength = this.dogsLength;
        } else {
            animalQueueHead = this.catHead;
            animalQueueTail = this.catTail;
            animalQueueLength = this.catsLength;
        }
        if (animalQueueTail !== null) {
            animalQueueTail.next = node;
        }

        animalQueueTail = node;
        if (animalQueueHead === null) {
            animalQueueHead = animalQueueTail;
        }
        animalQueueLength++;
        if (atype === "dog") {
            this.dogHead = animalQueueHead;
            this.dogTail = animalQueueTail;
            this.dogsLength = animalQueueLength;
        } else {
            this.catHead = animalQueueHead;
            this.catTail = animalQueueTail;
            this.catsLength = animalQueueLength;
        }
        return node.data;
    }
    dequeueAny() {
        if (this.isEmpty()) throw new Error("Empty Queue");
        if (this.dogsLength >= this.catsLength) {
            return this.dequeueDog();
        } else {
            return this.dequeueCat();
        }
    }
    dequeueDog() {
        if (this.dogsLength === 0) throw new Error("No more dogs left");
        const dog = this.dogHead.data;
        this.dogHead = this.dogHead.next;
        if (this.dogHead === null) this.dogTail = null;
        this.dogsLength--;
        return dog;
    }
    dequeueCat() {
        if (this.catsLength === 0) throw new Error("No more cats left");
        const cat = this.catHead.data;
        this.catHead = this.catHead.next;
        if (this.catHead === null) this.catTail = null;
        this.catsLength--;
        return cat;
    }
    peek(animalType = "dog") {
        if (animalType !== "dog" && animalType !== "cat")
            throw new Error("Only dogs or cats here");
        const top = animalType === "dog" ? this.dogHead : this.catHead;
        return top.data;
    }
    isEmpty() {
        return this.dogsLength === 0 && this.catsLength === 0;
    }
    listDogs() {
        let node = this.dogHead;
        let arr = [];
        while (node !== null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
    listCats() {
        let node = this.catHead;
        let arr = [];
        while (node !== null) {
            arr.push(node.data);
            node = node.next;
        }
        return arr;
    }
}

const list = new DoubleQueue();
list.enqueue("dog", "Bubbi");
list.enqueue("dog", "Leki");
list.enqueue("dog", "Bukitzer");
list.enqueue("dog", "Avram");
list.enqueue("dog", "Buddy");
list.enqueue("cat", "Meowzer");
list.enqueue("cat", "MeowZ");
list.enqueue("cat", "ElGato");
list.enqueue("cat", "Gatorade");

console.log(list.dequeueDog());
console.log(list.dequeueAny());
console.log(list.dequeueCat());
console.log(list.listDogs());
console.log(list.listCats());
console.log(list);
