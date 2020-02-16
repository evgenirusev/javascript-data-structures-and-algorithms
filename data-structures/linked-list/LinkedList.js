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

    addToHead(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    peekHead() {
        return this.head.val;
    }

    peekTail() {
        return this.tail.val;
    }

    deleteFromHead() {
        if (!this.head) {
            throw 'The linked list is already empty!';
        }

        this.head = this.head.next;
        this.head.prev = null;
    }

    deleteFromTail() { }

    isEmpty() {
        return !this.head;
    }

    size() {
        if (this.isEmpty()) {
            return 0;
        }

        let size = 1;
        let current = this.head;
        while(current.next) {
            size++;
            current = current.next;
        }

        return size;
    }

    inorder() { }
    remove() { }
    reverse() { }
    hasCycle() { }
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

module.exports = LinkedList;