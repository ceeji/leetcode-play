/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Define numbers
    var digits = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    var result = 0;

    for (var i = 0; i < s.length; ++i) {
        if (i == s.length - 1 || digits[s[i]] >= digits[s[i + 1]]) {
            result += digits[s[i]];
        }
        else {
            result -= digits[s[i]];
        }
    }

    return result;
};

console.log(romanToInt("IV"));
