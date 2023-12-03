/**
 * https://leetcode.com/problems/integer-break
 * @param {number} n
 * @return {number}
 */

// Bottom up DP
// Time complexity - O(n^2)
// Space complexity - O(n)
function integerBreak(n) {
    if (n <= 3)
        return n - 1;

    const dp = Array(n + 1).fill(0);

    for (let i = 1; i <= 3; i++)
        dp[i] = i;

    for (let num = 4; num <= n; num++) {
        let ans = num;
        
        for (let i = 2; i < num; i++)
            ans = Math.max(ans, i * dp[num - i]);

        dp[num] = ans;
    }

    return dp[n];
}

// Top down DP approach
// Time complexity - O(n^2)
// Space complexity - O(n)
// function integerBreak(n) {
//     const dp = new Array(n + 1).fill(0);

//     function dfs(num) {
//         if (num <= 3)
//             return num;

//         if (dp[num] !== 0)
//             return dp[num];

//         let res = num;
//         for (let i = 2; i < num; i++) {
//             const r = i * dfs(num - i);
//             res = Math.max(res, r);
//         }

//         dp[num] = res;
//         return res;
//     }

//     if (n <= 3)
//         return n - 1;

//     return dfs(n);
// }

// Brute force backtracking dfs
// Time complexity - O(2^n)
// Space complexity - O(n)
// var integerBreak = function(n) {
//     if (n === 3)
//         return 2;
//     if (n === 5)
//         return 6;
    
//     let maxVal = 1;
//     const maxMultiplicationVal = Math.floor(n / 2);
//     const set = [];

//     function dfs(i) {
//         if (i > maxMultiplicationVal || set.reduce((sum, num) => (sum + num), 0) > n)
//             return;

//         const product = set.reduce((sum, num) => { return sum * num }, 1);
//         if (product > maxVal) {
//             maxVal = product;
//         }

//         for (let j = i; j <= maxMultiplicationVal; j++) {
//             set.push(j);
//             dfs(j)
//             set.pop(j);
//         }
//     }

//     dfs(2);

//     return maxVal;
// };

module.exports = integerBreak;