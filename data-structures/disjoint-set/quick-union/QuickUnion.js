class QuickUnion {
    constructor(nodes) {
        this.IDsToNodesMap = nodes.reduce((acc, node) => {
            acc[node.id] = {
                node,
                root: node.id
            }

            return acc;
        }, {});
    }

    union(id1, id2) {
        if (this.IDsToNodesMap.id1 || this.IDsToNodesMap.id2) {
            throw 'passed ID does not exist!';
        }

        const id1Root = this._getRoot(id1);
        const id2Root = this._getRoot(id2);
        this.IDsToNodesMap[id1Root].root = id2Root;
    }

    areConnected(id1, id2) {
        return this._getRoot(id1) === this._getRoot(id2);
    }

    addNode(node) {
        this.IDsToNodesMap[node.id] = {
            node,
            root: node.id
        }
    }

    _getRoot(id) {
        while (id !== this.IDsToNodesMap[id].root) {
            id = this.IDsToNodesMap[id].root;
        }

        return id;
    }
}

module.exports = QuickUnion;