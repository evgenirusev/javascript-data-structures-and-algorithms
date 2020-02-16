class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        const node = new Node(val);
        if (!this.tail) {
            this.tail = node;
            this.head = this.tail;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    addToHead() {}
    peekHead() {}

    peekTail() {
        return this.tail.val;
    }

    deleteFromHead() {}
    deleteFromTail() {}
    isEmpty() {}
    inorder() {}
    remove() {}
    reverse() {}
    hasCycle() {}
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

module.exports = LinkedList;