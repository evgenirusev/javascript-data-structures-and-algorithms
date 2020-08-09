function insertionSort(array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    for (let i = 1; i < array.length; i++) {
        let current = i;
        while (current > 0 && cmp(array[current], array[current - 1]) < 0) {
            swap(array, current, current - 1);
            current--;
        }
    }

    return array;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = insertionSort;