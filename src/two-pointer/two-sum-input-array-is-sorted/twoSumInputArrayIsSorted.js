/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSumInputArrayIsSorted(numbers, target) {
    let i = 0, j = numbers.length - 1;
    let sum = numbers[i] + numbers[j];
    while (sum != target) {
        if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        }

        sum = numbers[i] + numbers[j];
    }

    return [i + 1, j + 1];
};

module.exports = twoSumInputArrayIsSorted;