const shellSort = require("./shellSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("shellSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should shellSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(shellSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            generateSortingTest(generateArray());
        });
});
