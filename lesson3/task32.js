/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @example:
 *    Input: strs = ["flower","flow","flight"]
 *    Output: "fl"
 *
 *  @example:
 *    Input: strs = ["dog","racecar","car"]
 *    Output: ""
 *    Explanation: There is no common prefix among the input strings.
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let pref = ''
  if (Array.isArray(strs) && strs.length >= 1) {
    pref = strs.sort((a, b) => a.length - b.length)[0] // Shortest word can be prefix
    for (let word of strs) {
      while (pref.length >= 1) {
        if (word.startsWith(pref)) break
        pref = pref.slice(0, -1)         
      }
    }
  }
  return pref
};

console.log(longestCommonPrefix(["flower","flow", "flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))

