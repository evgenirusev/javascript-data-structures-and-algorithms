const wallsAndGates = require('./wallsAndGates');

describe('wallsAndGates', () => {
    it('should fill the rooms with correct distances to the gates', () => {
        const rooms = [
            [2147483647, -1, 0, 2147483647],
            [2147483647, 2147483647, 2147483647, -1],
            [2147483647, -1, 2147483647, -1],
            [0, -1, 2147483647, 2147483647],
        ];
        const expectedOutput = [
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4],
        ];

        wallsAndGates(rooms);

        expect(rooms).toEqual(expectedOutput);
    });

    it('should handle rooms with all gates closed', () => {
        const rooms = [
            [2147483647, -1, 2147483647],
            [2147483647, -1, 2147483647],
            [2147483647, -1, 2147483647],
        ];
        const expectedOutput = [
            [2147483647, -1, 2147483647],
            [2147483647, -1, 2147483647],
            [2147483647, -1, 2147483647],
        ];

        wallsAndGates(rooms);

        expect(rooms).toEqual(expectedOutput);
    });

    it('should handle rooms with all gates already reachable', () => {
        const rooms = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        const expectedOutput = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];

        wallsAndGates(rooms);

        expect(rooms).toEqual(expectedOutput);
    });

    it('should handle rooms with only walls and no gates', () => {
        const rooms = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ];
        const expectedOutput = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ];

        wallsAndGates(rooms);

        expect(rooms).toEqual(expectedOutput);
    });
});
