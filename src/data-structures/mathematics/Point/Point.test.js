const Point = require("./Point.js");

describe("Point", () => {
    it("points should be equal", () => {
        let point1 = new Point(1, 2);
        let point2 = new Point(1, 2);

        expect(point1.compareTo(point2)).toBe(1);
    });

    it("points shouldn't be equal", () => {
        let point1 = new Point(1, 2);
        let point2 = new Point(3 , 4);

        expect(point1.compareTo(point2)).toBe(-1);
    });
});
