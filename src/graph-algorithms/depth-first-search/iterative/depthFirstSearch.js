const Stack = require('../../../data-structures/stacks/linked-list-implementation/Stack.js');

function depthFirstSearch(graph, sourceVertex) {
    const visited = {};
    const result = [];

    const stack = new Stack();
    stack.push(sourceVertex);
    visited[sourceVertex.key] = true;
    let current;
    while (!stack.isEmpty()) {
        current = stack.pop();
        result.push(current.value);

        graph.outgoingEdgesOf(current).forEach(edge => {
            if (!visited[edge.end]) {
                visited[edge.end] = true;
                stack.push(
                    graph.getVertex(edge.end)
                );
            }
        });
    } 

    return result;
}

module.exports = depthFirstSearch
