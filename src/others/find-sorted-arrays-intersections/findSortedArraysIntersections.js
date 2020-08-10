function findSortedArraysIntersections(array1, array2) {
    let map = {};

    array1.forEach(x => {
        if (typeof map[x] === "undefined") {
            map[x] = 1;
        } else {
            map[x]++;
        }
    });

    const intersections = [];
    array2.forEach(x => {
        if (typeof map[x] !== "undefined") {
            intersections.push(x);
            map[x]--;
        }
    });

    return intersections;
}

module.exports = findSortedArraysIntersections;
