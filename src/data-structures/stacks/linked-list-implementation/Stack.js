const LinkedList = require("../../linked-list/LinkedList.js");

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(val) {
        this.linkedList.addToHead(val);
    }
}
