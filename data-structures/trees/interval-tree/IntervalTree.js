class IntervalTree {
    insert(inserval) {
        this.root = this._insert(this.root, inserval);
    }

    inorder(cb) {
        this._inorderRecursive(this.root, cb);
    }

    findAnyOverlapping(interval) {
        return this._findAnyOverlapping(this.root, interval);
    }

    findAllOverlapping(interval) {
        const overlappingIntervals = [];
        this._findAllOverlapping(this.root, interval, overlappingIntervals);
        return overlappingIntervals;
    }

    contains(interval) {
        return this._contains(this.root, interval);
    }

    remove(interval) { }

    findLongest() { }

    _insert(node, interval) {
        if (!node) {
            return new Node(interval);
        }

        if (interval.start < node.interval.start) {
            node.left = this._insert(node.left, interval);
        } else if (interval.start > node.interval.start) {
            node.right = this._insert(node.right, interval);
        } else {
            throw 'tree does not support duplicate interval starts!';
        }

        return node;
    }

    _inorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        this._inorderRecursive(node.left, cb);
        cb(node.interval);
        this._inorderRecursive(node.right, cb);
    }

    _findAnyOverlapping(node, interval) {
        if (!node) {
            return null;
        }

        if (this._areOverlapping(node.interval, interval)) {
            return node.interval;
        }

        if (interval.start < node.interval.start) {
            return this._findAnyOverlapping(interval.start < node.left);
        }

        if (interval.start > node.interval.start) {
            return this._findAnyOverlapping(interval.start < node.right);
        }
    }

    _areOverlapping(interval1, interval2) {
        if (!interval1 && !interval2) {
            return false;
        }

        return interval1.start < interval2.end && interval1.end > interval2.start;
    }

    _findAllOverlapping(node, interval, overlappingIntervals) {
        if (!node) {
            return;
        }

        this._findAllOverlapping(node.left, interval, overlappingIntervals);

        if (this._areOverlapping(interval, node.interval)) {
            overlappingIntervals.push(node.interval);
        }

        this._findAllOverlapping(node.right, interval, overlappingIntervals);
    }

    _contains(node, interval) {
        if (!node) {
            return false;
        }

        if (this._intervalsMatch(node.interval, interval)) {
            return true;
        }

        if (interval.start < node.interval.start) {
            return this._contains(node.left, interval);
        } else if (interval.start > node.interval.start) {
            return this._contains(node.right, interval);
        }

        return false;
    }

    _intervalsMatch(interval1, interval2) {
        return interval1.start === interval2.start && interval1.end === interval2.end;
    }
}

class Node {
    constructor(interval) {
        this.interval = interval;
        this.left = null;
        this.right = null;
    }
}

module.exports = IntervalTree;