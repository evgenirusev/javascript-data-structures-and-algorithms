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

module.exports = uniquePaths;