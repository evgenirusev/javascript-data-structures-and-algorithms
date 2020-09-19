function topologicalSort(graph) {
    const result = [];
    const visited = [];

    graph.allVertices.forEach(vertex => {
        if (!visited[vertex.key]) {
            visited[vertex.key] = true;
            result.push(vertex.value);
            topologicalSortRecurse(result, visited, graph, vertex);
        }
    });

    return result;
}

function topologicalSortRecurse(result, visited, graph, vertex) {
    const edges = graph.outgoingEdgesOf(vertex);

    edges.forEach(edge => {
        if (!visited[edge.end]) {
            visited[edge.end] = true;

            const currentVertex = graph.getVertex(edge.end);
            topologicalSortRecurse(result, visited, graph, currentVertex);
            result.push(currentVertex.value);
        }
    });
}

module.exports = topologicalSort
