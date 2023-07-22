/**
 * Cascading solution
 * Time complexity - O(N * 2N)
 * Space complexity - O(N * 2N)
 * https://leetcode.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    let result = [[]];

    nums.forEach(n => {
        let newSubsets = [];
        result.forEach(subset => {
            newSubsets.push([...subset, n]);
        });

        result = [...result, ...newSubsets];
    });

    return result;
}

module.exports = subsets;