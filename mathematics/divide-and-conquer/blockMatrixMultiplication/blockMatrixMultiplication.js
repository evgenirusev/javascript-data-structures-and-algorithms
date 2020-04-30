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

        const ae = multiply(a, e, size / 2);
        const bg = multiply(b, g, size / 2);
        const af = multiply(a, f, size / 2);
        const bh = multiply(b, h, size / 2);

        const ce = multiply(c, e, size / 2);
        const dg = multiply(d, g, size / 2);
        const cf = multiply(c, f, size / 2);
        const dh = multiply(d, h, size / 2);

        const c1 = addMatrices(ae, bg);
        const c2 = addMatrices(af, bh);
        const c3 = addMatrices(ce, dg);
        const c4 = addMatrices(cf, dh);

        for (let row = 0; row < size / 2; row++) {
            for (let col = 0; col < size / 2; col++) {
                result[row][col] = c1[row][col];
                result[row][col + size / 2] = c2[row][col];
                result[row + size / 2][col] = c3[row][col];
                result[row + size / 2][col + size / 2] = c4[row][col];
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