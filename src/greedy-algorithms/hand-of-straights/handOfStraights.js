/**
 * https://leetcode.com/problems/hand-of-straights/
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 * 
 * Time complexity - O(n*k)
 * Space complexity - O(n*k)
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0)
        return false;

    const groups = Array.from({ length: hand.length / groupSize }, () => []);
    hand.sort((a, b) => a - b);

    for (let i = 0; i < hand.length; i++) {
        let addedCardToGroup = false;

        let j = 0;
        while (!addedCardToGroup && j < groups.length) {
            let group = groups[j];

            if (group.length === 0 || (group[group.length - 1] + 1 === hand[i] && hand[i] - group[0] < groupSize)) {
                group.push(hand[i]);
                addedCardToGroup = true;
            }

            j++;
        }

        if (!addedCardToGroup) {
            return false;
        }
    }

    return true;
};

module.exports = isNStraightHand;