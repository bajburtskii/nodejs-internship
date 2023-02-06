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
  const scrapedString = s.toLowerCase().replace(/[^a-z0-9]/g, '') // Get rid of needless elements for comparison
  const reversedString = [...scrapedString].reverse().join('')
  return scrapedString === reversedString
};

console.log(isPalindrome('Hello World')) // false
console.log(isPalindrome('12wow21')) // true  
console.log(isPalindrome('1&2w^ow_%21#')) // true
