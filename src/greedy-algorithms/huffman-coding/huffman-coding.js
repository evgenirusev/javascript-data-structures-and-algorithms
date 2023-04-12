
class HuffmanCoding {
  encode(text) {
    const frequencyTable = this._createFrequencyTable(text);
    const huffmanTree = this._createHuffmanTree(frequencyTable);
    const lookupTable = {};
    this.createLookupTable(huffmanTree, "", lookupTable);

    let encodedText = "";

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      encodedText += lookupTable[char];
    }

    return { encodedText, huffmanTree };
  }

  decode(encodedText, huffmanTree) {
    let decodedText = "";
    let currentNode = huffmanTree;

    for (let i = 0; i < encodedText.length; i++) {
      const bit = encodedText.charAt(i);

      if (bit === "0") {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (currentNode.value !== "") {
        decodedText += currentNode.value;
        currentNode = huffmanTree;
      }
    }

    return decodedText;
  }

  _createFrequencyTable(text) {
    const frequencyTable = {};

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);

      if (frequencyTable[char]) {
        frequencyTable[char]++;
      } else {
        frequencyTable[char] = 1;
      }
    }

    return frequencyTable;
  }

  _createHuffmanTree(frequencyTable) {
    const queue = [];
    for (const [char, freq] of Object.entries(frequencyTable)) {
      queue.push(new HuffmanNode(char, freq, null, null));
    }

    while (queue.length > 1) {
      queue.sort((a, b) => a.freq - b.freq);

      const left = queue.shift();
      const right = queue.shift();

      const parent = new HuffmanNode("", left.freq + right.freq, left, right);

      queue.push(parent);
    }

    return queue.shift();
  }

  createLookupTable(node, code, lookupTable) {
    if (node == null) {
      return;
    }

    if (node.value !== "") {
      lookupTable[node.value] = code;
    }

    this.createLookupTable(node.left, code + "0", lookupTable);
    this.createLookupTable(node.right, code + "1", lookupTable);
  }
}

class HuffmanNode {
  constructor(value, freq, left, right) {
    this.value = value;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

module.exports = { HuffmanCoding, HuffmanNode };