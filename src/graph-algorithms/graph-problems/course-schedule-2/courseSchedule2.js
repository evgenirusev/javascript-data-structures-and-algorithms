const Queue = require('../../../data-structures/queues/with-linked-list/Queue.js');

/**
 * * https://leetcode.com/problems/course-schedule-ii/
 * Time O(V + E) | Space O(V + E)
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var courseSchedule2 = function(numCourses, prerequisites) {
    const adjList = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);

    for (let i = 0; i < prerequisites.length; i++) {
        adjList[prerequisites[i][1]].push(prerequisites[i][0]);
        indegree[prerequisites[i][0]]++;
    }

    const queue = new Queue();
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0)
            queue.enqueue(i);
    }

    const result = [];
    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        result.push(current);

        adjList[current].forEach(neighbor => {
            indegree[neighbor]--;

            if (indegree[neighbor] == 0)
                queue.enqueue(neighbor);
        });
    }

    return result.length === numCourses ? result : [];
};

module.exports = courseSchedule2;