/**
 * https://leetcode.com/problems/3sum
 * Solution using sorting and 2Sum subproblems
 * Time complexity - O(n^2)
 * Space complexity - O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let L = 0; L < nums.length && nums[L] <= 0; L++) {
        if (L == 0 || nums[L] !== nums[L - 1]) {
            let M = L + 1, R = nums.length - 1;

            while (M < R) {
                const sum = nums[L] + nums[M] + nums[R];
                if (sum > 0) {
                    R--;
                } else if (sum < 0) {
                    M++;
                } else {
                    result.push([nums[L], nums[M++], nums[R--]]);

                    while (M < R && nums[M] == nums[M - 1])
                        M++;
                }
            }
        }
    }
    
    return result;
};

// Cases:
// [0,0,0]
// [-1,0,0,2]
// [-4,-1,-1,0]
// [-4,-1,-1,0,1,2,4]
// [-4,-1,-1,0,0,0,1,2,7,9,10,20]

// Breaking down the problem:
// When to update pointers:
    // If sum(L, M, R) >= 0 -> decrement R
    // If sum(L, M, R) < 0 -> increment M
// Base cases for M:
    // M < R
// Base cases for L:
    // L > 0

module.exports = threeSum;
