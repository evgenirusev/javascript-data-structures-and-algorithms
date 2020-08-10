const sort = require("../../sorting/insertion-sort/insertionSort")

const pointCmp = (point1, point2) => {
    if (point1.x === point2.x) {
        if (point1.y === point2.y) {
            return 0;
        }

        return point1.y < point2.y ? -1 : 1;
    }

    return point1.x < point2.x ? -1 : 1;
}

function findIntersectionsCount(set1, set2) {
    sort(set1, pointCmp);
    sort(set2, pointCmp);

    let intersectionsCount = 0;
    let set2Index = 0;
    for (let set1Index = 0; set1Index < set1.length; set1Index++) {
        if (set1[set1Index].compareTo(set2[set2Index]) > 0) {
            intersectionsCount++;
            set2Index++;
        }
    }

    return intersectionsCount;
}

module.exports = findIntersectionsCount;