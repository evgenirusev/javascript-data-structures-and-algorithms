const Node = require("../node/Node");
const BinarySearchTree = require("../binary-search-tree/BinarySearchTree");

class AvlNode extends Node {
    constructor(val) {
        super(val);
        this.height = 0;
    }
}

class AvlTree extends BinarySearchTree {
    insert(val) {
        if (typeof val === 'undefined') {
            throw 'No parameter value was passed!';
        }

        this.root = this._insertRecursive(this.root, val);
    }

    _insertRecursive(node, val) {
        if (!node) {
            return new AvlNode(val);
        }

        if (val < node.val) {
            node.left = this._insertRecursive(node.left, val);
        } else if (val > node.val) {
            node.right = this._insertRecursive(node.right, val);
        } else {
            throw 'Tree does not support duplicates!';
        }

        this._updateHeight(node);
        this._balance();
        return node;
    }

    _updateHeight(node) {
        return 1 + Math.max(
            this._height(node.left),
            this._height(node.right)
        );
    }

    _balance(node) {
        const balanceFactor = this._balanceFactor(node);

        if (balanceFactor > 1) {
            if (this._balanceFactor(x.right) > 0) {
                this._rotateRight(node.right);
            }

            this._rotateLeft(node);
        } else if (balanceFactor < -1) {
            if (this._balanceFactor(x.left) < 0) {
                this._rotateLeft(node.left);
            }

            this._rotateRight(node);
        }
    }

    _balanceFactor(node) {
        return this._height(node.left.height) - this._height(node.right.height);
    }

    _height(node) {
        node ? node.height : -1;
    }

    _rotateLeft() {
        // IMPL
    }

    _rotateRight() {
        // IMPL
    }
}

module.exports = AvlTree;