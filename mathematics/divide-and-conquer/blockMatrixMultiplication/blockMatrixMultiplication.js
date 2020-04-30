const iterativeMatrixMultiplication = require("../../iterativeMatrixMultiplication/iterativeMatrixMultiplication");

function blockMatrixMultiplication(matrix1, matrix2) {
    // use iterative approach as a fallback for handling odd matrices
    if (matrix1.length % 2 === 1) {
        return iterativeMatrixMultiplication(matrix1, matrix2);
    }

    return multiply(matrix1, matrix2, matrix1.length);
}

function multiply(matrix1, matrix2, size) {
    const result = initMatrix(size);

    if (size === 1) {
        result[0][0] = matrix1[0][0] * matrix2[0][0];
    } else {
        const halfSize = size / 2;
        const { a, b, c, d, e, f, g, h } = createSubMatrices(halfSize);

        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (row < halfSize & col < halfSize) {
                    a[row][col] = matrix1[row][col];
                    e[row][col] = matrix2[row][col];
                } else if (row < halfSize && col >= halfSize) {
                    b[row][col - halfSize] = matrix1[row][col];
                    f[row][col - halfSize] = matrix2[row][col];
                } else if (row >= halfSize && col < halfSize) {
                    c[row - halfSize][col] = matrix1[row][col];
                    g[row - halfSize][col] = matrix2[row][col];
                } else {
                    d[row - halfSize][col - halfSize] = matrix1[row][col];
                    h[row - halfSize][col - halfSize] = matrix2[row][col];
                }
            }
        }

        const ae = multiply(a, e, halfSize);
        const bg = multiply(b, g, halfSize);
        const af = multiply(a, f, halfSize);
        const bh = multiply(b, h, halfSize);

        const ce = multiply(c, e, halfSize);
        const dg = multiply(d, g, halfSize);
        const cf = multiply(c, f, halfSize);
        const dh = multiply(d, h, halfSize);

        const c1 = addMatrices(ae, bg);
        const c2 = addMatrices(af, bh);
        const c3 = addMatrices(ce, dg);
        const c4 = addMatrices(cf, dh);

        for (let row = 0; row < halfSize; row++) {
            for (let col = 0; col < halfSize; col++) {
                result[row][col] = c1[row][col];
                result[row][col + halfSize] = c2[row][col];
                result[row + halfSize][col] = c3[row][col];
                result[row + halfSize][col + halfSize] = c4[row][col];
            }
        }
    }

    return result;
}

function initMatrix(size) {
    return [...Array(size)].map(e => Array(size).fill(0));
}

function createSubMatrices(size) {
    matrices = { a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null };

    Object.keys(matrices).forEach(matrix => {
        matrices[matrix] = initMatrix(size);
    });

    return matrices;
}

function addMatrices(matrix1, matrix2) {
    const result = initMatrix(matrix1.length);

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix2[0].length; col++) {
            result[row][col] = matrix1[row][col] + matrix2[row][col];
        }
    }

    return result;
}

module.exports = blockMatrixMultiplication;