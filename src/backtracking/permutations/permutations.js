// https://leetcode.com/problems/permutations/

function permutations(nums) {
    const result = [];
    backtrack([], nums, result);
    return result;
}

function backtrack(curr, nums, result) {
    if (curr.length === nums.length) {
        result.push([...curr]);
        return;
    }
  
    for (let i = 0; i < nums.length; i++) {
        if (curr.includes(nums[i]))
            continue;

        curr.push(nums[i]);
        backtrack(curr, nums, result);
        curr.pop();
    }
}  

module.exports = permutations;
