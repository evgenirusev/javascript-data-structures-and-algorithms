const BinarySearchTree = require("../binary-search-tree/BinarySearchTree");
const Node = require("../node/Node");

const Colors = {
    RED: 0,
    BLACK: 1
}

class RedBlackNode extends Node {
    constructor(val) {
        super(val);
        this.color = Colors.RED;
    }
}

class RedBlackTree extends BinarySearchTree {
    insert(val) {
        if (typeof val === 'undefined') {
            throw 'No parameter value was passed!';
        }

        this.root = this._insertRecursive(this.root, val);
        this.root.color = Colors.BLACK;
    }

    _insertRecursive(node, val) {
        if (!node) {
            return new RedBlackNode(val);
        }

        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else {
            node.right = this._insertRecursive(node.right, val);
        }

        if (this._isRed(node.right) && !this._isRed(node.left)) {
            node = this._rotateLeft(node);
        }

        if (this._isRed(node.left) && this._isRed(node.left.left)) {
            node = this._rotateRight(node);
        }

        if (this._isRed(node.left) && this._isRed(node.right)) {
            this._swapColors(node);
        }

        return node;
    }

    _isRed(node) {
        return node ? node.color === Colors.RED : false;
    }

    _rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        rightChild.left = node;

        rightChild.color = node.color;
        node.color = Colors.RED;

        return rightChild;
    }

    _rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        leftChild.right = node;

        leftChild.color = node.color;
        node.color = Colors.RED;

        return leftChild;
    }

    _swapColors(node) {
        node.color = Colors.RED;
        node.left.color = Colors.BLACK;
        node.right.color = Colors.BLACK;
    }

    delete() {
        // TODO: implement delete OR consider composition for encapsulation
    }
}

module.exports = RedBlackTree;