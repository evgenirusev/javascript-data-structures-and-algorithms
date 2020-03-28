const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const arrayMocksFactory = require("../../mocks/arrayFactoryReferenceSafe");

describe("mergeSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should mergeSort the array correctly", () => {
            expect(
                testSortingUtil(mergeSort, arr, cmp)
            ).toBe(true);
        });
    }
    
    generateSortingTest(arrayMocksFactory.unsortedArray);
    generateSortingTest(arrayMocksFactory.sortedArray);
    generateSortingTest(arrayMocksFactory.reverseArray);
    generateSortingTest(arrayMocksFactory.equalArray);
    generateSortingTest(arrayMocksFactory.negativeArray);
    generateSortingTest(arrayMocksFactory.negativeSortedArray);

    const desc = (a, b) => b - a;
    generateSortingTest(arrayMocksFactory.unsortedArray, desc);
});