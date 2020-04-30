function iterativeMatrixMultiplication(m1, m2) {
    const matrixSize = m1.length;

    const result = [...Array(m1.length)].map(e => Array(m1.length).fill(0));

    for (let row = 0; row < matrixSize; row++) {
        for (let col = 0; col < matrixSize; col++) {
            for (let i = 0; i < matrixSize; i++) {
                result[row][col] += m1[row][i] * m2[i][col];
            }
        }
    }

    return result;
}

module.exports = iterativeMatrixMultiplication;