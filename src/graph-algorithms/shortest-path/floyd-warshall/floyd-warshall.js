function floydWarshall(graph) {
    const verticesCount = graph.getNumerOfVertices();
  
    const dist = initializeDistanceMatrix(graph, verticesCount);

    for (let k = 0; k < verticesCount; k++) {
        for (let i = 0; i < verticesCount; i++) {
            for (let j = 0; j < verticesCount; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

function initializeDistanceMatrix(graph, verticesCount) {
    new Array(verticesCount)
        .fill()
        .map(() => new Array(verticesCount).fill(Infinity));

    graph.allEdges.forEach((edge) => {
        const i = graph.allVertices.indexOf(edge.start);
        const j = graph.allVertices.indexOf(edge.end);
        dist[i][j] = edge.weight;
    });
}

module.exports = floydWarshall;