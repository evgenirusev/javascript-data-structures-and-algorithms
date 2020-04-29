const strassenMatrixMultiplication = require("./strassenMatrixMultiplication");

describe("strassenMatrixMultiplication", () => {
    it("should multiply the matrices correctly", () => {
        const m1 = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const m2 = [
            [9, 7, 8],
            [6, 5, 4],
            [3, 2, 1]
        ];
        
        expect(strassenMatrixMultiplication(m1, m2)).toEqual(
            [30, 24, 18],
            [6, 69, 54],
            [138, 114, 90]
        );
    });
});