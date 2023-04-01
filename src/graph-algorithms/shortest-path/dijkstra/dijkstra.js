const { objectExpression } = require('@babel/types');
const BinaryHeap = require('../../../data-structures/heaps/binary-heap/BinaryHeap');

function getShortestPaths(graph, sourceVertex) {
    const visited = {};
    const distances = {};
    graph.allVertices.forEach(vertex => {
        distances[vertex] = Infinity;
    });
    const heap = new BinaryHeap((a, b) => a.distance - b.distance);

    heap.insert({ vertex: sourceVertex, distance: 0 });
    distances[sourceVertex] = 0;
    while (!heap.isEmpty) {
        const currentVertex = heap.extract().vertex;

        if (visited[currentVertex])
            continue;

        visited[currentVertex] = true;

        graph.outgoingEdgesOf(currentVertex).forEach(edge => {
            if (!visited[edge.end]) {
                const distanceWithEdge = distances[currentVertex] + edge.weight;
                const endVertexDistance = distances[edge.end];

                if (distanceWithEdge < endVertexDistance) {
                    distances[edge.end] = distanceWithEdge;

                    heap.insert({
                        vertex: graph.getVertex(edge.end),
                        distance: distances[edge.end]
                    });
                }
            }
        });
    }

    return Object.keys(distances).filter(vertexKey => {
        return distances[vertexKey] != Infinity;
    }).reduce((distancesWithoutInfinity, vertexKey) => {
        distancesWithoutInfinity[vertexKey] = distances[vertexKey];
        return distancesWithoutInfinity;
    }, {});
}

module.exports = getShortestPaths;