// https://leetcode.com/problems/permutations/
// Space complexity - O(N!)
// Exclude index approach:
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

// Swap approach:
// function backtrack(n, nums, output, first) {
//     if (first === n) {
//         output.push([...nums]);
//     }
      
//     for (let i = first; i < n; i++) {
//         [nums[first], nums[i]] = [nums[i], nums[first]];
//         backtrack(n, nums, output, first + 1);
//         [nums[first], nums[i]] = [nums[i], nums[first]];
//     }
// }
  
// function permute(nums) {
//     const output = [];

//     const numbersList = [...nums];
  
//     const n = nums.length;
//     backtrack(n, numbersList, output, 0);
//     return output;
// }

module.exports = permutations;
