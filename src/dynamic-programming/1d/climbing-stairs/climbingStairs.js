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

    const memo = {};
    memo[n] = 1;
    memo[n - 1] = 1;

    for (let i = n - 2; i >= 0; i--) {
        memo[i] = memo[i + 1] + memo[i + 2];
    }

    return memo[0];
};