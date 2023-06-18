/**
 * https://leetcode.com/problems/add-two-numbers
 * Time complexity - O(n + m)
 * Space complexity - O(1) (excluding result)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultHead = new ListNode(-1);
    let prev = resultHead;
    let carry = 0;
    while (l1 || l2 || carry) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const sum = l1Val + l2Val + carry;
        carry = sum > 9 ? 1 : 0;
        
        const curr = new ListNode();
        prev.next = curr;
        curr.val = sum % 10;
        prev = curr;

        if (l1)
            l1 = l1.next;

        if (l2)
            l2 = l2.next;
    }

    resultHead = resultHead.next;

    return resultHead;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

module.exports = { ListNode, addTwoNumbers }