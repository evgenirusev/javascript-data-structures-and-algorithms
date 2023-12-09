const hasPathSum = require('./pathSum');

describe("hasPathSum", () => {
    it('returns true when there is a path with the given sum', () => {
        const root = {
            val: 5,
            left: {
                val: 4,
                left: {
                    val: 11,
                    left: { val: 7, left: null, right: null },
                    right: { val: 2, left: null, right: null }
                },
                right: null
            },
            right: {
                val: 8,
                left: { val: 13, left: null, right: null },
                right: { val: 4, left: null, right: { val: 1, left: null, right: null } }
            }
        };

        const sum = 22;

        const result = hasPathSum(root, sum);

        expect(result).toBe(true);
    });

    it('returns false when there is no path with the given sum', () => {
        const root = {
            val: 1,
            left: { val: 2, left: null, right: null },
            right: { val: 3, left: null, right: null }
        };

        const sum = 5;

        const result = hasPathSum(root, sum);

        expect(result).toBe(false);
    });

    it('returns false for an empty tree', () => {
        const root = null;
        const sum = 10;

        const result = hasPathSum(root, sum);

        expect(result).toBe(false);
    });
});
