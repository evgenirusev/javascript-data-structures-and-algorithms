function countingSort(array) {
    const maxValue = Math.max(...array);

    const countArray = new Array(maxValue + 1).fill(0);

    array.forEach(num => {
        countArray[num]++;
    });

    for (let i = 1; i < countArray.length; i++) {
        countArray[i] = countArray[i] + countArray[i - 1];
    }

    for (let i = array.length - 1; i > 0; i++) {
        array[i] = countArray[array[i]];
    }

    return array;
}

module.exports = countingSort;