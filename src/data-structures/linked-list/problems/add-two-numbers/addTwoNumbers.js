/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultHead = new ListNode(-1);
    let prev = resultHead;
    let remainder = 0;
    while (l1 || l2) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;

        const sum = l1Val + l2Val + remainder;
        remainder = sum > 9 ? 1 : 0;
        
        const curr = new ListNode();
        prev.next = curr;
        curr.val = sum % 10;
        prev = curr;

        if (l1)
            l1 = l1.next;

        if (l2)
            l2 = l2.next;
    }

    if (remainder > 0) {
        prev.next = new ListNode();
        prev.next.val = remainder;
        remainder = 0;
    }

    resultHead = resultHead.next;

    return resultHead;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

module.exports = { ListNode, addTwoNumbers }