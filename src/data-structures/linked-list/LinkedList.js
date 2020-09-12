class LinkedList { 
    constructor(cmp = (a, b) => a - b) {
        this.cmp = cmp;
        this.head = null;
        this.tail = null;
    }

    addToTail(value) {
        const node = new Node(value);
        if (!this.tail) {
            this.tail = node;
            this.head = this.tail;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    addToHead(value) {
        const node = new Node(value);
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
        return this.head.value;
    }

    peekTail() {
        return this.tail.value;
    }

    deleteFromHead() {
        if (!this.head) {
            throw 'The linked list is already empty!';
        }

        const result = this.head.value;
        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return result;
    }

    deleteFromTail() {
        if (!this.head) {
            throw 'The linked list is already empty!';
        }

        const result = this.tail.value;
        if (this.tail.prev) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            this.tail = null;
            this.head = null;
        }

        return result;
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
        while (current) {
            cb(current.value);
            current = current.next;
        }
    }

    toArray() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp != null) {
            this.head = temp.prev;
        }
    }

    valueExists(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    remove(value) {
        if (this.cmp(value, this.head.value) === 0) {
            if (this.head.next) {
                this.head.next.prev = null;
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
            }

            return true;
        }

        let current = this.head;
        while (current) {
            if (this.cmp(value, current.value) === 0) {
                current.prev.next = current.next;

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                return true;
            } else {
                current = current.next;
            }
        }

        return false;
    }

    removeAllWithValue(val) {
        while(this.head && this.remove(val)) {
            this.remove(val);
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

module.exports = LinkedList;
