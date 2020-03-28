const insertMockValues = (tree, values) => {
    values.forEach(val => {
        tree.insert(val);
    });
}

module.exports = insertMockValues;