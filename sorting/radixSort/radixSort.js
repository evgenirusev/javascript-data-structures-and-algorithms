const countingSort = require("../countingSort/countingSort");

function radixSort(array) {
    const maxValue = Math.max(...array);

    for (let divider = 1; divider < maxValue; divider += 10) {
        const maxDigit = 9;
        const countArray = new Array(maxDigit).fill(0);

        for (let i = 0; i <= array.length; i++) {
            const currentDigit = getCurrentDigit(array[i], divider);
            countArray[currentDigit]++;
        }
    }

    return array;
}

function getCurrentDigit(number, divider) {
    return Math.floor((number / divider) % 10) || 0;
}

module.exports = countingSort;