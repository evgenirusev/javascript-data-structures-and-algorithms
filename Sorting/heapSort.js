function heapSort(arr) {
    buildHeap(arr);
    sortHeap(arr);
}

function buildHeap(arr) {
    for(let i = (arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }
}

function sortHeap(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }
}

function heapify(arr, size, index) {
    let largest = index;
    left = 2 * index + 1;
    right = 2 * index + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (index !== largest) {
        swap(arr, index, largest);
        heapify(arr, size, largest);
    }
}

function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

module.exports = heapSort;