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

const isPalindromeLoop = function(s) {
  const scrapedString = s.toLowerCase().replace(/[^a-z0-9 *]/g, '') // Modified regex not replacing spaces for exercise purposes
  let result = true
  let leftSpaceCount = 0 // Made for constructing indexes with ignoring spaces. Will be working properly only with single space
  let rightSpaceCount = 0
  for (let i = 0; i < Math.floor(scrapedString.length/2); i++) { // Loop ends before middle element if string length is odd
    if (scrapedString.charAt(i) === ' ') leftSpaceCount++
    if (scrapedString.charAt(scrapedString.length - i - 1) === ' ') rightSpaceCount++   
    const leftIndex = i + leftSpaceCount
    const rightIndex = scrapedString.length - i - 1 - rightSpaceCount
    // In case when string has many single spaces don't allow loop to continue compare through elements in reverse
    if (rightIndex <= leftIndex) {
      break
    // Also prevent wrong result in case with even string length that has space or spaces in middle
    } else if ((scrapedString.charAt(leftIndex) !== scrapedString.charAt(rightIndex)) 
      && ((scrapedString.charAt(rightIndex) !== ' ') && (scrapedString.charAt(leftIndex) !== ' '))) {
      result = false
      break
    }
  }
  return result
}

// console.log(isPalindrome('Hello World')) //false
// console.log(isPalindrome('12wow21')) // true
// console.log(isPalindrome('1&2w^ow_%21#')) //true

console.log(isPalindromeLoop('Hello World')) //false
console.log(isPalindromeLoop('12wow21'))  // true
console.log(isPalindromeLoop('1&2w^ow_%21#')) // true
console.log(isPalindromeLoop('r ac a r')) // true
console.log(isPalindromeLoop('race a car')) //false


