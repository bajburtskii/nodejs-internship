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
    let res = false;
    const compareStr = s.trim().replace(/\W/g, '').toLowerCase();
    let i = 0;
    while (i <= compareStr.length - i - 1) {
        res = compareStr[i] === compareStr[compareStr.length - i - 1];
        i++;
    }
    return res;
};

console.log(isPalindrome('   ab$$  %%CbA   ')); // Output: true
console.log(isPalindrome('abCbAc'));            // Output: false
