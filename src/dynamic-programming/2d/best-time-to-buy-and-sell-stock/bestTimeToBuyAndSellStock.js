var maxProfit = function(prices) {
    if (prices.length <= 1)
        return 0;

    function dfs(i, cd, buyIndex) {
        if (i >= prices.length)
            return 0;

        if (cd) {
            return dfs(i + 1, false, buyIndex);
        } else if (buyIndex >= 0) {
            let profit = prices[i] - prices[buyIndex];
            
            return profit > 0
                ? profit + dfs(i + 1, true, -1)
                : dfs(i + 1, true, -1);
        } else {
            return Math.max(
                dfs(i + 1, false, -1),
                dfs(i + 1, false, i)
            );
        }
    }

    return Math.max(
        dfs(1, false, 0),
        dfs(1, false, false)
    );
};

module.exports = maxProfit;