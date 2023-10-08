/*
 * Dynamic programming approach
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1)
        return 1;
    if (n == 2)
        return 2;

    const memo = [];
    memo[0] = 1;
    memo[1] = 2;

    for (let i = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }

    return memo[n - 1];
};

module.exports = climbStairs;