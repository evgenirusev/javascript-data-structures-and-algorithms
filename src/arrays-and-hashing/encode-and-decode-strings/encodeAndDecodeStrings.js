/**
 * Encodes a list of strings to a single string.
 * https://leetcode.com/problems/encode-and-decode-strings
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    return strs.join('é');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    return s.split('é');
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

module.exports = { encode, decode }