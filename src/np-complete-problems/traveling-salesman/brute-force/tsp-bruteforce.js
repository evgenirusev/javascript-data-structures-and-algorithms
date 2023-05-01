function bruteForceTSP(graph) {
    const vertices = graph.allVertices;

    let minDistance = Infinity;
    let minPath = null;

    const permutations = [];
    generatePermutations([], vertices, permutations);

    for (let i = 0; i < permutations.length; i++) {
        const path = permutations[i];
        const distance = calculatePathDistance(graph, [...path, path[0]]);
        if (distance < minDistance) {
            minDistance = distance;
            minPath = path;
        }
    }

    return { path: [...minPath, minPath[0]], distance: minDistance };
}

function generatePermutations (prefix, remaining, permutations) {
    if (remaining.length === 0) {
        permutations.push(prefix);
        return;
    }

    for (let i = 0; i < remaining.length; i++) {
        generatePermutations(
            [...prefix, remaining[i]],
            [...remaining.slice(0, i), ...remaining.slice(i+1)],
            permutations
        );
    }
};

function calculatePathDistance(graph, path) {
    let distance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        const start = path[i];
        const end = path[i + 1];
        const edges = graph.allEdges.filter(edge => edge.start == start && edge.end == end);
        if (edges.length !== 1) {
            throw new Error(`Invalid number of edges between ${start} and ${end}. Expected 1, but found ${edges.length}.`);
        }
        distance += edges[0].weight;
    }
    return distance;
}

module.exports = bruteForceTSP;