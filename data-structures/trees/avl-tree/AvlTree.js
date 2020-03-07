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

    remove(val) {
        if (!this.find(val)) {
            throw `The value ${val} does not exist in the tree!`;
        }

        this.root = this._removeRecursive(this.root, val);
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
        return this._balance(node);
    }

    _updateHeight(node) {
        return 1 + Math.max(
            this._height(node.left),
            this._height(node.right)
        );
    }

    _balance(node) {
        const balanceFactor = this._balanceFactor(node);

        if (balanceFactor < -1) {
            if (this._balanceFactor(node.right) > 0) {
                node.right = this._rotateRight(node.right);
            }

            node = this._rotateLeft(node);
        } else if (balanceFactor > 1) {
            if (this._balanceFactor(node.left) < 0) {
                node.left = this._rotateLeft(node.left);
            }

            node = this._rotateRight(node);
        }

        return node;
    }

    _balanceFactor(node) {
        return this._height(node.left) - this._height(node.right);
    }

    _height(node) {
        return node ? node.height : -1;
    }

    _rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;
        rightChild.left = node;
        this._updateHeight(node);
        this._updateHeight(rightChild);
        return rightChild;
    }

    _rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;
        leftChild.right = node;
        this._updateHeight(node);
        this._updateHeight(leftChild);
        return leftChild;
    }

    _updateHeight(node) {
        node.height = 1 + Math.max(this._height(node.left), this._height(node.right));
    }

    _removeRecursive(node, val) {
        if (val < node.val) {
            node.left = this._removeRecursive(node.left, val);
        }
        else if (val > node.val) {
            node.right = this._removeRecursive(node.right, val);
        }
        else {
            if (node.left == null) {
                return node.right;
            }
            else if (node.right == null) {
                return node.left;
            }
            else {
                const temp = node;
                node = this._findMinRecursive(temp.right);
                node.right = this._deleteMin(temp.right);
                node.left = temp.left;
            }
        }

        this._updateHeight(node);
        return this._balance(node);
    }

    _deleteMin(node) {
        if (!node.left) {
            return node.right;
        }

        node.left = this._deleteMin(node.left);
        this._updateHeight(node);
        return this._balance(node);
    }
}

module.exports = AvlTree;