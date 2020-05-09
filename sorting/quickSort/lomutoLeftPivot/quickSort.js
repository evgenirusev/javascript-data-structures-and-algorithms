function quickSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    quickSortRecursive(arr, cmp, 0, arr.length - 1);

    return arr;
}

function quickSortRecursive(arr, cmp, left, right) {
    if (left < right) {
        const pivot = partition(arr, cmp, left, right);

        quickSortRecursive(arr, cmp, left, pivot - 1);
        quickSortRecursive(arr, cmp, pivot + 1, right);
    }
}

function partition(arr, cmp, left, right) {
    const pivot = left;

    let i = left + 1;
    for (let j = i; j <= right; j++) {
        if (cmp(arr[j], arr[pivot]) < 0) {
            if (j !== i) {
                swap(arr, i, j);
            }

            i++;
        }
    }

    swap(arr, left, i - 1);
    return i - 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = quickSort;