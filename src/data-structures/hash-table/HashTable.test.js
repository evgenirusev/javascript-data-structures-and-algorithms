const HashTable = require('./HashTable');

describe("HashTable", () => {
    let hashTable;

    beforeEach(() => {
        hashTable = new HashTable();
    });

    it('should put and get correct values', () => {
        hashTable.put('key1', 1);
        hashTable.put('key2', 2);

        expect(hashTable.get('key1')).toBe(1);
        expect(hashTable.get('key2')).toBe(2);
    });

    test('remove', () => {
        hashTable.put('key1', 1);
        hashTable.put('key2', 2);

        hashTable.remove('key1');

        expect(hashTable.get('key1')).toBe(null);
        expect(hashTable.get('key2')).toBe(2);
    });
});
