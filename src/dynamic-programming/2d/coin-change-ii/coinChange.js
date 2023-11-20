/**
 * https://leetcode.com/problems/coin-change-ii
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// Brute force backtracking - timeout
var coinChange = function(amount, coins) {
    let res = 0;
    let sum = 0;
    
    function dfs(i) {
        if (i === coins.length || sum > amount)
            return;

        if (sum === amount) {
            res++;
            return;
        }

        for (let j = i; j < coins.length; j++) {
            sum += coins[j];
            dfs(j);
            sum -= coins[j];
        }
    }

    dfs(0);

    return res;
};

module.exports = coinChange;