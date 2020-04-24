function karatsubaMultiplication(x, y) {
    const xDigitCount = getDigitCount(x);
    const yDigitCount = getDigitCount(y);

    if (xDigitCount < 1 && yDigitCount < 1) {
        return x * y;
    }

    const a = Math.floor(x / Math.pow(10, (xDigitCount / 2)));
}

function getDigitCount(n) {
    return n.toString()
        .split("").length;
}

module.exports = karatsubaMultiplication;