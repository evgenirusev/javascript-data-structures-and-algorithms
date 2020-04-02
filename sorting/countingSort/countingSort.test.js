const countingSort = require("./countingSort");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("countingSort", () => {
    it("should sort two element array", () => {
        expect(countingSort(arrayFactoryUtils.getTwoElementArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });

    it("should sort the array", () => {
        expect(countingSort(arrayFactoryUtils.getUnsortedArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });

    it("should sort a reversed array", () => {
        expect(countingSort(arrayFactoryUtils.getReverseArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });
});