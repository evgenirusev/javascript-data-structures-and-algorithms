// https://leetcode.com/problems/missing-number

// XOR approach - O(n) time O(1) space
function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

// Sum approach - O(n) time O(1) space 
// function missingNumber(nums) {
//     let res = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         res += (i - nums[i])
//     }
//     return res;
// }

module.exports = missingNumber;