/**
 * DFS approach
 * Time complexity - O(N * 2N)
 * Space complexity - O(N * 2N)
 * https://leetcode.com/problems/subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const res = [];
    const subset = [];

    function dfs(i) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        
        subset.push(nums[i]);
        dfs(i + 1);
        
        subset.pop();
        dfs(i + 1);
    }

    dfs(0);
    return res;
}

/*
* Cascading solution
* Time complexity - O(N * 2N)
* Space complexity - O(N * 2N)
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