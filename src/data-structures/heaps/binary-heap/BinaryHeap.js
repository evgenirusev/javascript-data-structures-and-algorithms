class BinaryHeap {
    constructor(cmp) {
        if (typeof cmp === "function") {
            this._cmp = cmp;
        } else {
            this._cmp = (a, b) => a - b;
        }

        this.heap = [];
    }

    insert(val) {
        if (typeof val === "undefined") {
            throw 'Parameter value must not be undefined!';
        }

        this.heap.push(val);
        this._heapifyUpIterative(this.heap.length - 1);
    }

    extract() {
        if (!this.heap.length) {
            throw 'The heap is empty!';
        }

        const result = this.heap[0];

        if (this.heap.length == 1) {
            this.heap.pop();
        } else {
            this.heap[0] = this.heap.pop();
            this._heapifyDown(0);
        }
        
        return result;
    }

    get top() {
        return this.heap[0];
    }

    get isEmpty() {
        return this.heap.length <= 0
    }

    _heapifyUpIterative(index) {
        let parent = this._parent(index);
        while (this._cmp(this.heap[parent], this.heap[index]) > 0) {
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

        if (this._cmp(this.heap[parent], this.heap[index]) > 0) {
            this._swap(index, parent);
        }

        this._heapifyUpRecursive(parent);
    }

    _heapifyDown(index) {
        while (this._hasLeft(index)) {
            let priorityIndex = this._left(index);
            const right = this._right(index);

            if (this.heap[right] && this._cmp(this.heap[priorityIndex], this.heap[right]) > 0) {
                priorityIndex = right;
            }

            if (this._cmp(this.heap[priorityIndex], this.heap[index]) > 0) {
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

module.exports = BinaryHeap;