const Colors = {
    RED: 0,
    BLACK: 1
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this._insertRecursive(this.root, val);
        this.root.color = Colors.BLACK;
    }

    inorder(cb) {
        this._inorderRecursive(this.root, cb);
    }

    preorder(cb) {
        this._preorderRecursive(this.root, cb);
    }

    _insertRecursive(node, val) {
        if (!node) {
            return new Node(val);
        }

        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else {
            node.right = this._insertRecursive(node.right, val);
        }

        if (this._isRed(node.right) && !this._isRed(node.left)) {
            node = this._rotateleft(node);
        }

        if (this._isRed(node.left) && this._isRed(node.left.left)) {
            node = this._rotateRight(node);
        }

        if (this._isRed(node.left) && this._isRed(node.right)) {
            this._swapColors(node);
        }

        return node;
    }

    _inorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        this._inorderRecursive(node.left, cb);
        cb(node.val);
        this._inorderRecursive(node.right, cb);
    }

    _preorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        cb(node.val);

        this._preorderRecursive(node.left, cb);
        this._preorderRecursive(node.right, cb);
    }

    _isRed(node) {
        return node ? node.color === Colors.RED : false;
    }

    _rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        leftChild.right = node;
        leftChild.color = node.color;
        node.color = Colors.RED;
        return leftChild;
    }

    _rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        rightChild.left = node;
        rightChild.color = node.color;
        node.color = Colors.RED;
        return node;
    }

    _swapColors(node) {
        node.color = Colors.RED;
        node.left.color = Colors.BLACK;
        node.right.color = Colors.BLACK;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.color = Colors.RED;
    }
}

module.exports = RedBlackTree;