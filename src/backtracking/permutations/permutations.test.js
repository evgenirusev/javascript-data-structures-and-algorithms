const permutations = require('./permutations')

describe("permutations", () => {
    it("returns all possible permutations for an array with distinct integers", () => {
        expect(permutations([1, 2, 3])).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });

    it("returns all possible permutations for an array with two distinct integers", () => {
        expect(permutations([0, 1])).toEqual([
            [0, 1],
            [1, 0],
        ]);
    });

    it("returns the same array as the only possible permutation for an array with one integer", () => {
        expect(permutations([1])).toEqual([[1]]);
    });
});