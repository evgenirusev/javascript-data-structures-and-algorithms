const LinkedList = require("../../linked-list/LinkedList.js");

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(val) {
        this.linkedList.addToHead(val);
    }

    pop() {
        let result = this.linkedList.peekHead();
        this.linkedList.deleteFromHead();

        return result;
    }

    size() {
        return this.linkedList.size();
    }
}

module.exports = Stack;
