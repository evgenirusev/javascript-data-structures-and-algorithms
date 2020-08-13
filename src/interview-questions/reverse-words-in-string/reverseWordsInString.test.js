const reverseWordsInString = require("./reverseWordsInString");

describe('reverseWordsInString', () => {
    it("should correctly reverse odd amout of strings", () => {
        const str = "ab abc abcd";
        expect(reverseWordsInString(str)).toEqual("abcd abc ab");
    });
    

    it("should correctly reverse even amount of strings", () => {
        const str = "ab abc abcd 123";
        expect(reverseWordsInString(str)).toEqual("123 abcd abc ab");
    });
});

