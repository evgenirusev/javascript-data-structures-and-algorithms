function radixSort(array) {
    const maxValue = Math.max(...array);

    for (let divider = 1; divider <= maxValue; divider += 10) {
        const output = [];
        let maxDigit = 0;

        array.forEach(num => {
            if (num > maxDigit) {
                maxDigit = num;
            }
        });

        const countArray = new Array(maxDigit).fill(0);

        array.forEach(num => {
            const currentDigit = getCurrentDigit(num, divider);
            countArray[currentDigit]++;
        });

        for (let i = 1; i < countArray.length; i++) {
            countArray[i] += countArray[i - 1];
        }

        for (let i = 1; i < countArray.length; i++) {
            output[countArray[array[i]] - 1] = array[i];
        }

        for (let i = 0; i < array.length; i++) {
            array[i] = output[i];
        }
    }

    return array;
}

function getCurrentDigit(number, divider) {
    return Math.floor((number / divider) % 10) || 0;
}

module.exports = radixSort;