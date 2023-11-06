// https://leetcode.com/problems/unique-paths/

// Bottom up D2 - Time: O(n*m), Space: O(n)
function uniquePaths(rows, cols) {
    let prevRow = new Array(cols).fill(0);
    for (let i = rows - 1; i >= 0; i--) {
        let rowValues = new Array(cols).fill(0);
        
        rowValues[cols - 1] = 1;
        for (let j = cols - 2; j >= 0; j--) {
            rowValues[j] = rowValues[j + 1] + prevRow[j];
        }

        prevRow = rowValues;
    }
    return prevRow[0];
}

// Other approaches:
// Recursive dp - Time: O(2 ^ (n + m)), Space: O(n + m)
// Brute force - Time: O(n*m), Space: O(n*m)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = (m, n) => {
//     const paths = Array.from({ length: m }, () => Array(n).fill(-1));

//     paths[m - 1][n - 1] = 1;

//     if (m > 1)
//         paths[m - 2][n - 1] = 1;
//     if (n > 1)
//         paths[m - 1][n - 2] = 1;

//     function dfs(row, col) {
//         if (row >= m || col >= n)
//             return 0;
//         if (paths[row][col] > 0)
//             return paths[row][col];

//         const downPaths = dfs(row + 1, col);
//         const rightPaths = dfs(row, col + 1);

//         paths[row][col] = downPaths + rightPaths;

//         return paths[row][col];
//     }

//     return dfs(0, 0);
// }

module.exports = uniquePaths;