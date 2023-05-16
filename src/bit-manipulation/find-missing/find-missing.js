// Airbnb medior interview - https://www.youtube.com/watch?v=cdCeU8DJvPM&t=356s

// XOR approach - O(n) time O(1) space
function findMissing(arr1, arr2) {
    let leftOver = 0;

    for (let i = 0; i < arr2.length; i++) {
        leftOver ^= arr1[i] ^ arr2[i];
    }
    leftOver ^= arr1[arr1.length - 1];

    return leftOver;
}

// Solvable with a hash-map but requires O(n) space

module.exports = findMissing;