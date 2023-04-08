const BinaryHeap = require('../../../data-structures/heaps/binary-heap/BinaryHeap');

function primFindMinimumWeightTree(graph, sourceVertex) {
    const parents = [];
    const visited = { };
    const heap = new BinaryHeap((a, b) => a.distance - b.distance);

    heap.insert({ vertex: sourceVertex.key, distance: 0 });
    let currentVertex;
    while (!heap.isEmpty) {
        currentVertex = heap.extract().vertex;

        if (visited[currentVertex])
            continue;

        visited[currentVertex] = true;
        parents.push(currentVertex);
        
        graph.outgoingEdgesOf(currentVertex).forEach(edge => {
            if (!visited[edge.end]) {
                heap.insert({
                    vertex: edge.end,
                    distance: edge.weight
                });
            }
        });
    }

    return parents;
}

module.exports = primFindMinimumWeightTree;