class QuickUnion {
    constructor(nodes) {
        this.IDsToNodesMap = nodes.reduce((acc, node) => {
            acc[node.id] = {
                node,
                setId: node.id
            }

            return acc;
        }, {});
    }

    union(id1, id2) {
        if (this.IDsToNodesMap.id1 || this.IDsToNodesMap.id2) {
            throw 'passed ID does not exist!';
        }

        this.IDsToNodesMap[id1].setId = id2;
    }

    areConnected(id1, id2) {
        return this._getRoot(id1) === this._getRoot(id2);
    }

    addNode(node) {
        this.IDsToNodesMap[node.id] = {
            node,
            setId: node.id
        }
    }

    _getRoot(id) {
        while (id !== this.IDsToNodesMap[id].setId) {
            id = this.IDsToNodesMap[id].setId;
        }

        return id;
    }
}

module.exports = QuickUnion;