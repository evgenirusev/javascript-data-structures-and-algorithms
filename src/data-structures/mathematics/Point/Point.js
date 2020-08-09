class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    compareTo(point) {
        return point.x === this.x && point.y === this.y ? 1 : -1;
    }
}

module.exports = Point;
