function radixSort(array) {
    const maxValue = Math.max(...array);

    for (let divider = 1; divider <= maxValue; divider *= 10) {
        const output = [];
        let maxDigit = 0;

        array.forEach(num => {
            const currentDigit = getCurrentDigit(num, divider);
            if (currentDigit > maxDigit) {
                maxDigit = currentDigit;
            }
        });

        const countArray = new Array(maxDigit + 1).fill(0);

        array.forEach(num => {
            const currentDigit = getCurrentDigit(num, divider);
            countArray[currentDigit]++;
        });

        for (let i = 1; i < countArray.length; i++) {
            countArray[i] += countArray[i - 1];
        }

        for (let i = array.length - 1; i >= 0; i--) {
            const currentDigit = getCurrentDigit(array[i], divider);
            output[countArray[currentDigit] - 1] = array[i];
            countArray[currentDigit] -= 1;
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