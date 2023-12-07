// https://leetcode.com/problems/sort-list/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Merge sort approach
 * Time complexity - O(nlogn)
 * Space complexity - O(1)
 */
function sortList(head) {
    if (head == null || head.next == null)
        return head;
    
    let mid = getMid(head);
    let left = sortList(head);
    let right = sortList(mid);
    return merge(left, right);
}

function merge(list1, list2) {
    let dummyHead = new ListNode();
    let tail = dummyHead;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
            tail = tail.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
            tail = tail.next;
        }
    }
    tail.next = (list1 != null) ? list1 : list2;
    return dummyHead.next;
}

function getMid(head) {
    let midPrev = null;
    while (head != null && head.next != null) {
        midPrev = (midPrev == null) ? head : midPrev.next;
        head = head.next.next;
    }
    let mid = midPrev.next;
    midPrev.next = null;
    return mid;
}

// var sortList = function(head) {
//     if (!head)
//         return null;
        
//     const arr = [];
//     let curr = head;
//     while (curr) {
//         arr.push(curr);
//         curr = curr.next;
//     }

//     arr.sort((a, b) => a.val - b.val);

//     head = arr[0];

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i].next = arr[i + 1];
//     }

//     if (arr.length > 0)
//         arr[arr.length - 1].next = null;

//     return head
// };

module.exports = sortList;