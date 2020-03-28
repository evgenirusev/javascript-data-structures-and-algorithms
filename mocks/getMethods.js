function getMethods(obj) {
    let result = [];

    for (let method in obj) {
        if (typeof obj[method] === "function") {
            result.push(method)
        }
    }

    return result;
}

module.exports = getMethods;