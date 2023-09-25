/**
 * https://leetcode.com/problems/min-cost-climbing-stairs
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if (cost.length <= 1)
        return 1;
    const memo = {};

    memo[cost.length - 1] = cost[cost.length - 1];
    memo[cost.length - 2] = cost[cost.length - 2];

    for (let i = cost.length - 3; i >= 0; i--) {
        memo[i] = Math.min(memo[i + 1], memo[i + 2]) + cost[i];
    }

    return Math.min(memo[0], memo[1]);
};

module.exports = minCostClimbingStairs;