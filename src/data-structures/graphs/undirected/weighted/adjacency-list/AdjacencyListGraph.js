class AdjacencyListGraph {
    constructor() {
        this.adjList = {};
        this.vertices = {};
    }

    addVertex(vertex) {
        this.vertices[vertex] = vertex;
    }

    getNumerOfVertices() {
        return Object.keys(this.vertices).length;
    }

    addEdge(edge) {
    }

    getVertex(vertexKey) {
        return this.vertices[vertex];
    }

    getAdjacent(vertexKey) {
    }

    adjacentCount(vertexKey) {
    }

    removeAllEdgesInBetween(start, end) {
    }

    _removeAllEdgesEitherWay(start, end) {
    }

    getEdges(vertexKey) {
    }

    _getAdjKeys(vertexKey) {
    }

    _validateEdge(edge) {
    }

    _validateVertexKey(vertexKey) {
    }

    _vertexExists(vertexKey) {
    }

    _edgeMatchesKeysEitherWay(edge, vertexKey1, vertexKey2) {
    }
}

module.exports = AdjacencyListGraph;
