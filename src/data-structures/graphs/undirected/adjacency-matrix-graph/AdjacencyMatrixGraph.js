class AdjacencyMatrixGraph {
    constructor(numberOfVertices) {
        this.graph = [...Array(numberOfVertices)].map(e => Array(numberOfVertices));
    }

    getNumerOfVertices() {
        return this.graph.length;
    }

    addEdge(vertice1, vertice2) {
        
    }

    getEdges(vertice) {
        // todo
    }

    degree(vertice) {
        // todo
    }
}

module.exports = AdjacencyMatrixGraph;