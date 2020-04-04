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

module.exports = bucketSort;