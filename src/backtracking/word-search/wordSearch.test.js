const exist = require('./wordSearch');

describe('exist function', () => {
    it('should return true for a valid word in the board', () => {
        const board = [
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E'],
        ];
        const word = 'ABCCED';
        expect(exist(board, word)).toBe(true);
    });

    it('should return false for an invalid word in the board', () => {
        const board = [
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E'],
        ];
        const word = 'ABCB';
        expect(exist(board, word)).toBe(false);
    });

    it('should return false for an empty board', () => {
        const board = [];
        const word = 'AB';
        expect(exist(board, word)).toBe(false);
    });

    it('should return false for an empty word', () => {
        const board = [
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E'],
        ];
        const word = '';
        expect(exist(board, word)).toBe(false);
    });
});
