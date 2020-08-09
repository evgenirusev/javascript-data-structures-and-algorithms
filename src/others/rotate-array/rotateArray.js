function rotateArray(array, rotationsCount) { 
    let tempElements = [];
    for (let i = 0; i < rotationsCount; i++) {
        tempElements.push(array[i]);
    }

    const lastIndex = array.length - 1;
    for (let i = lastIndex; i >= rotationsCount; i--) {
        let currentElementIndex = i + rotationsCount;

        if (currentElementIndex > lastIndex) {
            currentElementIndex -= lastIndex;
        }

        array[i] = array[currentElementIndex];
    }

    for (let i = array.length - rotationsCount; i < array.length; i++) {
        array[i] = tempElements[i];
    }

    return array;
}

module.exports = rotateArray;
