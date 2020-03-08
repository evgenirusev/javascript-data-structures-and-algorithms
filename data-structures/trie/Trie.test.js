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

    describe("delete", () => {
        it('should successfuly delete the words', () => {
            trie.insertWord('for');
            trie.insertWord('bar');
    
            trie.deleteWord('for');
            expect(trie.hasWord('for')).toBe(false);
            expect(trie.hasWord('bar')).toBe(true);
    
            trie.deleteWord('bar');
            expect(trie.hasWord('bar')).toBe(false);
        });

        it('should successfuly delete a one letter word', () => {
            trie.insertWord('x');
    
            trie.deleteWord('x');
            expect(trie.hasWord('x')).toBe(false);
        });
    });
});