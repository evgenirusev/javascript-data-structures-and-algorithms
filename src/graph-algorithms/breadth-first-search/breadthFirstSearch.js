const Queue = require('../../data-structures/queues/with-two-stacks/Queue.js');

function breadthFirstSearch(graph, sourceVertex) {
    const visited = {};
    const result = [];

    const queue = new Queue();
    queue.enqueue(sourceVertex);
    let current;
    while (!queue.isEmpty()) {
        current = queue.dequeue();
        result.push(current.value);

        const outgoingEdges = graph.outgoingEdgesOf(current);
        outgoingEdges.forEach(edge => {
            if (!visited[edge.end]) {
                visited[edge.end] = true;
                queue.enqueue(
                    graph.getVertex(edge.end)
                );
            }
        });
    } 

    return result;
}

module.exports = breadthFirstSearch
