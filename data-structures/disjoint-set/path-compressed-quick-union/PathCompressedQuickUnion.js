class PathCompressedQuickUnion {
    constructor(nodes, cmp) {
        if (typeof cmp === "undefined") {
            cmp = (a, b) => a.id - b.id;
        }

        this.idsToRootWithLargestValueMap = [];
        this.height = new Array(nodes.length).fill(0);
        this._cmp = cmp;

        this.IDsToNodesMap = nodes.reduce((acc, node) => {
            acc[node.id] = {
                node,
                root: node.id
            }
            this.idsToRootWithLargestValueMap[node.id] = node.id;

            return acc;
        }, {});
    }

    union(id1, id2) {
        if (this.IDsToNodesMap.id1 || this.IDsToNodesMap.id2) {
            throw 'passed ID does not exist!';
        }

        const id1Root = this._getRoot(id1);
        const id2Root = this._getRoot(id2);

        if (this.height[id1Root] < this.height[id2Root]) {
            this._changeRootAndIncrementHeight(id1, id2);
        } else {
            this._changeRootAndIncrementHeight(id2, id1);
        }
    }

    areConnected(id1, id2) {
        return this._getRoot(id1) === this._getRoot(id2);
    }

    addNode(node) {
        this.IDsToNodesMap[node.id] = {
            node,
            root: node.id
        }
        this.height[node.id] = 0;
    }

    _getRoot(id) {
        if (typeof this.IDsToNodesMap[id] === "undefined") {
            throw `Node with ID '${id}' does not exist!`;
        }

        while (id !== this.IDsToNodesMap[id].root) {
            // Path compression
            const parentRoot = this.IDsToNodesMap[
                this.IDsToNodesMap[id].root
            ].root;
            this.IDsToNodesMap[id].root = parentRoot;

            id = this.IDsToNodesMap[id].root;
        }

        return id;
    }

    _changeRootAndIncrementHeight(id1, id2) {
        const node1 = this.IDsToNodesMap[id1];
        const node2 = this.IDsToNodesMap[id2];

        node1.root = id2;
        this.height[id1 + 1];

        if (this._cmp(node1, node2) > 0) {
            this.idsToRootWithLargestValueMap[node2] = node1;
        }
    }
}

module.exports = PathCompressedQuickUnion;