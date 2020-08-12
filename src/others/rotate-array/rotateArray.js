function rotateArray(array, rotationsCount) { 
    const positionsCount = rotationsCount % array.length;
    const lastIndex = array.length - 1;

    const lastElements = [];
    for (let i = array.length - positionsCount; i < array.length; i++) {
        lastElements.push(array[i]);
    }

    for (let i = lastIndex; i >= positionsCount; i--) {
        array[i] = array[i - positionsCount];
    }

    for (let i = 0; i < positionsCount; i++) {
        array[i] = lastElements[i];
    }
    
    return array;
}

module.exports = rotateArray;
