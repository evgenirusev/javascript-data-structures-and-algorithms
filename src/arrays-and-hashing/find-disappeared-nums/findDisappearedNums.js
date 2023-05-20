// In place state management solution - O(n) time and O(1) space
function findDisappearedNumbers(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]);
        nums[num - 1] = -Math.abs(nums[num - 1]);
    }

    const disappearedNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (Math.sign(nums[i]) > 0) {
            disappearedNums.push(i + 1);
        }
    }

    return disappearedNums;
}

// Hashing solution - O(n) time and O(n) space
// function findDisappearedNumbers(nums) {
//     const disappearedNums = [];
//     const highestNum = nums.length;
//     const set = new Set(nums);

//     for (let i = 1; i <= highestNum; i++) {
//         if (!set.has(i)) {
//             disappearedNums.push(i);
//         }
//     }

//     return disappearedNums;
// }

module.exports = findDisappearedNumbers;