const reverseList = require('./reverseLinkedList');

describe('reverseList', () => {
    it('should reverse a list with multiple nodes', () => {
      // Create a sample linked list
      const head = {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      };
  
      // Reverse the list
      const reversed = reverseList(head);
  
      // Assertions
      expect(reversed.val).toBe(3);
      expect(reversed.next.val).toBe(2);
      expect(reversed.next.next.val).toBe(1);
      expect(reversed.next.next.next).toBeNull();
    });
  
    it('should return null for an empty list', () => {
      const reversed = reverseList(null);
      expect(reversed).toBeNull();
    });
  
    it('should return the same list for a single node', () => {
      const head = { val: 1, next: null };
      const reversed = reverseList(head);
      expect(reversed).toBe(head);
    });
  });
  