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

}

module.exports = findIntersectionsCount;
