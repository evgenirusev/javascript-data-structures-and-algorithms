function iterativeMatrixMultiplication(m1, m2) {
    const result = [...Array(m1.length)].map(e => Array(m1.length).fill(0));

    for (let row = 0; row < m1.length; row++) {
        for (let col = 0; col < m1[row].length; col++) {
            for (let i = 0; i < m1[row].length; i++) {
                result[row][col] += m1[row][i] * m2[i][col];
            }
        }
    }

    return result;
}

module.exports = iterativeMatrixMultiplication;