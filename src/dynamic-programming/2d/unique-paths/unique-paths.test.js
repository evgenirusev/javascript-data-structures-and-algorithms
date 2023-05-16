const uniquePaths = require('./unique-paths');

describe('uniquePaths', () => {
    it('should return 28', () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });

    it('should return 3', () => {
        expect(uniquePaths(3, 2)).toBe(3);
    });

    it('should return 1', () => {
        expect(uniquePaths(1, 1)).toBe(1);
    });

    it('should return 48620', () => {
        expect(uniquePaths(10, 10)).toBe(48620);
    });
});
