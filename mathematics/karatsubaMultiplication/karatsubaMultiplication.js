function karatsubaMultiplication(x, y) {
    const xDigitCount = getDigitCount(x);
    const yDigitCount = getDigitCount(y);

    if (xDigitCount < 1 && yDigitCount < 1) {
        return x * y;
    }

    const a = getFirstHalfDigits(x, xDigitCount);
    const b = getSecondHalfDigits(x, xDigitCount);
    const c = getFirstHalfDigits(y, yDigitCount);
    const d = getSecondHalfDigits(y, xDigitCount);
    const multiplier = Math.pow(10, getDigitCount(a));
}

function getDigitCount(n) {
    return n.toString()
        .split("").length;
}

function getFirstHalfDigits(n, digitsCount) {
    const getFirstHalfOperation = (a, b) => a / b;
    return getNumberHalf(n, digitsCount, getFirstHalfOperation);
}

function getSecondHalfDigits(n, digitsCount) {
    const getSecondHalfOperation = (a, b) => a % b;
    return getNumberHalf(n, digitsCount, getSecondHalfOperation);
}

function getNumberHalf(n, digitsCount, operation) {
    return Math.floor(
        operation(n,
            Math.pow(10,
                Math.floor((digitsCount / 2))
            )
        )
    );
}

module.exports = karatsubaMultiplication;