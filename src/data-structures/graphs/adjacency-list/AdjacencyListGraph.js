const LinkedList = require("../../linked-list/LinkedList.js");
const Edge = require("../edge/Edge.js"); 

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

    addEdge(edge) {
        this.adjList[start].addToTail(edge);
    }

    getVertex(vertexKey) {
        return this.vertices[vertex];
    }

    incomingEdgesOf(vertex) {
    }

    outgoingEdgesOf(vertex) {
    }

    inDegreeOf(vertex) {
    }

    outDegreeOf(vertex) {
    }

    getEdges(vertexKey) {
    }

    setEdgeWeight(vertexKey) {
    }

    removeEdge() {
    }
}

module.exports = AdjacencyListGraph;
