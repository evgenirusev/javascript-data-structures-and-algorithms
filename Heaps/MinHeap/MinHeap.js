class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this._heapify(this.data.length - 1);
    }

    extractMin() {
        
    }

    findMin() { }
    deleteMin() { }

    _heapify(index) {
        if (!index) {
            return;
        }

        const parentIndex = this._getParentIndex(index);

        if (this.data[index] < this.data[parentIndex]) {
            this._swap(index, parentIndex);
        }

        this._heapify(parentIndex);
    }

    _swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    _getParentIndex(index) {
        return parseInt((index - 1) / 2);
    }
}

module.exports = MinHeap;