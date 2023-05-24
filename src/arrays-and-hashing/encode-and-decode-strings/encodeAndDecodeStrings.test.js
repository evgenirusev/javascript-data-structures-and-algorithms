const { encode, decode } = require('./solution');

describe('Leetcode Problem 271: Encode and Decode Strings', () => {
    it('should encode and decode empty string array', () => {
        const input = [];
        const encoded = encode(input);
        const decoded = decode(encoded);
        expect(decoded).toEqual(input);
    });

    it('should encode and decode single string', () => {
        const input = ['hello'];
        const encoded = encode(input);
        const decoded = decode(encoded);
        expect(decoded).toEqual(input);
    });

    it('should encode and decode multiple strings', () => {
        const input = ['hello', 'world', 'leetcode'];
        const encoded = encode(input);
        const decoded = decode(encoded);
        expect(decoded).toEqual(input);
    });

    it('should encode and decode strings with special characters', () => {
        const input = ['!@#$%^&*()_+-=', '1234567890'];
        const encoded = encode(input);
        const decoded = decode(encoded);
        expect(decoded).toEqual(input);
    });
});