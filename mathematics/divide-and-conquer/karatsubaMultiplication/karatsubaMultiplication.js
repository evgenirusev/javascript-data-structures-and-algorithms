function multiply(x, y) {
    const xDigitCount = getDigitCount(x);
    const yDigitCount = getDigitCount(y);

    if (xDigitCount <= 1 && yDigitCount <= 1) {
        return x * y;
    }

    const a = getFirstHalfDigits(x, xDigitCount);
    const b = getSecondHalfDigits(x, xDigitCount);
    const aMultiplier = getMultiplier(a, b);

    const c = getFirstHalfDigits(y, yDigitCount);
    const d = getSecondHalfDigits(y, yDigitCount);
    const bMultiplier = getMultiplier(c, d);

    return (aMultiplier * bMultiplier) * multiply(a, c) + aMultiplier * multiply(a, d) + bMultiplier * multiply(b, c) + multiply(b, d);
}

function getDigitCount(n) {
    return n.toString()
        .split("").length;
}

function getFirstHalfDigits(n, digitsCount) {
    if (digitsCount <= 1) {
        return 0;
    }

    const getFirstHalfOperation = (a, b) => a / b;
    return getNumberHalf(n, digitsCount, getFirstHalfOperation);
}

function getSecondHalfDigits(n, digitsCount) {
    if (digitsCount <= 1) {
        return n;
    }

    const getSecondHalfOperation = (a, b) => a % b;
    return getNumberHalf(n, digitsCount, getSecondHalfOperation);
}

function getMultiplier(firstHalf, secondHalf) {
    return firstHalf < 1 ? 0 : Math.pow(10, getDigitCount(secondHalf));
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