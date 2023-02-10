/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * @example:
 *    Input: s = "egg", t = "add"
 *    Output: true
 *
 *  @example:
 *    Input: s = "foo", t = "bar"
 *    Output: false
 *
 *  @example:
 *    Input: s = "paper", t = "title"
 *    Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  let sPattern = '',
      tPattern = ''
  let sIncrementer = 0,
      tIncrementer = 0
 
  if ((s.length !== t.length) || (typeof s !== 'string') || (typeof t !== 'string')) return false
  
  for (let i = 0; i < s.length; i++) {
    let sIsFirstOccurence = isFirstOccurence(s, i)
    let tIsFirstOccurence = isFirstOccurence(t, i)
    if (sIsFirstOccurence !== tIsFirstOccurence) return false // make no sense to continue, obviously not isomorphic
    !sIsFirstOccurence ? sPattern += sPattern.charAt(s.indexOf(s[i])) : sPattern += ++sIncrementer
    !tIsFirstOccurence ? tPattern += tPattern.charAt(t.indexOf(t[i])) : tPattern += ++tIncrementer    
  }
  return sPattern === tPattern 
}

const isFirstOccurence = function (word, index) {
  return !word.slice(0, index).includes(word[index])
}

console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('add', 'egg'))
console.log(isIsomorphic('ttoll', 'crall'))
console.log(isIsomorphic('rrppprggtt', 'eeoooeuuii'))
console.log(isIsomorphic('rorppejgg', 'gegooegtt'))
console.log(isIsomorphic("SEE", "SAW"))


