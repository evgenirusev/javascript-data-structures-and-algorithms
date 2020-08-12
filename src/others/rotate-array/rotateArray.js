function rotateArray(array, rotationsCount) { 
    const auxArray = [...array];
    const lastIndex = array.length - 1;

    for (let i = 0; i < rotationsCount; i++) {
        array[i] = array[array.length - rotationsCount + i];
    }

    for (let i = rotationsCount; i < array.length; i++) {
        array[i] = auxArray[i - rotationsCount];
    }

    return array;
}

module.exports = rotateArray;
