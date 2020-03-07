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

    remove(val) {
        if (typeof val === 'undefined') {
            throw 'No parameter value was passed!';
        }

        if (!this.find(val)) {
            throw `The value ${val} does not exist in the tree!`;
        }

        if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
            this.root.color = Colors.RED;
        }

        this.root = this._removeRecursive(this.root, val)

        if (this.root) {
            this.root.color = Colors.BLACK;
        }
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

        return this._balance(node);
    }

    _isRed(node) {
        return node ? node.color === Colors.RED : false;
    }

    _balance(node) {
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

    _removeRecursive(node, val) {
        if (val < node.val) {
            if (!this._isRed(node.left) && !this._isRed(node.left.left)) {
                node = this._moveRedLeft(node);
            }

            node.left = this._removeRecursive(node.left, val);
        }
        else {
            if (this._isRed(node.left))
                node = this._rotateRight(node);
            if (val === node.val && (node.right == null))
                return null;
            if (!this._isRed(node.right) && !this._isRed(node.right.left))
                node = this._moveRedRight(node);
            if (val === node.val) {
                const min = this._findMinRecursive(node.right);
                node.val = min.val;
                node.right = this._deleteMin(node.right);
            }
            else node.right = delete (node.right, val);
        }

        return this._balance(node);
    }

    _deleteMin(node) {
        if (!node.left) {
            return null;
        }

        if (!this._isRed(node.left) && !this._isRed(node.left.left)) {
            node = this._moveRedLeft(node);
        }

        node.left = this._deleteMin(node.left);
        return this._balance(node);
    }

    _moveRedRight(node) {
        this._swapColors(node);

        if (this._isRed(node.left.left)) { 
            node = this._rotateRight(node);
            this._swapColors(node);
        }

        return node;
    }

    _moveRedLeft(node) {
        this._swapColors(node);
        
        if (this._isRed(node.right.left)) { 
            node.right = this._rotateRight(node.right);
            node = this._rotateLeft(node);
            this._swapColors(node);
        }

        return node;
    }
}

module.exports = RedBlackTree;