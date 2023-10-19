/**
 * https://leetcode.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 * Time complexity - O(n)
 * Space complexity - O(1)
 */
function canJump(nums) {
    let lastPos = nums.length - 1;

    for (let i = lastPos - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }

    return lastPos === 0;
}

module.exports = canJump;