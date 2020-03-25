class SegmentTree {
    constructor(array) {
        this._buildSegmentTree(array, 0, array.length);
        this.tree = [];
    }

    rangeQuery(queryLeft, queryRight) {
        const start = 0;
        const end = this.tree.length;

        if (queryLeft < start || queryRight > end) {
            throw 'Invalid argument!';
        }

        this._rangeQuery(0, start, end, queryLeft, queryRight);
    }

    _rangeQuery(nodeIndex, start, end, queryLeft, queryRight) {
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
            this.tree[start] = array[nodeIndex];
        } else {
            const mid = this._mid(start, end)
            const leftChild = this._leftChild(nodeIndex);
            const rightChild = this._rightChild(nodeIndex);

            this._buildSegmentTree(array, leftChild, start + 1, mid);
            this._buildSegmentTree(array, rightChild, mid, end);
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