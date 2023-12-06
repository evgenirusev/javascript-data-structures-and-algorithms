function floydWarshall(graph) {
    const verticesCount = graph.getNumerOfVertices();
    const distances = initializeDistanceMatrix(graph, verticesCount);

    for (let k = 0; k < verticesCount; k++) {
        for (let i = 0; i < verticesCount; i++) {
            for (let j = 0; j < verticesCount; j++) {
                if (distances[i][j] > distances[i][k] + distances[k][j])
                    distances[i][j] = distances[i][k] + distances[k][j];
            }
        }
    }

    return distances;
}

function initializeDistanceMatrix(graph, verticesCount) {
    const distances = new Array(verticesCount)
        .fill()
        .map(() => new Array(verticesCount).fill(Infinity));

    graph.allEdges.forEach((edge) => {
        const i = graph.allVertices.indexOf(edge.start);
        const j = graph.allVertices.indexOf(edge.end);
        distances[i][j] = edge.weight;
    });

    return distances;
}

module.exports = floydWarshall;