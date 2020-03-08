const Trie = require("./Trie");

describe('Trie', () => {
    let trie;

    beforeEach(() => {
        trie = new Trie()
    });

    it('should insert a word and confirm that it exists', () => {
        trie.insertWord('foo');
        trie.insertWord('bar');
        trie.insertWord('abcdefffe');

        expect(trie.hasWord('foo')).toBe(true);
        expect(trie.hasWord('bar')).toBe(true);
        expect(trie.hasWord('abcdefffe')).toBe(true);
    });

    it('should successfuly delete words', () => {
        trie.insertWord('foo');
        trie.insertWord('bar');

        trie.deleteWord('foo');
        expect(trie.hasWord('foo')).toBe(false);
        expect(trie.hasWord('bar')).toBe(true);

        trie.deleteWord('bar');
        expect(trie.hasWord('bar')).toBe(false);
    });
});