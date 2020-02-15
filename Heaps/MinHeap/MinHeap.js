class MinHeap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        this._heapifyUp(this.data.length - 1);
    }

    extractMin() {
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

        const parentIndex = this._getParent(index);

        if (this.data[index] < this.data[parentIndex]) {
            this._swap(index, parentIndex);
        }

        this._heapifyUp(parentIndex);
    }

    _heapifyDown(index) {
        while(this._hasLeftChild(index)) {
            const lowestChild = this._getLowestPriorityChild(index);

            if (this.data[index] < lowestChild) {
                return;
            }

            this._swap(index, this.data.indexOf(lowestChild));
            index = lowestChild;
        }
    }

    _getLowestPriorityChild(index) {
        const leftChild = this._getLeftChild(index);
        const rightChild = this._getRightChild(index);

        // TODO: comparator
        if (!rightChild || leftChild < rightChild) {
            return leftChild;
        } else {
            return rightChild;
        }
    }

    _swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }

    _getParent(index) {
        return parseInt((index - 1) / 2);
    }

    _getLeftChild(index) {
        return this.data[2 * index + 1];
    }

    _getRightChild(index) {
        return this.data[2 * index + 2];
    }

    _hasLeftChild(index) {
        return this._getLeftChild(index) !== undefined;
    }
}

module.exports = MinHeap;