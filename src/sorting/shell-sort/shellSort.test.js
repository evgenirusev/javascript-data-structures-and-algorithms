const shellSort = require("./shellSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("shellSort", () => {
    it("should sort the array", () => {
        expect(shellSort([9, 8, 3, 7, 5, 6, 4, 1]))
            .toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
    });
});
