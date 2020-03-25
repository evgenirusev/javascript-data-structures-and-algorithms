class SegmentTree {
    constructor(array) {
        this._buildSegmentTree(array, 0, array.length);
        this.tree = [];
    }

    rangeQuery(queryLeft, queryRight) {
        
    }

    _buildSegmentTree(array, node, start, end) {
        if (start === end) {
            this.tree[start] = array[node];
        } else {
            const mid = Math.floor((start + end) / 2);
            const leftChild = this._leftChild(node);
            const rightChild = this._rightChild(node);

            this._buildSegmentTree(array, leftChild, start + 1, mid);
            this._buildSegmentTree(array, rightChild, mid, end);
            this.tree[node] = this.tree[leftChild] + this.tree[rightChild];
        }
    }

    _leftChild(index) {
        return 2 * index + 1;
    }

    _rightChild(index) {
        return 2 * index + 2;
    }
}

module.exports = SegmentTree;