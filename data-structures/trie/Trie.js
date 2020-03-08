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

    deleteWord(word) {
        if (!word) {
            throw 'No argument value was passed!';
        }

        this._deleteWord(this.root, word, 0);
    }

    getWordsWithPrefix(prefix) {
        let node = this.root;
        let charIndex = 0;
        while (charIndex < prefix.length) {
            const char = prefix.charAt(charIndex);
            const childNode = node.children[char];

            if (!childNode) {
                throw `No such prefix exists in the Trie - '${prefix}'`;
            }

            node = childNode;
            charIndex++;
        }

        return this._getAllWordsFromNode(node).map(word => prefix.slice(0, -1) + word);
    }

    _getAllWordsFromNode(node) {
        if (!node.hasChildren()) {
            return [node.char];
        }

        const words = [];
        const objectKeys = Object.keys(node.children);

        for (let i = 0; i < objectKeys.length; i++) {
            const char = objectKeys[i];
            const childNode = node.children[char];
            words.push(
                ...this._getAllWordsFromNode(childNode)
                    .map(word => node.char + word)
            );
        }

        return words;
    }

    _deleteWord(node, word, charIndex) {
        if (charIndex >= word.length) {
            node.isCompletedWord = false;
            return;
        }

        const char = word.charAt(charIndex);
        const childNode = node.children[char];

        if (!childNode) {
            throw `The word '${word}' does not exist in the Trie!`;
        }

        this._deleteWord(childNode, word, charIndex + 1);

        if (!childNode.hasChildren() && !childNode.isCompletedWord) {
            delete node.children[char];
        }
    }
}

// Extract
class Node {
    constructor(char) {
        this.char = char;
        this.isCompletedWord = false;
        this.children = {};
    }

    hasChildren() {
        return Object.keys(this.children).length > 0;
    }
}

module.exports = Trie;