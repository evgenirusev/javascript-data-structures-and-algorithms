const { HuffmanCoding } = require("./huffmanCoding");

describe("HuffmanCoding", () => {
  it("should encode and decode successfully", () => {
    const huffmanCoding = new HuffmanCoding();
    const input = "Test string abcacdadc";
    const { encodedText, huffmanTree } = huffmanCoding.encode(input);

    expect(huffmanCoding.decode(encodedText, huffmanTree)).toEqual(input);
  });
});