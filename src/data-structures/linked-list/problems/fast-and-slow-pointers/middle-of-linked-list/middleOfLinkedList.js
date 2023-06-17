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
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = middleOfLinkedList;