/**
 * https://leetcode.com/problems/longest-common-subsequence
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Brute force recursive solution
var longestCommonSubsequence = function(text1, text2) {
    function dfs(i, j) {
        if (i >= text1.length || j >= text2.length)
            return 0;
        
        if (text1.charAt(i) == text2.charAt(j)) {
            return 1 + dfs(i + 1, j + 1);
        } else {
            return Math.max(dfs(i+1, j), dfs(i, j+1))
        }
    }

    return dfs(0, 0);
};

module.exports = longestCommonSubsequence;