/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
"use strict"
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    s = s.replace(" ", "");
    for (let index = 0; index < Math.floor(s.length) / 2; index++){
        if (s[index] !== s[s.length - index - 1])
            return false;
    }
    return true;
};

function tests() {
    console.log(isPalindrome("2423432b"));          // Output: true
    console.log(isPalindrome("abbbbbba"));          // Output: true
    console.log(isPalindrome("abbcbbbbba"));        // Output: false
    console.log(isPalindrome("6356354643"));        // Output: true
}

tests();