class PathCompressedQuickUnion {
    constructor(nodes, cmp) {
        if (typeof cmp === "undefined") {
            cmp = (a, b) => a.id - b.id;
        }

        this.IDsToRootWithLargestValueMap = {};
        this.height = new Array(nodes.length).fill(0);
        this._cmp = cmp;

        this.IDsToNodesMap = nodes.reduce((acc, entity) => {
            acc[entity.id] = {
                entity,
                root: entity.id
            }
            this.IDsToRootWithLargestValueMap[entity.id] = entity.data;

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
            this._updateRoot(id1, id2);
        } else {
            this._updateRoot(id2, id1);
        }
    }

    areConnected(id1, id2) {
        return this._getRoot(id1) === this._getRoot(id2);
    }

    highestValueInSet(id) {
        return this.IDsToRootWithLargestValueMap[
            this._getRoot(id)
        ];
    }

    addNode(entity) {
        this.IDsToNodesMap[entity.id] = {
            entity,
            root: entity.id
        }
        this.height[entity.id] = 0;
    }

    _getRoot(id) {
        if (typeof this.IDsToNodesMap[id] === "undefined") {
            throw `Entity with ID '${id}' does not exist!`;
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

    _updateRoot(id1, id2) {
        const node1 = this.IDsToNodesMap[id1];
        const node2 = this.IDsToNodesMap[id2];

        node1.root = id2;
        this.height[id1 + 1];

        if (this._cmp(node1.entity, node2.entity) > 0) {
            this.IDsToRootWithLargestValueMap[node2.entity.id] = node1.entity.data;
        }
    }
}

module.exports = PathCompressedQuickUnion;