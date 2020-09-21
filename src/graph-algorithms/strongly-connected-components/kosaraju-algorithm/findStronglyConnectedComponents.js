function findStronglyConnectedComponents(graph) {
    const dfsStack = getDfsStack(graph);
    return findSCCs(graph, dfsStack);
}

function getDfsStack(graph) {
    const vertices = graph.allVertices;
    const result = [];
    const visited = {};

    vertices.forEach(vertex => {
        if (!visited[vertex.key]) {
            visited[vertex.key] = true;
            result.push(vertex);
            transposedDFSAccumilatioon(graph, result, visited, vertex);
        }
    });

    return result;
}

// DFS with transposed edges
function transposedDFSAccumilatioon(graph, result, visited, vertex) {
    graph.incomingEdgesOf(vertex).forEach(edge => {
        if (!visited[edge.start]) {
            visited[edge.start] = true;
            result.push(graph.getVertex(edge.start));
            transposedDFSAccumilatioon(graph, result, visited, graph.getVertex(edge.start));
        }
    });
}

function findSCCs(graph, vertices) {
    const SCCs = [];
    const visited = {};

    vertices.forEach(vertex => {
        if (!visited[vertex.key]) {
            visited[vertex.key] = true;
            result.push([currentVertex.value]);
            findSCCsRecursive(graph, vertex, visited, SCCs);
        }
    });
}

function findSCCsRecursive(graph, vertex, visited, SCCs) {
    graph.outgoingEdgesOf(vertex).forEach(edge => {
        if (!visited[edge.end]) {
            visited[edge.end] = true;
            const currentVertex = graph.getVertex(edge.end);
            result.slice(-1)
                .push(currentVertex.value);
            findSCCsRecursive(graph, currentVertex, visited, SCCs);
            SCCs.push([]);
        }
    });
}

module.exports = findStronglyConnectedComponents;
