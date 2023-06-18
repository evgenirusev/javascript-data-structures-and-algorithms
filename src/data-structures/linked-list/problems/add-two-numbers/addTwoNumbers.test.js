const { ListNode, addTwoNumbers } = require('./addTwoNumbers');

describe("addTwoNumbers", () => {
    it("should return the sum of two single-digit numbers", () => {
      const l1 = new ListNode(2);
      const l2 = new ListNode(3);
      const expected = new ListNode(5);
      expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
  
    it("should return the sum of two multi-digit numbers", () => {
      const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
      const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
      const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
      expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
  
    it("should handle the sum of two lists with leading zeros", () => {
      const l1 = new ListNode(0);
      const l2 = new ListNode(0);
      const expected = new ListNode(0);
      expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
});