class Node {
    constructor(char) {
        this.char = char;
        this.isCompletedWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new Node(null);
    }

    insertWord(word) {
        if (!word) {
            throw 'Invalid operation!';
        }

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);

            if (!node.children[char]) {
                node.children[char] = new Node(char);
            }

            node = node.children[char];
        }

        node.isCompletedWord = true;
    }

    hasWord(word) {
        if (!word) {
            throw 'Invalid operation!';
        }

        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word.charAt(i);

            if (!node.children[char]) {
                return false;
            }

            node = node.children[char];
        }

        return node.isCompletedWord;
    }

    deleteWord() { }
    getWordsWithPrefix() { }
}

module.exports = Trie;