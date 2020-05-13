function heapSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    buildHeap(arr, cmp);
    sortHeap(arr, cmp);

    return arr;
}

function buildHeap(arr, cmp) {
    for (let i = (arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i, cmp);
    }
}

function sortHeap(arr, cmp) {
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0, cmp);
    }
}

function heapify(arr, size, index, cmp) {
    let largest = index;
    left = 2 * index + 1;
    right = 2 * index + 2;

    if (left < size && cmp(arr[left], arr[largest]) > 0) {
        largest = left;
    }

    if (right < size && cmp(arr[right], arr[largest]) > 0) {
        largest = right;
    }

    if (index !== largest) {
        swap(arr, index, largest);
        heapify(arr, size, largest, cmp);
    }
}

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

module.exports = heapSort;