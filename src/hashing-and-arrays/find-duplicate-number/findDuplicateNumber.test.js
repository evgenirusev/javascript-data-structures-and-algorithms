const findDuplicate = require('./findDuplicateNumber');

describe("findDuplicate", () => {
    it('should return the correct duplicate element when the array contains one duplicate', () => {
        const inputArray = [1, 3, 4, 2, 2];
        const result = findDuplicate(inputArray);
        expect(result).toBe(2);
    });

    it('should return the correct duplicate element when the array contains multiple duplicates', () => {
        const inputArray = [3, 1, 3, 4, 2];
        const result = findDuplicate(inputArray);
        expect(result).toBe(3);
    });

    it('should return the correct duplicate element when the array contains zero as a duplicate', () => {
        const inputArray = [2, 2, 2, 2, 2];
        const result = findDuplicate(inputArray);
        expect(result).toBe(2);
    });

    it('should return the correct duplicate element when the array contains both positive and negative numbers', () => {
        const inputArray = [1, -3, 4, 2, -2];
        const result = findDuplicate(inputArray);
        expect(result).toBe(2);
    });
});
