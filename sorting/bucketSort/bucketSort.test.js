const bucketSort = require("./bucketSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("bucketSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should bucketSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(bucketSort, arr, cmp)
            ).toBe(true);
        });
    }

    generateSortingTest(arrayFactoryUtils.getUnsortedArray());

    generateSortingTest(arrayFactoryUtils.getTwoElementArray());

    generateSortingTest(arrayFactoryUtils.getReverseArray());

    generateSortingTest(arrayFactoryUtils.getOneElementArray());

    generateSortingTest(arrayFactoryUtils.getEqualArray());

    generateSortingTest(arrayFactoryUtils.getSortedArray());

    const customArray = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19, 50, 61, 62, 63, 55, 52, 53, 72, 85, 43, 33, 68, 100, 95, 84, 73];
    generateSortingTest(customArray);
});