/**
 * @param {number[]} prices
 * @return {number}
 */
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