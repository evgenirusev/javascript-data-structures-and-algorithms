function strassenMatrixMultiplication(m1, m2) {

    // TODO: handle odd matrices with iterative version

    const resultMatrix = [...Array(m1.length)].map(e => Array(m1.length).fill(0));

    

    return resultMatrix;
}

function multiply(m1, m2, resultMatrix, row, col, n) {
    if (n <= 2) {
        resultMatrix[row][col] = m1[row][col] * m2[row][col] + m1[row][col+1] * m2[row + 1][col];
        resultMatrix[row][col + 1] =  m1[row][col] * m2[row][col + 1] + m1[row][col + 1] * m2[row + 1][col + 1];
        resultMatrix[row + 1][col] = m1[row + 1][col] * m2[row][col] + m1[row + 1][col + 1] * m2[row + 1][col];
        resultMatrix[row + 1][col + 1] = m1[row + 1][col] * m2[row][col + 1] + m1[row + 1][col + 1] * m2[row + 1][col + 1];
    } else {
        
    }
}

module.exports = strassenMatrixMultiplication;