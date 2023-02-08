/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * Validates is given value is actually a string.
 * @param {string} s - The current value.
 */
const isStr = s => typeof s === 'string' && isNaN(s);

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    if (!isStr(s) || s === '') {
        return 'Please enter a valid string.';
    }
    let clearString = s.toLowerCase().replace(/[\W_]/g, '');
    let reversedString = clearString.split('').reverse().join('');
    return reversedString === clearString;
};

console.log(isPalindrome(222)); // Output: Please enter a valid string.
console.log(isPalindrome('')); // Output: Please enter a valid string.
console.log(isPalindrome('A man, a plan, a canal. Panama;')); // Output: true