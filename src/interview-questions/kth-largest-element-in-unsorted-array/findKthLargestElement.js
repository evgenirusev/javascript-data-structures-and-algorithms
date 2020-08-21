function findKthLargestElement(array, k) {
    return array.sort()[k - 1];
}

module.exports = findKthLargestElement
