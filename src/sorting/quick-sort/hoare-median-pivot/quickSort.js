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
    swap(arr, median(left, right), right);
    i = left;
    j = right - 1;

    while (i <= j) {
        while (cmp(arr[i], arr[right]) < 0) {
            i++;
        }

        while (cmp(arr[j], arr[right]) > 0) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        } else {
            swap(arr, i, right);
        }
    }

    return i;
}

function swap(arr, i, j) {
    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}

function median(left, right) {
    return Math.floor((left + right) / 2);
}

module.exports = quickSort;