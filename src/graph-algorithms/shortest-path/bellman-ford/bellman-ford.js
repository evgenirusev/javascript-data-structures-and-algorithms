function bellmanFord(graph, sourceVertex) {
    const distances = {};
    graph.allVertices.forEach(vertex => {
        distances[vertex] = Infinity;
    });

    distances[sourceVertex] = 0;

    for (let i = 0; i < graph.allVertices.length - 1; i++) {
        graph.allVertices.forEach(vertex => {
            graph.outgoingEdgesOf(vertex).forEach(edge => {
                const totalDistance = edge.weight + distances[vertex];
                if (totalDistance < distances[edge.end]) {
                    distances[edge.end] = totalDistance
                }
            });
        });
    }

    return distances;
}

module.exports = bellmanFord;