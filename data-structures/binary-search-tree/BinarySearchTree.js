class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        this._insertIterative(val);
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
        if (val < node.val) {
            if (node.left) {
                this._insertRecursive(node.left, val)
            } else {
                node.left = new Node(val);
            }
        } else {
            if (node.right) {
                this._insertRecursive(node.right, val);
            } else {
                node.right = new Node(val);
            }
        }
    }

    inorder(cb) {
        this._inorderIterative(this.root, cb);
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

    preorder(cb) {
        this._preorderIterative(this.root, cb);
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

    postorder(cb) {
        this._postorderRecursive(this.root, cb);
    }

    _postorderRecursive(node, cb) {
        if (!node) {
            return;
        }

        this._postorderRecursive(node.left, cb);
        this._postorderRecursive(node.right, cb);

        cb(node.val);
    }

    find(val) {
        return this._findRecursive(this.root, val);
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

    remove(val) {
        this._removeIterative(val);
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

    findMin() {
        if (!this.root) {
            return null;
        }

        return this._findMinIterative();
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

    findMax() {
        if (!this.root) {
            return null;
        }

        return this._findMaxIterative();
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

    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(node) {
        if (!node) {
            return true;
        }

        return this._isBalanced(node.left)
            && this._isBalanced(node.right)
            && 1 >= Math.abs(this._getHeight(node.left) - this._getHeight(node.right));
    }

    get height() {
        return this._getHeight(this.root);
    }

    _getHeight(node) {
        if (!node) {
            return -1;
        }

        const left = this._getHeight(node.left);
        const right = this._getHeight(node.right);

        return 1 + Math.max(left, right);
    }

    get diameter() {
        return this._diameter(this.root);
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

    lowestCommonaAncestor(firstVal, secondVal) {
        if (!this.root) {
            throw 'The tree is empty!';
        }

        const firstNodePath = [],
            secondNodePath = [];
        this._getPathRecursive(this.root, firstVal, firstNodePath);
        this._getPathRecursive(this.root, secondVal, secondNodePath);

        let lowest = this.root.val;
        for (let i = 1; i < Math.min(firstNodePath.length, secondNodePath.length); i++) {
            if (firstNodePath[i] === secondNodePath[i]) {
                lowest = firstNodePath[i];
            }
        }

        return lowest;
    }

    _getPathRecursive(node, val, arr) {
        if (!node) {
            throw `The value ${val} does not exist in the tree!`;
        }

        if (node.val === val) {
            arr.unshift(val);
            return;
        }

        if (val < node.val) {
            this._getPathRecursive(node.left, val, arr);
        } else {
            this._getPathRecursive(node.right, val, arr);
        }

        arr.unshift(node.val);
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinarySearchTree;