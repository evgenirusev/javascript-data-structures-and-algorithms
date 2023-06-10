/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 * Sliding window one pass solution
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let globalMin = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - globalMin;
        if (profit > maxProfit)
            maxProfit = profit;
        
        if (prices[i] < globalMin)
            globalMin = prices[i];
    }

    return maxProfit;
};

module.exports = maxProfit;