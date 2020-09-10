const Queue = require('../../data-structures/queues/with-two-stacks/Queue.js');

function breadthFirstSearch(graph, sourceVertex) {
    const queue = new Queue();
    const visited = {};
    const result = [];

    let current = sourceVertex;
    while (queue.) {
        result.push(current.value);

        const outgoingEdges = graph.outgoingEdgesOf(current);
        outgoingEdges.forEach(edge => {
            if (!visited[edge.end]) {
                queue.enqueue(
                    graph.getVertex(edge.end)
                );
            }
        });

        visited[current.key] = true;
        current = queue.dequeue();
    }

    return result;
}

module.exports = breadthFirstSearch
