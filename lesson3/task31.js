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
    console.log(s.split(""))
    // "abc".split("") - output: ["a", "b", "c"]
    return s.split("").reverse().toString() === s.split("").toString();
};

function tests() {
    console.log(isPalindrome("2423432b"));
}

tests();