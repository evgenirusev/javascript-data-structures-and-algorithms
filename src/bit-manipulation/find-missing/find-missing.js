// Airbnb medior interview - https://www.youtube.com/watch?v=cdCeU8DJvPM&t=356s

function findMissing(arr1, arr2) {
    let leftOver = 0;

    for (let i = 0; i < arr2.length; i++) {
        leftOver ^= arr1[i] ^ arr2[i];
    }
    leftOver ^= arr1[arr1.length - 1];

    return leftOver;
}

module.exports = findMissing;