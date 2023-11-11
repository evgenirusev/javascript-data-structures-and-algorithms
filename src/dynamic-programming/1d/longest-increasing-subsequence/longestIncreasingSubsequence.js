/**
 * https://leetcode.com/problems/longest-increasing-subsequence
 * @param {number[]} nums
 * @return {number}
 * Time complexity = O(n^2)
 * Space complexity = O(n)
 */
function lengthOfLIS(nums) {
    const LIS = Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--)
        for (let j = i + 1; j < nums.length; j++)
            if (nums[i] < nums[j])
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);

    return Math.max(...LIS);
}

module.exports = lengthOfLIS;