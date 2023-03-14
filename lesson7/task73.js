/**
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
 *
 * @example
 *    Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
 *    Output: 16
 *    Explanation: The two words can be "abcw", "xtfn".
 *
 * @example
 *    Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
 *    Output: 4
 *    Explanation: The two words can be "ab", "cd".
 *
 * @example
 *    Input: words = ["a","aa","aaa","aaaa"]
 *    Output: 0
 *    Explanation: No such pair of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
 const maxProduct = function(words) {
  if (!Array.isArray(words)) return 'Must be an array type'
  const typeCheck = words.filter(word => typeof word === 'string')
  if (words.length !== typeCheck.length) return 'Must be only string type elements in array' 

  let max = 0 // default, if we cant find pair
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (!isSameLetters(words[i], words[j])) {
        const result = words[i].length * words[j].length
        max = Math.max(max, result) // will change max if we find bigger value
      }
    }
  }
  return max
}

const isSameLetters = function(word1, word2) {
  for (let i = 0; i < word1.length; i++) {
    if (word2.includes(word1[i])) {
      return true;
    }
  }
  return false;
}

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]))
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"]))
console.log(maxProduct(["a","aa","aaa","aaaa"]))
console.log(maxProduct(1))
console.log(maxProduct('sadsad'))
console.log(maxProduct({'name': 'Joe'}))
console.log(maxProduct(["a", 1,"abc","d","cd","bcd","abcd"]))
console.log(maxProduct(["a", "abc","d","cd", true,"abcd"]))

