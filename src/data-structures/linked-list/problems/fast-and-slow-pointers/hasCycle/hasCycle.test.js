describe('hasCycle', () => {
    it('returns false for an empty list', () => {
      const head = null;
      expect(hasCycle(head)).toBe(false);
    });
  
    it('returns false for a list with no cycle', () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      expect(hasCycle(head)).toBe(false);
    });
  
    it('returns true for a list with a cycle', () => {
      const head = new ListNode(1);
      head.next = new ListNode(2);
      head.next.next = new ListNode(3);
      head.next.next.next = head.next; // create a cycle
      expect(hasCycle(head)).toBe(true);
    });
});