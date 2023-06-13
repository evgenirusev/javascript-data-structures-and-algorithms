// https://leetcode.com/problems/reorder-list

/**
 * Array solution (not ideal)
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    const arr = [];

    let curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }

    let RIndex = arr.length - 1;
    let currR = arr[RIndex];
    let currL = head;
    while (currL !== currR) {
        let lNext = currL.next;
        if (currL.next == currR) {
            break;
        }
        currL.next = currR;
        currR.next = lNext;
        currL = lNext;
        currR = arr[--RIndex];
    }
    currR.next = null;

    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

module.exports = { ListNode, reorderList }