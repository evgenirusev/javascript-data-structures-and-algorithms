const LinkedList = require("../../linked-list/LinkedList.js");

class Queue {
    constructor() {
        // could use dependency injection
        this.linkedList = new LinkedList();
    }

    enqueue(val) {
        this.linkedList.addToTail(val);
    }
    
    dequeue() {
        return this.linkedList.deleteFromHead();
    }

    isEmpty() {
        return this.linkedList.isEmpty();
    }
}

module.exports = Queue
