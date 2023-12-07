/**
 * @param {number[]} nums
 * @return {number}
 * Time complexity - O(n)
 * Space complexity - O(1)
 */
var removeDuplicates = function(nums) {
    let insertIndex = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){  
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    return insertIndex;
};

module.exports = removeDuplicates;