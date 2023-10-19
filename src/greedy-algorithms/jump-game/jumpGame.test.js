const canJump = require('./jumpGame');

describe("canJump", () => {
    it('returns true when the input array allows reaching the last index', () => {
        const nums = [2, 3, 1, 1, 4];
        expect(canJump(nums)).toBe(true);
    });

    it('returns false when the input array does not allow reaching the last index', () => {
        const nums = [3, 2, 1, 0, 4];
        expect(canJump(nums)).toBe(false);
    });

    it('returns true when the input array has only one element', () => {
        const nums = [0];
        expect(canJump(nums)).toBe(true);
    });

    it('returns true when the input array has two elements and the first element is greater than 0', () => {
        const nums = [2, 0];
        expect(canJump(nums)).toBe(true);
    });

    it('returns false when the input array has two elements and the first element is 0', () => {
        const nums = [0, 2];
        expect(canJump(nums)).toBe(false);
    });
});
