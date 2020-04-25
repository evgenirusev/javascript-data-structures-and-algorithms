function multiply(x, y) {
    const xDigitCount = getDigitCount(x);
    const yDigitCount = getDigitCount(y);

    if (xDigitCount < 1 && yDigitCount < 1) {
        return x * y;
    }

    // x
    const a = getFirstHalfDigits(x, xDigitCount);
    const b = getSecondHalfDigits(x, xDigitCount);
    const aMultiplier = Math.pow(10, getDigitCount(b));

    // y
    const c = getFirstHalfDigits(y, yDigitCount);
    const d = getSecondHalfDigits(y, yDigitCount);
    const bMultiplier = Math.pow(10, getDigitCount(d));
    
    return (aMultiplier * bMultiplier) * multiply(a, c) + aMultiplier * d + bMultiplier * multiply(b, c) + multiply(b, d);
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

module.exports = multiply;