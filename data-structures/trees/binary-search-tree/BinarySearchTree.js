const Node = require("../node/Node");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this._insertIterative(val);
    }

    inorder(cb) {
        this._inorderIterative(this.root, cb);
    }

    preorder(cb) {
        this._preorderIterative(this.root, cb);
    }

    postorder(cb) {
        this._postorderRecursive(this.root, cb);
    }

    find(val) {
        return this._findRecursive(this.root, val);
    }

    remove(val) {
        this._removeIterative(val);
    }

    findMin() {
        if (!this.root) {
            return null;
        }

        return this._findMinIterative();
    }

    findMax() {
        if (!this.root) {
            return null;
        }

        return this._findMaxIterative();
    }

    get height() {
        return this._getHeight(this.root);
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }

    get diameter() {
        return this._diameter(this.root);
    }

    lowestCommonaAncestor(firstVal, secondVal) {
        if (!this.root) {
            throw 'The tree is empty!';
        }

        return this._lowestCommonaAncestor(this.root, firstVal, secondVal).val;
    }

    _insertIterative(val) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }

        const node = new Node(val);

        let current = this.root;
        let noInsertYet = true;
        while (noInsertYet) {
            if (val < current.val) {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = node;
                    noInsertYet = false;
                }
            } else {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = node;
                    noInsertYet = false;
                }
            }
        }
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

        return node;
    }

    _inorderIterative(node, cb) {
        if (!node) {
            return;
        }

        const stack = [];
        let current = node;

        while (stack.length > 0 || current) {
            while (current) {
                stack.push(current);
                current = current.left;
            }

            current = stack.pop();

            cb(current.val);

            current = current.right;
        }
    }

    _inorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        this._inorderRecursive(node.left, cb);
        cb(node.val);
        this._inorderRecursive(node.right, cb);
    }

    _preorderIterative(node, cb) {
        if (!node) {
            return;
        }

        const stack = [];
        let current = node;

        while (stack.length > 0 || current) {
            cb(current.val);

            if (current.right) {
                stack.push(current.right);
            }

            if (current.left) {
                stack.push(current.left);
            }

            current = stack.pop();
        }
    }

    _preorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        cb(node.val);

        this._preorderRecursive(node.left, cb);
        this._preorderRecursive(node.right, cb);
    }

    _postorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        this._postorderRecursive(node.left, cb);
        this._postorderRecursive(node.right, cb);

        cb(node.val);
    }

    _findRecursive(node, val) {
        if (!node) {
            return null;
        }

        if (node.val === val) {
            return val;
        }

        return val < node.val
            ? this._findRecursive(node.left, val)
            : this._findRecursive(node.right, val);
    }

    _removeIterative(val) {
        let { node, parent } = this._findNodeAndParent(val);

        if (!node) {
            throw `The value ${val} doesn't exist in the tree!`;
        }

        if (node.left) {
            const swapNode = this._extractNodeFromLeft(node);
            swapNode.left = node.left;
            swapNode.right = node.right;

            if (parent) {
                if (parent.left === node) {
                    parent.left = swapNode;
                } else {
                    parent.right = swapNode;
                }
            } else {
                this.root = swapNode;
            }
        } else {
            if (node.right && node.right.left) {
                node = node.right.right;
            } else {
                node = node.right;

                if (this.root.right === node) {
                    this.root = node;
                }
            }
        }
    }

    _extractNodeFromLeft(node) {
        let parent = node;
        let current = node.left;

        if (!current.left && !current.right) {
            parent.left = null;
            return current;
        }

        while (current.right) {
            parent = current;
            current = current.right;
        }

        if (current.left) {
            parent.right = current.left;
        } else {
            parent.right = null;
        }

        return current;
    }

    _findNodeAndParent(val) {
        let current = this.root;
        let parent = null;

        while (current.val !== val) {
            parent = current;
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return {
            node: current,
            parent: parent
        }
    }

    _findMinIterative() {
        let current = this.root;
        while (true) {
            if (!current.left) {
                return current.val;
            }

            current = current.left;
        }
    }

    _findMinRecursive(node) {
        if (!node.left) {
            return node.val;
        }

        return this._findMinRecursive(node.left);
    }

    _findMaxIterative() {
        let current = this.root;
        while (true) {
            if (!current.right) {
                return current.val;
            }

            current = current.right;
        }
    }

    _findMaxRecursive(node) {
        if (!node.right) {
            return node.val;
        }

        return this._findMaxRecursive(node.right);
    }



    _isBalanced(node) {
        if (!node) {
            return true;
        }

        return this._isBalanced(node.left)
            && this._isBalanced(node.right)
            && 1 >= Math.abs(this._getHeight(node.left) - this._getHeight(node.right));
    }

    _getHeight(node) {
        if (!node) {
            return -1;
        }

        const left = this._getHeight(node.left);
        const right = this._getHeight(node.right);

        return 1 + Math.max(left, right);
    }

    _diameter(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = this._getHeight(this.root.left) + 1;
        const rightHeight = this._getHeight(this.root.right) + 1;
        const path = leftHeight + rightHeight + 1

        return Math.max(path, this._diameter(node.left), this._diameter(node.right));
    }

    _lowestCommonaAncestor(node, firstVal, secondVal) {
        if (firstVal < node.val && secondVal < node.val) {
            return this._lowestCommonaAncestor(node.left, firstVal, secondVal);
        }

        if (firstVal > node.val && secondVal > node.val) {
            return this._lowestCommonaAncestor(node.right, firstVal, secondVal);
        }

        return node;
    }
}

module.exports = BinarySearchTree;