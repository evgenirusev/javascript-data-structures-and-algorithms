function blockMatrixMultiplication(m1, m2) {
    // todo handle with n === odd


}

function multiply(matrix1, matrix2, size) {
    const result = initMatrix(size);
    if (size === 1) {
        return matrix1[0][0] + matrix2[0][0];
    } else {
        const { a, b, c, d, e, f, g, h } = createSubMatrices(size / 2);

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (row < size / 2 & col < size / 2) {
                    a[row][col] = matrix1[row][col];
                    e[row][col] = matrix2[row][col];
                } else if (row < size / 2 && col >= size / 2) {
                    b[row][col - size / 2] = matrix1[row][col];
                    f[row][col - size / 2] = matrix2[row][col];
                } else if (row >= size / 2 && col < size / 2) {
                    c[row - size / 2][col] = matrix1[row][col];
                    g[row - size / 2][col] = matrix2[row][col];
                } else {
                    d[row - size / 2][col - size / 2] = matrix1[row][col];
                    h[row - size / 2][col - size / 2] = matrix2[row][col];
                }
            }
        }
    }

    return result;
}

function createSubMatrices(size) {
    return Object.values({ a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null })
        .map(matrix => initMatrix(size));
}

function initMatrix(size) {
    return [...Array(size)].map(e => Array(size).fill(0));
}

module.exports = blockMatrixMultiplication;