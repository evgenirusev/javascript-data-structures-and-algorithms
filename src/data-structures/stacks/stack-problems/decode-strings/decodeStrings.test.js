const decodeString = require('./decodeStrings');

describe("decodeString", () => {
    it('should decode a simple string', () => {
        expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
    });
});