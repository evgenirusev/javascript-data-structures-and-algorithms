const strassenMatrixMultiplication = require("./strassenMatrixMultiplication");

describe("strassenMatrixMultiplication", () => {
    it("should multiply the even matrices correctly", () => {
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

    it("should multiply the odd matrices correctly", () => {
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

        expect(iterativeMatrixMultiplication(m1, m2)).toEqual(
            [
                [30, 23, 19],
                [84, 65, 58],
                [138, 107, 97]
            ]
        );
    });

    it("should multiply the odd matrices correctly", () => {
        const m1 = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];
        const m2 = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ];

        expect(iterativeMatrixMultiplication(m1, m2)).toEqual(
            [
                [90, 100, 110, 120],
                [202, 228, 254, 280],
                [314, 356, 398, 440],
                [426, 484, 542, 600]
            ]
        );
    });
});