const lsd = require("./lsd");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("lsd", () => {
    it("should sort two element array", () => {
        expect(lsd([3, 2, 1]))
            .toEqual([1, 2, 3]);
    });

    it("should sort two element array", () => {
        expect(lsd(arrayFactoryUtils.getTwoElementArray()))
            .toEqual([1, 2]);
    });

    it("should sort the array", () => {
        expect(lsd(arrayFactoryUtils.getUnsortedArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });

    it("should sort two element array", () => {
        expect(lsd(arrayFactoryUtils.getLargeNumberArray()))
            .toEqual(arrayFactoryUtils.getSortedLargeNumberArray());
    });
});