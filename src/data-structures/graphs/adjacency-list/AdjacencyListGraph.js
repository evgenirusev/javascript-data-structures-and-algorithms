const LinkedList = require("../../linked-list/LinkedList.js");
const Edge = require("../edge/Edge.js"); 

class AdjacencyListGraph {
    constructor(undirected = false) {
        this.adjList = {};
        this.vertices = {};
        this.undirected = undirected;
    }

    addVertex(vertex) {
        this.vertices[vertex] = vertex;
        this.adjList[vertex] = new LinkedList();
    }

    get allVertices() {
        return Object.values(this.vertices);
    }

    get allEdges() {
        return Object.values(this.adjList)
            .map(ll => ll.toArray())
            .flat();
    }

    getVertex(vertexKey) {
        return this.vertices[vertex];
    }

    getNumerOfVertices() {
        return Object.keys(this.vertices).length;
    }

    addEdge(edge) {
        this.adjList[edge.start].addToTail(edge);

        if (this.undirected) {
            this.adjList[edge.end].addToTail(
                new Edge(edge.end, edge.start, edge.weight)
            );
        }
    }

    incomingEdgesOf(vertex) {
        return this.allEdges
            .filter(edge => edge.end === vertex.key);
    }

    outgoingEdgesOf(vertex) {
        return this.adjList[vertex].toArray();
    }

    inDegreeOf(vertex) {
        return this.incomingEdgesOf(vertex).length;
    }

    outDegreeOf(vertex) {
        return this.outgoingEdgesOf(vertex).length;
    }

    removeEdge(edge) {
        this.adjList[edge.start].remove(edge);

        if (this.undirected) {
            this.adjList[edge.end].remove(
                new Edge(edge.end, edge.start, edge.weight)
            );
        }
    }
}

module.exports = AdjacencyListGraph;
