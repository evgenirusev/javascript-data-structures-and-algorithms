const Queue = require('../../../../data-structures/queues/with-linked-list/Queue.js');

function bfsShortestPathDistance(graph, sourceVertex, destVertex) {
    const visitedKeyToPathLength = {};

    const queue = new Queue();
    queue.enqueue(sourceVertex);
    visitedKeyToPathLength[sourceVertex.key] = 0;
    let current;
    while (!queue.isEmpty()) {
        current = queue.dequeue();

        const outgoingEdges = graph.outgoingEdgesOf(current);

        for(let i = 0; i < outgoingEdges.length; i++) {
            const edge = outgoingEdges[i];
            
            if (!visitedKeyToPathLength[edge.end]) {
                visitedKeyToPathLength[edge.end] = visitedKeyToPathLength[current.key] + 1;

                if (edge.end === destVertex.key) {
                    return visitedKeyToPathLength[edge.end];
                }

                queue.enqueue(
                    graph.getVertex(edge.end)
                );
            }
        }
    } 

    throw 'path or vertex does not exist!';
}

module.exports = bfsShortestPathDistance;
