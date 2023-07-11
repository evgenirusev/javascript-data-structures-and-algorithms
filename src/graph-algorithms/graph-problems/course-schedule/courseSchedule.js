/**
 * DFS approach - Time O(V + E) | Space O(V + E)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const visited = new Set();
    const completedCourses = new Set();

    for (const node of Object.keys(graph)) {
        if (hasCycle(parseInt(node), graph, visited, completedCourses))
            return false;
    }

    return true;
};

function hasCycle(node, graph, visited, completedCourses) {
    if (visited.has(node))
        return false;

    visited.add(node);

    var neighbors = Object.values(graph[node]);

    for (let i = 0; i < neighbors.length; i++)
        if (hasCycle(neighbors[i], graph, visited, completedCourses)) 
            return true;

    if (neighbors.filter(n => !completedCourses.has(n)).length > 0)
        return true;

    completedCourses.add(node);

    return false;
}

function buildGraph(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill().map(() => []);

    for (const [ src, dst ] of prerequisites) {
        const neighbors = (graph[dst] || []);
        neighbors.push(src);
        graph[dst] = neighbors;
    }

    return graph;
}

module.exports = canFinish;