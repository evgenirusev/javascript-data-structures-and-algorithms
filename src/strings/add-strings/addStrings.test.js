const addStrings = require("./addStrings");

describe('addStrings', () => {
    it('adds two positive integers', () => {
        const result = addStrings('123', '456');
        expect(result).toBe('579');
    });

    it('adds two positive integers', () => {
        const result = addStrings('11', '123');
        expect(result).toBe('134');
    });

    it('adds two positive integers', () => {
        const result = addStrings('9', '1');
        expect(result).toBe('10');
    });
});