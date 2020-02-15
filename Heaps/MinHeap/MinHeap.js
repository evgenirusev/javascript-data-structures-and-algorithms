class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this._heapifyUpIterative(this.heap.length - 1);
    }

    extractMin() {
        if (!this.heap.length) {
            throw 'The heap is empty!';
        }

        const result = this.heap.shift();
        this._heapifyDown(0);
        return result;
    }

    get top() {
        return this.heap[0];
    }

    deleteMin() { }

    _heapifyUpIterative(index) {
        let parent = this._parent(index);
        while (this.heap[parent] > this.heap[index]) {
            this._swap(index, parent);
            index = parent;
            parent = this._parent(index);
        }
    }

    _heapifyUpRecursive(index) {
        if (!index) {
            return;
        }

        const parent = this._parent(index);

        if (this.heap[index] < this.heap[parent]) {
            this._swap(index, parent);
        }

        this._heapifyUpRecursive(parent);
    }

    _heapifyDown(index) {
        while (this._hasLeft(index)) {
            let priorityIndex = this._left(index);
            const right = this._right(index);

            if (right && this.heap[right] < this.heap[priorityIndex]) {
                priorityIndex = right;
            }

            if (this.heap[index] < this.heap[priorityIndex]) {
                return;
            }

            this._swap(index, priorityIndex);
            index = priorityIndex;
        }
    }

    _swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    _parent(index) {
        return parseInt((index - 1) / 2);
    }

    _left(index) {
        return 2 * index + 1;
    }

    _right(index) {
        return 2 * index + 2;
    }

    _hasLeft(index) {
        return this.heap[this._left(index)] !== undefined;
    }
}

module.exports = MinHeap;