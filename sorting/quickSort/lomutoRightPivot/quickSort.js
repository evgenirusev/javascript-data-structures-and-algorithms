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
    const pivot = arr[right];

    let i = left;
    for (let j = left; j < right; j++) {
        if (cmp(arr[j], pivot) < 0) {
            swap(arr, i, j);
            i++;
        }
    }

    swap(arr, right, i);
    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = quickSort;