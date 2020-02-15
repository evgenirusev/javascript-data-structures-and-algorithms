class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this._heapifyUp(this.data.length - 1);
    }

    extractMin() {
        if (!this.data.length) {
            throw 'The heap is empty!';
        }

        const result = this.data[0];
        this.data[0] = this.data.pop();
        this._heapifyDown(0);
        return result;
    }

    findMin() { }
    deleteMin() { }

    _heapifyUp(index) {
        if (!index) {
            return;
        }
        
        const parent = this._parent(index);

        if (this.data[index] < this.data[parent]) {
            this._swap(index, parent);
        }

        this._heapifyUp(parent);
    }

    _heapifyDown(index) {
        while(this._hasLeft(index)) {
            let priorityIndex = this._left(index);
            const right = this._right(index);

            if (right && this.data[right] < this.data[priorityIndex]) {
                priorityIndex = right;
            }

            if (this.data[index] < this.data[priorityIndex]) {
                return;
            }

            this._swap(index, priorityIndex);
            index = priorityIndex;
        }
    }

    _swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
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
        return this.data[this._left(index)] !== undefined;
    }
}

module.exports = MinHeap;