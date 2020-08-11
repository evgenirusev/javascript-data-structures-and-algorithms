function rotateArray(array, rotationsCount) { 
    for (let i = 0; i < rotationsCount; i++) {
        const lastIndex = array.length - 1;
        const lastValue = array[lastIndex];

        for (let j = lastIndex; j > 0; j--) {
            array[j] = array[j - 1];
        }

        array[0] = lastValue;
    }

    return array;
}

module.exports = rotateArray;
