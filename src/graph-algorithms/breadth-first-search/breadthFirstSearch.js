const Queue = require('../../data-structures/queues/with-linked-list/Queue.js');

function breadthFirstSearch(graph, sourceVertex) {
    const result = [];
    const visited = {};

    const queue = [];
    let currentNode = sourceVertex;
    while (currentNode != null) {
        visited[currentNode] = true;
        result.push(currentNode.value);

        graph.outgoingEdgesOf(currentNode).forEach(edge => {
            if (!visited[edge.end]) {
                queue.push(edge.end);
            }
        });

        currentNode = queue.shift();
    }

    return result;
}

module.exports = breadthFirstSearch;