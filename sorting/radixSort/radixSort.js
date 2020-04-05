const countingSort = require("../countingSort/countingSort");

function radixSort(array) {
    const maxValue = Math.max(...array);

    for (let divider = 1; divider < maxValue; divider += 10) {
        // todo
    }
}

function getCurrentDigit(number, divider) {
    return Math.floor((number / divider) % 10);
}

module.exports = countingSort;