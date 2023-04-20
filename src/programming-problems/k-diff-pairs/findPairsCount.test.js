const findPairsCount = require("./findPairsCount");

describe('findPairsCount', () => {
    it("should have 4 pairs", () => {
        expect(findPairsCount([3, 1, 4, 1, 5], 2))
            .toEqual(2);
    });

    it("should have 0 pairs", () => {
        expect(findPairsCount([1, 3, 1, 5, 4], 20))
            .toEqual(0);
    });
});

