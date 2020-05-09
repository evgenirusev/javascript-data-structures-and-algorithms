const quickSort = require("./quickSort");
const isSortingAlgorithmValid = require("../../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../../mocks/arrayFactoryUtils");

describe("quickSort ", () => {
    function generateSortingTest(arr, cmp) {
        it("should quickSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(quickSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            generateSortingTest(generateArray());
        });
});