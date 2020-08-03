const rotateArray = require("./rotateArray");

describe("rotateArray", () => {
    it("should rotate the array once", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 1))
            .toEqual([6,1,2,3,4,5]);
    });

    it("should rotate the array twice", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6], 2))
            .toEqual([6,1,2,3,4,5]);
    });
});
