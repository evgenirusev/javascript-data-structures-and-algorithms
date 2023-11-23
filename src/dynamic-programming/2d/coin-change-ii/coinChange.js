/**
 * https://leetcode.com/problems/coin-change-ii
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
// Bottom up DP:
function coinChange(amount, coins) {
    const n = coins.length;
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }

    return dp[amount];
}

// Top down DP:
// function coinChange(amount, coins) {
//     const memo = Array.from({ length: coins.length }, () => Array(amount + 1).fill(undefined));

//     function dfs(i, a, cache) {
//         if (a === amount)
//             return 1;
    
//         if (a > amount)
//             return 0;
            
//         if (i === coins.length)
//             return 0;
            
//         if (cache[i][a] !== undefined)
//             return cache[i][a];

//         cache[i][a] = dfs(i    , a + coins[i], cache)
//                     + dfs(i + 1, a           , cache);
        
//         return cache[i][a];
//     }
    
//     var res = dfs(0, 0, memo);
//     return res;
// }

// Brute force backtracking - timeout
// var coinChange = function(amount, coins) {
//     let res = 0;
//     let sum = 0;
    
//     function dfs(i) {
//         if (i === coins.length || sum > amount)
//             return;

//         if (sum === amount) {
//             res++;
//             return;
//         }

//         for (let j = i; j < coins.length; j++) {
//             sum += coins[j];
//             dfs(j);
//             sum -= coins[j];
//         }
//     }

//     dfs(0);

//     return res;
// };

module.exports = coinChange;