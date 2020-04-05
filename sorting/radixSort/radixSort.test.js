const radixSort = require("./radixSort");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("radixSort", () => {
    it("should sort two element array", () => {
        expect(radixSort(arrayFactoryUtils.getTwoElementArray()))
            .toEqual([1, 2]);
    });

    it("should sort the array", () => {
        expect(radixSort(arrayFactoryUtils.getUnsortedArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });
});