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
    const set1PointsCount = {};
    set1.forEach(point => {
        const key = `${point.x}${point.y}`;
        if (typeof set1PointsCount[key] === "undefined") {
            set1PointsCount[key] = 1;
        } else {
            set1PointsCount[key]++;
        }
    });

    let intersectionsCount = 0;
    set2.forEach(point => {
        const key = `${point.x}${point.y}`;
        const value = set1PointsCount[key];
        if (typeof value !== "undefined" && typeof value !== 0) {
            intersectionsCount++;
            set1PointsCount[key]--;
        }
    });

    return intersectionsCount;
}

module.exports = findIntersectionsCount;
