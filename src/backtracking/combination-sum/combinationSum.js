/**
 * https://leetcode.com/problems/combination-sum
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 
function backtrack(remain, set, start, candidates, results) {
    if (remain === 0) {
        results.push([...set]);
        return;
    } else if (remain < 0)
        return;

    for (let i = start; i < candidates.length; ++i) {
        set.push(candidates[i]);
        backtrack(remain - candidates[i], set, i, candidates, results);
        set.pop();
    }
}

function combinationSum(candidates, target) {
    const results = [];
    const set = [];

    backtrack(target, set, 0, candidates, results);
    return results;
}


// Solution without a for loop (a little confusing relativelly speaking)
// function combinationSum(candidates, target) {
//     const res = [];

//     function dfs(i, cur, total) {
//         if (total === target) {
//             res.push([...cur]);
//             return;
//         }
        
//         if (i >= candidates.length || total > target)
//             return;

//         cur.push(candidates[i]);
//         dfs(i, cur, total + candidates[i]);
//         cur.pop();
//         dfs(i + 1, cur, total);
//     }

//     dfs(0, [], 0);
//     return res;
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