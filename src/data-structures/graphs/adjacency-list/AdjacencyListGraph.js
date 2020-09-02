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

    get allVertices() {
        return this.vertices;
    }

    get allEdges(vertexKey) {
        // return Object.values(this.adjList)
        // TODO: need to extend linked list before mplementing this.
    }

    getVertex(vertexKey) {
        return this.vertices[vertex];
    }

    getNumerOfVertices() {
        return Object.keys(this.vertices).length;
    }

    addEdge(edge) {
        this.adjList[edge.start].addToTail(edge);
    }

    incomingEdgesOf(vertex) {
    }

    outgoingEdgesOf(vertex) {
    }

    inDegreeOf(vertex) {
    }

    outDegreeOf(vertex) {
    }

    setEdgeWeight(vertexKey) {
    }

    removeEdge() {
    }
}

module.exports = AdjacencyListGraph;
