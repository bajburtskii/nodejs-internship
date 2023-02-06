/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    return s.trim().replace(/\W/g, '').toLowerCase() === s.trim().replace(/\W/g, '').toLowerCase().split('').reverse().join('');
};

console.log(isPalindrome('   ab$$%%CbA   '));   // Output: true
console.log(isPalindrome('abCbAc'));            // Output: false