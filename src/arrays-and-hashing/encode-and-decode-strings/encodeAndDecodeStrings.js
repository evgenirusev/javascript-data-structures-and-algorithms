/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.split(' ').reduce((output, str) => {
        output.push(`é${str.length}È${str}`);
        return output;
    }, []).join(''); // Using array because strings are immutable & cost O(n) on concat
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */