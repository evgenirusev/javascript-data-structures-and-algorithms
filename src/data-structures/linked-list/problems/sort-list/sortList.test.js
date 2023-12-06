const sortList = require('./sortList');

describe("sortList", () => {
    it('should return null for an empty list', () => {
        const result = sortList(null);
        expect(result).toBe(null);
    });

    it('should sort a list in ascending order', () => {
        const input = {
            val: 3,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        };

        const result = sortList(input);

        const expected = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        };

        expect(result).toEqual(expected);
    });

    it('should handle a list with a single element', () => {
        const input = { val: 42, next: null };
        const result = sortList(input);
        expect(result).toEqual(input);
    });
});
