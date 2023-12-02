/**
 * https://leetcode.com/problems/integer-break
 * @param {number} n
 * @return {number}
 */

// Brute force backtracking dfs
var integerBreak = function(n) {
    if (n === 3)
        return 2;
    if (n === 5)
        return 6;
    
    let maxVal = 1;
    const maxMultiplicationVal = Math.floor(n / 2);
    const set = [];

    function dfs(i) {
        if (i > maxMultiplicationVal || set.reduce((sum, num) => (sum + num), 0) > n)
            return;

        const product = set.reduce((sum, num) => { return sum * num }, 1);
        if (product > maxVal) {
            maxVal = product;
        }

        for (let j = i; j <= maxMultiplicationVal; j++) {
            set.push(j);
            dfs(j)
            set.pop(j);
        }
    }

    dfs(2);

    return maxVal;
};

module.exports = integerBreak;