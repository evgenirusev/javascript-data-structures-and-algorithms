const BinaryHeap = require('../../../data-structures/heaps/binary-heap/BinaryHeap');

function getShortestPaths(graph, sourceVertex) {
    const visited = {};
    const distances = {};
    Object.keys(graph.allVertices).forEach(vertex => {
        distances[vertex] = Infinity;
    });
    const heap = new BinaryHeap((a, b) => b.distance - a.distance);

    heap.insert({ vertex: sourceVertex, distance: 0 });
    while (!heap.isEmpty) {
        const currentVertex = heap.extract();
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
}

module.exports = getShortestPaths;