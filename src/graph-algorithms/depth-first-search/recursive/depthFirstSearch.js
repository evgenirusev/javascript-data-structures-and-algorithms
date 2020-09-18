function depthFirstSearch(graph, sourceVertex) {
    const result = [];
    const visited = {};

    visited[sourceVertex.key] = true;
    dfsRecurse(result, visited, graph, sourceVertex);

    return result;
}

function dfsRecurse(result, visited, graph, vertex) {
    result.push(vertex.value);

    const edges = graph.outgoingEdgesOf(vertex);
    edges.forEach(edge => {
        if (!visited[edge.end]) {
            visited[edge.end] = true;
            dfsRecurse(result, visited, graph, graph.getVertex(edge.end));
        }
    });
}

module.exports = depthFirstSearch
