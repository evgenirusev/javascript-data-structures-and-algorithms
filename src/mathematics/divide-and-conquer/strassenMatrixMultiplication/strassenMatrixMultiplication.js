const iterativeMatrixMultiplication = require("../../iterativeMatrixMultiplication/iterativeMatrixMultiplication");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

function strassenMatrixMultiplication(matrix1, matrix2) {
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
        const { A11, A12, A21, A22, B11, B12, B21, B22 } = createSubMatrices(halfSize);

        for (let row = 0; row < halfSize; row++) {
            for (let col = 0; col < halfSize; col++) {
                A11[row][col] = matrix1[row][col];
                A12[row][col] = matrix1[row][halfSize + col];
                A21[row][col] = matrix1[halfSize + row][col];
                A22[row][col] = matrix1[halfSize + row][halfSize + col];
                B11[row][col] = matrix2[row][col];
                B12[row][col] = matrix2[row][halfSize + col];
                B21[row][col] = matrix2[halfSize + row][col];
                B22[row][col] = matrix2[halfSize + row][halfSize + col];
            }
        }

        const addMatrix = (m1, m2) => matrixOperation(add, m1, m2, halfSize);
        const subtractMatrix = (m1, m2) => matrixOperation(sub, m1, m2, halfSize);

        const S1 = subtractMatrix(B12, B22);
        const S2 = addMatrix(A11, A12);
        const S3 = addMatrix(A21, A22);
        const S4 = subtractMatrix(B21, B11);
        const S5 = addMatrix(A11, A22);
        const S6 = addMatrix(B11, B22);
        const S7 = subtractMatrix(A12, A22);
        const S8 = addMatrix(B21, B22);
        const S9 = subtractMatrix(A11, A21);
        const S10 = addMatrix(B11, B12);

        const P1 = multiply(A11, S1, halfSize);
        const P2 = multiply(S2, B22, halfSize);
        const P3 = multiply(S3, B11, halfSize);
        const P4 = multiply(A22, S4, halfSize);
        const P5 = multiply(S5, S6, halfSize);
        const P6 = multiply(S7, S8, halfSize);
        const P7 = multiply(S9, S10, halfSize);

        const C11 = subtractMatrix(
            addMatrix(
                addMatrix(P5, P4),
                P6
            ),
            P2
        );
        const C12 = addMatrix(P1, P2);
        const C21 = addMatrix(P3, P4);
        const C22 = subtractMatrix(
            subtractMatrix(
                addMatrix(P5, P1),
                P3
            ),
            P7
        );

        for (let row = 0; row < halfSize; row++) {
            for (let col = 0; col < halfSize; col++) {
                result[row][col] = C11[row][col];
                result[row][col + halfSize] = C12[row][col];
                result[row + halfSize][col] = C21[row][col];
                result[row + halfSize][col + halfSize] = C22[row][col];
            }
        }
    }

    return result;
}

function initMatrix(size) {
    return [...Array(size)].map(e => Array(size).fill(0));
}

function createSubMatrices(size) {
    matrices = { A11: null, A12: null, A21: null, A22: null, B11: null, B12: null, B21: null, B22: null };

    Object.keys(matrices).forEach(matrix => {
        matrices[matrix] = initMatrix(size);
    });

    return matrices;
}

function matrixOperation(operation, matrix1, matrix2) {
    const result = initMatrix(matrix1.length);

    for (let row = 0; row < matrix1.length; row++) {
        for (let col = 0; col < matrix2[0].length; col++) {
            result[row][col] = operation(matrix1[row][col], matrix2[row][col]);
        }
    }

    return result;
}

module.exports = strassenMatrixMultiplication;