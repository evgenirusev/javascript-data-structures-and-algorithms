function rotateArray(array, rotationsCount) { 
    const positionsCount = rotationsCount % array.length;
    reverse(array, 0, array.length - 1);
    reverse(array, 0, positionsCount - 1);
    reverse(array, positionsCount, array.length - 1);

    return array;
}

function reverse(array, from, to) {
    for (let i = from, j = to; i < j; i++, j--) {
        swap(array, i, j);
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = rotateArray;
