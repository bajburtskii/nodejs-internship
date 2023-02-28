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
    //  Helper function to convert binary string to its decimal value
    function binaryToDecimal(binary) {
        let decimal = 0;
        let base = 1;
        for (let i = binary.length - 1; i >= 0; i--) {
            decimal += (binary[i] === '1' ? base : 0);
            base *= 2;
        }
        return decimal;
    }

    let result = '';
    let carry = 0;
    let i = a.length - 1; //Pointer i to scan a string from right to left
    let j = b.length - 1; //Pointer j to scan through b string from right to left

    // Starting the loop over strings a and b from right to left to perform binary addition starting from the rightmost position
    while (i >= 0 || j >= 0 || carry > 0) {
        const sum = (i >= 0 ? binaryToDecimal(a[i--]) : 0) +
            (j >= 0 ? binaryToDecimal(b[j--]) : 0) +
            carry;
        // Update result with the binary digit corresponding to the sum modulo 2 to perform binary addition
        result = (sum % 2) + result;
        carry = sum >= 2 ? 1 : 0;
    }
    return result;
};

console.log(addBinary('11','1'));
console.log(addBinary('1010','1011'));
