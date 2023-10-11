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

module.exports = longestPalindrome;