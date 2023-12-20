function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let left = 0;
    let right = nums[n - 1] - nums[0];

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (countValidPairs(nums, mid) >= p) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function countValidPairs(nums, threshold) {
    let index = 0;
    let count = 0;

    while (index < nums.length - 1) {
        if (nums[index + 1] - nums[index] <= threshold) {
            count++;
            index++;
        }
        index++;
    }

    return count;
}

module.exports = minimizeMax;