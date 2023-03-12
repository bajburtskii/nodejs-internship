/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 *
 * @example
 *    Input: num = 38
 *    Output: 2
 *    Explanation: The process is
 *      38 --> 3 + 8 --> 11
 *      11 --> 1 + 1 --> 2
 *      Since 2 has only one digit, return it.
 *
 */

/**
 * @param {number} num
 * @return {number}
 */

let num = 38;
const addDigits = function(num) {
    while (num > 9) {
        num = num.toString().split("").reduce((previousValue, currentValue, currentIndex) => {
                    return  parseInt( previousValue) + parseInt(currentValue);
        })
    }
    return num;
};

console.log(addDigits(num));