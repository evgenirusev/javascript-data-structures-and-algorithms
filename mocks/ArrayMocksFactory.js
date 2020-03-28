// isn't part of the class in order to achieve encapsulation
const arrays = {
    unsorted: [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    reverse: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    equal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    negative: [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3],
    negative: [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20]
}

class ArrayMocksFactory {
    get unsortedArray() {
        return [...arrays.unsorted]
    }

    get sortedArray() {
        return [...arrays.sorted]
    }

    get reverseArray() {
        return [...arrays.reverse]
    }

    get equalArray() {
        return [...arrays.equal]
    }

    get negativeArray() {
        return [...arrays.negative]
    }

    get negativeArraySorted() {
        return [...arrays.negativeSorted]
    }
}

module.exports = ArrayMocksFactory;