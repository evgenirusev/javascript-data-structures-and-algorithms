import Trie from '../Trie';

describe('Trie', () => {
    it('should insert a word and retrieve it', () => {
        const trie = new Trie();
        trie.addWord('foo');
        trie.addWord('bAr');
        trie.addWord('VR');

        expect(trie.hasWord('foo')).toBe(true);
        expect(trie.hasWord('BaR')).toBe(true);
        expect(trie.hasWord('VR')).toBe(true);
    });
});