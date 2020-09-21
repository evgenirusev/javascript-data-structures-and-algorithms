const Graph = require('../adjacency-list/AdjacencyListGraph.js');
const Vertex = require("../vertex/Vertex.js");
const Edge = require("../edge/Edge.js");

// check ./graph.png to get an intuition for the graph
function generateWeightedGraph() {
    const graph = new Graph();
    const vertices = [
        new Vertex("k1", "v1"),
        new Vertex("k2", "v2"),
        new Vertex("k3", "v3"),
        new Vertex("k4", "v4"),
        new Vertex("k5", "v5"),
        new Vertex("k6", "v6"),
        new Vertex("k7", "v7"),
        new Vertex("k8", "v8"),
        new Vertex("k9", "v9"),
        new Vertex("k10", "v10"),
        new Vertex("k11", "v11"),
        new Vertex("k12", "v12")
    ];
    const edges = [ 
        new Edge("k1", "k2", 8),
        new Edge("k1", "k3", 3),
        new Edge("k1", "k6", 13),

        new Edge("k2", "k3", 2),
        new Edge("k2", "k4", 1),

        new Edge("k3", "k2", 3),
        new Edge("k3", "k4", 9),
        new Edge("k3", "k5", 2),

        new Edge("k4", "k5", 4),
        new Edge("k4", "k7", 6),
        new Edge("k4", "k8", 2),
        new Edge("k4", "k12"),

        new Edge("k5", "k1", 5),
        new Edge("k5", "k4", 6),
        new Edge("k5", "k6", 5),
        new Edge("k5", "k9", 4),

        new Edge("k6", "k9", 7),
        new Edge("k6", "k7", 1),

        new Edge("k7", "k8", 4),
        new Edge("k7", "k12"),
        new Edge("k7", "k5", 3),

        new Edge("k8", "k9", 1),

        new Edge("k9", "k7", 5),

        new Edge("k10", "k1"),
    ];

    vertices.forEach(vertex => {
        graph.addVertex(vertex);
    });

    edges.forEach(edge => {
        graph.addEdge(edge);
    });

    return graph;
}

function generateUnweightedGraph() {
    const graph = generateWeightedGraph();
    graph.allEdges.forEach(edge => {
        edge.setWeight(null);
    });

    return graph;
}

function generateAsyclicGraph() {
    const graph = generateWeightedGraph();
    const edgesToRemove = [
        new Edge("k5", "k1", 5),
        new Edge("k3", "k2", 3),
        new Edge("k5", "k6", 5),
        new Edge("k7", "k5", 3),
        new Edge("k8", "k9", 1),
        new Edge("k4", "k4", 5)
    ];

    edgesToRemove.forEach(edge => {
        graph.removeEdge(edge);
    });

    return graph;
}

module.exports.generateWeightedGraph = generateWeightedGraph;
module.exports.generateUnweightedGraph = generateUnweightedGraph;
module.exports.generateAsyclicGraph = generateAsyclicGraph;
