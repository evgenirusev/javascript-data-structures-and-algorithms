/**
 * https://leetcode.com/problems/house-robber-ii
 * @param {number[]} nums
 * @return {number}
 * Time complexity - O(n)
 * Space complexity - O(1)
 */
function rob(nums) {
    if (nums.length === 0 || nums === null) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(robHouses(nums.slice(0, -1)), robHouses(nums.slice(1)));
}

function robHouses(nums) {
    let t1 = 0;
    let t2 = 0;
    for (const current of nums) {
        const temp = t1;
        t1 = Math.max(current + t2, t1);
        t2 = temp;
    }

    return t1;
}

module.exports = rob;