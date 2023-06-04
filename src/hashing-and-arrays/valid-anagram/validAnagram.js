var isAnagram = function(s, t) {
    if (s.length != t.length)
        return false;

    const charFreq = s.split('').reduce((map, char) => {
        if (map[char] != null) {
            map[char]++;
        } else {
            map[char] = 1;
        }

        return map;
    }, {});

    t.split('').forEach(c => {
        charFreq[c]--;
    });

    return Object.values(charFreq).filter(val => val != 0).length == 0;
};

module.exports = isAnagram;