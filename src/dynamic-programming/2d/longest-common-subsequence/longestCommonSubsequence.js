/**
 * https://leetcode.com/problems/longest-common-subsequence
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// Caching solution
function longestCommonSubsequence(text1, text2) {
    const memo = Array.from({ length: text1.length + 1 }, () =>
        Array.from({ length: text2.length + 1 }, () => -1)
    );


    function memoSolve(p1, p2) {
        if (p1 === text1.length || p2 === text2.length) {
            return 0;
        }

        if (memo[p1][p2] !== -1) {
            return memo[p1][p2];
        }

        const option1 = memoSolve(p1 + 1, p2);
        const firstOccurrence = text2.indexOf(text1[p1], p2);
        let option2 = 0;
        if (firstOccurrence !== -1) {
            option2 = 1 + memoSolve(p1 + 1, firstOccurrence + 1);
        }

        const result = Math.max(option1, option2);
        memo[p1][p2] = result;
        return result;
    }

    return memoSolve(0, 0);
}

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