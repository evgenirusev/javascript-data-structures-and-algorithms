const BinaryHeap = require('../../../data-structures/heaps/binary-heap/BinaryHeap');

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const graph = {};
    times.forEach(time => {
        const edge = { target: time[1], dist: time[2] };
        if (!graph[time[0]]) {
            graph[time[0]] = [];
        }

        if (!graph[time[1]]) {
            graph[time[1]] = [];
        }

        graph[time[0]].push(edge)
    });

    const distances = {}
    Object.keys(graph).forEach(vertex => {
        distances[vertex] = Infinity;
    });

    const heap = new BinaryHeap((a, b) => a.dist - b.dist);

    heap.insert({ vertex: k, dist: 0 });
    distances[k] = 0;
    const visited = new Set();

    while (!heap.isEmpty) {
        const current = heap.extract();

        if (visited.has(current.vertex))
            continue;

        visited.add(current.vertex);

        graph[current.vertex].forEach(edge => {
            if (!visited.has(edge.target)) {
                const distanceToTarget = distances[current.vertex] + edge.dist;
                const existingDistance = distances[edge.target];

                if (distanceToTarget < existingDistance) {
                    distances[edge.target] = distanceToTarget;

                    heap.insert({ vertex: edge.target, dist: distanceToTarget});
                }
            }
        });
    }

    return Object.values(distances).some(distance => distance === Infinity)
        ? -1
        : Math.max(...Object.values(distances));
};

module.exports = networkDelayTime;