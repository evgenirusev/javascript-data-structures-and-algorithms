/**
 * https://leetcode.com/problems/middle-of-the-linked-list
 * Fast and slow pointer solution
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleOfLinkedList(head) {
    let slow = head;
    let fast = head.next;

    while (fast != null) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
    }

    return slow;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = middleOfLinkedList;