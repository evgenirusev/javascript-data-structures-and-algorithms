const convertBST = require('./convertBstToGreaterTree');

describe("convertBST", () => {
    it('should return null for an empty tree', () => {
        const result = convertBST(null);
        expect(result).toBeNull();
    });

    it('should convert a single-node tree', () => {
        const root = { val: 5, left: null, right: null };
        const result = convertBST(root);
        expect(result).toEqual({ val: 5, left: null, right: null });
    });

    it('should convert a tree with multiple nodes', () => {
        const root = {
            val: 5,
            left: { val: 2, left: null, right: null },
            right: { val: 13, left: null, right: null }
        };
        const result = convertBST(root);
        expect(result).toEqual({
            val: 18,
            left: { val: 20, left: null, right: null },
            right: { val: 13, left: null, right: null }
        });
    });
});
