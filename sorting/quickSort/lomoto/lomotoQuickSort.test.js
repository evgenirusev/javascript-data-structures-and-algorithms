const lomotoQuickSort = require("./lomotoQuickSort");
const isSortingAlgorithmValid = require("../../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../../mocks/arrayFactoryUtils");

describe("lomotoQuickSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should lomotoQuickSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(lomotoQuickSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            generateSortingTest(generateArray());
        });
});