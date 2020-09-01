const LinkedList = require("../../../../linked-list/LinkedList.js");
const Edge = require("../../../weighted-edge/Edge");

class AdjacencyListGraph {
    constructor() {
        this.adjList = {};
        this.vertices = {};
    }

    addVertex(vertex) {
        this.vertices[vertex] = vertex;
        this.adjList[vertex] = new LinkedList();
    }

    getNumerOfVertices() {
        return Object.keys(this.vertices).length;
    }

    addEdge(start, end, val = null) {
        this.adjList[start].addToTail(
            new Edge(start, end, val)
        );
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
