const BinaryHeap = require('../../../data-structures/heaps/binary-heap/BinaryHeap');

function getShortestPaths(graph, sourceVertex) {
    const heap = new BinaryHeap((a, b) => b.distance - a.distance);
    heap.insert();
    while (heap)
}

module.exports = breadthFirstSearch;