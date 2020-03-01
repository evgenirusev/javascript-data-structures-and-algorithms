class RedBlackTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this.root = this._insertRecursive(this.root, val);
    }

    _insertRecursive(node) {
        if (!node) {
            return new Node(val);
        }

        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else {
            node.right = this._insertRecursive(node.right, val);
        }

        if (this._isRed(node.right) && !this._isRed(node.left)) {
            // this._rotateLeft();
        }

        if (this._isRed(node.left) && this._isRed(node.left.left)) {
            node = this._rotateRight(node);
        }

        if (this._isRed(node.left) && this._isRed(node.right)) {
            // this.swapColors();
        }

        return node;
    }

    _isRed(node) {
        return node?.color === Colors.RED;
    }

    _rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        leftChild.right = node;
        return leftChild;
    }
}

const Colors = {
    RED: 0,
    BLACK: 0
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.color = Corols.RED;
    }
}

module.exports = RedBlackTree;