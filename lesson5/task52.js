/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * @example
 *    Input: a = "11", b = "1"
 *    Output: "100"
 *
 * @example
 *    Input: a = "1010", b = "1011"
 *    Output: "10101"

 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    // Convert a and b to decimal to perform adding of this two strings
    const decimalA = Number.parseInt(a, 2);
    const decimalB = Number.parseInt(b, 2);

    const decimalSum = decimalA + decimalB;

    return decimalSum.toString(2);
};

console.log(addBinary('11','1'));
console.log(addBinary('1010','1011'));
