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
let a = "11";
let b = "1";

let x = "1010";
let y = "1011";

const addBinary = function(a, b) {
        let binaryA = BigInt(`0b${a}`);
        let binaryB = BigInt(`0b${b}`);
        let sum = binaryA + binaryB;
        return sum.toString(2);
};

console.log(addBinary(a,b));
console.log(addBinary(x,y));