/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head)
        return null;
        
    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }

    arr.sort((a, b) => a.val - b.val);

    head = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1];
    }

    if (arr.length > 0)
        arr[arr.length - 1].next = null;

    return head
};

module.exports = sortList;