/**
 * https://leetcode.com/problems/combination-sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const res = [];

    function dfs(i, cur, total) {
        if (total === target) {
            res.push([...cur]);
            return;
        }
        
        if (i >= candidates.length || total > target)
            return;

        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
}

// My initial solution:
// function combinationSum(candidates, target) {
//     const result = []
//     backtrack(result, [], 0, 0, candidates, target);
//     return result;
// }

// function backtrack(result, subset, sum, i, candidates, target) {
//     for (let j = i; j < candidates.length; j++) {
//         subset.push(candidates[j]);
//         sum += candidates[j];

//         if (sum > target) {
            
//         } else if (sum === target) {
//             result.push([...subset]);
//         } else {
//             backtrack(result, subset, sum, j, candidates, target);
//         }

//         sum -= candidates[j];
//         subset.pop();
//     }
// }

// Another solution that I came up with on my 3rd try:
// function combinationSum(candidates, target) {
//     const res = [];
//     const set = [];

//     function dfs(i) {
//         if (set.reduce((acc, curr) => acc + curr, 0) === target) {
//             res.push([...set]);
//             return;
//         }

//         if (sum(set) > target || i >= candidates.length)
//             return;

//         for (let j = i; j < candidates.length; j++) {
//             set.push(candidates[j]);
//             dfs(j);
//             set.pop();
//         }
//     }

//     dfs(0);

//     return res;
// }

module.exports = combinationSum;