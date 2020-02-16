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

        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    deleteFromTail() {
        if (!this.head) {
            throw 'The linked list is already empty!';
        }

        if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            this.tail = null;
            this.head = null;
        }
    }

    isEmpty() {
        return !this.head;
    }

    size() {
        let size = 0;
        let current = this.head;
        while (current) {
            size++;
            current = current.next;
        }

        return size;
    }

    inorder(cb) {
        let current = this.head;
        while(current) {
            cb(current.val);
            current = current.next;
        }
    }

    toArray() {
        let result = [];
        let current = this.head;
        while(current) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }

    reverse() {

    }

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