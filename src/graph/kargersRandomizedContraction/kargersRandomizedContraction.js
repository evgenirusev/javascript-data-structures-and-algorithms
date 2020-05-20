const Vertex = require("../../data-structures/graphs/vertex/Vertex");

function kargersRandomizedContraction(graph) {
    if (graph.verticesCount < 3) {
        // get one of the two remaining vertices
        const vertex = graph.allVertices[0];

        return graph.getEdges(vertex.key).length / 2;
    }

    const vertices = graph.allVertices;
    const vertexKey = vertices[
        getRandomNumberInRange(0, vertices.length - 1)
    ].key;
    const adjVertices = graph.getEdges(vertexKey);

    const vertex1 = vertexKey.toString();
    const vertex2 = adjVertices[
        getRandomNumberInRange(0, adjVertices.length - 1)
    ];

    // remove self-loops
    graph.removeAllEdgesInBetween(vertex1, vertex2);

    mergeTwoVertices(graph, vertex1, vertex2);

    return kargersRandomizedContraction(graph);
}

function mergeTwoVertices(graph, vertexKey1, vertexKey2) {
    const mergedVertex = new Vertex(`${vertexKey1} + ${vertexKey2}`);
    graph.addVertex(mergedVertex);

    const vertex1Edges = graph.getEdges(vertexKey1);
    const vertex2Edges = graph.getEdges(vertexKey2);

    const mergedVertexAdj = [...vertex1Edges, ...vertex2Edges];

    graph.removeVertex(vertexKey1);
    graph.removeVertex(vertexKey2);

    mergedVertexAdj.forEach(edge => {
        graph.addEdge(mergedVertex.key, edge);
    });
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = kargersRandomizedContraction;