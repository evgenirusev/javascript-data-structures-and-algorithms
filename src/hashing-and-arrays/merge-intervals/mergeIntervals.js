// Given a collection of intervals, merge all overlapping intervals.

/**
 * https://leetcode.com/problems/merge-intervals/
 * Time complexity - O(nlogn)
 * Space complexity - O(n)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeIntervals = function(intervals) {
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });

    const result = [];

    let i = 0;
    while (i < intervals.length - 1) {
        let curr = intervals[i],
            next = intervals[i + 1];

        if (curr[1] < next[0]) {
            result.push(curr);
        } else {
            next[0] = Math.min(curr[0], next[0]);
            next[1] = Math.max(curr[1], next[1]);
        }

        i++;
    }

    result.push(intervals[intervals.length - 1])

    return result;
};

module.exports = mergeIntervals;
