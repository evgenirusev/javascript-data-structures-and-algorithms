const isBalanced = require('./isBalanced');

describe('isBalanced', () => {
    it('should return true for a balanced tree', () => {
        const root = {
            val: 3,
            left: {
                val: 9,
                left: null,
                right: null
            },
            right: {
                val: 20,
                left: {
                    val: 15,
                    left: null,
                    right: null
                },
                right: {
                    val: 7,
                    left: null,
                    right: null
                }
            }
        };
        expect(isBalanced(root)).toBe(true);
    });

    it('should return false for an unbalanced tree', () => {
        const root = {
            val: 1,
            left: {
                val: 2,
                left: {
                    val: 3,
                    left: {
                        val: 4,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        };
        expect(isBalanced(root)).toBe(false);
    });
});
