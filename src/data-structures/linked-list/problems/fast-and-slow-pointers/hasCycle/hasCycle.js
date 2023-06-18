/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Fast & slow pointers approach
 * Time complexity - O(n)
 * Space complexity - O(1)
 * 
 * Alternative solution - use a hashmap to check for already visited nodes.
 * Space complexity is O(n) though so it's not ideal.
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) 
            return true;
    }

    return false;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

module.exports = { hasCycle, ListNode }