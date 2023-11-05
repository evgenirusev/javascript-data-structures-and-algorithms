function subsets(nums) {
    nums.sort((a, b) => a - b);
    const subsets = [];
    const currentSubset = [];

    subsetsWithDupHelper(subsets, currentSubset, nums, 0);
    return subsets;
}

function subsetsWithDupHelper(subsets, currentSubset, nums, index) {
    subsets.push([...currentSubset]);

    for (let i = index; i < nums.length; i++) {
        if (i !== index && nums[i] === nums[i - 1]) {
            continue;
        }
        currentSubset.push(nums[i]);
        subsetsWithDupHelper(subsets, currentSubset, nums, i + 1);
        currentSubset.pop();
    }
}

module.exports = subsets;