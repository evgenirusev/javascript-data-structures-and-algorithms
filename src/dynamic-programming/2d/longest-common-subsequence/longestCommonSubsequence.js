/**
 * https://leetcode.com/problems/longest-common-subsequence
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Bottom up DP
function longestCommonSubsequence(text1, text2) {
    const dpGrid = new Array(text1.length + 1).fill(0)
        .map(() => new Array(text2.length + 1).fill(0));
    
    for (let col = text2.length - 1; col >= 0; col--) {
        for (let row = text1.length - 1; row >= 0; row--) {
            if (text2[col] === text1[row])
                dpGrid[row][col] = 1 + dpGrid[row + 1][col + 1];
            else
                dpGrid[row][col] = Math.max(dpGrid[row + 1][col], dpGrid[row][col + 1]);
        }
    }
    
    return dpGrid[0][0];
}

// Top down DP with caching:
const longestCommonSubsequence = (text1, text2) => {
    const memo = Array.from({ length: text1.length + 1 }, () =>
        Array(text2.length + 1).fill(-1)
    );

    const dfs = (i, j) => {
        if (i === text1.length || j === text2.length)
            return 0;

        if (memo[i][j] !== -1)
            return memo[i][j];
  
        if (text1[i] === text2[j])
            memo[i][j] = 1 + dfs(i + 1, j + 1);
        else
            memo[i][j] = Math.max(dfs(i, j + 1), dfs(i + 1, j));
  
        return memo[i][j];
    };
  
    return dfs(0, 0);
};

// Top down Brute force without caching
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