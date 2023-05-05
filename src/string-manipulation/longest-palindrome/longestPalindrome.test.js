const longestPalindrome = require("./longestPalindrome");

describe("longestPalindrome", () => {
    it("returns 0 for an empty string", () => {
        expect(longestPalindrome("")).toEqual(0);
    });
  
    it("returns 1 for a string with a single character", () => {
         expect(longestPalindrome("a")).toEqual(1);
    });
  
    it("returns the correct length for a palindrome with even number of characters", () => {
         expect(longestPalindrome("racecar")).toEqual(7);
    });
  
    it("returns the correct length for a palindrome with odd number of characters", () => {
         expect(longestPalindrome("level")).toEqual(5);
    });
  
    it("returns the correct length for a string with repeated characters", () => {
         expect(longestPalindrome("ccc")).toEqual(3);
    });
});