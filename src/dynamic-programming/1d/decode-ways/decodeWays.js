/**
 * https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 * Time complexity - O(N)
 * Space complexity - O(N)
 */
function numDecodings(s) {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;

    dp[1] = s.charAt(0) === '0' ? 0 : 1;

    for (let i = 2; i < dp.length; i++) {
        if (s.charAt(i - 1) !== '0') {
            dp[i] = dp[i - 1];
        }

        const twoDigit = parseInt(s.substring(i - 2, i));
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[s.length];
}

module.exports = numDecodings;