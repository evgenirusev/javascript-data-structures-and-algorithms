const countingSort = require("./countingSort");

describe("countingSort", () => {
    it("should sort the array", () => {
        const arr = [3, 2, 1];

        expect(countingSort(arr)).toEqual([1, 2, 3]);
    });
});