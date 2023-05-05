const Queue = require('../../data-structures/queues/with-linked-list/Queue.js');

function breadthFirstSearch(graph, sourceVertex) {
    const result = [];
    const visited = {};

    const queue = new Queue();

    queue.enqueue(sourceVertex.key);
    visited[sourceVertex.key] = true;
    while(!queue.isEmpty()) {
        const currentVertex = queue.dequeue();
        result.push(graph.getVertex(currentVertex).value);

        graph.outgoingEdgesOf(currentVertex)
            .map(edge => edge.end)
            .filter(destinationVertex => !visited[destinationVertex])
            .forEach(vertexKey => {
                visited[vertexKey] = true;
                queue.enqueue(vertexKey);
            });
    }

    return result;
}

module.exports = breadthFirstSearch;