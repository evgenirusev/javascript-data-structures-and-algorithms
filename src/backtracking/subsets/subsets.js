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