function shellSort(array, cmp) {
    // todo: implement me
}

function swap(array, left, right) {
    const temp = array[left];

    array[left] = array[right];
    array[right] = temp;
}

module.exports = shellSort;
