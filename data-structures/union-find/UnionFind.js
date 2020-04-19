class UnionFind {
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

        const setId = this.IDsToNodesMap[id1].setId;

        Object.values(this.IDsToNodesMap)
            .filter(node => node.setId === setId)
            .forEach(node => {
                node.setId = id2;
            });
    }

    areConnected(id1, id2) {
        return this.IDsToNodesMap[id1].setId === this.IDsToNodesMap[id2].setId;
    }
}

module.exports = UnionFind;