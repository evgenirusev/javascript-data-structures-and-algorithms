class SegmentTree {
    constructor(array) {
        this.array = array;
        this.tree = [];
        this._buildSegmentTree(this.array, 0, 0, this.array.length - 1);
    }

    rangeQuery(queryLeft, queryRight) {
        return this._rangeQuery(0, 0, this.array.length - 1, queryLeft, queryRight);
    }

    _rangeQuery(nodeIndex, start, end, queryLeft, queryRight) {
        if (queryRight < start || end < queryLeft){
            return 0;
        }

        if (queryLeft <= start && end <= queryRight) {
            return this.tree[nodeIndex];
        }

        const mid = this._mid(start, end);
        const leftResult = this._rangeQuery(this._leftChild(nodeIndex), start, mid, queryLeft, queryRight);
        const rightResult = this._rangeQuery(this._rightChild(nodeIndex), mid + 1, end, queryLeft, queryRight);
        return leftResult + rightResult;
    }

    _buildSegmentTree(array, nodeIndex, start, end) {
        if (start === end) {
            this.tree[nodeIndex] = array[start];
        } else {
            const mid = this._mid(start, end);
            const leftChild = this._leftChild(nodeIndex);
            const rightChild = this._rightChild(nodeIndex);

            this._buildSegmentTree(array, leftChild, start, mid);
            this._buildSegmentTree(array, rightChild, mid + 1, end);
            this.tree[nodeIndex] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    _mid(start, end) {
        return Math.floor((start + end) / 2);
    }

    _leftChild(index) {
        return 2 * index + 1;
    }

    _rightChild(index) {
        return 2 * index + 2;
    }
}

module.exports = SegmentTree;