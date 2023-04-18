function maxWeightInAPathGraph(pathGraph, weights) {
    const numVertices = pathGraph.length;
    const maxWeightIs = new Array(numVertices + 1).fill(0);
    maxWeightIs[1] = weights[0];

    for (let i = 2; i <= numVertices; i++) {
        maxWeightIs[i] = Math.max(
            maxWeightIs[i - 1],
            maxWeightIs[i - 2] + weights[i - 1]
        );
    }

    return maxWeightIs[numVertices];
}

module.exports = maxWeightInAPathGraph;