class IntervalTree {
    insert(inserval) {
        this.root = this._insert(this.root, inserval);
    }

    inorder(cb) {
        this._inorderRecursive(this.root, cb);
    }

    preorder() { }
    postorder() { }
    findAny(start, end) { }
    findAll(start, end) { }

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
}

class Node {
    constructor(interval) {
        this.interval = interval;
        this.left = null;
        this.right = null;
    }
}

module.exports = IntervalTree;