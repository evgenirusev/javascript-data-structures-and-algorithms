// Given an array of integers and an integer k,
// you need to find the number of unique k-diff pairs in the array.

function findPairsCount(array, k) {
    const map = {};
    array.forEach(x => {
        map[x] = true;
    });

    let count = 0;
    array.forEach(x => {
        if (map[x - k]) {
            count++;
        }
    });

    return count;
}

module.exports = findPairsCount;
