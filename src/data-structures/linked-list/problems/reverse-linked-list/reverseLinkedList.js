/**
 * https://leetcode.com/problems/reverse-linked-list/editorial/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * Iterative solution
 * Time complexity - O(n)
 * Space complexity - O(1)
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

/**
 * Recursive solution
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return recursive(head, null);
};

function recursive(curr, prev) {
    if (!curr)
        return prev;
    
    const temp = curr.next;
    curr.next = prev;
    prev = curr;

    return recursive(temp, prev);
}

module.exports = reverseList;