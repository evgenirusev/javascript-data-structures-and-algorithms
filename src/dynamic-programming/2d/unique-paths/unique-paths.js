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

module.exports = uniquePaths;