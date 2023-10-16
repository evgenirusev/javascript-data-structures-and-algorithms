/**
 * https://leetcode.com/problems/longest-palindromic-substring
 * @param {string} s
 * @return {string}
 * DP solution
 * Time complexity - O(N^2)
 * Space complexity - O(N^2) - due to the matrix..
 */
function longestPalindrome(s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    let ans = [0, 0];

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = 1;
            ans = [i, i + 1];
        }
    }

    for (let diff = 2; diff < n; diff++) {
        for (let i = 0; i < n - diff; i++) {
            
            const j = i + diff;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = 1;
                ans = [i, j];
            }
            
        }
    }

    const [i, j] = ans;
    return s.slice(i, j + 1);
}

/*
 * Middle check solution
 * Time complexity - O(N^2)
 * Space complexity - O(1)
 */
// function longestPalindrome(s) {
//     function expand(i, j) {
//         let left = i;
//         let right = j;

//         while (left >= 0 && right < s.length && s[left] === s[right]) {
//             left--;
//             right++;
//         }

//         return right - left - 1;
//     }

//     let ans = [0, 0];

//     for (let i = 0; i < s.length; i++) {
//         let oddLength = expand(i, i);
//         if (oddLength > ans[1] - ans[0] + 1) {
//             let dist = Math.floor(oddLength / 2);
//             ans = [i - dist, i + dist];
//         }

//         let evenLength = expand(i, i + 1);
//         if (evenLength > ans[1] - ans[0] + 1) {
//             let dist = Math.floor(evenLength / 2) - 1;
//             ans = [i - dist, i + 1 + dist];
//         }
//     }

//     const [start, end] = ans;
//     return s.slice(start, end + 1);
// }

module.exports = longestPalindrome;