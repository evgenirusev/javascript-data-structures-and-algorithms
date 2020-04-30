const strassenMatrixMultiplication = require("./strassenMatrixMultiplication");

describe("strassenMatrixMultiplication", () => {
    it("should multiply the matrices correctly", () => {
        const m1 = [
            [1, 2],
            [3, 4]
        ];
        const m2 = [
            [5, 6],
            [7, 8]
        ];
        
        expect(strassenMatrixMultiplication(m1, m2)).toEqual(
            [19, 22],
            [43, 50]
        );
    });
});