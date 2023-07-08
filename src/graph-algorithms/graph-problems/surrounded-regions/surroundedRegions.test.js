const surroundedRegions = require('./surroundedRegions');

describe("surroundedRegions", () => {
    it('should modify the board to capture surrounded "O" regions - Test case 1', () => {
        let board = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "O", "X", "X"]
        ];
        const expected = [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "O", "X", "X"]
        ];
        surroundedRegions(board);
        expect(board).toEqual(expected);
    });

    it('should modify the board to capture surrounded "O" regions - Test case 2', () => {
        let board = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "X", "X"]
        ];
        const expected = [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"]
        ];
        surroundedRegions(board);
        expect(board).toEqual(expected);
    });

    it('should modify the board to capture surrounded "O" regions - Test case 3', () => {
        let board = [
            ["X", "X", "X", "X"],
            ["X", "O", "O", "X"],
            ["X", "X", "O", "X"],
            ["X", "X", "X", "X"]
        ];
        const expected = [
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"],
            ["X", "X", "X", "X"]
        ];
        surroundedRegions(board);
        expect(board).toEqual(expected);
    });
});
