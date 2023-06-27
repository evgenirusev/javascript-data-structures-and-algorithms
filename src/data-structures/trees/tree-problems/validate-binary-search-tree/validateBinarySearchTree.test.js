const isValidBST = require('./validateBinarySearchTree');

describe('isValidBST', () => {
    it('returns true for a valid binary search tree', () => {
      // Define the test input
      const root = {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
      };
  
      // Call the function under test
      const result = isValidBST(root);
  
      // Assert the result
      expect(result).toBe(true);
    });
  
    it('returns false for an invalid binary search tree', () => {
      // Define the test input
      const root = {
        val: 5,
        left: { val: 1, left: null, right: null },
        right: {
          val: 4,
          left: { val: 3, left: null, right: null },
          right: { val: 6, left: null, right: null }
        }
      };
  
      // Call the function under test
      const result = isValidBST(root);
  
      // Assert the result
      expect(result).toBe(false);
    });
  });
  