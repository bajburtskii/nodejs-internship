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
    // g - special flag that indicates Global search
    s = s.replace(/[0-9]/g, '').toLowerCase();
    if (s.length === 0) {
        console.error("Error: s.length === 0");
        return false;
    }
    let str_array =  s.split("");
    return str_array.reverse().toString() === str_array.toString();
};

function tests() {
    console.log(isPalindrome("2423432b"));          // Output: true
    console.log(isPalindrome("abbbbbba"));          // Output: true
    console.log(isPalindrome("abbcbbbbba"));        // Output: false
    console.log(isPalindrome("6356354643"));        // Output: true
}

tests();