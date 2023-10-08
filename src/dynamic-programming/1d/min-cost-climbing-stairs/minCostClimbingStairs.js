/**
 * https://leetcode.com/problems/min-cost-climbing-stairs
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = [];
    memo[0] = cost[0];
    memo[1] = cost[1];

    for (let i = 2; i < cost.length; i++) {
        memo[i] = cost[i] + Math.min(memo[i - 1], memo[i - 2]);
    }

    return Math.min(memo[memo.length - 2], memo[memo.length - 1]);
};

module.exports = minCostClimbingStairs;