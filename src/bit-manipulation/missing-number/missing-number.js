// https://leetcode.com/problems/missing-number

function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

// Sum approach - O(n) time O()
// function missingNumber(nums) {
//     let indexSum = 0;
//     let numsSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         indexSum += i;
//         numsSum += nums[i];
//     }
//     indexSum += nums.length;
//     return indexSum - numsSum;
// };

module.exports = missingNumber;