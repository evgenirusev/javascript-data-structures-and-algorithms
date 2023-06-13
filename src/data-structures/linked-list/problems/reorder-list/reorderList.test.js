const reorderList = require('./reorderList');

describe("reorderList", () => {
  it('should reorder the list correctly', () => {
    // Create the list: 1 -> 2 -> 3 -> 4 -> 5
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    // Reorder the list: 1 -> 5 -> 2 -> 4 -> 3
    const expected = new ListNode(1);
    expected.next = new ListNode(5);
    expected.next.next = new ListNode(2);
    expected.next.next.next = new ListNode(4);
    expected.next.next.next.next = new ListNode(3);

    expect(reorderList(head)).toEqual(expected);
  });

  it('should handle an empty list', () => {
    const head = null;
    expect(reorderList(head)).toBeNull();
  });

  it('should handle a list with a single node', () => {
    const head = new ListNode(1);
    expect(reorderList(head)).toEqual(head);
  });
});
