/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
 * @param {number[]} prices
 * @return {number}
 * Time complexity - O(N)
 * Space complexity - O(N)
 * Top down DFS DP solution:
 */
function maxProfit(prices) {
    const n = prices.length;
    const dp = Array.from({ length: n + 1 }, () => Array(2).fill(undefined));

    function dfs(i, buying) {
        if (i >= n)
            return 0;

        if (dp[i][buying] !== undefined)
            return dp[i][buying];

        const cooldown = dfs(i + 1, buying);
        if (buying == 1) {
            const buy = dfs(i + 1, -1) - prices[i];
            dp[i][buying] = Math.max(buy, cooldown);
        } else {
            const sell = dfs(i + 2, 1) + prices[i];
            dp[i][buying] = Math.max(sell, cooldown);
        }
        
        return dp[i][buying];
    }

    return dfs(0, 1);
}

// Initial brute force backtracking solution with dfs
var maxProfit = function(prices) {
    // action: 0 - buy, 1 - sell, 2 - cooldown

    function dfs(i, buyIndex, action, value) {
        if (i === prices.length)
            return value;

        // buy
        if (action === 0) {
            return Math.max(
                dfs(i + 1, i, 1, value),
                dfs(i + 1, i, 2, value),
            );
        // sell
        } else if (action == 1) {
            return (prices[i] - prices[buyIndex]) + dfs(i + 1, -1, 2, value);
        // cooldown
        } else {
            return Math.max(
                dfs(i + 1, buyIndex, 0, value),
                dfs(i + 1, buyIndex, 0, value)
            )
        }
    }

    return Math.max(
        dfs(0, -1, 0, 0),
        dfs(0, -1, 2, 0)
    );
};

module.exports = maxProfit;