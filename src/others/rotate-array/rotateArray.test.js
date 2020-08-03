const rotateArray = require("./rotateArray");

describe("rotateArray", () => {
    it("should rotate the array by 1", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 1))
            .toEqual([6,1,2,3,4,5]);
    });

    it("should rotate the array by 2", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 2))
            .toEqual([5, 6, 1, 2, 3, 4]);
    });

    it("should rotate the array by 3", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 3))
            .toEqual([4, 5, 6, 1, 2, 3]);
    });

    it("should rotate the array by 3", () => {
        expect(rotateArray([1, 2], 3))
            .toEqual([1, 2]);
    });
});
