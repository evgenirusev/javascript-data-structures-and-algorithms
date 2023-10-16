const numDecodings = require('./decodeWays');

describe("numDecodings", () => {
    it('should return the number of ways to decode a given string', () => {
        expect(numDecodings("12")).toEqual(2);
        expect(numDecodings("226")).toEqual(3);
        expect(numDecodings("0")).toEqual(0);
    });

    it('should handle edge cases', () => {
        expect(numDecodings("10")).toEqual(1);
        expect(numDecodings("01")).toEqual(0);
    });
});
