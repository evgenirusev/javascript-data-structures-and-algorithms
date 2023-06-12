/**
 * https://leetcode.com/problems/merge-two-sorted-lists
 * Time complexity - O(N + M)
 * Space complexity - O(1)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    const tempHead = new ListNode(-1);

    let prev = tempHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }

    prev.next = l1 === null ? l2 : l1;

    return tempHead.next;
}

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = mergeTwoLists;