const iterativeMatrixMultiplication = require("./iterativeMatrixMultiplication");

describe("iterativeMatrixMultiplication", () => {
    it("should multiply the matrices correctly", () => {
        const m1 = [
            [1, 2],
            [3, 4]
        ];
        const m2 = [
            [5, 6],
            [7, 8]
        ];

        expect(iterativeMatrixMultiplication(m1, m2)).toEqual(
            [
                [19, 22],
                [43, 50]
            ]
        );
    });
});