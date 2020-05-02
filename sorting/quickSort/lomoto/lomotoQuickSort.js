function lomotoQuickSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    lomotoQuickSortRecursive(arr, cmp, 0, arr.length - 1);

    return arr;
}

function lomotoQuickSortRecursive(arr, cmp, left, right) {
    if (left < right) {
        const pivot = partition(arr, cmp, left, right);

        lomotoQuickSortRecursive(arr, cmp, left, pivot - 1);
        lomotoQuickSortRecursive(arr, cmp, pivot + 1, right);
    }
}

function partition(arr, cmp, left, right) {
    const pivot = right;

    let i = left;
    for (let j = left; j < pivot; j++) {
        if (cmp(arr[j], arr[pivot]) < 0) {
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

module.exports = lomotoQuickSort;