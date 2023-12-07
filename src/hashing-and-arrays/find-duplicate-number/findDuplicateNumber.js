var findDuplicate = function(nums) {
    const temp = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);

        if (nums[num - 1] < 0)
            return num;
        
        nums[num - 1] = -nums[num - 1];
    }

    return temp;
};

module.exports = findDuplicate;