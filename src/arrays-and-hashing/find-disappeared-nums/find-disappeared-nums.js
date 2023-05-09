function findDisappearedNumbers(nums) {
    const disappearedNums = [];
    const highestNum = nums.length;
    const set = new Set(nums);

    for (let i = 1; i <= highestNum; i++) {
        if (!set.has(i)) {
            disappearedNums.push(i);
        }
    }

    return disappearedNums;
}

module.exports = findDisappearedNumbers;