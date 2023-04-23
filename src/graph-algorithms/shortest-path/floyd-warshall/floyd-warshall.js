function floydWarshall(graph) {
    const verticesCount = graph.getNumerOfVertices();
    const distances = initializeDistanceMatrix(graph, verticesCount);

    for (let i = 0; i < verticesCount; i++) {
        for (let j = 0; j < verticesCount; j++) {
            for (let k = 0; k < verticesCount; k++) {
                if (distances[j][k] > distances[j][i] + distances[i][k]) {
                    distances[j][k] = distances[j][i] + distances[i][k];
                }
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