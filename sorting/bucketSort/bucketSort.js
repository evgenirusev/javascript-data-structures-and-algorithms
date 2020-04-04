function bucketSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const buckets = parseIntoBuckets(arr);
    sortBuckets(buckets);
    return mergeBuckets(buckets);
}

function parseIntoBuckets(array) {
    const buckets = [];
    const maxElement = Math.max(...array);

    array.forEach(num => {
        const bucketIndex = Math.floor((array.length - 1) * num / maxElement);
        buckets[bucketIndex] = buckets[bucketIndex] || [];
        buckets[bucketIndex].push(num);
    });

    return buckets;
}

function sortBuckets(buckets) {
    buckets.forEach(bucket => {
        if (typeof bucket !== undefined) {
            insertionSort(bucket);
        }
    });
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = index2;
    arr[index2] = temp;
}

function mergeBuckets(buckets) {

}

module.exports = bucketSort;