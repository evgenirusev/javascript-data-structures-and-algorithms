/**
 * https://leetcode.com/problems/longest-common-subsequence
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Caching solution
const longestCommonSubsequence = (text1, text2) => {
    const memo = Array.from({ length: text1.length + 1 }, () =>
        Array(text2.length + 1).fill(null)
    );
  
    const dfs = (p1, p2) => {
        if (p1 === text1.length || p2 === text2.length) {
            return 0;
        }
  
        if (memo[p1][p2] !== null) {
            return memo[p1][p2];
        }
  
        if (text1[p1] === text2[p2]) {
            memo[p1][p2] = 1 + dfs(p1 + 1, p2 + 1);
        } else {
            memo[p1][p2] = Math.max(dfs(p1, p2 + 1), dfs(p1 + 1, p2));
        }
  
        return memo[p1][p2];
    };
  
    return dfs(0, 0);
};  

// Brute force recursive solution
// var longestCommonSubsequence = function(text1, text2) {
//     function dfs(i, j) {
//         if (i >= text1.length || j >= text2.length)
//             return 0;
        
//         if (text1.charAt(i) == text2.charAt(j)) {
//             return 1 + dfs(i + 1, j + 1);
//         } else {
//             return Math.max(dfs(i+1, j), dfs(i, j+1))
//         }
//     }

//     return dfs(0, 0);
// };

module.exports = longestCommonSubsequence;