class Node {
    constructor() {
        this.root = new Node(null);
    }

    insertWord() {}
    deleteWord() {}
    hasWord() {}
    getWordWithPrefix() {}
}

class Trie {
    constructor(char) {
        this.char = char;
        this.isCompletedWord = false;
        this.children = {};
    }
}

module.exports = Trie;