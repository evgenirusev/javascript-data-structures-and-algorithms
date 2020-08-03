function rotateArray(array, rotationsCount) { 
    let clonedArray = [...array];
    for (let i = 0; i < array.length; i++) {
        let rotatedValueIndex = i - rotationsCount;

        if (rotatedValueIndex < 0) {
            rotatedValueIndex = array.length + rotatedValueIndex;
        }

        array[i] = clonedArray[rotatedValueIndex];
    }

    return array;
}

module.exports = rotateArray;
