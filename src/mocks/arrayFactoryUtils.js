function getUnsortedArray() {
    return [...[15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19]];
}

function getSortedArray() {
    return [...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];
}

function getReverseArray() {
    return [...[20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]];
}

function getEqualArray() {
    return [...[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
}

function getNegativeArray() {
    return [...[-1, 0, 5, -10, 20, 13, -7, 3, 2, -3]];
}

function getNegativeSortedArray() {
    return [...[-10, -7, -3, -1, 0, 2, 3, 5, 13, 20]];
}

function getOneElementArray() {
    return [...[1]];
}

function getTwoElementArray() {
    return [...[1, 2]];
}

function getLargeNumberArray() {
    return [...[203, 14, 532, 8005, 748, 3, 12043, 258, 91, 47, 23, 70]];
}

function getSortedLargeNumberArray() {
    return [...[3, 14, 23, 47, 70, 91, 203, 258, 532, 748, 8005, 12043]];
}

module.exports = {
    getUnsortedArray,
    getSortedArray,
    getReverseArray,
    getEqualArray,
    getNegativeArray,
    getNegativeSortedArray,
    getOneElementArray,
    getTwoElementArray,
    getLargeNumberArray,
    getSortedLargeNumberArray
}