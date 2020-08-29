function selectionSort(array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    for (let i = 0; i < array.length - 1; i++) {
        let currentMinimum = i;
        let currentIndex = i + 1;
        while (currentIndex < array.length) {
            if (cmp(array[currentIndex], array[currentMinimum]) < 0) {
                currentMinimum = currentIndex;
            }

            currentIndex++;
        }

        swap(array, i, currentMinimum);
    }

    return array;
}

function swap(array, left, right) {
    const temp = array[left];

    array[left] = array[right];
    array[right] = temp;
}

module.exports = selectionSort;