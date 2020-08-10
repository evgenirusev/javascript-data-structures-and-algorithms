function findSortedArraysIntersections(array1, array2) {
    let i = 0,
        j = 0,
        intersections = [];

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            i++;
        } else if (array1[i] > array2[j]) {
            j++;
        } else {
            intersections.push(array1[i]);
            i++;
            j++;
        }
    }

    return intersections;
}

module.exports = findSortedArraysIntersections;
