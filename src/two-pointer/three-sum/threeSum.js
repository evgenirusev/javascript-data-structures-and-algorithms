/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // [0,0,0]
    // [-1,0,0,2]
    // [-4,-1,-1,0]
    // [-4,-1,-1,0,1,2,4]
    // [-4,-1,-1,0,0,0,1,2,7,9,10,20]

    // When to update pointers:
        // If sum(L, M, R) >= 0 -> decrement R
        // If sum(L, M, R) < 0 -> increment M
    // Base cases for M:
        // M < R
    // Base cases for L:
        // L > 0

    nums.sort((a, b) => a - b);
    const usedCombinations = new Set();

    //  [-1, -1, -4, 0, 1, 2]
    const result = [];
    let L = 0;
    let M = 1;
    let R = nums.length - 1;
    while (nums[L] <= 0) {
        while (M < R) {
            const sum = nums[L] + nums[M] + nums[R];
            if (sum === 0) {
                const combo = `${nums[L]}${nums[M]}${nums[R]}`;
                if (!usedCombinations.has(combo)) {
                    result.push([nums[L], nums[M], nums[R]]);
                    usedCombinations.add(combo);
                }

                M++; // R-- it's the same
            } else if (sum > 0) {
                R--;
            } else if (sum < 0) {
                M++;
            }
        }

        L++;
        M = L + 1;
        R = nums.length - 1;
    }

    return result;
};

module.exports = threeSum;
