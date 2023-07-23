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
        
        if (i >= candidates.length || total > target) {
            return;
        }

        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
}

module.exports = combinationSum;