const rotateArray = require("./rotateArray");

describe("rotateArray", () => {
    it("should rotate the array once", () => {
        expect(rotateArray([1, 2, 3, 4, 5, 6]))
            .toBe([6,1,2,3,4,5]);
    });
});
