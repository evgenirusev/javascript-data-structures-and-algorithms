function findStronglyConnectedComponents(graph) {
    const dfsStack = getDfsStack(graph);
    dfsStack;
}

function getDfsStack(graph) {
    const vertices = graph.allVertices;
    const result = [];
    const visited = {};

    vertices.forEach(vertex => {
        if (!visited[vertex.key]) {
            visited[vertex.key] = true;
            result.push(vertex);
            DFSAccumilateAdjacentVertices(graph, result, visited, vertex);
        }
    });

    return result;
}

function DFSAccumilateAdjacentVertices(graph, result, visited, vertex) {
    graph.outgoingEdgesOf(vertex).forEach(edge => {
        if (!visited[edge.end]) {
            visited[edge.end] = true;
            result.push(graph.getVertex(edge.end));
            DFSAccumilateAdjacentVertices(graph, result, visited, graph.getVertex(edge.end));
        }
    });
}

module.exports = findStronglyConnectedComponents;
