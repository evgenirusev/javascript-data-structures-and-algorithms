class DisjointSet {
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
        
    }

    areConnected(id1, id2) {
    }

    addNode(node) {
        this.IDsToNodesMap[node.id] = {
            node,
            setId: node.id
        }
    }
}

module.exports = DisjointSet;