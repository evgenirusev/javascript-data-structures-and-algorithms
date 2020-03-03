const Node = require("../node/Node");
const BinarySearchTree = require("../binary-search-tree/BinarySearchTree");

class AvlNode extends Node {
    constructor(val) {
        super(val);
        this.height = null;
    }
}

class AvlTree extends BinarySearchTree {
    
}

module.exports = AvlTree;