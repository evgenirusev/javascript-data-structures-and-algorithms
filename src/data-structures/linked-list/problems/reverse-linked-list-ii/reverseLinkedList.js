/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * Time complexity - O(n)
 * Space completixy - O(1)
 */
var reverseBetween = function(head, left, right) {
    if (!head || left === right)
        return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 0; i < left - 1; i++)
        prev = prev.next;

    let curr = prev.next;
    let next = null;

    for (let i = 0; i < right - left + 1; i++) {
        const tempNext = curr.next;
        curr.next = next;
        next = curr;
        curr = tempNext;
    }

    prev.next.next = curr;
    prev.next = next;

    return dummy.next;
};

module.exports = reverseBetween;