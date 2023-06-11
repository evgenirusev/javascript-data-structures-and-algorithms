/**
 * https://leetcode.com/problems/reverse-linked-list/editorial/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        const temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
  
    return prev;
};
  
module.exports = reverseList;