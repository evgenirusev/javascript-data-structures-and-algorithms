/**
 * Encodes a list of strings to a single string.
 * https://leetcode.com/problems/encode-and-decode-strings
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
    const sb = [];
    for (const s of strs) {
        sb.push(intToString(s));
        sb.push(s);
    }
    return sb.join('');
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
    let i = 0;
    const n = s.length;
    const output = [];
    while (i < n) {
        const length = stringToInt(s.substring(i, i + 4));
        i += 4;
        output.push(s.substring(i, i + length));
        i += length;
    }
    return output;
};
 
function stringToInt(bytesStr) {
    let result = 0;
    for (const b of bytesStr) {
      result = (result << 8) + b.charCodeAt(0);
    }
    return result;
}

function intToString(s) {
    const x = s.length;
    const bytes = new Array(4);
    for (let i = 3; i > -1; --i) {
        bytes[3 - i] = String.fromCharCode((x >> (i * 8)) & 0xff);
    }
    return bytes.join('');
}

module.exports = { encode, decode }