function bucketSort(array) {
    const buckets = parseIntoBuckets(array);
    sortBuckets(buckets);
    return mergeBucketsIntoArray(buckets, array);
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

function mergeBucketsIntoArray(buckets, array) {
    let index = 0;
    buckets.forEach(bucket => {
        bucket.forEach(num => {
            array[index] = num;
            index++;
        });
    });

    return array;
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
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

module.exports = bucketSort;